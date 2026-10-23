import type { CityPageData } from './types';

// Local departure intent checked against this site's query/page report, 14 Sep–11 Oct 2026.
const cities: Record<string, { partner: string; intro: string; planning: string; pickup: string[]; question: string; answer: string }> = {
  oss: {
    partner: 'Prestige Coach Service',
    intro: 'Een partybus of feestbus huren in Oss begint met de vraag waar jullie groep vertrekt. Deze pagina is voor vertrek uit de gemeente Oss, bijvoorbeeld uit de stad Oss, Berghem, Ravenstein of een andere kern. Prestige Coach Service behandelt de aanvraag voor Noord-Brabant; het bedrijf is gevestigd in Baarle-Nassau.',
    planning: 'Een bedrijfsuitje vanaf een eigen bedrijfsadres vraagt om een andere route dan een feest met deelnemers uit Oss en Berghem. Vermeld ieder opstapadres afzonderlijk en spreek af waar de terugrit eindigt. Vertrekt de groep uit Uden of Schaijk, kies dan de pagina voor Maashorst zodat de vertrekregio duidelijk blijft.',
    pickup: ['Station Oss: geef een exact adres en de gewenste kant van het station door.', 'Berghem: vermeld of de bus hier begint of een extra groep ophaalt.', 'Ravenstein of een andere kern in de gemeente Oss: noteer iedere stop met tijdstip.'],
    question: 'Kan de feestbus ook vertrekken uit Berghem of Ravenstein?',
    answer: 'Je kunt een vertrek uit Berghem, Ravenstein of een andere kern in de gemeente Oss aanvragen bij Prestige Coach Service. Vermeld de adressen, het aantal instappers per stop en de gewenste vertrektijden. De vervoerder bevestigt bereikbaarheid, route en beschikbaarheid; meerdere stops zijn niet automatisch inbegrepen.',
  },
  tilburg: {
    partner: 'Prestige Coach Service',
    intro: 'Een feestbus of partybus huren in Tilburg voor een concert, festival of verjaardag? Bespreek de rit met Prestige Coach Service, onze partner voor Noord-Brabant. Deze pagina gaat over de hele rit vanuit Tilburg; de gekozen bus en de voorzieningen worden voor jullie groep bevestigd.',
    planning: 'De Spoorzone, een eigen adres in Reeshof en een vertrek uit Berkel-Enschot of Udenhout liggen op verschillende routes. Kies één verzamelpunt of geef de extra stops door. Voor een evenement bij Hilvarenbeek zijn ook de bezoekdag, het toegestane afzetpunt en de ophaaltijd na afloop nodig; vervoer betekent geen toegangsticket.',
    pickup: ['Tilburg Centraal of Spoorzone: spreek een bereikbaar adres af buiten de drukste looproute.', 'Reeshof: geef een eigen verzameladres en het aantal deelnemers door.', 'Berkel-Enschot of Udenhout: vermeld een aanvullende stop apart in de aanvraag.'],
    question: 'Hoe vraag ik festivalvervoer vanuit Tilburg met een terugrit aan?',
    answer: 'Vermeld bij Prestige Coach Service het festival, de bezoekdag, het vertrekadres in Tilburg en de gewenste aankomst- en ophaaltijd. Vraag waar de bus bij het terrein kan stoppen en hoe jullie contact houden na afloop. Laat heenrit, terugrit en eventuele wachttijd afzonderlijk in het voorstel bevestigen.',
  },
  amsterdam: {
    partner: 'Party Bussen Westland',
    intro: 'Een partybus, feestbus of discobus huren in Amsterdam voor een vrijgezellenfeest, concert of bedrijfsuitje? Party Bussen Westland is de partner voor deze stad. De naam van het bedrijf verwijst naar Westland, maar jullie aanvraag op deze pagina gaat over vertrek uit Amsterdam.',
    planning: 'Vertrek uit Centrum, Sloterdijk, Zuid of Zuidoost vraagt telkens om een concreet verzameladres. Een grote bus kan niet vanzelfsprekend door iedere smalle straat of voor elke deur stoppen. Deel daarom het adres en een alternatief met de vervoerder. Bij een evenement rond de ArenA leg je ook de plek en tijd van ophalen vast.',
    pickup: ['Sloterdijk: geef een concreet adres bij het gekozen verzamelpunt.', 'Zuid of Amstel: bespreek bereikbaarheid bij een hotel, bedrijf of ander vertrekadres.', 'Zuidoost of de ArenA-omgeving: vraag naar de afgesproken stopplek en de terugrit.', 'Centrum: laat vooraf bevestigen of het adres bereikbaar is voor de aangeboden bus.'],
    question: 'Kan een partybus ons ophalen in het centrum van Amsterdam?',
    answer: 'Vraag Party Bussen Westland vooraf of jullie adres in Amsterdam bereikbaar is met de aangeboden bus. Geef ook een alternatief verzamelpunt door. De chauffeur kan niet op iedere plek stoppen; de vervoerder bevestigt de exacte locatie. Stem daarnaast af waar de groep na afloop weer wordt opgehaald.',
  },
  utrecht: {
    partner: 'Party Bussen Westland',
    intro: 'Een partybus of feestbus huren in de stad Utrecht voor een festival, bedrijfsfeest of verjaardag regel je met Party Bussen Westland. Deze pagina richt zich op vertrek uit de stad Utrecht. Een vertrek uit Doorn, Leersum of Driebergen-Rijsenburg hoort bij de gemeente Utrechtse Heuvelrug.',
    planning: 'Bij Utrecht Centraal maakt het uit aan welke zijde de groep verzamelt. Een vertrek bij de Jaarbeurs, in Leidsche Rijn of bij een eigen bedrijf vraagt om een volledig adres. Laat de vervoerder de bereikbaarheid bevestigen en spreek af of de terugrit naar dezelfde plek gaat of meerdere eindstops heeft.',
    pickup: ['Utrecht Centraal: vermeld de zijde en een volledig verzameladres.', 'Jaarbeurs-omgeving: spreek af waar de bus mag stoppen en waar iedereen wacht.', 'Leidsche Rijn of een andere wijk: geef een bereikbaar eigen vertrekadres door.'],
    question: 'Is deze pagina voor Utrecht stad of Utrechtse Heuvelrug?',
    answer: 'Deze pagina gaat over vertrek uit de stad Utrecht. Voor een opstap in Doorn, Driebergen-Rijsenburg of Leersum is de pagina voor Utrechtse Heuvelrug bedoeld. Beide gebieden worden door Party Bussen Westland bediend, maar de adressen, route en reistijd verschillen. Vermeld altijd het volledige vertrekadres.',
  },
  westland: {
    partner: 'Tourgo Partybussen',
    intro: 'Een feestbus, discobus of borrelbus huren in de gemeente Westland? De aanvraag op deze pagina gaat naar Tourgo Partybussen, onze partner voor Zuid-Holland. Vermeld de kern waar de groep vertrekt, bijvoorbeeld Naaldwijk, Wateringen, Monster of De Lier.',
    planning: 'Groepen uit verschillende Westlandse kernen kunnen één verzamelpunt kiezen of meerdere stops aanvragen. Noteer het aantal instappers per adres en de gewenste tijd van terugkomst. Een borrelbus is geen toezegging dat drank inbegrepen is: bespreek muziek, consumpties en huisregels voor de aangeboden bus.',
    pickup: ['Naaldwijk of De Lier: geef een volledig vertrekadres bij bedrijf, woning of verzamelplek.', 'Wateringen: vermeld of dit het beginpunt of een extra stop is.', 'Monster of een andere kern: stem adres en terugkomst afzonderlijk af.'],
    question: 'Welke partner behandelt mijn aanvraag vanuit de gemeente Westland?',
    answer: 'Een aanvraag vanuit de gemeente Westland op PartybusNederland.nl gaat naar Tourgo Partybussen, de partner voor Zuid-Holland. Party Bussen Westland is een andere partner en bedient op onze site Utrecht en Amsterdam. Geef de Westlandse kern en het volledige opstapadres door, zodat vertrek en bestemming niet worden verwisseld.',
  },
  leiden: {
    partner: 'Tourgo Partybussen',
    intro: 'Een partybus of feestbus huren in Leiden voor een groepsfeest, festival of bedrijfsuitje? Tourgo Partybussen is de partner voor deze vertrekplaats in Zuid-Holland. Geef het vertrekadres in Leiden en de bestemming door; Leiden is de opstapplaats, niet automatisch het eindpunt van de rit.',
    planning: 'Een groep bij Leiden Centraal, in het centrum of bij een eigen bedrijfsadres heeft een concreet verzamelpunt nodig. Smalle straten en drukte kunnen invloed hebben op de bereikbaarheid. Vraag naar een geschikte stopplek en bepaal vooraf waar de groep na het feest weer instapt.',
    pickup: ['Leiden Centraal: benoem de gekozen zijde en het volledige verzameladres.', 'Centrum van Leiden: laat de bereikbaarheid van het adres vooraf bevestigen.', 'Bedrijf, hotel of eigen adres in Leiden: noteer gewenste tijd en groepsgrootte.'],
    question: 'Kan ik een feestbus vanuit Leiden naar een festival aanvragen?',
    answer: 'Ja, je kunt een rit met vertrek uit Leiden aanvragen bij Tourgo Partybussen. Geef festivalnaam, bezoekdag, aantal deelnemers en beide reistijden door. Vraag naar het afzetpunt en de ophaallocatie bij het terrein. Beschikbaarheid en route worden door de vervoerder bevestigd; een festivalticket hoort niet bij deze vervoersaanvraag.',
  },
  rotterdam: {
    partner: 'Tourgo Partybussen',
    intro: 'Een partybus, feestbus of discobus huren in Rotterdam voor een concert, vrijgezellenfeest of bedrijfsuitje? Tourgo Partybussen behandelt de aanvraag vanuit Rotterdam. Kies het vertrekadres en bespreek welke bus past bij jullie groepsgrootte en wensen voor muziek en verlichting.',
    planning: 'Een vertrek bij Rotterdam Centraal, vanaf de Kop van Zuid of rond Ahoy vraagt om verschillende ritafspraken. Vermeld elke stop en plan voldoende tijd tussen instappen en aankomst. Bij een concert leg je vooraf de ophaalplek en het contact na afloop vast. De genoemde gebieden zijn geen gereserveerde bushaltes.',
    pickup: ['Rotterdam Centraal: geef een bereikbaar adres en de gekozen zijde door.', 'Kop van Zuid: bespreek een concrete stopplek bij bedrijf, hotel of verzameladres.', 'Ahoy-omgeving: stem de afzetplek, ophaaltijd en contactpersoon vooraf af.'],
    question: 'Hoe regel ik een partybus voor een concert bij Ahoy?',
    answer: 'Deel met Tourgo Partybussen het concert, de datum, het vertrekadres in Rotterdam en de gewenste aankomsttijd. Spreek de ophaallocatie en tijd na afloop af en kies één contactpersoon voor de groep. Laat bevestigen of de bus tussendoor wacht of later terugkomt en welke wachttijd in de prijs zit.',
  },
  'den-haag': {
    partner: 'Tourgo Partybussen',
    intro: 'Een partybus of feestbus huren in Den Haag voor een verjaardag, bedrijfsuitje of festival? Tourgo Partybussen is onze partner voor Zuid-Holland. Vraag een rit aan met vertrek uit de Haagse wijk waar jullie groep verzamelt; deze pagina gaat ook over aanvragen vanuit Scheveningen.',
    planning: 'Een vertrek bij Den Haag Centraal, Hollands Spoor of in Scheveningen begint met een volledig adres. Op drukke dagen kan een alternatief verzamelpunt nodig zijn. Bespreek vooraf of iedereen op dezelfde plek terugkomt en of de terugrit onderweg nog een afzonderlijke stop maakt.',
    pickup: ['Den Haag Centraal: vermeld het exacte verzameladres en de gewenste tijd.', 'Hollands Spoor of een andere wijk: kies een bereikbaar adres voor de hele groep.', 'Scheveningen: spreek ook een alternatief af bij drukte en leg de terugrit vast.'],
    question: 'Kan de feestbus vertrekken uit Scheveningen en terug naar Den Haag?',
    answer: 'Vraag Tourgo Partybussen om een rit met het volledige opstapadres in Scheveningen en het gewenste terugkeeradres in Den Haag. Vermeld datum, personen, bestemming en beide tijden. Laat de vervoerder bevestigen waar de bus kan stoppen en of eventuele extra stops in het voorstel zijn opgenomen.',
  },
};

