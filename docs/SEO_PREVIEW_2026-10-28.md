# SEO-preview Partybus Nederland — 28 oktober 2026

Status: Johan heeft de getoonde preview expliciet goedgekeurd. Voorstel #23 is samengevoegd als `40f7bb3d405d0414b41ca7b292b7be8f5571b25a`; Cloudflare Pages-productiedeployment `c15bfd9e-2f69-48ab-ac23-c43c41bed944` geslaagd. De vijf steden en homepage zijn op 28 oktober 2026 opnieuw op het echte domein gecontroleerd. Bestaande Cloudflare Pages, domein en DNS behouden.

## Bestaande verhuurpagina’s

| Pagina | Zoekwoordfocus | Inhoudelijke verbetering |
| --- | --- | --- |
| `/steden/partybus-huren-amsterdam/` | partybus huren Amsterdam, feestbus huren Amsterdam, partybus Amsterdam; vrijgezellenfeest en discobus | Hotel/station/kantoor, bereikbaarheid Centrum, concert in Zuidoost, complete ritofferte |
| `/steden/partybus-huren-breda/` | partybus huren Breda, partybus Breda, feestbus huren Breda; met chauffeur en verjaardag | Belcrum/Ginneken, Prinsenbeek/Bavel/Teteringen, dag-/avondprogramma en terugkomst |
| `/steden/partybus-huren-utrecht/` | partybus huren Utrecht, partybus Utrecht, feestbus huren Utrecht; bedrijfsuitje en vrijgezellenfeest | Centraal/Jaarbeurs/Leidsche Rijn, eindstops na kantooruitje, onderscheid Utrechtse Heuvelrug |
| `/steden/partybus-huren-rotterdam/` | partybus huren Rotterdam, partybus Rotterdam, feestbus huren Rotterdam, discobus huren | Centraal/Kop van Zuid/Ahoy, afzetten versus ophalen en verschillende terugreiswensen |
| `/steden/partybus-huren-den-haag/` | partybus huren Den Haag, feestbus huren Den Haag; verjaardag en vrijgezellenfeest | Scheveningen/Centraal/Hollands Spoor, afzonderlijke vertrek- en eindadressen |

Iedere stad heeft één H1, unieke lokale introductie, logische bestaande H2/H3’s, een title van 43–48 tekens, een metabeschrijving van 158–160 tekens en precies zes FAQ’s. Kosten/prijs worden als ritafhankelijke factoren uitgelegd, niet als verzonnen tarief. Chauffeur, capaciteit, stops, gelegenheid en aanvraagproces worden per stad toegelicht; er wordt geen voertuig beschikbaar beloofd. Bestaande regionale inhoud en foto’s blijven behouden.

## WhatsApp

Het bestaande vragenvenster behoudt naam, opstapadres, bestemming, ritdatum, personen en opmerkingen. Nieuw: werkelijk invulbare vertrektijd, afzonderlijke gelegenheid en optionele terugreistijd. De berichtbouwer neemt de waarden over, met herkomst en exacte bronpagina. Festivalinformatie en terugreisselectie blijven behouden. De formuliergrens van 80 personen is verwijderd: de partner bevestigt de daadwerkelijke capaciteit.

Partnernummers blijven: Amsterdam/Utrecht `31610628733`, Breda `31629041798`, Rotterdam/Den Haag `31623044970`. StarTransfer en algemene contactroutering blijven ongewijzigd. Alleen de bezoeker verstuurt het bericht in WhatsApp; QA heeft geen bericht of offerte verzonden.

## Interne links

- Homepage: bestaande stadskaarten blijven op dezelfde vijf URL’s staan en krijgen beschrijvende ‘Partybus huren [stad]’-linktekst; de Eindhoven-kaart blijft bestaan.
- Alle vijf steden: link naar de bestaande verjaardagspagina, naast de bestaande vrijgezellenfeest-, bedrijfsuitje-, kosten- en regionale pagina’s.
- Amsterdam: bestaande gids over een opstapplaats kiezen; Breda: bruiloftartikel over dag-/avondgasten; Utrecht: bedrijfsuitje/terugritartikel en vertrekpagina Utrechtse Heuvelrug.
- Rotterdam: artikel over verschillende terugreistijden en stadspagina Den Haag. Den Haag: artikel over meerdere opstapplaatsen in Zuid-Holland en stadspagina Rotterdam.
- Bestaande bijpassende artikelen verwijzen al terug naar de verhuurpagina’s; die links blijven behouden. Geen dubbele verhuurpagina of extra blog gemaakt.

## Technische controle

