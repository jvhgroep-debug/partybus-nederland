import type { CityFaq, CityPageData } from '../cities/types';
import { partyBussenWestland } from './partyBussenWestland';

const partnerName = partyBussenWestland.publicProfile.name;

/**
 * Utrecht city hub only. Other Utrecht municipalities stay on the shared Westland factory.
 * Path and canonical must remain /steden/partybus-huren-utrecht/.
 * Visible H1 stays "Partybus huren in Utrecht" via UtrechtPartnerHero.
 */
const utrechtHubFaqs: readonly CityFaq[] = [
	{
		question: 'Wat kost een partybus huren in Utrecht?',
		answer: `Er is geen vast tarief voor een partybus of feestbus vanuit Utrecht. De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. ${partnerName} geeft de mogelijkheden door op basis van jullie aanvraag.`,
	},
	{
		question: 'Voor hoeveel personen kan ik een partybus huren?',
		answer:
			'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door als je Party Bussen Westland benadert.',
	},
	{
		question: 'Waar kunnen we in Utrecht worden opgehaald?',
		answer:
			'Groepen noemen vaak Utrecht Centraal of de omgeving van de Jaarbeurs. Ook een hotel of eigen locatie kan worden doorgegeven. Of een bus daar kan stoppen, hangt van de rit af. De Oudegracht, de Neude en het Domplein zijn vaker bestemming dan halte. De exacte opstap stem je af met Party Bussen Westland.',
	},
	{
		question: 'Kan ik een feestbus huren in Utrecht voor een vrijgezellenfeest?',
		answer: `Ja. Vanuit Utrecht wordt een partybus of feestbus vaak aangevraagd voor een vrijgezellenfeest, verjaardag, bedrijfsfeest of ander groepsuitje. Geef datum, aantal personen, gewenste opstap en bestemming door, dan kijkt ${partnerName} wat mogelijk is.`,
	},
	{
		question: 'Kan een partybus worden gebruikt voor een festival of evenement?',
		answer: `Ja. Vanuit Utrecht kun je bij ${partnerName} een partybus aanvragen naar een festival, concert of evenement, bijvoorbeeld richting TivoliVredenburg, de Jaarbeurs, Stadion Galgenwaard of een festival buiten de stad. Vermeld datum, groepsgrootte en of je ook een terugrit nodig hebt.`,
	},
	{
		question: 'Hoe vraag ik een partybus vanuit Utrecht aan?',
		answer: `PartybusNederland.nl werkt voor Utrecht samen met ${partnerName}. Vul het formulier in of stuur een WhatsApp met datum, groepsgrootte, gewenste opstap en bestemming. De aanvraag gaat naar deze partner.`,
	},
	{
		question: 'Kunnen er meerdere opstapplaatsen worden afgesproken?',
		answer:
			'Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met Party Bussen Westland. Iedere extra stop beïnvloedt de route. Exacte stops hangen af van bereikbaarheid; niet elke straat in Utrecht is geschikt voor een bus.',
	},
	{
		question: 'Kan een partybus naar België of Duitsland rijden?',
		answer: `Ritten naar België of Duitsland zijn in overleg met ${partnerName} vaak mogelijk. Vermeld de eindbestemming duidelijk, zodat zij kunnen aangeven wat voor jullie rit haalbaar is.`,
	},
	{
		question: 'Kunnen heenreis en terugreis samen worden aangevraagd?',
		answer:
			'Ja. Geef beide tijden en locaties door in één aanvraag. Of de bus blijft wachten of later terugkomt, stem je af met Party Bussen Westland.',
	},
	{
		question: 'Zit ik ergens aan vast als ik vanuit Utrecht een aanvraag doe?',
		answer: `Nee. Een aanvraag via het formulier of WhatsApp is vrijblijvend. Je maakt pas een afspraak als de rit vanuit Utrecht met ${partnerName} rond is.`,
	},
];

