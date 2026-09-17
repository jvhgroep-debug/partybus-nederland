import type { CityFaq, CityPageData, CityWhyItem } from '../cities/types';
import type { InfoCard } from '../guides/partybusInfo';
import { partyBussenWestland } from './partyBussenWestland';

const partnerName = partyBussenWestland.publicProfile.name;

function variantIndex(slug: string, count: number): number {
	return [...slug].reduce((total, character) => total + character.charCodeAt(0), 0) % count;
}

function pick<T>(slug: string, variants: readonly T[]): T {
	return variants[variantIndex(slug, variants.length)];
}

function rewriteWhyItems(cityName: string, slug: string, items: readonly CityWhyItem[]): CityWhyItem[] {
	return items.map((item, index) => {
		if (index === 1 || /vergelijk/i.test(item.title)) {
			return {
				...item,
				title: pick(`${slug}-why`, [
					'Luxe en faciliteiten op maat',
					'Kies sfeer en uitrusting',
					'Capaciteit en interieur',
					'Feestelijke inrichting',
				]),
				text: pick(`${slug}-why-text`, [
					`Stem met ${partnerName} af welke bus vanuit ${cityName} past bij capaciteit, muziek, verlichting en sfeer.`,
					`${partnerName} heeft verschillende voertuigen. Geef vanuit ${cityName} door wat jullie nodig hebben.`,
					`Van compact tot groter groepsvervoer: ${partnerName} helpt kiezen wat bij jullie groep vanuit ${cityName} past.`,
					`Muziek, licht en ruimte regel je met ${partnerName}, passend bij de rit vanuit ${cityName}.`,
				]),
			};
		}

		return item;
	});
}