- Canonicals en WhatsApp-links van alle 587 bestaande HTML-pagina’s vergeleken met de basisbuild: behouden. Alleen de vijf aangewezen H1’s wijzigen.
- Dezelfde bestaande URL-set en kennisbankartikelen blijven bestaan. XML-sitemap bevat de vijf hubs; robots.txt verwijst naar de bestaande sitemap. Geen indexeerblokkade aangetroffen in de vijf productiebronpagina’s.
- Open Graph en Twitter gebruiken op Amsterdam, Utrecht, Rotterdam en Den Haag een echte bestaande partnerfoto in plaats van het algemene stadsbeeld; Breda gebruikte al een partnerfoto. De assets bestaan en de broncanonicals blijven naar het eigen domein verwijzen.
- Homepage: vijf grote algemene bronafbeeldingen vervangen door bestaande responsive WebP-partnerfoto’s, met afmetingen, passende alttekst en lazy loading. Samen zijn die vijf bronassets circa 10,12 MB vóór en 0,44 MB na de wijziging. Dit vergelijkt bestandsgroottes, niet de werkelijke browserdownload of een Core Web Vitals-score.
- Amsterdam: de festivalverwijzing staat na de hoofdintroductie in plaats van boven de H1. Link en festivalfunctionaliteit blijven aanwezig.
- Build, SEO-audit, interne links/assets, bestaande partnerrouteringtests, aanvullende ingevulde berichtvelden/URL-encoding en de nieuwe vijf-stedencontrole slagen. Geen kapotte interne links in de statische build.

## Browsercontrole en beperkingen

De eerste Cloudflare-preview `5cb2a795-ffc1-40b5-8076-635bae8632fe` is succesvol gebouwd. Desktopcontrole op alle vijf steden bij 1348 pixels: juiste H1, zes FAQ’s, geen horizontale overloop of ontbrekende geladen afbeeldingen, juiste partner en een openend WhatsApp-venster. Vertrektijd, gelegenheid en terugreistijd zijn in het venster invulbaar. Geen externe inzending gedaan.

De lokale preview is gestopt omdat de ontwikkelserver de beschikbare host niet toestond. De browser biedt hier geen viewport-resizefunctie en blokkeerde de poging tot een mobiele testweergave. Er is geen omweg gebruikt. Responsive breakpoints en formulier-CSS zijn nagekeken; **visuele mobiele eindcontrole blijft open**. De publieke PageSpeed API gaf HTTP 429, waardoor een betrouwbare lab-/veldscore voor Core Web Vitals niet beschikbaar is. Er wordt geen snelheidsscore of hogere ranking geclaimd.

## Blogs en meten

De centrale nachtelijke blogplanning is actief aangetroffen en niet gewijzigd. De werkwijze voor volgende blogs staat in `editorial/seo-conversion-policy.md`: één echte vraag, bruikbare oplossing, relevant verhuurdoel, partner-CTA en controle op herhaling. Die broninstructie is met het goedgekeurde voorstel opgenomen in main.

De aangeleverde cijfers met label 28 oktober zijn de opdracht-nulmeting. Periode, land en apparaat zijn niet gespecificeerd; ze zijn geen bewijs van effecten van deze preview. Meet na eventuele publicatie per hub met dezelfde filters en vergelijkbare volledige perioden, en onderscheid WhatsApp-klikken van werkelijk verstuurde aanvragen.

## Publicatiecontrole en resterende punten

1. Afgerond: expliciete goedkeuring ontvangen; actuele main vóór merge gecontroleerd en gelijk aan de gecontroleerde basis. Voorstel #23 samengevoegd en Cloudflare-productie succesvol gebouwd.
2. Afgerond: alle vijf echte domeinpagina’s tonen de nieuwe metadata, één juiste H1, zes FAQ’s, eigen canonical, partnergebonden deelfoto en de volledige ritvelden. Partnernummers kloppen. Amsterdam opent het juiste WhatsApp-venster. Homepage toont de vijf beschrijvende stadslinks en vijf partnerbeelden. Geen horizontale overloop op desktop; geen externe inzendingen gedaan.
3. Open: visuele mobiele eindcontrole op een telefoon of in een omgeving met ondersteunde viewportcontrole. Betrouwbare Core Web Vitals uit echte bezoekers later afzonderlijk meten; de eerdere PageSpeed-aanvraag was beperkt met HTTP 429.
4. Meting: vergelijk na voldoende volledige meetdagen per hub dezelfde Search Console-filters en perioden. WhatsApp-klikken zijn geen bewijs van daadwerkelijk verstuurde aanvragen; geen resultaat in Google beloofd.

Definitieve goedgekeurde preview: https://85e133f7.partybus-nederland.pages.dev/ — live website: https://www.partybusnederland.nl/ .
