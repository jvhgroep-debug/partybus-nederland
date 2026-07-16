import fs from 'node:fs';
import path from 'node:path';
import { CITY_IMAGE_STYLE } from '../config/cityImages';
import citiesData from '../data/cities/cities.json';

const PROJECT_ROOT = process.cwd();
const CITIES_PUBLIC_DIR = path.join(PROJECT_ROOT, 'public', 'images', 'cities');

/** Safe fallback when a city-specific file is not available yet. */
export const DEFAULT_CITY_FALLBACK_IMAGE = '/images/hero-partybus.png';

export const CITY_HERO_IMAGE_WIDTH = 1536;
export const CITY_HERO_IMAGE_HEIGHT = 1024;

const IMAGE_EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png'] as const;

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

function cityImageExists(filename: string): boolean {
	return fs.existsSync(path.join(CITIES_PUBLIC_DIR, filename));
}

/**
 * Resolves the public URL for a city hero image.
 * 1. Uses imageFilename from cities.json when the file exists.
 * 2. Falls back to the same basename with another supported extension.
 * 3. Falls back to the default partybus image so the hero never stays empty.
 */
export function resolveCityImagePath(slug: string): string {
	const record = getCityImageRecord(slug);
	const preferredFilename = record?.imageFilename ?? `partybus-${slug}.webp`;

	if (cityImageExists(preferredFilename)) {
		return `${CITY_IMAGE_STYLE.directory}${preferredFilename}`;
	}

	const baseName = preferredFilename.replace(/\.[^.]+$/, '');
	for (const extension of IMAGE_EXTENSIONS) {
		const candidate = `${baseName}${extension}`;
		if (cityImageExists(candidate)) {
			return `${CITY_IMAGE_STYLE.directory}${candidate}`;
		}
	}

	return DEFAULT_CITY_FALLBACK_IMAGE;
}

export type ResolvedCityHeroImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

/** Hero image + alt text for a city page, sourced from cities.json inventory. */
export function resolveCityHeroImage(slug: string): ResolvedCityHeroImage {
	const record = getCityImageRecord(slug);

	return {
		src: resolveCityImagePath(slug),
		alt: record?.imageAlt ?? `Luxe partybus in ${record?.city ?? slug}`,
		width: CITY_HERO_IMAGE_WIDTH,
		height: CITY_HERO_IMAGE_HEIGHT,
	};
}