function rewriteFaqs(cityName: string, slug: string, faqs: readonly CityFaq[]): CityFaq[] {
	return faqs.map((faq) => {
		const question = faq.question;
		const answer = faq.answer;

		if (
			/hoe werkt|aanvragen vanuit/i.test(question)
			|| /aanbieders kunnen daarna|vergelijkt vrijblijvend/i.test(answer)
		) {
			return {
				question: pick(`${slug}-faq-how`, [
					`Hoe regel ik een partybus vanuit ${cityName}?`,
					`Hoe neem ik contact op voor een partybus vanuit ${cityName}?`,
					`Wat is de eerste stap voor een partybus vanuit ${cityName}?`,
					`Hoe vraag ik de mogelijkheden vanuit ${cityName} aan?`,
				]),
				answer: pick(`${slug}-faq-how-a`, [
					`PartybusNederland.nl werkt in provincie Utrecht samen met ${partnerName}. Neem rechtstreeks contact op via WhatsApp of de website en noem opstap in ${cityName}, datum, groepsgrootte en bestemming.`,
					`Voor een partybus vanuit ${cityName} neem je contact op met ${partnerName}, de Utrecht-partner van PartybusNederland.nl. Deel route, tijden en aantal personen, dan kijken zij wat mogelijk is.`,
					`Stuur ${partnerName} een bericht met jullie plannen vanuit ${cityName}. Zij denken mee over voertuig en planning.`,
					`Je hoeft geen meerdere bedrijven te benaderen. In provincie Utrecht is ${partnerName} de partner: contact vanuit ${cityName} loopt rechtstreeks via hen.`,
				]),
			};
		}

		if (/hoeveel personen|capaciteit/i.test(question)) {
			return {
				...faq,
				answer:
					'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door als je Party Bussen Westland benadert.',
			};
		}

		if (/meerdere opstapplaatsen/i.test(question)) {
			return {
				...faq,
				answer: answer
					.replace(/de aanbieder/gi, partnerName)
					.replace(/aanbieders/gi, partnerName),
			};
		}

		if (/belgië of duitsland|grensoverschrijdend/i.test(question) || /veel aanbieders/i.test(answer)) {
			return {
				...faq,
				answer:
					`Ritten naar België of Duitsland zijn in overleg met ${partnerName} vaak mogelijk. Vermeld de eindbestemming duidelijk, zodat zij kunnen aangeven wat voor jullie rit haalbaar is.`,
			};
		}

		if (/waar hangt de prijs|prijs vanaf/i.test(question) || /meerdere offertes/i.test(answer)) {
			return {
				question: `Wat kost een partybus vanuit ${cityName}?`,
				answer: pick(`${slug}-faq-price`, [
					`De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. Er is geen vaste prijs vanuit ${cityName}. ${partnerName} geeft de mogelijkheden door op basis van jullie rit.`,
					`Kosten voor een rit vanuit ${cityName} verschillen per planning. Neem contact op met ${partnerName} voor een inschatting op jullie datum en route.`,
					`Er is geen landelijke vast tarief. ${partnerName} bekijkt vanuit ${cityName} wat de rit vraagt: afstand, tijden, groep en gewenste bus.`,
					`Vraag ${partnerName} naar de mogelijkheden voor jullie rit vanuit ${cityName}. Prijs volgt uit concrete gegevens, niet uit een standaardtarief.`,
				]),
			};
		}

		if (/aanvraag vrijblijvend/i.test(question) || /gratis en vrijblijvend/i.test(answer)) {
			return {
				question: `Zit ik ergens aan vast als ik ${partnerName} vanuit ${cityName} benader?`,
				answer: pick(`${slug}-faq-vrij`, [
					`Nee. Een eerste vraag via WhatsApp of de website van ${partnerName} is vrijblijvend. Je maakt pas een afspraak als de rit vanuit ${cityName} rond is.`,
					`Contact met ${partnerName} over een rit vanuit ${cityName} verplicht je tot niets. Je bespreekt eerst de mogelijkheden.`,
					`Je kunt ${partnerName} vrijblijvend benaderen. Boeken doe je pas als jullie akkoord zijn met de afspraak voor de rit vanuit ${cityName}.`,
					`Informeren bij ${partnerName} is vrijblijvend. Noem dat je via PartybusNederland.nl komt en vertel jullie plannen vanuit ${cityName}.`,
				]),
			};
		}

		if (/heenreis en terugreis/i.test(question)) {
			return {
				...faq,
				answer:
					`Ja. Geef beide tijden en locaties door aan ${partnerName}. Of de bus blijft wachten of later terugkomt, stem je met hen af.`,
			};
		}

		if (/aanbieders|vergelijk|offertes/i.test(`${question} ${answer}`)) {
			return {
				...faq,
				answer: answer
					.replace(/aanbieders/gi, partnerName)
					.replace(/een aanbieder/gi, partnerName)
					.replace(/de aanbieder/gi, partnerName)
					.replace(/meerdere offertes/gi, 'de mogelijkheden')
					.replace(/offertes/gi, 'mogelijkheden')
					.replace(/vergelijk(?:t|en)? vrijblijvend/gi, 'bespreek je')
					.replace(/jij vergelijkt vrijblijvend en kiest zelf\.?/gi, `${partnerName} denkt mee over de rit.`),
			};
		}

		return faq;
	});
}

/**
 * Commercial partner copy for Utrecht municipality pages.
 * SEO title, meta description, h1, path and canonical stay unchanged.
 * Unique local pickup, destinations, activities and remaining FAQ copy stay in place.
 */
