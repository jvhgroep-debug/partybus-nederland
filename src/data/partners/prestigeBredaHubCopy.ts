import type { CityPageData } from '../cities/types';
import { prestigeCoachService } from './prestigeCoachService';

const partnerName = prestigeCoachService.publicProfile.name;

/**
 * Breda hub-only SEO copy. Other municipality pages stay on the generic Prestige factory.
 * Canonical and path must remain /steden/partybus-huren-breda/.
 */
export function applyPrestigeBredaHubCopy(city: CityPageData): CityPageData {
	return {
		...city,
		metaTitle: `Partybus huren Breda | ${partnerName}`,
		metaDescription:
			'Partybus huren Breda? Regel groepsvervoer via Prestige Coach Service, de partner van PartybusNederland.nl in Noord-Brabant.',
		h1: 'Partybus huren in Breda',
		hero: {
			...city.hero,
			subtitle:
				'Zoek je een partybus in Breda? PartybusNederland.nl werkt in Noord-Brabant samen met Prestige Coach Service. Een aanvraag gaat naar deze partner.',
		},
		intro: {
			...city.intro,
			title: 'Groepsvervoer vanuit het centrum van Breda',
			paragraphs: [
				'Wil je een partybus huren in Breda? PartybusNederland.nl werkt in Noord-Brabant samen met Prestige Coach Service. Een aanvraag vanuit Breda gaat naar deze partner.',
				'Breda is een compacte stad: de Grote Markt, de Havermarkt en de Haven liggen dicht bij elkaar, terwijl delen van de binnenstad autoluw zijn. Wie een partybus Breda zoekt, stapt daarom meestal in op een afgesproken plek op loopafstand, niet midden op een plein. Groepen uit Ginneken, Princenhage, Belcrum of de Haagse Beemden, of uit Prinsenbeek, Bavel en Teteringen, zitten niet vanzelf op één route. Welke verzamelpunten haalbaar zijn, stem je af met Prestige Coach Service.',
				'Een feestbus huren Breda past bij een vrijgezellenfeest, verjaardag, bedrijfsfeest, festival of een ander groepsuitje. Tijdens carnaval, in Breda bekend als Kielegat, of bij drukte rond een evenement zoals Breda Jazz Festival kan de bereikbaarheid van het centrum anders zijn. Geef datum, aantal personen en bestemming door, dan kijkt Prestige Coach Service wat voor die rit mogelijk is.',
				'Sommige groepen zeggen feestbus Breda, andere vragen naar een discobus Breda. Daarmee wordt hetzelfde soort groepsvervoer bedoeld: een bus met chauffeur, waarbij muziek, verlichting en sfeer per voertuig kunnen verschillen. Vraag na wat er aanwezig is. Er is geen vast tarief; de prijs hangt af van datum, route, ritduur, wachttijd en groepsgrootte. Een eerste aanvraag via het formulier of WhatsApp is vrijblijvend.',
			],
		},
		why: {
			...city.why,
			lead: 'Eén bus voor de hele groep: van een afgesproken punt in Breda tot het feest, en desgewenst weer terug.',
		},
		pickup: {
			...city.pickup,
			title: 'Opstappen in Breda',
			lead: 'Mogelijke vertrekgebieden zijn de omgeving van Breda Centraal, de rand van het centrum of de Haven. De Grote Markt en de Havermarkt zijn geen vanzelfsprekende halte. De exacte opstap stem je af met Prestige Coach Service.',
			note: 'Geef de gewenste opstap, bestemming, datum en het aantal personen vanuit Breda door, dan kan Prestige Coach Service aangeven wat haalbaar is.',
		},
		faqs: [
			{
				question: 'Wat kost een partybus huren in Breda?',
				answer: `Er is geen vast tarief voor een partybus of feestbus in Breda. De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. ${partnerName} geeft de mogelijkheden door op basis van jullie aanvraag.`,
			},
			{
				question: 'Voor hoeveel personen kan ik een partybus huren?',
				answer:
					'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door in je aanvraag bij Prestige Coach Service.',
			},
			{
				question: 'Waar kunnen we in Breda worden opgehaald?',
				answer:
					'Herkenbare vertrekgebieden zijn de omgeving van Breda Centraal, de rand van het centrum en de Haven. De Grote Markt en de Havermarkt liggen in een druk, deels autoluw centrum en zijn geen vanzelfsprekende bushalte. Ook een hotel of eigen locatie kun je doorgeven. De exacte opstap stem je af met Prestige Coach Service.',
			},
			{
				question: 'Kan ik een feestbus huren in Breda voor een vrijgezellenfeest?',
				answer: `Ja. Vanuit Breda wordt een partybus of feestbus vaak aangevraagd voor een vrijgezellenfeest, verjaardag, bedrijfsfeest of ander groepsuitje. Geef datum, aantal personen, gewenste opstap en bestemming door, dan kijkt ${partnerName} wat mogelijk is.`,
			},
			{
				question: 'Kan een partybus worden gebruikt voor vervoer naar een festival?',
				answer: `Ja. Vanuit Breda kun je bij ${partnerName} een partybus aanvragen naar festivals in Nederland en België. Vermeld festival, datum, groepsgrootte en of je ook een terugrit nodig hebt.`,
			},
			{
				question: 'Wat wordt bedoeld met een discobus in Breda?',
				answer: `Partybus, feestbus en discobus worden in Breda vaak voor hetzelfde type groepsvervoer gebruikt: een bus met chauffeur. Muziek, verlichting en sfeer verschillen per voertuig. Of een meer uitgesproken discobus-uitrusting beschikbaar is, vraag je na bij ${partnerName}.`,
			},
			{
				question: 'Hoe vraag ik een partybus vanuit Breda aan?',
				answer: `PartybusNederland.nl werkt in Noord-Brabant samen met ${partnerName}. Een aanvraag vanuit Breda gaat naar deze partner. Vul het formulier in of stuur een WhatsApp met opstap, datum, groepsgrootte en bestemming.`,
			},
			{
				question: 'Kunnen er meerdere opstapplaatsen worden afgesproken?',
				answer: `Meerdere opstapplaatsen zijn vaak mogelijk wanneer je dit vooraf afstemt met ${partnerName}. Iedere extra stop beïnvloedt de route. Exacte stops hangen af van bereikbaarheid; niet elke straat in Breda is geschikt voor een bus.`,
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
				question: 'Zit ik ergens aan vast als ik vanuit Breda een aanvraag doe?',
				answer: `Nee. Een aanvraag via PartybusNederland.nl of WhatsApp is vrijblijvend. Je maakt pas een afspraak als de rit vanuit Breda met ${partnerName} rond is.`,
			},
		],
		cta: {
			...city.cta,
			title: 'Vraag een partybus of feestbus aan vanuit Breda',
			text: `Vertel wanneer je wilt vertrekken, met hoeveel personen en wat je bestemming is. Je aanvraag vanuit Breda gaat naar ${partnerName}.`,
		},
	};
}
