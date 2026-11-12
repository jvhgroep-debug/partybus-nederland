# Herstel slot11november — public-verified

2026-11-12T00:09:02.755660+00:00: Cloudflare preview and production completed/success. Real-domain article singleH1/canonical/Article actual date/loaded1920px partner photo/OG/no caption, kennisbank, Zuid-Holland context and actual sitemap.xml verified. Tourgo questions window opened/closed with correct31623044970 and origin; latest full questions retained. No requests or messages sent. PR44, productiecommit 15b80086898e871d54c14b04a3935b784104133a, deployment 8209d4a2-9d3c-4a1d-9b0e-fb5ec6bfebbd. Originele11novemberpositie en werkelijke12novemberdatum behouden. Geen nieuwe donderdagpositie. Volgende13novemberWestlandUtrecht. Alleen broncheckpoint, geen extra deployment.

Checks12november:598pagina’s build/SEO, nul ontbrekende assets/interne links, vier-partner WhatsApp/encodingtests geslaagd. Nieuw artikel éénH1/canonical/Article werkelijke datum/foto/OG/geen bijschrift/bron en Tourgo-quoteparameters gecontroleerd. Lokale preview stopt door achtergronddraaiende Astro; configuratie behouden, Cloudflarepreview en echt domein volgen.

# Herstel oorspronkelijk slot11november — source-written

Dezelfde partybusaanvraag via formulier én WhatsApp: wat doe je nu?
https://www.partybusnederland.nl/kennisbank/partybus-aanvraag-formulier-whatsapp-dubbel/

Compared live kennisbank, existing regional/partner/service material and source guides. Existing multiple-stop guidance warns against multiple applications but does not address recovery after the same enquiry was already sent through two channels, identifying recipient/version and separating receipt/offer/booking. No automatic backend behaviour or cancellation policy invented.

Origineel11november04:00 en werkelijke datum12november apart. Laatste publicatie9novemberPrestige; daaromTourgo. Reductie/15vervallen posities behouden. Nieuwste formulierenwijzigingenPR42/43 behouden. Publicatie na branch/build/merge/domeincheck; published false.

# 11 november 2026 — aankomstdatum overal verwijderd (live)

Johan vraagt de aankomstdatum bij ‘Bestemming en terugreis’ overal te verwijderen; datum terugrit/ophalen en retourtijd blijven staan. De gedeelde component past alle 420 openbare aanvraagformulieren aan; ook de directe WhatsApp-invultekst verliest deze extra vraag. Servercompatibiliteit voor reeds geopende formulieren blijft behouden zodat eerder ingevulde gegevens niet worden weggegooid. Partnernamen, nummers, bronwebsite en routes behouden. Kleine opvolgcorrectie op de zojuist goedgekeurde live formulieren; direct publiceren na build-/rendercontrole. PR43 samengevoegd als `c4c9612291bdc4d31dcfba24595dde86df76abfb`; Cloudflare-productie `91318602-9dda-491f-9ad8-afe8057d72b2` completed/success. Echte domeincontrole 2026-11-10T20:36:08.307Z (11 november Dubai) bevestigt bij de vier partners, Amsterdam en de landelijke offertepagina: geen aankomstdatum, retourdatum en retourtijd behouden; partnernamen/nummers en canonicals kloppen. Geen echte aanvragen of berichten verstuurd.

# 11 november 2026 — uitgebreide partnerformulieren live bevestigd

Johan heeft na de getoonde preview expliciet ‘oke zet live’ opgedragen. PR42 met head `12bb2164fef2aecf6f0ce04d12b289f38fa7ded6` samengevoegd als `afe24966081d63ec144262063d134a5e8de11c01`; main was nog gelijk aan de gecontroleerde basis. Cloudflare-productiedeployment `4154ff27-5bd9-44af-913c-c2e65198cb28` completed/success.

Echte domeincontrole 2026-11-10T20:05:39.923Z (11 november 00:05 Dubai): Utrecht, Noord-Brabant, Zuid-Holland, Zeeland en Amsterdam HTTP200; volledige vragen in offerte-/boekingsformulier én WhatsApp-dialogen, juiste partners/nummers, canonicals en geen noindex-header. Gecontroleerd artefact bevat 420 openbare formulieren op 597 pagina’s. Eerdere native/JSON/mail/WhatsApp-tests en browserpreview blijven van toepassing; geen echte aanvraag, e-mail of WhatsApp verstuurd. Geen afzonderlijke mobiele visuele eindcontrole geclaimd. Eigen partnernamen, routes en PartybusNederland.nl/herkomst blijven behouden. Alleen statuscheckpoint, geen tweede inhoudspublicatie.

# 10 november 2026 — volledige vragen in alle aanvraagformulieren, preview (historie)

- Johan vraagt alle formulieren op PartybusNederland.nl uit te breiden met de vragen van https://startransfer.nl/offerte/, met behoud van eigen partnernaam en websiteherkomst. Bestaande GitHub/Cloudflare-route; branch `forms/volledige-ritaanvraag-2026-11-10`, basis `09ef996721e7cd74d1d3490a03380f0c8c3fb077`. Geen wijziging aan StarTransfer.nl zelf. Eerst preview ter beoordeling.
- Eén gedeelde vragenset voor gewone offertes, StarTransfer-boekingen en bestaande WhatsApp-dialogen: soort vervoer/reis, naam/bedrijf/e-mail/telefoon/gelegenheid/personen, klantadres, opstapdatum/tijd/adres/postcode/plaats, aankomstdatum/bestemmingsadres/postcode/plaats, terugdatum/tijd/afzetadres, busvoorkeur, kortingscode, opmerkingen en hoe gevonden. Klantadres en aanvullende details optioneel; bestaande verplichte contactvelden behouden. Geen arbitraire 80-persoonsgrens als voertuigbelofte.
- Partnernaam expliciet zichtbaar, ook na geldige partner-query op de landelijke offertepagina. Eigen partnernummers/e-mailroutering behouden; StarTransfer blijft tijdelijk via Partybus Nederland/handmatige doorsturing lopen. StarTransfer-modelsuggesties uitsluitend bij StarTransfer; andere partners hebben vrije busvoorkeur. Website PartybusNederland.nl en volledige bronpagina komen mee in e-mail en WhatsApp; geen persoonsgegevens in bronbestanden.
- Server verwerkt/valideert extra velden voor zowel JSON als native formulieren; alle antwoorden worden in owner-, partner- en klantmail opgenomen met HTML-escaping. Bron/partnernaam server-side bepaald. Bestaande honeypot, idempotency/retry en foutafhandeling behouden. WhatsApp bewaart festivalselecties; heen-/terugrit en alleen-ophalen blijven werken. Nationale fallbackberichttekst bevat dezelfde vragen.
- Tests: 597-paginabuild, SEO/link/assetchecks (0 kapot), vier-partner WhatsApp-/encodingtests, API-audittests en nieuwe uitgebreide JSON/native/WhatsApp-tests slagen met uitsluitend lokale mocks. Vier StarTransfer-reistests en 13 partnerrouteringtests geslaagd. Alle 420 openbare aanvraagformulieren, waaronder 337 WhatsApp-dialogen, bevatten de gedeelde vragen; beheerdersfilter uitgezonderd. Alle 597 titels/canonicals en sets WhatsApp-nummers gelijk aan basis. Geen echte e-mail, bericht of aanvraag verstuurd. Cloudflare-preview en browsercontrole volgen.
- Eerdere Utrecht-opdracht is al via PR41 live; PR35 is gesloten en wordt niet opnieuw gepubliceerd. Bestaande blogs, rooster, SEO-inhoud, andere contactbestemmingen, domein/DNS en hosting behouden.

