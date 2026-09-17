import type { CityFaq, CityOccasion, CityPageData, CityWhyItem } from '../cities/types';
import {
	buildPartyBussenWestlandWhatsappHref,
	partyBussenWestland,
	partyBussenWestlandOfficialWebps,
} from './partyBussenWestland';

const partnerName = partyBussenWestland.publicProfile.name;

export const amsterdamWestlandPagePath = '/steden/partybus-huren-amsterdam/';
export const amsterdamWestlandCanonical =
	'https://www.partybusnederland.nl/steden/partybus-huren-amsterdam/';

/**
 * Official Westland WebPs, offset from Utrecht city heroes (exteriors 0–4).
 * Native 320×213 — do not stretch beyond object-fit cover.
 */
export const amsterdamWestlandMedia = {
	hero: partyBussenWestlandOfficialWebps[10],
	intro: partyBussenWestlandOfficialWebps[14],
	gallery: [
		partyBussenWestlandOfficialWebps[5],
		partyBussenWestlandOfficialWebps[6],
		partyBussenWestlandOfficialWebps[7],
		partyBussenWestlandOfficialWebps[8],
		partyBussenWestlandOfficialWebps[9],
		partyBussenWestlandOfficialWebps[11],
		partyBussenWestlandOfficialWebps[12],
		partyBussenWestlandOfficialWebps[13],
	],
	occasions: [
		partyBussenWestlandOfficialWebps[5],
		partyBussenWestlandOfficialWebps[10],
		partyBussenWestlandOfficialWebps[8],
		partyBussenWestlandOfficialWebps[6],
		partyBussenWestlandOfficialWebps[12],
		partyBussenWestlandOfficialWebps[9],
		partyBussenWestlandOfficialWebps[7],
		partyBussenWestlandOfficialWebps[13],
	],
	cta: partyBussenWestlandOfficialWebps[16],
} as const;

export const amsterdamWestlandHero = {
	eyebrow: 'Partybus Amsterdam',
	title: 'Partybus huren in Amsterdam',
	lead: `${partnerName} is de partner van PartybusNederland.nl voor Amsterdam. Het bedrijf is gevestigd in Naaldwijk en is rechtstreeks bereikbaar voor een partybus vanuit de stad.`,
	formTitle: 'Offerte aanvragen voor een partybus in Amsterdam',
	formLead:
		'Vul je wensen in. PartybusNederland.nl werkt in Amsterdam samen met Party Bussen Westland. De stad is vooringevuld.',
} as const;

export const amsterdamWestlandAreas = [
	{
		name: 'Amsterdam Centrum',
		text: 'Centrumritten rond de grachten, Leidseplein of Rembrandtplein. De exacte opstap of bestemming stem je af.',
	},
	{
		name: 'Amsterdam-Noord',
		text: 'Opstap of afzet in Amsterdam-Noord, vaak gecombineerd met een centrale verzamelplek aan de overkant van het IJ.',
	},
	{
		name: 'Amsterdam-West',
		text: 'West en Westergas: handig als de groep bij een locatie in West start of eindigt.',
	},
	{
		name: 'Amsterdam-Zuid en Zuidas',
		text: 'Zuid, Station Zuid en de Zuidas voor bedrijfsritten, hotels of een avond naar het centrum.',
	},
	{
		name: 'Amsterdam-Oost',
		text: 'Oost als opstap- of bestemmingsgebied, met een verzamelpunt dat voor de hele groep bereikbaar is.',
	},
	{
		name: 'Amsterdam-Zuidoost',
		text: 'Zuidoost en Bijlmer ArenA, vaak in combinatie met de Johan Cruijff ArenA, Ziggo Dome of AFAS Live.',
	},
] as const;

export const amsterdamWestlandVenues = [
	{
		name: 'Amsterdam RAI',
		text: 'Beurs, congres of evenement in de RAI: groepsvervoer zonder losse taxi’s, met opstap in overleg.',
	},
	{
		name: 'Johan Cruijff ArenA',
		text: 'Wedstrijd of evenement in de ArenA. Stem opstaptijd, terugrit en een verzamelpunt rond Zuidoost af.',
	},
	{
		name: 'Ziggo Dome',
		text: 'Concert in de Ziggo Dome. De groep reist samen heen en, als je dat wilt, ook weer terug.',
	},
	{
		name: 'AFAS Live',
		text: 'Optreden in AFAS Live, naast de Ziggo Dome. Geef tijden en of je een retour nodig hebt door.',
	},
	{
		name: 'Westergas',
		text: 'Evenement of avond bij Westergas in Amsterdam-West. De halte kies je in overleg met de rit.',
	},
	{
		name: 'Amsterdam Centraal',
		text: 'Vaak genoemd als verzamelpunt. Of Centraal, Sloterdijk, Zuid of een hotel beter past, hangt van de groep af.',
	},
] as const;

