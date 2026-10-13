# Partybus Nederland — officieel beheerproject

Laatste update: 13 oktober 2026. Dit bestand is het startpunt voor vervolgwerk vanuit ChatGPT Work.

## Vaste werkwijze

- Analyseer en gebruik uitsluitend Search Console-gegevens van PartybusNederland.nl.
- Gebruik uitsluitend de bestaande repository `jvhgroep-debug/partybus-nederland`.
- Bestaande hosting: Cloudflare Pages. Geen nieuwe website, repository of hosting aanmaken.
- Werk eerst op een aparte branch. Behoud URL's, canonical-instellingen, formulieren, partnergegevens en WhatsApp-koppelingen.
- Lees dit bestand vóór elke nieuwe opdracht en werk het na afloop bij.
- Een commit of geslaagde build is geen bewijs van publicatie. Noteer productie pas als die afzonderlijk is geverifieerd.

## Projectafbakening gecontroleerd

Alle wijzigingen in deze werksessie betreffen uitsluitend deze repository. Alle SEO-rapporten zijn uitsluitend opgevraagd voor `sc-domain:partybusnederland.nl`. De read-only lijst met verbonden properties gaf ook andere websitenamen terug; hun rapporten zijn niet geopend, gebruikt of aangepast. Deze controle betreft deze werksessie, niet andere chats.

De eerste push is door automatische goedkeuringscontrole geblokkeerd vanwege een ruwe GSC-export. Die export en de numerieke analytics zijn uit de te publiceren commit verwijderd. Er wordt uitsluitend websitecode en projectdocumentatie gepusht.

## Uitgevoerde werkzaamheden

### 13 oktober 2026 — SEO-fase 1

- Repository gecontroleerd vanaf main-commit `e89ef72`.
- Werkbranch: `seo/fase-1-steden-2026-10-13`.
- Search Console geraadpleegd: `sc-domain:partybusnederland.nl`, web, 13 september t/m 10 oktober 2026 (28 volledige dagen).
- Tien bestaande gemeentepagina's geselecteerd op hoogste aantal vertoningen; zoekopdrachten gebruikt om de inhoud gericht te verbeteren.
- Unieke titles en meta descriptions aangescherpt; bestaande titelfocus 'partybus huren' behouden en 'feestbus aanvragen' toegevoegd.
- Lokale uitleg toegevoegd over vertrekplaatsen, route, heen-/terugrit en aanvraaggegevens. Termen discobus/feestbus/borrelbus verwerkt waar de zoekopdrachten daar aanleiding toe geven.
- Prijsvraag met praktisch antwoord toegevoegd aan zichtbare FAQ en de bestaande FAQ-structured data.
- Utrechtse Heuvelrug expliciet onderscheiden van de stad Utrecht. Leeuwarden expliciet als vertrekplaats in Friesland benoemd vanwege vertoningen bij zoekopdrachten over Leiden/Rotterdam.
- Formulieren, API's, partners, WhatsApp-nummers, tracking, foto's en bestaande URL's behouden.

Geselecteerde pagina's: Rotterdam, Amsterdam, Breda, Den Haag, Utrecht, Westland, Tilburg, Utrechtse Heuvelrug, Oss en Leeuwarden. Westland en Utrechtse Heuvelrug zijn gemeenten met meerdere kernen; zij behoren op basis van de GSC-controle tot de tien geselecteerde pagina's. Ruwe analytics en individuele zoekopdrachtstatistieken worden niet in GitHub opgeslagen.

## Validatie

- `npm ci` en `npm run build`: geslaagd; 577 pagina's gebouwd.
- `node scripts/audit-seo.mjs`: geslaagd; geen dubbele titles/descriptions of ontbrekende H1 in de audit.
- `node scripts/verify-pre-push.mjs`: geslaagd; 0 kapotte interne links, geen ontbrekende assets volgens deze controle.
- Tien gewijzigde HTML-pagina's vergeleken met een aparte build van main-commit `e89ef72`: formulier-/invoerveldattributen, WhatsApp-URL's en offerte-URL's identiek; één H1, juiste canonical en geldige JSON-LD per pagina.
- `git diff --check`: geslaagd.
- Geen offerte ingestuurd en geen WhatsApp-bericht verzonden. Externe mailaflevering is in deze controle niet getest.

