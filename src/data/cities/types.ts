export type CityFaq = {
	question: string;
	answer: string;
};

export type CityWhyItem = {
	title: string;
	text: string;
	icon?: 'group' | 'party' | 'taxi' | 'route' | 'size' | 'clock';
};

export type CityLocation = {
	name: string;
	text: string;
	image: string;
};

export type CityActivity = {
	title: string;
	text: string;
	icon?: 'nightlife' | 'music' | 'festival' | 'boat' | 'culture' | 'sport';
};

export type CityOccasion = {
	title: string;
	text: string;
	image: string;
};

export type CityRelatedSlug = string;

/**
 * Master City Template data contract.
 * Every future city page (all 352) should implement this shape.
 */
export type CityPageData = {
	slug: string;
	name: string;
	path: string;
	canonical: string;
	metaTitle: string;
	metaDescription: string;
	h1: string;
	hero: {
		subtitle: string;
		image: string;
		imageAlt: string;
		trustItems?: readonly string[];
		whatsappHref?: string;
	};
	intro: {
		title: string;
		paragraphs: readonly [string, string, string] | readonly string[];
		image: string;
		imageAlt: string;
	};
	why: {
		title: string;
		lead?: string;
		items: readonly CityWhyItem[];
	};
	locations: {
		title: string;
		lead: string;
		items: readonly CityLocation[];
	};
	activities: {
		title: string;
		lead: string;
		items: readonly CityActivity[];
	};
	occasions: {
		title: string;
		lead?: string;
		items: readonly CityOccasion[];
	};
	pickup: {
		title: string;
		lead: string;
		items: readonly string[];
		note?: string;
	};
	/** Preferred related city slugs; only published pages are rendered. */
	relatedCitySlugs: readonly CityRelatedSlug[];
	faqs: readonly CityFaq[];
	cta: {
		title: string;
		text: string;
		whatsappHref: string;
		image: string;
	};
};
