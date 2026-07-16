import type { CityFaq } from './types';

/**
 * Standard 6 FAQs for every city page.
 * Question 3 becomes more local when pickupLocations are provided.
 */
export function buildCityFaqs(cityName: string, pickupLocations: readonly string[] = []): CityFaq[] {
	const localPickup =
		pickupLocations.length > 0
			? pickupLocations.filter((item) => !/^hotel of eigen locatie$/i.test(item)).slice(0, 4)
			: [];

	const pickupAnswer =
		localPickup.length > 0
			? `Mogelijke opstapplaatsen zijn afhankelijk van de route en lokale bereikbaarheid. In ${cityName} denken groepen vaak aan ${formatList(localPickup)}, of een afgesproken adres.`
			: `Mogelijke opstapplaatsen zijn afhankelijk van de route en lokale bereikbaarheid. Denk aan het centrum, stations, evenementenlocaties of een afgesproken adres.`;

	return [
		{
			question: `Wat kost een partybus huren in ${cityName}?`,
			answer:
				'De prijs hangt onder meer af van de datum, route, duur, groepsgrootte en het type partybus. Vraag vrijblijvend meerdere offertes aan om de mogelijkheden te vergelijken.',
		},
		{
			question: 'Voor hoeveel personen kan ik een partybus huren?',
			answer:
				'Partybus Nederland vergelijkt mogelijkheden voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per aanbieder en voertuig.',
		},
		{
			question: `Waar kan een partybus in ${cityName} opstappen?`,
			answer: pickupAnswer,
		},
		{
			question: 'Kan de partybus meerdere stops maken?',
			answer:
				'Meerdere stops zijn vaak mogelijk wanneer deze vooraf met de aanbieder worden afgestemd. Vermeld alle gewenste tussenstops duidelijk in de aanvraag.',
		},
		{
			question: 'Voor welke gelegenheden kan ik een partybus huren?',
			answer:
				'Een partybus kan onder meer worden gebruikt voor verjaardagen, vrijgezellenfeesten, bruiloften, bedrijfsuitjes, festivals en andere groepsactiviteiten.',
		},
		{
			question: 'Hoe lang van tevoren moet ik een partybus reserveren?',
			answer:
				'Voor populaire data, weekenden en evenementen is vroeg aanvragen verstandig. Beschikbaarheid verschilt per aanbieder en periode.',
		},
	];
}

function formatList(items: readonly string[]): string {
	if (items.length === 1) return items[0];
	if (items.length === 2) return `${items[0]} en ${items[1]}`;
	return `${items.slice(0, -1).join(', ')} en ${items[items.length - 1]}`;
}
