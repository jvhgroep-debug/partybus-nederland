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
		metaTitle: `Partybus huren vanuit ${cityName} | Gratis offertes vergelijken`,
		metaDescription: `Partybus huren vanuit ${cityName}? Vergelijk gratis aanbieders voor ritten door Nederland en België — festivals, steden en groepsfeesten.`,
		h1: `Partybus huren vanuit ${cityName}`,
		heroSubtitle: `Vergelijk partybussen voor een rit vanuit ${cityName} naar festivals, steden of iedere bestemming die je kiest.`,
	};
}

export function buildDepartureIntro(cityName: string) {
	return {
		title: `Partybus huren vanuit ${cityName}`,
		paragraphs: [
			`Vanuit ${cityName} huur je een partybus naar vrijwel iedere bestemming in Nederland en België. Of je nu naar een festival, een andere stad of een evenementenlocatie wilt: de groep vertrekt samen en de sfeer begint al onderweg.`,
			`Je kiest zelf de opstapplaats in of rond ${cityName} en stemt de eindbestemming af met de aanbieder. Denk aan populaire steden, festivals, Schiphol of een rit over de grens naar België.`,
			`Via Partybus Nederland vergelijk je vrijblijvend meerdere offertes voor jouw rit vanuit ${cityName}. Geef datum, groepsgrootte en bestemming door, zodat je snel passende opties naast elkaar ziet.`,
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
		lead: 'Veelgekozen ritten vanuit jouw vertrekstad. Klik door naar een stedenpagina of vraag direct offertes aan.',
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
		lead: `Vanuit ${cityName} regel je eenvoudig groepsvervoer naar bekende festivals in Nederland en België.`,
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
		lead: 'Een partybus past bij feesten en groepsritten — van vrijgezellenavond tot carnaval.',
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
			question: `Kan ik vanuit ${cityName} naar een festival rijden?`,
			answer: `Ja, vanuit ${cityName} kun je een partybus aanvragen naar festivals in Nederland en België. Vermeld het festival, de datum en het aantal personen in je aanvraag.`,
		},
		{
			question: 'Kunnen we meerdere opstapplaatsen kiezen?',
			answer: `Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met de aanbieder.${pickupHint} Exacte stops hangen af van route en bereikbaarheid.`,
		},
		{
			question: 'Kan de chauffeur blijven wachten?',
			answer:
				'Wachten op locatie is bij veel ritten mogelijk, afhankelijk van duur, bestemming en de voorwaarden van de aanbieder. Geef in je aanvraag aan of je wachttijd nodig hebt.',
		},
		{
			question: 'Kunnen we naar België rijden?',
			answer:
				'Ritten naar België zijn vaak mogelijk, bijvoorbeeld voor festivals of steden. Vermeld de eindbestemming duidelijk, zodat aanbieders kunnen aangeven wat haalbaar is.',
		},
		{
			question: 'Hoeveel personen kunnen mee?',
			answer:
				'Partybus Nederland vergelijkt mogelijkheden voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per aanbieder en voertuig.',
		},
		{
			question: `Wat kost een rit vanuit ${cityName}?`,
			answer: `De prijs hangt onder meer af van datum, route, duur, groepsgrootte en type partybus. Vraag vrijblijvend meerdere offertes aan voor jouw rit vanuit ${cityName}.`,
		},
		{
			question: 'Hoe lang vooraf reserveren?',
			answer:
				'Voor populaire data, weekenden en festivals is vroeg aanvragen verstandig. Beschikbaarheid verschilt per aanbieder en periode.',
		},
		{
			question: 'Is muziek en verlichting inbegrepen?',
			answer:
				'Bij de meeste partybussen horen muziek en sfeerverlichting bij de beleving. Exacte opties verschillen per aanbieder — vraag dit mee in de offertevergelijking.',
		},
	];
}

function formatList(items: readonly string[]): string {
	if (items.length === 1) return items[0];
	if (items.length === 2) return `${items[0]} en ${items[1]}`;
	return `${items.slice(0, -1).join(', ')} en ${items[items.length - 1]}`;
}
