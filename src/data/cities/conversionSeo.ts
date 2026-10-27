import type { CityPageData, CityFaq } from './types';

type LocalConversion = {
  title: string;
  description: string;
  lead: string;
  heading: string;
  paragraphs: string[];
  faqs: CityFaq[];
};

// These existing departure pages are the commercial hubs; articles answer narrower planning questions.
export const conversionCities: Record<string, LocalConversion> = {
  amsterdam: {
    title: 'Partybus huren Amsterdam | Feestbus & ritofferte',
    description: 'Partybus huren in Amsterdam voor een vrijgezellenfeest, verjaardag of concert? Bespreek opstapplaats en terugrit. Vraag Party Bussen Westland een offerte aan.',
    lead: 'Samen vanuit Amsterdam naar een feest of concert? Vertel Party Bussen Westland wanneer jullie vertrekken, met hoeveel personen en waarheen. Vraag via WhatsApp een voorstel voor de hele rit.',
    heading: 'Feestbus huren in Amsterdam: vertrek bij jullie groep',
    paragraphs: [
      'Een partybus huren in Amsterdam begint bij jullie vertrekadres. Komen vrienden met de trein naar Sloterdijk of Amstel, verzamelt het team bij een kantoor op de Zuidas of wil je bij een hotel in Centrum instappen? Geef het volledige adres door. Party Bussen Westland behandelt de aanvraag voor Amsterdam en bevestigt welke stopplek bereikbaar is met de aangeboden bus.',
      'Voor een partybus bij een vrijgezellenfeest maak je van het programma een route: ophalen, restaurant, activiteit en terugreis. Een adres in een smalle straat is niet vanzelf een geschikte halte. Kies samen met de vervoerder zo nodig een alternatief en geef pas daarna het vertrekpunt door aan de deelnemers.',
      'Zoek je een discobus voor een verjaardag of een concert in Zuidoost? Vraag naar muziek, verlichting en afspraken over consumpties voor het werkelijke voertuig. Leg ook vast waar en wanneer de groep na afloop instapt. Met één voorstel voor alle ritdelen zie je wat de totaalprijs inhoudt.',
    ],
    faqs: [
      { question: 'Wat kost een partybus huren in Amsterdam?', answer: 'De prijs volgt uit jullie datum, ritduur, adressen, groepsgrootte en terugreis. Een hotelophaalpunt in Centrum en een vertrek uit Sloterdijk kunnen een andere route vragen. Stuur Party Bussen Westland het complete programma en vraag een totaalbedrag met eventuele stops en wachttijd.' },
      { question: 'Hoeveel personen kunnen mee in de partybus vanuit Amsterdam?', answer: 'Dat hangt af van het aangeboden voertuig. Geef het aantal deelnemers en eventuele bagage of instapwensen door. Party Bussen Westland bevestigt voor jullie datum de toegestane capaciteit en beschikbare uitvoering. Een foto op deze pagina is geen reservering van die bus.' },
      { question: 'Huren we de partybus in Amsterdam met chauffeur?', answer: 'Deze aanvraag gaat over groepsvervoer met chauffeur, niet over zelf rijden. Laat in het voorstel vastleggen welke ritdelen, tijden en eventuele wachttijd onder de totaalprijs vallen. Bespreek ook wie de chauffeur namens de groep kan bereiken.' },
      { question: 'Mogen we zelf een opstapplaats in Amsterdam kiezen?', answer: 'Je kunt een hotel, bedrijfsadres of verzamelpunt bij een station voorstellen. Noem het exacte adres en een alternatief. De vervoerder beoordeelt of de aangeboden bus daar kan komen en stoppen; ophalen voor iedere deur in de binnenstad is niet vanzelfsprekend.' },
      { question: 'Kan ik een feestbus in Amsterdam aanvragen voor een vrijgezellenfeest?', answer: 'Ja, bespreek het volledige programma met Party Bussen Westland. Vermeld hoeveel personen meegaan, alle gewenste stops en waar de avond eindigt. Vraag welke muziek- en consumptieafspraken gelden, ook wanneer je de rit als discobus aanvraagt.' },
      { question: 'Hoe vraag ik via WhatsApp een ritofferte voor Amsterdam aan?', answer: 'Open de WhatsApp-offerteknop en vul naam, opstapadres, bestemming, datum, vertrektijd, personen en gelegenheid in. Voeg de terugreis en opmerkingen toe. Het bericht gaat naar Party Bussen Westland; je controleert en verstuurt het zelf in WhatsApp. Een aanvraag is nog geen boeking.' },
    ],
  },
  breda: {
    title: 'Partybus huren Breda | Feestbus met chauffeur',
    description: 'Feestbus of partybus huren in Breda? Plan vertrek uit Belcrum, Ginneken of Prinsenbeek en de terugreis. Vraag Prestige Coach Service een vrijblijvende offerte.',
    lead: 'Een verjaardag, vrijgezellenfeest of festival vanuit Breda organiseren? Bespreek je route met Prestige Coach Service en vraag een offerte met chauffeur, opstapadressen en terugreis.',
    heading: 'Van Breda naar jullie feest, met één duidelijk ritplan',
    paragraphs: [
      'Voor een partybus vanuit Breda werkt PartybusNederland.nl samen met Prestige Coach Service. Een groep uit Belcrum, Ginneken en de Haagse Beemden kan op één afgesproken adres verzamelen of extra stops aanvragen. Vertel hoeveel mensen per adres instappen, zodat de vervoerder de route kan beoordelen.',
      'De Grote Markt en Havermarkt zijn mogelijke bestemmingen voor jullie avond, maar geen vanzelfsprekende opstapplaatsen voor een grote bus. Bespreek een bereikbaar adres bij de rand van het centrum of bij Breda Centraal. Komen er deelnemers uit Prinsenbeek, Bavel of Teteringen bij, laat die stops apart in de ritafspraak opnemen.',
      'Een feestbus huren voor een verjaardag vraagt om andere tijden dan vervoer voor dag- en avondgasten op een bruiloft. Schrijf het programma uit en vraag Prestige wat past bij jullie groep. Discobus, feestbus en partybus zijn zoeknamen: de aangeboden bus bepaalt welke muziek, verlichting en voorzieningen je werkelijk krijgt.',
    ],
    faqs: [
      { question: 'Wat kost een partybus of feestbus huren in Breda?', answer: 'Prestige Coach Service berekent een voorstel voor jullie datum, route, ritduur, bus en groepsgrootte. Extra stops in bijvoorbeeld Bavel of Prinsenbeek en de terugreis kunnen invloed hebben op het totaal. Vraag welke chauffeurstijd, wachttijd en voorzieningen zijn meegenomen; er staat hier geen vast tarief.' },
      { question: 'Is er een partybus vanuit Breda voor onze groepsgrootte?', answer: 'Geef het werkelijke aantal personen aan Prestige door en vermeld bagage of bijzondere instapwensen. De partner bevestigt welke bus op jullie datum beschikbaar is en hoeveel toegestane plaatsen die heeft. Ga niet alleen af op de grootte van een afgebeeld voertuig.' },
      { question: 'Is de rit vanuit Breda met chauffeur?', answer: 'Je vraagt hier een partybusrit met chauffeur aan. Bespreek vooraf wie de contactpersoon van de groep is en welke heen- en terugtijden gelden. Laat de chauffeur, eventuele wachttijd en alle afgesproken ritdelen in de offerte opnemen.' },
      { question: 'Kunnen we opstappen in Breda én Prinsenbeek of Bavel?', answer: 'Dat kun je als routewens aanvragen. Noem per stop het volledige adres en aantal instappers. Prestige beoordeelt de bereikbaarheid en volgorde. Laat ook vastleggen of de terugrit langs diezelfde plaatsen gaat; meerdere opstapplaatsen zijn niet automatisch inbegrepen.' },
      { question: 'Kan ik een feestbus huren voor een verjaardag of vrijgezellenfeest in Breda?', answer: 'Ja, leg de gelegenheid en het programma voor aan Prestige Coach Service. Geef bijvoorbeeld het restaurant, de feestlocatie en de gewenste terugkomst door. Muziek, versiering en consumpties spreek je afzonderlijk af; de gelegenheid maakt die extra’s niet automatisch onderdeel van de rit.' },
      { question: 'Hoe komt mijn WhatsApp-offerteaanvraag uit Breda bij Prestige?', answer: 'De offerteknop opent het vragenvenster voor Prestige Coach Service. Vul jullie datum, tijd, personen, vertrekadres, bestemming en wensen in. Daarna opent een ingevuld concept met PartybusNederland.nl als herkomst. Jij verstuurt het bericht en maakt pas een boeking na afspraken met Prestige.' },
    ],
  },
  utrecht: {
    title: 'Partybus huren Utrecht | Feestbus & offerte',
    description: 'Partybus huren in Utrecht voor een feest of bedrijfsuitje? Bespreek vertrek bij Jaarbeurs, Centraal of Leidsche Rijn. Vraag een offerte met heen- en terugrit.',
    lead: 'Met vrienden of collega’s samen vertrekken uit Utrecht? Vraag Party Bussen Westland om een ritvoorstel met jullie verzameladres, groepsgrootte en gewenste terugkomst.',
    heading: 'Een feestbus vanuit Utrecht die aansluit op je programma',
    paragraphs: [
      'Een partybus huren in Utrecht is een aanvraag voor vertrek uit de stad. Bij Utrecht Centraal moet duidelijk zijn aan welke zijde jullie verzamelen; bij de Jaarbeurs of een kantoor in Leidsche Rijn is een volledig adres nodig. Party Bussen Westland is onze partner voor Utrecht en beoordeelt het voorgestelde opstappunt.',
      'Voor een bedrijfsuitje wil niet iedere collega na afloop terug naar kantoor. Bespreek daarom vooraf één eindpunt of afzonderlijke eindstops. Vermeld of de bus tijdens het programma nodig blijft of de groep later weer komt ophalen. Zo past de ritafspraak bij de activiteit én bij ieders terugreis.',
      'Een partybus voor een verjaardag of vrijgezellenfeest kun je met dezelfde partner bespreken. Geef de activiteit, het aantal deelnemers en wensen voor muziek door. Vertrekt de groep uit Doorn, Leersum of Driebergen-Rijsenburg, gebruik dan de bestaande pagina voor Utrechtse Heuvelrug: dat is een andere vertrekplaats dan Utrecht stad.',
    ],
    faqs: [
      { question: 'Wat bepaalt de prijs van een partybus huren in Utrecht?', answer: 'De datum, het vertrekadres, de bestemming, ritduur en groep vormen de basis. Geef ook aan of de bus tijdens jullie programma nodig blijft en waar de terugrit eindigt. Party Bussen Westland kan dan een totaalvoorstel maken, inclusief de besproken stops en wachttijd.' },
      { question: 'Welke bus past bij ons aantal personen vanuit Utrecht?', answer: 'Noem het precieze aantal deelnemers en geef aan of iedereen op hetzelfde adres instapt. Vraag Party Bussen Westland welk voertuig beschikbaar is en welke toegestane capaciteit dat heeft. Aantallen op andere pagina’s zijn geen garantie voor jullie rit.' },
      { question: 'Heeft de feestbus vanuit Utrecht een chauffeur?', answer: 'De aanvraag betreft een rit met chauffeur. Je hoeft zelf geen bestuurder te regelen. Laat wel bevestigen welke tijden en ritdelen zijn opgenomen en wat de afspraak is wanneer het programma uitloopt of de terugrit wijzigt.' },
      { question: 'Kunnen we kiezen tussen Utrecht Centraal, Jaarbeurs en Leidsche Rijn?', answer: 'Je kunt een exact adres in een van deze gebieden voorstellen. De vervoerder bevestigt een geschikte stopplek voor de aangeboden bus. Maak bij Centraal duidelijk aan welke zijde de groep verzamelt en spreek het terugkeeradres afzonderlijk af.' },
      { question: 'Kunnen we een partybus voor een vrijgezellenfeest vanuit Utrecht aanvragen?', answer: 'Ja. Stuur de gewenste activiteiten en hun adressen mee naar Party Bussen Westland. Vermeld de gelegenheid ook bij een verjaardag of bedrijfsfeest. Vraag welke sfeer, muziek en consumpties mogelijk zijn en laat die afspraken bij het voertuigvoorstel vastleggen.' },
      { question: 'Hoe vraag ik een offerte voor Utrecht aan via WhatsApp?', answer: 'Gebruik de WhatsApp-offerteknop op deze pagina voor Party Bussen Westland. Vul je naam, ritdatum, gewenste vertrektijd, personen, opstapadres en bestemming in. Geef de terugreis en opmerkingen mee. Je controleert zelf het bericht; pas de afspraak met de vervoerder maakt de boeking definitief.' },
    ],
  },
  rotterdam: {
    title: 'Partybus huren Rotterdam | Feestbus & discobus',
    description: 'Partybus of discobus huren in Rotterdam? Bespreek vertrek bij Centraal, Kop van Zuid of Ahoy, jullie groep en terugreis. Vraag Tourgo Partybussen een offerte.',
    lead: 'Vanuit Rotterdam samen naar een concert, verjaardag of groepsfeest? Vraag Tourgo Partybussen om prijs en beschikbaarheid voor jullie route en heen- en terugtijden.',
    heading: 'Feestbus huren in Rotterdam voor de hele groepsavond',
    paragraphs: [
      'Een partybus huren in Rotterdam vraagt om een helder vertrekpunt: een bedrijfsadres op de Kop van Zuid, een verzameladres bij Centraal of een locatie in Rotterdam-Noord. Tourgo Partybussen behandelt de aanvraag. Geef de volledige adressen en gewenste aankomsttijd op jullie bestemming door.',
      'Gaat de groep naar een concert bij Ahoy, spreek dan het afzetten en ophalen los van elkaar af. Vraag waar deelnemers na afloop wachten en hoe de contactpersoon de vervoerder bereikt. Het adres waar je uitstapt hoeft niet de plek te zijn waar de bus voor de terugreis kan stoppen.',
      'Voor een discobus bij een verjaardag of een partybus voor een vrijgezellenfeest geef je ook het avondprogramma mee. Willen vrienden op meerdere plekken instappen, laat Tourgo de route en rijtijd beoordelen. Bespreek de voorzieningen van de aangeboden bus en vraag één totaalprijs voor alle bevestigde ritdelen.',
    ],
    faqs: [
      { question: 'Wat kost een partybus huren in Rotterdam?', answer: 'Tourgo maakt een voorstel op basis van de datum, het voertuig, personen, adressen en tijden. Een avond met meerdere activiteiten of stops verschilt van één heen- en terugrit. Vraag de totaalprijs met afspraken over chauffeur, wachttijd en extra stops.' },
      { question: 'Hoe weet ik hoeveel mensen in onze Rotterdamse partybus passen?', answer: 'De capaciteit hoort bij de aangeboden bus. Geef Tourgo de groepsgrootte, bagage en instapwensen door en laat de toegestane plaatsen bevestigen. Een kleinere groep betekent niet automatisch een lager tarief; ook route en ritduur tellen mee.' },
      { question: 'Is een chauffeur onderdeel van de partybusrit vanuit Rotterdam?', answer: 'Dit is een aanvraag voor vervoer met chauffeur. Laat Tourgo de geplande rij- en wachttijden bevestigen. Spreek ook af of de bus tijdens het evenement wacht of later terugkomt en wie namens de groep bereikbaar is.' },
      { question: 'Kan de feestbus ons bij Rotterdam Centraal of Ahoy ophalen?', answer: 'Je kunt ophalen in die omgeving aanvragen, met een volledig adres en tijdstip. Tourgo beoordeelt waar de aangeboden bus kan stoppen. Bij een evenement bespreek je afzetten en ophalen apart; een genoemd gebied is geen gereserveerde halte.' },
      { question: 'Kan ik een discobus voor een vrijgezellenfeest in Rotterdam aanvragen?', answer: 'Ja, vertel Tourgo welke activiteiten en stops jullie willen combineren. Een verjaardag, concert of vrijgezellenfeest kan een andere planning vragen. Vraag wat de bus heeft aan muziek en verlichting en welke consumptieafspraken gelden, voordat je boekt.' },
      { question: 'Welke gegevens heeft Tourgo nodig voor een WhatsApp-offerte?', answer: 'Vul naam, opstapadres in Rotterdam, bestemming, datum, vertrektijd, aantal personen en gelegenheid in. Voeg de gewenste terugreis en extra wensen toe. De knop maakt een conceptbericht aan Tourgo; je verstuurt het zelf. Een prijs en voertuig zijn pas zeker na bevestiging van de partner.' },
    ],
  },
  'den-haag': {
    title: 'Partybus huren Den Haag | Feestbus & ritofferte',
    description: 'Feestbus huren in Den Haag of Scheveningen? Plan jullie opstapadres, groepsgrootte en terugreis met chauffeur. Vraag Tourgo Partybussen een passende ritofferte.',
    lead: 'Een feestbus vanuit Den Haag of Scheveningen nodig? Bespreek datum, deelnemers en beide ritdelen met Tourgo Partybussen. Vraag via WhatsApp een offerte voor jullie programma.',
    heading: 'Van Den Haag of Scheveningen naar jullie feest',
    paragraphs: [
      'Een partybus huren in Den Haag begint met het adres waar de groep bijeenkomt. Dat kan een eigen locatie zijn, een verzamelpunt in de omgeving van Centraal of Hollands Spoor, of een adres in Scheveningen. Tourgo Partybussen is de partner voor Zuid-Holland; laat de stopplek met de vervoerder afstemmen.',
      'Een avond aan de kust kan een andere eindstop vragen dan het vertrekpunt. Willen jullie heen vertrekken uit Scheveningen en terugkomen bij Hollands Spoor, zet beide adressen dan apart in de aanvraag. Vermeld ook of een deel van de groep onderweg elders wil uitstappen.',
      'Voor een feestbus bij een vrijgezellenfeest of verjaardag geef je restaurant, activiteit en gewenste terugkomst mee. Vraag hoe de route bij drukte kan worden uitgevoerd en welke muziekvoorzieningen de aangeboden bus heeft. Leg eventuele wachttijd en wijzigingen vast vóór je het reisschema met de groep deelt.',
    ],
    faqs: [
      { question: 'Wat kost een feestbus huren in Den Haag?', answer: 'De prijs hangt af van datum, route, bus, aantal personen en duur van de rit. Geef ook de gewenste terugreis door, bijvoorbeeld vanuit de feestlocatie naar Hollands Spoor. Tourgo kan pas op basis van het complete plan aangeven wat de totaalprijs is en welke stops inbegrepen zijn.' },
      { question: 'Hoe groot kan onze groep vanuit Den Haag zijn?', answer: 'Vermeld bij Tourgo hoeveel mensen willen reizen en of er bagage of instapwensen zijn. Vraag welke bus op jullie datum past en wat de toegestane capaciteit is. De exacte uitvoering wordt bij het voorstel bevestigd; deze pagina garandeert geen beschikbaar voertuig.' },
      { question: 'Vragen we de partybus vanuit Den Haag met chauffeur aan?', answer: 'Ja, deze aanvraag betreft groepsvervoer met chauffeur. Bespreek de heenrit, terugrit en eventuele wachttijd als onderdelen van hetzelfde voorstel. Vraag wat er gebeurt als het feest later eindigt dan gepland.' },
      { question: 'Kunnen we in Scheveningen instappen en op een andere plek terugkomen?', answer: 'Dat kun je aanvragen bij Tourgo. Geef het exacte adres in Scheveningen en het gewenste terugkeeradres in Den Haag door. De vervoerder bevestigt bereikbaarheid, route en kosten. Laat eventuele extra eindstops expliciet meenemen.' },
      { question: 'Kan de feestbus voor een verjaardag of vrijgezellenfeest worden aangevraagd?', answer: 'Ja, deel het programma van jullie feest met Tourgo Partybussen. Denk aan de volgorde van restaurant, activiteit en feestlocatie. Bespreek wensen voor muziek en consumpties per aangeboden voertuig; die zijn niet automatisch inbegrepen doordat het een feestbus heet.' },
      { question: 'Hoe vraag ik een WhatsApp-offerte voor Den Haag aan?', answer: 'Open het vragenvenster via de WhatsApp-offerteknop. Vul naam, vertrekadres, bestemming, datum, gewenste vertrektijd, personen en gelegenheid in. De route blijft bij Tourgo Partybussen. Controleer het ingevulde bericht en verstuur het zelf; daarna bespreek je prijs en boekingsvoorwaarden met Tourgo.' },
    ],
  },
};

export function applyCityConversionSeo(city: CityPageData): CityPageData {
  const copy = conversionCities[city.slug];
  if (!copy) return city;
  return {
    ...city,
    metaTitle: copy.title,
    metaDescription: copy.description,
    h1: `Partybus huren ${city.name}`,
    hero: { ...city.hero, subtitle: copy.lead },
    intro: { ...city.intro, title: copy.heading, paragraphs: copy.paragraphs },
    faqs: copy.faqs,
  };
}
