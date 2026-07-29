import type { CityWhyItem } from '../cities/types';
import type { TilburgClusterLink } from './clusterPages';

export type TilburgClusterVisuals = {
	secondaryImage: string;
	secondaryImageAlt: string;
	benefits: readonly CityWhyItem[];
	attentionPoints: readonly CityWhyItem[];
	kennisbankLink: TilburgClusterLink;
};

const EXISTING_IMAGES = [
	{ src: '/images/interior-partybus.png', alt: 'Luxe interieur van een partybus met zitplaatsen en sfeerverlichting' },
	{ src: '/images/partybus-verhuur.png', alt: 'Partybus verhuur voor groepsritten in Nederland' },
	{ src: '/images/partybus-nederland.png', alt: 'Partybus Nederland - luxe groepsvervoer' },
	{ src: '/images/partybus-arena.png', alt: 'Partybus bij een evenementlocatie in Nederland' },
	{ src: '/images/partybus-collage.png', alt: 'Overzicht van partybus opties voor groepen' },
	{ src: '/images/partybus-alt.png', alt: 'Feestelijke partybus voor avondritten' },
] as const;

type VisualGroup =
	| 'party'
	| 'celebration'
	| 'corporate'
	| 'event'
	| 'capacity'
	| 'tier'
	| 'facility'
	| 'quote';

const SLUG_GROUP: Record<string, VisualGroup> = {
	'feestbus-huren': 'party',
	'discobus-huren': 'party',
	'vrijgezellenfeest-partybus': 'celebration',
	'verjaardag-partybus': 'celebration',
	'gala-partybus': 'celebration',
	'bedrijfsfeest-partybus': 'corporate',
	'festival-partybus': 'event',
	'bruiloft-partybus': 'event',
	'partybus-20-personen': 'capacity',
	'partybus-30-personen': 'capacity',
	'partybus-40-personen': 'capacity',
	'partybus-50-personen': 'capacity',
	'luxe-partybus': 'tier',
	'vip-partybus': 'tier',
	'goedkope-partybus': 'tier',
	'partybus-met-chauffeur': 'facility',
	'partybus-met-dj': 'facility',
	'partybus-met-bar': 'facility',
	'partybus-prijzen': 'quote',
	'offerte-aanvragen': 'quote',
};

const GROUP_VISUALS: Record<
	VisualGroup,
	Omit<TilburgClusterVisuals, 'secondaryImage' | 'secondaryImageAlt'>
