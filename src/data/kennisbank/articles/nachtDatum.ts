import type { KennisbankArticle } from '../types';
import { buildPartyBussenWestlandWhatsappHref } from '../../partners/partyBussenWestland';
export const publication = {"website": "www.partybusnederland.nl", "slotId": "www.partybusnederland.nl|2026-11-13|1", "originalScheduledAt": "2026-11-13T04:00:00+04:00", "publishAt": "2026-11-13T04:00:00+04:00", "datePublished": "2026-11-13T04:07:31.839477+04:00", "partner": "Party Bussen Westland / Utrecht", "language": "nl-NL", "searchIntent": "Welke datum vul ik in voor een partybus die na middernacht terugrijdt, en wat verandert bij alleen een terugrit?", "status": "source-written", "published": false, "title": "Terug met de partybus na middernacht: welke datum vul je in?", "url": "https://www.partybusnederland.nl/kennisbank/partybus-terugrit-na-middernacht-datum-invullen/", "photoSource": "/images/blog/westland-bus-vertrektijd.jpeg; existing approved image from https://partybussenwestland.nl/storage/2025/07/image00041-2048x1365.jpeg", "photoGenerated": false, "photoApproval": "Existing partner gallery, Johan30October permission; visually checked13November; no assigned vehicle or location claim, no caption.", "sources": ["src/components/forms/QuoteRequestFields.astro", "src/data/partners/partyBussenWestland.ts", "src/data/kennisbank/articles/rondritAmsterdam.ts", "src/data/kennisbank/articles/tijdslotUtrecht.ts", "https://www.partybusnederland.nl/provincies/utrecht/"], "overlapReview": "Compared existing knowledge/guide/service/partner pages and live knowledge hub. The round-trip article briefly says to specify the calendar date; it does not show separate outbound/return date fields versus the conditional single-return fields. New concrete output is a two-case dated field example. Rejected customer-versus-pickup-address angle because bedrijfsgegevensZeeland already answers it. No municipality variant.", "sourcesCheckedAt": "2026-11-13T04:07:31.839477+04:00", "priorPublicationCheck": {"main": "e8461de3b82d4a38a81c3761f3a9d3b871ca728f", "previousProduction": "8209d4a2-9d3c-4a1d-9b0e-fb5ec6bfebbd completed/success fresh", "activeActions": 0, "openPullRequests": 0, "previousCentralRun": "37497d20-e520-8326-b9d0-81d8d5694ca7 completed", "currentRun": "adee3487-8b14-8326-a52f-6bf1fdc16878", "sharedLockClaimed": false}};
const content = {
  "slug": "partybus-terugrit-na-middernacht-datum-invullen",
  "path": "/kennisbank/partybus-terugrit-na-middernacht-datum-invullen/",
  "canonical": "https://www.partybusnederland.nl/kennisbank/partybus-terugrit-na-middernacht-datum-invullen/",
  "seoTitle": "Partybus na middernacht: terugritdatum invullen",
  "metaDescription": "Na middernacht terug met de partybus? Zie welke kalenderdatum bij heen-en-terug hoort en hoe je alleen ophalen invult in het bestaande aanvraagformulier.",
  "h1": "Terug met de partybus na middernacht: welke datum vul je in?",
  "eyebrow": "NACHTELIJKE TERUGRIT · UTRECHT",
  "lead": "Vul voor het ophalen de kalenderdatum in waarop dat ophaalmoment werkelijk valt. Eindigt je vrijdagavond pas op zaterdag om 02:00, dan hoort bij dat ophalen de zaterdagdatum. Bij een retouraanvraag staan heen- en terugdatum apart; kies je alleen ophalen, dan gebruik je de datum van die ene rit. Controleer beide samen met de kloktijd vóór je de aanvraag verstuurt.",
  "heroImage": {
    "src": "/images/blog/westland-bus-vertrektijd.jpeg",
    "filename": "westland-bus-vertrektijd.jpeg",
    "baseName": "westland-bus-vertrektijd",
    "alt": "Witte minibus op een landelijke weg op een bestaande foto uit de partnergalerij",
    "title": "Bestaand partnerbeeld van groepsvervoer",
    "width": 2048,
    "height": 1365
  },
  "ctaImage": {
    "src": "/images/blog/westland-bus-vertrektijd.jpeg",
    "filename": "westland-bus-vertrektijd.jpeg",
    "baseName": "westland-bus-vertrektijd",
    "alt": "Witte minibus op een landelijke weg op een bestaande foto uit de partnergalerij",
    "title": "Bestaand partnerbeeld van groepsvervoer",
    "width": 2048,
    "height": 1365
  },
  "heroPrimaryLabel": "Bespreek je terugrit met datum en tijd",
  "sections": [
    {
      "id": "twee-dagen",
      "title": "Schrijf eerst de twee kalenderdagen uit",
      "paragraphs": [
        "Noteer de datum van je uitje en de datum waarop de groep wordt opgehaald. Gebruik naast woorden als vrijdagavond ook dag, maand en tijd. “Vrijdagnacht twee uur” kan door verschillende lezers anders worden opgevat; “zaterdag 14 november 2026 om 02:00” wijst één moment aan.",
        "Een voorbeeld: je groep vertrekt vrijdag 13 november 2026 om 19:00 vanuit Utrecht en wil zaterdag 14 november om 02:00 worden opgehaald. Het zijn twee ritmomenten op twee kalenderdagen. Dit voorbeeld is geen aangeboden rit, beschikbare bus of bevestigde planning."
      ]
    },
    {
      "id": "retour",
      "title": "Heen en terug: gebruik vertrekdatum én terugritdatum",
      "paragraphs": [
        "Kies je in het bestaande formulier “Retourreis”, zet dan bij “Vertrekdatum” en “Vertrektijd” het gewenste begin van de heenrit. In het voorbeeld zijn dat 13 november en 19:00. Bij “Datum terugrit / ophalen” en “Retourtijd / ophaaltijd” vul je 14 november en 02:00 in.",
        "Controleer dat de terugrit niet per ongeluk dezelfde datum als de heenrit heeft gekregen. Zet in de opmerkingen desgewenst beide momenten volledig uitgeschreven naast elkaar. Vermeld ook de bedoelde ophaalplek na het uitje en een afwijkend afzetadres, zodat datum en route samen te beoordelen zijn."
      ]
    },
    {
      "id": "alleen-terug",
      "title": "Alleen ophalen: de datum hoort bij die ene rit",
      "paragraphs": [
        "Heb je de heenreis anders geregeld en vraag je alleen vervoer naar huis aan? Kies “Ophalen vanaf festival / alleen terugrit”. Het formulier toont dan “Datum ophalen / terugrit” en “Gewenste ophaaltijd” bij de eerste datum- en tijdvelden. De afzonderlijke retourdatum en retourtijd worden bij deze keuze verborgen.",
        "Vul hier de zaterdagdatum en 02:00 in als dát het gevraagde ophaalmoment is. Vul niet de vrijdagdatum in alleen omdat het feest op vrijdag begon. Geef in je toelichting duidelijk aan waar je groep wordt opgehaald en waar zij naartoe wil; laat de vervoerder het ritvoorstel bevestigen."
      ]
    },
    {
      "id": "controle",
      "title": "Lees de aanvraag terug als één volledige zin",
      "paragraphs": [
        "Controleer vóór het versturen: “Wij willen op [kalenderdatum] om [tijd] met [aantal] personen worden opgehaald bij [plek] en naar [adres] reizen.” Bij een retouraanvraag zet je de heenrit in een aparte zin. Lees het overzicht ook aan de groepscontactpersoon voor als iemand anders de gegevens verzamelde.",
        "De eindtijd van het evenement is niet vanzelf de afgesproken ophaaltijd. Vraag de locatie waar je groep zich moet verzamelen en bespreek dat punt met de vervoerder. Dit artikel schrijft geen vaste loop-, wacht- of reistijd voor."
      ],
      "moreLink": {
        "href": "/kennisbank/partybus-utrecht-activiteit-vast-tijdslot/",
        "label": "Een vast activiteitmoment naast de ritafspraak leggen"
      }
    },
    {
      "id": "bevestiging",
      "title": "Controleer dezelfde datum ook in het antwoord",
      "paragraphs": [
        "Kijk in het voorstel of de bevestiging opnieuw naar kalenderdatum, tijd, ritdeel en ophaalplek. Alleen “02:00” zonder dag is onvoldoende om een verschil in jullie bedoelingen op te lossen. Vraag om verduidelijking voordat je het reisschema met alle deelnemers deelt.",
        "Staat er al een verkeerde datum in een verstuurde aanvraag? Verwijs naar die aanvraag en schrijf de oude en gewenste juiste datum uit. Vraag wat kan worden aangepast. Een correctiebericht verandert een bestaande afspraak niet automatisch en zegt niets over kosten of beschikbaarheid."
      ],
      "moreLink": {
        "href": "/kennisbank/partybus-aanvraag-formulier-whatsapp-dubbel/",
        "label": "Meerdere berichten over dezelfde aanvraag duidelijk houden"
      }
    },
    {
      "id": "partner",
      "title": "Bespreek vertrek vanuit Utrecht met Party Bussen Westland",
      "paragraphs": [
        "Party Bussen Westland is de aangesloten partner voor de provincie Utrecht en Amsterdam. Gebruik de echte vertrek- of terugkomstplaats in je aanvraag en noem expliciet dat je vraag over een nachtelijk ophaalmoment gaat. De partnernaam is geen bewijs van een vestiging bij jouw opstapadres.",
        "Jij kunt de kalenderdagen controleren en één helder overzicht maken. De vervoerder beoordeelt het gevraagde vervoer en bevestigt voertuig, tijd, plaats en voorwaarden. Een ingevulde datum of geopende WhatsApp-tekst is nog geen boeking."
      ],
      "moreLink": {
        "href": "/provincies/utrecht/",
        "label": "Naar de bestaande Utrechtse aanvraagroute"
      }
    }
  ],
  "checklist": {
    "title": "Controle vóór verzending",
    "lead": "Bekijk datum en tijd steeds als één geheel.",
    "items": [
      "Datum van de heenrit, als je die aanvraagt.",
      "Kalenderdatum en tijd van het ophalen na het uitje.",
      "Juiste keuze: retourreis of alleen terugrit.",
      "Aantal reizigers en exacte bedoelde ophaalplek.",
      "Bestemming of afwijkend afzetadres na de terugrit.",
      "Dezelfde gegevens in het uiteindelijke voorstel."
    ]
  },
  "faqs": [
    {
      "question": "Mijn feest begint vrijdag en eindigt zaterdag om 02:00. Welke ophaaldatum hoort daarbij?",
      "answer": "Gebruik de zaterdagdatum voor ophalen om 02:00. Bij een retouraanvraag blijft de vrijdagdatum bij de heenrit staan. Controleer beide momenten in het voorstel."
    },
    {
      "question": "Waarom zie ik geen afzonderlijke retourdatum als ik alleen ophalen kies?",
      "answer": "Bij “Ophalen vanaf festival / alleen terugrit” gebruikt het bestaande formulier de eerste datum- en tijdvelden voor die ene rit. Ze heten dan “Datum ophalen / terugrit” en “Gewenste ophaaltijd”."
    }
  ],
  "summary": {
    "title": "Eén ophaalmoment heeft een datum én een tijd",
    "paragraphs": [
      "Schrijf het volledige ophaalmoment uit, zet het bij de juiste ritkeuze en controleer de bevestiging. Zo bespreek je één duidelijk verzoek met de vervoerder."
    ]
  },
  "cta": {
    "title": "Leg je nachtelijke terugrit voor",
    "lead": "Geef kalenderdatum, tijd, aantal en ophaalplek door via de bestaande partnerroute.",
    "primaryLabel": "Vraag een ritvoorstel bij de Utrechtse partner",
    "whatsappLabel": "Bespreek datum en terugrit via WhatsApp"
  },
  "relatedLinks": [
    {
      "label": "Bedrijfsuitje en terugrit plannen",
      "href": "/kennisbank/bedrijfsuitje-utrecht-partybus-terugrit-plannen/"
    }
  ],
  "cityLinks": [
    {
      "label": "Partybus vanuit Utrecht",
      "href": "/steden/partybus-huren-utrecht/"
    }
  ],
  "trustNote": "Voorbeelddata zijn invulhulp. Geen voertuig, planning, wachttijd, wijzigingskosten of beschikbaarheid toegezegd."
};
const quote='/gratis-partybus-offertes-aanvragen/?'+new URLSearchParams({partner:'party-bussen-westland',city:'Utrecht',source:content.path}).toString();
export const nachtDatum: KennisbankArticle = {...content,heroPrimaryHref:quote,cta:{...content.cta,primaryHref:quote,whatsappHref:buildPartyBussenWestlandWhatsappHref('Utrecht')}};