export function applyUtrechtWestlandHubCopy(city: CityPageData): CityPageData {
	return {
		...city,
		metaTitle: `Partybus huren Utrecht | ${partnerName}`,
		metaDescription:
			'Partybus huren Utrecht? Regel groepsvervoer via Party Bussen Westland, de partner van PartybusNederland.nl voor Utrecht.',
		h1: 'Partybus huren in Utrecht',
		hero: {
			...city.hero,
			subtitle:
				'Zoek je een partybus of feestbus vanuit Utrecht? PartybusNederland.nl werkt daarvoor samen met Party Bussen Westland. Een aanvraag gaat naar deze partner.',
			trustItems: [
				'Party Bussen Westland, partner Utrecht',
				'Aanvraag gaat naar deze partner',
				'Geschikt voor groepen tot 80 personen',
				'Exacte opstap stem je af',
			],
		},
		intro: {
			...city.intro,
			title: 'Groepsvervoer vanuit Utrecht',
			paragraphs: [
				`Partybus huren Utrecht regel je via ${partnerName}. PartybusNederland.nl werkt daarvoor samen met dit bedrijf. Zij zijn gevestigd in Naaldwijk en de partner voor ritten vanuit Utrecht, geen kantoor in de stad zelf.`,
				'Een partybus Utrecht wordt vaak gepland tussen wijken die niet op één lijn liggen: Leidsche Rijn, Lombok, Zuilen, Overvecht, Lunetten of Wittevrouwen. Groepen noemen Utrecht Centraal of de omgeving van de Jaarbeurs als vertrekgebied. Of daar gestopt kan worden, stem je af. Rond de Oudegracht, de Neude en het Domplein is de binnenstad vaker bestemming dan halte.',
				'Feestbus huren Utrecht past bij een vrijgezellenfeest, verjaardag, bedrijfsfeest, concert of festival. Denk aan TivoliVredenburg, de Jaarbeurs, Stadion Galgenwaard of een avond elders in het land. Utrecht ligt centraal, dus veel ritten vertrekken hier vandaan. Geef datum, aantal personen en bestemming door, dan kijkt Party Bussen Westland wat voor die rit mogelijk is.',
				'Een feestbus Utrecht is groepsvervoer met chauffeur: de groep blijft bij elkaar vanaf het instappen. Muziek en sfeer verschillen per voertuig; vraag na wat er aanwezig is. Er is geen vast tarief. De prijs hangt af van datum, route, ritduur, wachttijd en groepsgrootte. Een eerste aanvraag via het formulier of WhatsApp is vrijblijvend.',
			],
		},
		why: {
			...city.why,
			lead: 'Eén voertuig en één planning: de groep vertrekt samen vanuit Utrecht, naar de binnenstad, een evenement of een andere stad.',
		},
		locations: {
			...city.locations,
			lead: 'Vanuit Utrecht vragen groepen vaak een rit naar een andere stad, een festival of een feestlocatie. De bestemming en de exacte opstap stem je af met Party Bussen Westland.',
		},
		activities: {
			...city.activities,
			lead: 'Festival- of evenementenvervoer vanuit Utrecht regel je met Party Bussen Westland. Vermeld datum, groepsgrootte en of je ook een terugrit nodig hebt.',
		},
		pickup: {
			...city.pickup,
			title: 'Opstappen in Utrecht',
			lead: 'Voorbeelden van vertrekgebieden die groepen vaak noemen, zoals Utrecht Centraal of de omgeving van de Jaarbeurs. Of een bus daar kan stoppen, stem je af met Party Bussen Westland.',
			items: ['Utrecht Centraal', 'Omgeving Jaarbeurs', 'Hotel of eigen locatie'],
			note: 'De Oudegracht, de Neude en het Domplein zijn vaak bestemming, niet automatisch de opstap. De exacte halte spreek je af met Party Bussen Westland.',
		},
		faqs: utrechtHubFaqs,
		cta: {
			...city.cta,
			title: 'Vraag een partybus of feestbus aan vanuit Utrecht',
			text: `Neem contact op met ${partnerName} via het formulier of WhatsApp. Noem Utrecht, datum, groepsgrootte en bestemming.`,
		},
	};
}
