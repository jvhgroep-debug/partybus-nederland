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
	{
		slug: 'rotterdam',
		name: 'Rotterdam',
		path: '/steden/partybus-huren-rotterdam/',
	},
	{
		slug: 'den-haag',
		name: 'Den Haag',
		path: '/steden/partybus-huren-den-haag/',
	},
	{
		slug: 'utrecht',
		name: 'Utrecht',
		path: '/steden/partybus-huren-utrecht/',
	},
	{
		slug: 'eindhoven',
		name: 'Eindhoven',
		path: '/steden/partybus-huren-eindhoven/',
	},
	{
		slug: 'breda',
		name: 'Breda',
		path: '/steden/partybus-huren-breda/',
	},
	{
		slug: 'tilburg',
		name: 'Tilburg',
		path: '/steden/partybus-huren-tilburg/',
	},
	{
		slug: 'groningen',
		name: 'Groningen',
		path: '/steden/partybus-huren-groningen/',
	},
	{
		slug: 'nijmegen',
		name: 'Nijmegen',
		path: '/steden/partybus-huren-nijmegen/',
	},
	{
		slug: 'arnhem',
		name: 'Arnhem',
		path: '/steden/partybus-huren-arnhem/',
	},
	{
		slug: 'maastricht',
		name: 'Maastricht',
		path: '/steden/partybus-huren-maastricht/',
	},
	{
		slug: 'haarlem',
		name: 'Haarlem',
		path: '/steden/partybus-huren-haarlem/',
	},
	{
		slug: 'almere',
		name: 'Almere',
		path: '/steden/partybus-huren-almere/',
	},
	{
		slug: 'apeldoorn',
		name: 'Apeldoorn',
		path: '/steden/partybus-huren-apeldoorn/',
	},
	{
		slug: 'zwolle',
		name: 'Zwolle',
		path: '/steden/partybus-huren-zwolle/',
	},
	{
		slug: 'leiden',
		name: 'Leiden',
		path: '/steden/partybus-huren-leiden/',
	},
	{
		slug: 'dordrecht',
		name: 'Dordrecht',
		path: '/steden/partybus-huren-dordrecht/',
	},
	{
		slug: 'enschede',
		name: 'Enschede',
		path: '/steden/partybus-huren-enschede/',
	},
	{
		slug: 'amersfoort',
		name: 'Amersfoort',
		path: '/steden/partybus-huren-amersfoort/',
	},
	{
		slug: 'den-bosch',
		name: "'s-Hertogenbosch",
		path: '/steden/partybus-huren-den-bosch/',
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
