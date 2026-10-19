import type { KennisbankArticle } from '../types';
import { samenwerkingPrestigeNoordBrabant as partnerArticle } from './samenwerkingPrestigeNoordBrabant';
import { buildPrestigeCoachServiceWhatsappHref } from '../../partners/prestigeCoachService';

export const publication = {
  website: 'https://www.partybusnederland.nl',
  originalScheduledAt: '2026-10-19T12:00:00+04:00',
  datePublished: '2026-10-19T12:24:07+04:00',
  partner: 'Prestige Coach Service',
  photoSource: 'https://www.partybusnederland.nl/images/partners/prestige-coach-service/prestige-coach-service-groepsfoto.webp',
};
const path = '/kennisbank/bruiloft-brabant-dag-avondgasten-vervoer/';
const quote = '/gratis-partybus-offertes-aanvragen/?' + new URLSearchParams({partner: 'prestige-coach-service', city: 'Noord-Brabant', source: path}).toString();

export const bruiloftBrabantGasten: KennisbankArticle = {
  ...partnerArticle,
  slug: 'bruiloft-brabant-dag-avondgasten-vervoer', path,
  canonical: `https://www.partybusnederland.nl${path}`,
  seoTitle: 'Bruiloft in Brabant: vervoer voor dag- en avondgasten',
  metaDescription: 'Plan vervoer voor dag- en avondgasten bij een bruiloft in Brabant. Bespreek ritten tussen ceremonie, diner en feest met Prestige Coach Service.',
  h1: 'Bruiloft in Brabant: dag- en avondgasten in één vervoersplan',
  eyebrow: 'BRUILOFT PLANNEN · NOORD-BRABANT',
  lead: 'Daggasten reizen misschien van de ceremonie naar het diner, terwijl avondgasten later aansluiten bij het feest. Wie iedereen met dezelfde vertrektijd indeelt, mist al snel een deel van de planning. Maak voor jullie Brabantse bruiloft eerst een overzicht per groep en bespreek daarna welke busritten daarbij passen. Prestige Coach Service is onze aangesloten partner voor Noord-Brabant.',
  heroPrimaryHref: quote,
  heroPrimaryLabel: 'Bespreek jullie bruiloftsritten',
  sections: [
    {id:'gastenlijsten', title:'Maak twee gastenlijsten met reisbehoeften', paragraphs:[
      'Begin met de daggasten en avondgasten apart. Noteer per groep wie vervoer nodig heeft, waar mensen instappen en naar welk onderdeel van de bruiloft zij gaan. Een gast die zelf naar de ceremonie rijdt maar later met de bus wil terugreizen, hoort ook in dit overzicht.',
      'Tel de deelnemers per rit, niet alleen het totaal op de gastenlijst. Er kunnen op de heenweg andere mensen meerijden dan na het feest. Geef beide aantallen door, zodat de aanbieder capaciteit en uitvoering voor de afzonderlijke ritten kan beoordelen.',
    ]},
    {id:'programma', title:'Vertaal de trouwdag naar adressen en aankomsttijden', paragraphs:[
      'Schrijf het volledige adres van ceremonie, diner en feestlocatie op. Zet erbij wanneer gasten daar worden verwacht en wie het vervoer op locatie begeleidt. Vraag de locaties waar een bus kan afzetten en laat de vervoerder beoordelen of die plek geschikt is voor het aangeboden voertuig.',
      'Liggen de ceremonie in Breda en het feest elders in Brabant, benoem dan beide adressen. Een gemeentenaam of alleen de naam van een trouwlocatie is geen volledig reisschema. Laat de benodigde reistijd en instaptijd beoordelen voordat je busvertrektijden op de uitnodiging zet.',
    ],moreLink:{label:'Vervoer voor een bruiloft bespreken',href:'/diensten/partybus-bruiloft/'}},
    {id:'tussentijd', title:'Bespreek wat de bus doet tussen de programmaonderdelen', paragraphs:[
      'Tussen het brengen van daggasten en het ophalen van avondgasten kan een lange periode zitten. Geef de gewenste ritmomenten daarom afzonderlijk door. Vraag of het voorstel uit losse transfers bestaat of ook aanwezigheid van de bus tussen de ritten omvat.',
      'Willen jullie de bus tussendoor gebruiken voor een extra groep, bijvoorbeeld gasten vanaf een hotel? Neem die wens direct mee. Een voertuig dat een eerdere transfer verzorgt, is niet automatisch de hele trouwdag beschikbaar. Laat wachttijd en extra ritten terugkomen in het voorstel.',
    ]},
    {id:'terugreis', title:'Maak van de terugreis een afzonderlijke gastenafspraak', paragraphs:[
      'Sommige gasten willen na het diner vertrekken; anderen blijven tot het einde van het feest. Vraag vooraf wie een vroege of late terugrit nodig heeft en naar welke eindbestemming. Ga niet uit van meerdere retourritten als die nog niet zijn besproken en bevestigd.',
      'Kies wie op de avond zelf contact houdt met de vervoerder. Dat kan een ceremoniemeester of andere contactpersoon zijn. Deel het afgesproken verzamelpunt en de ophaaltijd met de betreffende gasten, zodat het bruidspaar niet ieder vertrek hoeft te organiseren.',
    ]},
    {id:'bijzonderheden', title:'Noem feestkleding, bagage en instapvragen vooraf', paragraphs:[
      'Geef aan of gasten weekendtassen, cadeaus of spullen voor de ceremonie meenemen. Het aantal zitplaatsen zegt nog niet hoeveel extra ruimte er beschikbaar is. Vraag wat het aangeboden voertuig kan meenemen en spreek af wie eventuele achtergebleven spullen controleert.',
      'Heeft iemand moeite met instappen of een andere concrete vervoersbehoefte, bespreek dat vóór de boeking. Vraag naar het aangeboden voertuig en de relevante mogelijkheden. Een foto uit een partnerpresentatie is geen bevestiging dat iedere bus of voorziening voor jullie datum beschikbaar is.',
    ]},
    {id:'voorstel', title:'Laat Prestige het volledige plan bevestigen', paragraphs:[
      'Prestige Coach Service is gevestigd in Baarle-Nassau en behandelt via PartybusNederland.nl de aanvragen voor Noord-Brabant. Een vertrek uit Breda, Tilburg of Eindhoven is een werkgebied, geen afzonderlijke vestiging. Vermeld de plaats waar iedere rit daadwerkelijk begint.',
      'Vraag een voorstel waarin de ritmomenten, aantallen, adressen, voertuigkeuze en totaalprijs bij elkaar staan. Bespreek hoe wijzigingen, een uitlopende ceremonie of een later einde van het feest worden behandeld. Deel daarna één bevestigd vervoersplan met de gasten en jullie contactpersoon.',
    ],moreLink:{label:'Aanvragen bij de partner voor Noord-Brabant',href:'/provincies/noord-brabant/'}},
  ],
  checklist:{title:'Dit geef je door voor jullie trouwdag',lead:'Maak het overzicht per rit, zodat daggasten en avondgasten niet door elkaar raken.',items:[
    'Trouwdatum en één contactpersoon voor de ritplanning.',
    'Aantallen instappers per rit en per adres.',
    'Volledige adressen van vertrek, ceremonie, diner, feest en eindstops.',
    'Gewenste aankomsttijden, vroege retourwensen en laatste terugrit.',
    'Bagage, instapvragen en overige concrete wensen.',
    'Bevestiging van voertuig, totaalprijs, wachttijd en wijzigingsafspraken.',
  ]},
  faqs:[
    {question:'Kunnen daggasten en avondgasten op andere tijden reizen?',answer:'Je kunt verschillende ritmomenten aanvragen. Geef per rit de aantallen, adressen en gewenste tijden door. Prestige Coach Service beoordeelt de uitvoering en bevestigt welke ritten in het voorstel zijn opgenomen.'},
    {question:'Blijft de bus tijdens het diner beschikbaar?',answer:'Dat hangt af van de gemaakte afspraken. Vraag expliciet of het voorstel aanwezigheid tussen de transfers omvat of alleen de afgesproken ritmomenten.'},
    {question:'Is een aanvraag al een bevestigde bruiloftsboeking?',answer:'Nee. Een aanvraag is het begin van het overleg. Laat de concrete ritten, het voertuig, de prijs en de voorwaarden door de vervoerder bevestigen voordat je van een boeking uitgaat.'},
  ],
  summary:{title:'Geef elke groep een duidelijke reisafspraak',paragraphs:['Een bruikbaar bruiloftsplan koppelt daggasten en avondgasten aan hun eigen ritmoment. Deel na bevestiging per groep de vertrekplek, tijd, bestemming en contactpersoon. Bewaar de complete planning bij de ceremoniemeester of organisator.']},
  cta:{title:'Jullie trouwdag in Brabant voorbereiden?',lead:'Bespreek het overzicht van dag- en avondgasten met Prestige Coach Service via PartybusNederland.nl.',primaryHref:quote,primaryLabel:'Vraag een voorstel voor jullie ritten',whatsappHref:buildPrestigeCoachServiceWhatsappHref('Noord-Brabant'),whatsappLabel:'WhatsApp Prestige Coach Service'},
  relatedLinks:[{label:'Onze samenwerking met Prestige Coach Service',href:partnerArticle.path},{label:'Kostenfactoren van een partybus',href:'/gids/partybus-kosten/'},{label:'Opstapplaatsen in Brabant vergelijken',href:'/kennisbank/festivalvervoer-brabant-groep-opstapplaatsen/'}],
  cityLinks:[{label:'Vertrek vanuit Breda',href:'/steden/partybus-huren-breda/'},{label:'Vertrek vanuit Tilburg',href:'/steden/partybus-huren-tilburg/'},{label:'Vertrek vanuit Eindhoven',href:'/steden/partybus-huren-eindhoven/'}],
  trustNote:'Echte foto’s uit de bestaande Prestige-partnerpresentatie. Ze illustreren groepsvervoer en tonen geen gegarandeerd voertuig of specifieke bruiloft. Prestige bevestigt de uitvoering en beschikbaarheid voor jullie datum.',
};
