import type { CityPageData } from './types';
import { applyFocusedCitySeo } from './focusedCitySeo';

// Selected by GSC impressions, 13 September–10 October 2026. Raw analytics are kept out of the repository.
const localCopy: Record<string, { context: string; planning: string; term: string }> = {
  dordrecht: { term: 'feestbus', context: 'Deze pagina gaat over vertrek vanuit Dordrecht, bijvoorbeeld bij Dordrecht Centraal of een eigen adres op het Eiland van Dordrecht. Tourgo Partybussen bespreekt het vertrekadres en de bestemming met jullie groep.', planning: 'Komt de groep uit Stadspolders, Dubbeldam of het centrum, kies dan een gezamenlijk verzamelpunt in Dordrecht. Een opstap in Alblasserdam, Sliedrecht of Molenlanden is een afzonderlijke stop: vermeld die expliciet in de aanvraag.' },
  rotterdam: { term: 'discobus', context: 'Een feestbus vanuit Rotterdam kan jullie groep naar een concert, bedrijfsfeest of festival brengen. Vertrek je bij Rotterdam Centraal, Ahoy of vanaf de Kop van Zuid? Geef het adres en de gewenste vertrektijd door aan Tourgo Partybussen.', planning: 'Bij een concert in Ahoy spreek je zowel de heenrit als het ophaalmoment na afloop af. Kies samen met de vervoerder een bereikbare verzamelplek; een genoemd gebied is geen gereserveerde bushalte.' },
  amsterdam: { term: 'discobus', context: 'Een feestbus huren vanuit Amsterdam begint met een gezamenlijk vertrekpunt. Voor groepen uit Centrum, Sloterdijk of Zuidoost bespreek je met Party Bussen Westland waar iedereen kan instappen en waar de rit eindigt.', planning: 'Bij een evenement rond de ArenA is het handig om een herkenbaar verzamelpunt en een contactpersoon af te spreken. Deel de locatie en eindtijd van het evenement; de vervoerder bevestigt waar de bus kan stoppen.' },
  breda: { term: 'discobus', context: 'Een feestbus huren vanuit Breda voor een vrijgezellenfeest, festival of bedrijfsuitje? Prestige Coach Service is de regionale partner. Geef aan of de groep bij Breda Centraal, in het Havenkwartier of op een eigen adres wil verzamelen.', planning: 'Komt een deel van de groep uit Prinsenbeek of Bavel, bespreek dan één gezamenlijk vertrekpunt of vraag naar een extra stop. Laat de route en de terugkomst in Breda meenemen in de offerte.' },
  'den-haag': { term: 'feestbus', context: 'Een feestbus huren vanuit Den Haag is praktisch voor een groep die samen naar een evenement of feest gaat. Tourgo Partybussen behandelt de aanvraag. Vermeld of jullie vertrekken uit het centrum, Scheveningen of een andere Haagse wijk.', planning: 'Een vertrek uit Scheveningen vraagt om een concreet adres en tijdstip. Bespreek de bereikbaarheid en leg vooraf vast of de terugrit naar dezelfde plek gaat of naar een ander adres in Den Haag.' },
  utrecht: { term: 'feestbus', context: 'Een feestbus huren vanuit Utrecht voor een festival, verjaardag of bedrijfsfeest? Party Bussen Westland is de partner voor Utrecht. Geef het vertrekadres, de bestemming en het aantal deelnemers door voor een passend voorstel.', planning: 'Voor een groep rond Utrecht Centraal of de Jaarbeurs bepaal je eerst aan welke kant iedereen verzamelt. De vervoerder bevestigt het exacte opstappunt en de tijd voor de terugrit.' },
  westland: { term: 'discobus of borrelbus', context: 'Een feestbus, discobus of borrelbus huren vanuit Westland? Op deze gemeentepagina loopt het contact via Tourgo Partybussen, de partner voor Zuid-Holland. Noem de vertrekplaats, bijvoorbeeld Naaldwijk, Wateringen of Monster, en het volledige adres.', planning: 'Westland bestaat uit meerdere kernen. Bespreek of de groep op één plek bijeenkomt of dat meerdere stops nodig zijn. Vraag ook welke afspraken voor muziek en consumpties gelden voor de gekozen bus.' },
  tilburg: { term: 'feestbus', context: 'Een feestbus huren vanuit Tilburg voor een festival, concert of groepsfeest regel je via Prestige Coach Service. Geef aan of de groep bij Tilburg Centraal, de Spoorzone of een eigen vertrekadres verzamelt.', planning: 'Voor een rit naar een festival bij Hilvarenbeek vermeld je het evenement, de bezoekdag en de gewenste terugrit. Stem het afzetpunt en de locatie voor ophalen af; toegang voor bussen verschilt per evenement.' },
  'utrechtse-heuvelrug': { term: 'feestbus', context: 'Een feestbus huren vanuit Utrechtse Heuvelrug is een aanvraag met vertrek uit deze gemeente, bijvoorbeeld uit Doorn, Driebergen-Rijsenburg of Leersum. Party Bussen Westland behandelt de rit; dit is een andere vertrekregio dan de stad Utrecht.', planning: 'Geef de kern en het volledige vertrekadres door. Als deelnemers uit verschillende dorpen komen, overleg dan over één verzamelpunt of meerdere stops en vraag wat dat betekent voor reistijd en prijs.' },
  oss: { term: 'feestbus', context: 'Een feestbus huren vanuit Oss voor een bedrijfsuitje, festival of vrijgezellenfeest? Prestige Coach Service is de partner voor Noord-Brabant. Begin de aanvraag met het vertrekadres in Oss, de datum en jullie groepsgrootte.', planning: 'Verzamelt de groep rond station Oss of bij een bedrijf buiten het centrum, vermeld dan het exacte adres. Bespreek ook of deelnemers uit Berghem aansluiten en of een extra opstap nodig is.' },
  leeuwarden: { term: 'feestbus', context: 'Een partybus vanuit Leeuwarden aanvragen begint met jullie vertrekadres in Friesland. Deze pagina gaat over Leeuwarden, ook als jullie bestemming in een andere provincie ligt. Vermeld de reisdatum, groepsgrootte en bestemming in het bestaande aanvraagformulier.', planning: 'Voor een vertrek bij station Leeuwarden, het centrum of een bedrijfsadres spreek je een gezamenlijk verzamelpunt af. Vraag bij een langere rit naar de totale reisduur en het tijdstip van terugkomst in Leeuwarden.' },
};

