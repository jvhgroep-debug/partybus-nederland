/**
 * Festival transport guide — modular for Star Local pSEO Suite.
 * No fixed prices. No availability guarantees. Max 80 persons.
 */

import type { GuideFactor, GuideFaq, GuideLink } from './pricingGuide';

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

export const festivalCityLinks: GuideLink[] = [
	{
		label: 'Partybus huren Amsterdam',
		href: '/steden/partybus-huren-amsterdam/',
		description: 'Festivalritten en vertrek vanuit Amsterdam',
	},
	{
		label: 'Partybus huren Rotterdam',
		href: '/steden/partybus-huren-rotterdam/',
		description: 'Groepsvervoer naar festivals vanuit Rotterdam',
	},
	{
		label: 'Partybus huren Utrecht',
		href: '/steden/partybus-huren-utrecht/',
		description: 'Centraal vertrekpunt voor festivalritten',
	},
	{
		label: 'Partybus huren Den Haag',
		href: '/steden/partybus-huren-den-haag/',
		description: 'Festivalvervoer vanuit Den Haag',
	},
	{
		label: 'Partybus huren Eindhoven',
		href: '/steden/partybus-huren-eindhoven/',
		description: 'Vertrek vanuit Eindhoven naar festivals',
	},
	{
		label: 'Partybus huren Breda',
		href: '/steden/partybus-huren-breda/',
		description: 'Handig vertrekpunt richting festivals',
	},
];

export const festivalGuideLinks: GuideLink[] = [
	{
		label: 'Prijzengids',
		href: '/gids/partybus-kosten/',
		description: 'Waar de prijs van een partybus van afhangt',
	},
	{
		label: 'Partybus huren',
		href: '/gids/partybus-huren/',
		description: 'Complete gids over partybus huren in Nederland',
	},
	{
		label: 'Vrijgezellenfeest',
		href: '/gids/partybus-huren/#guide-occasions',
		description: 'Tips voor een partybus op een vrijgezellenfeest',
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
];

export const festivalWhatsappHref =
	'https://wa.me/31684002350?text=Hallo%20Partybus%20Nederland,%0A%0AIk%20wil%20graag%20offertes%20voor%20festivalvervoer%20met%20een%20partybus.';

export const festivalBreadcrumbs = [
	{ label: 'Home', href: '/' },
	{ label: 'Gids', href: '/gids/partybus-huren/' },
	{ label: 'Festivalvervoer' },
] as const;
