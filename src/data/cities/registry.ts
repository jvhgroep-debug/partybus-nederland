import cityInventory from './cities.json';

export type PublishedCity = {
	slug: string;
	name: string;
	path: string;
};

/**
 * All cities with a live Astro page — derived from the WordPress inventory
 * so URL paths stay identical to www.partybusnederland.nl.
 */
export const publishedCities: readonly PublishedCity[] = cityInventory.cities.map((city) => ({
	slug: city.slug,
	name: city.city,
	path: new URL(city.url).pathname.endsWith('/')
		? new URL(city.url).pathname
		: `${new URL(city.url).pathname}/`,
}));

const publishedBySlug = new Map(publishedCities.map((city) => [city.slug, city] as const));

export function getPublishedCity(slug: string): PublishedCity | undefined {
	return publishedBySlug.get(slug);
}

export function getRelatedCities(
	currentSlug: string,
	preferredSlugs: readonly string[] = [],
): PublishedCity[] {
	const preferred = preferredSlugs
		.map((slug) => getPublishedCity(slug))
		.filter((city): city is PublishedCity => Boolean(city) && city.slug !== currentSlug)
		.slice(0, 5);

	if (preferred.length > 0) {
		return preferred;
	}

	return publishedCities.filter((city) => city.slug !== currentSlug).slice(0, 5);
}
