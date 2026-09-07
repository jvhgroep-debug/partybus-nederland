import { getPublishedCity } from '../cities/registry';

/** Official 56 Noord-Brabant municipalities (phase 1 inventory). */
export const NOORD_BRABANT_MUNICIPALITY_SLUGS = [
	'alphen-chaam',
	'altena',
	'asten',
	'baarle-nassau',
	'bergeijk',
	'bergen-op-zoom',
	'bernheze',
	'best',
	'bladel',
	'boekel',
	'boxtel',
	'breda',
	'cranendonck',
	'deurne',
	'dongen',
	'drimmelen',
	'eersel',
	'eindhoven',
	'etten-leur',
	'geertruidenberg',
	'geldrop-mierlo',
	'gemert-bakel',
	'gilze-en-rijen',
	'goirle',
	'halderberge',
	'heeze-leende',
	'helmond',
	'den-bosch',
	'heusden',
	'hilvarenbeek',
	'laarbeek',
	'land-van-cuijk',
	'loon-op-zand',
	'maashorst',
	'meierijstad',
	'moerdijk',
	'nuenen-gerwen-en-nederwetten',
	'oirschot',
	'oisterwijk',
	'oosterhout',
	'oss',
	'reusel-de-mierden',
	'roosendaal',
	'rucphen',
	'sint-michielsgestel',
	'someren',
	'son-en-breugel',
	'steenbergen',
	'tilburg',
	'valkenswaard',
	'veldhoven',
	'vught',
	'waalre',
	'waalwijk',
	'woensdrecht',
	'zundert',
] as const;

export type NoordBrabantMunicipalitySlug =
	(typeof NOORD_BRABANT_MUNICIPALITY_SLUGS)[number];

const NOORD_BRABANT_MUNICIPALITY_SET = new Set<string>(
	NOORD_BRABANT_MUNICIPALITY_SLUGS,
);

export function isNoordBrabantMunicipalitySlug(
	slug: string,
): slug is NoordBrabantMunicipalitySlug {
	return NOORD_BRABANT_MUNICIPALITY_SET.has(slug);
}

const NOORD_BRABANT_NEIGHBOR_OVERRIDES: Partial<
	Record<NoordBrabantMunicipalitySlug, readonly NoordBrabantMunicipalitySlug[]>
> = {
	breda: [
		'oosterhout',
		'etten-leur',
		'tilburg',
		'roosendaal',
		'bergen-op-zoom',
		'baarle-nassau',
	],
	eindhoven: [
		'veldhoven',
		'geldrop-mierlo',
		'nuenen-gerwen-en-nederwetten',
		'waalre',
		'best',
		'helmond',
	],
	tilburg: [
		'goirle',
		'oisterwijk',
		'dongen',
		'loon-op-zand',
		'waalwijk',
		'hilvarenbeek',
	],
	roosendaal: [
		'bergen-op-zoom',
		'etten-leur',
		'halderberge',
		'rucphen',
		'steenbergen',
		'woensdrecht',
	],
};

const NOORD_BRABANT_NEIGHBOR_REGIONS: readonly (
	readonly NoordBrabantMunicipalitySlug[]
)[] = [
	[
		'woensdrecht',
		'bergen-op-zoom',
		'steenbergen',
		'roosendaal',
		'rucphen',
		'halderberge',
		'etten-leur',
		'moerdijk',
		'zundert',
		'breda',
		'drimmelen',
		'geertruidenberg',
		'oosterhout',
		'alphen-chaam',
		'baarle-nassau',
	],
	[
		'altena',
		'waalwijk',
		'loon-op-zand',
		'heusden',
		'den-bosch',
		'geertruidenberg',
		'drimmelen',
		'moerdijk',
	],
	[
		'breda',
		'gilze-en-rijen',
		'dongen',
		'tilburg',
		'goirle',
		'hilvarenbeek',
		'oisterwijk',
		'loon-op-zand',
		'waalwijk',
		'heusden',
		'geertruidenberg',
		'oosterhout',
		'boxtel',
	],
	[
		'heusden',
		'den-bosch',
		'vught',
		'sint-michielsgestel',
		'boxtel',
		'meierijstad',
		'bernheze',
		'maashorst',
		'oss',
		'land-van-cuijk',
		'boekel',
	],
	[
		'oirschot',
		'best',
		'son-en-breugel',
		'nuenen-gerwen-en-nederwetten',
		'eindhoven',
		'veldhoven',
		'geldrop-mierlo',
		'waalre',
		'heeze-leende',
		'valkenswaard',
		'cranendonck',
		'eersel',
		'bladel',
		'reusel-de-mierden',
		'bergeijk',
	],
	[
		'son-en-breugel',
		'nuenen-gerwen-en-nederwetten',
		'geldrop-mierlo',
		'helmond',
		'laarbeek',
		'gemert-bakel',
		'boekel',
		'maashorst',
		'deurne',
		'asten',
		'someren',
		'heeze-leende',
	],
];