# 9 november 2026 — Utrecht, 26 gemeenten en Amsterdam live bevestigd

PR41 gemerged als 76f94d75ca3113e6bde70a7096196f4f6e358d86 (inhoud 004bfe6ed30b494bb767374ef7b75e05c5ea196a). Cloudflare-preview 058ae8b7-64a4-4115-96c3-7d9829a12098 en productie 5e88ff30-ca9b-40e2-81ec-d02431096778 completed/success. Browser op echte www.partybusnederland.nl/provincies/utrecht/ en /steden/partybus-huren-amsterdam/ bevestigt nieuwe offerteknoppen, formulierhulp en leesbare WhatsApp-knop; Amsterdam #offerte bevestigd. Alle 28 doelpagina’s via gedeelde templates gebouwd en gecontroleerd; 597-pagina SEO/link/asset/partnerchecks geslaagd. Afzonderlijke HTTP-proef gaf 403; browsercontrole slaagde. Geen mobiele visuele eindcontrole of conversieverbetering gemeten/geclaimd. PR35 gesloten omdat inhoud is overgenomen in PR41. Geen aanvraag of bericht verzonden. Alleen statuscheckpoint; geen extra inhoudsdeployment.

# 9 november 2026 — Utrecht en Amsterdam, bron gereed

- Opdracht Johan: provincie Utrecht met alle steden en Amsterdam verbeteren voor meer passende ritaanvragen. Bestaande Utrecht-inhoud uit PR35 overgenomen op actuele main, zonder het verouderde statusbestand; PR35 wordt hiermee vervangen.
- Bereik: provinciepagina, alle 26 Utrechtse gemeentepagina’s en Amsterdam. Directe offerteknop bovenaan en bij de afsluiting, formulier vóór grote foto op mobiel, concrete ritgegevens als invulhulp en heldere uitleg dat een aanvraag nog geen boeking is. WhatsApp-knoppen hebben leesbaar contrast op donkere achtergrond.
- Provincie: praktisch vertrek-, route-, prijs- en terugritadvies; onderscheid provincie/stad; regionale interne links en zes FAQ’s uit dezelfde bron als schema. Alle 26 gemeentepagina’s verbonden met provincie, prijzen, gelegenheden en festivalinformatie. Bestaande lokale vertreknotities eerder op de pagina.
- Partnernummers, formulieractie/velden/bronattributen, WhatsApp-vragenvenster, URL’s en canonicals behouden. Geen nieuwe blogs, roosterwijzigingen, fictieve vestigingen, vaste prijzen of beschikbaarheidsclaims.
- Validatie: build 597 pagina’s; SEO-audit; nul ontbrekende assets en interne links; vijf commerciële hubs met zes gelijkluidende FAQ’s/schema; vier-partner WhatsApp- en encodingchecks. Alle 28 doelpagina’s gecontroleerd op H1-volgorde, offerteanker, formulieren, partner en FAQ/schema. Alle 597 pagina’s vergeleken op canonicals/contactbestemmingen/formulierattributen zonder afwijkingen. Browser: offerteanker en bestaand WhatsApp-venster Utrecht gecontroleerd; Amsterdam lay-out en knopcontrast visueel gecontroleerd. Geen aanvraag of bericht verstuurd. Productiecontrole volgt; effect op boekingen/rankings nog niet vastgesteld.

# 9 november 2026 — homepage en vertrekregio’s live bevestigd

PR40 gemerged als109b96c230c2004a92d700ccf60dfa24ba627fed. Cloudflare-preview1b96c281-a6f1-4e56-834b-e32aae6c0f83 en productie f8744698-fcd2-4bae-bed8-cae5b1f7b642 completed/success. Rechtstreekse HTTP-controle met status200 op echte www.partybusnederland.nl homepage en /provincies/ bevestigt nieuwe titles/H1, vier partnerkaarten en aanvraagchecklist. Build597pagina’s, SEO-, link-/asset-, FAQ/schema- en vier-partner WhatsAppchecks geslaagd. Bestaande canonicals/contact-/formulierbestemmingen behouden. Geen aanvraag of bericht verstuurd. PR35 Utrecht blijft apart. Uitsluitend statuscheckpoint; geen extra inhoudspublicatie. Rankingeffect nog niet vastgesteld.

# 9 november 2026 — homepage en vertrekregio’s, bron gereed

- Opdracht Johan: Partybus Nederland opnieuw optimaliseren na het weekrapport. Weektotalen bewijzen geen oorzaak per zoekvraag; deze wijziging verbetert bestaande pagina’s zonder een rankingherstel te claimen.
- Homepage: beschrijvende partybus-H1, title/meta rond prijs/bus/ritvoorwaarden en een regioselectie met namen uit de actuele partnerdata. Vier bestaande provincieroutes en Amsterdam; volledige provinciekeuze via het bestaande overzicht.
- Provincieoverzicht: heldere keuze op basis van vertrekplaats, alle twaalf provincies behouden en checklist voor opstapadressen, groepsgrootte, bestemming, terugrit en bevestiging van totaalprijs/voertuig/voorwaarden. FAQ verduidelijkt responstijd, capaciteit en feestbus/partybus; zichtbaar en schema uit dezelfde data.
- Geen nieuwe pagina’s of blogs. URL’s, canonicals, foto’s, partnernummers, aanvraagformulieren, WhatsApp-dialogen, Functions, tracking en rooster behouden. Bestaand Utrecht-voorstel PR35 blijft ongemoeid.
- npm ci/build, SEO-audit, interne links/assets en vier-partner WhatsApp/encodingchecks geslaagd. Alle 597 pagina’s vergeleken: alleen homepage-title/H1 en provincieoverzicht-title aangepast; alle canonicals en contact-/formulierattributen behouden. Negen zichtbare homepage-FAQ’s gelijk aan schema. Preview/merge/productiedomeincontrole worden afzonderlijk bevestigd.

# 9 november2026 — public-verified

Iets laten liggen in de partybus? Zo maak je een duidelijke melding
https://www.partybusnederland.nl/kennisbank/spullen-kwijt-na-partybusrit-brabant/

