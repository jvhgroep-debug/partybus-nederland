/**
 * Festival transport guide — modular for Star Local pSEO Suite.
 * No fixed prices. No availability guarantees. Max 80 persons.
 */

import type { GuideFactor, GuideFaq, GuideLink } from './pricingGuide';

export type GuideFestival = {
	name: string;
	slug: string;
	description: string;
	location: string;
	partybusWhy: string;
	href?: string;
	linkLabel?: string;
};

export type GuideDepartureCity = {
	name: string;
	href: string;
	description: string;
};

export const festivalGuideSeo = {
	title: 'Festivalvervoer met een partybus | Complete gids & tips',
	description:
		'Festivalvervoer met een partybus uitgelegd: prijzen, opstapplaatsen, terugreis, bagage en populaire festivals. Vergelijk vrijblijvend offertes vanuit jouw stad.',
	canonical: 'https://www.partybusnederland.nl/gids/festival-vervoer/',
	ogImage: 'https://www.partybusnederland.nl/images/hero-partybus.png',
	h1: 'Festivalvervoer met een partybus',
	eyebrow: 'GIDS',
	lead: 'Vanuit jouw stad naar Tomorrowland, Defqon.1, Mysteryland of een ander festival: met een partybus vertrek je samen, arriveer je samen en begint de sfeer al onderweg. Deze gids helpt je plannen — van opstapplaatsen tot terugreis.',
	ctaTitle: 'Klaar voor jouw festival?',
	ctaLead:
		'Vraag vrijblijvend meerdere offertes aan voor heen- en terugrit. Geef festival, datum en groepsgrootte door — wij helpen je vergelijken.',
} as const;

export const festivalWhy = {
	title: 'Waarom een partybus naar festivals?',
	lead: 'Festivalvervoer gaat verder dan van A naar B. Je wilt dat de hele groep bij elkaar blijft, dat niemand achter het stuur hoeft en dat de rit onderdeel van het feest wordt.',
	paragraphs: [
		'Met een partybus regel je heen- én vaak terugrit vanuit één of meerdere opstapplaatsen in Nederland. Ideaal voor groepen vrienden, vrijgezellenfeesten, studentengroepen of collega’s die samen naar het festivalterrein willen.',
		'Je stemt vertrektijd, bagage en eventuele tussenstops af met de aanbieder. Beschikbaarheid verschilt per festivalperiode — vraag daarom vroeg aan en vergelijk meerdere offertes.',
	],
} as const;

export const festivalBenefits: GuideFactor[] = [
	{
		title: 'Niemand hoeft te rijden',
		text: 'Iedereen kan meegenieten van de rit. Geen aangewezen chauffeur in de groep, geen zorgen over alcohol achter het stuur.',
	},
	{
		title: 'Samen vertrekken',
		text: 'De groep verzamelt op één of meerdere plekken en vertrekt als geheel. Geen losse treinen, files of zoekgeraakte vriendengroepen.',
	},
	{
		title: 'Samen terug',
		text: 'Na het festival weet iedereen waar en wanneer de terugrit is. Handig bij late eindtijden en drukte rond het terrein.',
	},
	{
		title: 'Meerdere opstapplaatsen',
		text: 'Vaak mogelijk wanneer je stops vooraf doorgeeft. Zo haal je vrienden uit verschillende wijken of steden op één route.',
	},
	{
		title: 'Bagage',
		text: 'Kampeerspullen, weekendtassen of festivaloutfits mee? Geef bagagewensen door, zodat de juiste buscapaciteit wordt meegenomen.',
	},
	{
		title: 'Veiligheid',
		text: 'Een professionele chauffeur en een vaste groepsrit zorgen voor overzicht. Plan realistische tijden rond festivalverkeer.',
	},
	{
		title: 'Sfeer onderweg',
		text: 'Muziek en sfeerverlichting horen bij de meeste partybussen. De vibe begint al vóór je het festivalterrein ziet.',
	},
];