// Targeted search presentation; keep the existing departure URLs and partner routes.
const searchPresentation: Record<string, { title: string; description: string; subtitle: string; question: string; answer: string }> = {
  oss: {
    title: 'Partybus & feestbus huren Oss | Vraag een offerte aan',
    description: 'Feestbus huren vanuit Oss, Berghem of Ravenstein? Bespreek jullie route en terugrit met Prestige Coach Service. Vraag prijs voor jouw datum en groep aan.',
    subtitle: 'Met je groep vanuit Oss, Berghem of Ravenstein op pad? Vraag Prestige Coach Service om een voorstel voor jullie datum, opstapadressen en terugrit.',
    question: 'Wat geef ik door als onze groep in Oss én Berghem wil instappen?',
    answer: 'Maak één aanvraag met beide volledige adressen, het aantal instappers per adres en de gewenste aankomsttijd op de bestemming. Vraag Prestige Coach Service om de volgorde en de kosten van beide stops te bevestigen. Benoem apart of de terugrit ook langs beide adressen moet gaan.',
  },
  leiden: {
    title: 'Partybus huren Leiden | Feestbus met heen- en terugrit',
    description: 'Partybus of feestbus vanuit Leiden nodig? Bespreek opstappen bij Centraal, Lammenschans of een eigen adres. Vraag Tourgo om een offerte met terugrit.',
    subtitle: 'Samen vanuit Leiden naar een feest of festival? Vraag Tourgo om prijs en beschikbaarheid voor jullie vertrekadres, groepsgrootte en heen- en terugrit.',
    question: 'Wat is handiger: opstappen bij Leiden Centraal, Lammenschans of ons eigen adres?',
    answer: 'Kies op basis van waar deelnemers vandaan komen en hoe zij na de terugrit naar huis gaan. Geef Tourgo het volledige gewenste adres en eventueel een alternatief. Een station is een verzamelgebied, geen gereserveerde bushalte. Tourgo bevestigt welke plek met de aangeboden bus bereikbaar is.',
  },
  amsterdam: {
    title: 'Partybus huren Amsterdam | Vraag een ritofferte aan',
    description: 'Partybus of discobus vanuit Amsterdam? Bespreek opstappen bij hotel, Sloterdijk of Zuidoost en jullie terugrit. Vraag Party Bussen Westland een offerte.',
    subtitle: 'Een feestbus of discobus vanuit Amsterdam voor jullie groep? Bespreek opstappen bij hotel, station of een eigen adres en vraag een offerte met terugrit aan.',
    question: 'Hoe vergelijk ik offertes voor een partybus vanuit Amsterdam?',
    answer: 'Gebruik bij elk voorstel dezelfde datum, adressen, groepsgrootte en heen- en terugtijden. Laat buscapaciteit, muziek, consumpties, wachttijd en eventuele extra stops apart bevestigen. Vraag bij vertrek uit het centrum welk bereikbaar opstapadres in de prijs is meegenomen. Vergelijk de totaalprijs voor de hele rit.',
  },
  'den-haag': {
    title: 'Partybus huren Den Haag | Feestbus vanuit Scheveningen',
    description: 'Feestbus huren vanuit Den Haag of Scheveningen? Bespreek opstapadres, groep en terugreis met Tourgo Partybussen. Vraag een offerte voor jullie rit aan.',
    subtitle: 'Vertrek met je groep uit Den Haag of Scheveningen. Vraag Tourgo om een voorstel met jullie opstapadres, bestemming en afgesproken terugkeeradres.',
    question: 'Kunnen we heen vertrekken uit Scheveningen en terugkomen bij Hollands Spoor?',
    answer: 'Je kunt verschillende adressen voor vertrek en terugkomst aanvragen. Geef Tourgo het volledige adres in Scheveningen en het gewenste eindadres bij Hollands Spoor, samen met datum, personen en tijden. Laat de stopplekken, uitvoerbaarheid en totaalprijs bevestigen voordat je de boeking rondmaakt.',
  },
};