> = {
	party: {
		benefits: [
			{ icon: 'party', title: 'Rijdende feestsfeer', text: 'Muziek, licht en een privebus - jullie groep blijft bij elkaar van Tilburg tot de bestemming.' },
			{ icon: 'group', title: 'Een verzamelpunt', text: 'Spoorzone, centrum of station: kies een duidelijke opstapplek zodat niemand hoeft te zoeken.' },
			{ icon: 'route', title: 'Route op maat', text: 'Heen, terug of met tussenstops - zet je wensen vast in de aanvraag voor vergelijkbare offertes.' },
		],
		attentionPoints: [
			{ icon: 'clock', title: 'Plan buffer in', text: 'Reken op tien tot vijftien minuten extra rond drukke Tilburgse avonden en evenementen.' },
			{ icon: 'size', title: 'Capaciteit realistisch', text: 'Tel zittende en staande gasten mee; de chauffeur telt niet mee als feestgast.' },
			{ icon: 'taxi', title: 'Chauffeur inbegrepen', text: 'Professionele bestuurder betekent dat niemand zelf hoeft te rijden na een feestavond.' },
		],
		kennisbankLink: {
			href: '/kennisbank/partybus-huren-complete-gids/',
			label: 'Complete gids: partybus huren',
		},
	},
	celebration: {
		benefits: [
			{ icon: 'party', title: 'Passend bij jullie moment', text: 'Vrijgezellenfeest, verjaardag of gala - vergelijk bussen die passen bij dresscode en groepsgrootte.' },
			{ icon: 'group', title: 'Groep bij elkaar', text: 'Iedereen reist tegelijk vanuit Tilburg; geen losse taxis of wachtrijen bij het station.' },
			{ icon: 'clock', title: 'Tijden vastleggen', text: 'Noteer vertrek, stops en eindtijd zodat aanbieders een passend voorstel kunnen doen.' },
		],
		attentionPoints: [
			{ icon: 'route', title: 'Stops expliciet maken', text: 'Foto-stop of horeca-tussenstop? Vermeld duur en locatie in je aanvraag.' },
			{ icon: 'size', title: 'Bandbreedte groepsgrootte', text: 'Geef een realistische marge voor last-minute gasten door.' },
			{ icon: 'taxi', title: 'Voorwaarden checken', text: 'Vraag naar schoonmaak, annulering en late uren voor je boekt.' },
		],
		kennisbankLink: {
			href: '/gidsen/vrijgezellenfeest/',
			label: 'Gids: partybus voor vrijgezellenfeest',
		},
	},
	corporate: {
		benefits: [
			{ icon: 'group', title: 'Representatief groepsvervoer', text: 'Collegas arriveren gelijktijdig op locatie - professioneel en overzichtelijk.' },
			{ icon: 'route', title: 'Meerdere opstappunten', text: 'Combineer kantoor, parkeerplaats of hotel; laat de route vooraf bevestigen.' },
			{ icon: 'clock', title: 'Strakke planning', text: 'Bedrijfsfeesten vragen om punctualiteit - leg vertrek- en retourtijden vast in de briefing.' },
		],
		attentionPoints: [
			{ icon: 'size', title: 'Capaciteit vs. comfort', text: 'Kies niet te krap: staanplaatsen zijn soms mogelijk, maar niet altijd wenselijk voor formele events.' },
			{ icon: 'taxi', title: 'Facturatie en voorwaarden', text: 'Vraag naar zakelijke facturatie en annuleringsvoorwaarden in de offerte.' },
			{ icon: 'route', title: 'Parkeer- en stopzones', text: 'Bedrijventerreinen en Spoorzone hebben specifieke haltes - bevestig de exacte pin.' },
		],
		kennisbankLink: {
			href: '/gidsen/bedrijven/',
			label: 'Gids: partybus voor bedrijfsuitjes',
		},
	},
	event: {
		benefits: [
			{ icon: 'party', title: 'Festival of bruiloft', text: 'Groepsvervoer vanuit Tilburg naar het terrein of de feestlocatie zonder gedoe met parkeren.' },
			{ icon: 'group', title: 'Heen en terug', text: 'Plan retourtijd vooraf zodat niemand achterblijft na afloop van het event.' },
			{ icon: 'route', title: 'Duidelijke opstap', text: 'Deel een verzamelpunt met pin in de groepsapp - essentieel bij drukke dagen.' },
		],
		attentionPoints: [
			{ icon: 'clock', title: 'Piekverkeer', text: 'Festivals en bruiloften hebben vaak drukke in- en uitstroom - plan extra marge.' },
			{ icon: 'size', title: 'Bagage en outfits', text: 'Geef door of jullie koffers, pakken of festivalspullen meenemen.' },
			{ icon: 'taxi', title: 'Terugrit bevestigen', text: 'Leg vaste opstap- en eindtijd vast; wachturen kunnen extra kosten geven.' },
		],
		kennisbankLink: {
			href: '/gidsen/festival-vervoer/',
			label: 'Gids: festivalvervoer met partybus',
		},
	},
	capacity: {
		benefits: [
			{ icon: 'size', title: 'Juiste busgrootte', text: 'Vergelijk voertuigen op zitplaatsen en staanplaatsen - passend bij jullie exacte groepsaantal.' },
			{ icon: 'group', title: 'Comfort voor iedereen', text: 'Te klein voelt krap; te groot kan onnodig kosten. Kies de bandbreedte die klopt.' },
			{ icon: 'route', title: 'Een voertuig', text: 'Een bus houdt de groep bij elkaar in plaats van meerdere autos of taxis.' },
		],
		attentionPoints: [
			{ icon: 'clock', title: 'Vroeg reserveren', text: 'Populaire groepsgroottes zijn snel vol in het weekend - vergelijk op tijd.' },
			{ icon: 'party', title: 'Faciliteiten per formaat', text: 'Niet elke bus in deze capaciteit heeft dezelfde bar, DJ-setup of toilet.' },
			{ icon: 'taxi', title: 'Chauffeur apart', text: 'De bestuurder telt niet mee in jullie passagiersaantal.' },
		],
		kennisbankLink: {
			href: '/gidsen/groepsgroottes/',
			label: 'Gids: groepsgroottes en buscapaciteit',
		},
	},
	tier: {
		benefits: [
			{ icon: 'party', title: 'Passend niveau', text: 'Luxe, VIP of budget - vergelijk bustypes en faciliteiten naast elkaar voor Tilburg.' },
			{ icon: 'group', title: 'Transparant vergelijken', text: 'Zelfde briefing naar meerdere aanbieders geeft eerlijke prijs- en kwaliteitsvergelijking.' },
			{ icon: 'route', title: 'Geen verrassingen', text: 'Vraag wat inbegrepen is: chauffeur, brandstof, schoonmaak en eventuele toeslagen.' },
		],
		attentionPoints: [
			{ icon: 'size', title: 'Fotos en specificaties', text: 'Vraag om actuele busfotos en een specificatielijst voor je kiest.' },
			{ icon: 'clock', title: 'Piekdatums', text: 'Luxe bussen zijn het snelst vol op zaterdagavonden en rond feestdagen.' },
			{ icon: 'taxi', title: 'All-in vs. basis', text: 'Controleer of drank, DJ of extra uren apart worden berekend.' },
		],
		kennisbankLink: {
			href: '/gids/partybus-kosten/',
			label: 'Gids: partybus kosten en prijsfactoren',
		},
	},
	facility: {
		benefits: [
			{ icon: 'party', title: 'Faciliteiten op maat', text: 'Chauffeur, DJ of bar - kies de extras die bij jullie Tilburg-rit passen.' },
			{ icon: 'group', title: 'Duidelijke briefing', text: 'Beschrijf must-haves in de aanvraag zodat offertes vergelijkbaar blijven.' },
			{ icon: 'route', title: 'Alles geregeld', text: 'Professionele chauffeur plus entertainment houdt de groep ontspannen onderweg.' },
		],
		attentionPoints: [
			{ icon: 'clock', title: 'Setup-tijd', text: 'DJ- of barsystemen kunnen extra in- en uitladetijd vragen - plan dat mee.' },
			{ icon: 'size', title: 'Regels aan boord', text: 'Vraag naar drankbeleid, rookregels en maximaal volume in de bus.' },
			{ icon: 'taxi', title: 'Chauffeur is leidend', text: 'De bestuurder bepaalt veiligheid en route; stem verwachtingen af vooraf.' },
		],
		kennisbankLink: {
			href: '/gidsen/partybus-muziek/',
			label: 'Gids: muziek en sfeer in de partybus',
		},
	},
	quote: {
		benefits: [
			{ icon: 'group', title: 'Gratis vergelijken', text: 'Vraag vrijblijvend meerdere offertes aan en kies zelf de beste match voor Tilburg.' },
			{ icon: 'clock', title: 'Snelle reactie', text: 'Met complete gegevens ontvang je sneller bruikbare voorstellen van aanbieders.' },
			{ icon: 'route', title: 'Een formulier', text: 'Datum, route, groepsgrootte en wensen - alles op een plek voor een scherpe aanvraag.' },
		],
		attentionPoints: [
			{ icon: 'size', title: 'Wees specifiek', text: 'Hoe completer je aanvraag, hoe minder heen-en-weer na de eerste offerte.' },
			{ icon: 'party', title: 'Geen vaste landelijke prijs', text: 'Prijzen hangen af van datum, route en bustype - vergelijking is essentieel.' },
			{ icon: 'taxi', title: 'Vrijblijvend', text: 'Je zit nergens aan vast tot je bewust een aanbieder kiest en bevestigt.' },
		],
		kennisbankLink: {
			href: '/gidsen/partybus-prijzen/',
			label: 'Gids: partybus prijzen en kosten',
		},
	},
};

