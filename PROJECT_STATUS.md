# Blogplanning 19 oktober 2026 — Prestige / Noord-Brabant

- Website: https://www.partybusnederland.nl; oorspronkelijk gepland `2026-10-19T12:00:00+04:00`.
- Titel: **Bruiloft in Brabant: dag- en avondgasten in één vervoersplan**.
- URL: https://www.partybusnederland.nl/kennisbank/bruiloft-brabant-dag-avondgasten-vervoer/
- Bron: `src/data/kennisbank/articles/bruiloftBrabantGasten.ts`, bestaande MasterKennisbankArticle-template, eigen route en kennisbankregister. Contextlink vanaf de provinciepagina Noord-Brabant; overzicht en sitemaps nemen het register over.
- Werkbranch `blog/2026-10-19-bruiloft-brabant`, vanaf actuele main `7667ff6d90deab4474064344e4fcfaaf6e803927`. De vier extra blogs van 18 oktober blijven behouden en tellen niet als deze geplande publicatie.
- Unieke invalshoek: dag- en avondgasten afzonderlijk tellen en transfers tussen ceremonie, diner, feest en retour afstemmen. Geen evenementdata, tarieven, voertuigbeschikbaarheid of lokale vestigingen verzonnen.
- Echte bestaande Prestige-foto's; primaire bron-URL staat in `publication.photoSource`. Foto's zijn geen bewijs van een specifieke bruiloft of voertuigreservering.
- Juiste partnerofferte en bestaande gedeelde WhatsApp-pop-up met 31629041798 en herkomst PartybusNederland.nl. Alle partnerdata, overige routes, formulieren, Functions en tracking ongewijzigd. Geen echte aanvragen of berichten verzonden.
- Validatie: npm ci/build; 583 pagina's; bestaande SEO-audit, interne link-/assetcontrole en vier-partner WhatsApp-test geslaagd. Nieuwe HTML heeft één H1, juiste canonical, Article/FAQ-schema, foto-assets en precies één partnerdialoog met het juiste nummer.
- Status: **live bevestigd**. Voorstel #17 gemerged als `b99357656dec1d7c4bd5d65fae40165e942ab267`; Cloudflare Pages deployment `19e52c71-ed69-43bc-ae88-240447c45a7d` geslaagd. De echte publieke URL geeft HTTP 200, één H1, juiste canonical, foto en precies één WhatsApp-dialoog met 31629041798. Bij herhaling geen extra artikel voor 19 oktober maken.

# SEO-uitbreiding vier partnerregio’s — 18 oktober 2026

Opdracht Johan: de aanbevelingen voor Amsterdam, Utrecht, Noord-Brabant en Zuid-Holland uitvoeren. Werkbranch `seo/vier-regios-2026-10-18`, basis main `7dd1c18`. Vier regio’s bij drie bedrijven: Party Bussen Westland voor Amsterdam/Utrecht, Prestige voor Noord-Brabant en Tourgo voor Zuid-Holland. Zeeland blijft ongewijzigd.