Cloudflare completed/success; real-domain single H1/canonical/Article actual date, loaded1600px partner photograph, overview, Brabant context, sitemap.xml and existing Prestige questions dialog/31629041798 verified. Footer quote route restored and verified with partner/city/source. No requests or messages sent. Productie 4802a9b16acf7a7ce5b37fdc39196189e864df32, deployment a7e42565-f0d8-46d7-8913-6ea1fba46245, controle 2026-11-09T00:12:58.344Z. Slot public-verified; geen extra artikel of metadata-herpublicatie. Geen afzonderlijke paginaverbeteringen of skipped-quality-slots.

# 9 november2026 — spullen na de rit, source-written

Origineel slot www.partybusnederland.nl|2026-11-09|1. Prestige volgt6NovemberAlgemeen; gereduceerd rooster gecontroleerd. Geen oudere open slots. Bestaande gidsen noemen kort achtergebleven spullen; nieuwe invalshoek is de concrete melding na afloop, met datum/ritdeel/kenmerken en bevestigde overdracht. Partnerbron limobus.nl en live kennisbank/Brabant gelezen. Geen nieuwe retour- of bewaarbeleidsclaims. Echte toegestane interieurfoto visueel gecontroleerd. WhatsApp31629041798 en bestaande routes behouden. Open Utrecht-PR35 blijft ongemoeid. Publicatie/echte domeincontrole nog te bevestigen.

# 8 november — roosterreductie gepubliceerd en gecontroleerd

2026-11-08T00:05:49.553057+00:00: PR37 gemerged als3e9e8591a94502fede600a48895a2f223288da8b. Preview0bf1dc99-1332-4e1c-bfd6-2d9e77c8056e en productiea1eb3863-b94a-4aad-8709-a8831c779965 completed/success.596-paginabuild, SEO/link/asset/WhatsApp- en datumgrenschecks geslaagd; bestaande6November-artikel op echte domein gelezen. Alleen kalender/selectie aangepast, geen nieuw artikel of pagina-inhoud. PR35 behouden. Metadatacheckpoint zonder nieuwe deployment.

# 8 november2026 — reductie naar drie blogs per week

Kalender vanaf8November uitsluitend ma/wo/vr; 15 toekomstige di/do-posities geannuleerd met originele ID en inhoud behouden. 23 resterende posities tot30December, categorieën doorlopend herverdeeld vanafPrestige, WestlandUtrecht eerst. Historische artikelen/datums/status behouden. Buildselectie controleert kalender, einddatum en tijdafscherming vóór render; cancelled/skipped-quality niet als achterstand selecteren. Geen nieuw artikel in deze wijziging. Eigen centrale run7b47ddb3-9ef4-8320-9189-b439cb73476d; vorige run afgerond. Vorige productie completed/success; geen Actions-workflows. PR35 apart behouden.

# 6 november — public-verified

2026-11-06T00:10:07.795560+00:00: Twee mogelijke vertrekadressen voor je partybus: hoe kies je er één?
https://www.partybusnederland.nl/kennisbank/partybus-twee-vertrekadressen-vergelijken/

Origineel vrijdag-slot 6 november 04:00 behouden; werkelijke artikelpublicatiedatum 2026-11-06T04:04:02.023729+04:00. PR36 gecontroleerd gemerged, inhoud fc20e4dd5f03badc2d2237d631d3515aeaa521b8, productie fdc61286f46c1240e221439a3d840b8936cf3a95, preview 4d7fbacb-bb59-40cf-b3c0-680d6fc43974 en productie 09ef409e-e8d4-4d56-b1d7-c3bdab679905 completed/success. Cloudflare productie completed/success. Echte www.partybusnederland.nl artikel-URL, unieke H1/title/meta/canonical/Article met werkelijke datum, OG en geladen partnerfoto 1140x475 zonder bijschrift bevestigd. Kennisbankoverzicht, homepagecontext en echte sitemap.xml met artikel gecontroleerd. Bestaand vragenvenster geopend en gesloten; nummer 31684002350, Nederland en artikelherkomst behouden. Geen aanvraag of bericht verzonden. Losse HTTP-controle gaf 403; browsercontrole slaagde. Niet-bestaande sitemap-0.xml is niet de gepubliceerde sitemap; robots.txt en bron verwijzen naar sitemap.xml. npm ci, 596-paginabuild, SEO, nul ontbrekende assets/interne links en partner-WhatsApp/encodingtests geslaagd. Functions/Resend/tracking/partnerbronnen behouden. PR35 Utrecht blijft open op ongewijzigde head en is niet meegenomen. Star Local volgens actuele scheduledAt-kalender niet verschuldigd; volgende drie slots 8 november. Thisavi eerste reguliere slot 9 november. Alleen redactionele verificatiecheckpoint; geen tweede deployment.

# 6 november 2026 — vrijdagartikel, source-written

Twee mogelijke vertrekadressen voor je partybus: hoe kies je er één?
https://www.partybusnederland.nl/kennisbank/partybus-twee-vertrekadressen-vergelijken/

Origineel slot 6 november 04:00 Asia/Dubai, begonnen na publishAt. Bestaande algemene aanvraag- en WhatsApp-route behouden. Unieke vergelijking van twee alternatieve vertrekadressen; geen extra stops of beschikbare uitvoering beloofd. Bestaande toegestane partnerfoto zonder zichtbaar herkomstbijschrift. Oudere kalenderposities gecontroleerd: volledig gepubliceerd. Afzonderlijk Utrecht-voorstel PR35 en afgeronde preview behouden; niet gemerged. AGENTS.md ontbreekt. Published false tot succesvolle productie en echte domeincontrole.

# 5 november — public-verified

2026-11-05T00:16:08.260687+00:00: Bedrijfsuitje/offerte- en factuurgegevens, https://www.partybusnederland.nl/kennisbank/partybus-bedrijfsuitje-zeeland-offerte-factuurgegevens/ . PR34 gecontroleerd gemerged, productie f3bb97e9b13f954476bafabcad3ce3e8c8097d50, Cloudflare 6f753e3b-c4d7-4b5e-92e7-9acedb99f294 completed/success. Echte artikel-URL, H1/canonical/Article/datum, partnerfoto 1600x1200, overzicht, Zeeland-context en sitemap bevestigd. Bestaande tijdelijke WhatsApp en directe helperroute behouden; geen formulier/bericht verstuurd. npm ci/build, SEO/link/assetcontrole en partner-WhatsApp-test geslaagd; vier aanvullende StarTransfer-formuliertests met expliciete TS-import in tijdelijke testkopie geslaagd (standaard node-testimport zonder extensie was niet oplosbaar). Alleen redactionele statuscheckpoint, geen tweede deployment.

# 5 november 2026 — bedrijfsaanvraag Zeeland, source-written

Partybus voor een bedrijfsuitje: wie vraagt aan en wie ontvangt de factuur?
https://www.partybusnederland.nl/kennisbank/partybus-bedrijfsuitje-zeeland-offerte-factuurgegevens/

