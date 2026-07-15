export type PublishedCity = {
	slug: string;
	name: string;
	path: string;
};

/**
 * Only cities with a live page belong here.
 * Related-city modules filter against this registry.
 */
export const publishedCities: readonly PublishedCity[] = [
	{
		slug: 'amsterdam',
		name: 'Amsterdam',
		path: '/steden/partybus-huren-amsterdam/',
	},
] as const;

export function getPublishedCity(slug: string): PublishedCity | undefined {
	return publishedCities.find((city) => city.slug === slug);
}

export function getRelatedCities(
	currentSlug: string,
	preferredSlugs: readonly string[] = [],
): PublishedCity[] {
	const preferred = preferredSlugs
		.map((slug) => getPublishedCity(slug))
		.filter((city): city is PublishedCity => Boolean(city) && city.slug !== currentSlug);

	if (preferred.length > 0) {
		return preferred;
	}

	return publishedCities.filter((city) => city.slug !== currentSlug);
}
