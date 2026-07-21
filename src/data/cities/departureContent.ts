import type { CityActivity, CityFaq, CityLocation, CityOccasion } from './types';
import { getPublishedCity } from './registry';

const DESTINATION_IMAGE = '/images/partybus-verhuur.png';
const OCCASION_IMAGES = [
	'/images/partybus-verhuur.png',
	'/images/partybus-nederland.png',
	'/images/partybus-arena.png',
	'/images/hero-partybus.png',
	'/images/partybus-collage.png',
	'/images/interior-partybus.png',
	'/images/partybus-alt.png',
] as const;

const POPULAR_DESTINATIONS = [
	{ name: 'Amsterdam', slug: 'amsterdam', text: 'Nightlife, Rembrandtplein en een avondrit vanaf jouw vertrekstad.' },
	{ name: 'Rotterdam', slug: 'rotterdam', text: 'Skyline, Ahoy en havens — ideaal voor een groepsrit.' },
	{ name: 'Utrecht', slug: 'utrecht', text: 'Centraal gelegen bestemming voor feesten en uitgaan.' },
	{ name: 'Den Haag', slug: 'den-haag', text: 'Binnenhof, Scheveningen en Haagse avondlocaties.' },
	{ name: 'Eindhoven', slug: 'eindhoven', text: 'Strijp-S, events en een moderne feestbestemming.' },
	{ name: 'Breda', slug: 'breda', text: 'Bourgondische sfeer rond de Grote Markt.' },
	{ name: 'Groningen', slug: 'groningen', text: 'Studentencity vibes en uitgaan in het noorden.' },
	{ name: 'Maastricht', slug: 'maastricht', text: 'Vrijthof, terrassen en een sfeervolle eindbestemming.' },
	{ name: 'Schiphol', slug: null, text: 'Airport transfer of aankomst-/vertrekgroepen met de hele bus.' },
	{ name: 'België', slug: null, text: 'Ritten naar festivals of steden over de grens, in overleg met de aanbieder.' },
] as const;

const FESTIVALS = [
	{ title: 'Tomorrowland', text: 'Populaire festivalrit richting België, met de groep bij elkaar onderweg.', icon: 'festival' as const },
	{ title: 'Defqon.1', text: 'Comfortabele heen- en terugrit voor een hardstyle-weekend.', icon: 'festival' as const },
	{ title: 'Mysteryland', text: 'Samen naar het festivalterrein zonder losse taxi’s.', icon: 'music' as const },
	{ title: 'Intents Festival', text: 'Groepsvervoer vanaf jouw vertrekstad naar het evenement.', icon: 'festival' as const },
	{ title: 'Decibel Outdoor', text: 'Praktische festivaltransfer met sfeer al in de bus.', icon: 'music' as const },
	{ title: 'Paaspop', text: 'Meerdere dagen of een dagtrip: stem de route af in je aanvraag.', icon: 'festival' as const },
	{ title: 'Awakenings', text: 'Nachtleven en festivalvibes met één vaste groepsrit.', icon: 'nightlife' as const },
	{ title: 'Dominator', text: 'Samen aankomen en weer terugrijden als groep.', icon: 'festival' as const },
] as const;

const OCCASIONS: readonly { title: string; text: string }[] = [
	{ title: 'Vrijgezellenfeest', text: 'Start vanuit jouw stad en combineer meerdere stops in één avond.' },
	{ title: 'Bruiloft', text: 'Stijlvolle transfer tussen ceremonie, receptie en feestlocatie.' },
	{ title: 'Bedrijfsuitje', text: 'Professioneel groepsvervoer voor teams en relatie-events.' },
	{ title: 'Verjaardag', text: 'Vier onderweg: de hele groep blijft bij elkaar tot de bestemming.' },
	{ title: 'Schoolfeest', text: 'Overzichtelijk groepstransport met heldere timing.' },
	{ title: 'Gala', text: 'Comfortabel en representatief aankomen bij je gala-locatie.' },
	{ title: 'Carnaval', text: 'Sfeervolle rit naar carnavalbestemmingen, afgestemd op jullie route.' },
];

export function buildDepartureSeo(cityName: string) {
	return {
		metaTitle: `Partybus huren vanuit ${cityName} | Tips, prijzen & offertes`,
		metaDescription: `Partybus huren vanuit ${cityName}: informatie over bestemmingen, festivals, kostenfactoren en planning. Vergelijk daarna vrijblijvend meerdere offertes.`,
		h1: `Partybus huren vanuit ${cityName}`,
		heroSubtitle: `Vergelijk gratis partybusaanbieders voor jullie datum, route en groepsgrootte vanuit ${cityName}.`,
	};
}

