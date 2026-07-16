import cityInventory from './cities.json';
import type { CityPageData } from './types';
import { whatsapp } from '../settings/whatsapp';

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

const FALLBACK_SECTION_IMAGE = '/images/partybus-verhuur.png';

function cityBySlug(slug: string): InventoryCity | undefined {
	return cityInventory.cities.find((city) => city.slug === slug);
}

function relatedSlugs(currentSlug: string): string[] {
	return PILOT_CITY_SLUGS.filter((slug) => slug !== currentSlug).slice(0, 4);
}

export function buildPilotCityPageData(slug: string): CityPageData | null {
	const city = cityBySlug(slug) as InventoryCitySeo | undefined;
	if (!city) return null;

	const canonical = city.canonical;
	const cityName = city.city;
	const landmark = city.landmark;
	const metaTitle = city.seoTitle || `Partybus huren ${cityName} | Gratis offertes vergelijken`;
	const metaDescription =
		city.metaDescription ||
		`Partybus huren in ${cityName}? Vergelijk gratis meerdere aanbieders voor feesten en groepsritten rond ${landmark}.`;
	const h1 = city.h1 || `Partybus huren ${cityName}`;
	const heroSubtitle =
		city.heroSubtitle || `Vergelijk gratis meerdere partybus-aanbieders voor een sfeervolle rit door ${cityName}.`;

	return {
		slug: city.slug,
		name: cityName,
		path: new URL(city.url).pathname,
		canonical,
		metaTitle,
		metaDescription,
		h1,
		hero: {
			subtitle: heroSubtitle,
			image: '/images/hero-partybus.png',
			imageAlt: city.imageAlt,
			whatsappHref: whatsapp.href,
			trustItems: [
				'Gratis offertes vergelijken',
				'Reactie binnen 24 uur',
				'Geschikt voor groepen tot 80 personen',
				'Beschikbaar door heel Nederland',
			],
		},
		intro: {
			title: `Partybus huren in ${cityName}`,
			paragraphs: [
				`${cityName} is een populaire bestemming voor groepsuitjes en feestritten. Met een partybus houd je de groep onderweg bij elkaar en start de sfeer al tijdens de rit.`,
				`Veel groepen combineren in ${cityName} meerdere stops, zoals ${landmark}. Zo voorkom je losse taxi's en blijft de planning overzichtelijk voor iedereen.`,
				`Via Partybus Nederland vergelijk je vrijblijvend meerdere offertes voor ${cityName}. Geef route en groepsgrootte door en kies de optie die het best aansluit op jullie avond.`,
			],
			image: '/images/interior-partybus.png',
			imageAlt: 'Interieur van een luxe partybus',
		},
		why: {
			title: `Waarom een partybus in ${cityName}?`,
			lead: `Met een partybus in ${cityName} reis je als groep comfortabel en zonder logistieke stress.`,
			items: [
				{ title: 'Samen reizen', text: 'De hele groep blijft bij elkaar van vertrek tot aankomst.', icon: 'group' },
				{ title: 'Sfeer onderweg', text: 'Muziek en verlichting maken de rit onderdeel van de beleving.', icon: 'party' },
				{ title: 'Overzichtelijke planning', text: 'Een vaste bus is vaak praktischer dan meerdere ritten.', icon: 'route' },
			],
		},
		locations: {
			title: `Populaire locaties in ${cityName}`,
			lead: `Locaties die vaak in routes door ${cityName} worden opgenomen.`,
			items: [
				{ name: landmark, text: `Bekende hotspot in ${cityName} voor een sfeervolle stop.`, image: FALLBACK_SECTION_IMAGE },
				{ name: `Centrum ${cityName}`, text: 'Populair gebied voor horeca, terrassen en uitgaan.', image: '/images/partybus-nederland.png' },
				{ name: `Station ${cityName}`, text: 'Praktisch opstappunt voor groepen uit meerdere plaatsen.', image: '/images/partybus-collage.png' },
			],
		},
		activities: {
			title: `Wat is er te doen in ${cityName}?`,
			lead: `Combineer vervoer met activiteiten en uitgaan in ${cityName}.`,
			items: [
				{ title: 'Uitgaan', text: `Nachtleven en horeca in en rond ${cityName}.`, icon: 'nightlife' },
				{ title: 'Events', text: 'Concerten en evenementen met de groep op een vaste route.', icon: 'music' },
				{ title: 'Feestritten', text: 'Sfeervolle avondritten met meerdere haltes.', icon: 'festival' },
			],
		},
		occasions: {
			title: 'Partybus voor iedere gelegenheid',
			items: [
				{ title: 'Vrijgezellenfeest', text: 'Samen op pad met een vaste planning en sfeer onderweg.', image: FALLBACK_SECTION_IMAGE },
				{ title: 'Verjaardag', text: 'Vier met de hele groep zonder losse vervoersregelingen.', image: '/images/hero-partybus.png' },
				{ title: 'Bedrijfsuitje', text: 'Praktisch groepsvervoer met representatieve uitstraling.', image: '/images/partybus-arena.png' },
			],
		},
		pickup: {
			title: 'Populaire opstaplocaties',
			lead: `Kies in ${cityName} een centrale verzamelplek en stem exacte stops af met de aanbieder.`,
			items: [`Station ${cityName}`, `Centrum ${cityName}`, 'Hotel of eigen locatie'],
			note: 'Geef opstaplocatie en route vroeg door voor de beste offertevergelijking.',
		},
		relatedCitySlugs: relatedSlugs(city.slug),
		faqs: [
			{
				question: `Wat kost een partybus in ${cityName}?`,
				answer: `De prijs hangt af van route, duur en groepsgrootte. Via Partybus Nederland vergelijk je gratis meerdere offertes voor ${cityName}.`,
			},
			{
				question: 'Voor hoeveel personen is een partybus geschikt?',
				answer: 'Partybussen zijn geschikt voor groepen tot 80 personen.',
			},
		],
		cta: {
			title: `Ontvang gratis offertes voor een partybus in ${cityName}`,
			text: `Vertel je plannen voor ${cityName} en vergelijk vrijblijvend meerdere opties.`,
			whatsappHref: whatsapp.href,
			image: '/images/partybus-arena.png',
		},
	};
}
