import { getPublishedCity } from '../cities/registry';

/** Official Utrecht municipalities with an existing PartybusNederland city page. */
export const UTRECHT_MUNICIPALITY_SLUGS = [
	'amersfoort',
	'baarn',
	'bunnik',
	'bunschoten',
	'de-bilt',
	'de-ronde-venen',
	'eemnes',
	'houten',
	'ijsselstein',
	'leusden',
	'lopik',
	'montfoort',
	'nieuwegein',
	'oudewater',
	'renswoude',
	'rhenen',
	'soest',
	'stichtse-vecht',
	'utrecht',
	'utrechtse-heuvelrug',
	'veenendaal',
	'vijfheerenlanden',
	'wijk-bij-duurstede',
	'woerden',
	'woudenberg',
	'zeist',
] as const;

export type UtrechtMunicipalitySlug = (typeof UTRECHT_MUNICIPALITY_SLUGS)[number];

const UTRECHT_MUNICIPALITY_SET = new Set<string>(UTRECHT_MUNICIPALITY_SLUGS);

export function isUtrechtMunicipalitySlug(slug: string): slug is UtrechtMunicipalitySlug {
	return UTRECHT_MUNICIPALITY_SET.has(slug);
}

const UTRECHT_NEIGHBOR_REGIONS: readonly (readonly UtrechtMunicipalitySlug[])[] = [
	[
		'utrecht',
		'de-bilt',
		'zeist',
		'bunnik',
		'houten',
		'nieuwegein',
		'ijsselstein',
		'stichtse-vecht',
	],
	['amersfoort', 'soest', 'baarn', 'bunschoten', 'leusden', 'woudenberg', 'eemnes'],
	['veenendaal', 'renswoude', 'rhenen', 'utrechtse-heuvelrug', 'wijk-bij-duurstede', 'zeist'],
	['woerden', 'de-ronde-venen', 'oudewater', 'montfoort', 'lopik', 'ijsselstein'],
	['vijfheerenlanden', 'lopik', 'ijsselstein', 'nieuwegein', 'houten'],
];

export function getUtrechtNeighborSlugs(
	slug: UtrechtMunicipalitySlug,
	count = 5,
): readonly UtrechtMunicipalitySlug[] {
	const scored = new Map<UtrechtMunicipalitySlug, number>();
	for (const region of UTRECHT_NEIGHBOR_REGIONS) {
		const currentIndex = region.indexOf(slug);
		if (currentIndex < 0) continue;

		region.forEach((candidate, candidateIndex) => {
			if (candidate === slug) return;
			const distance = Math.abs(candidateIndex - currentIndex);
			const previous = scored.get(candidate);
			if (previous === undefined || distance < previous) scored.set(candidate, distance);
		});
	}

	const ranked = [...scored.entries()]
		.sort(
			([slugA, distanceA], [slugB, distanceB]) =>
				distanceA - distanceB || slugA.localeCompare(slugB, 'nl'),
		)
		.map(([candidate]) => candidate);

	if (ranked.length >= count) return ranked.slice(0, count);

	const fallback = UTRECHT_MUNICIPALITY_SLUGS.filter(
		(candidate) => candidate !== slug && !ranked.includes(candidate),
	);
	return [...ranked, ...fallback].slice(0, count);
}

export type ProvinceMunicipality = {
	slug: string;
	name: string;
	path: string;
};

export function getUtrechtMunicipalities(): ProvinceMunicipality[] {
	const municipalities = UTRECHT_MUNICIPALITY_SLUGS.map((slug) => {
		const city = getPublishedCity(slug);
		if (!city) {
			throw new Error(`Missing published city for Utrecht slug: ${slug}`);
		}
		return {
			slug,
			name: city.name,
			path: city.path,
		};
	});

	return municipalities.sort((a, b) => a.name.localeCompare(b.name, 'nl'));
}

