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

Update websiteaudit 13 oktober 2026: SEO-fase 1 is inmiddels naar main gemerged als `286c176`. De live SEO-crawl bevestigt de nieuwe titels op de gecontroleerde stadspagina’s. Alle 577 huidige gegenereerde adressen hebben een HTTP 200 eindstatus. Dit vervangt de eerdere beperking van de 403-controle; exact Cloudflare deployment-ID/volledige productiecommit is niet bevestigd.

Auditdocumentatie staat uitsluitend op `audit/websitecontrole-2026-10-13`. Er zijn door de audit geen websitewijzigingen gepubliceerd, geen partnergegevens aangepast en geen echte aanvragen verstuurd. Twee oude adressen geven live 404. Zie `WEBSITE_AUDIT.md` voor bewijs en beperkingen.

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

## 13 oktober 2026 — volledige websiteaudit

- Bron/main `286c176` en 577 live adressen onderzocht. Build, bestaande SEO/linkchecks en lokale gemockte offerte-API geslaagd.
- Rapport: `WEBSITE_AUDIT.md`; auditbranch `audit/websitecontrole-2026-10-13`.
- Belangrijkste bevindingen: twee oude 404-URL’s; drie oude sitemapindieningen met fouten; acht extra Brabantse plaatsen met algemeen WhatsApp-nummer; verschillende partneraanvraagroutes; formulier-/mailbetrouwbaarheid; overlap lokale teksten; Zeeland nog onbekend bij Google; zware beelden.
- Partnernummers behouden. StarTransfer loopt handmatig via eigenaar; Westland heeft geen directe e-mailroute in onze API. Eigen partnerwebsites blijven bestaan.
- GSC alleen `sc-domain:partybusnederland.nl`, laatste 28 afgeronde dagen. Geen andere sites geanalyseerd of gewijzigd in deze audit.
- Mobiele visuele QA, Core Web Vitals, live Resend/Functions-settings en volledige indexering niet bevestigd. Externe links gedeeltelijk gecontroleerd. Het rapport onderscheidt signalen van bewezen fouten.

## Volgende opdracht

**Eerst WEBSITE_AUDIT.md beoordelen en bepalen welke verbeteringen mogen worden uitgevoerd.** Aanbevolen: oude 404-URL’s en sitemaps, daarna partnerroutering/aanvragen, daarna lokale SEO en afbeeldingen. Geen nieuwe pagina’s, partnerwijzigingen of publicatie zonder vervolginstructie. De eerdere opdracht om meteen verder te publiceren is hiermee vervangen.

## 13 oktober 2026 — herstel na audit (opdracht Johan)

Branch: `fix/website-audit-2026-10-13`. Website-aanpassingen zijn door Johan na beoordeling van de audit opgedragen.

- Permanente redirects voor historische stadadressen en oude sitemapadressen toegevoegd; uitsluitend naar bestaande pagina’s.
- Acht extra Brabantse plaatsen krijgen de bestaande Prestige-WhatsApp/offertekoppeling. Geen partnernaam, nummer of e-mailadres gewijzigd.
- Westland-partner toegevoegd aan expliciete e-mailallowlist. Utrecht/Amsterdam- en Zuid-Holland-formulieren en offerteknoppen behouden hun regio via partner-ID. Externe links naar partnerwebsites blijven. StarTransfer behoudt handmatige doorsturing.
- Datum, groepsgrootte en veldlengten server-side gecontroleerd; formulierfallback zonder JavaScript.
- Resend-verzending met vaste idempotency keys per aanvraag/ontvanger, time-out en begrensde retries. Mislukte partnerdoorsturing meldt handmatige actie aan eigenaar. Klantmailfout leidt na ontvangst door eigenaar niet tot een nieuwe inzending. Geen echte e-mails verzonden.
- Lokale vertrekintentie op elf bestaande stadspagina’s aangescherpt, inclusief Dordrecht; geen nieuwe routes. Langere titels krijgen geen extra merksuffix; homepage-title korter.
- Eigen Organization-logo en Article-image aangevuld; StarTransfer-logo in service-schema. Decoratieve lege altteksten en privé dashboard noindex behouden. Generieke hero-alttekst beschrijft geen niet-afgebeeld plaatselijk monument.
- Generieke PNG-hero vervangen door WebP-variant met hetzelfde beeld: 2,75 MB naar 273 kB. Zes zware stadsbeelden op dezelfde URL opnieuw als echte WebP gecomprimeerd: 15,17 MB naar 1,49 MB samen. Logo-dimensies toegevoegd.
- Build: 577 pagina’s; SEO-audit, link/assetcheck en diff-check geslaagd. 23 bestaande tests geslaagd via bundling. Aanvullende gemockte offertests controleren vier partners, foutafhandeling, validatie, idempotency en native fallback.

### Publicatiestatus herstel

Herstelvoorstel #2 is gemerged als `c57d9b05363d400c702e5d08f555b985a1611659`. Cloudflare Pages meldt succesvolle productiebuild/deploy `8355e2f9-e05f-4698-8c48-7727a2842706`. Livecontrole op 13 oktober 2026 bevestigt redirects Den Haag/Apeldoorn, Prestige op Zevenbergen en gewijzigde regionale formulieren. Preview/browsercontrole: geen ontbrekende beelden op gecontroleerde pagina’s, geen site-JavaScriptfouten gezien; mobiele viewport en veld-CWV blijven onbevestigd.

Sitemap `https://www.partybusnederland.nl/sitemap.xml` opnieuw ingediend op 13 oktober 2026, 08:10 UTC: geaccepteerd, pending, geen gemelde fouten op dat moment. Dit is geen bevestiging dat Google alle pagina’s geïndexeerd heeft.

Livecontrole vond nog een algemene header-offerteknop. Aanvullende herstelbranch `fix/regionale-header-2026-10-13` geeft de bestaande pageQuoteHref door aan desktop- en mobiele headerknoppen. Geen nieuwe routes of partnerwijzigingen.

### Resterende beperkingen

De drie oude sitemapindieningen zijn niet uit het Search Console-dashboard verwijderd; hun URL’s krijgen redirects zodra code live is. CrUX en mobiele visuele controle zijn niet beschikbaar. Live Resend-verificatie/configuratie, mailaflevering en complete indexering zijn niet bevestigd. Er zijn gerichte lokale SEO-verbeteringen gedaan; niet alle herhaalde uitleg op 352 steden herschreven. Google-effect pas na publicatie en voldoende meettijd beoordelen.

### Volgende opdracht na herstel

Productiecontrole van redirects, acht extra Brabantse plaatsen, vier partnerformulieren en nieuwe beeldbestanden. Daarna sitemapverwerking/Zeeland-indexering en aanvullende mobiele/CWV-controle.
