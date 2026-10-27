import type { KennisbankArticle } from '../types';
import { samenwerkingTourgoZuidHolland as partnerArticle } from './samenwerkingTourgoZuidHolland';
import { buildTourgoQuoteHref, buildTourgoWhatsappHref } from '../../partners/tourgoPartybussen';
const path = '/kennisbank/partybus-zuid-holland-verschillende-vertrektijden-terugrit/';
const quote = buildTourgoQuoteHref('Zuid-Holland',path);
export const publication = {
 website:'www.partybusnederland.nl', slotId:'www.partybusnederland.nl|2026-10-27|1', slotNumber:1,
 originalScheduledAt:'2026-10-27T04:00:00+04:00', datePublished:'2026-10-27T04:00:00+04:00',
 partner:'Tourgo Partybussen', photoSource:'https://www.partybusnederland.nl/images/partners/tourgo-partybussen/tourgo-partybussen-street.webp'
};
export const terugritGroepskeuze: KennisbankArticle = {
 ...partnerArticle,
 slug:'partybus-zuid-holland-verschillende-vertrektijden-terugrit',path,
 canonical:`https://www.partybusnederland.nl${path}`,
 seoTitle:'Samen terug met de partybus? Vertrektijden afstemmen',
 metaDescription:'Niet iedereen wil tegelijk naar huis? Stem één terugrit of aparte reisplannen af met je groep en Tourgo Partybussen voor vertrek vanuit Zuid-Holland.',
 h1:'Niet iedereen wil tegelijk terug: zo maak je een groepsafspraak',
 eyebrow:'GROEPSKEUZE · ZUID-HOLLAND',
 lead:'De ene deelnemer wil het hele feest meemaken, de ander wil eerder naar huis. Bespreek dat voordat je een gezamenlijke partybus aanvraagt. Met deze aanpak maakt een groep uit Zuid-Holland duidelijk wie met de terugrit meegaat en welke afspraken Tourgo Partybussen moet beoordelen. Een wens voor twee vertrekmomenten is nog geen bevestiging van twee ritten.',
 heroImage:{...partnerArticle.heroImage,src:'/images/partners/tourgo-partybussen/tourgo-partybussen-street.webp',filename:'tourgo-partybussen-street.webp',baseName:'tourgo-partybussen-street',width:1600,height:1200,alt:'Bestaande partnerfoto van een Tourgo-partybus op straat',title:'Tourgo Partybussen — bestaande partnerfoto'},
 heroPrimaryHref:quote,heroPrimaryLabel:'Bespreek jullie terugreis met Tourgo',
 sections:[
 {id:'voorkeuren',title:'Vraag naar voorkeuren voordat je een tijd vastzet',paragraphs:[
 'Laat iedere deelnemer aangeven of die de hele avond blijft, eerder wil vertrekken of daar nog niet over kan beslissen. Vraag naar het gewenste vertrekmoment vanaf de bestemming. Dat is iets anders dan de tijd waarop iemand thuis wil zijn. Je kunt geen aankomsttijd afspreken zonder eerst de route met de vervoerder te bespreken.',
 'Maak een klein overzicht met drie kolommen: deelnemer, voorkeur en deelname aan de gezamenlijke terugrit. Deel daarin geen privéredenen of gevoelige informatie. Een organisator hoeft te weten welke rit iemand aanvraagt, niet waarom een deelnemer eerder naar huis wil. Spreek een moment af waarop iedereen zijn keuze doorgeeft.'
 ]},
 {id:'een-rit',title:'Kies bewust voor één gezamenlijk vertrekmoment',paragraphs:[
 'Eén terugrit kan een duidelijke groepsafspraak opleveren, mits deelnemers weten welk moment zij daarmee kiezen. Bespreek de voorkeuren samen en neem de afgesproken tijd op in de aanvraag. Laat de vervoerder vervolgens bevestigen of die rit uitvoerbaar is. Een groepsstemming reserveert geen bus en bepaalt niet zelfstandig de dienstplanning.',
 'Voorbeeld: een deel van de groep wil na het hoofdprogramma weg, anderen willen langer blijven. Leg vóór de aanvraag vast wie zich aansluit bij de gezamenlijke rit. Wie apart teruggaat, regelt een eigen plan en controleert zelf de mogelijkheden. Beloof namens de groep geen trein, taxi of andere aansluiting die nog niet is bevestigd.'
 ]},
 {id:'twee-momenten',title:'Twee vertrekmomenten zijn twee concrete vervoersvragen',paragraphs:[
 'Willen jullie beide groepen met een partybus laten reizen? Geef per gewenst vertrekmoment het aantal reizigers, de vertrekplek en de eindadressen door. Vraag Tourgo om te beoordelen welke uitvoering mogelijk is. Ga er niet van uit dat dezelfde bus tussendoor terug kan rijden of op de bestemming blijft wachten.',
 'Vraag in het voorstel welke ritten zijn opgenomen, welk voertuig wordt aangeboden en wat de totaalprijs en voorwaarden zijn. Vergelijk een voorstel voor één terugrit met eventuele andere aangeboden oplossingen op dezelfde uitgangspunten. Dit artikel noemt geen vaste wachttijd, toeslag of beschikbaarheid; die worden voor jullie concrete aanvraag afgesproken.'
 ],moreLink:{label:'Welke factoren bepalen de partybusprijs?',href:'/gids/partybus-kosten/'}},
 {id:'aantallen',title:'Maak heen- en terugreis apart zichtbaar',paragraphs:[
 'Een groep kan gezamenlijk vertrekken vanuit Rotterdam, Den Haag, Leiden of een andere Zuid-Hollandse gemeente en toch verschillende terugreisplannen hebben. Noteer daarom niet alleen het totale aantal gasten. Geef afzonderlijk aan hoeveel mensen op de heenrit en op ieder aangevraagd terugmoment meereizen.',
 'Ook de gemeente Westland valt onder de bestaande Zuid-Holland-route van Tourgo Partybussen. Een vertrekplaats is geen bedrijfsvestiging. Gebruik voor de aanvraag de werkelijke adressen en laat de vervoerder de bereikbaarheid beoordelen. Voeg geen extra afzetadres toe aan de groepsapp alsof het al onderdeel van de boeking is.'
 ],moreLink:{label:'Opstapplaatsen in Zuid-Holland afstemmen',href:'/kennisbank/partybus-zuid-holland-meerdere-opstapplaatsen/'}},
 {id:'groepsbericht',title:'Deel daarna één duidelijk reisbericht',paragraphs:[
 'Stuur na de bevestiging een groepsbericht met de afgesproken verzamelplek, tijd, contactpersoon en de deelnemers die de terugrit gebruiken. Neem de aanwijzingen van de vervoerder over. Onderscheid verzameltijd van vertrektijd wanneer die apart zijn opgegeven. Een informele wens in een groepsapp verandert de bevestigde rit niet.',
 'Geef ook aan hoe iemand een wijziging meldt. De contactpersoon bundelt veranderingen en vraagt Tourgo om akkoord wanneer aantallen, tijden of adressen wijzigen. Pas het groepsbericht pas aan nadat duidelijk is wat de vervoerder heeft bevestigd. Zo voorkomen jullie dat verschillende versies van het reisplan naast elkaar blijven bestaan.'
 ]}
 ],
 checklist:{title:'Dit leg je vast voor de terugrit',lead:'Gebruik dit als gespreksoverzicht voor de groep en de aanvraag.',items:[
 'Wie neemt deel aan de gezamenlijke terugrit?',
 'Welk vertrekmoment vraagt de groep aan?',
 'Bij meerdere gewenste ritten: aantallen en adressen per moment.',
 'Welke reizigers regelen zelf een ander terugreisplan?',
 'Wie bundelt wijzigingen en stemt die met Tourgo af?',
 'Welke ritten, tijden, prijs en voorwaarden zijn daadwerkelijk bevestigd?'
 ]},
 faqs:[
 {question:'Kan een deel van onze groep eerder met dezelfde bus terug?',answer:'Vraag dat afzonderlijk aan. Tourgo beoordeelt de route en uitvoering. Een boeking voor één terugrit betekent niet dat er automatisch een extra rit of wachtende bus beschikbaar is.'},
 {question:'Moet ik het aantal terugreizigers apart doorgeven?',answer:'Ja, maak per aangevraagde rit duidelijk hoeveel mensen meereizen. Laat de vervoerder bevestigen hoe veranderingen in aantallen worden behandeld.'},
 {question:'Is een afgesproken tijd in de groepsapp voldoende?',answer:'Nee. Neem de wens op in de aanvraag en wacht op bevestiging van de vervoerder. Deel daarna de daadwerkelijk overeengekomen reisafspraak met de deelnemers.'}
 ],
 summary:{title:'Eerst de groepskeuze, daarna de ritbevestiging',paragraphs:['Maak verschillende voorkeuren zichtbaar voordat je vervoer aanvraagt. Eén gezamenlijk vertrekmoment vraagt om een duidelijke keuze; meerdere momenten vragen om afzonderlijk beoordeelde ritten. Deel vervolgens alleen de bevestigde afspraken met de groep.']},
 cta:{title:'Terugreis vanuit jullie uitje afstemmen?',lead:'Tourgo Partybussen is de aangesloten partner voor Zuid-Holland. Leg jullie aantallen, adressen en tijdwensen voor via PartybusNederland.nl.',primaryHref:quote,primaryLabel:'Vraag een voorstel aan Tourgo',whatsappHref:buildTourgoWhatsappHref('Zuid-Holland'),whatsappLabel:'WhatsApp Tourgo Partybussen'},
 relatedLinks:[{label:'Onze samenwerking met Tourgo',href:partnerArticle.path},{label:'Groepsgrootte na een offerte wijzigen',href:'/kennisbank/groepsgrootte-wijzigen-na-partybus-offerte/'},{label:'Weekendbagage vooraf afstemmen',href:'/kennisbank/weekend-partybus-zuid-holland-bagage-afstemmen/'}],
 cityLinks:[{label:'Vertrek vanuit Rotterdam',href:'/steden/partybus-huren-rotterdam/'},{label:'Vertrek vanuit Den Haag',href:'/steden/partybus-huren-den-haag/'},{label:'Tourgo in Zuid-Holland',href:'/provincies/zuid-holland/'}],
 trustNote:'Echte foto’s uit de bestaande Tourgo-partnerpresentatie; geen bewijs van een specifieke rit of beschikbaar voertuig. Tourgo bevestigt de uitvoering, tijden en voorwaarden voor jullie aanvraag.'
};
