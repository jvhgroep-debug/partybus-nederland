import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const contentPath = path.join(root, 'src', 'data', 'gidsen', 'content', 'index.ts');

function walk(dir, acc = []) {
	if (!fs.existsSync(dir)) return acc;
	for (const entry of fs.readdirSync(dir)) {
		const full = path.join(dir, entry);
		if (fs.statSync(full).isDirectory()) walk(full, acc);
		else if (entry.endsWith('.html')) acc.push(full);
	}
	return acc;
}

function extractSlugBlocks(source) {
	const blocks = [];
	const re = /slug:\s*'([^']+)'/g;
	let match;
	while ((match = re.exec(source))) {
		blocks.push({ slug: match[1], index: match.index });
	}
	return blocks;
}

function sliceGuide(source, start, end) {
	return source.slice(start, end);
}

function countWords(text) {
	return text.split(/\s+/).filter(Boolean).length;
}

function countGuideWords(block) {
	const strings = [...block.matchAll(/'((?:\\'|[^'])*)'/g)].map((m) => m[1].replace(/\\'/g, "'"));
	return strings.reduce((sum, s) => sum + countWords(s), 0);
}

function samplePhrases(block, n = 8) {
	const paras = [...block.matchAll(/'([^']{80,220})'/g)].map((m) => m[1]);
	return paras.slice(0, n);
}

const source = fs.readFileSync(contentPath, 'utf8');
const slugStarts = extractSlugBlocks(source);
const guides = slugStarts.map((item, i) => {
	const end = i + 1 < slugStarts.length ? slugStarts[i + 1].index : source.length;
	const block = sliceGuide(source, item.index, end);
	return {
		slug: item.slug,
		words: countGuideWords(block),
		phrases: samplePhrases(block),
		faqCount: (block.match(/question:/g) || []).length,
		sectionCount: (block.match(/titleId:/g) || []).length,
	};
});

const files = walk(dist);
const titles = new Map();
const descs = new Map();
const issues = [];
const gidsenHtml = {};

for (const file of files) {
	const html = fs.readFileSync(file, 'utf8');
	const rel = file.replace(dist, '').replace(/\\/g, '/');
	const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
	const desc = html.match(/name="description" content="([^"]*)"/)?.[1];
	const canonical = html.match(/rel="canonical" href="([^"]*)"/)?.[1];
	const h1Matches = [...html.matchAll(/<h1[^>]*>/g)];
	const og = /property="og:title"/.test(html);
	const tw = /name="twitter:card"/.test(html) || /name="twitter:title"/.test(html);
	const breadcrumb = html.includes('BreadcrumbList');
	const webpage = html.includes('"@type":"WebPage"') || html.includes('"@type": "WebPage"');
	const faq = html.includes('FAQPage');
	const imgMissingAlt = [...html.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\balt=/.test(m[0]));
	const brokenChars = /Ã.|â€|�/.test(html);

	if (title) {
		if (titles.has(title)) issues.push(`dup title: ${title}`);
		else titles.set(title, rel);
	} else if (!rel.includes('404')) issues.push(`no title: ${rel}`);

	if (desc) {
		if (descs.has(desc)) issues.push(`dup desc: ${rel}`);
		else descs.set(desc, rel);
	} else if (!rel.includes('404')) issues.push(`no desc: ${rel}`);

	if (!canonical && !rel.includes('404')) issues.push(`no canonical: ${rel}`);
	if (h1Matches.length !== 1 && !rel.includes('404')) {
		issues.push(`h1 count ${h1Matches.length}: ${rel}`);
	}
	if (imgMissingAlt.length) issues.push(`missing alt (${imgMissingAlt.length}): ${rel}`);
	if (brokenChars) issues.push(`broken chars: ${rel}`);

	const m = rel.match(/\/gidsen\/([^/]+)\/index\.html/);
	if (m) {
		gidsenHtml[m[1]] = {
			title: Boolean(title),
			desc: Boolean(desc),
			canonical: Boolean(canonical),
			h1: h1Matches.length,
			og,
			tw,
			breadcrumb,
			webpage,
			faq,
			images: (html.match(/<img\b/g) || []).length,
			internalLinks: (html.match(/href="\/[^"]+"/g) || []).length,
		};
	}
}

// Internal link 404 check (relative site links only)
const existingPaths = new Set(
	files.map((f) => {
		let p = f.replace(dist, '').replace(/\\/g, '/');
		if (p.endsWith('/index.html')) p = p.slice(0, -10) || '/';
		else if (p.endsWith('.html')) p = p.replace(/\.html$/, '');
		if (!p.endsWith('/') && p !== '/404') p += '/';
		return p;
	}),
);
existingPaths.add('/');

const link404 = new Set();
for (const file of files) {
	const html = fs.readFileSync(file, 'utf8');
	for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
		let href = match[1];
		if (!href.endsWith('/')) href += '/';
		if (href.startsWith('/#') || href === '//') continue;
		if (!existingPaths.has(href) && !existingPaths.has(href.replace(/\/$/, '') + '/')) {
			// allow /contact without trailing slash variants
			const alt = href.endsWith('/') ? href.slice(0, -1) : href + '/';
			const hasAlt =
				files.some((f) => f.replace(/\\/g, '/').includes(href.replace(/\/$/, ''))) ||
				files.some((f) => f.replace(/\\/g, '/').includes(alt.replace(/\/$/, '')));
			if (!hasAlt) link404.add(href);
		}
	}
}

// Similarity heuristic: shared long phrases across guides
const phraseMap = new Map();
for (const g of guides) {
	for (const phrase of g.phrases) {
		const key = phrase.slice(0, 60);
		if (!phraseMap.has(key)) phraseMap.set(key, []);
		phraseMap.get(key).push(g.slug);
	}
}
const sharedPhrases = [...phraseMap.entries()].filter(([, slugs]) => new Set(slugs).size > 1);

const reportGuides = guides.map((g) => {
	const html = gidsenHtml[g.slug] || {};
	let quality = 'goed';
	const notes = [];

	if (g.words < 2000) {
		quality = 'onvoldoende';
		notes.push(`Te kort (${g.words} woorden, doel ≥ 2000).`);
	} else if (g.words < 2200) {
		quality = 'verbeteren';
		notes.push(`Woordenaantal net boven drempel (${g.words}); weinig marge.`);
	}

	const shared = sharedPhrases.filter(([, slugs]) => slugs.includes(g.slug));
	if (shared.length >= 2) {
		quality = quality === 'goed' ? 'verbeteren' : quality;
		notes.push('Mogelijke overlapping met andere gidsen (gelijke zinsfragmenten).');
	}

	if (!html.faq) {
		quality = quality === 'goed' ? 'verbeteren' : quality;
		notes.push('FAQPage-schema of zichtbare FAQ ontbreekt in HTML.');
	}

	if ((html.images || 0) < 1) {
		quality = 'onvoldoende';
		notes.push('Geen ondersteunende afbeeldingen gevonden.');
	}

	if ((html.internalLinks || 0) < 5) {
		quality = quality === 'goed' ? 'verbeteren' : quality;
		notes.push('Weinig interne links.');
	}

	if (notes.length === 0) {
		notes.push('SEO, FAQ, afbeeldingen en interne links aanwezig. Doorlopende redactionele verfijning mogelijk.');
	}

	return { ...g, html, quality, notes };
});

const summary = {
	pages: files.length,
	gidsen: reportGuides.length,
	goed: reportGuides.filter((g) => g.quality === 'goed').length,
	verbeteren: reportGuides.filter((g) => g.quality === 'verbeteren').length,
	onvoldoende: reportGuides.filter((g) => g.quality === 'onvoldoende').length,
	issues,
	link404: [...link404].sort(),
	sharedPhraseCount: sharedPhrases.length,
};

fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
fs.writeFileSync(
	path.join(root, 'docs', '_audit-raw.json'),
	JSON.stringify({ summary, reportGuides }, null, 2),
);

console.log(JSON.stringify(summary, null, 2));
if (issues.length) console.error('SEO issues found');
