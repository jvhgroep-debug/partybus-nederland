import type { APIRoute } from 'astro';
import { publishedCities } from '../data/cities/registry';
import { routePages } from '../data/routes/routes';
import { hubGuideLinks, legacyGuideLinks } from '../data/gidsen/shared';
import { gidsenPath } from '../data/gidsen/registry';
import { kennisbankArticles } from '../data/kennisbank/registry';
import { servicePages } from '../data/services/pages';
import { legalNav } from '../data/legal/pages';
import { trustNav } from '../data/trust/pages';

const SITE = 'https://www.partybusnederland.nl';

function loc(path: string): string {
	if (path.startsWith('http')) return path.endsWith('/') ? path : `${path}/`;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${SITE}${normalized.endsWith('/') ? normalized : `${normalized}/`}`;
}

function urlEntry(path: string): string {
	return `  <url>\n    <loc>${loc(path)}</loc>\n  </url>`;
}

export const GET: APIRoute = () => {
	const paths = new Set<string>([
		'/',
		'/gratis-partybus-offertes-aanvragen/',
		'/kennisbank/',
		'/gidsen/',
		...trustNav.map((item) => item.href),
		...legalNav.map((item) => item.href),
		...kennisbankArticles.map((article) => article.path),
		...hubGuideLinks.map((guide) => gidsenPath(guide.slug)),
		...legacyGuideLinks.map((item) => item.href),
		...servicePages.map((service) => service.path),
		...publishedCities.map((city) => city.path),
		...routePages.map((route) => route.path),
	]);

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		...paths,
	]
		.map((path) => urlEntry(path))
		.join('\n')}\n</urlset>\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
