/** Direct WhatsApp link: visitors fill in the details in WhatsApp itself. */
export function buildPartnerWhatsappHref(phone: string, partnerName: string, departure: string): string {
	const message = [
		`Goedendag ${partnerName},`,
		'',
		'Ik kom via PartybusNederland.nl en wil graag informatie of een offerte voor een partybus.',
		'',
		'Mijn naam: ',
		'Gewenste datum: ',
		'Aantal personen: ',
		`Vertrekplaats / regio: ${departure}`,
		'Exacte opstaplocatie: ',
		'Bestemming / eventuele tussenstops: ',
		'Gewenste vertrektijd: ',
		'Terugreis nodig? Ja / nee: ',
		'Gewenste terugreistijd: ',
		'Gelegenheid (bijv. festival, vrijgezellenfeest, verjaardag of bedrijfsuitje): ',
		'Mijn vraag / extra wensen: ',
		'',
		'Kunt u mij informeren over de mogelijkheden, beschikbaarheid en prijs?',
	].join('\n');
	return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildPartnerRequestMessage(input:{partnerName:string;departure:string;sourcePath:string;values:Record<string,string>;originalText?:string}) {
 const value=(key:string)=>String(input.values[key]||'').trim();
 const message=[`Goedendag ${input.partnerName},`,'',`Ik kom via PartybusNederland.nl, de pagina voor ${input.departure}.`,`Bronpagina: https://www.partybusnederland.nl${input.sourcePath}`,`Mijn aanvraag: ${value('requestType')||'Offerte voor een partybusrit'}.`,'',`Mijn naam: ${value('customerName')||'[vul je naam hier in]'}`,`Gewenste datum: ${value('date')||'Nog te bespreken'}`,`Aantal personen: ${value('guests')||'Nog te bespreken'}`,`Vertrekplaats / opstapadres: ${value('departure')||input.departure}`,`Bestemming / festival: ${value('destination')||'Nog te bespreken'}`,`Terugreis nodig: ${value('returnTrip')||'Nog te bespreken'}`,'Gewenste vertrektijd: [vul hier in]','Gewenste terugreistijd: [vul hier in]',`Mijn vraag / extra wensen: ${value('message')||'Graag informatie over mogelijkheden, beschikbaarheid en prijs.'}`];
 // Keep the existing festival selections and checkboxes from the clicked link.
 const marker='Festival waarvoor ik vervoer wil boeken:';
 if(input.originalText?.includes(marker)) message.push('','Festivalinformatie van de pagina:',input.originalText.slice(input.originalText.indexOf(marker)));
 return message.join('\n');
}
