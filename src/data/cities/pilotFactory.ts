import cityInventory from './cities.json';
import type { CityPageData } from './types';
import { whatsapp } from '../settings/whatsapp';
import {
	buildDepartureFaqs,
	buildDepartureIntro,
	buildDepartureSeo,
	buildFestivalSection,
	buildOccasionSection,
	buildPopularDestinations,
} from './departureContent';

type InventoryCity = (typeof cityInventory.cities)[number];
type InventoryCitySeo = InventoryCity & {
	seoTitle?: string;
	metaDescription?: string;
	heroTitle?: string;
	heroSubtitle?: string;
	h1?: string;
};

export const PILOT_CITY_SLUGS = [
	'amsterdam',
	'rotterdam',
	'den-haag',
	'utrecht',
	'eindhoven',
	'breda',
	'tilburg',
	'groningen',
	'nijmegen',
	'arnhem',
	'maastricht',
	'haarlem',
	'almere',
	'apeldoorn',
	'zwolle',
	'leiden',
	'dordrecht',
	'enschede',
	'amersfoort',
	'den-bosch',
] as const;

function cityBySlug(slug: string): InventoryCity | undefined {
	return cityInventory.cities.find((city) => city.slug === slug);
}

function relatedSlugs(currentSlug: string): string[] {
	return PILOT_CITY_SLUGS.filter((slug) => slug !== currentSlug).slice(0, 5);
}

const LOCAL_PICKUP_HINTS: Record<string, readonly string[]> = {
	amsterdam: ['Amsterdam Centraal', 'Station Sloterdijk', 'Station Zuid', 'Bijlmer ArenA'],
	rotterdam: ['Rotterdam Centraal', 'het centrum', 'Ahoy', 'Kop van Zuid'],
	'den-haag': ['Den Haag Centraal', 'het centrum', 'Scheveningen'],
	utrecht: ['Utrecht Centraal', 'het centrum', 'de Domtoren'],
	eindhoven: ['Eindhoven Centraal', 'het centrum', 'Strijp-S'],
	breda: ['Breda Centraal', 'Grote Markt', 'Havenkwartier'],
	tilburg: ['Tilburg Centraal', 'het centrum', 'de Spoorzone'],
	groningen: ['Groningen Centraal', 'het centrum', 'de Martinitoren'],
	nijmegen: ['Nijmegen Centraal', 'het centrum', 'de Waalkade'],
	arnhem: ['Arnhem Centraal', 'het centrum', 'de John Frostbrug'],
	maastricht: ['Maastricht Centraal', 'het centrum', 'het Vrijthof'],
	haarlem: ['Haarlem Centraal', 'Grote Markt', 'het centrum'],
	almere: ['Almere Centrum', 'het Weerwater', 'het centrum'],
	apeldoorn: ['Apeldoorn station', 'het centrum', 'Paleis Het Loo'],
	zwolle: ['Zwolle station', 'het centrum', 'de Sassenpoort'],
	leiden: ['Leiden Centraal', 'de Beestenmarkt', 'het centrum'],
	dordrecht: ['Dordrecht station', 'het centrum', 'de historische havens'],
	enschede: ['Enschede station', 'Oude Markt', 'het centrum'],
	amersfoort: ['Amersfoort Centraal', 'de Koppelpoort', 'het centrum'],
	'den-bosch': ["'s-Hertogenbosch station", 'de Markt', 'de Sint-Jan'],
};

function pickupHintsFor(slug: string, cityName: string, landmark: string): readonly string[] {
	return LOCAL_PICKUP_HINTS[slug] ?? [`Station ${cityName}`, `het centrum van ${cityName}`, landmark];
}

export function buildPilotCityPageData(slug: string): CityPageData | null {
	const city = cityBySlug(slug) as InventoryCitySeo | undefined;
	if (!city) return null;

	const cityName = city.city;
	const landmark = city.landmark;
	const seo = buildDepartureSeo(cityName);
	const intro = buildDepartureIntro(cityName);
	const destinations = buildPopularDestinations(city.slug);
	const festivals = buildFestivalSection(cityName);
	const occasions = buildOccasionSection(cityName);
	const pickups = pickupHintsFor(city.slug, cityName, landmark);

	return {
		slug: city.slug,
		name: cityName,
		path: new URL(city.url).pathname,
		canonical: city.canonical,
		metaTitle: seo.metaTitle,
		metaDescription: seo.metaDescription,
		h1: seo.h1,
		hero: {
			subtitle: seo.heroSubtitle,
			image: '/images/hero-partybus.png',
			imageAlt: city.imageAlt,
			whatsappHref: whatsapp.href,
			trustItems: [
				'Gratis offertes vergelijken',
				'Reactie binnen 24 uur',
				'Geschikt voor groepen tot 80 personen',
				'Ritten door Nederland en België',
			],
		},
		intro,
		why: {
			title: `Waarom vertrekken vanuit ${cityName}?`,
			lead: `Vanuit ${cityName} regel je groepsritten naar steden, festivals en evenementen.`,
			items: [
				{ title: 'Samen vertrekken', text: 'De hele groep stapt op in of rond jouw stad.', icon: 'group' },
				{ title: 'Sfeer onderweg', text: 'Muziek en verlichting maken van de rit een feest.', icon: 'party' },
				{ title: 'Elke bestemming', text: 'Nederland, België, festivals of evenementenlocaties.', icon: 'route' },
			],
		},
		locations: destinations,
		activities: festivals,
		occasions,
		pickup: {
			title: `Opstappen in ${cityName}`,
			lead: `Kies een centrale verzamelplek in of rond ${cityName}. De exacte opstap stem je af met de aanbieder.`,
			items: [...pickups, 'Hotel of eigen locatie'],
			note: 'Geef opstap en bestemming mee in je aanvraag voor snellere offertes.',
		},
		relatedCitySlugs: relatedSlugs(city.slug),
		faqs: buildDepartureFaqs(cityName, pickups),
		cta: {
			title: `Ontvang gratis offertes voor een partybus vanuit ${cityName}`,
			text: `Vertel wanneer je wilt vertrekken, met hoeveel personen en wat je bestemming is. Vergelijk daarna vrijblijvend meerdere opties.`,
			whatsappHref: whatsapp.href,
			image: '/images/partybus-arena.png',
		},
	};
}