## Wat daadwerkelijk online staat

**De wijzigingen van SEO-fase 1 zijn voorbereid op de werkbranch; niet gemerged naar main en niet als productie gepubliceerd.**

De directe productiecontrole van homepage, Rotterdam en sitemap.xml kreeg HTTP 403 vanuit deze werkomgeving. Daardoor is de huidige productie-inhoud niet onafhankelijk vastgesteld. Een Cloudflare-preview van de branch is evenmin bevestigd. Dit is een verificatiebeperking en geen vastgestelde storing voor bezoekers.

De broncode op main bevat partnerpagina's, offerteafhandeling en een privé WhatsApp-statistiekendashboard (`e89ef72`). Hun actuele publicatiestatus is hier niet geverifieerd. Oudere conversatieclaims worden niet als nieuw publicatiebewijs gebruikt.

## Actieve partners volgens de huidige broncode

Er staan vier partners in de huidige repository, inclusief StarTransfer. Geen partner verwijderd op basis van het eerder genoemde aantal van drie.

| Partner | Gebied | WhatsApp | Bron |
| --- | --- | --- | --- |
| Prestige Coach Service | Noord-Brabant | +31 6 29041798 | `src/data/partners/prestigeCoachService.ts` |
| Tourgo Partybussen | Zuid-Holland | +31 6 23044970 | `src/data/partners/tourgoPartybussen.ts` |
| Party Bussen Westland | Provincie Utrecht + Amsterdam | +31 6 10628733 | `src/data/partners/partyBussenWestland.ts` |
| StarTransfer | Zeeland | +31 6 84002350 (tijdelijk via Partybus Nederland) | `src/data/partners/starTransfer.ts` |

Let op: de gemeentepagina Westland valt in de huidige routering onder **Tourgo/Zuid-Holland**. De partner met de naam Party Bussen Westland bedient hier Utrecht en Amsterdam. Deze routering is bewust behouden.

StarTransfer-aanvragen worden volgens de configuratie intern naar `info@starlocal.nl` gestuurd voor handmatige doorsturing; het tijdelijke WhatsApp-nummer is niet het eigen nummer van StarTransfer. Algemeen WhatsApp-contact: +31 6 84002350.

## Resterende SEO-werkzaamheden

1. Branch en eventuele Cloudflare-preview beoordelen; na goedgekeurde merge productie apart verifiëren en deze sectie bijwerken met commit/deployment en controle-datum.
2. Na publicatie de tien pagina's inspecteren op bereikbaarheid, canonical, title, FAQ, WhatsApp en formulierroutering; sitemap-status controleren.
3. Na 28 volledige dagen vanaf publicatie dezelfde GSC-pagina's vergelijken op klikken, vertoningen, CTR en positie. Publicatiedatum is nog niet vastgesteld.
4. Leeuwarden en Utrechtse Heuvelrug volgen op ongewenste geografische zoekopdrachten; zo nodig bestaande interne linkstructuur verder aanscherpen.
5. Oude URL's zoals `/steden/den-haag/` en `/steden/Apeldoorn` controleren op passende redirects/canonical: ze komen nog voor in GSC. Geen redirects aangepast in fase 1.
6. Volgende gemeentepagina's op basis van nieuwe GSC-data selecteren, vervolgens provincie- en dienstpagina's verbeteren.

## Volgende opdracht

**Beoordeel SEO-fase 1 op de branch `seo/fase-1-steden-2026-10-13`, controleer een eventuele Cloudflare-preview en bereid publicatie van de tien pagina's voor.** Na merge/publicatie de productiecontrole uitvoeren en PROJECT_STATUS.md bijwerken met bewezen online-status. Ga pas daarna verder met de volgende GSC-selectie.
