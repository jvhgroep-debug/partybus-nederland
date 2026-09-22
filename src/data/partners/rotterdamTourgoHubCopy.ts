import type { CityFaq, CityPageData } from '../cities/types';
import { tourgoPartybussen } from './tourgoPartybussen';

const partnerName = tourgoPartybussen.publicProfile.name;

/**
 * Rotterdam city hub only. Other Zuid-Holland pages, including Den Haag and Leiden,
 * stay on the shared Tourgo factory. Path and canonical stay /steden/partybus-huren-rotterdam/.
 */
const rotterdamHubFaqs: readonly CityFaq[] = [
	{
		question: 'Wat kost een partybus huren in Rotterdam?',
		answer: `Er is geen vast tarief voor een partybus of feestbus vanuit Rotterdam. De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. ${partnerName} geeft de mogelijkheden door op basis van jullie aanvraag.`,
	},
	{
		question: 'Voor hoeveel personen kan ik een partybus huren?',
		answer:
			'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door als je Tourgo Partybussen benadert.',
	},
	{
		question: 'Waar kunnen we in Rotterdam worden opgehaald?',
		answer:
			'Groepen noemen vaak Rotterdam Centraal of Station Blaak. Ook een hotel of eigen locatie kan worden doorgegeven. Of een bus daar kan stoppen, hangt van de rit af. De Erasmusbrug, de Kop van Zuid en de Witte de Withstraat zijn vaker bestemming dan halte. De exacte opstap stem je af met Tourgo Partybussen.',
	},
	{
		question: 'Kan ik een feestbus huren in Rotterdam voor een vrijgezellenfeest?',
		answer: `Ja. Vanuit Rotterdam wordt een partybus of feestbus vaak aangevraagd voor een vrijgezellenfeest, verjaardag, bedrijfsfeest of ander groepsuitje. Geef datum, aantal personen, gewenste opstap en bestemming door, dan kijkt ${partnerName} wat mogelijk is.`,
	},
	{
		question: 'Wat wordt bedoeld met een discobus in Rotterdam?',
		answer: `Partybus, feestbus en discobus worden in Rotterdam vaak voor hetzelfde type groepsvervoer gebruikt: een bus met chauffeur. Muziek en sfeer verschillen per voertuig. Of een meer uitgesproken discobus-uitrusting beschikbaar is, vraag je na bij ${partnerName}.`,
	},
	{
		question: 'Kan een partybus worden gebruikt voor een festival of evenement?',
		answer: `Ja. Vanuit Rotterdam kun je bij ${partnerName} een partybus aanvragen naar een festival, concert of evenement, bijvoorbeeld richting Rotterdam Ahoy, De Kuip of een locatie buiten de stad. Vermeld datum, groepsgrootte en of je ook een terugrit nodig hebt. Of de bus tot de locatie kan komen, stem je af.`,
	},
	{
		question: 'Hoe vraag ik een partybus vanuit Rotterdam aan?',
		answer: `PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Stuur een WhatsApp of ga naar de website van Tourgo met datum, groepsgrootte, gewenste opstap en bestemming. De aanvraag vanuit Rotterdam gaat naar deze partner.`,
	},
	{
		question: 'Kunnen er meerdere opstapplaatsen worden afgesproken?',
		answer:
			'Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met Tourgo Partybussen. Iedere extra stop beïnvloedt de route. Exacte stops hangen af van bereikbaarheid; niet elke straat in Rotterdam is geschikt voor een bus.',
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
		question: 'Zit ik ergens aan vast als ik vanuit Rotterdam een aanvraag doe?',
		answer: `Nee. Een eerste vraag via WhatsApp of de website van ${partnerName} is vrijblijvend. Je maakt pas een afspraak als de rit vanuit Rotterdam rond is.`,
	},
];

