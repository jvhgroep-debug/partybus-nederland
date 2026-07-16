import { whatsapp } from '../settings/whatsapp';
import type { RouteCategory, RoutePageData } from './types';

const SITE = 'https://www.partybusnederland.nl';
const HERO = '/images/hero-partybus.png';
const INTRO_IMG = '/images/interior-partybus.png';
const CTA_IMG = '/images/partybus-arena.png';

function cityPath(slug: string): string {
	return `/steden/partybus-huren-${slug}/`;
}

function routePath(slug: string): string {
	return `/partybus-${slug}/`;
}

function routeCanonical(slug: string): string {
	return `${SITE}${routePath(slug)}`;
}

function buildFaqs(
	departure: string,
	destination: string,
	category: RouteCategory,
	distanceKm: number,
	travelTime: string,
) {
	return [
		{
			question: `Wat kost een partybus van ${departure} naar ${destination}?`,
			answer: `De prijs hangt onder meer af van datum, duur, groepsgrootte en type partybus. Vraag vrijblijvend meerdere offertes aan voor deze rit van ongeveer ${distanceKm} km.`,
		},
		{
			question: 'Hoeveel personen kunnen mee?',
			answer:
				'Partybus Nederland vergelijkt mogelijkheden voor groepen tot maximaal 80 personen. De exacte capaciteit verschilt per aanbieder en voertuig.',
		},
		{
			question: `Hoe lang duurt de rit van ${departure} naar ${destination}?`,
			answer: `Reken globaal op ongeveer ${travelTime}, afhankelijk van verkeer, opstapplaatsen en eventuele tussenstops.`,
		},
		{
			question: 'Kunnen we meerdere opstapplaatsen kiezen?',
			answer:
				'Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met de aanbieder. Vermeld alle stops duidelijk in je aanvraag.',
		},
		{
			question: `Is deze rit geschikt als ${category.toLowerCase()}?`,
			answer: `Ja, deze route wordt vaak aangevraagd voor een ${category.toLowerCase()}. Geef gelegenheid en wensen mee zodat aanbieders passend kunnen reageren.`,
		},
		{
			question: 'Waar let ik op bij offertes voor deze route?',
			answer:
				'Vergelijk capaciteit, wachttijd, meerdere opstapplaatsen, wat bij muziek en licht hoort, en annuleringsvoorwaarden. Er is geen vaste landelijke prijs.',
		},
	] as const;
}

function baseRoute(
	partial: Omit<RoutePageData, 'path' | 'canonical' | 'breadcrumbs' | 'cta' | 'faqs' | 'intro'> & {
		introParagraphs: readonly string[];
		faqs?: RoutePageData['faqs'];
	},
): RoutePageData {
	const path = routePath(partial.slug);
	const canonical = routeCanonical(partial.slug);

	return {
		...partial,
		path,
		canonical,
		intro: {
			title: partial.h1,
			paragraphs: partial.introParagraphs,
			image: INTRO_IMG,
			imageAlt: 'Interieur van een luxe partybus',
		},
		cta: {
			title: `Gratis offertes voor partybus ${partial.departureCity} – ${partial.destination}`,
			text: `Vergelijk vrijblijvend meerdere aanbieders voor jouw rit van ${partial.departureCity} naar ${partial.destination}.`,
			whatsappHref: whatsapp.href,
			image: CTA_IMG,
		},
		faqs:
			partial.faqs ??
			buildFaqs(
				partial.departureCity,
				partial.destination,
				partial.category,
				partial.distanceKm,
				partial.travelTime,
			),
		breadcrumbs: [
			{ label: 'Home', href: '/' },
			{ label: `Partybus ${partial.departureCity}`, href: partial.departureCityPath },
			{ label: `${partial.departureCity} – ${partial.destination}` },
		],
		heroSubtitle: partial.heroSubtitle,
	};
}

/**
 * Pilot route set only — no mass generation.
 * Expand this list later when generating more routes.
 */