export function getNoordBrabantNeighborSlugs(
	slug: NoordBrabantMunicipalitySlug,
	count = 6,
): readonly NoordBrabantMunicipalitySlug[] {
	const override = NOORD_BRABANT_NEIGHBOR_OVERRIDES[slug];
	if (override) return override.slice(0, count);

	const scored = new Map<NoordBrabantMunicipalitySlug, number>();
	for (const region of NOORD_BRABANT_NEIGHBOR_REGIONS) {
		const currentIndex = region.indexOf(slug);
		if (currentIndex < 0) continue;

		region.forEach((candidate, candidateIndex) => {
			if (candidate === slug) return;
			const distance = Math.abs(candidateIndex - currentIndex);
			const previous = scored.get(candidate);
			if (previous === undefined || distance < previous) scored.set(candidate, distance);
		});
	}

	return [...scored.entries()]
		.sort(([slugA, distanceA], [slugB, distanceB]) =>
			distanceA - distanceB || slugA.localeCompare(slugB, 'nl'))
		.slice(0, count)
		.map(([candidate]) => candidate);
}

const MUNICIPALITY_LABELS: Partial<Record<(typeof NOORD_BRABANT_MUNICIPALITY_SLUGS)[number], string>> = {
	'den-bosch': "'s-Hertogenbosch",
};

export type ProvinceMunicipality = {
	slug: string;
	name: string;
	path: string;
};

export function getNoordBrabantMunicipalities(): ProvinceMunicipality[] {
	const municipalities = NOORD_BRABANT_MUNICIPALITY_SLUGS.map((slug) => {
		const city = getPublishedCity(slug);
		if (!city) {
			throw new Error(`Missing published city for Noord-Brabant slug: ${slug}`);
		}
		return {
			slug,
			name: MUNICIPALITY_LABELS[slug] ?? city.name,
			path: city.path,
		};
	});

	return municipalities.sort((a, b) => a.name.localeCompare(b.name, 'nl'));
}