const SLUG_INDEX = [
	'feestbus-huren',
	'discobus-huren',
	'vrijgezellenfeest-partybus',
	'bedrijfsfeest-partybus',
	'verjaardag-partybus',
	'gala-partybus',
	'festival-partybus',
	'bruiloft-partybus',
	'partybus-20-personen',
	'partybus-30-personen',
	'partybus-40-personen',
	'partybus-50-personen',
	'luxe-partybus',
	'vip-partybus',
	'goedkope-partybus',
	'partybus-met-chauffeur',
	'partybus-met-dj',
	'partybus-met-bar',
	'partybus-prijzen',
	'offerte-aanvragen',
] as const;

const KENNISBANK_OVERRIDES: Partial<Record<string, TilburgClusterLink>> = {
	'verjaardag-partybus': { href: '/gids/partybus-huren/', label: 'Gids: partybus huren' },
	'gala-partybus': { href: '/gidsen/bruiloften/', label: 'Gids: partybus voor bruiloften' },
	'bruiloft-partybus': { href: '/gidsen/bruiloften/', label: 'Gids: partybus voor bruiloften' },
	'discobus-huren': { href: '/gidsen/partybus-muziek/', label: 'Gids: muziek in de partybus' },
	'partybus-met-bar': { href: '/gidsen/drankbeleid/', label: 'Gids: drankbeleid in de partybus' },
	'partybus-met-dj': { href: '/gidsen/partybus-muziek/', label: 'Gids: muziek en sfeer in de partybus' },
	'offerte-aanvragen': {
		href: '/kennisbank/partybus-huren-complete-gids/',
		label: 'Complete gids: partybus huren',
	},
};

export function getTilburgClusterVisuals(slug: string): TilburgClusterVisuals {
	const group = SLUG_GROUP[slug] ?? 'party';
	const base = GROUP_VISUALS[group];
	const index = Math.max(0, SLUG_INDEX.indexOf(slug as (typeof SLUG_INDEX)[number]));
	const image = EXISTING_IMAGES[index % EXISTING_IMAGES.length];

	return {
		secondaryImage: image.src,
		secondaryImageAlt: image.alt,
		benefits: base.benefits,
		attentionPoints: base.attentionPoints,
		kennisbankLink: KENNISBANK_OVERRIDES[slug] ?? base.kennisbankLink,
	};
}
