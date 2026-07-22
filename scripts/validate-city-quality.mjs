import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

const cities = [
	['amsterdam', 'Amsterdam'],
	['rotterdam', 'Rotterdam'],
	['den-haag', 'Den Haag'],
	['utrecht', 'Utrecht'],
	['eindhoven', 'Eindhoven'],
	['breda', 'Breda'],
	['tilburg', 'Tilburg'],
	['groningen', 'Groningen'],
	['nijmegen', 'Nijmegen'],
	['arnhem', 'Arnhem'],
	['maastricht', 'Maastricht'],
	['haarlem', 'Haarlem'],
	['almere', 'Almere'],
	['apeldoorn', 'Apeldoorn'],
	['zwolle', 'Zwolle'],
	['leiden', 'Leiden'],
	['dordrecht', 'Dordrecht'],
	['enschede', 'Enschede'],
	['amersfoort', 'Amersfoort'],
	['den-bosch', "'s-Hertogenbosch"],
];

const decode = (value) =>
	value
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&rsquo;|&#x2019;/g, '’')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>');

const stripHtml = (value) =>
	decode(
		value
			.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
			.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
			.replace(/<[^>]+>/g, ' '),
	)
		.replace(/\s+/g, ' ')
		.trim();

const results = [];
const metaDescriptions = new Set();

for (const [slug, name] of cities) {
	const pagePath = path.join(
		process.cwd(),
		'dist',
		'steden',
		`partybus-huren-${slug}`,
		'index.html',
	);
	const html = await readFile(pagePath, 'utf8');
	const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
	const words = stripHtml(main).split(/\s+/).filter(Boolean).length;
	const imageSources = [
		...main.matchAll(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/gi),
	].map((match) => match[1]);
	const uniqueLocalImages = new Set(
		imageSources.filter((src) => src.startsWith(`/images/cities/${slug}/`)),
	);
	const faqCount = (main.match(/<details\b[^>]*class="[^"]*city-faq__item/gi) ?? []).length;
	const cityLinks = new Set(
		[...main.matchAll(/href="(\/steden\/partybus-huren-[^"#?]+\/)"/gi)].map(
			(match) => match[1],
		),
	);
	const internalLinks = new Set(
		[...main.matchAll(/href="(\/[^"#?]*)[^"]*"/gi)].map((match) => match[1] || '/'),
	);
	const brokenLinks = [];
	for (const href of internalLinks) {
		const target =
			href === '/'
				? path.join(process.cwd(), 'dist', 'index.html')
				: path.join(process.cwd(), 'dist', href.replace(/^\/|\/$/g, ''), 'index.html');
		try {
			await access(target);
		} catch {
			brokenLinks.push(href);
		}
	}
	const h1Count = (main.match(/<h1\b/gi) ?? []).length;
	const canonical =
		html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ??
		html.match(/<link\s+href="([^"]+)"\s+rel="canonical"/i)?.[1] ??
		'';
	const metaDescription =
		html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1] ?? '';
	metaDescriptions.add(metaDescription);
	const expectedCanonical = `https://www.partybusnederland.nl/steden/partybus-huren-${slug}/`;
	const heroTag =
		main.match(
			new RegExp(
				`<img[^>]+src="/images/cities/${slug}/hero\\.webp"[^>]*>`,
				'i',
			),
		)?.[0] ?? '';
	const localLazyCount = [
		...main.matchAll(
			new RegExp(
				`<img[^>]+src="/images/cities/${slug}/(?!hero)[^"]+"[^>]*loading="lazy"[^>]*>`,
				'gi',
			),
		),
	].length;

	for (const role of ['hero', 'nightlife', 'wedding', 'business', 'pickup', 'destination']) {
		await access(
			path.join(
				process.cwd(),
				'public',
				'images',
				'cities',
				slug,
				`${role}.webp`,
			),
		);
	}

	const checks = {
		words: words >= 1200 && words <= 1800,
		images: uniqueLocalImages.size >= 6,
		faqs: faqCount >= 8,
		links: cityLinks.size >= 4,
		noBrokenLinks: brokenLinks.length === 0,
		h1: h1Count === 1,
		canonical: canonical === expectedCanonical,
		meta: Boolean(metaDescription),
		schema: html.includes('"@type":"FAQPage"') && html.includes('"@type":"WebPage"'),
		hero: heroTag.includes('loading="eager"') && heroTag.includes('fetchpriority="high"'),
		lazy: localLazyCount >= 5,
		characters: !html.includes('�') && !html.includes('â€™'),
	};

	results.push({
		name,
		slug,
		words,
		images: uniqueLocalImages.size,
		faqs: faqCount,
		internalLinks: cityLinks.size,
		seo: Object.values(checks).every(Boolean) ? 'OK' : 'CONTROLEREN',
		checks,
	});
}

if (metaDescriptions.size !== cities.length) {
	throw new Error(
		`Meta descriptions are not unique: ${metaDescriptions.size}/${cities.length}`,
	);
}

console.table(
	results.map(({ name, words, images, faqs, internalLinks, seo }) => ({
		Stad: name,
		Woorden: words,
		Afbeeldingen: images,
		FAQ: faqs,
		'Interne links': internalLinks,
		SEO: seo,
	})),
);

const failed = results.filter((result) => result.seo !== 'OK');
if (failed.length > 0) {
	console.error(JSON.stringify(failed, null, 2));
	process.exitCode = 1;
}
