/**
 * Pricing guide content — modular for Star Local pSEO Suite.
 * No fixed euro amounts. No availability guarantees. Max 80 persons.
 */

export type GuideFaq = {
	question: string;
	answer: string;
};

export type GuideFactor = {
	title: string;
	text: string;
};

export type GuideScenario = {
	title: string;
	text: string;
};

export type GuideLink = {
	label: string;
	href: string;
	description?: string;
};

export const pricingGuideSeo = {
	title: 'Wat kost een partybus huren? | Prijsfactoren en tips',
	description:
		'Ontdek waar de prijs van een partybus vanaf hangt. Lees over route, uren, groepsgrootte, wachttijd en handige bespaartips.',
	canonical: 'https://www.partybusnederland.nl/gids/partybus-kosten/',
	ogImage: 'https://www.partybusnederland.nl/images/hero-partybus.png',
	h1: 'Wat kost een partybus huren?',
	eyebrow: 'GIDS',
	lead: 'De prijs van een partybus hangt af van meerdere factoren: route, uren, datum, groepsgrootte en extra’s. Op deze pagina leggen we uit waar je op let — zonder vaste of misleidende tarieven.',
} as const;

export const pricingFactorsDetailed: GuideFactor[] = [
	{
		title: 'Afstand en route',
		text: 'Hoe verder de rit en hoe complexer de route, hoe meer dit meespeelt in de offerte. Denk aan snelwegen versus binnenstedelijke stops, omwegen en de eindbestemming.',
	},
	{
		title: 'Aantal uren',
		text: 'Niet alleen de rijtijd telt. De totale huurduur — inclusief ophalen, wachten en terugrijden — bepaalt een groot deel van de prijsopbouw.',
	},
	{
		title: 'Dag en tijdstip',
		text: 'Weekenden, feestdagen, late avondritten en piekmomenten rond festivals zijn vaak anders geprijsd dan een doordeweekse middagrit. Geef datum en tijden altijd door.',
	},
	{
		title: 'Groepsgrootte',
		text: 'Partybussen verschillen in capaciteit. Groepen tot maximaal 80 personen zijn mogelijk, afhankelijk van het voertuig. Hoe groter de bus, hoe meer dit de offerte beïnvloedt.',
	},
	{
		title: 'Type partybus',
		text: 'Een compacte bus, een grotere partybus of een luxere uitvoering met uitgebreide audio en verlichting zitten in verschillende segmenten. Kies wat past bij jullie gelegenheid.',
	},
	{
		title: 'Aantal opstapplaatsen',
		text: 'Meerdere ophaalpunten betekenen meer kilometers en tijd. Combineer waar mogelijk, of vermeld alle stops vooraf zodat de offerte klopt.',
	},
	{
		title: 'Wachttijd',
		text: 'Blijft de chauffeur wachten tijdens een diner, ceremonie of festival? Wachttijd is vaak een aparte post. Plan dit realistisch in je aanvraag.',
	},
	{
		title: 'Extra voorzieningen',
		text: 'Denk aan uitgebreide geluidsinstallatie, bararrangement, decoratie of speciale wensen. Vraag alleen wat je nodig hebt — zo blijft de vergelijking overzichtelijk.',
	},
	{
		title: 'Festivals of buitenland',
		text: 'Ritten naar festivals of bestemmingen in België of Duitsland vragen vaak om extra planning: grens, festivalverkeer, langere uren en soms bagage. Vermeld dit duidelijk.',
	},
];

export const noFixedPriceReasons: string[] = [
	'Vertrekplaats',
	'Bestemming',
	'Datum',
	'Tijden (vertrek, aankomst, eventuele retour)',
	'Aantal personen (tot max. 80)',
	'Gewenste stops of opstapplaatsen',
	'Bijzondere wensen (wachttijd, voorzieningen, festival of buitenland)',
];

export const pricingScenarios: GuideScenario[] = [
	{
		title: 'Korte avondrit vanuit Breda',
		text: 'Een avondrit in of rond Breda met één opstapplaats en een vaste eindbestemming. Relatief overzichtelijke route en tijdsduur — ideaal om eerst scherp te plannen en daarna offertes te vergelijken.',
	},
	{
		title: 'Festivalrit vanuit Rotterdam',
		text: 'Heen- en vaak terugrit naar een festival, met rekening voor festivalverkeer en langere uren. Geef festivalnaam, dag(en) en of bagage mee moet in de aanvraag.',
	},
	{
		title: 'Bruiloft met meerdere stops',
		text: 'Ceremonie, fotolocatie, receptie en feestlocatie in één dag. Timing en wachttijd tussen stops wegen zwaar mee — een duidelijke planning helpt aanbieders scherp te offreren.',
	},
	{
		title: 'Bedrijfsuitje met retourrit',
		text: 'Ophalen op kantoor of station, heen naar de activiteit en ’s avonds terug. Groepsgrootte, dresscode en vaste tijden maken de aanvraag concreet.',
	},
	{
		title: 'Rit naar België',
		text: 'Een grensoverschrijdende rit vraagt om heldere bestemming, tijden en eventuele festival- of stadsstops. Niet elke aanbieder biedt hetzelfde aan — daarom is vergelijken zinvol.',
	},
];