export function applyFocusedCitySeo(city: CityPageData): CityPageData {
  const local = cities[city.slug];
  if (!local) return city;
  const costQuestion = `Wat kost een partybus of feestbus huren in ${city.name}?`;
  const groupQuestion = `Kan ik een partybus vanuit ${city.name} aanvragen voor 20, 30 of 40 personen?`;
  const presentation = searchPresentation[city.slug];
  const added = [
    { question: costQuestion, answer: `Er is geen vast tarief voor iedere rit vanuit ${city.name}. ${local.partner} maakt een voorstel op basis van datum, route, aantal deelnemers, ritduur, stops en terugreis. Vraag om een totaalprijs en laat vastleggen of wachttijd, consumpties en eventuele extra stops inbegrepen zijn. Je boekt pas na afspraken met de vervoerder.` },
    { question: groupQuestion, answer: `Geef je werkelijke groepsgrootte door aan ${local.partner}, bijvoorbeeld 20, 30 of 40 personen. Vraag welke bus beschikbaar is en hoeveel toegestane plaatsen die heeft. Een kleinere groep krijgt niet automatisch een lager tarief: voertuig, route en ritduur spelen ook mee. Capaciteit en beschikbaarheid worden per aanvraag bevestigd.` },
    { question: local.question, answer: local.answer },
    ...(presentation ? [{ question: presentation.question, answer: presentation.answer }] : []),
  ];
  return {
    ...city,
    metaTitle: presentation?.title ?? `Partybus huren ${city.name} | Feestbus & offerte`,
    metaDescription: presentation?.description ?? `Partybus of feestbus huren in ${city.name}? Regel vertrek, heen- en terugrit met ${local.partner}. Vraag vrijblijvend prijs en beschikbaarheid aan.`,
    hero: presentation ? { ...city.hero, subtitle: presentation.subtitle } : city.hero,
    intro: { ...city.intro, title: `Partybus of feestbus vanuit ${city.name}: zo plan je de rit`, paragraphs: [local.intro, local.planning, `Vraag ${local.partner} om een voorstel voor jullie datum. Noteer het aantal personen, alle opstapadressen, de bestemming en de gewenste vertrektijd en terugkomst. Laat buscapaciteit, faciliteiten, totaalprijs en voorwaarden bevestigen voordat je boekt.`] },
    pickup: { ...city.pickup, lead: `Deze vertrekgebieden in ${city.name} helpen bij het plannen. Laat de vervoerder het exacte adres en de bereikbaarheid bevestigen.`, items: local.pickup, note: 'Deze suggesties zijn geen vaste haltes of toezeggingen. Spreek voor heenrit en terugrit het concrete adres en tijdstip af.' },
    faqs: [...city.faqs.filter(faq => !/wat kost/i.test(faq.question) && !added.some(item => item.question === faq.question)), ...added],
  };
}
