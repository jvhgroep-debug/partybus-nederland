import citiesData from '../data/cities/cities.json';

/**
 * Exact same hero asset as the homepage (`src/components/home/Hero.astro`).
 * Temporary: all city pages use this until unique city heroes are approved.
 */
export const CITY_HERO_IMAGE = '/images/hero-partybus.png';

/** @deprecated Use CITY_HERO_IMAGE — kept for compatibility. */
export const DEFAULT_CITY_FALLBACK_IMAGE = CITY_HERO_IMAGE;

export const CITY_HERO_IMAGE_WIDTH = 1536;
export const CITY_HERO_IMAGE_HEIGHT = 1024;

type CityInventoryRecord = {
	city: string;
	slug: string;
	imageFilename: string;
	imageAlt: string;
	landmark: string;
	imageStatus: string;
};

export function getCityImageRecord(slug: string): CityInventoryRecord | undefined {
	return citiesData.cities.find((entry) => entry.slug === slug);
}

/**
 * Visible city hero path.
 * Always returns the homepage hero. City-specific imageFilename paths are ignored for display.
 * Landmark / imageAlt / imagePrompt data in cities.json is preserved for later use.
 */
export function resolveCityImagePath(_slug: string): string {
	return CITY_HERO_IMAGE;
}

export type ResolvedCityHeroImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

/** Hero image + alt text for a city page. Alt stays city-specific; src is always homepage hero. */
export function resolveCityHeroImage(slug: string): ResolvedCityHeroImage {
	const record = getCityImageRecord(slug);

	return {
		src: CITY_HERO_IMAGE,
		alt: record?.imageAlt ?? `Luxe partybus in ${record?.city ?? slug}`,
		width: CITY_HERO_IMAGE_WIDTH,
		height: CITY_HERO_IMAGE_HEIGHT,
	};
}