export const amsterdamWestlandPickupItems = [
	'Amsterdam Centraal',
	'Station Sloterdijk',
	'Station Zuid',
	'Bijlmer ArenA',
	'Hotel of eigen locatie',
] as const;

const whyItems: readonly CityWhyItem[] = [
	{
		title: 'De groep blijft bij elkaar',
		text: 'Geen losse taxi’s door de stad. Iedereen stapt op dezelfde plek in en reist samen naar Leidseplein, een evenement of jullie eindadres.',
		icon: 'group',
	},
	{
		title: 'Opstap bij bekende punten',
		text: 'Denk aan Amsterdam Centraal, Station Sloterdijk, Station Zuid of Bijlmer ArenA. Een hotel of eigen locatie kan ook, in overleg.',
		icon: 'route',
	},
	{
		title: 'Avond, feest of evenement',
		text: 'Uitgaan, een concert, de ArenA, de RAI of een bedrijfsavond: de sfeer begint in de bus, de chauffeur rijdt de route.',
		icon: 'party',
	},
	{
		title: 'Partner via PartybusNederland.nl',
		text: `${partnerName} is onze partner voor Amsterdam. Zij zitten in Naaldwijk, niet in Amsterdam, en zijn rechtstreeks bereikbaar via WhatsApp.`,
		icon: 'clock',
	},
];

const occasionItems: readonly Omit<CityOccasion, 'image'>[] = [
	{
		title: 'Uitgaan',
		text: 'Samen naar Leidseplein, Rembrandtplein of een andere avondlocatie. De groep blijft bij elkaar tot jullie uitstappen.',
	},
	{
		title: 'Concert of evenement',
		text: 'Ziggo Dome, AFAS Live of de Johan Cruijff ArenA: stem heenrit, wachttijd of terugrit af op de eindtijd van het programma.',
	},
	{
		title: 'Beurs of congres',
		text: 'Groepsvervoer naar Amsterdam RAI of de Zuidas. Geef datum, aantal personen en of je later dezelfde dag terugrijdt.',
	},
	{
		title: 'Bedrijfsfeest',
		text: 'Collega’s of relaties in één bus, van kantoor of hotel naar de feestlocatie. Representatief aankomen zonder versnipperd vervoer.',
	},
	{
		title: 'Bruiloft',
		text: 'Transfer tussen ceremonie, receptie en feest. De route en stops in Amsterdam stem je vooraf af.',
	},
	{
		title: 'Verjaardag',
		text: 'De viering begint bij het instappen. Kies een opstapplaats die voor de hele groep logisch is.',
	},
	{
		title: 'Vrijgezellenfeest',
		text: 'Meerdere stops in één avond zijn vaak mogelijk wanneer je dat vooraf doorgeeft, bijvoorbeeld centrum plus een volgende locatie.',
	},
	{
		title: 'Festival',
		text: 'Vanuit Amsterdam naar festivals in Nederland of België. Vermeld festival, datum, groepsgrootte en of je een terugrit nodig hebt.',
	},
];

export const amsterdamWestlandHowItWorks = [
	{
		title: 'Stuur je plannen',
		text: 'Datum, groepsgrootte, opstap in Amsterdam en bestemming. Dat kan via het formulier of WhatsApp.',
	},
	{
		title: 'Stem de rit af',
		text: `${partnerName} kijkt welk voertuig past en of de route, tijden en eventuele extra stops haalbaar zijn.`,
	},
	{
		title: 'Bevestig en vertrek',
		text: 'Pas als jullie een voorstel accepteren, staat de rit vast. Tot die tijd zit je nergens aan vast.',
	},
] as const;

