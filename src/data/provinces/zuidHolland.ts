import { getPublishedCity } from '../cities/registry';

/** Official 50 Zuid-Holland municipalities with an existing PartybusNederland city page. */
export const ZUID_HOLLAND_MUNICIPALITY_SLUGS = [
	'alblasserdam',
	'albrandswaard',
	'alphen-aan-den-rijn',
	'barendrecht',
	'bodegraven-reeuwijk',
	'capelle-aan-den-ijssel',
	'delft',
	'den-haag',
	'dordrecht',
	'goeree-overflakkee',
	'gorinchem',
	'gouda',
	'hardinxveld-giessendam',
	'hendrik-ido-ambacht',
	'hillegom',
	'hoeksche-waard',
	'kaag-en-braassem',
	'katwijk',
	'krimpen-aan-den-ijssel',
	'krimpenerwaard',
	'lansingerland',
	'leiden',
	'leiderdorp',
	'leidschendam-voorburg',
	'lisse',
	'maassluis',
	'midden-delfland',
	'molenlanden',
	'nieuwkoop',
	'nissewaard',
	'noordwijk',
	'oegstgeest',
	'papendrecht',
	'pijnacker-nootdorp',
	'ridderkerk',
	'rijswijk-zh',
	'rotterdam',
	'schiedam',
	'sliedrecht',
	'teylingen',
	'vlaardingen',
	'voorne-aan-zee',
	'voorschoten',
	'waddinxveen',
	'wassenaar',
	'westland',
	'zoetermeer',
	'zoeterwoude',
	'zuidplas',
	'zwijndrecht',
] as const;

export type ZuidHollandMunicipalitySlug =
	(typeof ZUID_HOLLAND_MUNICIPALITY_SLUGS)[number];

const ZUID_HOLLAND_MUNICIPALITY_SET = new Set<string>(ZUID_HOLLAND_MUNICIPALITY_SLUGS);

export function isZuidHollandMunicipalitySlug(
	slug: string,
): slug is ZuidHollandMunicipalitySlug {
	return ZUID_HOLLAND_MUNICIPALITY_SET.has(slug);
}

/** @deprecated Use isZuidHollandMunicipalitySlug */
export const isZuidHollandTourgoTestSlug = isZuidHollandMunicipalitySlug;
/** @deprecated Use ZUID_HOLLAND_MUNICIPALITY_SLUGS */
export const ZUID_HOLLAND_TOURGO_TEST_SLUGS = ZUID_HOLLAND_MUNICIPALITY_SLUGS;

const ZUID_HOLLAND_NEIGHBOR_OVERRIDES: Partial<
	Record<ZuidHollandMunicipalitySlug, readonly ZuidHollandMunicipalitySlug[]>
> = {
	rotterdam: ['den-haag', 'delft', 'schiedam', 'vlaardingen', 'capelle-aan-den-ijssel'],
	'den-haag': ['rotterdam', 'delft', 'leiden', 'zoetermeer', 'rijswijk-zh'],
	delft: ['den-haag', 'rotterdam', 'rijswijk-zh', 'pijnacker-nootdorp', 'midden-delfland'],
	leiden: ['den-haag', 'oegstgeest', 'leiderdorp', 'katwijk', 'zoetermeer'],
	dordrecht: ['rotterdam', 'zwijndrecht', 'papendrecht', 'sliedrecht', 'barendrecht'],
	gouda: ['rotterdam', 'zoetermeer', 'alphen-aan-den-rijn', 'waddinxveen', 'bodegraven-reeuwijk'],
	zoetermeer: ['den-haag', 'leiden', 'pijnacker-nootdorp', 'lansingerland', 'rotterdam'],
	schiedam: ['rotterdam', 'vlaardingen', 'delft', 'maassluis', 'den-haag'],
	vlaardingen: ['schiedam', 'rotterdam', 'maassluis', 'delft', 'westland'],
	'capelle-aan-den-ijssel': ['rotterdam', 'krimpen-aan-den-ijssel', 'lansingerland', 'gouda', 'schiedam'],
};