export function applyPartyBussenWestlandMunicipalityCopy(city: CityPageData): CityPageData {
	const { name, slug } = city;
	const introP2 = city.intro.paragraphs[1];
	const keepIntroP2 =
		typeof introP2 === 'string' && !/vergelijk|aanbieders|offertes/i.test(introP2)
			? introP2
			: `Een partybus is geschikt voor onder meer een vrijgezellenfeest, bruiloft, bedrijfsuitje, verjaardag, gala, schoolfeest of festivalrit vanuit ${name}. Kies een centrale opstapplaats en geef aan of een terugrit of meerdere stops nodig zijn.`;

	const introP1 = pick(slug, [
		`Partybus huren in ${name}? PartybusNederland.nl werkt in provincie Utrecht samen met ${partnerName}. Neem rechtstreeks contact op voor informatie of beschikbaarheid.`,
		`Voor een partybus, groepsvervoer of een vraag over de mogelijkheden vanuit ${name} neem je contact op met ${partnerName}, de partner van PartybusNederland.nl in provincie Utrecht.`,
		`PartybusNederland.nl werkt in provincie Utrecht samen met ${partnerName}. Vertrek je vanuit ${name}, dan regel je de rit rechtstreeks met hen.`,
		`Wil je een partybus huren vanuit ${name}? ${partnerName} is de Utrecht-aanbieder van PartybusNederland.nl. Zij denken mee over route, groepsgrootte en planning.`,
	]);

	const introP3 = pick(`${slug}-p3`, [
		`De prijs hangt af van datum, route, ritduur, wachttijd en groepsgrootte tot maximaal 80 personen. ${partnerName} geeft vanuit ${name} aan wat voor jullie rit mogelijk is.`,
		`Capaciteit, muziek, verlichting en extra stops stem je af met ${partnerName}. Zo blijft de rit vanuit ${name} overzichtelijk voor de hele groep.`,
		`Of je nu naar een festival, een avond in de Randstad of een bedrijfsuitje gaat: vanuit ${name} start de planning bij ${partnerName}.`,
		`Geef datum, opstap in ${name} en bestemming door. ${partnerName} bekijkt welk voertuig en welke timing bij jullie groep passen.`,
	]);

	return {
		...city,
		hero: {
			...city.hero,
			subtitle: pick(`${slug}-hero`, [
				`PartybusNederland.nl werkt in provincie Utrecht samen met ${partnerName}. Neem rechtstreeks contact op voor de mogelijkheden vanuit ${name}.`,
				`Voor een partybus vanuit ${name} neem je contact op met ${partnerName}, de partner van PartybusNederland.nl in provincie Utrecht.`,
				`${partnerName} is de partybuspartner voor provincie Utrecht. Vraag vanuit ${name} rechtstreeks de mogelijkheden aan.`,
				`Huur een partybus vanuit ${name} via ${partnerName}, de Utrecht-partner van PartybusNederland.nl.`,
			]),
			trustItems: [
				'Party Bussen Westland, onze partner voor Utrecht',
				'Rechtstreeks contact via WhatsApp',
				'Geschikt voor groepen tot 80 personen',
				'Ritten door Nederland en België',
			],
		},
		intro: {
			...city.intro,
			paragraphs: [introP1, keepIntroP2, introP3],
		},
		why: {
			...city.why,
			items: rewriteWhyItems(name, slug, city.why.items),
		},
		locations: {
			...city.locations,
			lead: pick(`${slug}-loc`, [
				`Voorbeelden van routes vanuit ${name}. De bestemming en exacte opstapplaats stem je af met ${partnerName}.`,
				`Vanuit ${name} zijn steden, festivals en avondlocaties goed bereikbaar. ${partnerName} plant de rit samen met jullie.`,
				`Kies een bestemming die bij jullie groep past. ${partnerName} denkt vanuit ${name} mee over route en timing.`,
				`Populaire ritten vanuit ${name} lopen naar de Randstad, festivals of een feestlocatie. Geef jullie wens door aan ${partnerName}.`,
			]),
			items: city.locations.items.map((item) => ({
				...item,
				text: item.text
					.replace(/in overleg met de aanbieder/gi, `in overleg met ${partnerName}`)
					.replace(/de aanbieder/gi, partnerName),
			})),
		},
		activities: {
			...city.activities,
			lead: pick(`${slug}-fest`, [
				`Plan heen- en terugvervoer vanuit ${name} naar festivals in Nederland en België samen met ${partnerName}.`,
				`Festivalritten vanuit ${name} regel je met ${partnerName}: één bus, één groep, één terugplan.`,
				`Vanuit ${name} naar een festival? ${partnerName} helpt met de planning van vertrek en terugkomst.`,
				`Geef festival, datum en groepsgrootte vanuit ${name} door aan ${partnerName}, dan kijken zij naar de rit.`,
			]),
			items: city.activities.items.map((item) => ({
				...item,
				text: item.text.replace(/in je aanvraag/gi, `bij ${partnerName}`),
			})),
		},
		pickup: {
			...city.pickup,
			lead: /aanbieder|offerte/i.test(city.pickup.lead)
				? pick(`${slug}-pickup`, [
						`Kies een centrale verzamelplek in of rond ${name}. De exacte opstap stem je af met ${partnerName}.`,
						`In ${name} werkt een duidelijk verzamelpunt het best. ${partnerName} geeft aan welke opstap voor jullie rit haalbaar is.`,
						`Spreek één opstapplaats in of rond ${name} af met ${partnerName}, zodat iedereen op tijd bij elkaar is.`,
						`Geef de gewenste opstap in ${name} door aan ${partnerName}. Zij stemmen bereikbaarheid en timing met jullie af.`,
					])
				: city.pickup.lead.replace(/de aanbieder/gi, partnerName),
			note: pick(`${slug}-note`, [
				`Geef opstap en bestemming vanuit ${name} mee als je ${partnerName} benadert, dan is de rit sneller in te schatten.`,
				`Noem in je bericht aan ${partnerName} de opstapplaats in ${name}, de bestemming en het aantal personen.`,
				`Hoe concreter jullie route vanuit ${name}, hoe gerichter ${partnerName} de mogelijkheden kan aangeven.`,
				`Deel datum, opstap in ${name} en terugtijd met ${partnerName}, zodat de planning helder is.`,
			]),
		},
		faqs: rewriteFaqs(name, slug, city.faqs),
		cta: {
			...city.cta,
			title: pick(`${slug}-cta-t`, [
				`Neem contact op met ${partnerName} voor een partybus vanuit ${name}`,
				`Partybus nodig vanuit ${name}? ${partnerName} denkt met jullie mee`,
				`Regel de rit vanuit ${name} rechtstreeks met ${partnerName}`,
				`WhatsApp ${partnerName} voor de mogelijkheden vanuit ${name}`,
			]),
			text: pick(`${slug}-cta-x`, [
				`Vertel wanneer je wilt vertrekken, met hoeveel personen en wat je bestemming is. ${partnerName} is onze partner voor provincie Utrecht.`,
				`Deel datum, opstap in ${name} en route met ${partnerName}. Zij geven aan wat er mogelijk is voor jullie groep.`,
				`In provincie Utrecht werk je via PartybusNederland.nl rechtstreeks met ${partnerName}.`,
				`Stuur ${partnerName} een bericht via WhatsApp of bekijk hun bussen. Noem dat je vanuit ${name} via PartybusNederland.nl komt.`,
			]),
		},
	};
}