Bestaand donderdag-slot, geen inhaalartikel. Actuele main 7f46f4541ef42f8d399b6990a021b8f70d2ff1bc; Actions geen runs, geen open PR; vorige inhoudsdeployment succeeded. Officiële StarTransfer-bron en huidige partner-/formulierbron gelezen. Unieke zoekvraag rond organisator, beslisser en factuurcontact; geen betaaltermijnen of factuurmogelijkheden beloofd. Bestaande echte partnerfoto, tijdelijke WhatsApp 31684002350 en handmatige doorsturing behouden. AGENTS.md ontbreekt in huidige bron. Published false tot deployment en echte domeincontrole.

# Herstelslot 4 november — public-verified

Zelfde begin- en eindadres: rondrit of retour met een partybus?
https://www.partybusnederland.nl/kennisbank/partybus-amsterdam-rondrit-of-retour-aanvragen/

Origineel slot 4 november 04:00 behouden; werkelijke publicatiedatum 2026-11-05T01:06:24.198515+04:00. Preview ec459745-5d01-4e26-b2c2-00e2c6ad324e completed/success; PR #33 gemerged als 9b533c6ddbe1f78fb3167f5f8d15cb5f0ecdf351. Productie Cloudflare 451269ed-ea56-43db-be7f-325539e45045 completed/success. Publieke artikel-URL/H1/canonical/Article/datum, geladen partnerfoto, kennisbankoverzicht, Amsterdam-context, sitemap en bestaande partnerpopup met juiste nummer/brongegevens gecontroleerd 2026-11-04T21:11:42.992549+00:00. Published pas daarna true. 594-paginabuild, SEO, interne links/assets en vier partner-WhatsApp/encodingchecks geslaagd. Geen aanvragen of berichten verstuurd. Volgend regulier Partybus-slot 5 november blijft gepland op eigen tijd; deze registratie wijzigt geen artikelinhoud of renderdatum.

# Herstelslot 4 november — Amsterdam, source-written

Zelfde begin- en eindadres: rondrit of retour met een partybus?
https://www.partybusnederland.nl/kennisbank/partybus-amsterdam-rondrit-of-retour-aanvragen/

Origineel slot www.partybusnederland.nl|2026-11-04|1 behouden; werkelijke publicatiedatum 2026-11-05T01:06:24.198515+04:00. Actuele bron/kalender/live kennisbank en partnerformulier gelezen; geen bestaand rondritartikel of concept. Eerder Utrecht op 28 oktober, nu Amsterdam in doorlopende afwisseling. Unieke rondrit/retourvraag, bestaande partnerfoto visueel gecontroleerd, herkomst intern en geen bijschrift. Bestaande offertehelper/WhatsApp 31610628733 met juiste bronpad en Amsterdam; overige partners/Functions/Resend/tracking behouden. Geen AGENTS.md in actuele tree. Geen actieve Actions of open PR; Cloudflare d53ec28e-1472-4c45-a50f-39645aed1ca5 completed/success. Geen gedeelde lock geclaimd. Alleen oorspronkelijk achterstallig slot; vandaag blijft gepland. Build/SEO/link/asset/popup, merge/deployment en echte domeincontrole volgen; published false.

# Slot 3 november — public-verified, registratie hervat

Nog geen busvoorkeur? Zo maak je een bruikbare partybusaanvraag
https://www.partybusnederland.nl/kennisbank/partybus-zuid-holland-geen-busvoorkeur-aanvragen/

Gecontroleerd 2026-11-03T20:57:56.341Z. Bestaande merge 1fbf7c7f60b396a5c3f60da519b0b89329d5dc98 en Cloudflare d53ec28e-1472-4c45-a50f-39645aed1ca5 completed/success. Werkelijke artikel-URL/H1/canonical/Article/datum, geladen partnerfoto, overzicht en publieke sitemap opnieuw bevestigd. Oorspronkelijke publicatiedatum 3 november en artikel ongewijzigd; uitsluitend onderbroken bronregistratie afgerond. Geen nieuwe deployment, blog, formulier of bericht. Alleen ongebruikte statusmetadata verandert; artikelinhoud en render-invoer ongewijzigd.

# Blogslot 3 november — Tourgo / Zuid-Holland, source-written

Nog geen busvoorkeur? Zo maak je een bruikbare partybusaanvraag
https://www.partybusnederland.nl/kennisbank/partybus-zuid-holland-geen-busvoorkeur-aanvragen/

Origineel slot www.partybusnederland.nl|2026-11-03|1 behouden; actuele bron, alle eerdere slots en live kennisbank gecontroleerd. Unieke zoekvraag over aanvraag zonder voertuigvoorkeur; geen duplicaat van bestaande terugrit-, bagage- of groepsgroottegids. Tourgo-website en echte keuze “Geen voorkeur” bevestigd op 3 november. Alleen bevestigde diensten; geen prijzen, voertuigcapaciteit of beschikbaarheid beloofd. Bestaande goedgekeurde Tourgo-foto, herkomst intern, geen bijschrift. Bestaande offertehelper/WhatsApp 31623044970 met bronpad behouden. Alle andere partners, Functions, Resend en tracking ongewijzigd. Geen AGENTS.md in actuele tree. Eerdere centrale run voltooid en geen actieve Actions of open PR; laatste contentdeployment succesvol, bronstatuscheckpoint CI skip. Geen fictieve gedeelde lock. Bouw/SEO/links/WhatsApp-checks volgen; published false tot deployment en publieke controle.

# Blogslot 2 november — public-verified na hervatten

Een partybus als verrassing: wat spreek je vooraf af?
https://www.partybusnederland.nl/kennisbank/partybus-brabant-verrassingsrit-voorbereiden/

Oorspronkelijk slot www.partybusnederland.nl|2026-11-02|1 en oorspronkelijke werkelijke publicatiedatum 2 november behouden. Bestaande PR #31 met uitsluitend de eerder voorbereide tekstcorrectie hervat; preview 4de8dc32-e073-4a5e-b5dd-28211162a773 completed/success, vervolgens merge 79fe6c70774e1727baac3b736434c6f695f0ce28. Cloudflare-productie a09a9d4d-38b7-4e78-8800-1ca9fb710ab0 completed/success. Echte artikelpagina/canonical/geladen partnerfoto/correcte tekst, kennisbank, Noord-Brabant-context en sitemap gecontroleerd op 2026-11-03T01:26:18.428893+04:00. Bestaand WhatsApp-vragenvenster opent naar 31629041798 met juiste bronpad; geen aanvraag verstuurd. 592-paginabuild, SEO, interne links/assets en vier partner WhatsApp-/encodingchecks geslaagd. Geen nieuwe blog of kalenderpositie; nieuwe dinsdagpublicatie blijft gepland voor eigen 04:00-slot. Voltooiing en bron/deployment/controletijd in kalender, publicaties en artikelmetadata vastgelegd.

# Blogslot 2 november 2026 — Prestige / Noord-Brabant