export function buildDepartureIntro(cityName: string, landmark?: string) {
	const localPickup = landmark
		? `Denk bijvoorbeeld aan een verzamelpunt bij ${landmark}, het station of het centrum van ${cityName}.`
		: `Kies een centrale opstapplaats in of rond ${cityName}.`;

	return {
		title: `Partybus huren vanuit ${cityName}`,
		paragraphs: [
			`Wil je een partybus huren vanuit ${cityName}? Met één aanvraag bereik je aanbieders die kunnen reageren op jullie datum, route en groepsgrootte. Zo vergelijk je niet alleen de prijs, maar ook het voertuig, de capaciteit, faciliteiten en voorwaarden.`,
			`Een partybus is geschikt voor onder meer een vrijgezellenfeest, bruiloft, bedrijfsuitje, verjaardag, gala, schoolfeest of festivalrit. ${localPickup} Leg de gewenste bestemming vast en geef aan of een terugrit of meerdere stops nodig zijn.`,
			`De prijs wordt bepaald door onder andere datum, route, ritduur, wachttijd en groepsgrootte tot maximaal 80 personen. De aanvraag via Partybus Nederland is gratis en vrijblijvend: jij kiest zelf welk voorstel het beste bij jullie plannen past.`,
		] as const,
		image: '/images/interior-partybus.png',
		imageAlt: 'Interieur van een luxe partybus',
	};
}

export function buildPopularDestinations(currentSlug: string): {
	title: string;
	lead: string;
	items: CityLocation[];
} {
	const items: CityLocation[] = POPULAR_DESTINATIONS.filter((dest) => dest.slug !== currentSlug).map(
		(dest) => {
			const published = dest.slug ? getPublishedCity(dest.slug) : undefined;
			return {
				name: dest.name,
				text: dest.text,
				image: DESTINATION_IMAGE,
				href: published?.path ?? '/gratis-partybus-offertes-aanvragen/',
			};
		},
	);

	return {
		title: 'Populaire bestemmingen',
		lead: 'Voorbeelden van veel aangevraagde routes. De bestemming en exacte opstapplaats bepaal je zelf in de offerteaanvraag.',
		items,
	};
}

export function buildFestivalSection(cityName: string): {
	title: string;
	lead: string;
	items: CityActivity[];
} {
	return {
		title: `Populaire festivals vanuit ${cityName}`,
		lead: `Vergelijk heen- en terugvervoer vanuit ${cityName} naar festivals in Nederland en België.`,
		items: FESTIVALS.map((festival) => ({ ...festival })),
	};
}

export function buildOccasionSection(cityName: string): {
	title: string;
	lead: string;
	items: CityOccasion[];
} {
	return {
		title: `Gelegenheden vanuit ${cityName}`,
		lead: 'Kies jullie gelegenheid en bekijk waar je bij voertuig, route en planning op moet letten.',
		items: OCCASIONS.map((item, index) => ({
			title: item.title,
			text: item.text,
			image: OCCASION_IMAGES[index % OCCASION_IMAGES.length],
		})),
	};
}

export function buildDepartureFaqs(cityName: string, pickupLocations: readonly string[] = []): CityFaq[] {
	const localPickup = pickupLocations
		.filter((item) => !/^hotel of eigen locatie$/i.test(item))
		.slice(0, 4);
	const pickupHint =
		localPickup.length > 0
			? ` Denk bijvoorbeeld aan ${formatList(localPickup)}.`
			: '';

	return [
		{
			question: `Hoe werkt een partybus aanvragen vanuit ${cityName}?`,
			answer: `Je vult datum, groepsgrootte, opstapplaats in of rond ${cityName}, bestemming en gewenste tijden in. Aanbieders kunnen daarna reageren met een voorstel. Jij vergelijkt vrijblijvend en kiest zelf.`,
		},
		{
			question: 'Voor hoeveel personen is een partybus geschikt?',
			answer:
				'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per aanbieder en voertuig — geef het aantal door in je aanvraag.',
		},
		{
			question: 'Kunnen er meerdere opstapplaatsen worden afgesproken?',
			answer: `Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met de aanbieder.${pickupHint} Exacte stops hangen af van route en bereikbaarheid.`,
		},
		{
			question: `Kan ik vanuit ${cityName} naar een festival reizen?`,
			answer: `Ja, vanuit ${cityName} kun je een partybus aanvragen naar festivals in Nederland en België. Vermeld festival, datum, groepsgrootte en of je ook een terugrit nodig hebt.`,
		},
		{
			question: 'Kan een partybus naar België of Duitsland rijden?',
			answer:
				'Grensoverschrijdende ritten zijn bij veel aanbieders mogelijk, bijvoorbeeld naar België of Duitsland. Vermeld de eindbestemming duidelijk, zodat aanbieders kunnen aangeven wat haalbaar is.',
		},
		{
			question: 'Waar hangt de prijs vanaf?',
			answer: `De prijs hangt onder meer af van datum, route, duur, groepsgrootte, opstapplaatsen en type partybus. Er is geen vaste landelijke prijs. Vraag vrijblijvend meerdere offertes aan voor jouw rit vanuit ${cityName}.`,
		},
		{
			question: 'Is een aanvraag vrijblijvend?',
			answer:
				'Ja. Een aanvraag via Partybus Nederland is gratis en vrijblijvend. Je zit nergens aan vast totdat je zelf een voorstel accepteert bij een aanbieder.',
		},
		{
			question: 'Kunnen heenreis en terugreis samen worden aangevraagd?',
			answer:
				'Ja. Geef beide tijden en locaties door in één aanvraag. Of de bus blijft wachten of later terugkomt, stem je af met de aanbieder.',
		},
	];
}

function formatList(items: readonly string[]): string {
	if (items.length === 1) return items[0];
	if (items.length === 2) return `${items[0]} en ${items[1]}`;
	return `${items.slice(0, -1).join(', ')} en ${items[items.length - 1]}`;
}