export const popularFestivals: GuideFestival[] = [
	{
		name: 'Tomorrowland',
		slug: 'tomorrowland',
		location: 'Boom, België',
		description:
			'Een van de grootste dancefestivals ter wereld, met meerdere dagen muziek en een internationale publiekstrekker. Veel Nederlandse groepen vertrekken gezamenlijk richting België.',
		partybusWhy:
			'Lange reistijd, druk grensverkeer en late eindtijden maken een vaste groepsrit ideaal. Niemand hoeft te rijden en iedereen reist heen én terug op dezelfde manier.',
		href: '/partybus-rotterdam-tomorrowland/',
		linkLabel: 'Route Rotterdam – Tomorrowland',
	},
	{
		name: 'Defqon.1',
		slug: 'defqon',
		location: 'Biddinghuizen, Flevoland',
		description:
			'Hardstyle-festival met een massaal weekendprogramma en bezoekers uit heel Nederland. Populair voor grotere vriendengroepen en studentenverenigingen.',
		partybusWhy:
			'Met een partybus blijft de hele groep bij elkaar op een druk festivalweekend. Handig bij bagage, late terugreis en meerdere opstapplaatsen onderweg.',
		href: '/partybus-breda-defqon/',
		linkLabel: 'Route Breda – Defqon.1',
	},
	{
		name: 'Mysteryland',
		slug: 'mysteryland',
		location: 'Haarlemmermeer (Floriadeterrein)',
		description:
			'Groots elektronisch festival vlak bij Amsterdam met meerdere podia en een breed publiek. Een klassieker voor groepsvervoer vanuit de Randstad.',
		partybusWhy:
			'Vermijd parkeerstress en losse treinreizen. De groep vertrekt samen, arriveert op tijd en kan na afloop weer gezamenlijk terugrijden.',
	},
	{
		name: 'Decibel Outdoor',
		slug: 'decibel',
		location: 'Nederland (locatie per editie)',
		description:
			'Outdoor hardstyle- en dancefestival met lange festivaldagen en veel bezoekers uit het hele land. Check altijd de actuele locatie van de editie.',
		partybusWhy:
			'Bij lange festivaldagen is een vaste terugreisafspraak belangrijk. Met een partybus weet iedereen waar de bus staat na afloop.',
	},
	{
		name: 'Intents Festival',
		slug: 'intents',
		location: 'Oisterwijk, Noord-Brabant',
		description:
			'Festival met een mix van hardstyle en dance, populair in het zuiden van Nederland. Veel groepen combineren een weekend met gezamenlijk vervoer.',
		partybusWhy:
			'Ideaal wanneer vrienden uit verschillende steden komen. Met meerdere opstapplaatsen haal je de groep op één route op.',
	},
	{
		name: 'Paaspop',
		slug: 'paaspop',
		location: 'Schijndel, Noord-Brabant',
		description:
			'Meerdaags popfestival in het voorjaar met een breed programma en veel bezoekers uit heel Nederland. Geschikt voor dagtrip of weekend.',
		partybusWhy:
			'Plan heen- en terugrit in één aanvraag. Zo rijdt de groep op de gewenste dag(en) samen op en neer zonder losse vervoersregeling.',
	},
	{
		name: 'Pinkpop',
		slug: 'pinkpop',
		location: 'Landgraaf, Limburg',
		description:
			'Een van de oudste en bekendste popfestivals van Nederland, met meerdere dagen en artiesten uit verschillende genres.',
		partybusWhy:
			'Vanuit vrijwel elke hoek van Nederland vertrekken groepen richting Limburg. Een partybus voorkomt dat iemand de aangewezen chauffeur wordt.',
	},
	{
		name: 'Lowlands',
		slug: 'lowlands',
		location: 'Biddinghuizen, Flevoland',
		description:
			'Meerdaags festival met muziek, cultuur en camping. Bagage, kampeerspullen en strakke timing spelen hier een grote rol.',
		partybusWhy:
			'Ruimte voor bagage en een vaste groepsafspraak op het terrein maken partybusvervoer populair. Plan ophaalmoment en retourdag vooraf.',
	},
	{
		name: 'Dance Valley',
		slug: 'dance-valley',
		location: 'Spaarnwoude, Noord-Holland',
		description:
			'Legendarisch dancefestival in de regio Amsterdam met een lange historie en een feestgerichte sfeer. Populair voor groepen uit de Randstad.',
		partybusWhy:
			'Eén bus voor de hele groep betekent geen gedoe met meerdere auto’s of laatste treinen. De sfeer begint al onderweg.',
	},
	{
		name: 'Awakenings',
		slug: 'awakenings',
		location: 'Amsterdam en omgeving',
		description:
			'Bekend techno-merk met festivals en events door het hele jaar, vaak met late eindtijden en een internationaal publiek.',
		partybusWhy:
			'Bij nachtevents en late afsluiting is een geplande terugreis cruciaal. Iedereen reist veilig terug zonder eigen rijders in de groep.',
	},
];

