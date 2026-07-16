import type { GuideLink } from '../guides/pricingGuide';
import type { GuideImageAsset } from '../guides/guideImages';
import { guideImagePool } from '../guides/guideImages';
import { publishedCities } from '../cities/registry';
import { routePages } from '../routes/routes';
import type { GidsenGuideDef, GidsenPageData } from './types';
import { GIDSEN_HUB_LABEL, GIDSEN_HUB_PATH, gidsenCanonical, gidsenPath } from './registry';
import { hubGuideLinks } from './shared';
import { allGidsenDefinitions } from './content';

const IMAGE_KEYS = [
	'onderweg',
	'opstapplaats',
	'interieur',
	'festival',
	'aankomst',
	'terugreis',
	'luxeExterieur',
	'cta',
] as const;

type ImageKey = (typeof IMAGE_KEYS)[number];

function poolImage(key: ImageKey): GuideImageAsset {
	return guideImagePool[key];
}

function countWords(text: string): number {
	return text.split(/\s+/).filter(Boolean).length;
}

function countGuideWords(def: GidsenGuideDef): number {
	const chunks = [
		def.seo.lead,
		...def.sections.flatMap((s) => [s.lead, ...s.paragraphs]),
		...def.tips.flatMap((t) => [t.title, t.text]),
		...def.checklist,
		...def.faqs.flatMap((f) => [f.question, f.answer]),
	];
	return chunks.reduce((sum, chunk) => sum + countWords(chunk), 0);
}

function buildRelatedLinks(slugs: readonly string[], current: string): GuideLink[] {
	return slugs
		.filter((slug) => slug !== current)
		.map((slug) => {
			const match = hubGuideLinks.find((g) => g.slug === slug);
			return match
				? { label: match.label, href: gidsenPath(slug), description: match.description }
				: { label: slug, href: gidsenPath(slug) };
		});
}

function buildCityLinks(slugs: readonly string[]): GuideLink[] {
	return slugs
		.map((slug) => publishedCities.find((c) => c.slug === slug))
		.filter((city): city is (typeof publishedCities)[number] => Boolean(city))
		.map((city) => ({
			label: `Partybus huren ${city.name}`,
			href: city.path,
			description: `Festivalvervoer en groepsritten vanuit ${city.name}`,
		}));
}

function buildRouteLinks(slugs: readonly string[] = []): GuideLink[] {
	return slugs
		.map((slug) => routePages.find((r) => r.slug === slug))
		.filter(Boolean)
		.map((route) => ({
			label: `${route!.departureCity} – ${route!.destination}`,
			href: route!.path,
			description: route!.metaDescription.slice(0, 120),
		}));
}

export function buildGidsenPage(def: GidsenGuideDef): GidsenPageData {
	const positions: Array<'left' | 'right'> = ['right', 'left'];
	const visualSections = def.sections.map((section, index) => ({
		image: poolImage(IMAGE_KEYS[index % IMAGE_KEYS.length]),
		imagePosition: positions[index % 2],
		eyebrow: section.eyebrow,
		title: section.title,
		titleId: section.titleId,
		lead: section.lead,
		paragraphs: section.paragraphs,
	}));

	return {
		slug: def.slug,
		path: gidsenPath(def.slug),
		canonical: gidsenCanonical(def.slug),
		seo: def.seo,
		breadcrumbs: [
			{ label: 'Home', href: '/' },
			{ label: GIDSEN_HUB_LABEL, href: GIDSEN_HUB_PATH },
			{ label: def.seo.h1 },
		],
		visualSections,
		tips: def.tips,
		checklist: def.checklist,
		faqs: def.faqs,
		relatedGuideLinks: buildRelatedLinks(def.relatedSlugs, def.slug),
		cityLinks: buildCityLinks(def.citySlugs),
		routeLinks: buildRouteLinks(def.routeSlugs),
		hubLinks: hubGuideLinks
			.filter((g) => g.slug !== def.slug)
			.slice(0, 6)
			.map((g) => ({
				label: g.label,
				href: gidsenPath(g.slug),
				description: g.description,
			})),
		wordCount: countGuideWords(def),
	};
}

export function buildAllGidsenPages(): GidsenPageData[] {
	return allGidsenDefinitions.map(buildGidsenPage);
}
