import type { CityPageData } from '../cities/types';
import { prestigeCoachService } from './prestigeCoachService';

const partnerName = prestigeCoachService.publicProfile.name;

/**
 * Tilburg hub-only SEO copy. Other municipality pages stay on the generic Prestige factory.
 * Canonical and path must remain /steden/partybus-huren-tilburg/.
 */
export function applyPrestigeTilburgHubCopy(city: CityPageData): CityPageData {
	return {
		...city,
		metaTitle: `Partybus huren Tilburg | ${partnerName}`,
		metaDescription:
			'Feestbus huren Tilburg? Regel een partybus via Prestige Coach Service, de partner van PartybusNederland.nl in Noord-Brabant. Vraag vrijblijvend aan.',
		h1: 'Partybus huren in Tilburg',
		hero: {
			...city.hero,
			subtitle:
				'Zoek je een partybus of feestbus in Tilburg? PartybusNederland.nl werkt in Noord-Brabant samen met Prestige Coach Service. Een aanvraag gaat naar deze partner.',
		},
		intro: {
			...city.intro,
			title: 'Een partybus of feestbus vanuit Tilburg',
			paragraphs: [
				'Wil je een partybus huren in Tilburg? PartybusNederland.nl werkt in Noord-Brabant samen met Prestige Coach Service. Ook als je een feestbus huren in Tilburg zoekt, gaat de aanvraag naar deze partner — niet naar een rij losse vervoerders.',
				'Tilburg is een stad van studenten, evenementen en uitgaan: van de Spoorzone tot het centrum rond de Korte Heuvel en het Piusplein. Herkenbare verzamelpunten zijn Tilburg Centraal, het centrum en de Spoorzone. Groepen uit wijken zoals Reeshof, Tilburg-Noord of Korvel kunnen daar samenkomen. Extra stops of ophalen bij een hotel of eigen locatie stem je af met Prestige Coach Service; niet elke straat is geschikt voor een bus.',
				'Een partybus Tilburg is bedoeld voor groepsvervoer waarbij de sfeer al onderweg begint. Denk aan een vrijgezellenfeest, verjaardag, bedrijfsfeest, festival of een andere groepsavond. Sommige groepen vragen naar een discobus Tilburg, met nadruk op muziek en verlichting. Wat er in het voertuig aanwezig is, verschilt per bus; vraag dat na in plaats van het aan te nemen.',
				'Tijdens de Tilburgse Kermis of drukte rond 013 kan de binnenstad anders bereikbaar zijn. Bevestig daarom het opstappunt met Prestige Coach Service. Er is geen vast tarief: de prijs hangt af van datum, route, ritduur, wachttijd en groepsgrootte. Vul het formulier in of stuur een WhatsApp; een eerste aanvraag is vrijblijvend.',
			],
		},
		why: {
			...city.why,
			lead: 'Eén bus, één planning: de groep blijft bij elkaar vanaf het instappen in Tilburg tot de bestemming.',
		},
		pickup: {
			...city.pickup,
			title: 'Opstappen in Tilburg',
			lead: 'In Tilburg werken herkenbare verzamelpunten het best, zoals Tilburg Centraal, het centrum of de Spoorzone. De exacte opstap stem je af met Prestige Coach Service.',
			note: 'Geef opstap, bestemming, datum en aantal personen vanuit Tilburg mee in je aanvraag, dan kan Prestige Coach Service de rit gerichter inschatten.',
		},
		faqs: [
			{
				question: 'Wat kost een partybus huren in Tilburg?',
				answer: `Er is geen vast tarief voor een partybus of feestbus in Tilburg. De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. ${partnerName} geeft de mogelijkheden door op basis van jullie aanvraag.`,
			},
			{
				question: 'Voor hoeveel personen kan ik een partybus huren?',
				answer:
					'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door in je aanvraag bij Prestige Coach Service.',
			},
			{
				question: 'Waar kunnen we in Tilburg worden opgehaald?',
				answer:
					'Herkenbare verzamelpunten zijn Tilburg Centraal, het centrum en de Spoorzone. Ook een hotel of eigen locatie kan worden doorgegeven. De exacte opstap stem je af met Prestige Coach Service; niet iedere straat is geschikt voor een bus.',
			},
			{
				question: 'Kunnen er meerdere opstapplaatsen worden afgesproken?',
				answer: `Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met ${partnerName}. Denk bijvoorbeeld aan Tilburg Centraal, het centrum en de Spoorzone. Exacte stops hangen af van route en bereikbaarheid.`,
			},
			{
				question: 'Kan ik een partybus huren voor een vrijgezellenfeest?',
				answer: `Ja. Vanuit Tilburg wordt een partybus of feestbus vaak aangevraagd voor een vrijgezellenfeest, verjaardag, bedrijfsfeest of ander groepsuitje. Geef datum, aantal personen, opstap en bestemming door, dan kijkt ${partnerName} wat mogelijk is.`,
			},
			{
				question: 'Kan een partybus vervoer naar een festival verzorgen?',
				answer: `Ja. Vanuit Tilburg kun je bij ${partnerName} een partybus aanvragen naar festivals in Nederland en België. Vermeld festival, datum, groepsgrootte en of je ook een terugrit nodig hebt.`,
			},
			{
				question: 'Wat is het verschil tussen een partybus, feestbus en discobus?',
				answer: `In de praktijk worden partybus, feestbus en discobus in Tilburg vaak voor hetzelfde type groepsvervoer gebruikt: een bus met chauffeur, waarbij muziek, verlichting en sfeer per voertuig kunnen verschillen. Of een meer uitgesproken discobus-uitrusting beschikbaar is, vraag je na bij ${partnerName}.`,
			},
			{
				question: 'Hoe vraag ik een partybus aan vanuit Tilburg?',
				answer: `PartybusNederland.nl werkt in Noord-Brabant samen met ${partnerName}. Een aanvraag vanuit Tilburg gaat naar deze partner. Vul het formulier in of stuur een WhatsApp met opstap, datum, groepsgrootte en bestemming.`,
			},
			{
				question: 'Kan een partybus naar België of Duitsland rijden?',
				answer: `Ritten naar België of Duitsland zijn in overleg met ${partnerName} vaak mogelijk. Vermeld de eindbestemming duidelijk, zodat zij kunnen aangeven wat voor jullie rit haalbaar is.`,
			},
			{
				question: 'Kunnen heenreis en terugreis samen worden aangevraagd?',
				answer: `Ja. Geef beide tijden en locaties door aan ${partnerName}. Of de bus blijft wachten of later terugkomt, stem je met hen af.`,
			},
			{
				question: 'Zit ik ergens aan vast als ik vanuit Tilburg een aanvraag doe?',
				answer: `Nee. Een aanvraag via PartybusNederland.nl of WhatsApp is vrijblijvend. Je maakt pas een afspraak als de rit vanuit Tilburg met ${partnerName} rond is.`,
			},
		],
		cta: {
			...city.cta,
			title: 'Vraag een partybus of feestbus aan in Tilburg',
			text: `Vertel wanneer je wilt vertrekken, met hoeveel personen en wat je bestemming is. Je aanvraag vanuit Tilburg gaat naar ${partnerName}.`,
		},
	};
}
