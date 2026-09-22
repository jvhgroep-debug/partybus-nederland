import type { CityFaq, CityPageData } from '../cities/types';
import { tourgoPartybussen } from './tourgoPartybussen';

const partnerName = tourgoPartybussen.publicProfile.name;

/**
 * Leiden city hub only. Other Zuid-Holland pages, including Rotterdam and Den Haag,
 * stay on their own copy. Path and canonical stay /steden/partybus-huren-leiden/.
 */
const leidenHubFaqs: readonly CityFaq[] = [
	{
		question: 'Wat kost een partybus huren in Leiden?',
		answer: `Er is geen vast tarief voor een partybus of feestbus vanuit Leiden. De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. ${partnerName} geeft de mogelijkheden door op basis van jullie aanvraag.`,
	},
	{
		question: 'Kan ik een feestbus huren in Leiden?',
		answer: `Ja. Feestbus huren Leiden is hetzelfde soort aanvraag als een partybus: groepsvervoer met chauffeur via ${partnerName}. Geef datum, aantal personen, gewenste opstap en bestemming door, dan kijken zij wat mogelijk is.`,
	},
	{
		question: 'Voor hoeveel personen kan ik een partybus aanvragen?',
		answer:
			'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door als je Tourgo Partybussen benadert.',
	},
	{
		question: 'Waar kunnen we in Leiden worden opgehaald?',
		answer:
			'Groepen noemen vaak Leiden Centraal of Leiden Lammenschans. Ook een hotel of eigen locatie kan worden doorgegeven. Of een bus daar kan stoppen, hangt van de rit af. De Beestenmarkt, de Breestraat en het Rapenburg liggen in de binnenstad en zijn vaker bestemming dan halte. De exacte opstap stem je af met Tourgo Partybussen.',
	},
	{
		question: 'Kan ik een feestbus huren voor een vrijgezellenfeest?',
		answer: `Ja. Vanuit Leiden wordt een partybus of feestbus vaak aangevraagd voor een vrijgezellenfeest, verjaardag, bedrijfsfeest of ander groepsuitje. Geef datum, aantal personen, gewenste opstap en bestemming door, dan kijkt ${partnerName} wat mogelijk is.`,
	},
	{
		question: 'Kan een partybus worden gebruikt voor een festival of evenement?',
		answer: `Ja. Vanuit Leiden kun je bij ${partnerName} een partybus aanvragen naar een festival, concert of evenement, bijvoorbeeld richting de Stadsgehoorzaal of een locatie buiten de stad. Vermeld datum, groepsgrootte en of je ook een terugrit nodig hebt. Of de bus tot de locatie kan komen, stem je af.`,
	},
	{
		question: 'Hoe vraag ik een partybus vanuit Leiden aan?',
		answer: `PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Stuur een WhatsApp of ga naar de website van Tourgo met datum, groepsgrootte, gewenste opstap en bestemming. De aanvraag vanuit Leiden gaat naar deze partner.`,
	},
	{
		question: 'Kunnen er meerdere opstapplaatsen worden afgesproken?',
		answer:
			'Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met Tourgo Partybussen. Iedere extra stop beïnvloedt de route. Exacte stops hangen af van bereikbaarheid; niet elke straat in Leiden is geschikt voor een bus.',
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
		question: 'Zit ik ergens aan vast als ik vanuit Leiden een aanvraag doe?',
		answer: `Nee. Een eerste vraag via WhatsApp of de website van ${partnerName} is vrijblijvend. Je maakt pas een afspraak als de rit vanuit Leiden rond is.`,
	},
];

