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
