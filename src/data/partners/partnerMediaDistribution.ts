export type PartnerImageAsset = {
	src: string;
	width: number;
	height: number;
	alt: string;
};

export type PartnerCityMediaConfig = {
	desktopHeroes: readonly PartnerImageAsset[];
	mobileHeroes: readonly PartnerImageAsset[];
	gallery: readonly PartnerImageAsset[];
	gallerySize?: number;
};

export type PartnerCityMedia = {
	hero: PartnerImageAsset;
	mobileHero: PartnerImageAsset;
	gallery: readonly PartnerImageAsset[];
};

function hashKey(key: string): number {
	return [...key].reduce(
		(hash, character) => ((hash << 5) - hash + character.charCodeAt(0)) >>> 0,
		0,
	);
}

/**
 * Distributes a partner's approved media deterministically across pSEO pages.
 * Supplying a stable page index produces an even round-robin hero distribution.
 */
export function resolvePartnerCityMedia(
	config: PartnerCityMediaConfig,
	pageKey: string,
	pageIndex?: number,
): PartnerCityMedia {
	if (
		config.desktopHeroes.length === 0
		|| config.mobileHeroes.length === 0
		|| config.gallery.length === 0
	) {
		throw new Error('Partner city media requires desktop, mobile and gallery images.');
	}

	const seed = pageIndex !== undefined && pageIndex >= 0 ? pageIndex : hashKey(pageKey);
	const hero = config.desktopHeroes[seed % config.desktopHeroes.length];
	const mobileHero = config.mobileHeroes[seed % config.mobileHeroes.length];
	const gallerySize = Math.min(config.gallerySize ?? 3, config.gallery.length);
	const galleryStart = (seed * gallerySize) % config.gallery.length;
	const gallery = Array.from(
		{ length: gallerySize },
		(_, offset) => config.gallery[(galleryStart + offset) % config.gallery.length],
	);

	return { hero, mobileHero, gallery };
}