- Acht bestaande stadspagina’s krijgen aanvullende lokale planningsuitleg: Amsterdam, Utrecht, Breda, Rotterdam, Oss, Tilburg, Den Haag en Leiden. Breda en Rotterdam krijgen uitgebreidere uitleg over route, opstapgroepen en terugrit. Bestaande titels, URL’s en FAQ’s blijven behouden na de recente verbeteringen van 15 oktober; geen onnodige herhaalde titelwijzigingen.
- Vier ondersteunende kennisbankblogs met afzonderlijke planningsvragen: opstappen Amsterdam, bedrijfsuitje/terugrit Utrecht, festivalvervoer/opstapplaatsen Brabant en meerdere opstapplaatsen Zuid-Holland. Bestaande echte partnerfoto’s, correcte partnerofferte en hetzelfde WhatsApp-keuzevenster. Geen prijzen, vestigingen of beschikbaarheid verzonnen.
- Wederzijdse contextlinks tussen de acht steden en hun nieuwe regionale artikel; de drie bestaande partnerartikelen verwijzen ook naar de nieuwe uitleg. Register, kennisbankoverzicht en beide sitemaps nemen de vier artikelen automatisch mee.
- Bestaande blogplanning niet gewijzigd of vervangen. Deze vier artikelen zijn een afzonderlijke SEO-uitbreiding op uitdrukkelijk verzoek; geen nieuwe automation aangemaakt.
- Validatie: build geslaagd met 582 pagina’s; SEO-audit, interne link-/assetcheck en vier-partner WhatsApp-tests geslaagd. Gerichte HTML-vergelijking van acht steden bevestigt identieke bestaande offerte-/WhatsApp-links, formulieren, dialogattributen en canonicals; één H1 en zichtbare FAQ-antwoorden gelijk aan JSON-LD. Vier nieuwe blogs gecontroleerd op partnerofferte, precies één dialoog, partnernummer, foto-assets en geldige JSON-LD.
- Geen berichten of echte aanvragen verstuurd. Browser/mobile QA niet beschikbaar. Publicatie wordt pas na afzonderlijke Cloudflare-bevestiging als geslaagd gemeld. Geen hogere ranking geclaimd; effect later per vergelijkbare meetperiode beoordelen.

### Publicatie en domeincontrole bevestigd

Voorstel #16 gemerged als `b1ee333e77159699a4f33225641a8df706138cef`. Cloudflare Pages bevestigt succesvolle productie-deployment `44c6e238-5a84-4467-b97b-d98175a0ef3d` op 18 oktober 2026. De gepubliceerde sourcetree `32e10357046f8c21ee2fe8a95a47310fa1b9f3d4` is exact gelijk aan de lokaal gecontroleerde versie.

Rechtstreekse HTTP-controle op `https://www.partybusnederland.nl` bevestigt voor alle acht aangepaste steden én alle vier nieuwe blogs HTTP 200, de nieuwe inhoud, precies één H1 en de juiste canonicalverwijzing. De vier artikelen staan onder `/kennisbank/opstapplaats-partybus-amsterdam-kiezen/`, `/kennisbank/bedrijfsuitje-utrecht-partybus-terugrit-plannen/`, `/kennisbank/festivalvervoer-brabant-groep-opstapplaatsen/` en `/kennisbank/partybus-zuid-holland-meerdere-opstapplaatsen/`.

Johan heeft expliciet bevestigd de wijzigingen zoals gebruikelijk te publiceren. Geen berichten of aanvragen verstuurd. Interactieve mobiele browser-QA en rankingverbetering blijven niet bevestigd; publicatie en zichtbare nieuwe HTML zijn wel geverifieerd.

# Partybus Nederland — officieel beheerproject

## 16 oktober 2026 — WhatsApp-invulvenster algemeen kennisbankartikel

- Opdracht Johan: op `/kennisbank/groepsgrootte-wijzigen-na-partybus-offerte/` hetzelfde WhatsApp-keuzevenster gebruiken als op de partnerpagina’s.
- Bestaande gedeelde component hergebruikt voor het algemene contact Partybus Nederland; nummer uit `src/data/settings/whatsapp.ts` blijft `31684002350`. Dit contact wordt niet als StarTransfer toegewezen.
- Naam, aanvraagtype, datum, groepsgrootte, opstapadres, bestemming, terugreis en wensen gaan mee in het conceptbericht. Herkomst PartybusNederland.nl en exacte artikel-URL blijven opgenomen. Alleen de bezoeker verstuurt het bericht.
- Geen partnernummer, formulier, tracking of overige artikelinhoud gewijzigd. Componentwijziging betreft alleen de TypeScript-props voor het algemene contact; bestaande partnergedrag blijft identiek.
- Validatie en Cloudflare-publicatie worden apart bevestigd. Geen echte aanvraag of WhatsApp verstuurd.

## Blogpublicatie 16 oktober 2026 — algemeen

