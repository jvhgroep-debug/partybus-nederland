import type { CityFaq } from './types';

export type LocalCityImageRole =
	| 'hero'
	| 'nightlife'
	| 'wedding'
	| 'business'
	| 'pickup'
	| 'destination';

export type LocalCitySection = {
	id: string;
	title: string;
	paragraphs: readonly string[];
	imageRole?: Exclude<LocalCityImageRole, 'hero' | 'nightlife'>;
};

export type LocalCityTip = {
	title: string;
	text: string;
};

export type LocalCityProfile = {
	slug: string;
	intro: {
		title: string;
		/** Target: 250–400 words across these paragraphs. */
		paragraphs: readonly string[];
		imageAlt: string;
	};
	sections: readonly LocalCitySection[];
	tips: readonly LocalCityTip[];
	faqs: readonly CityFaq[];
	relatedCitySlugs: readonly string[];
	imageAlts: Record<LocalCityImageRole, string>;
};

export type LocalCityImage = {
	src: string;
	alt: string;
	width: 960;
	height: 540;
};

export type LocalCityImages = Record<LocalCityImageRole, LocalCityImage>;

export function buildLocalCityImages(profile: LocalCityProfile): LocalCityImages {
	const image = (role: LocalCityImageRole): LocalCityImage => ({
		src: `/images/cities/${profile.slug}/${role}.webp`,
		alt: profile.imageAlts[role],
		width: 960,
		height: 540,
	});

	return {
		hero: image('hero'),
		nightlife: image('nightlife'),
		wedding: image('wedding'),
		business: image('business'),
		pickup: image('pickup'),
		destination: image('destination'),
	};
}