export function westlandHowItWorks(cityName: string, slug: string) {
	return [
		{
			title: pick(`${slug}-step1`, [
				'Deel jullie rit',
				'Stuur de plannen door',
				'Vertel wat jullie nodig hebben',
				'Geef de basisgegevens door',
			]),
			text: pick(`${slug}-step1t`, [
				`Stuur datum, groepsgrootte, opstapplaats in ${cityName}, bestemming en gewenste tijden naar ${partnerName}.`,
				`Noem in je bericht aan ${partnerName} waar jullie in ${cityName} opstappen, waar naartoe en met hoeveel personen.`,
				`Hoe concreter de rit vanuit ${cityName}, hoe sneller ${partnerName} kan aangeven wat mogelijk is.`,
				`Een WhatsApp of bericht via de website van ${partnerName} met jullie route vanuit ${cityName} is genoeg om te starten.`,
			]),
		},
		{
			title: pick(`${slug}-step2`, [
				'Overleg met de partner',
				'Bekijk de mogelijkheden',
				`${partnerName} denkt mee`,
				'Stem bus en planning af',
			]),
			text: pick(`${slug}-step2t`, [
				`${partnerName} bekijkt welk voertuig, welke timing en welke route bij jullie groep vanuit ${cityName} passen.`,
				`Jullie spreken de rit vanuit ${cityName} rechtstreeks af met ${partnerName}: capaciteit, sfeer en voorwaarden.`,
				`${partnerName} is de partybuspartner voor provincie Utrecht.`,
				`${partnerName} geeft aan wat haalbaar is voor de rit vanuit ${cityName}, van compacte feestbus tot groter groepsvervoer.`,
			]),
		},
		{
			title: pick(`${slug}-step3`, [
				'Regel de rit',
				'Maak de afspraak rond',
				'Bevestig de details',
				'Leg de rit vast',
			]),
			text: pick(`${slug}-step3t`, [
				`Als de rit past, maak je de afspraak rechtstreeks met ${partnerName}. Een eerste vraag is vrijblijvend.`,
				`De boeking loopt rechtstreeks via ${partnerName} voor jullie rit vanuit ${cityName}.`,
				`Jullie houden één aanspreekpunt: ${partnerName} voor provincie Utrecht.`,
				`Na akkoord legt ${partnerName} de rit vanuit ${cityName} vast, inclusief opstap en terugkomst.`,
			]),
		},
	] as const;
}