- Website: `https://www.partybusnederland.nl`; oorspronkelijke planning: `2026-10-16T12:00:00+04:00`.
- Titel: Meer of minder deelnemers na je partybusofferte: wat regel je?
- Artikel: `/kennisbank/groepsgrootte-wijzigen-na-partybus-offerte/`.
- Bron: `src/data/kennisbank/articles/groepsgrootteWijzigen.ts` en bijbehorende bestaande kennisbanktemplate; register en homepage-contextlink toegevoegd. De bestaande XML- en HTML-sitemaps gebruiken het register automatisch.
- Branch: `blog/2026-10-16-groepsgegevens`. Nieuw artikel, geen vervanging van homepage of bestaande gidsen. Werkelijke bestaande Prestige-partnerfoto; geen nieuwe prijs-, capaciteits- of beschikbaarheidsclaims.
- Validatie: npm ci/build geslaagd, 578 pagina’s; SEO-audit, interne link-/assetcheck en vier-partner WhatsApp-tests geslaagd. Nieuwe canonical en JSON-LD gecontroleerd. Geen formulieren ingediend of berichten verstuurd; partnernummers en integraties ongewijzigd.
- Publicatiestatus: klaar voor wijzigingsvoorstel en deployment; productie wordt pas na afzonderlijke verificatie als bevestigd gemeld. Herhaal bij een onderbroken uitvoering alleen de ontbrekende deploymentcontrole, niet het artikel.

Laatste update: 15 oktober 2026. Dit bestand is het startpunt voor vervolgwerk vanuit ChatGPT Work.

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

### Definitieve herstelpublicatie

Aanvullende headercorrectie uit voorstel #3 is gemerged als `e06bc7308943b1f1d6417743ff1e9b0f544cc28d`. Cloudflare-productiedeploy `55c3b2f3-51e3-481b-a27d-f52ceccb22b8` is geslaagd. Live browsercontrole bevestigt op Utrecht twee regionale offerteknoppen (desktop/mobiel) met `partner=party-bussen-westland` en de juiste bronpagina. Geen ontbrekende afbeeldingen op de gecontroleerde pagina. Geen offerte of WhatsApp-bericht verzonden.

De technische herstelversie staat online. Sitemap opnieuw geaccepteerd, nog pending bij Google. Overige open beperkingen hierboven blijven gelden. Deze laatste documentatie-update wijzigt geen websitecode.

## 13 oktober 2026 — Breda versterken

Opdracht Johan: bestaande Breda-pagina sterk verbeteren. Branch `seo/breda-versterken-2026-10-13`. Alleen GSC van PartybusNederland.nl gebruikt; Breda-pagina gefilterd, laatste 28 afgeronde dagen (13 september–10 oktober). Geen ruwe zoekstatistieken in GitHub opgeslagen.

- Zoekintentie: partybus huren Breda, feestbus huren Breda, discobus Breda; titel, description en lokale inhoud daarop afgestemd.
- Algemene SEO-overlay overschreef Breda-hubcopy; Breda behoudt voortaan zijn eigen lokale inhoud. Zichtbare copy en JSON-LD komen uit dezelfde data.
- Uitleg over vertrekgebieden, meerdere stops, groepsgrootte, prijsfactoren, heen-/terugreis en voorzieningen. Bestaande route- en informatiepagina’s intern gekoppeld.
- Praktische offertelijst en partner-CTA’s toegevoegd. Geen verzonnen tarieven, busbeschikbaarheid, lokale vestiging of nieuwe klantreviews.
- 13 zichtbare FAQ-vragen/antwoorden exact gelijk aan FAQ-schema; Service-schema met Breda als werkgebied en werkelijke partneradres in Baarle-Nassau.
- Social sharing gebruikt de bestaande Prestige-hero van de pagina. Bestaande partnerbeelden, nummer +31 6 29041798, formulier/API en offerte-ID behouden.
- Build: 577 pagina’s. SEO/link/assetchecks en diff-check geslaagd. Alleen de gegenereerde Breda-HTML verschilt; de overige 576 HTML-bestanden zijn byte-identiek aan de voorafgaande build.
- Geen nieuwe pagina’s, externe testaanvragen of berichten. Publicatie wordt apart geverifieerd; Google-effect pas na voldoende meettijd beoordelen.