export const utrechtProvince = {
	slug: 'utrecht',
	path: '/provincies/utrecht/',
	canonical: 'https://www.partybusnederland.nl/provincies/utrecht/',
	title: 'Partybus huren in Utrecht | Party Bussen Westland',
	metaDescription:
		'Partybus huren in provincie Utrecht? PartybusNederland.nl werkt samen met Party Bussen Westland. Rechtstreeks contact voor groepsvervoer vanuit Utrecht, Amersfoort, Nieuwegein, Zeist en de rest van de provincie.',
	h1: 'Partybus huren in Utrecht',
	eyebrow: 'Utrecht',
	lead: 'PartybusNederland.nl werkt in de provincie Utrecht samen met Party Bussen Westland. Voor een partybus, groepsvervoer of een vraag over beschikbaarheid neem je rechtstreeks contact op via WhatsApp.',
	heroImage: '/images/partners/party-bussen-westland/party-bussen-westland-hero.webp',
	heroImageAlt: 'Partybus van Party Bussen Westland',
	sections: {
		huren: {
			title: 'Partybus huren in provincie Utrecht',
			paragraphs: [
				'Provincie Utrecht ligt centraal in het land: de Domstad, Amersfoort, Nieuwegein, Veenendaal, Zeist, Woerden en Houten liggen dicht bij elkaar. Partybus huren in Utrecht begint met een duidelijke opstap, bestemming, datum en groepsgrootte.',
				'Party Bussen Westland is de partner van PartybusNederland.nl voor de hele provincie Utrecht. Het bedrijf is gevestigd in Naaldwijk en rijdt ritten met vertrek vanuit Utrechtse gemeenten. Je neemt rechtstreeks contact op via WhatsApp.',
				'Op de foto’s zie je partybussen, een minibus, touringcar, lounge, stoelen, tafel en koelkast. Welk voertuig past, hangt af van jullie groep en rit. Geef die gegevens door, dan kijken zij wat mogelijk is.',
			],
		},
		groepsvervoer: {
			title: 'Groepsvervoer vanuit Utrecht',
			paragraphs: [
				'Met groepsvervoer blijft het gezelschap bij elkaar van opstap tot terugkomst. Dat is praktisch vanaf Utrecht Centraal, Amersfoort, Nieuwegein of een verzamelpunt in Zeist, Woerden of Houten.',
				'Kies één duidelijke opstapplaats. Geef adressen, tussenstops en terugtijd door aan Party Bussen Westland, zodat de planning helder is.',
				'Vanuit provincie Utrecht zijn ritten naar de Randstad, festivals, feestlocaties of een avond uit goed te organiseren. Eén bus, één contactpersoon, één terugplan.',
			],
		},
		feesten: {
			title: 'Feesten, bruiloften en avonden uit',
			paragraphs: [
				'Voor een bruiloft, verjaardag, vrijgezellenfeest of avond uit in Utrecht is de rit vaak onderdeel van het programma. Muziek en sfeer in de bus maken het vertrek al deel van de avond.',
				'Plan opstap, stops en eindtijd realistisch. Avonden in de binnenstad van Utrecht of bij een feestlocatie in Zeist of Amersfoort kunnen drukker zijn; een kleine buffer helpt.',
			],
		},
		festivals: {
			title: 'Festival- en evenementenvervoer',
			paragraphs: [
				'Groepen uit Utrecht, Veenendaal, Houten of Amersfoort reizen regelmatig naar festivals en evenementen in Nederland. Samen heen en samen terug voorkomt verspreide taxi’s en parkeerzoekwerk.',
				'Controleer zelf tickets en toegang. Vermeld bij Party Bussen Westland of jullie bagage, extra stops of een late terugrit nodig hebben.',
			],
		},
		bedrijfsfeesten: {
			title: 'Bedrijfsfeest en zakelijk groepsvervoer',
			paragraphs: [
				'Voor een bedrijfsfeest, teamuitje of relatie-event vanuit Nieuwegein, Woerden, De Bilt of Utrecht blijft de groep bij elkaar vanaf kantoor, hotel of feestlocatie.',
				'Geef groepsgrootte, gewenste aankomsttijd en of een retour dezelfde avond nodig is. Eén organisator als contactpersoon houdt de planning overzichtelijk.',
			],
		},
		partijen: {
			title: 'Verjaardag en vrijgezellenfeest',
			paragraphs: [
				'Verjaardagen en vrijgezellenfeesten combineren vaak diner, activiteit en uitgaan. Meerdere stops vanuit bijvoorbeeld Zeist, Soest, IJsselstein of Wijk bij Duurstede zijn dan handig.',
				'Geef sfeerwensen en het aantal personen mee als je Party Bussen Westland benadert. Zij kijken welk voertuig bij jullie rit past.',
			],
		},
	},
	faqs: [
		{
			question: 'Wie is de partybuspartner voor provincie Utrecht?',
			answer:
				'Party Bussen Westland is de partner van PartybusNederland.nl voor de hele provincie Utrecht. Je neemt rechtstreeks contact op via WhatsApp of hun website.',
		},
		{
			question: 'Is Party Bussen Westland in Utrecht gevestigd?',
			answer:
				'Nee. Party Bussen Westland is gevestigd in Naaldwijk. Voor PartybusNederland.nl verzorgen zij de samenwerking voor provincie Utrecht.',
		},
		{
			question: 'Kan ik vanuit elke Utrechtse gemeente contact opnemen?',
			answer:
				'Ja. Deze provinciepagina is bedoeld voor de hele provincie Utrecht, van Utrecht en Amersfoort tot Veenendaal, Zeist, Woerden, Houten en de overige gemeenten. Kies hieronder je gemeente voor lokale informatie en neem contact op met Party Bussen Westland.',
		},
		{
			question: 'Wat kost een partybus in provincie Utrecht?',
			answer:
				'De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type voertuig. Er is geen vaste prijs per gemeente. Party Bussen Westland geeft de mogelijkheden door op basis van jullie rit.',
		},
		{
			question: 'Gaat WhatsApp naar Party Bussen Westland?',
			answer:
				'Ja. Op deze provinciepagina gaan de partner-WhatsApp-knoppen naar Party Bussen Westland. Noem in je bericht de opstapplaats in provincie Utrecht en dat je via PartybusNederland.nl komt.',
		},
	],
} as const;
