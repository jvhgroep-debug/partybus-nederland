export type RouteCategory =
	| 'Stad'
	| 'Festival'
	| 'Luchthaven'
	| 'Bedrijfsuitje'
	| 'Vrijgezellenfeest'
	| 'Bruiloft';

export type RouteFaq = {
	question: string;
	answer: string;
};

export type RouteBreadcrumb = {
	label: string;
	href?: string;
};

export type RouteLink = {
	label: string;
	href: string;
};

/**
 * Scalable route page data model.
 * URL path is always `/partybus-{slug}/` and must be set explicitly (never invented elsewhere).
 */
export type RoutePageData = {
	/** URL segment after /partybus- , e.g. rotterdam-amsterdam */
	slug: string;
	/** Full path including trailing slash */
	path: string;
	canonical: string;
	departureCity: string;
	departureSlug: string;
	destination: string;
	destinationSlug?: string;
	category: RouteCategory;
	distanceKm: number;
	travelTime: string;
	recommendedVehicle: string;
	seoTitle: string;
	metaDescription: string;
	h1: string;
	heroSubtitle: string;
	intro: {
		title: string;
		paragraphs: readonly string[];
		image: string;
		imageAlt: string;
	};
	cta: {
		title: string;
		text: string;
		whatsappHref: string;
		image: string;
	};
	faqs: readonly RouteFaq[];
	breadcrumbs: readonly RouteBreadcrumb[];
	relatedRoutes: readonly RouteLink[];
	relatedCities: readonly RouteLink[];
	departureCityPath: string;
};