Volgende stap: Cloudflare-preview en productie controleren; vervolgens Breda na 28 volledige dagen volgen op relevante klikken, vertoningen en CTR. Mobiele/CWV- en mailafleveringsbeperkingen uit de audit blijven gelden.


### Breda daadwerkelijk gepubliceerd

Voorstel #5 gemerged als `8b4f80eefd4352f110031adf5a2425ae740fe848`. Cloudflare-productiedeploy `d1463528-b7ba-4c92-a81b-45d01c1ab161` geslaagd. Live browsercontrole op 13 oktober bevestigt de nieuwe Breda-title, lokale prijs-/planningssectie, 13 FAQ’s en nul ontbrekende afbeeldingen op `https://www.partybusnederland.nl/steden/partybus-huren-breda/`. Previewcontrole bevestigt openende FAQ en regionale partnerofferteknoppen. Geen echte aanvraag verzonden. Dit is bewijs van publicatie, geen bewijs van hogere Googleposities.

## 13 oktober 2026 — WhatsApp-keuzevenster Breda

Opdracht Johan: bezoekers laten aangeven dat zij via onze site komen, hun naam opnemen en kiezen waarvoor zij contact opnemen. Branch `feature/breda-whatsapp-keuze-2026-10-13`.

- Alle gewone WhatsApp-klikken naar het bestaande Prestige-nummer op de Breda-pagina openen een keuzevenster. Naam optioneel, aanvraagtype, datum, groepsgrootte, vertrekadres, bestemming, terugreis en wensen.
- Bericht vermeldt expliciet `PartybusNederland.nl, de pagina voor Breda`, ingevulde naam en gekozen aanvraagtype. Een WhatsApp-profielnaam kan niet automatisch worden opgehaald.
- Alleen de bezoeker opent vervolgens het concept in WhatsApp en verzendt het zelf. Formuliergegevens worden niet naar onze offerte-API of een database gestuurd. Bestaande WhatsApp-clicktracking blijft clicktracking, geen bewijs van verzonden berichten.
- Prestige-nummer +31 6 29041798 en offerte-/e-mailroutes behouden; andere pagina’s niet gewijzigd. Zonder JavaScript blijft de bestaande WhatsApp-link werken.
- Build 577 pagina’s; SEO/link/assetchecks en diff-check geslaagd. Geen bericht verstuurd. Preview en publicatie apart te verifiëren.


### WhatsApp-keuze Breda live bevestigd

Voorstel #7 gemerged als `40099f2ab7bb3ea7f14722e9aa249fee2d83333f`. Cloudflare-productiedeploy `fab283ce-76fb-4c56-8afa-7ba8f6506dab` geslaagd. Browsercontrole op eigen domein: Prestige-knop opent keuzevenster, naamveld ingevuld met fictieve testnaam, festivalkeuze geselecteerd en venster gesloten. Niet doorgegaan naar WhatsApp en geen bericht verstuurd. De ingevulde naam verschijnt in het conceptbericht, niet automatisch als WhatsApp-profielnaam.

## 13 oktober 2026 — WhatsApp-keuzevenster alle vier partners

Opdracht Johan: hetzelfde WhatsApp-icoon en invulvenster op alle partnerpagina’s. Branch `feature/alle-partners-whatsapp-keuze-2026-10-13`.

- Centrale partnerresolver gebruikt bestaande partnerdata, trackingcontext, regionale footer en vier samenwerkingsartikelen. Algemene eigenaarcontactpagina’s worden niet als StarTransfer toegewezen op basis van het gedeelde tijdelijke nummer.
- Eén gedeeld keuzevenster met naam, aanvraagtype, datum, personen, vertrekadres, bestemming, terugreis en wensen. Naam is vrijwillig; geen automatisch opgehaalde profielgegevens.
- Bericht noemt PartybusNederland.nl, vertrekplaats/regio, exacte bronpagina, juiste partner en ingevulde gegevens. Geselecteerde festivals en de bestaande festivallijst blijven behouden.
- Zelfde bestaande groene zwevende icoon op alle partnerpagina’s; gewone partner-WhatsApp-links openen ook het venster. Zonder JavaScript blijft de directe link werken. StarTransfer gebruikt expliciet het bestaande tijdelijke beheerdersnummer; overige drie eigen partnernummers behouden.
- Bestaande StarTransfer-ritformulier/WhatsApp-knop blijft zijn ingevulde ritgegevens rechtstreeks doorgeven. Geen offerte-/e-mailroute aangepast en geen extra databaseopslag.
- Statische controle: 318 partnerpagina’s met exact één venster en passend zwevend nummer: Prestige 114, Tourgo 79, Party Bussen Westland 83, StarTransfer 42. Alle bestaande titles en H1’s gelijk gebleven.
- Build 577 pagina’s; SEO/link/assetchecks, diff-check en vier-partner message/routering/festivaltests geslaagd. Geen berichten verstuurd. Publicatie/livecontrole worden afzonderlijk geregistreerd.


