import { whatsapp } from '../settings/whatsapp';
import type { CityPageData } from './types';

/** Temporary Breda content for image-system testing. */
export const bredaCity: CityPageData = {
	slug: 'breda',
	name: 'Breda',
	path: '/steden/partybus-huren-breda/',
	canonical: 'https://www.partybusnederland.nl/steden/partybus-huren-breda/',
	metaTitle: 'Partybus huren Breda | Gratis offertes vergelijken',
	metaDescription:
		'Partybus huren in Breda? Vergelijk gratis meerdere aanbieders voor feesten, bedrijfsuitjes, festivals en andere groepsritten.',
	h1: 'Partybus huren Breda',
	hero: {
		subtitle: 'Vergelijk gratis meerdere partybus-aanbieders voor een sfeervolle rit door Breda.',
		image: '/images/breda-grote-markt.jpg',
		imageAlt: 'Luxe partybus in Breda bij Grote Markt Breda in de avond',
		whatsappHref: whatsapp.href,
		trustItems: [
			'Gratis offertes vergelijken',
			'Reactie binnen 24 uur',
			'Geschikt voor groepen tot 80 personen',
			'Beschikbaar door heel Nederland',
		],
	},
	intro: {
		title: 'Partybus huren in Bourgondisch Breda',
		paragraphs: [
			'Breda combineert een historische binnenstad met de Grote Markt, gezellige horeca en een bruisend uitgaansleven. Voor verjaardagen, vrijgezellenfeesten of bedrijfsuitjes wil je die plekken makkelijk met de hele groep bereiken.',
			'Met een partybus rijd je soepel tussen de Grote Markt, de haven en populaire uitgaansstraten. De sfeer begint al onderweg, met muziek en iedereen bij elkaar in één voertuig.',
			'Via Partybus Nederland vergelijk je gratis en vrijblijvend meerdere aanbieders. Geef datum, groepsgrootte en route door en ontdek welke partybus het beste past bij jullie plannen in Breda.',
		],
		image: '/images/interior-partybus.png',
		imageAlt: 'Interieur van een luxe partybus',
	},
	why: {
		title: 'Waarom een partybus in Breda?',
		lead: 'Centrum, horeca en events — een partybus houdt de groep bij elkaar.',
		items: [
			{
				title: 'De groep blijft bij elkaar',
				text: 'Iedereen komt samen aan bij bars, restaurants of feestlocaties.',
				icon: 'group',
			},
			{
				title: 'Feest al onderweg',
				text: 'Muziek, licht en ruimte maken van de rit onderdeel van de avond.',
				icon: 'party',
			},
			{
				title: 'Geen taxi-stress',
				text: 'Eén bus in plaats van meerdere ritten op drukke avonden.',
				icon: 'taxi',
			},
			{
				title: 'Flexibele stops',
				text: 'In overleg vaak meerdere opstap- en uitstappunten langs de route.',
				icon: 'route',
			},
		],
	},
	locations: {
		title: 'Populaire locaties in Breda',
		lead: 'Hotspots die groepen vaak combineren in één avond.',
		items: [
			{
				name: 'Grote Markt',
				text: 'Het hart van Breda met terrassen en sfeervolle gevels.',
				image: '/images/breda-grote-markt.jpg',
			},
			{
				name: 'Havenkwartier',
				text: 'Gezellige restaurants en bars aan het water.',
				image: '/images/city-breda.jpg',
			},
			{
				name: 'Ginneken',
				text: 'Bekende uitgaansbuurt net buiten het centrum.',
				image: '/images/partybus-verhuur.png',
			},
		],
	},
	activities: {
		title: 'Wat is er te doen in Breda?',
		lead: 'Combineer centrum, horeca en events met één sfeervolle transfer.',
		items: [
			{ title: 'Uitgaan', text: 'Bars en clubs zonder versnipperde aankomsten.', icon: 'nightlife' },
			{ title: 'Concerten', text: 'Samen naar of vanaf events in en rond Breda.', icon: 'music' },
			{ title: 'Festivals', text: 'Comfortabele aan- en afvoer vanaf jullie startpunt.', icon: 'festival' },
			{ title: 'Cultuur & diner', text: 'Van restaurant door naar het avondprogramma.', icon: 'culture' },
		],
	},
	occasions: {
		title: 'Partybus voor iedere gelegenheid',
		items: [
			{ title: 'Vrijgezellenfeest', text: 'Houd de groep bij elkaar van start tot finish.', image: '/images/interior-partybus.png' },
			{ title: 'Bedrijfsuitjes', text: 'Professioneel én feestelijk voor teams.', image: '/images/partybus-nederland.png' },
			{ title: 'Verjaardagen', text: 'Vier onderweg met muziek en licht.', image: '/images/breda-grote-markt.jpg' },
		],
	},
	pickup: {
		title: 'Populaire opstaplocaties',
		lead: 'Kies een centrale verzamelplek. De exacte opstap stem je af met de aanbieder.',
		items: ['Breda Centraal', 'Grote Markt', 'Havenkwartier', 'Hotel of eigen locatie'],
	},
	relatedCitySlugs: ['amsterdam', 'rotterdam', 'den-haag', 'utrecht'],
	faqs: [
		{
			question: 'Wat kost een partybus huren in Breda?',
			answer:
				'De prijs hangt af van duur, route en groepsgrootte. Via Partybus Nederland vergelijk je gratis meerdere offertes.',
		},
		{
			question: 'Voor hoeveel personen kan ik een partybus huren?',
			answer: 'Partybussen zijn geschikt voor groepen tot 80 personen.',
		},
	],
	cta: {
		title: 'Ontvang gratis offertes voor een partybus in Breda',
		text: 'Vertel wanneer je wilt reizen, met hoeveel personen en wat je plannen zijn.',
		whatsappHref: whatsapp.href,
		image: '/images/breda-grote-markt.jpg',
	},
};
