import type {KennisbankArticle} from '../types';
import {starTransferPhotos,buildStarTransferWhatsappHref} from '../../partners/starTransfer';
import dimensions from '../../partners/imageDimensions.json';
import {zeelandMunicipalities} from '../../provinces/zeeland';
const photo=starTransferPhotos[0];const size=(dimensions as Record<string,{width:number;height:number}>)[photo.src];
const hero={...photo,...size,filename:'partybus-buiten.webp',baseName:'partybus-buiten',title:'StarTransfer partybus voor groepsvervoer vanuit Zeeland'};
export const samenwerkingStarTransferZeeland:KennisbankArticle={
 slug:'samenwerking-startransfer-zeeland',path:'/kennisbank/samenwerking-startransfer-zeeland/',canonical:'https://www.partybusnederland.nl/kennisbank/samenwerking-startransfer-zeeland/',
 seoTitle:'StarTransfer: onze nieuwe partner voor Zeeland | Partybus Nederland',metaDescription:'PartybusNederland.nl werkt samen met StarTransfer voor Zeeland. Bekijk de partybusfoto’s, alle 13 gemeenten en de mogelijkheden voor festivalvervoer.',
 h1:'PartybusNederland.nl en StarTransfer werken samen in Zeeland',eyebrow:'SAMENWERKING · ZEELAND',
 lead:'Goed nieuws voor groepen uit Zeeland: PartybusNederland.nl werkt samen met StarTransfer. Van een festivalrit tot een vrijgezellenfeest of bedrijfsuitje: via onze Zeeuwse pagina’s vind je het aanbod van deze vervoerspartner en vraag je jullie rit aan. En met de echte busfoto’s zie je alvast hoe de reis eruit kan zien.',
 heroImage:hero,ctaImage:hero,heroPrimaryHref:'/provincies/zeeland/#boek-je-rit',heroPrimaryLabel:'Vraag je rit vanuit Zeeland aan',
 sections:[
  {id:'nieuwe-partner',title:'Een eigen vervoerspartner voor Zeeland',paragraphs:[
   'Een groepsuitje organiseren begint vaak met dezelfde vraag: hoe krijgen we iedereen op het juiste moment op de juiste plek? Met StarTransfer als partner voor Zeeland maken we die eerste stap overzichtelijker. Op de provinciepagina en de gemeentepagina’s staat nu welke vervoerder jullie aanvraag behandelt.',
   'StarTransfer is gevestigd in Schiedam. Binnen onze samenwerking richt het aanbod op PartybusNederland.nl zich op vertrek vanuit Zeeland. Jullie kunnen de heenrit aanvragen, een terugrit vanaf het afgesproken ophaalpunt bespreken of beide ritten samen plannen. De datum, route en beschikbaarheid worden rechtstreeks met StarTransfer afgestemd.'
  ]},
  {id:'festivalgevoel',title:'Het festivalgevoel begint al onderweg',paragraphs:[
   'Samen verzamelen, instappen en onderweg in de stemming komen: voor een vriendengroep kan de busrit een onderdeel van de festivaldag zijn. Daarom laten we op de Zeeland-pagina’s niet alleen tekst zien. Je vindt er foto’s van de buitenkant, de lounge, de zitplaatsen en de DJ-opstelling van StarTransfer.',
   'Ga je naar Concert at SEA, VESTROCK, Paaspop, Pinkpop of een ander festival? Onze festivalpagina’s helpen je een gerichte aanvraag te doen. De festivalnaam staat al in het WhatsApp-bericht. Op het overzicht kun je het festival aanvinken, zodat de keuze meegaat naar de juiste aanvraag.'
  ],moreLink:{label:'Bekijk alle 26 festivalbestemmingen vanuit Zeeland',href:'/provincies/zeeland/festivals/'}},
  {id:'bussen',title:'Partybus, The Experience of StarTransfer V.I.P.',paragraphs:[
   'Op StarTransfer’s website staan verschillende busuitvoeringen: de Partybus, The Experience en StarTransfer V.I.P. The Experience wordt beschreven als een VIP-lounge met 35 zitplaatsen en licht-, video- en DJ-voorzieningen. Welke uitvoering het beste past, hangt af van jullie groepsgrootte en plannen.',
   'Vermeld daarom in de aanvraag je busvoorkeur, het aantal personen en eventuele bagage. Voor een dagtocht met veel tassen kunnen andere zaken belangrijk zijn dan voor een feestelijke avondrit. StarTransfer bevestigt welk voertuig beschikbaar is en welke voorzieningen onderdeel zijn van het voorstel.'
  ],moreLink:{label:'Bekijk het wagenpark van StarTransfer',href:'https://startransfer.nl/wagenpark/'}},
  {id:'gemeenten',title:'Van Middelburg en Goes tot Hulst en Sluis',paragraphs:[
   'De samenwerking is zichtbaar in alle 13 Zeeuwse gemeenten: Borsele, Goes, Hulst, Kapelle, Middelburg, Noord-Beveland, Reimerswaal, Schouwen-Duiveland, Sluis, Terneuzen, Tholen, Veere en Vlissingen. Elke gemeente heeft een eigen vertrekpagina met StarTransfer’s foto’s, contactmogelijkheden en een aanvraagformulier.',
   'Dat is praktisch voor groepen die over meerdere plaatsen zijn verspreid. Geef alle gewenste opstapadressen meteen door. Eén gezamenlijk verzamelpunt kan de rit eenvoudiger maken, maar meerdere stops zijn ook een onderwerp om te bespreken. De vervoerder beoordeelt de bereikbaarheid en neemt afstand en tijd mee in het voorstel.'
  ],moreLink:{label:'Bekijk StarTransfer en de vertrekplaatsen in Zeeland',href:'/provincies/zeeland/'}},
  {id:'terugrit',title:'Ook ophalen vanaf het festivalterrein',paragraphs:[
   'Wil je alleen na het festival terug naar Zeeland? Je kunt een rit aanvragen vanaf een afgesproken festival-ophaalpunt. Vermeld de festivalnaam, ophaaldatum, tijd, groepsgrootte en het adres waar jullie afgezet willen worden. Bij een campingweekend kunnen heenrit en terugrit op verschillende dagen plaatsvinden.',
   'Spreek vóór vertrek een bereikbaar verzamelpunt af. De festivalorganisator bepaalt de regels voor bussen en afzetzones; de vervoerder bevestigt wat voor jullie voertuig mogelijk is. Met één contactpersoon en een duidelijke verzameltijd blijft ook de terugreis overzichtelijk.'
  ]},
  {id:'aanvragen',title:'Vraag jullie rit aan met het nieuwe formulier',paragraphs:[
   'Op de Zeeland-pagina’s staat een boekingsaanvraagformulier. Daar vul je naam, e-mail, telefoonnummer en groepsgrootte in, samen met de vertrekplaats, het opstapadres en de bestemming. Ook busvoorkeur, heen- en terugreistijden, het festival-ophaalpunt en extra wensen kunnen worden doorgegeven.',
   'Liever WhatsApp gebruiken? Je kunt de ingevulde ritgegevens ook via WhatsApp versturen. WhatsApp-aanvragen lopen voorlopig via Partybus Nederland en worden met StarTransfer afgestemd. Het formulier en het eerste bericht zijn een aanvraag: StarTransfer bespreekt beschikbaarheid en totaalprijs, waarna jullie de boeking bevestigen.'
  ],moreLink:{label:'Boek hier je rit — vraag beschikbaarheid aan',href:'/provincies/zeeland/#boek-je-rit'}},
  {id:'meer-dan-festivals',title:'Ook voor bruiloften, verjaardagen en bedrijfsuitjes',paragraphs:[
   'De samenwerking draait om meer dan festivalvervoer. Je kunt ook een groepsrit aanvragen voor een bruiloft, vrijgezellenfeest, verjaardag, carnavalsuitje of bedrijfsevenement. Geef de gelegenheid en de gewenste planning duidelijk door, zodat het voorstel bij jullie dag of avond past.',
   'We kijken uit naar de groepsritten die vanuit Zeeland worden aangevraagd. Bekijk de busfoto’s, kies je vertrekplaats en vertel wat jullie willen organiseren. Zo begint de voorbereiding met een herkenbare partner en de juiste informatie voor jullie eigen reis.'
  ]}
 ],
 checklist:{title:'Dit geef je door bij je aanvraag',lead:'Een complete planning helpt StarTransfer een passend voorstel te maken.',items:['Aantal personen en contactgegevens','Vertrekplaats, opstapadres en alle tussenstops','Bestemming of festivalnaam','Heen- en terugreisdatum en gewenste tijden','Busvoorkeur, bagage en extra wensen']},
 faqs:[{question:'Voor welke regio is StarTransfer onze partner?',answer:'Binnen PartybusNederland.nl is StarTransfer de partner voor Zeeland. Alle 13 Zeeuwse gemeenten hebben een eigen partnerpagina.'},{question:'Is mijn rit direct geboekt na het invullen?',answer:'Nee, het formulier is een aanvraag. StarTransfer bevestigt eerst beschikbaarheid, voertuig, prijs en boekingsvoorwaarden.'}],
 summary:{title:'Samen op weg vanuit Zeeland',paragraphs:['Bekijk de partnerpagina’s en vraag je groepsrit aan bij StarTransfer via PartybusNederland.nl.']},
 cta:{title:'Klaar om jullie plannen te bespreken?',lead:'Vraag je rit aan vanuit Zeeland.',primaryHref:'/provincies/zeeland/#boek-je-rit',primaryLabel:'Vraag je rit aan',whatsappHref:buildStarTransferWhatsappHref(),whatsappLabel:'WhatsApp-aanvraag'},
 relatedLinks:[{label:'StarTransfer in Zeeland',href:'/provincies/zeeland/'},{label:'Festivalvervoer vanuit Zeeland',href:'/provincies/zeeland/festivals/'}],cityLinks:zeelandMunicipalities.map(city=>({label:city.name,href:city.path})),trustNote:'De vervoerder bevestigt beschikbaarheid, voertuig, prijs en boeking. Festivaltickets zijn niet automatisch inbegrepen.'
};
