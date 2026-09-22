import type { CityFaq, CityPageData } from '../cities/types';
import { tourgoPartybussen } from './tourgoPartybussen';

const partnerName = tourgoPartybussen.publicProfile.name;

/**
 * Den Haag city hub only. Other Zuid-Holland pages, including Rotterdam and Leiden,
 * stay on the shared Tourgo factory. Path and canonical stay /steden/partybus-huren-den-haag/.
 */
const denHaagHubFaqs: readonly CityFaq[] = [
	{
		question: 'Wat kost een partybus huren in Den Haag?',
		answer: `Er is geen vast tarief voor een partybus of feestbus vanuit Den Haag. De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. ${partnerName} geeft de mogelijkheden door op basis van jullie aanvraag.`,
	},
	{
		question: 'Voor hoeveel personen kan ik een partybus huren?',
		answer:
			'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door als je Tourgo Partybussen benadert.',
	},
	{
		question: 'Waar kunnen we in Den Haag worden opgehaald?',
		answer:
			'Groepen noemen vaak Den Haag Centraal of Station Hollands Spoor. Ook een hotel of eigen locatie kan worden doorgegeven. Of een bus daar kan stoppen, hangt van de rit af. Scheveningen, het Binnenhof en het Plein zijn vaker bestemming dan halte. De exacte opstap stem je af met Tourgo Partybussen.',
	},
	{
		question: 'Kan ik een feestbus huren in Den Haag voor een vrijgezellenfeest?',
		answer: `Ja. Vanuit Den Haag wordt een partybus of feestbus vaak aangevraagd voor een vrijgezellenfeest, verjaardag, bedrijfsfeest of ander groepsuitje. Geef datum, aantal personen, gewenste opstap en bestemming door, dan kijkt ${partnerName} wat mogelijk is.`,
	},
	{
		question: 'Kan een partybus worden gebruikt voor een festival of evenement?',
		answer: `Ja. Vanuit Den Haag kun je bij ${partnerName} een partybus aanvragen naar een festival, concert of evenement, bijvoorbeeld richting Scheveningen, het AFAS Circustheater, het World Forum of het Malieveld. Vermeld datum, groepsgrootte en of je ook een terugrit nodig hebt. Of de bus tot de locatie kan komen, stem je af.`,
	},
	{
		question: 'Hoe vraag ik een partybus vanuit Den Haag aan?',
		answer: `PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Stuur een WhatsApp of ga naar de website van Tourgo met datum, groepsgrootte, gewenste opstap en bestemming. De aanvraag vanuit Den Haag gaat naar deze partner.`,
	},
	{
		question: 'Kunnen er meerdere opstapplaatsen worden afgesproken?',
		answer:
			'Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met Tourgo Partybussen. Iedere extra stop beïnvloedt de route. Exacte stops hangen af van bereikbaarheid; niet elke straat in Den Haag is geschikt voor een bus.',
	},
	{
		question: 'Kan een partybus naar België of Duitsland rijden?',
		answer: `Ritten naar België of Duitsland zijn in overleg met ${partnerName} vaak mogelijk. Vermeld de eindbestemming duidelijk, zodat zij kunnen aangeven wat voor jullie rit haalbaar is.`,
	},
	{
		question: 'Kunnen heenreis en terugreis samen worden aangevraagd?',
		answer:
			'Ja. Geef beide tijden en locaties door in één aanvraag. Of de bus blijft wachten of later terugkomt, stem je af met Tourgo Partybussen.',
	},
	{
		question: 'Zit ik ergens aan vast als ik vanuit Den Haag een aanvraag doe?',
		answer: `Nee. Een eerste vraag via WhatsApp of de website van ${partnerName} is vrijblijvend. Je maakt pas een afspraak als de rit vanuit Den Haag rond is.`,
	},
];

