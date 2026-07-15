import { whatsapp } from '../settings/whatsapp';
import type { CityPageData } from './types';

/**
 * Amsterdam = Master City Template content example.
 * Clone this object for every future city page.
 */
export const amsterdamCity: CityPageData = {
	slug: 'amsterdam',
	name: 'Amsterdam',
	path: '/steden/partybus-huren-amsterdam/',
	canonical: 'https://www.partybusnederland.nl/steden/partybus-huren-amsterdam/',
	metaTitle: 'Partybus huren Amsterdam | Gratis offertes vergelijken',
	metaDescription:
		'Partybus huren in Amsterdam? Vergelijk gratis meerdere aanbieders voor feesten, bedrijfsuitjes, festivals en andere groepsritten.',
	h1: 'Partybus huren Amsterdam',
	hero: {
		subtitle:
			'Vergelijk gratis meerdere partybus-aanbieders voor een sfeervolle rit door Amsterdam.',
		image: '/images/hero-partybus.png',
		imageAlt: 'Partybus Exclusive bij Rembrandtplein in Amsterdam',
		whatsappHref: 'https://wa.me/31684002350',
		trustItems: [
			'Gratis offertes vergelijken',
			'Reactie binnen 24 uur',
			'Geschikt voor groepen tot 80 personen',
			'Beschikbaar door heel Nederland',
		],
	},
	intro: {
		title: 'Partybus huren in de hoofdstad',
		paragraphs: [
			'Amsterdam ken je van de grachten, de historische binnenstad en een sfeer die dag én nacht doorloopt. Of het nu om een verjaardag, vrijgezellenavond of bedrijfsuitje gaat: je wilt meerdere plekken aandoen zonder dat de groep uit elkaar valt of steeds opnieuw vervoer moet regelen in een drukke stad.',
			'Een partybus is daar ideaal voor. Je combineert locaties als Centraal, De Pijp, Leidseplein of Rembrandtplein in één comfortabele rit, terwijl de sfeer al onderweg begint — met muziek, licht en iedereen bij elkaar. Zo voorkom je losse taxi’s en houd je één helder plan waarmee de hele groep samen de avond in de stad in gaat.',
			'Via Partybus Nederland vergelijk je gratis en vrijblijvend meerdere aanbieders. Geef je datum, groepsgrootte en route door, bekijk de opties naast elkaar en ontdek snel welke partybus het beste bij jouw Amsterdamse plannen past.',
		],
		image: '/images/interior-partybus.png',
		imageAlt: 'Interieur van een luxe partybus',
	},
	why: {
		title: 'Waarom een partybus in Amsterdam?',
		lead: 'De stad is compact, maar locaties wisselen snel. Een partybus houdt tempo én sfeer bij elkaar.',
		items: [
			{
				title: 'De groep blijft bij elkaar',
				text: 'Iedereen komt samen aan. Geen versnipperde aankomsten, wel één gedeelde start.',
				icon: 'group',
			},
			{
				title: 'Feest al onderweg',
				text: 'Muziek, licht en ruimte om bij te kletsen maken van de rit een onderdeel van de avond.',
				icon: 'party',
			},
			{
				title: 'Geen taxi-stress',
				text: 'Eén bus in plaats van meerdere ritten: overzichtelijker voor organisatoren én gasten.',
				icon: 'taxi',
			},
			{
				title: 'Flexibele stops',
				text: 'In overleg vaak meerdere opstap- en uitstappunten passend bij jouw route.',
				icon: 'route',
			},
		],
	},
	locations: {
		title: 'Populaire locaties in Amsterdam',
		lead: 'Hotspots die groepen vaak combineren in één avond of dagprogramma.',
		items: [
			{
				name: 'Leidseplein',
				text: 'Theaters, cafés en nachtleven — ideaal als feestelijke halte.',
				image: '/images/partybus-nederland.png',
			},
			{
				name: 'Rembrandtplein',
				text: 'Energiek en centraal. Perfect voor een nightlife-stop.',
				image: '/images/hero-partybus.png',
			},
			{
				name: 'De Pijp',
				text: 'Restaurants en terrassen. Leuk als start voor diner & avond.',
				image: '/images/interior-partybus.png',
			},
			{
				name: 'Amsterdam-Noord',
				text: 'Creatieve hotspots en uitzicht over het IJ.',
				image: '/images/partybus-collage.png',
			},
			{
				name: 'Ziggo Dome',
				text: 'Samen aankomen bij concerten, samen weer verder.',
				image: '/images/partybus-arena.png',
			},
			{
				name: 'Johan Cruijff ArenA',
				text: 'Events rond Arena Boulevard met de hele groep bij elkaar.',
				image: '/images/partybus-arena.png',
			},
		],
	},
	activities: {
		title: 'Wat is er te doen in Amsterdam?',
		lead: 'Combineer city vibes met één sfeervolle transfer. Een partybus helpt je programma soepel aaneen.',
		items: [
			{
				title: 'Uitgaan',
				text: 'Bars, clubs en hotspots zonder dat de groep uit elkaar valt.',
				icon: 'nightlife',
			},
			{
				title: 'Concerten',
				text: 'Samen naar of vanaf zalen, met voorpret onderweg.',
				icon: 'music',
			},
			{
				title: 'Festivals',
				text: 'Comfortabele aan- en afvoer, afgestemd op jullie startpunt.',
				icon: 'festival',
			},
			{
				title: 'Rondvaarten',
				text: 'Koppel een grachtenrondvaart aan een feestelijke transfer.',
				icon: 'boat',
			},
			{
				title: 'Cultuur & diner',
				text: 'Van museum of restaurant door naar het avondprogramma.',
				icon: 'culture',
			},
			{
				title: 'Sport & events',
				text: 'Wedstrijden of shows: aankomen als groep, vertrekken als groep.',
				icon: 'sport',
			},
		],
	},
	occasions: {
		title: 'Partybus voor iedere gelegenheid',
		lead: 'Van intieme feesten tot grote groepen: kies de sfeer die bij jullie past.',
		items: [
			{
				title: 'Bruiloften',
				text: 'Stijlvolle transfer tussen ceremonie, receptie en feest.',
				image: '/images/partybus-verhuur.png',
			},
			{
				title: 'Vrijgezellenfeest',
				text: 'Houd de vriendengroep bij elkaar, van overdag tot diep in de nacht.',
				image: '/images/interior-partybus.png',
			},
			{
				title: 'Bedrijfsuitjes',
				text: 'Professioneel én feestelijk voor teams en relatie-events.',
				image: '/images/partybus-nederland.png',
			},
			{
				title: 'Festivals',
				text: 'Comfortabele heen- en terugreis zonder parkeerstress.',
				image: '/images/partybus-arena.png',
			},
			{
				title: 'Verjaardagen',
				text: 'Vier het onderweg: muziek aan en rechtstreeks door naar de locatie.',
				image: '/images/hero-partybus.png',
			},
			{
				title: 'Schoolfeesten',
				text: 'Overzichtelijk groepstransport met heldere timing.',
				image: '/images/partybus-collage.png',
			},
		],
	},
	pickup: {
		title: 'Populaire opstaplocaties',
		lead: 'Kies een centrale verzamelplek. De exacte opstap stem je altijd af met de aanbieder.',
		items: [
			'Amsterdam Centraal',
			'Station Sloterdijk',
			'Station Zuid',
			'Bijlmer ArenA',
			'Hotel of eigen locatie',
		],
		note: 'Tip: geef opstap en route al mee in je aanvraag. Dan kunnen aanbieders sneller aangeven wat haalbaar is.',
	},
	relatedCitySlugs: ['rotterdam', 'utrecht', 'den-haag', 'eindhoven', 'breda'],
	faqs: [
		{
			question: 'Wat kost een partybus huren in Amsterdam?',
			answer:
				'De prijs hangt af van duur, route, groepsgrootte en opties. Via Partybus Nederland vergelijk je gratis meerdere offertes voor jouw rit.',
		},
		{
			question: 'Voor hoeveel personen kan ik een partybus huren?',
			answer:
				'Partybussen zijn geschikt voor groepen tot 80 personen. Vermeld het aantal gasten in je aanvraag, zodat je alleen passende voorstellen krijgt.',
		},
		{
			question: 'Kunnen we op meerdere plekken opstappen?',
			answer:
				'Vaak in overleg mogelijk. Exacte stops stem je af met de aanbieder, rekening houdend met verkeer en lokale regels.',
		},
		{
			question: 'Mag er muziek worden afgespeeld?',
			answer:
				'Bij de meeste partybussen hoort muziek bij de beleving. Details over installatie of playlist stem je af bij de offerte.',
		},
		{
			question: 'Kunnen we eten en drinken meenemen?',
			answer:
				'Dat hangt af van de voorwaarden van de aanbieder. Geef wensen rond consumpties vooraf door.',
		},
		{
			question: 'Kan een partybus ons buiten Amsterdam brengen?',
			answer:
				'Ja, veel groepen combineren Amsterdam met omliggende steden. Vermeld de eindbestemming in je aanvraag.',
		},
		{
			question: 'Hoe vroeg moet ik reserveren?',
			answer:
				'Voor weekenden en feestdagen is vroeg vergelijken verstandig. Op rustige momenten kan korter ook, maar vroeg geeft meer keuze.',
		},
		{
			question: 'Is een partybus geschikt voor een bedrijfsuitje?',
			answer:
				'Zeker. Het is een praktische en sfeervolle manier om collega’s of relaties tussen locaties te brengen.',
		},
	],
	cta: {
		title: 'Ontvang gratis offertes voor een partybus in Amsterdam',
		text: 'Vertel wanneer je wilt reizen, met hoeveel personen en wat je plannen zijn. Vergelijk daarna vrijblijvend meerdere opties.',
		whatsappHref: whatsapp.href,
		image: '/images/partybus-arena.png',
	},
};