export function applyLeidenTourgoHubCopy(city: CityPageData): CityPageData {
	return {
		...city,
		metaTitle: `Partybus huren Leiden | ${partnerName}`,
		metaDescription:
			'Feestbus huren Leiden? Regel een partybus via Tourgo Partybussen, de partner van PartybusNederland.nl in Zuid-Holland.',
		h1: 'Partybus huren in Leiden',
		hero: {
			...city.hero,
			subtitle:
				'Zoek je een partybus of feestbus vanuit Leiden? PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo Partybussen. Een aanvraag gaat naar deze partner.',
			trustItems: [
				'Tourgo Partybussen, partner Zuid-Holland',
				'Aanvraag gaat naar deze partner',
				'Geschikt voor groepen tot 80 personen',
				'Exacte opstap stem je af',
			],
		},
		intro: {
			...city.intro,
			title: 'Groepsvervoer vanuit de Sleutelstad',
			paragraphs: [
				`Partybus huren Leiden regel je via ${partnerName}. PartybusNederland.nl werkt in Zuid-Holland samen met deze partner. Een aanvraag vanuit Leiden gaat naar Tourgo.`,
				'Een partybus Leiden wordt vaak gepland tussen de compacte binnenstad en wijken daarbuiten, zoals Stevenshof, de Merenwijk, Leiden-Noord, De Kooi of Meerburg. Groepen noemen Leiden Centraal of Leiden Lammenschans als vertrekgebied. Of daar gestopt kan worden, stem je af. De Beestenmarkt, de Breestraat en het Rapenburg liggen binnen de singels en zijn vaker bestemming dan halte.',
				'Feestbus huren Leiden past bij een vrijgezellenfeest, verjaardag, bedrijfsfeest, concert of groepsuitje. Denk aan een avond in de binnenstad, de Stadsgehoorzaal, of een rit naar de kust of een andere stad. Tijdens Leidens Ontzet is het centrum extra druk. Of de bus tot een locatie kan komen, hangt van de rit af. Geef datum, aantal personen en bestemming door, dan kijkt Tourgo wat mogelijk is.',
				'Een feestbus Leiden is groepsvervoer met chauffeur: de groep blijft bij elkaar vanaf het instappen. Muziek en sfeer verschillen per voertuig; vraag na wat er aanwezig is. Er is geen vast tarief. De prijs hangt af van datum, route, ritduur, wachttijd en groepsgrootte. Een eerste vraag via WhatsApp of de website van Tourgo is vrijblijvend.',
			],
		},
		why: {
			...city.why,
			lead: 'Eén voertuig en één planning: de groep vertrekt samen vanuit Leiden, of de avond in de binnenstad blijft of buiten de singels begint.',
		},
		locations: {
			...city.locations,
			lead: 'Vanuit Leiden vragen groepen vaak een rit naar de binnenstad, de kust of een andere stad. De bestemming en de exacte opstap stem je af met Tourgo Partybussen.',
		},
		activities: {
			...city.activities,
			lead: 'Festival- of evenementenvervoer vanuit Leiden regel je met Tourgo Partybussen. Vermeld datum, groepsgrootte en of je ook een terugrit nodig hebt.',
		},
		pickup: {
			...city.pickup,
			title: 'Opstappen in Leiden',
			lead: 'Voorbeelden van vertrekgebieden die groepen vaak noemen, zoals Leiden Centraal of Leiden Lammenschans. Of een bus daar kan stoppen, stem je af met Tourgo Partybussen.',
			items: ['Leiden Centraal', 'Leiden Lammenschans', 'Hotel of eigen locatie'],
			note: 'De Beestenmarkt, de Breestraat en het Rapenburg zijn vaak bestemming, niet automatisch de opstap. Tijdens Leidens Ontzet is de binnenstad extra druk. De exacte halte spreek je af met Tourgo Partybussen.',
		},
		faqs: leidenHubFaqs,
		cta: {
			...city.cta,
			title: 'Vraag een partybus of feestbus aan vanuit Leiden',
			text: `Neem contact op met ${partnerName} via WhatsApp of hun website. Noem Leiden, datum, groepsgrootte en bestemming.`,
		},
	};
}
