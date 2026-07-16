/**
 * Reusable JSON-LD builders for guide pages (Star Local pSEO Suite).
 */

export type BreadcrumbItem = {
	label: string;
	href?: string;
};

export type FaqItem = {
	question: string;
	answer: string;
};

export function buildWebPageSchema(opts: {
	name: string;
	description: string;
	url: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: opts.name,
		description: opts.description,
		url: opts.url,
		inLanguage: 'nl-NL',
		isPartOf: {
			'@type': 'WebSite',
			name: 'Partybus Nederland',
			url: 'https://www.partybusnederland.nl/',
		},
	};
}

export function buildBreadcrumbSchema(
	items: readonly BreadcrumbItem[],
	siteOrigin = 'https://www.partybusnederland.nl',
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.label,
			...(item.href
				? { item: item.href.startsWith('http') ? item.href : `${siteOrigin}${item.href}` }
				: {}),
		})),
	};
}

export function buildFaqPageSchema(faqs: readonly FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}
