/**
 * Live inventory scraper for partybusnederland.nl /steden/ pages.
 * Read-only against live site; writes local inventory only.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const urlsPath = path.join(__dirname, '_steden-urls.json');
const outJson = path.join(root, 'src/data/cities/cities.json');
const reportPath = path.join(__dirname, '_steden-inventory-report.json');

const urls = JSON.parse(fs.readFileSync(urlsPath, 'utf8'));

function decodeHtml(s) {
	return s
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'")
		.replace(/&apos;/g, "'")
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
		.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function pick(html, re) {
	const m = html.match(re);
	return m ? decodeHtml(m[1].trim()) : '';
}

function cityFromUrl(url) {
	const m = url.match(/\/steden\/partybus-huren-([^/]+)\/?$/i);
	return m ? m[1] : '';
}

function slugToCityName(slug) {
	return slug
		.split('-')
		.map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
		.join(' ')
		.replace(/\bEn\b/g, 'en')
		.replace(/\bAan\b/g, 'aan')
		.replace(/\bDen\b/g, 'Den')
		.replace(/\bDe\b/g, 'de')
		.replace(/\bHet\b/g, 'het')
		.replace(/\bOp\b/g, 'op')
		.replace(/\bBij\b/g, 'bij');
}

function cityFromTitle(title, h1, slug) {
	for (const source of [h1, title]) {
		const m = source.match(/partybus huren\s+(.+?)(?:\s*\||$)/i);
		if (m) return m[1].trim();
	}
	return slugToCityName(slug);
}

async function fetchPage(url) {
	const controller = new AbortController();
	const t = setTimeout(() => controller.abort(), 25000);
	try {
		const res = await fetch(url, {
			redirect: 'follow',
			signal: controller.signal,
			headers: {
				'user-agent': 'PartybusInventoryBot/1.0 (+local rebuild inventory)',
				accept: 'text/html',
			},
		});
		const html = await res.text();
		return { status: res.status, html, finalUrl: res.url };
	} finally {
		clearTimeout(t);
	}
}

function analyze(url, status, html, finalUrl) {
	const slug = cityFromUrl(url);
	const title = pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
	const description =
		pick(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
		pick(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
	const canonical =
		pick(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
		pick(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
	const robots =
		pick(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i) ||
		pick(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots["']/i);
	const h1 = pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, '').trim();
	const city = cityFromTitle(title, h1, slug);

	const province =
		pick(html, /provincie[:\s]+([A-Za-zÀ-ÿ\- ]{3,30})/i) ||
		pick(html, /"province"\s*:\s*"([^"]+)"/i) ||
		'';

	const indexable = !/noindex/i.test(robots) && status >= 200 && status < 400;

	const related = [];
	const linkRe = /href=["'](https?:\/\/www\.partybusnederland\.nl)?(\/steden\/partybus-huren-[^"'#?]+)["']/gi;
	let m;
	const seen = new Set();
	while ((m = linkRe.exec(html))) {
		const pathOnly = m[2].endsWith('/') ? m[2] : m[2] + '/';
		if (seen.has(pathOnly)) continue;
		seen.add(pathOnly);
		const abs = `https://www.partybusnederland.nl${pathOnly}`;
		if (abs.replace(/\/$/, '') !== url.replace(/\/$/, '')) related.push(abs);
	}

	return {
		city,
		slug,
		url,
		title,
		description,
		h1,
		canonical: canonical || finalUrl || url,
		province: province || null,
		status: status === 200 ? 'live' : `http_${status}`,
		httpStatus: status,
		indexable,
		robots: robots || null,
		relatedCityUrls: related.slice(0, 50),
		relatedCityCount: related.length,
		finalUrl,
		urlPattern: '/steden/partybus-huren-{slug}/',
	};
}

async function mapPool(items, concurrency, fn) {
	const results = new Array(items.length);
	let i = 0;
	async function worker() {
		while (i < items.length) {
			const idx = i++;
			results[idx] = await fn(items[idx], idx);
		}
	}
	await Promise.all(Array.from({ length: concurrency }, () => worker()));
	return results;
}

const CONCURRENCY = 8;
console.log(`Scraping ${urls.length} city pages (concurrency ${CONCURRENCY})...`);

const rows = await mapPool(urls, CONCURRENCY, async (url, idx) => {
	try {
		const { status, html, finalUrl } = await fetchPage(url);
		const row = analyze(url, status, html, finalUrl);
		if ((idx + 1) % 25 === 0 || idx === 0) {
			console.log(`[${idx + 1}/${urls.length}] ${row.httpStatus} ${row.city}`);
		}
		return row;
	} catch (err) {
		console.log(`[${idx + 1}] FAIL ${url} ${err.message}`);
		const slug = cityFromUrl(url);
		return {
			city: slugToCityName(slug),
			slug,
			url,
			title: '',
			description: '',
			h1: '',
			canonical: url,
			province: null,
			status: 'error',
			httpStatus: 0,
			indexable: false,
			robots: null,
			relatedCityUrls: [],
			relatedCityCount: 0,
			finalUrl: url,
			urlPattern: '/steden/partybus-huren-{slug}/',
			error: String(err.message || err),
		};
	}
});

// Duplicates / patterns
const byCity = new Map();
const bySlug = new Map();
for (const r of rows) {
	const ck = r.city.toLowerCase();
	byCity.set(ck, (byCity.get(ck) || 0) + 1);
	bySlug.set(r.slug, (bySlug.get(r.slug) || 0) + 1);
}
const dupCities = [...byCity.entries()].filter(([, n]) => n > 1);
const dupSlugs = [...bySlug.entries()].filter(([, n]) => n > 1);
const broken = rows.filter((r) => r.httpStatus === 404 || r.status === 'error' || r.httpStatus >= 400);
const noindex = rows.filter((r) => !r.indexable && r.httpStatus === 200);
const nonCanon = rows.filter(
	(r) => r.canonical && r.canonical.replace(/\/$/, '') !== r.url.replace(/\/$/, ''),
);

// Broken related links (related pointing to non-inventory urls)
const liveSet = new Set(rows.map((r) => r.url.replace(/\/$/, '') + '/'));
const brokenInternal = [];
for (const r of rows) {
	for (const rel of r.relatedCityUrls) {
		const norm = rel.replace(/\/$/, '') + '/';
		if (!liveSet.has(norm)) brokenInternal.push({ from: r.url, to: rel });
	}
}

const citiesJson = {
	generatedAt: new Date().toISOString(),
	source: 'https://www.partybusnederland.nl',
	sitemap: 'https://www.partybusnederland.nl/steden-sitemap.xml',
	total: rows.length,
	urlPattern: '/steden/partybus-huren-{slug}/',
	cities: rows
		.slice()
		.sort((a, b) => a.city.localeCompare(b.city, 'nl'))
		.map((r) => ({
			city: r.city,
			slug: r.slug,
			url: r.url,
			title: r.title,
			description: r.description,
			h1: r.h1,
			canonical: r.canonical,
			province: r.province,
			status: r.status,
			httpStatus: r.httpStatus,
			indexable: r.indexable,
			relatedCityCount: r.relatedCityCount,
			relatedCityUrls: r.relatedCityUrls,
		})),
};

fs.mkdirSync(path.dirname(outJson), { recursive: true });
fs.writeFileSync(outJson, JSON.stringify(citiesJson, null, 2), 'utf8');

const report = {
	total: rows.length,
	live200: rows.filter((r) => r.httpStatus === 200).length,
	broken: broken.map((r) => ({ url: r.url, status: r.httpStatus, error: r.error })),
	duplicateCities: dupCities,
	duplicateSlugs: dupSlugs,
	noindexCount: noindex.length,
	noindexSamples: noindex.slice(0, 10).map((r) => r.url),
	canonicalMismatchCount: nonCanon.length,
	canonicalMismatchSamples: nonCanon.slice(0, 10).map((r) => ({ url: r.url, canonical: r.canonical })),
	brokenInternalLinkCount: brokenInternal.length,
	brokenInternalSamples: brokenInternal.slice(0, 15),
	urlPatterns: [...new Set(rows.map((r) => r.urlPattern))],
	missingTitles: rows.filter((r) => !r.title).length,
	missingH1: rows.filter((r) => !r.h1).length,
	missingDescription: rows.filter((r) => !r.description).length,
	amsterdam: rows.find((r) => r.slug === 'amsterdam') || null,
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
console.log('Wrote', outJson);
console.log('Report', reportPath);
console.log(JSON.stringify({ total: report.total, live200: report.live200, broken: report.broken.length, dups: report.duplicateCities.length }, null, 2));