const ZUID_HOLLAND_NEIGHBOR_REGIONS: readonly (readonly ZuidHollandMunicipalitySlug[])[] = [
	[
		'rotterdam',
		'schiedam',
		'vlaardingen',
		'maassluis',
		'capelle-aan-den-ijssel',
		'krimpen-aan-den-ijssel',
		'lansingerland',
		'ridderkerk',
		'barendrecht',
		'albrandswaard',
	],
	[
		'nissewaard',
		'voorne-aan-zee',
		'goeree-overflakkee',
		'hoeksche-waard',
		'barendrecht',
		'rotterdam',
		'maassluis',
	],
	[
		'dordrecht',
		'zwijndrecht',
		'papendrecht',
		'sliedrecht',
		'hendrik-ido-ambacht',
		'alblasserdam',
		'hardinxveld-giessendam',
		'molenlanden',
		'gorinchem',
		'ridderkerk',
	],
	[
		'den-haag',
		'delft',
		'rijswijk-zh',
		'leidschendam-voorburg',
		'westland',
		'pijnacker-nootdorp',
		'midden-delfland',
		'wassenaar',
		'voorschoten',
		'zoetermeer',
	],
	[
		'leiden',
		'leiderdorp',
		'oegstgeest',
		'katwijk',
		'noordwijk',
		'teylingen',
		'lisse',
		'hillegom',
		'kaag-en-braassem',
		'zoeterwoude',
		'nieuwkoop',
		'voorschoten',
	],
	[
		'gouda',
		'bodegraven-reeuwijk',
		'waddinxveen',
		'zuidplas',
		'krimpenerwaard',
		'alphen-aan-den-rijn',
		'lansingerland',
		'zoetermeer',
		'rotterdam',
	],
];

