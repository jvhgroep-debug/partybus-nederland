import citiesData from '../data/cities/cities.json';

export const DEFAULT_CITY_FALLBACK_IMAGE = '/images/hero-partybus.png';
/** Shared fallback for non-city route pages. */
export const CITY_HERO_IMAGE = DEFAULT_CITY_FALLBACK_IMAGE;

export const CITY_HERO_IMAGE_WIDTH = 960;
export const CITY_HERO_IMAGE_HEIGHT = 540;

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

/** Every published pilot city has its own optimized WebP hero. */
export function resolveCityImagePath(slug: string): string {
	return `/images/cities/${slug}/hero.webp`;
}

export type ResolvedCityHeroImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

/** Hero image + city-specific alt text for a city page. */
export function resolveCityHeroImage(slug: string): ResolvedCityHeroImage {
	const record = getCityImageRecord(slug);

	return {
		src: resolveCityImagePath(slug),
		alt: record?.imageAlt ?? `Luxe partybus in ${record?.city ?? slug}`,
		width: CITY_HERO_IMAGE_WIDTH,
		height: CITY_HERO_IMAGE_HEIGHT,
	};
}