Een partybus als verrassing: wat spreek je vooraf af?
https://www.partybusnederland.nl/kennisbank/partybus-brabant-verrassingsrit-voorbereiden/
Oorspronkelijk maandag-slot www.partybusnederland.nl|2026-11-02|1 om 04:00 behouden. Actuele main/kalender/concepten/kennisbank en echte partnerbron gelezen: geen ouder ontbrekend Partybus-slot of bestaand verrassingsartikel. Unieke vraag: geheim onthulmoment versus juiste ritgegevens, met stappen, checklist en passende verhuurhub. Geen fictieve prijzen, voertuigen, beschikbaarheid of inbegrepen uitvoering. Bestaande toegestane interieurfoto visueel gecontroleerd; herkomst/toestemming intern. Juiste Prestige-offerte/WhatsApp 31629041798 via bestaande helpers; andere partners/Functions/Resend/tracking behouden. Geen open PR of actieve Actions; eerdere CF-build success. Huidige centrale run onderscheiden van afgeronde vorige run; geen gedeelde technische lock geclaimd. Nieuwere Johan-autorisatie voor dit blog is leidend boven historische previewgoedkeuring voor de inmiddels afgeronde SEO-opdracht. Source-written, published false tot echte domeincontrole. Build en controles volgen; geen berichten verstuurd.

# Blogslot 30 oktober live bevestigd

Een afspeellijst voor de partybus: wat regel je vóór vertrek?
https://www.partybusnederland.nl/kennisbank/partybus-afspeellijst-muziek-voorbereiden/
PR #28 gemerged als eda0431803d0a82b565809f2328e062b159aa11e. Cloudflare-productie 1ebeaf02-a744-4e9c-b654-084b01c4a47d completed/success. Artikel, exacte bestaande partnerfoto, homepagecontext, kennisbank en sitemap HTTP200 gecontroleerd 2026-10-30T04:10:31.774593+04:00. H1/canonical/Article/datum, deelafbeelding en één centraal WhatsApp-vragenvenster met juiste herkomst en bestemming gecontroleerd. Published daarna true; oorspronkelijk vrijdag-slot behouden. Build 591 pagina’s, SEO/interne links/assets en WhatsApp/encodingchecks geslaagd; geen berichten verstuurd. Geen nieuw Star Local-slot op vrijdag.

# Blogslot 30 oktober 2026 — algemeen

Een afspeellijst voor de partybus: wat regel je vóór vertrek?
https://www.partybusnederland.nl/kennisbank/partybus-afspeellijst-muziek-voorbereiden/
Oorspronkelijk vrijdag-slot www.partybusnederland.nl|2026-10-30|1 om 04:00 behouden; werkelijke publicatiedatum 2026-10-30T04:06:39+04:00. Geen achterstand uit 26–29 oktober: alle vier kalenderposities gepubliceerd en geverifieerd. Actuele main 829b0060f167cdccf460672185ac5ea383cdbf41, CF-check completed/success, geen Actions of open PR’s; huidige centrale uitvoering onderscheiden van eerdere afgeronde verwerking. Geen gedeelde technische lock geclaimd. Onderwerp verschilt van algemene voorzieningen-FAQ door concrete groepsinventarisatie, lijstbeheer, aparte heen-/terugreis en vooraf bevestigde afspeelmethode; geen aansluiting, DJ, beschikbaarheid of tarief beloofd. Bestaande echte StarTransfer-interieurfoto met geregistreerde oorspronkelijke bron, geen zichtbaar credit. Centrale aanvraag en WhatsApp 31684002350 met één vragen-pop-up; partnergegevens intact. Homepage krijgt één contextuele sectie, bestaande onderdelen behouden. Status source-written; published false tot productie en echte domeincontrole.

# Herstel 28 oktober live bevestigd — 30 oktober 2026

Je activiteit heeft een vast tijdslot: wat vertel je de partybusvervoerder?
https://www.partybusnederland.nl/kennisbank/partybus-utrecht-activiteit-vast-tijdslot/
PR #27 gemerged als 28af8743cea0a8b8d1e28b69ed9d6e9b04106ded; CF-productie 8efb214c-705e-411f-b7c1-d48939c0dbab succeeded. Echte artikel-URL, exacte foto, kennisbank, Utrecht-context en sitemap HTTP200 gecontroleerd 2026-10-30T03:02:19.775803+04:00. Publicatiestatus daarna bevestigd; oorspronkelijke woensdagpositie behouden. Build 590 pagina’s, SEO/assets/interne links en vier-partner WhatsApp/encoding geslaagd. Geen berichten verstuurd.

# Hervatting slot 28 oktober — 30 oktober 2026

Je activiteit heeft een vast tijdslot: wat vertel je de partybusvervoerder?
https://www.partybusnederland.nl/kennisbank/partybus-utrecht-activiteit-vast-tijdslot/
Origineel slot www.partybusnederland.nl|2026-10-28|1 behouden. Gericht onderwerp vaste activiteitstart/afspraken op elkaar aansluiten, aanvullend op bestaande gids over de terugrit. Utrecht als eerste hervatte woensdagpositie, volgende woensdag Amsterdam; geen afwijkende werkgebieden of vestiging geclaimd. Bron f67243f30cecb75aece1d8d151ecbbe3858d4033 met volledig geverifieerd 26-oktoberslot; bijbehorende CF-check terminal success en geen open PR/actieve Actions. Officiële partnerwebsite en aanvraagvelden gecontroleerd op 30 oktober. Bestaande echte 2048×1365 bedrijfswebsitefoto behouden; herkomst intern, geen zichtbaar credit. Partnernummer 31610628733 en bestaande vraag-/offertehulpfuncties intact. Status source-written; deployment/publieke controle volgen.

# Herstel 26 oktober live bevestigd — 30 oktober 2026

Je regelt de partybus, maar reist niet mee: wie is het aanspreekpunt?
https://www.partybusnederland.nl/kennisbank/partybus-brabant-organisator-reist-niet-mee/
PR #26 gemerged als 8d815ce8baf5b2db0fa17ee2f31aaea57810fea5. CF-productie d825d86c-4aa1-4c5e-89e1-8eb594aaa68d succeeded. Echte URL/foto/kennisbank/Brabant-context/sitemap HTTP200 gecontroleerd 2026-10-30T02:50:13.343531+04:00. Published true pas na verificatie; oorspronkelijke maandag-slotidentiteit behouden, werkelijke publicatiedatum 30 oktober. Build 589 pagina’s, SEO/assets/interne links/vier-partner WhatsApp-tests geslaagd. Geen berichten verstuurd.

# Herstel origineel slot 26 oktober — 30 oktober 2026

Je regelt de partybus, maar reist niet mee: wie is het aanspreekpunt?
https://www.partybusnederland.nl/kennisbank/partybus-brabant-organisator-reist-niet-mee/