export function westlandConversionCopy(cityName: string, slug: string) {
	return {
		eyebrow: pick(`${slug}-conv-e`, [
			`Partybus vanuit ${cityName} nodig?`,
			`Groepsvervoer vanuit ${cityName}?`,
			`Feestvervoer vanuit ${cityName}?`,
			`Rit plannen vanuit ${cityName}?`,
		]),
		headline: pick(`${slug}-conv-h`, [
			`Neem rechtstreeks contact op met ${partnerName}, onze partner voor provincie Utrecht.`,
			`${partnerName} denkt mee over datum, route en groepsgrootte voor jullie rit vanuit ${cityName}.`,
			`PartybusNederland.nl werkt in provincie Utrecht samen met ${partnerName}. Stuur hen een bericht.`,
			`Vraag ${partnerName} naar de mogelijkheden voor een partybus vanuit ${cityName}.`,
		]),
	};
}

export function westlandCityInfoLead(cityName: string, slug: string): string {
	return pick(`${slug}-info`, [
		`Handige informatie als je vanuit ${cityName} een partybus plant: waar de prijs van afhangt en hoe je de rit met ${partnerName} voorbereidt.`,
		`Praktische aandachtspunten voor een rit vanuit ${cityName} met ${partnerName}, de partner voor provincie Utrecht.`,
		`Vanuit ${cityName} regel je de partybus met ${partnerName}. Hieronder waar je op let bij planning, groepsgrootte en uitrusting.`,
		`Zo maak je vanuit ${cityName} een duidelijke vraag aan ${partnerName}, de partner voor provincie Utrecht.`,
	]);
}

export function westlandTipsLead(cityName: string, slug: string): string {
	return pick(`${slug}-tips`, [
		`Zo bereid je een partybusrit vanuit ${cityName} goed voor — van route tot voorwaarden.`,
		`Praktische voorbereiding voor een rit vanuit ${cityName} met ${partnerName}.`,
		`Een paar punten die helpen als je ${partnerName} benadert voor vertrek vanuit ${cityName}.`,
		`Van opstap in ${cityName} tot terugkomst: zo blijft de planning overzichtelijk.`,
	]);
}

export const westlandPricingCards: readonly InfoCard[] = [
	{
		title: 'Datum en seizoen',
		text: 'Weekenden, feestdagen en festivalperiodes zijn vaak drukker dan doordeweekse ritten. Vroeg contact opnemen geeft meer ruimte in de planning.',
	},
	{
		title: 'Route en duur',
		text: `Afstand, reistijd, wachttijd en eventuele tussenstops bepalen een groot deel van de rit. Geef die gegevens door aan ${partnerName}.`,
	},
	{
		title: 'Groepsgrootte',
		text: 'Partybussen verschillen in capaciteit. Groepen tot maximaal 80 personen zijn mogelijk, afhankelijk van het voertuig.',
	},
	{
		title: 'Opties en uitstraling',
		text: 'Verlichting, geluid, bararrangement of een luxere bus beïnvloeden de rit. Vraag alleen wat je écht nodig hebt.',
	},
];

export const westlandBookingTips: readonly InfoCard[] = [
	{
		title: 'Geef een duidelijke route door',
		text: `Noteer opstapplaats, eindbestemming en gewenste tussenstops. Hoe scherper je bericht, hoe gerichter ${partnerName} kan meedenken.`,
	},
	{
		title: 'Let op de voorwaarden',
		text: 'Vraag naar wat inbegrepen is: wachttijd, chauffeurskosten, annulering en faciliteiten in de bus.',
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

export const westlandPlanningChecklist: readonly string[] = [
	'Capaciteit passend bij jouw groep (tot max. 80 personen)',
	'Inclusief of exclusief wachttijd op locatie',
	'Mogelijkheid tot meerdere opstapplaatsen',
	'Wat er bij muziek, licht en interieur hoort',
	'Annulerings- en betalingsvoorwaarden',
	'Ervaring met festivals, bruiloften of bedrijfsuitjes',
];