/** @deprecated Use popularFestivals — kept for backwards compatibility in tooling. */
export const topFestivals: GuideFactor[] = popularFestivals.map((f) => ({
	title: f.name,
	text: f.description,
}));

export const festivalDepartureCities: GuideDepartureCity[] = [
	{
		name: 'Amsterdam',
		href: '/steden/partybus-huren-amsterdam/',
		description: 'Vertrek vanuit de hoofdstad richting festivals in Nederland en België',
	},
	{
		name: 'Rotterdam',
		href: '/steden/partybus-huren-rotterdam/',
		description: 'Populair vertrekpunt voor Tomorrowland en festivals in het land',
	},
	{
		name: 'Den Haag',
		href: '/steden/partybus-huren-den-haag/',
		description: 'Festivalvervoer vanuit de Hofstad voor groepen uit de regio',
	},
	{
		name: 'Utrecht',
		href: '/steden/partybus-huren-utrecht/',
		description: 'Centrale ligging — handig voor groepen uit Midden-Nederland',
	},
	{
		name: 'Eindhoven',
		href: '/steden/partybus-huren-eindhoven/',
		description: 'Vertrek vanuit Brabant naar festivals in het zuiden en verder',
	},
	{
		name: 'Breda',
		href: '/steden/partybus-huren-breda/',
		description: 'Dicht bij populaire festivalroutes, waaronder Defqon.1',
	},
	{
		name: 'Groningen',
		href: '/steden/partybus-huren-groningen/',
		description: 'Festivalritten vanuit het noorden voor studenten en vriendengroepen',
	},
	{
		name: 'Arnhem',
		href: '/steden/partybus-huren-arnhem/',
		description: 'Vertrek vanuit Gelderland naar festivals door heel Nederland',
	},
	{
		name: 'Nijmegen',
		href: '/steden/partybus-huren-nijmegen/',
		description: 'Groepsvervoer vanuit Nijmegen en omgeving',
	},
	{
		name: 'Zwolle',
		href: '/steden/partybus-huren-zwolle/',
		description: 'Festivalvervoer vanuit Overijssel en oostelijke regio’s',
	},
];

export const festivalTips: GuideFactor[] = [
	{
		title: 'Wanneer reserveren',
		text: 'Vraag zo vroeg mogelijk aan rond populaire festivalperiodes. Beschikbaarheid verschilt per datum en regio — vergelijk meerdere offertes zonder vaste prijzen te verwachten.',
	},
	{
		title: 'Groepsgrootte',
		text: 'Geef het exacte aantal personen door (tot maximaal 80). Zo krijg je een bus met passende capaciteit en geen verrassingen over zitplaatsen of bagageruimte.',
	},
	{
		title: 'Opstapplaatsen',
		text: 'Kies bereikbare plekken voor een bus: parkeerplaats, station of centrale verzamelplek. Meerdere opstapplaatsen zijn vaak mogelijk wanneer je een logische route doorgeeft.',
	},
	{
		title: 'Bagage',
		text: 'Vermeld kampeerspullen, weekendtassen of grote tassen vooraf. Bij meerdaagse festivals bepaalt dit welke bus het beste past bij jullie groep.',
	},
	{
		title: 'Terugreis',
		text: 'Spreek een vaste verzamelplek en tijd af op of bij het festivalterrein. Heen- en terugrit kun je in één aanvraag zetten zodat niemand achterblijft.',
	},
	{
		title: 'Veiligheid',
		text: 'Een professionele chauffeur en één vaste groepsrit geven overzicht. Plan realistische tijden rond drukte, weer en vermoeidheid na een lange festivaldag.',
	},
];