/** Content-only overlay: preserves routes, partner routing, images, forms and WhatsApp URLs. */
function applySeoPhaseOneBase(city: CityPageData): CityPageData {
  // Breda has a complete local hub; keep its visible copy and schema in sync.
  if (city.slug === 'breda') return city;
  const copy = localCopy[city.slug];
  if (!copy) return city;
  const question = `Wat kost een ${copy.term} vanuit ${city.name}?`;
  return {
    ...city,
    metaTitle: `Partybus huren ${city.name} | Feestbus aanvragen`,
    metaDescription: `Partybus of feestbus huren vanuit ${city.name}? Bespreek opstapplaats, groepsgrootte, heenrit en terugrit. Vraag prijs en beschikbaarheid voor jouw datum aan.`,
    intro: { ...city.intro, paragraphs: [copy.context, copy.planning, `Vraag een voorstel voor vertrek vanuit ${city.name}. Vermeld het exacte adres, de datum, groepsgrootte en bestemming; de vervoerder bevestigt route, beschikbaarheid en prijs voor deze rit.`] },
    pickup: { ...city.pickup, note: `${copy.planning} Genoemde plekken zijn suggesties; de vervoerder bevestigt het exacte opstappunt.` },
    faqs: [...city.faqs.filter(faq => faq.question !== question), {
      question,
      answer: `De prijs voor vertrek vanuit ${city.name} hangt af van datum, aantal personen, route, ritduur en eventuele stops. Geef ook de gewenste terugrit door. Vraag welke kosten en faciliteiten in het voorstel zitten; beschikbaarheid en prijs worden voor jullie rit bevestigd.`,
    }],
  };
}

export function applySeoPhaseOne(city: CityPageData): CityPageData {
  return applyFocusedCitySeo(applySeoPhaseOneBase(city));
}