export function applyDenHaagTourgoHubCopy(city: CityPageData): CityPageData {
	return {
		...city,
		metaTitle: `Partybus huren Den Haag | ${partnerName}`,
		metaDescription:
			'Partybus huren Den Haag? Regel groepsvervoer via Tourgo Partybussen, de partner van PartybusNederland.nl in Zuid-Holland.',
		h1: 'Partybus huren in Den Haag',
		hero: {
			...city.hero,
			subtitle:
				'Zoek je een partybus of feestbus vanuit Den Haag? PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo Partybussen. Een aanvraag gaat naar deze partner.',
			trustItems: [
				'Tourgo Partybussen, partner Zuid-Holland',
				'Aanvraag gaat naar deze partner',
				'Geschikt voor groepen tot 80 personen',
				'Exacte opstap stem je af',
			],
		},
		intro: {
			...city.intro,
			title: 'Groepsvervoer tussen stad en kust',
			paragraphs: [
				`Partybus huren Den Haag regel je via ${partnerName}. PartybusNederland.nl werkt in Zuid-Holland samen met deze partner. Een aanvraag vanuit Den Haag gaat naar Tourgo.`,
				'Een partybus Den Haag wordt vaak gepland tussen delen van de stad die niet op één lijn liggen: het centrum, Bezuidenhout, Loosduinen, Escamp, Mariahoeve of Leidschenveen. Groepen noemen Den Haag Centraal of Station Hollands Spoor als vertrekgebied. Of daar gestopt kan worden, stem je af. Scheveningen, het Binnenhof en de straten rond het Plein zijn vaker bestemming dan halte.',
				'Feestbus huren Den Haag past bij een vrijgezellenfeest, verjaardag, bedrijfsfeest, concert of festival. Denk aan een avond op Scheveningen, het AFAS Circustheater, het World Forum, het Zuiderpark of het Malieveld. Of de bus daar tot de deur kan komen, hangt van de rit af. Geef datum, aantal personen en bestemming door, dan kijkt Tourgo wat voor die rit mogelijk is.',
				'Een feestbus Den Haag is groepsvervoer met chauffeur: de groep blijft bij elkaar, of de avond in de stad begint of aan zee eindigt. Sommige groepen zeggen party bus Den Haag. Muziek en sfeer verschillen per voertuig; vraag na wat er aanwezig is. Er is geen vast tarief. De prijs hangt af van datum, route, ritduur, wachttijd en groepsgrootte. Een eerste vraag via WhatsApp of de website van Tourgo is vrijblijvend.',
			],
		},
		why: {
			...city.why,
			lead: 'Eén voertuig en één planning: de groep vertrekt samen vanuit Den Haag, of de avond in de stad blijft of doorloopt naar de kust.',
		},
		locations: {
			...city.locations,
			lead: 'Vanuit Den Haag vragen groepen vaak een rit naar Scheveningen, een andere stad of een evenement. De bestemming en de exacte opstap stem je af met Tourgo Partybussen.',
		},
		activities: {
			...city.activities,
			lead: 'Festival- of evenementenvervoer vanuit Den Haag regel je met Tourgo Partybussen. Vermeld datum, groepsgrootte en of je ook een terugrit nodig hebt.',
		},
		pickup: {
			...city.pickup,
			title: 'Opstappen in Den Haag',
			lead: 'Voorbeelden van vertrekgebieden die groepen vaak noemen, zoals Den Haag Centraal of Station Hollands Spoor. Of een bus daar kan stoppen, stem je af met Tourgo Partybussen.',
			items: ['Den Haag Centraal', 'Station Hollands Spoor', 'Hotel of eigen locatie'],
			note: 'Scheveningen, het Binnenhof en het Plein zijn vaak bestemming, niet automatisch de opstap. De exacte halte spreek je af met Tourgo Partybussen.',
		},
		faqs: denHaagHubFaqs,
		cta: {
			...city.cta,
			title: 'Vraag een partybus of feestbus aan vanuit Den Haag',
			text: `Neem contact op met ${partnerName} via WhatsApp of hun website. Noem Den Haag, datum, groepsgrootte en bestemming.`,
		},
	};
}
