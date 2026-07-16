export const site = {
	name: 'Partybus Nederland',
	companyName: 'Partybus Nederland',
	tagline: 'Informatie, tips & partybussen vergelijken in Nederland',
	colors: {
		primary: '#CDB880',
		background: '#000000',
		text: '#FFFFFF',
	},
	language: 'nl-NL',
	url: 'https://partybusnederland.nl',
} as const;

export type SiteSettings = typeof site;