export const routePages: readonly RoutePageData[] = [
	baseRoute({
		slug: 'rotterdam-amsterdam',
		departureCity: 'Rotterdam',
		departureSlug: 'rotterdam',
		destination: 'Amsterdam',
		destinationSlug: 'amsterdam',
		category: 'Stad',
		distanceKm: 75,
		travelTime: '1 tot 1,5 uur',
		recommendedVehicle: 'Partybus 30–50 personen',
		seoTitle: 'Partybus Rotterdam – Amsterdam | Tips, afstand & offertes',
		metaDescription:
			'Partybus Rotterdam – Amsterdam: info over afstand (~75 km), reistijd, tips en kostenfactoren. Vergelijk daarna vrijblijvend offertes.',
		h1: 'Partybus van Rotterdam naar Amsterdam',
		heroSubtitle:
			'Tips en planning voor de rit Rotterdam – Amsterdam — daarna vrijblijvend offertes vergelijken.',
		departureCityPath: cityPath('rotterdam'),
		relatedRoutes: [
			{ label: 'Rotterdam – Schiphol', href: routePath('rotterdam-schiphol') },
			{ label: 'Rotterdam – Tomorrowland', href: routePath('rotterdam-tomorrowland') },
			{ label: 'Den Haag – Utrecht', href: routePath('den-haag-utrecht') },
		],
		relatedCities: [
			{ label: 'Partybus huren Rotterdam', href: cityPath('rotterdam') },
			{ label: 'Partybus huren Amsterdam', href: cityPath('amsterdam') },
			{ label: 'Partybus huren Den Haag', href: cityPath('den-haag') },
		],
		introParagraphs: [
			'Vanuit Rotterdam reis je met een partybus comfortabel naar Amsterdam. Ideaal voor nightlife, vrijgezellenfeesten of een avond met de hele groep bij elkaar.',
			'Stem opstapplaatsen in Rotterdam af — bijvoorbeeld Centraal, Kop van Zuid of Ahoy — en rijd door naar populaire Amsterdamse hotspots. Reken globaal op 1 tot 1,5 uur, afhankelijk van verkeer en stops.',
			'Er is geen vaste prijs: datum, duur en groepsgrootte bepalen de offerte. Vergelijk via Partybus Nederland vrijblijvend meerdere voorstellen voor deze stadsrit van ongeveer 75 km.',
		],
	}),
	baseRoute({
		slug: 'rotterdam-schiphol',
		departureCity: 'Rotterdam',
		departureSlug: 'rotterdam',
		destination: 'Schiphol',
		category: 'Luchthaven',
		distanceKm: 65,
		travelTime: '45 tot 75 minuten',
		recommendedVehicle: 'Partybus of luxe groepsshuttle',
		seoTitle: 'Partybus Rotterdam – Schiphol | Tips & offertes',
		metaDescription:
			'Partybus Rotterdam – Schiphol: praktische info over luchthavenvervoer, bagage en reistijd. Vergelijk daarna vrijblijvend offertes.',
		h1: 'Partybus van Rotterdam naar Schiphol',
		heroSubtitle:
			'Praktische tips voor groepsvervoer Rotterdam – Schiphol, plus vrijblijvend offertes vergelijken.',
		departureCityPath: cityPath('rotterdam'),
		relatedRoutes: [
			{ label: 'Rotterdam – Amsterdam', href: routePath('rotterdam-amsterdam') },
			{ label: 'Rotterdam – Tomorrowland', href: routePath('rotterdam-tomorrowland') },
			{ label: 'Den Haag – Utrecht', href: routePath('den-haag-utrecht') },
		],
		relatedCities: [
			{ label: 'Partybus huren Rotterdam', href: cityPath('rotterdam') },
			{ label: 'Partybus huren Amsterdam', href: cityPath('amsterdam') },
			{ label: 'Partybus huren Den Haag', href: cityPath('den-haag') },
		],
		introParagraphs: [
			'Voor groepen die vanuit Rotterdam naar Schiphol willen, is een partybus een praktische optie. Iedereen reist samen, met bagage en zonder losse taxi’s.',
			'Geef aankomst- of vertrektijd, aantal personen en bagagewensen door, zodat aanbieders een passende rit kunnen voorstellen. Reken globaal op 45 tot 75 minuten.',
			'Vergelijk gratis meerdere offertes via Partybus Nederland voor deze luchthavenrit van ongeveer 65 km — zonder vaste landelijke tarieven.',
		],
	}),
	baseRoute({
		slug: 'rotterdam-tomorrowland',
		departureCity: 'Rotterdam',
		departureSlug: 'rotterdam',
		destination: 'Tomorrowland',
		category: 'Festival',
		distanceKm: 140,
		travelTime: '2 tot 2,5 uur',
		recommendedVehicle: 'Partybus 40–80 personen',
		seoTitle: 'Partybus Rotterdam – Tomorrowland | Festivalgids & offertes',
		metaDescription:
			'Partybus Rotterdam – Tomorrowland: tips voor festivalverkeer, heen- en terugrit en planning. Vergelijk daarna vrijblijvend offertes.',
		h1: 'Partybus van Rotterdam naar Tomorrowland',
		heroSubtitle:
			'Festivalplanning Rotterdam – Tomorrowland uitgelegd — daarna vrijblijvend offertes vergelijken.',
		departureCityPath: cityPath('rotterdam'),
		relatedRoutes: [
			{ label: 'Breda – Defqon.1', href: routePath('breda-defqon') },
			{ label: 'Rotterdam – Amsterdam', href: routePath('rotterdam-amsterdam') },
			{ label: 'Rotterdam – Schiphol', href: routePath('rotterdam-schiphol') },
		],
		relatedCities: [
			{ label: 'Partybus huren Rotterdam', href: cityPath('rotterdam') },
			{ label: 'Partybus huren Breda', href: cityPath('breda') },
			{ label: 'Partybus huren Eindhoven', href: cityPath('eindhoven') },
		],
		introParagraphs: [
			'Vanuit Rotterdam regel je een partybus naar Tomorrowland in België. De groep vertrekt samen en de sfeer begint al onderweg.',
			'Vermeld festivaldag(en), opstapplaats en of je heen- én terugrit nodig hebt. Houd rekening met festivalverkeer; beschikbaarheid verschilt per aanbieder en periode.',
			'Vergelijk vrijblijvend meerdere offertes via Partybus Nederland voor deze festivalroute van ongeveer 140 km.',
		],
	}),
	baseRoute({
		slug: 'breda-defqon',
		departureCity: 'Breda',
		departureSlug: 'breda',
		destination: 'Defqon.1',
		category: 'Festival',
		distanceKm: 110,
		travelTime: '1,5 tot 2 uur',
		recommendedVehicle: 'Partybus 40–80 personen',
		seoTitle: 'Partybus Breda – Defqon.1 | Festivalgids & offertes',
		metaDescription:
			'Partybus Breda – Defqon.1: tips voor hardstyle-festivalvervoer, reistijd en planning. Vergelijk daarna vrijblijvend offertes.',
		h1: 'Partybus van Breda naar Defqon.1',
		heroSubtitle:
			'Tips voor een festivalrit Breda – Defqon.1 — daarna vrijblijvend offertes vergelijken.',
		departureCityPath: cityPath('breda'),
		relatedRoutes: [
			{ label: 'Rotterdam – Tomorrowland', href: routePath('rotterdam-tomorrowland') },
			{ label: 'Rotterdam – Amsterdam', href: routePath('rotterdam-amsterdam') },
			{ label: 'Den Haag – Utrecht', href: routePath('den-haag-utrecht') },
		],
		relatedCities: [
			{ label: 'Partybus huren Breda', href: cityPath('breda') },
			{ label: 'Partybus huren Rotterdam', href: cityPath('rotterdam') },
			{ label: 'Partybus huren Tilburg', href: cityPath('tilburg') },
		],
		introParagraphs: [
			'Vanuit Breda is Defqon.1 een populaire festivalbestemming per partybus. Reis als groep, met muziek en comfort onderweg.',
			'Geef festivaldatum, aantal personen en gewenste opstap in Breda door — bijvoorbeeld Centraal, Grote Markt of Havenkwartier. Reken globaal op 1,5 tot 2 uur.',
			'Vergelijk gratis meerdere offertes via Partybus Nederland voor deze festivalrit van ongeveer 110 km.',
		],
	}),
	baseRoute({
		slug: 'den-haag-utrecht',
		departureCity: 'Den Haag',
		departureSlug: 'den-haag',
		destination: 'Utrecht',
		destinationSlug: 'utrecht',
		category: 'Stad',
		distanceKm: 70,
		travelTime: '1 tot 1,25 uur',
		recommendedVehicle: 'Partybus 20–50 personen',
		seoTitle: 'Partybus Den Haag – Utrecht | Tips, afstand & offertes',
		metaDescription:
			'Partybus Den Haag – Utrecht: info over afstand, reistijd en plannings tips. Vergelijk daarna vrijblijvend offertes.',
		h1: 'Partybus van Den Haag naar Utrecht',
		heroSubtitle:
			'Tips en planning voor Den Haag – Utrecht — daarna vrijblijvend offertes vergelijken.',
		departureCityPath: cityPath('den-haag'),
		relatedRoutes: [
			{ label: 'Rotterdam – Amsterdam', href: routePath('rotterdam-amsterdam') },
			{ label: 'Rotterdam – Schiphol', href: routePath('rotterdam-schiphol') },
			{ label: 'Breda – Defqon.1', href: routePath('breda-defqon') },
		],
		relatedCities: [
			{ label: 'Partybus huren Den Haag', href: cityPath('den-haag') },
			{ label: 'Partybus huren Utrecht', href: cityPath('utrecht') },
			{ label: 'Partybus huren Rotterdam', href: cityPath('rotterdam') },
		],
		introParagraphs: [
			'Vanuit Den Haag rijd je met een partybus comfortabel naar Utrecht. Geschikt voor uitgaan, vrijgezellenfeesten of een bedrijfsuitje.',
			'Kies een opstapplaats in Den Haag — denk aan Centraal of het centrum — en combineer desgewenst stops in Utrecht rond Domtoren of Oudegracht.',
			'Vergelijk vrijblijvend meerdere offertes via Partybus Nederland voor deze stadsrit van ongeveer 70 km. Prijs hangt af van datum, duur en groepsgrootte.',
		],
	}),
];

export function getRouteBySlug(slug: string): RoutePageData | undefined {
	return routePages.find((route) => route.slug === slug);
}

export function getAllRouteSlugs(): string[] {
	return routePages.map((route) => route.slug);
}

export const ROUTE_CATEGORIES: readonly RouteCategory[] = [
	'Stad',
	'Festival',
	'Luchthaven',
	'Bedrijfsuitje',
	'Vrijgezellenfeest',
	'Bruiloft',
] as const;
