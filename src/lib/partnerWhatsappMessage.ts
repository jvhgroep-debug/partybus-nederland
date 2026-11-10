import {quoteTripRows, readQuoteTripDetails, quoteSourceUrl} from './quoteTripDetails';
/** Direct WhatsApp link: visitors fill in the details in WhatsApp itself. */
export function buildPartnerWhatsappHref(phone: string, partnerName: string, departure: string): string {
	const message = [
		`Goedendag ${partnerName},`,
		'',
		'Ik kom via PartybusNederland.nl en wil graag informatie of een offerte voor een partybus.',
		'',
		'Mijn naam: ',
		'Bedrijfsnaam: ',
		'E-mail: ',
		'Telefoonnummer: ',
		'Uw adres (straat en huisnummer, postcode en plaats): ',
		'Soort vervoer (partybus, touringcar of pendelbus): ',
		'Soort reis (enkele reis, retour, ter beschikking of dagtocht/meerdaags): ',
		'Gewenste datum: ',
		'Aantal personen: ',
		`Vertrekplaats / regio: ${departure}`,
		'Exacte opstaplocatie: ',
		'Postcode en plaats opstap: ',
		'Bestemming / eventuele tussenstops: ',
		'Postcode en plaats bestemming: ',
		'Gewenste vertrektijd: ',
		'Terugreis nodig? Ja / nee: ',
		'Gewenste terugreistijd: ',
		'Datum terugrit: ',
		'Voorkeur bus: ',
		'Kortingscode: ',
		'Hoe heeft u PartybusNederland.nl gevonden?: ',
		'Gelegenheid (bijv. festival, vrijgezellenfeest, verjaardag of bedrijfsuitje): ',
		'Mijn vraag / extra wensen: ',
		'',
		'Kunt u mij informeren over de mogelijkheden, beschikbaarheid en prijs?',
	].join('\n');
	return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildPartnerRequestMessage(input:{partnerName:string;departure:string;sourcePath:string;values:Record<string,string>;originalText?:string}) {
 const value=(key:string)=>String(input.values[key]||'').trim();
 const message=[`Goedendag ${input.partnerName},`,'',`Ik kom via PartybusNederland.nl, de pagina voor ${input.departure}.`,`Bronpagina: https://www.partybusnederland.nl${input.sourcePath}`,`Mijn aanvraag: ${value('requestType')||'Offerte voor een partybusrit'}.`,'',`Mijn naam: ${value('customerName')||'[vul je naam hier in]'}`,`Gewenste datum: ${value('date')||'Nog te bespreken'}`,`Gewenste vertrektijd: ${value('departureTime')||'Nog te bespreken'}`,`Aantal personen: ${value('guests')||'Nog te bespreken'}`,`Gelegenheid: ${value('occasion')||'Nog te bespreken'}`,`Vertrekplaats / opstapadres: ${value('departure')||input.departure}`,`Bestemming / festival: ${value('destination')||'Nog te bespreken'}`,`Terugreis nodig: ${value('returnTrip')||'Nog te bespreken'}`,`Gewenste terugreistijd: ${value('returnTime')||'Nog te bespreken'}`,`Mijn vraag / extra wensen: ${value('message')||'Graag informatie over mogelijkheden, beschikbaarheid en prijs.'}`];
 // Preserve every additional answer, including contact/address fields, for all partners.
 message[3]=`Bronpagina: ${quoteSourceUrl(input.sourcePath)}`;
 const nameIndex=message.findIndex(line=>line.startsWith('Mijn naam:'));
 message[nameIndex]=`Mijn naam: ${value('customerName')||value('name')||'[vul je naam hier in]'}`;
 const returnIndex=message.findIndex(line=>line.startsWith('Terugreis nodig:'));
 message[returnIndex]=`Terugreis nodig: ${value('returnTrip')||(value('trip')==='Heen en terug'?'Ja':value('trip')==='Alleen heenrit'?'Nee':value('trip')==='Ophalen vanaf festival / alleen terugrit'?'Alleen terugrit':'Nog te bespreken')}`;
 if(value('trip')==='Ophalen vanaf festival / alleen terugrit'){
  const timeIndex=message.findIndex(line=>line.startsWith('Gewenste vertrektijd:'));
  message[timeIndex]=`Gewenste ophaaltijd: ${value('departureTime')||'Nog te bespreken'}`;
 }
 message.push(`E-mail: ${value('email')||'Nog te bespreken'}`,`Telefoonnummer: ${value('phone')||'Nog te bespreken'}`);
 message.push(`Plaats opstapplaats: ${value('city')||input.departure}`);
 const extras=readQuoteTripDetails(input.values);
 // These answers already have their own lines above.
 for(const key of ['occasion','departureTime','destination','returnTime'] as const)delete extras[key];
 message.push(...quoteTripRows(extras).map(([label,answer])=>`${label}: ${answer}`));
 // Keep the existing festival selections and checkboxes from the clicked link.
 const marker='Festival waarvoor ik vervoer wil boeken:';
 if(input.originalText?.includes(marker)) message.push('','Festivalinformatie van de pagina:',input.originalText.slice(input.originalText.indexOf(marker)));
 return message.join('\n');
}