### Alle partner-WhatsAppvensters daadwerkelijk live

Voorstel #9 gemerged als `04c3eb05ea8fab6e7fed43a3042404f1f8ba89cf`. Cloudflare-productiedeploy `28212417-0f55-4448-a2d3-dd2b21b01368` geslaagd. Live browsercontrole op de vier provinciepagina’s bevestigt dat het zwevende icoon het venster voor respectievelijk Prestige Coach Service, Tourgo Partybussen, Party Bussen Westland en StarTransfer opent. StarTransfer toont expliciet de tijdelijke route via Partybus Nederland. Alle vensters weer gesloten; geen berichten verstuurd.

Partnerdata blijven server-side; de browser gebruikt alleen de lichte berichtbouwer. Bestaande 577 pagina’s blijven bereikbaar via dezelfde URL’s. Statische controle dekt 318 partnerpagina’s; interactieve livecontrole is steekproefsgewijs één per partner.

## 15 oktober 2026 — lokale SEO-kansen versterken

Opdracht Johan: bestaande pagina’s gericht bijwerken voor betere zichtbaarheid. Branch `seo/lokale-kansen-2026-10-15`. Uitsluitend query/pagina-rapport van `sc-domain:partybusnederland.nl`, web, 14 september–11 oktober 2026. De door Johan geplakte cijfers hebben een onbekende periode en zijn niet als vergelijkbare nulmeting gebruikt. Geen ruwe analytics in GitHub opgeslagen.

- Acht bestaande stadspagina’s: Oss, Tilburg, Amsterdam, Utrecht, Westland, Leiden, Rotterdam en Den Haag. Lokale vertrekintentie, verzameladressen, prijsfactoren, groepen 20/30/40 en terugrit verduidelijkt. Titles/descriptions aangepast; geen verzonnen tarieven, beschikbaarheid of vestigingen.
- Zichtbare FAQ en bestaande FAQ-schema gebruiken dezelfde aangepaste citydata. Breda’s eerder gemaakte uitgebreide copy blijft intact.
- Negen stadspagina’s (inclusief Breda) krijgen contextlinks naar bestaande prijs-, bedrijfsuitje-, vrijgezellenfeest-, partner- en festivalinformatie.
- Search Console liet andere URL’s bij sommige stadsqueries zien. Maashorst, Leeuwarden en Utrechtse Heuvelrug krijgen een expliciete verwijzing naar respectievelijk de vertrekpagina Oss, Leiden en Utrecht stad. Dit is een relevantiesignaal, geen bewezen oplossing voor zoekwoordconcurrentie.
- Geen nieuwe routes, redirects, partnergegevens, WhatsApp-nummers, offerte-/e-mailroutes of tracking gewijzigd. Backlinks zijn niet aangevraagd en er zijn geen berichten verstuurd.
- Build 577 pagina’s; SEO-audit, interne link-/assetcheck, vier-partner WhatsApp-test en diff-check geslaagd. HTML-vergelijking bevestigt behoud van partnerlinks, formuliervelden, dialogattributen en canonicals. Inhoud verschilt op 12 pagina’s; overige verschillen betreffen de gedeelde CSS-verwijzing/scoping.
- Publicatie en livecontrole nog afzonderlijk te bevestigen. Geen claim van hogere Googleposities. Effect beoordelen na ten minste 28 volledige dagen na publicatie, per pagina en query met vergelijkbare periode/filters.