export function getZuidHollandNeighborSlugs(
	slug: ZuidHollandMunicipalitySlug,
	count = 5,
): readonly ZuidHollandMunicipalitySlug[] {
	const override = ZUID_HOLLAND_NEIGHBOR_OVERRIDES[slug];
	if (override) return override.slice(0, count);

	const scored = new Map<ZuidHollandMunicipalitySlug, number>();
	for (const region of ZUID_HOLLAND_NEIGHBOR_REGIONS) {
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

	const fallback = ZUID_HOLLAND_MUNICIPALITY_SLUGS.filter(
		(candidate) => candidate !== slug && !ranked.includes(candidate),
	);
	return [...ranked, ...fallback].slice(0, count);
}

const MUNICIPALITY_LABELS: Partial<Record<ZuidHollandMunicipalitySlug, string>> = {
	'rijswijk-zh': 'Rijswijk',
	'den-haag': 'Den Haag',
};

export type ProvinceMunicipality = {
	slug: string;
	name: string;
	path: string;
};

export function getZuidHollandMunicipalities(): ProvinceMunicipality[] {
	const municipalities = ZUID_HOLLAND_MUNICIPALITY_SLUGS.map((slug) => {
		const city = getPublishedCity(slug);
		if (!city) {
			throw new Error(`Missing published city for Zuid-Holland slug: ${slug}`);
		}
		return {
			slug,
			name: MUNICIPALITY_LABELS[slug] ?? city.name,
			path: city.path,
		};
	});

	return municipalities.sort((a, b) => a.name.localeCompare(b.name, 'nl'));
}

export const zuidHollandProvince = {
	slug: 'zuid-holland',
	path: '/provincies/zuid-holland/',
	canonical: 'https://www.partybusnederland.nl/provincies/zuid-holland/',
	title: 'Partybus Zuid-Holland | Huren, groepsvervoer & offertes vergelijken',
	metaDescription:
		'Partybus huren in Zuid-Holland? Tourgo Partybussen is partner voor feestvervoer in de provincie. Bekijk gemeenten van Rotterdam tot Den Haag en Leiden.',
	h1: 'Partybus huren in Zuid-Holland',
	eyebrow: 'Zuid-Holland',
	lead: 'Van Rotterdam tot Den Haag en van Leiden tot Dordrecht: vergelijk partybus Zuid-Holland voor groepsvervoer, feesten, festivals en zakelijke ritten. Tourgo Partybussen is de regionale partner.',
	heroImage: '/images/partners/tourgo-partybussen/tourgo-partybussen-hero.webp',
	heroImageAlt: 'Tourgo Partybussen partybus voor groepsvervoer in Zuid-Holland',
	sections: {
		huren: {
			title: 'Partybus huren in Zuid-Holland',
			paragraphs: [
				'Zuid-Holland combineert grote steden, kust, havens en festivals in één compacte provincie. Of je nu vertrekt vanuit Rotterdam, Den Haag, Leiden, Delft of een kleinere gemeente: partybus huren Zuid-Holland begint met een duidelijke route, groepsgrootte en planning.',
				'Via Partybus Nederland vergelijk je vrijblijvend meerdere aanbieders. Je geeft één keer datum, opstapplaats, bestemming en aantal personen door. Aanbieders reageren met een voorstel: van compacte feestbus tot XXL-groepsvervoer.',
				'De prijs hangt af van route, ritduur, datum, wachttijd en faciliteiten. Vergelijk niet alleen het totaalbedrag, maar ook capaciteit, muziek, verlichting en voorwaarden.',
			],
		},
		groepsvervoer: {
			title: 'Partybus groepsvervoer Zuid-Holland',
			paragraphs: [
				'Partybus groepsvervoer Zuid-Holland houdt je gezelschap bij elkaar van vertrek tot thuiskomst. Niemand hoeft als vaste chauffeur op te treden en niemand wacht op losse taxi’s of ingewikkelde ov-combinaties.',
				'Praktisch werkt één centraal verzamelpunt het best: station, centrum of een locatie aan de rand van de gemeente. Geef adressen, tussenstops en terugtijden vooraf door.',
				'Groepen uit Zuid-Holland reizen regelmatig naar Ahoy, Scheveningen, festivals, de Randstad of België. Een partybus maakt zulke ritten overzichtelijk: één voertuig, één contactpersoon, één terugplan.',
			],
		},
		feesten: {
			title: 'Feesten en evenementen in Zuid-Holland',
			paragraphs: [
				'Voor feesten en evenementen is een partybus in Zuid-Holland een logische keuze. Koningsdag, bedrijfsborrels, jubilea, vrijgezellenfeesten en groepsavonden vragen om strakke timing en sfeer al onderweg.',
				'Plan opstap, tussenstops en eindtijd realistisch. Avonden in Rotterdam, Den Haag of Leiden kunnen drukker zijn; een buffer van enkele minuten voorkomt stress bij vertrek.',
			],
		},
		festivals: {
			title: 'Festivals en lange dagen uit',
			paragraphs: [
				'Zuid-Holland ligt gunstig voor festivalvervoer: groepen vertrekken naar evenementen in de provincie, in Brabant, Flevoland of België. Samen aankomen en samen terugrijden voorkomt parkeergedoe.',
				'Controleer zelf tickets, toegang en officiële buszones. Vermeld in je aanvraag of je bagage, koelboxen of extra stops nodig hebt.',
			],
		},
		bedrijfsfeesten: {
			title: 'Bedrijfsfeesten en zakelijke ritten',
			paragraphs: [
				'Voor bedrijfsfeesten, teamuitjes, relatiedagen en personeelsfeesten biedt partybus Zuid-Holland representatief groepsvervoer vanaf kantoor, bedrijventerrein of feestlocatie.',
				'Noteer groepsgrootte, gewenste aankomsttijd en of retour dezelfde avond nodig is. Eén organisator als contactpersoon houdt timing overzichtelijk.',
			],
		},
		partijen: {
			title: 'Verjaardagen en vrijgezellenfeesten',
			paragraphs: [
				'Verjaardagen, vrijgezellenfeesten en jubilea combineren vaak diner, activiteit en uitgaan. Een partybus maakt meerdere stops haalbaar zonder dat de groep uit elkaar valt.',
				'Populaire routes lopen van woonwijk of hotel naar centrum, feestlocatie of festival. Geef wensen over sfeer en faciliteiten direct mee in je aanvraag.',
			],
		},
	},
	faqs: [
		{
			question: 'Kan ik in elke Zuid-Hollandse gemeente een partybus aanvragen?',
			answer:
				'Ja. Partybus Nederland heeft bestaande gemeentepagina’s voor alle 50 gemeenten in Zuid-Holland. Kies je gemeente in het overzicht of vraag via het offerteformulier vrijblijvend offertes aan.',
		},
		{
			question: 'Wie is de partybuspartner voor Zuid-Holland?',
			answer:
				'Tourgo Partybussen is de regionale partner voor Zuid-Holland. Je kunt rechtstreeks contact opnemen via WhatsApp of de website van Tourgo bezoeken. Offertes via het formulier behandelen we in een volgende stap.',
		},
		{
			question: 'Wat kost partybus huren in Zuid-Holland?',
			answer:
				'De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. Er is geen vaste prijs per provincie. Vergelijk meerdere offertes om prijs, capaciteit en voorwaarden naast elkaar te leggen.',
		},
		{
			question: 'Gaat de WhatsApp-knop naar Tourgo?',
			answer:
				'Op de Zuid-Hollandse provincie- en gemeentepagina’s gaan de partner-WhatsApp-knoppen naar Tourgo Partybussen. Noem in je bericht de gemeente en dat je via PartybusNederland.nl komt.',
		},
	],
} as const;
