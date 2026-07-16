/**
 * Festival transport guide — modular for Star Local pSEO Suite.
 * No fixed prices. No availability guarantees. Max 80 persons.
 */

import type { GuideFactor, GuideFaq, GuideLink } from './pricingGuide';

export const festivalGuideSeo = {
	title: 'Festivalvervoer met een partybus | Tips en gids',
	description:
		'Alles over festivalvervoer met een partybus. Tips, voordelen, opstapplaatsen, planning en populaire festivals.',
	canonical: 'https://www.partybusnederland.nl/gids/festival-vervoer/',
	ogImage: 'https://www.partybusnederland.nl/images/hero-partybus.png',
	h1: 'Festivalvervoer met een partybus',
	eyebrow: 'GIDS',
	lead: 'Vanuit jouw stad naar Tomorrowland, Defqon.1, Mysteryland of een ander festival: met een partybus vertrek je samen, arriveer je samen en begint de sfeer al onderweg. Deze gids helpt je plannen — van opstapplaatsen tot terugreis.',
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

export const topFestivals: GuideFactor[] = [
	{
		title: 'Tomorrowland',
		text: 'Populaire festivalrit naar België. Plan heen- en terugrit, houd rekening met grens en festivalverkeer, en vermeld dag(en) en bagage in je aanvraag.',
	},
	{
		title: 'Defqon.1',
		text: 'Hardstyle-weekend waar groepen vaak vanuit heel Nederland vertrekken. Stem opstapplaatsen, festivaldatum en retourtijden vroeg af.',
	},
	{
		title: 'Mysteryland',
		text: 'Festivalrit binnen of nabij Nederland met focus op comfortabele aankomst en terugkeer als groep. Geef eindtijden en verzamelplek duidelijk door.',
	},
	{
		title: 'Decibel Outdoor',
		text: 'Outdoorfestival met vaak langere dagen op het terrein. Denk aan wachttijd of een vaste retourafspraak en eventuele bagage.',
	},
	{
		title: 'Intents Festival',
		text: 'Groepsvervoer vanaf jouw vertrekstad naar het evenement. Vermeld aantal personen (tot max. 80) en gewenste opstapplaatsen.',
	},
	{
		title: 'Paaspop',
		text: 'Geschikt voor een dagtrip of meerdaags bezoek. Geef door of je één rit, heen-en-weer of meerdere dagen wilt plannen.',
	},
	{
		title: 'Dominator',
		text: 'Samen aankomen en weer terugrijden als groep. Plan extra tijd voor festivalverkeer rond aankomst en vertrek.',
	},
	{
		title: 'Awakenings',
		text: 'Nachtleven en festivalvibes met één vaste groepsrit. Handig voor evenementen met late eindtijden.',
	},
	{
		title: 'Lowlands',
		text: 'Meerdaags festival waar bagage en timing zwaar meewegen. Stem ophaalmoment, bagage en eventuele retourdag helder af.',
	},
	{
		title: 'Pinkpop',
		text: 'Klassieker voor groepsritten vanuit heel Nederland. Vermeld festivaldag(en), opstapplaatsen en of je na afloop direct terug wilt.',
	},
];

export const festivalTips: GuideFactor[] = [
	{
		title: 'Vertrek plannen',
		text: 'Reken terug vanaf de gewenste aankomsttijd. Houd rekening met files, laden/uitstappen en festivalverkeer rond het terrein.',
	},
	{
		title: 'Opstapplaatsen',
		text: 'Kies plekken die de bus goed kan bereiken. Combineer waar mogelijk, of geef een logische volgorde van ophaalpunten door.',
	},
	{
		title: 'Parkeren',
		text: 'Vraag of de bus mag wachten of ergens in de buurt kan staan. Festivalparkings en drop-off zones verschillen per evenement.',
	},
	{
		title: 'Terugreis',
		text: 'Spreek een vaste verzameltijd en -plek af na het festival. Zo voorkom je dat de groep verspreid raakt bij drukte.',
	},
	{
		title: 'Alcohol',
		text: 'Check of eigen consumpties zijn toegestaan en wat de regels van de aanbieder zijn. Niemand in de groep hoeft te rijden — plan verantwoord.',
	},
	{
		title: 'Weersomstandigheden',
		text: 'Outdoorfestivals betekenen soms regen of hitte. Neem geschikte kleding en bescherming mee; vermeld als er natte of omvangrijke bagage is.',
	},
];

export const festivalChecklist: string[] = [
	'Festivalnaam en editie/datum(s)',
	'Vertrekstad en concrete opstapplaats(en)',
	'Gewenste vertrektijd heenreis',
	'Gewenste aankomsttijd op of bij het festival',
	'Of je een terugrit nodig hebt, inclusief verzameltijd',
	'Aantal personen (maximaal 80)',
	'Bagage- of kampeerwensen',
	'Eventuele tussenstops onderweg',
	'Of de chauffeur moet wachten of later terugkomt',
	'Bijzondere wensen (muziek, toegankelijkheid, buitenland)',
];

export const festivalFaqs: GuideFaq[] = [
	{
		question: 'Kan ik met een partybus naar een festival?',
		answer:
			'Ja. Veel groepen gebruiken een partybus als festivalvervoer vanuit hun woonplaats of een centrale opstapplaats. Vermeld festival, datum, aantal personen en of je heen- én terugrit nodig hebt.',
	},
	{
		question: 'Welke festivals zijn populair voor partybusritten?',
		answer:
			'Onder meer Tomorrowland, Defqon.1, Mysteryland, Decibel Outdoor, Intents Festival, Paaspop, Dominator, Awakenings, Lowlands en Pinkpop. Ook andere evenementen in Nederland of België zijn vaak mogelijk.',
	},
	{
		question: 'Kunnen we meerdere opstapplaatsen kiezen?',
		answer:
			'Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt. Geef een logische route door, zodat de reistijd realistisch blijft.',
	},
	{
		question: 'Hoe vroeg moet ik festivalvervoer aanvragen?',
		answer:
			'Voor populaire festivals en weekenden is vroeg aanvragen verstandig. Beschikbaarheid verschilt per aanbieder en periode — wij garanderen geen beschikbaarheid.',
	},
	{
		question: 'Hoeveel personen kunnen mee naar het festival?',
		answer:
			'Dat hangt af van het type partybus. Partybus Nederland vergelijkt mogelijkheden tot maximaal 80 personen. Geef het exacte aantal door in je aanvraag.',
	},
	{
		question: 'Kunnen we bagage of kampeerspullen meenemen?',
		answer:
			'Vaak wel, afhankelijk van de bus en de ruimte. Vermeld wat je meeneemt, zodat aanbieders de juiste capaciteit en inrichting kunnen voorstellen.',
	},
	{
		question: 'Regelen jullie ook de terugrit na het festival?',
		answer:
			'Ja, heen- en terugrit kun je in één aanvraag zetten. Spreek een vaste verzamelplek en tijd af, zodat de groep na afloop weer bij elkaar komt.',
	},
	{
		question: 'Mag er alcohol mee in de partybus?',
		answer:
			'Dat verschilt per aanbieder. Vraag in de offerte na wat is toegestaan. Belangrijk: niemand in de groep hoeft te rijden — de chauffeur is professioneel.',
	},
	{
		question: 'Wat kost festivalvervoer met een partybus?',
		answer:
			'Er is geen vaste landelijke prijs. Kosten hangen af van afstand, uren, datum, groepsgrootte, stops en of je naar het buitenland rijdt. Vergelijk vrijblijvend meerdere offertes en lees ook de prijzengids.',
	},
	{
		question: 'Kunnen we naar festivals in België?',
		answer:
			'Ritten naar België, bijvoorbeeld Tomorrowland, zijn vaak mogelijk. Vermeld bestemming, tijden en bagage duidelijk, zodat aanbieders kunnen aangeven wat voor jouw groep haalbaar is.',
	},
];

export const festivalInternalLinks: GuideLink[] = [
	{
		label: 'Partybus vanuit Rotterdam',
		href: '/steden/partybus-huren-rotterdam/',
		description: 'Vertrekstad met festivals en bestemmingen',
	},
	{
		label: 'Partybus vanuit Amsterdam',
		href: '/steden/partybus-huren-amsterdam/',
		description: 'Festivalritten en stadsritten vanuit Amsterdam',
	},
	{
		label: 'Partybus vanuit Breda',
		href: '/steden/partybus-huren-breda/',
		description: 'Handig vertrekpunt richting festivals',
	},
	{
		label: 'Prijzengids',
		href: '/gids/partybus-kosten/',
		description: 'Waar de prijs van een partybus van afhangt',
	},
	{
		label: 'Complete partybus-gids',
		href: '/gids/partybus-huren/',
		description: 'Algemene informatie over partybus huren',
	},
	{
		label: 'Gelegenheden',
		href: '/gids/partybus-huren/#guide-occasions',
		description: 'Tips per gelegenheid, inclusief festivals',
	},
	{
		label: 'Gratis offertes aanvragen',
		href: '/gratis-partybus-offertes-aanvragen/',
		description: 'Vrijblijvend festivalritten vergelijken',
	},
];

export const festivalBreadcrumbs = [
	{ label: 'Home', href: '/' },
	{ label: 'Gids', href: '/gids/partybus-huren/' },
	{ label: 'Festivalvervoer' },
] as const;