Origineel slot www.partybusnederland.nl|2026-10-26|1 ontbreekt in kalender en publicatieregistratie, geen bestaand artikel of 26-oktobermetadata in actuele kennisbankbron aangetroffen. Onder nieuwste herstelautorisatie hetzelfde maandag-slot geregistreerd; geen extra kalenderpositie. Onderwerp onderscheidt zich van bruiloftsgasten, bagage, mobiliteitswensen en ritwijzigingsgidsen. Actuele main 99e36a971baf6833a2ed9b1918006a03e9a0d7d6, laatste CF-check success en geen actieve Actions. Geen gedeelde lock geclaimd. Partnernummer/aanvraagroute/hulpfuncties behouden, bestaande Prestige-foto intern geregistreerd. Status source-written, publicatiecontrole volgt.

# Blogplanning 29 oktober 2026 — StarTransfer / Zeeland

- Vast slot www.partybusnederland.nl|2026-10-29|1. Nieuw artikel over vervoer tijdens het uitje versus twee afgesproken ritten; geen wijzigingen aan eerdere artikelen of SEO-werk van 28 oktober.
- Titel: Blijft de partybus tijdens je uitje wachten? Leg de ritdelen vast. Route /kennisbank/partybus-zeeland-wachten-tussen-heen-terugrit/. Echte bestaande StarTransfer-foto, bestaande partnerofferte, nummer 31684002350 en tijdelijke handmatige doorsturing behouden.
- Actuele main 29caf1b22ff529106af77e927731f85e53640ebd, geen Actions-runs, Cloudflare-check completed/success; vorige centrale publicatie afgerond. Geen verifieerbare gedeelde technische lock met externe routes aangetoond.
- Live bevestigd 2026-10-29T00:11:59.319509+00:00: PR #25 gemerged als 5d8f164d8213ff9a9bd64d6e5b36b96c0ed6f3e8; Cloudflare-productiedeployment 4b86a45d-b0ff-40ef-b5c8-445f3daaec0a succesvol. Echte artikel-URL, foto, kennisbank, Zeeland-context en sitemap HTTP 200; H1/canonical/Article/datum/nummer/handmatige doorsturing gecontroleerd. Build 588 pagina’s, SEO, links/assets en vier-partner WhatsApp-tests geslaagd. Published true. Geen berichten of aanvragen verstuurd.

# Live bevestigd 28 oktober 2026 — acht interne links naar festivalvervoergids

- Johan heeft het uitvoeren van de acht voorgestelde interne links goedgekeurd. Branch `seo/festival-interne-links-2026-10-28`, basis main `bac48e3113cc78c576e6ce21132cbc884b071401`. Na de gecontroleerde preview heeft Johan expliciet opdracht gegeven: ‘oke zet maar live’. Voorstel #24 is samengevoegd als `88603e2a638c9ed895e82867dcc59138ca486b6a`; de basis main was nog ongewijzigd.
- Doel `/gidsen/festival-vervoer/`. Eén natuurlijke link per pagina: `/diensten/partybus-festival/`, `/festivals/`, `/gids/festival-vervoer/`, `/kennisbank/festivalvervoer-brabant-groep-opstapplaatsen/`, `/provincies/noord-brabant/festivals-2026-2027/`, `/festivals/lowlands/`, `/partybus-rotterdam-tomorrowland/`, `/partybus-breda-defqon/`. Ankerteksten en invoegzinnen volgen het beoordeelde voorstel.
- Build 587 pagina’s, SEO-audit en interne link-/assetcontrole slagen. Gerichte HTML-controle bevestigt alle acht unieke ankerteksten naar de juiste bestemming, zonder uitrol naar andere festival-, route- of dienstpagina’s. Bestaande URLs, metadata, partnergegevens en blogplanning behouden. Geen nieuwe pagina’s of berichten aangemaakt.
- De twee festivalgidsen blijven bestaan; inhoudelijke overlap is met één interne link niet opgelost en valt buiten deze gerichte wijziging. Definitieve preview `eb339444-5e28-49e1-ad4e-a9900444e2a5` succesvol en alle acht links in de browser gecontroleerd. Cloudflare-productiedeployment `c89d8b6e-3b04-44bc-8962-da815aea3350` succesvol. Echte domeincontrole op 28 oktober om 07:47:58 UTC: alle acht exacte ankerteksten staan één keer op hun bronpagina en linken naar `/gidsen/festival-vervoer/`; canonicals kloppen en geen noindex-header. Doelgids bereikbaar. Geen berichten of aanvragen verstuurd.

# Publicatie bevestigd 28 oktober 2026 — vijf steden en WhatsApp

- Johan heeft de getoonde preview expliciet goedgekeurd met ‘goedgekeurt’ en de afronding bevestigd. Voorstel #23 is samengevoegd als `40f7bb3d405d0414b41ca7b292b7be8f5571b25a`. Main was vóór merge gelijk aan de gecontroleerde basis; geen tussentijdse blogwijzigingen overschreven.
- Cloudflare Pages-productiedeployment `c15bfd9e-2f69-48ab-ac23-c43c41bed944` geslaagd. Op 28 oktober opnieuw het echte domein in de browser gecontroleerd: alle vijf steden tonen de nieuwe titels, descriptions, één H1, zes FAQ’s, eigen canonical, partnerfoto en alle ritvelden met de juiste partnernummers. Geen horizontale overloop op desktop. Amsterdam opent het juiste WhatsApp-venster; geen bericht of aanvraag verzonden.
- Homepage toont de vijf beschrijvende stadslinks en vijf partnerbeelden. Bestaande URL’s, partners, Cloudflare Pages, domein/DNS en automatische blogplanning behouden.
- Visuele mobiele eindcontrole en betrouwbare CWV-meting blijven open zoals vóór goedkeuring gemeld. Geen rankingverbetering of gemeten snelheidsscore geclaimd. Volledige oplevering: `docs/SEO_PREVIEW_2026-10-28.md`. De onderstaande previewstatus is historische voorbereidingsinformatie, geen actuele publicatieblokkade.

# SEO-opdracht 28 oktober 2026 — vijf steden, eerst preview (historie)

