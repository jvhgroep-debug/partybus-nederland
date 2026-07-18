import type { GuideFaq, GuideLink } from '../guides/pricingGuide';
import type { GuideImageAsset } from '../guides/guideImages';

export type KennisbankSection = {
	id: string;
	title: string;
	paragraphs: readonly string[];
	/** Optional image after this section */
	imageKey?: string;
	/** Optional related deep-link shown under the section */
	moreLink?: { label: string; href: string };
};

export type ComparisonRow = {
	aspect: string;
	partybus: string;
	touringcar: string;
	limousine: string;
	taxi: string;
};

export type KennisbankArticle = {
	slug: string;
	path: string;
	canonical: string;
	seoTitle: string;
	metaDescription: string;
	h1: string;
	eyebrow: string;
	lead: string;
	heroImage: GuideImageAsset;
	ctaImage: GuideImageAsset;
	sections: readonly KennisbankSection[];
	comparison: {
		title: string;
		lead: string;
		rows: readonly ComparisonRow[];
	};
	checklist: {
		title: string;
		lead: string;
		items: readonly string[];
	};
	faqs: readonly GuideFaq[];
	summary: {
		title: string;
		paragraphs: readonly string[];
	};
	cta: {
		title: string;
		lead: string;
	};
	relatedLinks: readonly GuideLink[];
	cityLinks: readonly GuideLink[];
	trustNote: string;
};
