import type { KennisbankArticle } from '../types';
import { buildTourgoWhatsappHref } from '../../partners/tourgoPartybussen';

const heroFoto = {
	src: '/images/partners/tourgo-partybussen/tourgo-partybussen-hero.webp',
	filename: 'tourgo-partybussen-hero.webp',
	baseName: 'tourgo-partybussen-hero',
	alt: 'Tourgo Partybussen partybus op straat',
	title: 'Partybus van Tourgo Partybussen',
	width: 1920,
	height: 1280,
} as const;

const straatFoto = {
	src: '/images/partners/tourgo-partybussen/tourgo-partybussen-street.webp',
	filename: 'tourgo-partybussen-street.webp',
	baseName: 'tourgo-partybussen-street',
	alt: 'Tourgo partybus tijdens een rit',
	title: 'Partybus onderweg met Tourgo Partybussen',
	width: 1600,
	height: 1200,
} as const;

export const samenwerkingTourgoZuidHolland: KennisbankArticle = {
	slug: 'samenwerking-tourgo-partybussen-zuid-holland',
	path: '/kennisbank/samenwerking-tourgo-partybussen-zuid-holland/',
	canonical:
		'https://www.partybusnederland.nl/kennisbank/samenwerking-tourgo-partybussen-zuid-holland/',
	seoTitle: 'PartybusNederland.nl werkt samen met Tourgo Partybussen',
	metaDescription:
		'PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo Partybussen voor partybusvervoer vanuit gemeenten in de provincie.',
	h1: 'Samenwerking met Tourgo Partybussen in Zuid-Holland',
	eyebrow: 'KENNISBANK · ZUID-HOLLAND',
	lead: 'PartybusNederland.nl breidt de samenwerking met regionale vervoerspartners verder uit. Voor Zuid-Holland werken we samen met Tourgo Partybussen. Dat is onze vervoerspartner voor deze provincie. Bezoekers uit Zuid-Holland kunnen via PartybusNederland.nl een aanvraag doen. Die aanvraag wordt gekoppeld aan Tourgo Partybussen.',
	heroImage: heroFoto,
	ctaImage: straatFoto,
	heroPrimaryHref: '/provincies/zuid-holland/',
	heroPrimaryLabel: 'Bekijk Zuid-Holland',
	sections: [
		{
			id: 'regionale-partners',
			title: 'Samenwerking per provincie, verder uitgebreid',
			paragraphs: [
				'PartybusNederland.nl groeit door per provincie een vaste vervoerspartner te benoemen. Bezoekers zien daardoor meteen wie in hun regio de rit in behandeling neemt. Een provinciale partner maakt de route van vraag naar rit korter en overzichtelijker.',
				'Die lijn trekken we verder door. Voor Zuid-Holland is de partner Tourgo Partybussen. De provinciepagina, de gemeentepagina’s en dit artikel vertellen hetzelfde: wie vanuit Zuid-Holland een partybus zoekt, doet de aanvraag via PartybusNederland.nl. Die aanvraag gaat naar Tourgo Partybussen.',
			],
		},
		{
			id: 'partner-zuid-holland',
			title: 'Tourgo Partybussen, partner voor Zuid-Holland',
			paragraphs: [
				'Tourgo Partybussen is de vervoerspartner van PartybusNederland.nl voor Zuid-Holland. De samenwerking geldt voor de provincie: grote steden, middelgrote gemeenten en kleinere plaatsen. Vertrek je vanuit Zuid-Holland, dan komt de aanvraag bij dit aanspreekpunt terecht.',
				'Dat is bewust zo gezet. In Zuid-Holland werk je via PartybusNederland.nl met Tourgo Partybussen. Je hoeft niet zelf te zoeken wie de rit kan oppakken. Het platform is de ingang; Tourgo Partybussen behandelt de aanvraag voor deze provincie.',
			],
			moreLink: {
				label: 'Naar de provinciepagina Zuid-Holland',
				href: '/provincies/zuid-holland/',
			},
		},
		{
			id: 'aanvraag',
			title: 'Een aanvraag vanuit Zuid-Holland',
			paragraphs: [
				'Bezoekers uit Zuid-Holland kunnen via PartybusNederland.nl een aanvraag doen. Het startpunt is de provinciepagina. Daar geef je door wat de rit vraagt: datum, opstapplaats, bestemming, aantal personen en de gelegenheid. Hoe scherper die gegevens, hoe gerichter Tourgo Partybussen kan reageren.',
				'De aanvraag via het platform wordt gekoppeld aan de partner voor Zuid-Holland. Je hoeft geen aparte inbox te zoeken. Tourgo Partybussen laat op basis van jullie gegevens weten wat er mogelijk is. Beschikbaarheid en de invulling van de rit stem je vervolgens met deze partner af.',
				'Liever kort schakelen? Via WhatsApp bereik je Tourgo Partybussen vanuit dezelfde provinciepagina. Noem in elk geval de datum en de vertrekplaats, zodat het eerste contact meteen bruikbaar is. Een eerste bericht hoeft nog geen complete route te zijn.',
			],
		},
		{
			id: 'gemeenten',
			title: 'Veel vertrekplaatsen, één provinciale route',
			paragraphs: [
				'Zuid-Holland kent veel verschillende vertrekplaatsen en bestemmingen. Rotterdam, Den Haag en Leiden liggen dicht bij elkaar, maar verschillen in opstapplek, avonddrukte en het type rit. Een groep uit Rotterdam plant vaak een andere avond dan een gezelschap uit Leiden of Den Haag. De gemeentepagina’s geven die lokale context; de aanvraag zelf gaat naar dezelfde partner.',
				'Dat is praktisch omdat Zuid-Hollandse groepen zelden binnen één wijk blijven. Een diner in de eigen stad, een feest in een buurgemeente, een avond in de Randstad of een rit naar een evenement verderop: de opstap ligt in Zuid-Holland, de bestemming wisselt. Eén provinciaal aanspreekpunt houdt die ritten overzichtelijk.',
				'Via de provincie- en gemeentepagina’s ga je verder naar de juiste aanvraagmogelijkheid. Wie in Rotterdam, Den Haag of Leiden vertrekt, vindt daar lokale uitleg. Wie vanuit een andere Zuid-Hollandse gemeente vertrekt, gebruikt dezelfde provinciale ingang. De partner blijft Tourgo Partybussen.',
			],
			moreLink: {
				label: 'Partybus huren in Rotterdam',
				href: '/steden/partybus-huren-rotterdam/',
			},
		},
		{
			id: 'gelegenheden',
			title: 'Wanneer een partybus past',
			paragraphs: [
				'Een partybus is bedoeld voor groepen die samen willen reizen en de rit onderdeel van het programma maken. Denk aan bruiloften, verjaardagen, bedrijfsfeesten, festivals, vrijgezellenfeesten, evenementen en overig groepsvervoer. Niemand in het gezelschap hoeft te rijden. Iedereen vertrekt samen en komt samen terug.',
				'De gelegenheid stuurt de planning. Een bruiloft vraagt vaak een strakke timing tussen locaties. Een festivalrit draait om heen- en terugreis rond drukke wegen. Een bedrijfsfeest vraagt duidelijkheid over opstapplaats en eindtijd. Zet die context in de aanvraag, zodat Tourgo Partybussen weet wat jullie dag of avond vraagt.',
				'Ook een verjaardag of een bedrijfsuitje is een reden om de groep in één rit te houden. Die context hoort in de aanvraag.',
			],
			moreLink: {
				label: 'Partybus huren in Den Haag',
				href: '/steden/partybus-huren-den-haag/',
			},
		},
		{
			id: 'regionale-partner',
			title: 'Waarom een regionale partner in Zuid-Holland werkt',
			paragraphs: [
				'Een regionale vervoerspartner is praktisch als de provincie veel gemeenten, korte ritten en wisselende bestemmingen kent. Zuid-Holland is dichtbevolkt en sterk verbonden. Afstanden tussen steden zijn vaak kort, terwijl opstapplekken, evenementen en avonddrukte per gemeente verschillen. Eén partner die de provincie als werkgebied heeft, kan die ritten in één lijn behandelen.',
				'Daarom is Tourgo Partybussen de partner voor Zuid-Holland. Je start op PartybusNederland.nl, opent de provinciepagina of je gemeentepagina, en de aanvraag komt bij dezelfde partij terecht. Dat is overzichtelijker dan verspreide contacten zonder vaste route.',
			],
			moreLink: {
				label: 'Partybus huren in Leiden',
				href: '/steden/partybus-huren-leiden/',
			},
		},
		{
			id: 'verder-lezen',
			title: 'Van artikel naar aanvraag',
			paragraphs: [
				'Dit artikel legt de samenwerking uit. De provinciepagina is de plek om de aanvraag te starten. De gemeentepagina’s van onder meer Rotterdam, Den Haag en Leiden helpen om de lokale opstap te plaatsen. In de kennisbank vind je daarnaast bredere uitleg over partybusvervoer, los van deze provincie.',
				'Heb je nog geen exacte route? Een eerste bericht met datum, plaats in Zuid-Holland en groepsgrootte is al genoeg om te beginnen. Tourgo Partybussen pakt de aanvraag op als partner van PartybusNederland.nl voor deze provincie.',
				'Kort gezegd: PartybusNederland.nl is de ingang, Tourgo Partybussen is de vervoerspartner voor Zuid-Holland, en de provinciepagina brengt je naar de aanvraag.',
			],
			moreLink: {
				label: 'Terug naar de kennisbank',
				href: '/kennisbank/',
			},
		},
	],
	checklist: {
		title: 'Wat geef je door in je aanvraag?',
		lead: 'Met deze gegevens kan Tourgo Partybussen gericht reageren op een rit in Zuid-Holland.',
		items: [
			'Datum van de rit',
			'Opstapplaats in Zuid-Holland',
			'Bestemming en eventuele tussenstops',
			'Gewenste vertrek- en terugtijd',
			'Aantal personen',
			'Gelegenheid, zoals bruiloft, verjaardag, bedrijfsfeest, festival, vrijgezellenfeest of evenement',
		],
	},
	faqs: [
		{
			question: 'Wie is de partner voor partybusvervoer in Zuid-Holland?',
			answer:
				'PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo Partybussen. Dat is onze vervoerspartner voor deze provincie. Een aanvraag via de provinciepagina gaat naar Tourgo Partybussen.',
		},
		{
			question: 'Kan ik vanuit Rotterdam, Den Haag of Leiden een aanvraag doen?',
			answer:
				'Ja. De samenwerking geldt voor Zuid-Holland. Vertrek je vanuit Rotterdam, Den Haag, Leiden of een andere gemeente in de provincie, dan kun je een aanvraag doen via de provinciepagina of via de gemeentepagina van jouw plaats.',
		},
		{
			question: 'Hoe neem ik contact op met Tourgo Partybussen?',
			answer:
				'Via PartybusNederland.nl. Op de provinciepagina Zuid-Holland start je de aanvraag. Daar is ook WhatsApp beschikbaar. Je hoeft niet zelf een ander kanaal te zoeken.',
		},
		{
			question: 'Voor welke gelegenheden kan ik een partybus aanvragen?',
			answer:
				'Groepen vragen een partybus aan voor onder meer bruiloften, verjaardagen, bedrijfsfeesten, festivals, vrijgezellenfeesten, evenementen en overig groepsvervoer. Vermeld de gelegenheid in de aanvraag, zodat de planning daarbij kan aansluiten.',
		},
	],
	summary: {
		title: 'Kort samengevat',
		paragraphs: [
			'PartybusNederland.nl breidt de samenwerking met regionale vervoerspartners verder uit. In Zuid-Holland werken we samen met Tourgo Partybussen. Bezoekers doen een aanvraag via het platform; die aanvraag wordt gekoppeld aan deze partner.',
			'De samenwerking geldt voor de provincie, inclusief plaatsen als Rotterdam, Den Haag en Leiden. Bruiloften, verjaardagen, bedrijfsfeesten, festivals, vrijgezellenfeesten, evenementen en groepsvervoer horen daarbij. Start op de provinciepagina als je een rit nodig hebt.',
		],
	},
	cta: {
		title: 'Partybus nodig in Zuid-Holland?',
		lead: 'PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo Partybussen. Open de provinciepagina om verder te gaan, of stuur een WhatsApp.',
		primaryHref: '/provincies/zuid-holland/',
		primaryLabel: 'Bekijk Zuid-Holland',
		whatsappHref: buildTourgoWhatsappHref('Zuid-Holland'),
		whatsappLabel: 'WhatsApp Tourgo Partybussen',
		onDark: true,
	},
	relatedLinks: [
		{
			label: 'Partybus Zuid-Holland',
			href: '/provincies/zuid-holland/',
			description: 'Provinciepagina met aanvraagmogelijkheid voor Zuid-Holland',
		},
		{
			label: 'Kennisbank',
			href: '/kennisbank/',
			description: 'Overzicht van artikelen over partybusvervoer',
		},
		{
			label: 'Partybus huren: complete gids',
			href: '/kennisbank/partybus-huren-complete-gids/',
			description: 'Praktische uitleg over partybusvervoer voor groepen',
		},
		{
			label: 'Gids partybus huren',
			href: '/gids/partybus-huren/',
			description: 'Korte gids over huren, planning en aandachtspunten',
		},
		{
			label: 'Contact',
			href: '/contact/',
			description: 'Vragen over PartybusNederland.nl',
		},
	],
	cityLinks: [
		{
			label: 'Partybus huren Rotterdam',
			href: '/steden/partybus-huren-rotterdam/',
			description: 'Aanvraag vanuit Rotterdam in Zuid-Holland',
		},
		{
			label: 'Partybus huren Den Haag',
			href: '/steden/partybus-huren-den-haag/',
			description: 'Aanvraag vanuit Den Haag in Zuid-Holland',
		},
		{
			label: 'Partybus huren Leiden',
			href: '/steden/partybus-huren-leiden/',
			description: 'Aanvraag vanuit Leiden in Zuid-Holland',
		},
	],
	trustNote:
		'PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo Partybussen. Aanvragen via deze pagina’s gaan naar deze partner. Beschikbaarheid en invulling van de rit stem je met Tourgo Partybussen af.',
};
