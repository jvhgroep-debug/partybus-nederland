import { emailSettings } from '../settings/email';
import { whatsapp } from '../settings/whatsapp';

const SITE = 'https://www.partybusnederland.nl';

export const trustNav = [
	{ label: 'Over ons', href: '/over-ons/' },
	{ label: 'Hoe werkt het', href: '/hoe-werkt-het/' },
	{ label: 'Contact', href: '/contact/' },
] as const;

/** Juridische footerregel — zonder Contact (staat al in trustNav). */
export const footerLegalNav = [
	{ label: 'Privacybeleid', href: '/privacybeleid/' },
	{ label: 'Cookiebeleid', href: '/cookiebeleid/' },
	{ label: 'Algemene voorwaarden', href: '/algemene-voorwaarden/' },
	{ label: 'Disclaimer', href: '/disclaimer/' },
] as const;

export const overOnsPage = {
	path: '/over-ons/',
	canonical: `${SITE}/over-ons/`,
	title: 'Over Partybus Nederland | Onafhankelijk vergelijkingsplatform',
	description:
		'Wie is Partybus Nederland? Een onafhankelijk platform voor informatie en vrijblijvende offertes over partybus huren in Nederland.',
	h1: 'Over Partybus Nederland',
	lead: 'Partybus Nederland helpt groepen overzicht te krijgen bij partybus huren: met praktische informatie, landelijke dekking en vrijblijvende aanvragen die naar geschikte aanbieders kunnen worden doorgestuurd.',
	ctaTitle: 'Klaar om offertes te vergelijken?',
	ctaLead: 'Vul je wensen in en vraag vrijblijvend meerdere offertes aan — zonder beschikbaarheidsgarantie.',
} as const;

export const hoeWerktHetPage = {
	path: '/hoe-werkt-het/',
	canonical: `${SITE}/hoe-werkt-het/`,
	title: 'Hoe werkt Partybus Nederland? | Stappenplan offertes',
	description:
		'Zo werkt Partybus Nederland: wensen invullen, aanvraag controleren, aanbieders benaderen, mogelijkheden vergelijken en zelf kiezen.',
	h1: 'Hoe werkt Partybus Nederland?',
	lead: 'In vijf stappen van jouw wensen naar vergelijkbare offertes. Aanvragen zijn vrijblijvend. Prijzen en beschikbaarheid verschillen per aanbieder.',
	steps: [
		{
			title: 'Wensen invullen',
			text: 'Je geeft door wat je nodig hebt: datum, vertrekplaats, bestemming, groepsgrootte (tot maximaal 80 personen, afhankelijk van voertuig) en eventuele wensen.',
		},
		{
			title: 'Aanvraag controleren',
			text: 'We kijken of de aanvraag compleet genoeg is om door te zetten. Ontbrekende kerngegevens kunnen we bij je navragen, zodat aanbieders een bruikbaar voorstel kunnen doen.',
		},
		{
			title: 'Geschikte aanbieders benaderen',
			text: 'Je aanvraag kan worden doorgestuurd naar relevante aanbieders. Partybus Nederland bezit niet zelf alle partybussen — we zijn een vergelijkingsplatform.',
		},
		{
			title: 'Mogelijkheden vergelijken',
			text: 'Je ontvangt voorstellen of reacties die je naast elkaar kunt leggen. Let op wat is inbegrepen: uren, route, capaciteit en voorwaarden.',
		},
		{
			title: 'Zelf een keuze maken',
			text: 'Jij besluit of en bij wie je boekt. Er is geen verplichting om een offerte te accepteren. Beschikbaarheid garanderen we niet — dat bepaalt de aanbieder.',
		},
	],
} as const;

/** Organization schema — alleen feitelijke, bekende gegevens. Geen adres of reviews. */
export function buildOrganizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Partybus Nederland',
		url: `${SITE}/`,
		email: emailSettings.inbox,
		telephone: `+${whatsapp.phone}`,
		description:
			'Onafhankelijk informatie- en vergelijkingsplatform voor partybus huren in Nederland.',
	};
}

export function buildAboutPageSchema(opts: { name: string; description: string; url: string }) {
	return {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: opts.name,
		description: opts.description,
		url: opts.url,
		inLanguage: 'nl-NL',
		isPartOf: {
			'@type': 'WebSite',
			name: 'Partybus Nederland',
			url: `${SITE}/`,
		},
	};
}

export function buildContactPageSchema(opts: { name: string; description: string; url: string }) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		name: opts.name,
		description: opts.description,
		url: opts.url,
		inLanguage: 'nl-NL',
		isPartOf: {
			'@type': 'WebSite',
			name: 'Partybus Nederland',
			url: `${SITE}/`,
		},
	};
}