- Amsterdam, Breda, Utrecht, Rotterdam en Den Haag: bestaande URL’s behouden; unieke citydata met lokale uitleg, H1, title onder 60 tekens, description 150–160 tekens en precies zes zichtbare FAQ’s vanuit dezelfde bron als JSON-LD.
- Bestaand gedeeld WhatsApp-venster uitgebreid met vertrektijd, gelegenheid en optionele terugreistijd; berichtbouwer gebruikt ingevulde waarden. Namen, telefoonnummers, partnerverdeling, festivalkeuzes en bestaande offerte-/mailroutes behouden. Geen bericht of echte aanvraag versturen tijdens QA.
- Echte bestaande partnerfoto’s als Open Graph op Amsterdam, Utrecht, Rotterdam en Den Haag. Breda gebruikte al de juiste foto. Homepagekaarten gebruiken responsive, lazy geladen echte partnerbeelden en beschrijvende stadslinks. Geen nieuwe afbeelding gegenereerd.
- Nieuwe relevante links vanuit steden naar bestaande regionale planningblogs, verjaardagspagina en logisch verwante vertrekplaatsen. Bestaande homepage- en bloglinks blijven behouden. Geen nieuwe verhuur-URL of extra blog toegevoegd.
- De automatische blogplanning blijft actief en ongewijzigd. Lees bij vervolgblogs ook `editorial/seo-conversion-policy.md`: concrete vraag en oplossing, inhoudelijk relevante verhuurhub, partner-CTA, onderwerpcontrole en geen extra publicaties om het aantal te verhogen.
- Bronbranch `seo/vijf-steden-conversie-2026-10-28`, vanaf main `9d8e7cf151328fa9050c158b664a6c2ddbe6e0c5`. De gebruiker verlangt eerst controle en goedkeuring: **niet samenvoegen of naar productie publiceren voordat Johan de preview heeft goedgekeurd**. Zijn latere ‘starten maar’ bevestigt uitvoering, niet beoordeling van de nog te maken preview.
- Lokale build/SEO/link/asset-/WhatsApp- en vijf-stedencontroles geslaagd. Eerste Cloudflare-preview `5cb2a795-ffc1-40b5-8076-635bae8632fe` succesvol; alle vijf steden op desktop gecontroleerd op H1, zes FAQ’s, beelden, overloop en openend partnerformulier. Nieuwe ritvelden invulbaar; geen berichten verstuurd. Responsive CSS nagekeken, maar visuele mobiele eindcontrole blijft open door ontbrekende viewportcontrole en geblokkeerde mobiele testweergave. PageSpeed API HTTP 429; geen CWV-score geclaimd. Zie `docs/SEO_PREVIEW_2026-10-28.md`. Finale preview wordt na de scope-/kopvolgordecorrectie opnieuw gebouwd; voorstel #23 blijft draft en ongemerged.

# Blogplanning 27 oktober 2026 — Tourgo / Zuid-Holland

- Vast slot `www.partybusnederland.nl|2026-10-27|1`, start 04:00 Asia/Dubai. Eén artikel over verschillende terugreiswensen binnen een groep; geen extra inhaalartikel voor 26 oktober.
- Titel: Niet iedereen wil tegelijk terug: zo maak je een groepsafspraak. Bestaande kennisbankarchitectuur, contextlink vanaf Zuid-Holland, echte bestaande Tourgo-foto. Partnernummer 31623044970 en regionale aanvraagroute behouden.
- Geen actieve GitHub Actions-runs aangetroffen; laatste Cloudflare-check terminal success. Geen verifieerbare gedeelde wachtrij/lock tussen externe routes aangetoond. Verwachte main-SHA wordt bij publiceren gecontroleerd.
- Validatie geslaagd: npm ci, build 587 pagina’s, SEO-audit, interne links/assets en vier-partner WhatsApp-tests. Artikel-H1/canonical/schema/foto/contacten en ontdekbaarheid gecontroleerd. Voorstel #22 gemerged als efb793e725a104b722ace56b6eff5505b72134b8. Cloudflare-productiedeployment 44a4df15-0453-43b9-a657-b112995f506f geslaagd. Echt domein gecontroleerd: artikel, foto, kennisbank, Zuid-Holland-contextlink en sitemap HTTP 200 en nieuwe inhoud; published bevestigd. Geen berichten of aanvragen verstuurd.

# 23 oktober 2026 — meer relevante klikken op vier stadspagina’s

- Opdracht Johan: de voorgestelde verbeteringen voor Oss, Leiden, Amsterdam en Den Haag uitvoeren en publiceren. Werkbranch `seo/meer-klikken-steden-2026-10-23`, basis main `a66268f474d91cf12783089e50d12c8fd83e26e2`. Eigen Search Console-export gebruikt voor prioritering; geen ruwe analytics in de repository.
- Vier onderscheidende titels en metabeschrijvingen, met concrete vertrekintentie, offerte of heen-/terugrit; korte hero-uitleg sluit daarop aan. Geen vaste prijzen, voorzieningen of beschikbaarheid beloofd.
- Bestaande lokale planningssecties herschreven als keuzehulp: één verzamelpunt versus extra stops in Oss, Centraal/Lammenschans/eigen adres in Leiden, hotel/station/concert in Amsterdam en vertrek-/eindadres Scheveningen/Den Haag. Per stad één relevante extra FAQ; zichtbare tekst en JSON-LD uit dezelfde citydata.
- Kosten- en opstapgids krijgen contextuele links op de relevante plek naar deze vier bestaande stadspagina’s. Bestaande regionale blogs en links behouden; geen extra of dubbele artikelen toegevoegd.
- Validatie: npm ci/build (586 pagina’s), SEO-audit, interne-link-/assetcheck, vier-partner WhatsApp-tests en diff-check geslaagd. Voor/na-vergelijking van alle HTML bevestigt identieke canonicals, formulierattributen en offerte-/WhatsApp-links. Alleen de vier stadspagina’s en twee gidsen veranderen inhoudelijk. Gerichte controle bevestigt één H1 en zichtbare FAQ-antwoorden gelijk aan JSON-LD.
- Publicatie **live bevestigd**: voorstel #21 gemerged als `0c034280ccd6e05520ba7ef8046ac7b1e4d5729f`; Cloudflare Pages productie-deployment `e9ba9b93-2d4f-47a4-a526-7cd763be461b` geslaagd. Rechtstreekse controle op 23 oktober 2026 om 09:44:17 UTC bevestigt HTTP 200 en nieuwe inhoud op alle vier stadspagina’s en beide gidsen. Titels, canonicals, één H1, structured data en offerte-/WhatsApp-links vergeleken met de gecontroleerde build.
- Geen berichten of aanvragen verstuurd. Geen interactieve browser-/mobiele QA uitgevoerd. Dit bevestigt publicatie; hogere posities of meer klikken zijn nog niet bewezen. Effect later meten met dezelfde landenfilters en vergelijkbare periodes.

# Blogplanning 23 oktober 2026 — algemeen