export function applyRotterdamTourgoHubCopy(city: CityPageData): CityPageData {
	return {
		...city,
		metaTitle: `Partybus huren Rotterdam | ${partnerName}`,
		metaDescription:
			'Partybus huren Rotterdam? Regel groepsvervoer via Tourgo Partybussen, de partner van PartybusNederland.nl in Zuid-Holland.',
		h1: 'Partybus huren in Rotterdam',
		hero: {
			...city.hero,
			subtitle:
				'Zoek je een partybus of feestbus vanuit Rotterdam? PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo Partybussen. Een aanvraag gaat naar deze partner.',
			trustItems: [
				'Tourgo Partybussen, partner Zuid-Holland',
				'Aanvraag gaat naar deze partner',
				'Geschikt voor groepen tot 80 personen',
				'Exacte opstap stem je af',
			],
		},
		intro: {
			...city.intro,
			title: 'Groepsvervoer over de Maas',
			paragraphs: [
				`Partybus huren Rotterdam regel je via ${partnerName}. PartybusNederland.nl werkt in Zuid-Holland samen met deze partner. Een aanvraag vanuit Rotterdam gaat naar Tourgo.`,
				'Een partybus Rotterdam wordt vaak gepland tussen delen van de stad die de Maas scheidt: Centrum, Kralingen of Hillegersberg aan de noordkant, en Kop van Zuid, Feijenoord of Charlois aan de zuidkant. Groepen noemen Rotterdam Centraal of Station Blaak als vertrekgebied. Of daar gestopt kan worden, stem je af. De Erasmusbrug, de Kop van Zuid en de Witte de Withstraat zijn vaker bestemming dan halte.',
				'Feestbus huren Rotterdam past bij een vrijgezellenfeest, verjaardag, bedrijfsfeest, concert of festival. Denk aan Rotterdam Ahoy, De Kuip, een avond in het centrum of een rit naar een andere stad. Of de bus tot de locatie kan komen, hangt van de rit af. Geef datum, aantal personen en bestemming door, dan kijkt Tourgo wat voor die rit mogelijk is.',
				'Een feestbus Rotterdam is groepsvervoer met chauffeur: de groep blijft bij elkaar vanaf het instappen. Sommige groepen vragen naar een discobus Rotterdam, andere schrijven party bus Rotterdam. Muziek en sfeer verschillen per voertuig; vraag na wat er aanwezig is. Er is geen vast tarief. De prijs hangt af van datum, route, ritduur, wachttijd en groepsgrootte. Een eerste vraag via WhatsApp of de website van Tourgo is vrijblijvend.',
			],
		},
		why: {
			...city.why,
			lead: 'Eén voertuig en één planning voor wie partybussen Rotterdam zoekt: de groep blijft bij elkaar, of de rit in de stad blijft of de Maas oversteekt.',
		},
		locations: {
			...city.locations,
			lead: 'Vanuit Rotterdam vragen groepen vaak een rit naar Ahoy, de overkant van de Maas of een andere stad. De bestemming en de exacte opstap stem je af met Tourgo Partybussen.',
		},
		activities: {
			...city.activities,
			lead: 'Festival- of evenementenvervoer vanuit Rotterdam regel je met Tourgo Partybussen. Vermeld datum, groepsgrootte en of je ook een terugrit nodig hebt.',
		},
		pickup: {
			...city.pickup,
			title: 'Opstappen in Rotterdam',
			lead: 'Voorbeelden van vertrekgebieden die groepen vaak noemen, zoals Rotterdam Centraal of Station Blaak. Of een bus daar kan stoppen, stem je af met Tourgo Partybussen.',
			items: ['Rotterdam Centraal', 'Station Blaak', 'Hotel of eigen locatie'],
			note: 'Rotterdam Ahoy, de Erasmusbrug, de Kop van Zuid en de Witte de Withstraat zijn vaak bestemming, niet automatisch de opstap. De exacte halte spreek je af met Tourgo Partybussen.',
		},
		faqs: rotterdamHubFaqs,
		cta: {
			...city.cta,
			title: 'Vraag een partybus of feestbus aan vanuit Rotterdam',
			text: `Neem contact op met ${partnerName} via WhatsApp of hun website. Noem Rotterdam, datum, groepsgrootte en bestemming.`,
		},
	};
}