export const noordBrabantProvince = {
	slug: 'noord-brabant',
	path: '/provincies/noord-brabant/',
	canonical: 'https://www.partybusnederland.nl/provincies/noord-brabant/',
	title: 'Partybus Noord-Brabant | Huren, groepsvervoer & offertes vergelijken',
	metaDescription:
		'Partybus huren in Noord-Brabant? Vergelijk partybus Brabant voor groepsvervoer, feesten, festivals en bedrijfsuitjes. Offertes voor alle 56 gemeenten in Brabant.',
	h1: 'Partybus huren in Noord-Brabant',
	eyebrow: 'Noord-Brabant',
	lead: 'Van Eindhoven tot Breda en van Tilburg tot Baarle-Nassau: vergelijk partybus Brabant voor groepsvervoer, feesten, festivals en zakelijke ritten. Eén aanvraag, meerdere offertes — in alle 56 Brabantse gemeenten.',
	heroImage: '/images/hero-partybus.png',
	heroImageAlt: 'Partybus voor groepsvervoer in Noord-Brabant',
	sections: {
		huren: {
			title: 'Partybus huren in Noord-Brabant',
			paragraphs: [
				'Noord-Brabant is één van de populairste provincies voor groepsritten: grote steden, festivals in Brabant en grensoverschrijdende bestemmingen liggen binnen handbereik via A2, A50, A58 en A59. Of je nu vertrekt vanuit Eindhoven, Breda, Tilburg, Den Bosch of een kleinere gemeente — partybus huren Brabant begint met een duidelijke route, groepsgrootte en planning.',
				'Via Partybus Nederland vergelijk je vrijblijvend meerdere aanbieders voor partybus Noord-Brabant. Je geeft één keer je datum, opstapplaats, bestemming en aantal personen door. Aanbieders reageren met een voorstel op maat: van compacte feestbus tot luxe groepsvoertuig voor groepen tot maximaal 80 personen.',
				'De prijs hangt af van route, ritduur, datum, wachttijd en faciliteiten. Vergelijk daarom niet alleen het totaalbedrag, maar ook capaciteit, muziek, verlichting en voorwaarden. Zo kies je een partybus die past bij jullie avond, festivalweekend of zakelijk programma.',
			],
		},
		groepsvervoer: {
			title: 'Partybus groepsvervoer Noord-Brabant',
			paragraphs: [
				'Partybus groepsvervoer Noord-Brabant houdt je gezelschap bij elkaar van vertrek tot thuiskomst. Niemand hoeft als vaste chauffeur op te treden en niemand hoeft te wachten op losse taxi\'s of ingewikkelde ov-combinaties. Dat maakt de formule aantrekkelijk voor vriendengroepen, families, collega\'s en verenigingen.',
				'Praktisch werkt één centraal verzamelpunt het best: station, centrum of een locatie aan de rand van de gemeente. Geef alle adressen, tussenstops en terugtijden vooraf door. Hoe concreter je aanvraag, hoe sneller je passende offertes ontvangt voor partybus huren Noord-Brabant.',
				'Brabantse groepen reizen regelmatig naar uitgaanslocaties in de Randstad, feestlocaties in Limburg, attracties zoals de Efteling of festivals over de grens. Een partybus maakt zulke ritten overzichtelijk: één voertuig, één contactpersoon, één terugplan.',
			],
		},
		feesten: {
			title: 'Feesten en evenementen in Brabant',
			paragraphs: [
				'Voor feesten en evenementen is partybus Brabant een logische keuze. Carnaval, Koningsdag, bedrijfsborrels, jubilea en groepsfeesten in de regio vragen om strakke timing en een feestelijke sfeer al onderweg. Muziek, verlichting en een gedeelde rit maken het vervoer onderdeel van het programma.',
				'Plan opstap, tussenstops en eindtijd realistisch. Avonden in de binnenstad of rond evenemententerreinen kunnen drukker zijn; een buffer van enkele minuten voorkomt stress bij vertrek. Leg huisregels en contact met de chauffeur vooraf vast, zodat iedereen weet wat geldt in het voertuig.',
			],
		},
		festivals: {
			title: 'Festivals en lange dagen uit',
			paragraphs: [
				'Brabant ligt gunstig voor festivalvervoer: groepen vertrekken naar evenementen in de provincie, in Limburg, Flevoland of België. Partybus huren Brabant voor een festival betekent dat jullie samen aankomen en samen terugrijden — zonder parkeergedoe of verspreide terugreizen.',
				'Controleer zelf tickets, toegang en officiële buszones op het festivalterrein. De vervoerder beoordeelt route, tijden en haal- en brengplek. Vermeld in je aanvraag of je bagage, koelboxen of extra stops nodig hebt, zodat het voorstel past bij jullie festivaldag.',
			],
		},
		bedrijfsfeesten: {
			title: 'Bedrijfsfeesten en zakelijke ritten',
			paragraphs: [
				'Voor bedrijfsfeesten, teamuitjes, relatiedagen en personeelsfeesten biedt partybus Noord-Brabant representatief groepsvervoer. Vertrek vanaf kantoor, bedrijventerrein of feestlocatie; de groep blijft professioneel en feestelijk tegelijk onderweg.',
				'Noteer zakelijk de groepsgrootte, gewenste aankomsttijd, eventuele VIP-opstap en of retour dezelfde avond nodig is. Eén organisator als contactpersoon houdt de passagierslijst en timing overzichtelijk voor de aanbieder.',
			],
		},
		partijen: {
			title: 'Verjaardagen en vrijgezellenfeesten',
			paragraphs: [
				'Verjaardagen, vrijgezellenfeesten en jubilea in Brabant combineren vaak diner, activiteit en uitgaan op één avond. Een partybus maakt meerdere stops haalbaar zonder dat de groep uit elkaar valt. Vraag vooraf naar capaciteit, muziek en of meerdere opstapplaatsen binnen dezelfde gemeente mogelijk zijn.',
				'Populaire routes lopen van woonwijk of hotel naar centrum, feestlocatie of festival. Geef wensen over sfeer en faciliteiten direct mee in je aanvraag — dan vergelijk je offertes die echt bij jullie feest passen.',
			],
		},
	},
	faqs: [
		{
			question: 'Kan ik in elke Brabantse gemeente een partybus huren?',
			answer: 'Ja. Partybus Nederland dekt alle 56 gemeenten in Noord-Brabant. Kies je gemeente in het overzicht op deze pagina en vraag daar of via het centrale offerteformulier vrijblijvend offertes aan.',
		},
		{
			question: 'Wat kost partybus huren in Noord-Brabant?',
			answer: 'De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. Er is geen vaste prijs per provincie. Vergelijk meerdere offertes om prijs, capaciteit en voorwaarden naast elkaar te leggen.',
		},
		{
			question: 'Wat is het verschil tussen partybus Brabant en partybus Noord-Brabant?',
			answer: 'Beide termen worden gebruikt voor hetzelfde: luxe groepsvervoer met chauffeur vanuit gemeenten in Noord-Brabant. De dekking en aanvraagprocedure zijn identiek.',
		},
		{
			question: 'Is Prestige Coach Service beschikbaar in heel Noord-Brabant?',
			answer: 'Ja. Prestige Coach Service is gevestigd in Baarle-Nassau en neemt aanvragen aan vanuit alle Brabantse gemeenten. Je kunt rechtstreeks contact opnemen via WhatsApp.',
		},
	],
} as const;