- Website https://www.partybusnederland.nl; oorspronkelijke planning `2026-10-23T12:00:00+04:00`. Titel: **Instappen in een partybus: wat bespreek je bij mobiliteitswensen?**
- URL: https://www.partybusnederland.nl/kennisbank/partybus-instappen-mobiliteitswensen-vooraf-bespreken/
- Bron: `mobiliteitswensen.ts`, eigen kennisbankroute en register; kleine contextlink vanaf de bestaande homepage, alle overige onderdelen behouden. Overzicht en sitemaps via bestaande architectuur.
- Onderscheidende praktische vraag: informatie over instap, hulpmiddel, werkelijk aangeboden voertuig en complete opstap-/terugritafspraak. Geen toegankelijkheid, hulpmiddelenvervoer, medische geschiktheid of voertuigvoorzieningen beloofd. Geen evenementen of tijdgevoelige bedrijfsfeiten toegevoegd.
- Echte bestaande Prestige-partnerfoto met bron in publication; niet voorgesteld als bewijs van toegankelijkheid of als gereserveerde bus. Bestaande algemene WhatsApp 31684002350 met één gedeeld vragenvenster en exacte artikelbron; algemene eigenaarcontacten niet als StarTransfer toegewezen.
- npm ci/build 586 pagina’s, bestaande SEO-audit, interne-link/assetcontrole en vier-partner WhatsApp-test geslaagd. Canonical, H1, Article/datum, foto, aanvraaglink, één vragenvenster, homepagecontext, kennisbank en sitemaps afzonderlijk gecontroleerd vóór commit. Geen aanvraag of bericht verstuurd.
- Status: **live bevestigd — published: true**. PR #20 gemerged als `3ffeffebe057aac5f42acc4ba5901ec7a555d42a`; Cloudflare Pages productie-deployment `63544475-01d6-4f22-8e6c-87267ad5af20` geslaagd op 23 oktober 2026. Echte publieke artikel-URL, kennisbank, homepagecontext en XML-sitemap HTTP 200 met het artikel. Echte partnerfoto bereikbaar; één H1, canonical/Article, algemeen nummer 31684002350 en precies één bestaand vragenvenster met artikelbron gecontroleerd in publieke HTML. Geen interactieve browsercontrole geclaimd. Geen berichten of aanvragen verstuurd. Maak geen tweede artikel voor 23 oktober.

# Blogplanning 22 oktober 2026 — StarTransfer / Zeeland

- Website https://www.partybusnederland.nl; oorspronkelijke planning `2026-10-22T12:00:00+04:00`.
- Titel: **Je partybusrit vanuit Zeeland verandert: zo geef je wijzigingen duidelijk door**.
- URL: https://www.partybusnederland.nl/kennisbank/partybus-zeeland-ritwijziging-doorgeven/
- Bron: `ritWijzigenZeeland.ts`, eigen route, bestaande MasterKennisbankArticle en register; contextlink uitsluitend op de provincie Zeeland via RegionPage. Kennisbank en bestaande sitemaps nemen het register over.
- Unieke invalshoek: wijzigingen in tijden/adressen/ritdelen vastleggen van oud naar nieuw, één contactpersoon en één nieuwe bevestiging. Het bestaande algemene groepsgrootte-artikel blijft behouden en wordt relevant gekoppeld. Geen fictieve lokale case, tarieven, voorwaarden of beschikbaarheid.
- Echte bestaande StarTransfer-buitenfoto visueel gecontroleerd; bron-URL in publication. Geen specifieke rit of gereserveerd voertuig geclaimd.
- Bestaande aanvraaghelper met partner=startransfer, Zeeland en bron-URL. WhatsApp 31684002350, bestaande vragen-pop-up en expliciete tijdelijke handmatige afstemming via Partybus Nederland behouden. Alle andere formulieren, Functions, Resend, partnerdata en tracking behouden. Geen echte aanvraag of bericht verzonden.
- npm ci/build: 585 pagina’s. SEO-audit, interne-link/assetcheck en vier-partner WhatsApp-tests geslaagd. Gerichte artikelcontrole op H1, canonical, Article/datum, foto, offerteparameters, dialoog/nummer, overzicht en sitemaps volgt vóór commit.
- Status: **live bevestigd — published: true**. PR #19 gemerged als `1123c09bf034acf05ccd0d0865672e18736fb060`; Cloudflare Pages productie-deployment `ab893ca6-75b8-4721-b97b-5eac6ef83c5e` geslaagd op 22 oktober 2026. Echte publieke artikel-URL, kennisbank, XML-sitemap en provinciecontextlink HTTP 200 met het artikel. Browser bevestigt één H1, juiste canonical, geladen echte foto’s en één vragenvenster dat voor StarTransfer opent met Zeeland/herkomst en expliciete tijdelijke doorsturing. Berichtbouwer/URL-encoding en offerteparameters gecontroleerd. Geen berichten of aanvragen verstuurd. Maak geen tweede artikel voor 22 oktober.

# Blogplanning 20 oktober 2026 — Tourgo / Zuid-Holland

- Website: https://www.partybusnederland.nl; oorspronkelijk gepland `2026-10-20T12:00:00+04:00`.
- Titel: **Weekend weg met een partybus: stem bagage vooraf af**.
- URL: https://www.partybusnederland.nl/kennisbank/weekend-partybus-zuid-holland-bagage-afstemmen/
- Bron: `src/data/kennisbank/articles/weekendBagageZuidHolland.ts`, eigen route, bestaand kennisbankregister en MasterKennisbankArticle. Contextlink vanaf provincie Zuid-Holland; kennisbankoverzicht en bestaande sitemaps volgen het register.
- Werkbranch `blog/2026-10-20-tourgo-bagage`, basis main `486a8ef49df35c3464560979374b8cf62b610b34`. Geen artikel of eerdere SEO-wijziging verwijderd.
- Nieuwe zoekintentie: aantallen en omvang van weekendbagage, extra spullen, afstemming met verblijf en bevestiging voor het daadwerkelijk aangeboden voertuig. Onderscheidend van de bestaande algemene gids en het Zuid-Hollandse artikel over meerdere opstapplaatsen.
- Bestaande echte Tourgo-foto’s visueel en met afbeeldingsmetadata gecontroleerd. De XL-buitenfoto is 1600×780; de tweede foto toont interieur (1600×2133), niet een straatbeeld. Altteksten en afmetingen in dit nieuwe artikel daarop afgestemd; bron-URL's in `publication`. Geen bagageruimte of beschikbaarheid uit foto's afgeleid.
- Bestaande Tourgo-aanvraagroute (`partner=tourgo`, Zuid-Holland, artikel als bron), WhatsApp 31623044970 en gedeelde vragen-pop-up behouden. Geen andere partnerdata, formulieren, Cloudflare Functions, Resend of tracking gewijzigd. Geen berichten of echte aanvragen verstuurd.
- Validatie: npm ci/build geslaagd met 584 pagina's; `audit-seo.mjs`, `verify-pre-push.mjs`, `test-partner-whatsapp-request.mjs` en git diff --check geslaagd. Gerichte HTML-check bevestigt één H1, juiste canonical/Article/datum, foto's, partnerofferte, precies één dialoog met 31623044970, artikel in kennisbank en beide sitemaps, en contextlink vanaf Zuid-Holland.
- Publicatiestatus: **live bevestigd — published: true**. PR #18 gemerged als `02237377d4ccd9d44efc434196ca669dad79c64a`; Cloudflare Pages productie-deployment `94d0658e-3622-467d-8547-ef3e04e861f9` geslaagd. Controle op 20 oktober 2026, 08:06:56 UTC: echte publieke artikel-URL HTTP 200, één H1, juiste canonical/Article, beide beelden geladen, precies één dialoog met 31623044970. In de browser opent de artikelknop het Tourgo-vragenvenster met herkomst PartybusNederland.nl — Zuid-Holland; niets ingestuurd. Kennisbank en provinciecontextlink publiek aanwezig; XML-sitemap bevat het artikel. Bij herhaling geen extra artikel voor 20 oktober maken.

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
