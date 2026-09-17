import type { KennisbankArticle } from '../types';
import { buildPrestigeCoachServiceWhatsappHref } from '../../partners/prestigeCoachService';

const groepsfoto = {
	src: '/images/partners/prestige-coach-service/prestige-coach-service-groepsfoto.webp',
	filename: 'prestige-coach-service-groepsfoto.webp',
	baseName: 'prestige-coach-service-groepsfoto',
	alt: 'Groep bij een partybus van Prestige Coach Service',
	title: 'Partybus groepsvervoer met Prestige Coach Service',
	width: 1200,
	height: 904,
} as const;

const vuurshow = {
	src: '/images/partners/prestige-coach-service/prestige-coach-service-vuurshow.webp',
	filename: 'prestige-coach-service-vuurshow.webp',
	baseName: 'prestige-coach-service-vuurshow',
	alt: 'Prestige Coach Service partybus tijdens een avondrit',
	title: 'Partybus van Prestige Coach Service',
	width: 1200,
	height: 800,
} as const;

export const samenwerkingPrestigeNoordBrabant: KennisbankArticle = {
	slug: 'samenwerking-prestige-coach-service-noord-brabant',
	path: '/kennisbank/samenwerking-prestige-coach-service-noord-brabant/',
	canonical:
		'https://www.partybusnederland.nl/kennisbank/samenwerking-prestige-coach-service-noord-brabant/',
	seoTitle: 'PartybusNederland.nl werkt samen met Prestige Coach Service',
	metaDescription:
		'PartybusNederland.nl werkt in Noord-Brabant samen met Prestige Coach Service voor partybusvervoer vanuit alle gemeenten in de provincie.',
	h1: 'Samenwerking met Prestige Coach Service in Noord-Brabant',
	eyebrow: 'KENNISBANK · NOORD-BRABANT',
	lead: 'PartybusNederland.nl wordt verder uitgebreid. Voor partybusvervoer in Noord-Brabant werken we samen met Prestige Coach Service: onze vervoerspartner voor deze provincie. Via het platform kun je rechtstreeks een aanvraag doen. Prestige Coach Service behandelt ritten vanuit de Brabantse gemeenten.',
	heroImage: groepsfoto,
	ctaImage: vuurshow,
	heroPrimaryHref: '/provincies/noord-brabant/',
	heroPrimaryLabel: 'Aanvraag doen in Noord-Brabant',
	sections: [
		{
			id: 'uitbreiding',
			title: 'PartybusNederland.nl groeit verder',
			paragraphs: [
				'PartybusNederland.nl is het platform waarop groepen informatie vinden over partybusvervoer en een aanvraag kunnen starten. We bouwen die dekking stap voor stap uit. Per provincie maken we duidelijk met wie bezoekers in die regio te maken hebben, zodat de weg van vraag naar rit overzichtelijk blijft.',
				'Noord-Brabant is een van die provincies. Daar is Prestige Coach Service onze partner in Noord-Brabant. Bezoekers die vanuit Brabant een partybus zoeken, hoeven dus niet zelf te achterhalen wie de rit kan verzorgen. De aanvraag loopt via PartybusNederland.nl naar deze partner.',
			],
		},
		{
			id: 'partner-noord-brabant',
			title: 'Prestige Coach Service: vervoerspartner voor Noord-Brabant',
			paragraphs: [
				'Prestige Coach Service is de partner voor partybusvervoer in Noord-Brabant. De samenwerking geldt voor de provincie als geheel: van de grotere steden tot kleinere gemeenten. Of je nu een avondprogramma plant of een rit naar een evenement, de aanvraag komt bij hetzelfde aanspreekpunt terecht.',
				'Dat is bewust zo ingericht. In Noord-Brabant werken we met één partner. Daardoor is helder wie de aanvraag in behandeling neemt. Via PartybusNederland.nl neem je contact op met Prestige Coach Service, zonder omwegen.',
			],
			moreLink: {
				label: 'Naar de provinciepagina Noord-Brabant',
				href: '/provincies/noord-brabant/',
			},
		},
		{
			id: 'aanvraag',
			title: 'Rechtstreeks een aanvraag doen',
			paragraphs: [
				'Op de provinciepagina van Noord-Brabant staat een aanvraagformulier. Daar geef je de kern van de rit door: datum, opstapplaats, bestemming, aantal personen en de gelegenheid. Hoe concreter die gegevens, hoe gerichter Prestige Coach Service kan reageren.',
				'Een aanvraag via PartybusNederland.nl is de vaste route naar de partner. Je hoeft geen aparte inbox te zoeken. De gegevens gaan naar Prestige Coach Service, die op basis daarvan laat weten wat er mogelijk is voor jullie rit.',
				'Wil je liever kort schakelen? Via dezelfde provinciepagina is WhatsApp beschikbaar. Vermeld dan in elk geval de datum en de vertrekplaats, zodat het eerste contact meteen bruikbaar is.',
			],
		},
		{
			id: 'brabantse-gemeenten',
			title: 'Aanvragen vanuit Brabantse gemeenten',
			paragraphs: [
				'De samenwerking dekt Noord-Brabant. Vertrek je vanuit Breda, Tilburg, Eindhoven of een andere gemeente in de provincie, dan kun je een aanvraag doen voor een rit vanuit jouw plaats. De gemeentepagina’s helpen om de lokale context te vinden; de aanvraag zelf gaat naar dezelfde partner.',
				'Dat is handig omdat Brabantse groepen zelden alleen binnen één postcode reizen. Een verjaardag in de eigen stad, een bruiloft in een buurgemeente of een avond naar een evenement verderop: de opstapplaats ligt in Brabant, de bestemming vaak ook, of juist daarbuiten. Eén provinciaal aanspreekpunt houdt die ritten overzichtelijk.',
			],
			moreLink: {
				label: 'Partybus huren in Breda',
				href: '/steden/partybus-huren-breda/',
			},
		},
		{
			id: 'gelegenheden',
			title: 'Waarvoor groepen een partybus gebruiken',
			paragraphs: [
				'Een partybus wordt ingezet als de groep samen wil reizen en de rit onderdeel van het programma is. Denk aan bruiloften, verjaardagen, bedrijfsfeesten, festivals, vrijgezellenfeesten en overig groepsvervoer. Niemand in het gezelschap hoeft te rijden, en iedereen vertrekt en komt weer samen terug.',
				'De gelegenheid bepaalt vooral de planning. Een bruiloft vraagt vaak een strakke timing tussen locaties. Een festivalrit draait om heen- en terugreis rond drukke wegen en verzamelpunten. Een bedrijfsfeest vraagt duidelijkheid over opstapplaats en eindtijd. Zet die context in de aanvraag, zodat Prestige Coach Service weet wat jullie avond of dag vraagt.',
			],
			moreLink: {
				label: 'Partybus huren in Tilburg',
				href: '/steden/partybus-huren-tilburg/',
			},
		},
		{
			id: 'provinciale-dekking',
			title: 'Waarom provinciale dekking praktisch is',
			paragraphs: [
				'Noord-Brabant is groot genoeg om ritten over gemeentegrenzen gewoon te maken, en klein genoeg om die ritten bij één partner te beleggen. Een groep uit Eindhoven die naar een feestlocatie rijdt, een gezelschap uit Tilburg dat een festival bezoekt, of een bruiloft met gasten uit meerdere Brabantse plaatsen: de vertrekpunten verschillen, de vraag blijft hetzelfde.',
				'Provinciale dekking voorkomt dat je per stad opnieuw moet beginnen. Je start op PartybusNederland.nl, kiest Noord-Brabant of je gemeente, en Prestige Coach Service ziet de rit in de context van de provincie. Dat is overzichtelijker dan verspreide contacten zonder vaste route.',
			],
			moreLink: {
				label: 'Partybus huren in Eindhoven',
				href: '/steden/partybus-huren-eindhoven/',
			},
		},
		{
			id: 'contact-via-platform',
			title: 'Contact via PartybusNederland.nl',
			paragraphs: [
				'Bezoekers nemen via PartybusNederland.nl contact op met de partner. De provinciepagina is het startpunt: daar staan het aanvraagformulier en WhatsApp. Gemeentepagina’s in Noord-Brabant verwijzen naar dezelfde samenwerking, zodat je vanuit Breda, Tilburg, Eindhoven of een andere plaats dezelfde partner bereikt.',
				'Gebruik het platform als ingang. Zo blijft duidelijk dat de aanvraag bij Prestige Coach Service hoort, en dat de samenwerking voor Noord-Brabant geldt. Heb je nog geen exacte route, dan is een eerste aanvraag met datum, plaats en groepsgrootte al voldoende om het gesprek te starten.',
			],
		},
	],
	checklist: {
		title: 'Wat geef je door in je aanvraag?',
		lead: 'Met deze gegevens kan Prestige Coach Service gericht reageren op een rit in Noord-Brabant.',
		items: [
			'Datum van de rit',
			'Opstapplaats in Noord-Brabant',
			'Bestemming en eventuele tussenstops',
			'Gewenste vertrek- en terugtijd',
			'Aantal personen',
			'Gelegenheid, zoals bruiloft, verjaardag, bedrijfsfeest, festival of vrijgezellenfeest',
		],
	},
	faqs: [
		{
			question: 'Wie is de partner voor partybusvervoer in Noord-Brabant?',
			answer:
				'PartybusNederland.nl werkt in Noord-Brabant samen met Prestige Coach Service. Dat is onze vervoerspartner voor deze provincie. Aanvragen via de provinciepagina gaan naar Prestige Coach Service.',
		},
		{
			question: 'Kan ik vanuit elke Brabantse gemeente een aanvraag doen?',
			answer:
				'Ja. De samenwerking geldt voor Noord-Brabant. Vertrek je vanuit een Brabantse gemeente, dan kun je een aanvraag doen via de provinciepagina of via de gemeentepagina van jouw plaats.',
		},
		{
			question: 'Hoe neem ik contact op met Prestige Coach Service?',
			answer:
				'Via PartybusNederland.nl. Op de provinciepagina Noord-Brabant staat een aanvraagformulier. Daar is ook WhatsApp beschikbaar. Je hoeft niet zelf een ander kanaal te zoeken.',
		},
		{
			question: 'Voor welke gelegenheden kan ik een partybus aanvragen?',
			answer:
				'Groepen vragen een partybus aan voor onder meer bruiloften, verjaardagen, bedrijfsfeesten, festivals, vrijgezellenfeesten en overig groepsvervoer. Vermeld de gelegenheid in de aanvraag, zodat de planning daarbij kan aansluiten.',
		},
	],
	summary: {
		title: 'Kort samengevat',
		paragraphs: [
			'PartybusNederland.nl breidt verder uit. In Noord-Brabant is Prestige Coach Service onze partner voor partybusvervoer. Bezoekers doen rechtstreeks een aanvraag via het platform; die aanvraag gaat naar deze partner.',
			'De samenwerking geldt voor de provincie, inclusief aanvragen vanuit de Brabantse gemeenten. Bruiloften, verjaardagen, bedrijfsfeesten, festivals, vrijgezellenfeesten en groepsvervoer horen daarbij. Start op de provinciepagina als je een rit nodig hebt.',
		],
	},
	cta: {
		title: 'Partybus nodig in Noord-Brabant?',
		lead: 'Start je aanvraag op de provinciepagina. Prestige Coach Service, onze partner in Noord-Brabant, neemt de ritgegevens in behandeling. Via WhatsApp kun je ook kort schakelen.',
		primaryHref: '/provincies/noord-brabant/',
		primaryLabel: 'Naar de provinciepagina',
		whatsappHref: buildPrestigeCoachServiceWhatsappHref('Noord-Brabant'),
		whatsappLabel: 'WhatsApp Prestige Coach Service',
		onDark: true,
	},
	relatedLinks: [
		{
			label: 'Partybus Noord-Brabant',
			href: '/provincies/noord-brabant/',
			description: 'Aanvraagformulier en informatie voor de hele provincie',
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
			label: 'Festivalvervoer',
			href: '/gids/festival-vervoer/',
			description: 'Aandachtspunten voor heen- en terugrit naar een festival',
		},
		{
			label: 'Contact',
			href: '/contact/',
			description: 'Vragen over PartybusNederland.nl',
		},
	],
	cityLinks: [
		{
			label: 'Partybus huren Breda',
			href: '/steden/partybus-huren-breda/',
			description: 'Aanvraag vanuit Breda in Noord-Brabant',
		},
		{
			label: 'Partybus huren Tilburg',
			href: '/steden/partybus-huren-tilburg/',
			description: 'Aanvraag vanuit Tilburg in Noord-Brabant',
		},
		{
			label: 'Partybus huren Eindhoven',
			href: '/steden/partybus-huren-eindhoven/',
			description: 'Aanvraag vanuit Eindhoven in Noord-Brabant',
		},
	],
	trustNote:
		'PartybusNederland.nl werkt in Noord-Brabant samen met Prestige Coach Service. Aanvragen via deze pagina’s gaan naar deze partner. Beschikbaarheid en invulling van de rit stem je met Prestige Coach Service af.',
};
