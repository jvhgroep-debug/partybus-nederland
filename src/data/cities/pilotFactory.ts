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

/** All WordPress city slugs (352) — used for static path generation. */
export const ALL_CITY_SLUGS = cityInventory.cities.map((city) => city.slug);

/** @deprecated Use ALL_CITY_SLUGS — kept for older imports. */
export const PILOT_CITY_SLUGS = ALL_CITY_SLUGS;

const MAJOR_CITY_SLUGS = [
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
] as const;

function cityBySlug(slug: string): InventoryCity | undefined {
	return cityInventory.cities.find((city) => city.slug === slug);
}

/**
 * Related cities: alphabetische buren + een paar landelijke hubs voor interne links.
 */
function relatedSlugs(currentSlug: string): string[] {
	const slugs = ALL_CITY_SLUGS;
	const index = slugs.indexOf(currentSlug);
	const selected: string[] = [];

	const push = (slug: string) => {
		if (!slug || slug === currentSlug || selected.includes(slug)) return;
		selected.push(slug);
	};

	if (index >= 0) {
		for (let offset = 1; selected.length < 3 && offset < slugs.length; offset += 1) {
			if (index - offset >= 0) push(slugs[index - offset]);
			if (selected.length >= 3) break;
			if (index + offset < slugs.length) push(slugs[index + offset]);
		}
	}

	for (const major of MAJOR_CITY_SLUGS) {
		if (selected.length >= 5) break;
		push(major);
	}

	for (const slug of slugs) {
		if (selected.length >= 5) break;
		push(slug);
	}

	return selected.slice(0, 5);
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

/** Shared CityPageData builder for every inventory city (same URL/canonical as WordPress). */
export function buildCityPageData(slug: string): CityPageData | null {
	const city = cityBySlug(slug);
	if (!city) return null;

	const cityName = city.city;
	const landmark = city.landmark;
	const seo = buildDepartureSeo(cityName);
	const intro = buildDepartureIntro(cityName, landmark);
	const destinations = buildPopularDestinations(city.slug);
	const festivals = buildFestivalSection(cityName);
	const occasions = buildOccasionSection(cityName);
	const pickups = pickupHintsFor(city.slug, cityName, landmark);
	const path = new URL(city.url).pathname.endsWith('/')
		? new URL(city.url).pathname
		: `${new URL(city.url).pathname}/`;

	return {
		slug: city.slug,
		name: cityName,
		path,
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
			title: `Waarom een partybus huren vanuit ${cityName}?`,
			lead: `Eén voertuig, één planning en de feestelijke sfeer begint direct bij het instappen.`,
			items: [
				{
					title: 'Geen losse taxi’s',
					text: `De groep reist samen vanaf een afgesproken opstapplaats in of rond ${cityName}.`,
					icon: 'group',
				},
				{
					title: 'Vergelijk luxe en faciliteiten',
					text: 'Kies een bus op basis van capaciteit, interieur, muziek, verlichting en voorwaarden.',
					icon: 'party',
				},
				{
					title: 'Route op maat',
					text: 'Vraag een enkele rit, retour, meerdere stops of een bestemming over de grens aan.',
					icon: 'route',
				},
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

/** @deprecated Prefer buildCityPageData */
export const buildPilotCityPageData = buildCityPageData;
