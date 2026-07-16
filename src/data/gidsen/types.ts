import type { GuideFactor, GuideFaq, GuideLink } from '../guides/pricingGuide';
import type { GuideVisualSection } from '../guides/guideVisualSections';

export type GidsenSeo = {
	title: string;
	description: string;
	h1: string;
	eyebrow: string;
	lead: string;
	ctaTitle: string;
	ctaLead: string;
	ogImage?: string;
};

export type GidsenProseSection = {
	eyebrow: string;
	title: string;
	titleId: string;
	lead: string;
	paragraphs: readonly string[];
};

export type GidsenGuideDef = {
	slug: string;
	seo: GidsenSeo;
	sections: readonly GidsenProseSection[];
	tips: readonly GuideFactor[];
	checklist: readonly string[];
	faqs: readonly GuideFaq[];
	relatedSlugs: readonly string[];
	citySlugs: readonly string[];
	routeSlugs?: readonly string[];
};

export type GidsenPageData = {
	slug: string;
	path: string;
	canonical: string;
	seo: GidsenSeo;
	breadcrumbs: readonly { label: string; href?: string }[];
	visualSections: GuideVisualSection[];
	tips: readonly GuideFactor[];
	checklist: readonly string[];
	faqs: readonly GuideFaq[];
	relatedGuideLinks: GuideLink[];
	cityLinks: GuideLink[];
	routeLinks: GuideLink[];
	hubLinks: GuideLink[];
	wordCount: number;
};