export const festivalChecklist: string[] = [
	'Aantal personen (tot maximaal 80)',
	'Vertrekadres of opstapplaats(en)',
	'Festivalnaam en datum',
	'Gewenste vertrektijd',
	'Gewenste terugtijd of verzamelmoment',
	'Naam en telefoonnummer contactpersoon',
];

export const festivalFaqs: GuideFaq[] = [
	{
		question: 'Wat kost festivalvervoer met een partybus?',
		answer:
			'Er is geen vaste landelijke prijs. Kosten hangen af van afstand, uren, datum, groepsgrootte, opstapplaatsen en of je naar het buitenland rijdt. Vergelijk vrijblijvend meerdere offertes en lees de prijzengids voor alle factoren.',
	},
	{
		question: 'Vanuit welke plaatsen kan ik vertrekken?',
		answer:
			'Vanuit vrijwel elke stad in Nederland kun je een partybus aanvragen richting een festival. Geef je vertrekstad en concrete opstapplaats door, zodat aanbieders een passend voorstel kunnen doen.',
	},
	{
		question: 'Kunnen jullie ons ophalen bij een specifieke plek?',
		answer:
			'Ja, vaak op een adres, station of centrale verzamelplek in jouw stad. Vermeld de exacte ophaallocatie in je aanvraag, inclusief bereikbaarheid voor een bus.',
	},
	{
		question: 'Hoe regelen we de terugreis na het festival?',
		answer:
			'Spreek vooraf een vaste verzamelplek en tijd af op of bij het festivalterrein. Heen- en terugrit kun je in één aanvraag zetten, zodat de groep na afloop weer bij elkaar komt.',
	},
	{
		question: 'Mag er alcohol mee in de partybus?',
		answer:
			'Dat verschilt per aanbieder. Vraag in de offerte na wat is toegestaan. Niemand in de groep hoeft te rijden — de chauffeur is professioneel.',
	},
	{
		question: 'Is muziek en sfeerverlichting inbegrepen?',
		answer:
			'Bij de meeste partybussen horen muziek en sfeerverlichting bij de beleving. Exacte opties verschillen per aanbieder — vraag dit mee bij het vergelijken van offertes.',
	},
	{
		question: 'Kunnen we bagage of kampeerspullen meenemen?',
		answer:
			'Vaak wel, afhankelijk van de bus en beschikbare ruimte. Vermeld wat je meeneemt, zodat aanbieders de juiste capaciteit en inrichting kunnen voorstellen.',
	},
	{
		question: 'Kunnen we meerdere opstapplaatsen kiezen?',
		answer:
			'Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt. Geef een logische route door, zodat de reistijd realistisch blijft.',
	},
];

export const festivalCityLinks: GuideLink[] = festivalDepartureCities.map((city) => ({
	label: `Partybus huren ${city.name}`,
	href: city.href,
	description: city.description,
}));

export const festivalGuideLinks: GuideLink[] = [
	{
		label: 'Partybus huren',
		href: '/gids/partybus-huren/',
		description: 'Complete gids over partybus huren in Nederland',
	},
	{
		label: 'Partybus prijzen',
		href: '/gids/partybus-kosten/',
		description: 'Waar de prijs van een partybus van afhangt — zonder vaste tarieven',
	},
	{
		label: 'Bruiloft',
		href: '/gids/partybus-huren/#guide-occasions',
		description: 'Representatief groepsvervoer voor bruiloften',
	},
	{
		label: 'Bedrijfsuitje',
		href: '/gids/partybus-huren/#guide-occasions',
		description: 'Professioneel vervoer voor teams en collega’s',
	},
	{
		label: 'Vrijgezellenfeest',
		href: '/gids/partybus-huren/#guide-occasions',
		description: 'Tips voor een partybus op een vrijgezellenfeest',
	},
	{
		label: 'Alle steden',
		href: '/#steden',
		description: 'Bekijk alle steden waar je een partybus kunt aanvragen',
	},
];

export const festivalWhatsappHref =
	'https://wa.me/31684002350?text=Hallo%20Partybus%20Nederland,%0A%0AIk%20wil%20graag%20offertes%20voor%20festivalvervoer%20met%20een%20partybus.';

export const festivalBreadcrumbs = [
	{ label: 'Home', href: '/' },
	{ label: 'Gids', href: '/gids/partybus-huren/' },
	{ label: 'Festivalvervoer' },
] as const;
