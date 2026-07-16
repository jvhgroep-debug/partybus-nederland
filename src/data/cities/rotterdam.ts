import { whatsapp } from '../settings/whatsapp';
import type { CityPageData } from './types';

/** Temporary Rotterdam content for image-system testing. */
export const rotterdamCity: CityPageData = {
	slug: 'rotterdam',
	name: 'Rotterdam',
	path: '/steden/partybus-huren-rotterdam/',
	canonical: 'https://www.partybusnederland.nl/steden/partybus-huren-rotterdam/',
	metaTitle: 'Partybus huren Rotterdam | Gratis offertes vergelijken',
	metaDescription:
		'Partybus huren in Rotterdam? Vergelijk gratis meerdere aanbieders voor feesten, bedrijfsuitjes, festivals en andere groepsritten.',
	h1: 'Partybus huren Rotterdam',
	hero: {
		subtitle: 'Vergelijk gratis meerdere partybus-aanbieders voor een sfeervolle rit door Rotterdam.',
		image: '/images/partybus-verhuur.png',
		imageAlt: 'Luxe partybus in Rotterdam bij Erasmusbrug en skyline in de avond',
		whatsappHref: whatsapp.href,
		trustItems: [
			'Gratis offertes vergelijken',
			'Reactie binnen 24 uur',
			'Geschikt voor groepen tot 80 personen',
			'Beschikbaar door heel Nederland',
		],
	},
	intro: {
		title: 'Partybus huren in de havenstad',
		paragraphs: [
			'Rotterdam staat voor moderne architectuur, de Maas en een energieke uitgaanscene rond Kop van Zuid, Witte de With en de Markthal. Voor verjaardagen, vrijgezellenfeesten of bedrijfsuitjes wil je die plekken combineren zonder dat de groep versnippert.',
			'Met een partybus rijd je soepel tussen iconen als de Erasmusbrug, de skyline en populaire uitgaanswijken. De sfeer begint al onderweg, met muziek en iedereen bij elkaar in één voertuig.',
			'Via Partybus Nederland vergelijk je gratis en vrijblijvend meerdere aanbieders. Geef datum, groepsgrootte en route door en ontdek welke partybus het beste past bij jullie Rotterdamse plannen.',
		],
		image: '/images/interior-partybus.png',
		imageAlt: 'Interieur van een luxe partybus',
	},
	why: {
		title: 'Waarom een partybus in Rotterdam?',
		lead: 'Grote afstanden tussen wijken en hotspots? Een partybus houdt tempo en sfeer bij elkaar.',
		items: [
			{
				title: 'De groep blijft bij elkaar',
				text: 'Iedereen komt samen aan bij restaurants, clubs of events.',
				icon: 'group',
			},
			{
				title: 'Feest al onderweg',
				text: 'Muziek, licht en ruimte maken van de rit onderdeel van de avond.',
				icon: 'party',
			},
			{
				title: 'Geen parkeerstress',
				text: 'Eén bus in plaats van meerdere auto’s of taxi’s in de binnenstad.',
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
		title: 'Populaire locaties in Rotterdam',
		lead: 'Hotspots die groepen vaak combineren in één avond.',
		items: [
			{
				name: 'Erasmusbrug',
				text: 'Iconisch startpunt met uitzicht op de skyline.',
				image: '/images/city-rotterdam.jpg',
			},
			{
				name: 'Markthal',
				text: 'Centraal en sfeervol voor diner of borrel.',
				image: '/images/partybus-verhuur.png',
			},
			{
				name: 'Kop van Zuid',
				text: 'Moderne hotspots en uitzicht over de Maas.',
				image: '/images/partybus-nederland.png',
			},
			{
				name: 'Witte de Withstraat',
				text: 'Bekend uitgaansgebied met bars en terrassen.',
				image: '/images/interior-partybus.png',
			},
		],
	},
	activities: {
		title: 'Wat is er te doen in Rotterdam?',
		lead: 'Combineer stad, haven en nightlife met één sfeervolle transfer.',
		items: [
			{ title: 'Uitgaan', text: 'Bars en clubs zonder versnipperde aankomsten.', icon: 'nightlife' },
			{ title: 'Concerten', text: 'Samen naar of vanaf Ahoy en andere zalen.', icon: 'music' },
			{ title: 'Festivals', text: 'Comfortabele aan- en afvoer vanaf jullie startpunt.', icon: 'festival' },
			{ title: 'Havenrondvaart', text: 'Koppel een rondvaart aan een feestelijke transfer.', icon: 'boat' },
		],
	},
	occasions: {
		title: 'Partybus voor iedere gelegenheid',
		items: [
			{ title: 'Vrijgezellenfeest', text: 'Houd de groep bij elkaar van start tot finish.', image: '/images/interior-partybus.png' },
			{ title: 'Bedrijfsuitjes', text: 'Professioneel én feestelijk voor teams.', image: '/images/partybus-nederland.png' },
			{ title: 'Verjaardagen', text: 'Vier onderweg met muziek en licht.', image: '/images/hero-partybus.png' },
		],
	},
	pickup: {
		title: 'Populaire opstaplocaties',
		lead: 'Kies een centrale verzamelplek. De exacte opstap stem je af met de aanbieder.',
		items: ['Rotterdam Centraal', 'Station Blaak', 'Kop van Zuid', 'Hotel of eigen locatie'],
	},
	relatedCitySlugs: ['amsterdam', 'den-haag', 'breda', 'utrecht'],
	faqs: [
		{
			question: 'Wat kost een partybus huren in Rotterdam?',
			answer:
				'De prijs hangt af van duur, route en groepsgrootte. Via Partybus Nederland vergelijk je gratis meerdere offertes.',
		},
		{
			question: 'Voor hoeveel personen kan ik een partybus huren?',
			answer: 'Partybussen zijn geschikt voor groepen tot 80 personen.',
		},
	],
	cta: {
		title: 'Ontvang gratis offertes voor een partybus in Rotterdam',
		text: 'Vertel wanneer je wilt reizen, met hoeveel personen en wat je plannen zijn.',
		whatsappHref: whatsapp.href,
		image: '/images/partybus-arena.png',
	},
};
