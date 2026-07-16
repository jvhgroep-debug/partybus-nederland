export type InfoCard = {
	title: string;
	text: string;
};

/** Shared helpful-content blocks — no fixed prices, no availability promises. */
export const pricingFactors: InfoCard[] = [
	{
		title: 'Datum en seizoen',
		text: 'Weekenden, feestdagen en festivalperiodes zijn vaak duurder dan doordeweekse ritten. Vroeg aanvragen geeft meer keuze.',
	},
	{
		title: 'Route en duur',
		text: 'Afstand, reistijd, wachttijd en eventuele tussenstops bepalen een groot deel van de offerte.',
	},
	{
		title: 'Groepsgrootte',
		text: 'Partybussen verschillen in capaciteit. Groepen tot maximaal 80 personen zijn mogelijk, afhankelijk van het voertuig.',
	},
	{
		title: 'Opties en uitstraling',
		text: 'Verlichting, geluid, bararrangement of een luxere bus beïnvloeden de prijs. Vraag alleen wat je écht nodig hebt.',
	},
];

export const bookingTips: InfoCard[] = [
	{
		title: 'Geef een duidelijke route door',
		text: 'Noteer opstapplaats, eindbestemming en gewenste tussenstops. Hoe scherper de aanvraag, hoe relevanter de offertes.',
	},
	{
		title: 'Vergelijk voorwaarden',
		text: 'Kijk niet alleen naar prijs. Let op annuleringsvoorwaarden, wachttijd, chauffeurskosten en wat wel/niet is inbegrepen.',
	},
	{
		title: 'Plan extra tijd in',
		text: 'Houd rekening met verkeer, laden/uitstappen en fotomomenten. Een realistisch tijdschema voorkomt stress op de avond zelf.',
	},
	{
		title: 'Stem muziek en drank af',
		text: 'Vraag of muziek en sfeerverlichting standaard zijn, en of eigen consumpties zijn toegestaan.',
	},
];

export const compareChecklist: string[] = [
	'Capaciteit passend bij jouw groep (tot max. 80 personen)',
	'Inclusief of exclusief wachttijd op locatie',
	'Mogelijkheid tot meerdere opstapplaatsen',
	'Wat er bij muziek, licht en interieur hoort',
	'Annulerings- en betalingsvoorwaarden',
	'Ervaring met festivals, bruiloften of bedrijfsuitjes',
];

export const occasionGuides: InfoCard[] = [
	{
		title: 'Festivals',
		text: 'Plan heen- en terugrit, houd rekening met festivalverkeer en geef bagage- of kampeerwensen door.',
	},
	{
		title: 'Vrijgezellenfeest',
		text: 'Combineer meerdere stops in één avond. Spreek van tevoren een vaste verzamelplek af.',
	},
	{
		title: 'Bruiloft',
		text: 'Kies een representatieve bus en stem timing af tussen ceremonie, receptie en feestlocatie.',
	},
	{
		title: 'Bedrijfsuitje',
		text: 'Geef aantal collega’s, dresscode en of er onderweg presentaties of stops gepland zijn.',
	},
];

export function cityInfoLead(cityName: string): string {
	return `Handige informatie als je vanuit ${cityName} een partybus plant: waar prijzen van afhangen, wat je vergelijkt en hoe je een soepele rit regelt.`;
}

export function routeInfoLead(from: string, to: string): string {
	return `Praktische tips voor een partybusrit van ${from} naar ${to}: planning, kostenfactoren en waar je op let bij offertes.`;
}