export const savingsTips: GuideFactor[] = [
	{
		title: 'Vroeg aanvragen',
		text: 'Zeker rond weekenden en festivals. Je krijgt meer keuze en aanbieders kunnen beter plannen. Beschikbaarheid verschilt per periode — wij garanderen die niet.',
	},
	{
		title: 'Exacte route doorgeven',
		text: 'Vertrek, bestemming en stops in één keer. Onduidelijke routes leiden tot ruime of onvergelijkbare offertes.',
	},
	{
		title: 'Groepsgrootte vooraf bepalen',
		text: 'Een realistisch aantal personen (tot max. 80) voorkomt dat je een te grote of te kleine bus aangeboden krijgt.',
	},
	{
		title: 'Meerdere offertes vergelijken',
		text: 'Kijk naar prijs én voorwaarden: wachttijd, capaciteit, wat er bij muziek en licht hoort, en annuleringsregels.',
	},
	{
		title: 'Onnodige wachttijd voorkomen',
		text: 'Plan strak waar dat kan. Alleen wachten laten opnemen wanneer het echt nodig is voor jullie programma.',
	},
	{
		title: 'Opstapplaatsen combineren',
		text: 'Minder ophaalpunten betekent vaak een eenvoudiger en scherper voorstel. Spreek één verzamelplek af als dat past.',
	},
];

export const quoteChecklist: string[] = [
	'Vertrekplaats (stad en bij voorkeur concrete opstapplaats)',
	'Eindbestemming',
	'Datum van de rit',
	'Gewenste vertrek- en aankomsttijden',
	'Of je een retourrit nodig hebt',
	'Aantal personen (maximaal 80)',
	'Alle gewenste tussenstops of extra opstapplaatsen',
	'Of er wachttijd nodig is, en hoe lang ongeveer',
	'Type gelegenheid (festival, bruiloft, bedrijfsuitje, avondrit, …)',
	'Bijzondere wensen (voorzieningen, bagage, buitenland)',
];

export const pricingFaqs: GuideFaq[] = [
	{
		question: 'Waar hangt de prijs van een partybus vanaf?',
		answer:
			'Van onder meer afstand en route, aantal uren, dag en tijdstip, groepsgrootte, type bus, opstapplaatsen, wachttijd, extra voorzieningen en of je naar een festival of het buitenland wilt. Pas met die gegevens kan een aanbieder een passende prijsopgave doen.',
	},
	{
		question: 'Is een langere rit altijd duurder?',
		answer:
			'Vaak wel, omdat afstand en uren zwaar meewegen. Toch speelt ook mee of er wachttijd, meerdere stops of piekmomenten bij zitten. Een langere rit zonder wachten kan anders uitpakken dan een kortere rit met veel idle-tijd.',
	},
	{
		question: 'Kan ik meerdere offertes vergelijken?',
		answer:
			'Ja. Via Partybus Nederland vraag je vrijblijvend meerdere voorstellen aan. Zo leg je capaciteit, voorwaarden en prijsopbouw naast elkaar zonder meteen te kiezen.',
	},
	{
		question: 'Kost wachten extra?',
		answer:
			'Wachttijd is bij veel ritten een aparte factor. Of en hoe dit wordt berekend, verschilt per aanbieder. Vermeld in je aanvraag of de chauffeur moet wachten en hoe lang ongeveer.',
	},
	{
		question: 'Kan ik naar België of Duitsland?',
		answer:
			'Ritten naar België of Duitsland zijn vaak mogelijk, bijvoorbeeld voor festivals of steden. Vermeld land, bestemming en tijden duidelijk. Aanbieders geven dan aan wat voor jouw rit haalbaar is.',
	},
	{
		question: 'Maakt het aantal personen verschil?',
		answer:
			'Ja. De groepsgrootte bepaalt welk type partybus past. Partybus Nederland vergelijkt mogelijkheden tot maximaal 80 personen; de exacte capaciteit verschilt per voertuig.',
	},
	{
		question: 'Zijn drankjes inbegrepen?',
		answer:
			'Dat verschilt per aanbieder en arrangement. Soms mag je eigen consumpties meenemen, soms is er een baroptie. Vraag dit altijd mee, zodat je offertes eerlijk vergelijkt.',
	},
	{
		question: 'Hoe snel krijg ik een prijsvoorstel?',
		answer:
			'Na een complete aanvraag gaan we aan de slag met passende aanbieders. In de praktijk ontvang je vaak binnen korte tijd meerdere voorstellen. Exacte snelheid hangt af van datum, route en beschikbaarheid bij aanbieders.',
	},
];

export const pricingInternalLinks: GuideLink[] = [
	{
		label: 'Complete gids: partybus huren',
		href: '/kennisbank/partybus-huren-complete-gids/',
		description: 'Mastergids over groepsgrootte, opstapplaatsen, festivals en boeken',
	},
	{
		label: 'Gratis offertes aanvragen',
		href: '/gratis-partybus-offertes-aanvragen/',
		description: 'Vrijblijvend meerdere prijsvoorstellen vergelijken',
	},
	{
		label: 'Partybus vanuit Rotterdam',
		href: '/steden/partybus-huren-rotterdam/',
		description: 'Vertrekstad met bestemmingen en tips',
	},
	{
		label: 'Partybus vanuit Amsterdam',
		href: '/steden/partybus-huren-amsterdam/',
		description: 'Informatie en offertes vanuit Amsterdam',
	},
	{
		label: 'Partybus vanuit Breda',
		href: '/steden/partybus-huren-breda/',
		description: 'Vertrek vanuit Breda naar festivals en steden',
	},
	{
		label: 'Festivalinformatie',
		href: '/gids/partybus-huren/#guide-destinations',
		description: 'Festivals, routes en bestemmingen',
	},
	{
		label: 'Gelegenhedengids',
		href: '/gids/partybus-huren/#guide-occasions',
		description: 'Tips per gelegenheid: festival, bruiloft en meer',
	},
	{
		label: 'Complete partybus-gids',
		href: '/gids/partybus-huren/',
		description: 'Algemene informatie over partybus huren',
	},
];

export const pricingBreadcrumbs = [
	{ label: 'Home', href: '/' },
	{ label: 'Gids', href: '/gids/partybus-huren/' },
	{ label: 'Wat kost een partybus' },
] as const;
