import type { KennisbankArticle } from '../types';
import { samenwerkingStarTransferZeeland as partnerArticle } from './samenwerkingStarTransferZeeland';
import { buildStarTransferWhatsappHref } from '../../partners/starTransfer';

export const publication = {
  website:'https://www.partybusnederland.nl', originalScheduledAt:'2026-10-22T12:00:00+04:00',
  datePublished:'2026-10-22T12:03:00+04:00', partner:'StarTransfer',
  photoSource:'https://www.partybusnederland.nl/images/partners/startransfer/partybus-buiten.webp',
};
const path='/kennisbank/partybus-zeeland-ritwijziging-doorgeven/';
const quote='/gratis-partybus-offertes-aanvragen/?'+new URLSearchParams({partner:'startransfer',city:'Zeeland',source:path}).toString();
export const ritWijzigenZeeland:KennisbankArticle={
  ...partnerArticle,slug:'partybus-zeeland-ritwijziging-doorgeven',path,canonical:`https://www.partybusnederland.nl${path}`,
  seoTitle:'Partybusrit Zeeland wijzigen: wat geef je StarTransfer door?',
  metaDescription:'Andere tijden, bestemming of stops voor je partybus vanuit Zeeland? Geef StarTransfer één wijzigingsoverzicht en vraag om bevestiging via PartybusNederland.nl.',
  h1:'Je partybusrit vanuit Zeeland verandert: zo geef je wijzigingen duidelijk door',eyebrow:'RITAFSPRAKEN · ZEELAND',
  lead:'Het restaurant verschuift de reservering, de feestlocatie verandert of een deel van de groep wil ergens anders uitstappen. Bij een groepsrit kan één wijziging invloed hebben op andere afspraken. Met een overzicht van oud naar nieuw voorkom je dat verschillende versies rondgaan. Dit stappenplan helpt je een wijziging voor te leggen aan StarTransfer, onze aangesloten partner voor Zeeland. Alleen de vervoerder kan de aangepaste rit bevestigen.',
  heroPrimaryHref:quote,heroPrimaryLabel:'Bespreek de aangepaste ritplanning',
  sections:[
    {id:'bestaande-afspraak',title:'Begin bij de laatst bevestigde rit',paragraphs:[
      'Pak de laatste offerte of boekingsbevestiging erbij. Noteer de ritdatum, de naam waaronder de aanvraag loopt en een referentie als die is verstrekt. Maak duidelijk of je nog een voorstel bespreekt of een al bevestigde boeking wilt aanpassen. Een wijziging tijdens het vergelijken is een andere situatie dan een aanpassing vlak voor vertrek.',
      'Wijs binnen de groep één contactpersoon aan. Laat deelnemers hun wensen bij die persoon melden, zodat StarTransfer niet meerdere tegenstrijdige berichten over dezelfde rit ontvangt. Deel geen volledige deelnemerslijst als dat voor de wijziging niet nodig is; aantallen per ritdeel en één bereikbaar contact zijn meestal een duidelijker vertrekpunt voor de bespreking.',
    ]},
    {id:'oud-naar-nieuw',title:'Schrijf per onderdeel op wat er verandert',paragraphs:[
      'Gebruik een eenvoudig overzicht met drie regels per wijziging: de bestaande afspraak, het nieuwe verzoek en wat gelijk blijft. Schrijf volledige datums en adressen uit. “Een uurtje later” is onduidelijk als niet vaststaat of je de heenrit, de terugrit of beide bedoelt.',
      'Een voorbeeld voor je eigen bericht: “Heenrit blijft volgens de bevestiging. Verzoek: terugrit op [datum] om [gewenste tijd] in plaats van [oude tijd]. Nieuw ophaaladres: [volledig adres]. Aantal reizigers terug: [aantal].” Dit is een invulvoorbeeld, geen bestaande klantboeking en geen toezegging dat de nieuwe tijd mogelijk is.',
    ]},
    {id:'gevolgen',title:'Controleer ook de gevolgen voor andere ritdelen',paragraphs:[
      'Een andere eindtijd kan ook het ophaalmoment, een hotelstop of het uitstappen van een deel van de groep raken. Geef daarom niet alleen de losse wijziging door, maar controleer de volledige heen- en terugrit. Vraag deelnemers die eerder vertrekken of later aansluiten op welk ritdeel zij daadwerkelijk meegaan.',
      'Vertrekken jullie vanuit Goes, Middelburg, Terneuzen of een andere Zeeuwse gemeente? Houd de oorspronkelijke vertrekplaats in het overzicht en benoem een nieuw adres afzonderlijk. Laat StarTransfer beoordelen of de gewijzigde combinatie van adressen en tijden uitvoerbaar is. Een kaartafstand of een eerdere rit bewijst niet dat dezelfde planning past.',
    ],moreLink:{label:'Bekijk de bestaande vertrekpagina’s in Zeeland',href:'/provincies/zeeland/'}},
    {id:'nieuwe-bevestiging',title:'Vraag expliciet om een aangepast voorstel of akkoord',paragraphs:[
      'Vraag of het verzoek gevolgen heeft voor voertuig, ritduur, totaalprijs of voorwaarden. Ga niet uit van een vaste wijzigingstoeslag of van kosteloos aanpassen: de afspraken van de vervoerder en de concrete verandering zijn bepalend. Als het nieuwe plan niet uitvoerbaar is, vraag welke alternatieven bespreekbaar zijn.',
      'Een verstuurd verzoek is nog geen akkoord. Laat de nieuwe datum, tijden, adressen en aantallen terugkomen in een aangepaste bevestiging. Controleer welke eerdere afspraken daardoor vervallen en welke blijven gelden. Zeg een bestaande afspraak niet eenzijdig op omdat de groep het nieuwe plan al prettiger vindt.',
    ],moreLink:{label:'Lees over de factoren achter de partybusprijs',href:'/gids/partybus-kosten/'}},
    {id:'groep-informeren',title:'Deel pas daarna één definitieve versie met de groep',paragraphs:[
      'Stuur de bevestigde planning in één bericht naar alle deelnemers. Neem de verzamelplek, afgesproken vertrektijd en het contact voor vragen op. Geef aan welke oude versie vervalt. Vraag deelnemers de laatste versie te bewaren, zodat een doorgestuurd oud bericht niet opnieuw leidend wordt.',
      'Komt er later nog een verandering bij, begin dan opnieuw bij de laatst bevestigde versie. Kort voor vertrek kan een bericht onbeantwoord blijven; gebruik bij tijdsdruk de contactgegevens in de boekingsbevestiging en vraag hoe de vervoerder lastminutevragen wil ontvangen. Dit artikel belooft geen bereikbaarheid of mogelijkheid om onderweg de route aan te passen.',
    ]},
    {id:'partnerroute',title:'Gebruik de bestaande StarTransfer-aanvraagroute',paragraphs:[
      'StarTransfer is binnen PartybusNederland.nl de partner voor Zeeland en is gevestigd in Schiedam. Een vertrekadres in Zeeland betekent geen lokale vestiging. Het bestaande formulier kan een eerste ritvoorstel helpen voorbereiden; vermeld bij een lopende aanvraag duidelijk de referentie en stuur geen tweede losse aanvraag zonder uit te leggen dat het dezelfde rit betreft.',
      'De WhatsApp-knop opent het bestaande vragenvenster. WhatsApp-aanvragen voor StarTransfer lopen voorlopig via Partybus Nederland en worden handmatig met StarTransfer afgestemd. Vermeld daarom de herkomst PartybusNederland.nl en dat het om een wijzigingsverzoek gaat. Gebruik bij een bevestigde boeking vooral het afgesproken contactkanaal van de vervoerder en wacht op akkoord voordat je de nieuwe rit als definitief beschouwt.',
    ],moreLink:{label:'Lees hoe de samenwerking met StarTransfer werkt',href:partnerArticle.path}},
  ],
  checklist:{title:'Dit hoort in je wijzigingsoverzicht',lead:'Gebruik de laatste bevestiging als uitgangspunt.',items:['Naam en bestaande ritreferentie, indien verstrekt.','Oorspronkelijke ritdatum en huidige bevestigde versie.','Oud en nieuw verzoek per tijd, adres en ritdeel.','Aantal reizigers per aangepast ritdeel en eventuele gewijzigde bagage.','Vraag naar gevolgen voor voertuig, totaalprijs en voorwaarden.','Nieuw akkoord van de vervoerder vóór communicatie als definitieve planning.']},
  faqs:[
    {question:'Is een WhatsApp-bericht voldoende om de rit te wijzigen?',answer:'Een bericht is een verzoek. Vraag StarTransfer om bevestiging van de nieuwe afspraken. De tijdelijke WhatsApp-route via Partybus Nederland geeft op zichzelf geen akkoord van de vervoerder.'},
    {question:'Blijft de prijs hetzelfde als alleen de terugrit later wordt?',answer:'Dat kun je niet vooraf aannemen. Vraag de vervoerder of de nieuwe tijd gevolgen heeft voor uitvoering, ritduur, totaalprijs of voorwaarden en laat dat bevestigen.'},
    {question:'Moet ik voor een wijziging opnieuw het offerteformulier invullen?',answer:'Gebruik bij een lopende of bevestigde rit het afgesproken contactkanaal en vermeld de bestaande referentie. Voorkom een tweede losse aanvraag voor dezelfde rit zonder de samenhang uit te leggen.'},
  ],
  summary:{title:'Eén wijzigingsoverzicht, één nieuwe bevestiging',paragraphs:['Maak zichtbaar wat verandert en wat gelijk blijft. Laat StarTransfer de gevolgen beoordelen, controleer het nieuwe akkoord en deel daarna de laatste versie met je groep. Zo blijft duidelijk welke ritafspraken werkelijk zijn bevestigd.']},
  cta:{title:'Een groepsrit vanuit Zeeland bespreken?',lead:'Leg je ritplan of vragen voor via de bestaande StarTransfer-route van PartybusNederland.nl.',primaryHref:quote,primaryLabel:'Bespreek je ritplan',whatsappHref:buildStarTransferWhatsappHref('Zeeland'),whatsappLabel:'WhatsApp-aanvraag via Partybus Nederland'},
  relatedLinks:[{label:'Onze samenwerking met StarTransfer',href:partnerArticle.path},{label:'Groepsgrootte wijzigen na een offerte',href:'/kennisbank/groepsgrootte-wijzigen-na-partybus-offerte/'},{label:'Een volledige partybusaanvraag voorbereiden',href:'/kennisbank/partybus-huren-complete-gids/'}],
  cityLinks:[{label:'Vertrek vanuit Goes',href:'/steden/partybus-huren-goes/'},{label:'Vertrek vanuit Middelburg',href:'/steden/partybus-huren-middelburg-z/'},{label:'Vertrek vanuit Terneuzen',href:'/steden/partybus-huren-terneuzen/'}],
  trustNote:'Echte foto uit de bestaande StarTransfer-partnerpresentatie; geen bewijs van een specifieke rit of beschikbaar voertuig. StarTransfer bevestigt de uitvoering en wijzigingen. WhatsApp loopt tijdelijk via Partybus Nederland met handmatige afstemming.',
};
