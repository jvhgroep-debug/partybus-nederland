import type { KennisbankArticle } from '../types';
import { samenwerkingTourgoZuidHolland as partnerArticle } from './samenwerkingTourgoZuidHolland';
import { buildTourgoWhatsappHref } from '../../partners/tourgoPartybussen';

export const publication = {
  website: 'https://www.partybusnederland.nl',
  originalScheduledAt: '2026-10-20T12:00:00+04:00',
  datePublished: '2026-10-20T12:01:13+04:00',
  partner: 'Tourgo Partybussen',
  photoSource: 'https://www.partybusnederland.nl/images/partners/tourgo-partybussen/tourgo-partybussen-xl.webp',
  secondaryPhotoSource: 'https://www.partybusnederland.nl/images/partners/tourgo-partybussen/tourgo-partybussen-street.webp',
};
const path = '/kennisbank/weekend-partybus-zuid-holland-bagage-afstemmen/';
const quote = '/gratis-partybus-offertes-aanvragen/?' + new URLSearchParams({partner:'tourgo',city:'Zuid-Holland',source:path}).toString();

export const weekendBagageZuidHolland: KennisbankArticle = {
  ...partnerArticle,
  slug:'weekend-partybus-zuid-holland-bagage-afstemmen', path,
  canonical:`https://www.partybusnederland.nl${path}`,
  seoTitle:'Weekendrit Zuid-Holland: bagage in een partybus afstemmen',
  metaDescription:'Weekend weg met een partybus vanuit Zuid-Holland? Maak een bagagelijst en bespreek tassen, spullen en terugrit met Tourgo Partybussen via PartybusNederland.nl.',
  h1:'Weekend weg met een partybus: stem bagage vooraf af',
  eyebrow:'WEEKENDRIT PLANNEN · ZUID-HOLLAND',
  lead:'Een avond uit vraagt om andere spullen dan een weekend met overnachting. Geef daarom niet alleen het aantal reizigers door, maar ook welke tassen en extra voorwerpen meegaan. Dit overzicht helpt groepen uit Zuid-Holland om hun aanvraag bij onze aangesloten partner Tourgo Partybussen concreet te maken. De vervoerder beoordeelt welk voertuig en welke uitvoering passend zijn.',
  heroImage:{...partnerArticle.heroImage,src:'/images/partners/tourgo-partybussen/tourgo-partybussen-xl.webp',filename:'tourgo-partybussen-xl.webp',baseName:'tourgo-partybussen-xl',alt:'Bestaande Tourgo-partnerfoto van een zwarte gelede partybus buiten',title:'Tourgo Partybussen — bestaande partnerfoto',width:1600,height:780},
  ctaImage:{...partnerArticle.ctaImage,alt:'Bestaande foto van het interieur van een Tourgo-partybus met stoelen en verlichting',width:1600,height:2133},
  heroPrimaryHref:quote,heroPrimaryLabel:'Bespreek jullie weekendrit met Tourgo',
  sections:[
    {id:'aantal-tassen',title:'Tel tassen naast deelnemers',paragraphs:[
      'Maak vóór de aanvraag één lijst voor de hele groep: het aantal reizigers, het aantal weekendtassen of koffers en spullen die daar niet in passen. Vraag niet alleen of iedereen een tas meeneemt, maar ook hoe groot die ongeveer is. Een kleine rugzak en een harde koffer stellen een andere vraag aan de uitvoering.',
      'Noteer bijvoorbeeld hoeveel mensen één weekendtas meenemen en wie daarnaast een apart voorwerp heeft. Dit is een inventaris voor de aanvraag, geen algemene bagagelimiet. Tourgo bevestigt wat er in het daadwerkelijk aangeboden voertuig mee kan. Het aantal plaatsen in een bus is op zichzelf geen afspraak over bagageruimte.',
    ]},
    {id:'bijzondere-spullen',title:'Beschrijf extra spullen voordat de offerte wordt gemaakt',paragraphs:[
      'Gaan er kampeerspullen, sportmaterialen, cadeaus of decoratie voor het uitje mee? Benoem die apart en vermeld zo nodig de afmetingen. Stuur via de bestaande aanvraagroute een duidelijke omschrijving; vraag eerst of een foto van een groot voorwerp nuttig is. Een vervoerder kan een vaag verzoek als “wat extra spullen” moeilijk beoordelen.',
      'Bespreek ook wat er tijdens het weekend met de bagage moet gebeuren. Een rit naar een verblijf betekent niet dat de bus ter plaatse blijft of als opslag beschikbaar is. Stem met de accommodatie af wanneer spullen naar binnen kunnen en laat Tourgo bevestigen welke momenten onderdeel van het vervoer zijn.',
    ]},
    {id:'opstappen',title:'Maak het laden onderdeel van de vertrekafspraak',paragraphs:[
      'Vertrekt de groep uit Rotterdam, Den Haag, Leiden of een andere Zuid-Hollandse gemeente? Geef het volledige opstapadres door en vermeld waar de deelnemers met hun tassen verzamelen. Laat de vervoerder beoordelen of de voorgestelde plek bruikbaar is voor het gekozen voertuig en hoeveel tijd nodig is.',
      'Spreek één contactpersoon af die controleert of iedereen en alle afgesproken spullen aanwezig zijn. Deel de door de vervoerder bevestigde verzamel- en vertrektijd met de groep. Kies niet alvast een extra laadstop zonder die in de aanvraag op te nemen.',
    ],moreLink:{label:'Meerdere opstapplaatsen in Zuid-Holland plannen',href:'/kennisbank/partybus-zuid-holland-meerdere-opstapplaatsen/'}},
    {id:'terugrit',title:'Controleer de bagagelijst opnieuw voor de terugrit',paragraphs:[
      'Bij een weekendtrip liggen heenrit en terugrit vaak op verschillende dagen. Geef beide datums en gewenste tijden afzonderlijk door. Vraag het verblijf wanneer de groep met tassen klaar moet staan en bespreek een passend ophaalmoment. Een eerdere heenrit is geen automatische bevestiging van de terugrit.',
      'Wijzigt het aantal reizigers of gaan er op de terugweg andere spullen mee? Meld dat vóór de definitieve bevestiging of, bij een latere wijziging, zo snel mogelijk aan Tourgo. Vraag opnieuw om akkoord als de uitgangspunten veranderen. Neem niet aan dat een andere bus dezelfde indeling of ruimte heeft.',
    ]},
    {id:'bagageafspraken',title:'Vraag om concrete afspraken voor het aangeboden voertuig',paragraphs:[
      'Vraag waar de afgesproken bagage wordt geplaatst, welke spullen toegestaan zijn en of er beperkingen gelden voor aantallen, afmetingen of verpakking. Laat de vervoerder de praktische aanwijzingen geven. Leg geen eigen laadoplossing vast op basis van een foto van een bus op de website.',
      'Vraag daarnaast welke afspraken gelden bij achtergebleven of beschadigde spullen en waar je een wijziging meldt. Bespreek eventuele gevolgen voor voertuigkeuze, ritduur en prijs in het voorstel. Dit artikel noemt bewust geen vaste toeslagen of capaciteit: alleen de aanbieder kan dat voor jullie rit bevestigen.',
    ]},
    {id:'aanvraag',title:'Stuur Tourgo één compleet weekendoverzicht',paragraphs:[
      'Tourgo Partybussen is de aangesloten partner van PartybusNederland.nl voor Zuid-Holland. Ook een vertrek uit de gemeente Westland valt binnen die provinciale aanvraagroute. Een vertrekplaats in het werkgebied is geen afzonderlijke vestiging van het bedrijf.',
      'Combineer de reizigers- en bagagelijst met de vertrekadressen, bestemming en heen- en terugreis. Gebruik het bestaande formulier of de WhatsApp-knop met vragenvenster en vermeld dat de aanvraag via PartybusNederland.nl komt. Wacht op bevestiging van voertuig, bagageafspraken, tijden en totaalprijs voordat je de rit als geboekt met de groep deelt.',
    ],moreLink:{label:'Tourgo en het werkgebied Zuid-Holland',href:'/provincies/zuid-holland/'}},
  ],
  checklist:{title:'Bagagechecklist voor jullie aanvraag',lead:'Stuur één overzicht voor heen- én terugrit. Dit is geen toegestane bagagelimiet.',items:[
    'Aantal deelnemers per rit en één contactpersoon.',
    'Aantal tassen of koffers, plus een omschrijving van de omvang.',
    'Extra voorwerpen met afmetingen wanneer die relevant zijn.',
    'Volledige opstap- en bestemmingsadressen, heen- en terugreisdatum en tijdwensen.',
    'Afspraken met het verblijf over aankomst, vertrek en het neerzetten van spullen.',
    'Schriftelijk bevestigde voertuigkeuze, bagageafspraken en eventuele kosten.',
  ]},
  faqs:[
    {question:'Mag iedereen een koffer meenemen in de partybus?',answer:'Dat is niet automatisch inbegrepen. Geef aantallen en omvang vooraf door. Tourgo Partybussen beoordeelt wat in het aangeboden voertuig mee kan en bevestigt de afspraken voor jullie rit.'},
    {question:'Kan de bagage tijdens het weekend in de bus blijven?',answer:'Ga daar niet van uit. Vraag of de bus alleen transfers verzorgt of ook tussentijds beschikbaar is. Bespreek opslag met het verblijf en leg eventuele andere afspraken afzonderlijk vast.'},
    {question:'Wat als de groep na de offerte meer spullen wil meenemen?',answer:'Meld de gewijzigde bagagelijst aan de vervoerder en vraag opnieuw om bevestiging. Een wijziging kan gevolgen hebben voor de uitvoering en de prijs; alleen Tourgo kan die voor jullie aanvraag beoordelen.'},
  ],
  summary:{title:'Maak de bagage net zo concreet als de gastenlijst',paragraphs:['Voor een weekendrit heb je meer nodig dan alleen een personenaantal. Een complete lijst met tassen, extra voorwerpen en ritmomenten geeft Tourgo de informatie om het vervoer te beoordelen. Deel daarna de bevestigde afspraken met alle deelnemers.']},
  cta:{title:'Weekendrit vanuit Zuid-Holland bespreken?',lead:'Leg jullie reizigers- en bagagelijst voor aan Tourgo Partybussen via PartybusNederland.nl.',primaryHref:quote,primaryLabel:'Vraag een voorstel voor jullie weekendrit',whatsappHref:buildTourgoWhatsappHref('Zuid-Holland'),whatsappLabel:'WhatsApp Tourgo Partybussen'},
  relatedLinks:[{label:'Onze samenwerking met Tourgo Partybussen',href:partnerArticle.path},{label:'Welke factoren bepalen de partybusprijs?',href:'/gids/partybus-kosten/'},{label:'Een partybusaanvraag voorbereiden',href:'/kennisbank/partybus-huren-complete-gids/'}],
  cityLinks:[{label:'Vertrek vanuit Rotterdam',href:'/steden/partybus-huren-rotterdam/'},{label:'Vertrek vanuit Den Haag',href:'/steden/partybus-huren-den-haag/'},{label:'Vertrek vanuit Leiden',href:'/steden/partybus-huren-leiden/'}],
  trustNote:'Echte foto’s uit de bestaande Tourgo-partnerpresentatie; geen bewijs van een specifieke weekendrit, bagageruimte of voertuigbeschikbaarheid. Tourgo bevestigt welk voertuig wordt aangeboden en welke bagageafspraken gelden.',
};
