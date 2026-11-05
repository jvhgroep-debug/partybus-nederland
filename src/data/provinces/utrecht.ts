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
	title: 'Partybus huren provincie Utrecht | Feestbus & offerte',
	metaDescription:
		'Partybus of feestbus huren in de provincie Utrecht? Plan vertrek, extra stops en terugrit met Party Bussen Westland. Vraag via WhatsApp een passende ritofferte.',
	h1: 'Partybus huren in de provincie Utrecht',
	eyebrow: 'Utrecht',
	lead: 'Een feestbus voor jullie groep uit Amersfoort, Zeist, Woerden of een andere Utrechtse gemeente? Bespreek vertrekadres, bestemming en terugrit met Party Bussen Westland. Via WhatsApp vraag je een voorstel voor de complete rit aan.',
	heroImage: '/images/partners/party-bussen-westland/party-bussen-westland-hero.webp',
	heroImageAlt: 'Partybus van Party Bussen Westland',
	sections: {
		huren: {
			title: 'Een partybus vanuit jullie vertrekplaats in Utrecht',
			paragraphs: [
				'Een partybus huren in Utrecht begint bij de plaats waar jullie werkelijk instappen. Vertrekt iedereen bij een restaurant in Amersfoort, een kantoor in Nieuwegein of een eigen adres in Woerden? Geef dat volledige adres door, ook als jullie bestemming in Utrecht stad of buiten de provincie ligt.',
				'Deze pagina helpt groepen uit de hele provincie hun rit af te stemmen. Party Bussen Westland is onze vervoerspartner voor dit vertrekgebied en is gevestigd in Naaldwijk. Een plaatsnaam op deze website is geen vestiging of vaste bushalte; de vervoerder bevestigt de bereikbaarheid en beschikbaarheid voor jullie aanvraag.',
			],
		},
		groepsvervoer: {
			title: 'Eén verzamelpunt of meerdere opstapplaatsen?',
			paragraphs: [
				'Wonen de deelnemers in verschillende Utrechtse gemeenten, vergelijk dan één bereikbaar verzameladres met een route langs meerdere stops. Een adres in Soest naast vertrek uit Amersfoort vraagt een ander voorstel dan een rit die ook Woerden en Houten aandoet. Geef per adres het aantal instappers door.',
				'Laat Party Bussen Westland de volgorde en tijden beoordelen voordat je de ophaalafspraken met de groep deelt. Extra stops vragen rijtijd en tijd om te verzamelen en in te stappen. Spreek ook af of iedereen na afloop op dezelfde plek uitstapt of dat aparte eindadressen nodig zijn.',
			],
		},
		feesten: {
			title: 'Feestbus huren in Utrecht voor jullie gelegenheid',
			paragraphs: [
				'Zoek je een feestbus in Utrecht voor een verjaardag, bruiloft of vrijgezellenfeest? Geef behalve de gelegenheid ook het programma door. Voor een diner in Zeist gevolgd door uitgaan in een andere stad zijn de tussenstop en terugrit net zo belangrijk als het eerste vertrek.',
				'Partybus en feestbus zijn benamingen die bezoekers voor feestelijk groepsvervoer gebruiken. De aangeboden bus bepaalt wat er werkelijk aan boord is. Vraag naar zitplaatsen, muziek, verlichting, consumpties en huisregels; de foto’s op deze pagina zijn geen toezegging van een bepaalde uitvoering.',
			],
		},
		festivals: {
			title: 'Festivalvervoer vanuit de provincie Utrecht',
			paragraphs: [
				'Voor festivalvervoer vanuit Veenendaal, Houten, Amersfoort of een andere Utrechtse plaats vermeld je festivalnaam, editie en bezoekdag. Bespreek de heenrit en het ophalen na afloop apart: een festivaladres is niet automatisch de toegestane afzetzone of het juiste buspunt.',
				'Geef bij een campingweekend door hoeveel bagage meegaat en op welke dagen jullie heen en terug willen. Vraag de vervoerder de toegestane busroute en verzamelplek te bevestigen. Tickets regel je afzonderlijk; een vervoersaanvraag is geen toegangsbewijs of bevestigde boeking.',
			],
		},
		bedrijfsfeesten: {
			title: 'Bedrijfsuitje: vertrek bij kantoor, hotel of activiteit',
			paragraphs: [
				'Voor een bedrijfsuitje vanuit Nieuwegein, De Bilt of Woerden is het vertrekadres vaak duidelijk, maar de terugkomst niet voor iedere collega hetzelfde. Vraag vooraf of iedereen terug naar kantoor gaat of dat de groep één ander eindpunt wil afspreken. Laat eventuele extra afzetadressen in het voorstel opnemen.',
				'Heeft de activiteit een vaste begintijd, geef dan door wanneer de groep zich moet melden en bij welke ingang. Laat de vervoerder de vertrektijd beoordelen en houd aankomst, uitstappen en aanmelden als afzonderlijke onderdelen van de planning. Kies één contactpersoon voor wijzigingen in route of groepsgrootte.',
			],
		},
		partijen: {
			title: 'Wat kost een partybus huren in de provincie Utrecht?',
			paragraphs: [
				'Er is geen vaste prijs voor een partybus of feestbus in Utrecht. Datum, volledige route, groepsgrootte, voertuig en ritduur bepalen het voorstel. Een enkele rit vanuit Veenendaal is een andere aanvraag dan een retour met meerdere stops vanuit Woerden; vergelijk daarom steeds dezelfde ritgegevens.',
				'Vraag wat de totaalprijs omvat: heenrit, terugrit, extra stops, eventuele wachttijd en de afgesproken voorzieningen. Laat ook vastleggen wat er gebeurt bij uitloop of een gewijzigd aantal deelnemers. Alleen de vervoerder kan de prijs en beschikbaarheid voor jullie concrete rit bevestigen.',
				'Vul bij je WhatsApp-aanvraag naam, datum, gewenste vertrektijd, aantal personen, opstapadres, bestemming en gelegenheid in. Voeg de terugreis en opmerkingen toe. Je controleert en verstuurt het bericht zelf; vraag daarna om bevestiging van de ritafspraken voordat je een boeking maakt.',
			],
		},
	},
	faqs: [
		{
			question: 'Wat kost een partybus of feestbus huren in Utrecht?',
			answer:
				'De prijs hangt af van datum, route, voertuig, groepsgrootte, ritduur, extra stops en wachttijd. Er is geen vast provincietarief. Geef heen- en terugrit met alle adressen door en vraag Party Bussen Westland wat in de totaalprijs is opgenomen.',
		},
		{
			question: 'Kan ik vanuit een andere gemeente dan Utrecht stad vertrekken?',
			answer:
				'Je kunt een rit aanvragen vanuit alle 26 gemeenten op deze provinciepagina, zoals Amersfoort, Zeist, Woerden, Houten en Veenendaal. Vermeld het werkelijke opstapadres. Party Bussen Westland beoordeelt of de rit uitvoerbaar en beschikbaar is. Het bedrijf is gevestigd in Naaldwijk, niet in Utrecht.',
		},
		{
			question: 'Kunnen we op meerdere plaatsen in de provincie instappen?',
			answer:
				'Geef alle gewenste adressen, aantallen instappers en de bestemming door. De vervoerder bevestigt de route, bereikbaarheid, extra reistijd en kosten. Deel pas daarna de afgesproken ophaaltijden met de groep.',
		},
		{
			question: 'Huren we de partybus met chauffeur en is de terugrit inbegrepen?',
			answer:
				'De aanvraag gaat over vervoer door Party Bussen Westland met een chauffeur. Laat de aangeboden uitvoering bevestigen. Een terugrit is alleen afgesproken als deze in het voorstel staat; vermeld daarom de gewenste ophaaltijd en het eindadres afzonderlijk.',
		},
		{
			question: 'Hoeveel personen passen erin en welke voorzieningen zijn er?',
			answer:
				'Dat hangt af van de aangeboden bus. Geef het aantal reizigers en eventuele bagage door en vraag om bevestiging van de toegestane capaciteit. Bespreek muziek, verlichting en consumpties voor het concrete voertuig; deze zijn niet automatisch bij iedere uitvoering hetzelfde.',
		},
		{
			question: 'Hoe vraag ik een offerte aan voor mijn groep in provincie Utrecht?',
			answer:
				'Gebruik de WhatsApp-knop en vul datum, vertrektijd, aantal personen, opstapadres, bestemming en gelegenheid in. Voeg de terugreis en wensen toe. Het bericht gaat naar Party Bussen Westland via het bestaande partnernummer. Je verstuurt het zelf en spreekt prijs, beschikbaarheid en boeking rechtstreeks met de vervoerder af.',
		},
	],
} as const;