### Lokale SEO-publicatie bevestigd

Voorstel #11 gemerged als `c6ef31595a45999dbf11b86d7f501c9c2a64dc50`. Cloudflare-productiedeploy `be664160-3a17-4709-9b5b-ac597820ac25` geslaagd. Live browsercontrole op 15 oktober (Dubai) bevestigt nieuwe inhoud op alle twaalf genoemde pagina’s: acht nieuwe titles, negen planningslinksecties, drie vertrekplaatsverwijzingen, telkens één H1. Bestaande partnerdialogen tonen de juiste nummers; op geladen beelden geen ontbrekende afbeeldingen gezien. Alle acht aangepaste FAQ-lijsten lokaal exact vergeleken met JSON-LD. Geen berichten of aanvragen verstuurd. Volledige mobiele visuele QA/CWV en hogere Googleposities zijn hiermee niet bevestigd.


### Bevestiging blogdeployment 16 oktober 2026

Algemeen artikel: **Meer of minder deelnemers na je partybusofferte: wat regel je?** Oorspronkelijke planning `2026-10-16T12:00:00+04:00`; URL `https://www.partybusnederland.nl/kennisbank/groepsgrootte-wijzigen-na-partybus-offerte/`.

Voorstel #13 gemerged als `08f3206f79d6aed5f23295e4542ad0012493092e`. Cloudflare Pages bevestigt succesvolle deployment `ffdfa3ec-2db9-4bd6-b77d-adf0e780c202`. Build, SEO, links/assets en vier-partner WhatsApp-tests geslaagd. Vergelijking met de 577 eerdere pagina’s bevestigt identieke titles/H1/canonicals/formulierattributen/WhatsApp-links/dialog-ID’s; alleen homepage, kennisbankoverzicht en HTML-sitemap hebben toegevoegde verwijzingen. Geen berichten verstuurd. Rechtstreekse publieke domeincontrole is vanuit deze uitvoeromgeving niet bevestigd; HTTP-controle geblokkeerd. Een hostingbevestiging wordt niet als interactieve live browsercontrole omschreven. Maak geen tweede artikel voor deze planningsdatum.


### Publicatie WhatsApp-artikelcorrectie bevestigd

Voorstel #14 gemerged als `488626c2312991ad485ff301d217a7b02ae41962`. Cloudflare-productiedeploy `837e53aa-9867-4ec7-96f4-7b331e5cdae5` geslaagd op 16 oktober 2026. Build/SEO/link/asset-/partnercontroles geslaagd. Het algemene artikel heeft exact één gedeeld WhatsApp-keuzevenster met het bestaande beheerdersnummer, alle acht velden en de exacte bron-URL; bestaande pagina’s behouden partnernummers en contactroutes. Interactieve live browsercontrole niet beschikbaar en niet geclaimd. Geen berichten verstuurd.

## 17 oktober 2026 — TC Specialistische Reiniging in centrale WhatsApp-teller

Opdracht Johan: SchoonVakmannen-partner TC toevoegen aan dezelfde teller. Aparte allowlisted cross-origin ontvangstfunctie voor de bestaande D1-tabel, met partner-ID tc-specialistische-reiniging en de bestaande 180 partnerpagina’s. Geen migratie of wijziging aan bestaande partybusontvangstcode. Dashboard krijgt partner en Limburg-filters en opent TC-bronpagina’s op schoonvakmannen.nl. Algemene partnerpagina’s zijn herkenbaar als Noord-Brabant en Limburg; geen verzonnen provincie toegewezen. Geen naam, klusomschrijving of antwoorden opgeslagen.

Build 578 pagina’s, SEO/link/assetcontroles en bestaande vier-partnertests geslaagd. Nieuwe ontvangstfunctie gebundeld en gemockt gecontroleerd op Brabant/Limburg, onbekende oorsprong/pagina, preflight en opslag. Geen live meetrecords of berichten aangemaakt. Publicatie nog afzonderlijk bevestigen.