export const amsterdamWestlandFaqs: readonly CityFaq[] = [
	{
		question: 'Hoe werkt een partybus aanvragen vanuit Amsterdam?',
		answer: `PartybusNederland.nl werkt in Amsterdam samen met ${partnerName}. Vul het formulier in of stuur een WhatsApp met datum, groepsgrootte, opstapplaats in of rond Amsterdam en bestemming. Zij reageren met de mogelijkheden.`,
	},
	{
		question: 'Voor hoeveel personen is een partybus geschikt?',
		answer:
			'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door als je Party Bussen Westland benadert.',
	},
	{
		question: 'Kunnen er meerdere opstapplaatsen worden afgesproken?',
		answer:
			'Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt. Denk bijvoorbeeld aan Amsterdam Centraal, Station Sloterdijk, Station Zuid of Bijlmer ArenA. Exacte stops hangen af van route en bereikbaarheid.',
	},
	{
		question: 'Kan ik vanuit Amsterdam naar een festival reizen?',
		answer:
			'Ja, vanuit Amsterdam kun je een partybus aanvragen naar festivals in Nederland en België. Vermeld festival, datum, groepsgrootte en of je ook een terugrit nodig hebt.',
	},
	{
		question: 'Kan een partybus naar België of Duitsland rijden?',
		answer:
			'Grensoverschrijdende ritten zijn vaak mogelijk, bijvoorbeeld naar België of Duitsland. Vermeld de eindbestemming duidelijk, zodat Party Bussen Westland kan aangeven wat haalbaar is.',
	},
	{
		question: 'Waar hangt de prijs vanaf?',
		answer:
			'De prijs hangt onder meer af van datum, route, duur, groepsgrootte, opstapplaatsen en type partybus. Er is geen vaste Amsterdam-prijs. Vraag de mogelijkheden aan voor jouw rit.',
	},
	{
		question: 'Is een aanvraag vrijblijvend?',
		answer:
			'Ja. Een aanvraag via Partybus Nederland is gratis en vrijblijvend. Je zit nergens aan vast totdat je zelf een voorstel accepteert.',
	},
	{
		question: 'Kunnen heenreis en terugreis samen worden aangevraagd?',
		answer:
			'Ja. Geef beide tijden en locaties door in één aanvraag. Of de bus blijft wachten of later terugkomt, stem je af met Party Bussen Westland.',
	},
];

export function applyAmsterdamWestlandCopy(city: CityPageData): CityPageData {
	return {
		...city,
		hero: {
			...city.hero,
			subtitle: amsterdamWestlandHero.lead,
			whatsappHref: buildPartyBussenWestlandWhatsappHref('Amsterdam'),
		},
		intro: {
			title: 'Partybus huren in Amsterdam',
			paragraphs: [
				`Wil je een partybus huren in Amsterdam? PartybusNederland.nl werkt daarvoor samen met ${partnerName}. Zij zijn gevestigd in Naaldwijk en de partner voor ritten vanuit de stad — niet een vestiging in Amsterdam zelf.`,
				'Een partybus is geschikt voor onder meer uitgaan, een concert, de Johan Cruijff ArenA, Amsterdam RAI, een bedrijfsfeest, bruiloft, verjaardag of vrijgezellenavond. Denk bijvoorbeeld aan een verzamelpunt bij Amsterdam Centraal, Station Sloterdijk, Station Zuid of Bijlmer ArenA. Rond Rembrandtplein en de grachten is het centrum vaak bestemming of tussenstop.',
				'De prijs wordt bepaald door onder andere datum, route, ritduur, wachttijd en groepsgrootte tot maximaal 80 personen. De aanvraag is gratis en vrijblijvend: jij kiest zelf of het voorstel past.',
			],
			image: amsterdamWestlandMedia.intro.src,
			imageAlt: amsterdamWestlandMedia.intro.alt,
		},
		why: {
			title: 'Waarom een partybus huren in Amsterdam?',
			lead: 'Eén voertuig, één planning en de avond begint bij het instappen — van Centrum tot Zuidoost.',
			items: whyItems,
		},
		occasions: {
			title: 'Partybus voor feest, werk of evenement in Amsterdam',
			lead: 'Kies de gelegenheid. Opstap, tijden en bestemming vul je zelf in; Party Bussen Westland denkt mee over de rit.',
			items: occasionItems.map((item, index) => ({
				...item,
				image: amsterdamWestlandMedia.occasions[index % amsterdamWestlandMedia.occasions.length].src,
				infoHref: null,
			})),
		},
		pickup: {
			title: 'Populaire opstap- en verzamelpunten in Amsterdam',
			lead: 'Kies een centrale plek die voor de hele groep bereikbaar is. De exacte halte stem je af.',
			items: [...amsterdamWestlandPickupItems],
			note: 'Leidseplein, Rembrandtplein, de Zuidas of Westergas zijn vaak bestemming of tussenstop, niet per se de opstap.',
		},
		faqs: amsterdamWestlandFaqs,
		cta: {
			title: 'Partybus nodig in Amsterdam?',
			text: `Neem contact op met ${partnerName} via WhatsApp of bekijk de bussen op hun website. Noem Amsterdam, datum en groepsgrootte.`,
			whatsappHref: buildPartyBussenWestlandWhatsappHref('Amsterdam'),
			image: amsterdamWestlandMedia.cta.src,
		},
	};
}

export const amsterdamWestlandPartnerIntro = `${partnerName} is de partner van PartybusNederland.nl voor Amsterdam. Het bedrijf is gevestigd aan de Ambachtstraat 6B in Naaldwijk en is rechtstreeks bereikbaar via WhatsApp, e-mail of telefoon.`;
