import type { CityFaq, CityPageData, CityWhyItem } from '../cities/types';
import type { InfoCard } from '../guides/partybusInfo';
import { applyDenHaagTourgoHubCopy } from './denHaagTourgoHubCopy';
import { applyRotterdamTourgoHubCopy } from './rotterdamTourgoHubCopy';
import { tourgoPartybussen } from './tourgoPartybussen';

const partnerName = tourgoPartybussen.publicProfile.name;
const websiteHref = tourgoPartybussen.publicProfile.website.href;

function variantIndex(slug: string, count: number): number {
	return [...slug].reduce((total, character) => total + character.charCodeAt(0), 0) % count;
}

function pick<T>(slug: string, variants: readonly T[]): T {
	return variants[variantIndex(slug, variants.length)];
}

function rewriteMarketplaceHref(href: string | undefined): string | undefined {
	if (!href) return href;
	if (href.includes('gratis-partybus-offertes-aanvragen')) return websiteHref;
	return href;
}

function rewritePickupLead(cityName: string, slug: string, originalLead: string): string {
	if (!/aanbieder|offerte/i.test(originalLead)) {
		return originalLead.replace(/de aanbieder/gi, partnerName);
	}

	return pick(slug, [
		`Kies een centrale verzamelplek in of rond ${cityName}. De exacte opstap stem je af met ${partnerName}.`,
		`In ${cityName} werkt een duidelijk verzamelpunt het best. Tourgo geeft aan welke opstap voor jullie rit haalbaar is.`,
		`Spreek één opstapplaats in of rond ${cityName} af met ${partnerName}, zodat iedereen op tijd bij elkaar is.`,
		`Geef de gewenste opstap in ${cityName} door aan Tourgo. Zij stemmen bereikbaarheid en timing met jullie af.`,
	]);
}

function rewritePickupNote(cityName: string, slug: string): string {
	return pick(slug, [
		`Geef opstap en bestemming vanuit ${cityName} mee als je Tourgo benadert, dan is de rit sneller in te schatten.`,
		`Noem in je bericht aan Tourgo de opstapplaats in ${cityName}, de bestemming en het aantal personen.`,
		`Hoe concreter jullie route vanuit ${cityName}, hoe gerichter Tourgo de mogelijkheden kan aangeven.`,
		`Deel datum, opstap in ${cityName} en terugtijd met Tourgo, zodat de planning helder is.`,
	]);
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
					`Stem met Tourgo af welke bus vanuit ${cityName} past bij capaciteit, muziek, verlichting en sfeer.`,
					`Tourgo heeft verschillende partybussen. Geef vanuit ${cityName} door wat jullie nodig hebben.`,
					`Van compact tot XXL: Tourgo helpt kiezen wat bij jullie groep vanuit ${cityName} past.`,
					`Muziek, licht en ruimte regel je met Tourgo, passend bij de rit vanuit ${cityName}.`,
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

		if (/hoe werkt|aanvragen vanuit/i.test(question) || /aanbieders kunnen daarna|vergelijkt vrijblijvend/i.test(answer)) {
			return {
				question: pick(`${slug}-faq-how`, [
					`Hoe regel ik een partybus vanuit ${cityName}?`,
					`Hoe neem ik contact op voor een partybus vanuit ${cityName}?`,
					`Hoe vraag ik de mogelijkheden vanuit ${cityName} aan?`,
					`Wat is de eerste stap voor een partybus vanuit ${cityName}?`,
				]),
				answer: pick(`${slug}-faq-how-a`, [
					`PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Neem rechtstreeks contact op via WhatsApp of de website van Tourgo en noem opstap in ${cityName}, datum, groepsgrootte en bestemming.`,
					`Voor een partybus vanuit ${cityName} neem je contact op met Tourgo, de Zuid-Holland-partner van PartybusNederland.nl. Deel route, tijden en aantal personen, dan kijken zij wat mogelijk is.`,
					`Stuur Tourgo een bericht met jullie plannen vanuit ${cityName}. Zij zijn de partybusaanbieder voor Zuid-Holland en denken mee over voertuig en planning.`,
					`Je hoeft geen meerdere bedrijven te benaderen. In Zuid-Holland is Tourgo de partner: contact vanuit ${cityName} loopt rechtstreeks via hen.`,
				]),
			};
		}

		if (/hoeveel personen|capaciteit/i.test(question)) {
			return {
				...faq,
				answer:
					'Partybussen zijn geschikt voor kleine en grote groepen, tot maximaal 80 personen. De exacte capaciteit verschilt per voertuig. Geef het aantal door als je Tourgo benadert.',
			};
		}

		if (/meerdere opstapplaatsen/i.test(question)) {
			return {
				...faq,
				answer: answer
					.replace(/de aanbieder/gi, 'Tourgo')
					.replace(/aanbieders/gi, 'Tourgo'),
			};
		}

		if (/belgië of duitsland|grensoverschrijdend/i.test(question) || /veel aanbieders/i.test(answer)) {
			return {
				...faq,
				answer:
					'Ritten naar België of Duitsland zijn in overleg met Tourgo vaak mogelijk. Vermeld de eindbestemming duidelijk, zodat zij kunnen aangeven wat voor jullie rit haalbaar is.',
			};
		}

		if (/waar hangt de prijs|prijs vanaf/i.test(question) || /meerdere offertes/i.test(answer)) {
			return {
				question: `Wat kost een partybus vanuit ${cityName}?`,
				answer: pick(`${slug}-faq-price`, [
					`De prijs hangt af van datum, route, ritduur, wachttijd, groepsgrootte en type bus. Er is geen vaste prijs vanuit ${cityName}. Tourgo geeft de mogelijkheden door op basis van jullie rit.`,
					`Kosten voor een rit vanuit ${cityName} verschillen per planning. Neem contact op met Tourgo voor een inschatting op jullie datum en route.`,
					`Er is geen landelijke vast tarief. Tourgo bekijkt vanuit ${cityName} wat de rit vraagt: afstand, tijden, groep en gewenste bus.`,
					`Vraag Tourgo naar de mogelijkheden voor jullie rit vanuit ${cityName}. Prijs volgt uit concrete gegevens, niet uit een standaardtarief.`,
				]),
			};
		}

		if (/aanvraag vrijblijvend/i.test(question) || /gratis en vrijblijvend/i.test(answer)) {
			return {
				question: `Zit ik ergens aan vast als ik Tourgo vanuit ${cityName} benader?`,
				answer: pick(`${slug}-faq-vrij`, [
					`Nee. Een eerste vraag via WhatsApp of de website van Tourgo is vrijblijvend. Je maakt pas een afspraak als de rit vanuit ${cityName} rond is.`,
					`Contact met Tourgo over een rit vanuit ${cityName} verplicht je tot niets. Je bespreekt eerst de mogelijkheden.`,
					`Je kunt Tourgo vrijblijvend benaderen. Boeken doe je pas als jullie akkoord zijn met de afspraak voor de rit vanuit ${cityName}.`,
					`Informeren bij Tourgo is vrijblijvend. Noem dat je via PartybusNederland.nl komt en vertel jullie plannen vanuit ${cityName}.`,
				]),
			};
		}

		if (/heenreis en terugreis/i.test(question)) {
			return {
				...faq,
				answer:
					'Ja. Geef beide tijden en locaties door aan Tourgo. Of de bus blijft wachten of later terugkomt, stem je met hen af.',
			};
		}

		if (/aanbieders|vergelijk|offertes/i.test(`${question} ${answer}`)) {
			return {
				...faq,
				answer: answer
					.replace(/aanbieders/gi, 'Tourgo')
					.replace(/een aanbieder/gi, 'Tourgo')
					.replace(/de aanbieder/gi, 'Tourgo')
					.replace(/meerdere offertes/gi, 'de mogelijkheden')
					.replace(/offertes/gi, 'mogelijkheden')
					.replace(/vergelijk(?:t|en)? vrijblijvend/gi, 'bespreek je')
					.replace(/jij vergelijkt vrijblijvend en kiest zelf\.?/gi, 'Tourgo denkt mee over de rit.'),
			};
		}

		return faq;
	});
}

export function applyTourgoMunicipalityCopy(city: CityPageData): CityPageData {
	const { name, slug } = city;
	const isRotterdam = slug === 'rotterdam';

	const introP2 = city.intro.paragraphs[1];
	const keepIntroP2 =
		typeof introP2 === 'string' && !/vergelijk|aanbieders|offertes/i.test(introP2)
			? introP2
			: `Een partybus is geschikt voor onder meer een vrijgezellenfeest, bruiloft, bedrijfsuitje, verjaardag, gala, schoolfeest of festivalrit vanuit ${name}. Kies een centrale opstapplaats en geef aan of een terugrit of meerdere stops nodig zijn.`;

	const introP1 = isRotterdam
		? `Partybus huren in Rotterdam? PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Neem rechtstreeks contact op met Tourgo voor de mogelijkheden vanuit Rotterdam.`
		: pick(slug, [
				`Partybus huren in ${name}? PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Neem rechtstreeks contact op met Tourgo voor de mogelijkheden vanuit ${name}.`,
				`Voor een partybus, groepsvervoer of een vraag over de mogelijkheden vanuit ${name} neem je contact op met ${partnerName}, de partner van PartybusNederland.nl in Zuid-Holland.`,
				`PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Vertrek je vanuit ${name}, dan regel je de rit rechtstreeks met Tourgo.`,
				`Wil je een partybus huren vanuit ${name}? Tourgo is de Zuid-Holland-aanbieder van PartybusNederland.nl. Zij denken mee over route, groepsgrootte en planning.`,
			]);

	const introP3 = pick(`${slug}-p3`, [
		`De prijs hangt af van datum, route, ritduur, wachttijd en groepsgrootte tot maximaal 80 personen. Tourgo geeft vanuit ${name} aan wat voor jullie rit mogelijk is.`,
		`Capaciteit, muziek, verlichting en extra stops stem je af met Tourgo. Zo blijft de rit vanuit ${name} overzichtelijk voor de hele groep.`,
		`Of je nu naar een festival, een avond in de Randstad of een bedrijfsuitje gaat: vanuit ${name} start de planning bij Tourgo.`,
		`Geef datum, opstap in ${name} en bestemming door. Tourgo bekijkt welk voertuig en welke timing bij jullie groep passen.`,
	]);

	const tourgoCity: CityPageData = {
		...city,
		metaTitle: `Partybus huren vanuit ${name} | ${partnerName}`,
		metaDescription: pick(`${slug}-meta`, [
			`Partybus huren vanuit ${name}? PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Neem rechtstreeks contact op voor de mogelijkheden.`,
			`Partybus vanuit ${name}: groepsvervoer, feesten en festivals via ${partnerName}, de Zuid-Holland-partner van PartybusNederland.nl.`,
			`${partnerName} is de partybuspartner voor Zuid-Holland. Bekijk de mogelijkheden voor een rit vanuit ${name} of stuur een WhatsApp.`,
			`Huur een partybus vanuit ${name} via Tourgo. PartybusNederland.nl verbindt je in Zuid-Holland rechtstreeks met deze aanbieder.`,
		]),
		hero: {
			...city.hero,
			subtitle: isRotterdam
				? `PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Neem rechtstreeks contact op voor de mogelijkheden vanuit Rotterdam.`
				: pick(`${slug}-hero`, [
						`PartybusNederland.nl werkt in Zuid-Holland samen met ${partnerName}. Neem rechtstreeks contact op voor de mogelijkheden vanuit ${name}.`,
						`Voor een partybus vanuit ${name} neem je contact op met ${partnerName}, de partner van PartybusNederland.nl in Zuid-Holland.`,
						`Tourgo is de partybuspartner voor Zuid-Holland. Vraag vanuit ${name} rechtstreeks de mogelijkheden aan.`,
						`Huur een partybus vanuit ${name} via ${partnerName}, de Zuid-Holland-partner van PartybusNederland.nl.`,
					]),
			trustItems: [
				'Tourgo Partybussen, partner Zuid-Holland',
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
				`Voorbeelden van routes vanuit ${name}. De bestemming en exacte opstapplaats stem je af met Tourgo.`,
				`Vanuit ${name} zijn steden, festivals en avondlocaties goed bereikbaar. Tourgo plant de rit samen met jullie.`,
				`Kies een bestemming die bij jullie groep past. Tourgo denkt vanuit ${name} mee over route en timing.`,
				`Populaire ritten vanuit ${name} lopen naar de Randstad, de kust of over de grens. Geef jullie wens door aan Tourgo.`,
			]),
			items: city.locations.items.map((item) => ({
				...item,
				href: rewriteMarketplaceHref(item.href),
				text: item.text
					.replace(/in overleg met de aanbieder/gi, 'in overleg met Tourgo')
					.replace(/de aanbieder/gi, 'Tourgo'),
			})),
		},
		activities: {
			...city.activities,
			lead: pick(`${slug}-fest`, [
				`Plan heen- en terugvervoer vanuit ${name} naar festivals in Nederland en België samen met Tourgo.`,
				`Festivalritten vanuit ${name} regel je met Tourgo: één bus, één groep, één terugplan.`,
				`Vanuit ${name} naar een festival? Tourgo helpt met de planning van vertrek en terugkomst.`,
				`Geef festival, datum en groepsgrootte vanuit ${name} door aan Tourgo, dan kijken zij naar de rit.`,
			]),
			items: city.activities.items.map((item) => ({
				...item,
				text: item.text.replace(/in je aanvraag/gi, 'bij Tourgo'),
			})),
		},
		pickup: {
			...city.pickup,
			lead: rewritePickupLead(name, slug, city.pickup.lead),
			note: rewritePickupNote(name, slug),
		},
		faqs: rewriteFaqs(name, slug, city.faqs),
		cta: {
			...city.cta,
			title: pick(`${slug}-cta-t`, [
				`Neem contact op met Tourgo voor een partybus vanuit ${name}`,
				`Partybus nodig vanuit ${name}? Tourgo denkt met jullie mee`,
				`Regel de rit vanuit ${name} rechtstreeks met Tourgo`,
				`WhatsApp Tourgo voor de mogelijkheden vanuit ${name}`,
			]),
			text: pick(`${slug}-cta-x`, [
				`Vertel wanneer je wilt vertrekken, met hoeveel personen en wat je bestemming is. Tourgo is de Zuid-Holland-partner van PartybusNederland.nl.`,
				`Deel datum, opstap in ${name} en route met Tourgo. Zij geven aan wat er mogelijk is voor jullie groep.`,
				`In Zuid-Holland werk je via PartybusNederland.nl rechtstreeks met Tourgo.`,
				`Stuur Tourgo een bericht via WhatsApp of bekijk hun bussen. Noem dat je vanuit ${name} via PartybusNederland.nl komt.`,
			]),
		},
	};

	if (slug === 'den-haag') return applyDenHaagTourgoHubCopy(tourgoCity);
	if (slug === 'rotterdam') return applyRotterdamTourgoHubCopy(tourgoCity);
	return tourgoCity;
}

export function tourgoHowItWorks(cityName: string, slug: string) {
	return [
		{
			title: pick(`${slug}-step1`, [
				'Deel jullie rit',
				'Stuur de plannen door',
				'Vertel wat jullie nodig hebben',
				'Geef de basisgegevens door',
			]),
			text: pick(`${slug}-step1t`, [
				`Stuur datum, groepsgrootte, opstapplaats in ${cityName}, bestemming en gewenste tijden naar Tourgo.`,
				`Noem in je bericht aan Tourgo waar jullie in ${cityName} opstappen, waar naartoe en met hoeveel personen.`,
				`Hoe concreter de rit vanuit ${cityName}, hoe sneller Tourgo kan aangeven wat mogelijk is.`,
				`Een WhatsApp of bericht via de website van Tourgo met jullie route vanuit ${cityName} is genoeg om te starten.`,
			]),
		},
		{
			title: pick(`${slug}-step2`, [
				'Overleg met Tourgo',
				'Bekijk de mogelijkheden',
				'Tourgo denkt mee',
				'Stem bus en planning af',
			]),
			text: pick(`${slug}-step2t`, [
				'Tourgo bekijkt welk voertuig, welke timing en welke route bij jullie groep passen.',
				`Jullie spreken de rit vanuit ${cityName} rechtstreeks af met Tourgo: capaciteit, sfeer en voorwaarden.`,
				'Tourgo is de partybuspartner voor Zuid-Holland.',
				`Tourgo geeft aan wat haalbaar is voor de rit vanuit ${cityName}, van compacte feestbus tot groter groepsvervoer.`,
			]),
		},
		{
			title: pick(`${slug}-step3`, [
				'Regel de rit',
				'Maak de afspraak rond',
				'Boek bij Tourgo',
				'Bevestig de details',
			]),
			text: pick(`${slug}-step3t`, [
				'Als de rit past, maak je de afspraak rechtstreeks met Tourgo. Een eerste vraag is vrijblijvend.',
				`De boeking loopt rechtstreeks via Tourgo voor jullie rit vanuit ${cityName}.`,
				'Jullie houden één aanspreekpunt: Tourgo Partybussen voor heel Zuid-Holland.',
				`Na akkoord legt Tourgo de rit vanuit ${cityName} vast, inclusief opstap en terugkomst.`,
			]),
		},
	] as const;
}

export function tourgoConversionCopy(cityName: string, slug: string) {
	return {
		eyebrow: pick(`${slug}-conv-e`, [
			`Partybus vanuit ${cityName} nodig?`,
			`Groepsvervoer vanuit ${cityName}?`,
			`Feestvervoer vanuit ${cityName}?`,
			`Rit plannen vanuit ${cityName}?`,
		]),
		headline: pick(`${slug}-conv-h`, [
			'Neem rechtstreeks contact op met Tourgo Partybussen, de partner voor Zuid-Holland.',
			`Tourgo denkt mee over datum, route en groepsgrootte voor jullie rit vanuit ${cityName}.`,
			'PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo. Stuur hen een bericht.',
			`Vraag Tourgo naar de mogelijkheden voor een partybus vanuit ${cityName}.`,
		]),
	};
}

export function tourgoCityInfoLead(cityName: string, slug: string): string {
	return pick(`${slug}-info`, [
		`Handige informatie als je vanuit ${cityName} een partybus plant: waar de prijs van afhangt en hoe je de rit met Tourgo voorbereidt.`,
		`Praktische aandachtspunten voor een rit vanuit ${cityName} met Tourgo Partybussen, de partner voor Zuid-Holland.`,
		`Vanuit ${cityName} regel je de partybus met Tourgo. Hieronder waar je op let bij planning, groepsgrootte en uitrusting.`,
		`Zo maak je vanuit ${cityName} een duidelijke vraag aan Tourgo, de partner voor Zuid-Holland.`,
	]);
}

export function tourgoTipsLead(cityName: string, slug: string): string {
	return pick(`${slug}-tips`, [
		`Zo bereid je een partybusrit vanuit ${cityName} goed voor — van route tot voorwaarden.`,
		`Praktische voorbereiding voor een rit vanuit ${cityName} met Tourgo.`,
		`Een paar punten die helpen als je Tourgo benadert voor vertrek vanuit ${cityName}.`,
		`Van opstap in ${cityName} tot terugkomst: zo blijft de planning overzichtelijk.`,
	]);
}

export const tourgoPricingCards: readonly InfoCard[] = [
	{
		title: 'Datum en seizoen',
		text: 'Weekenden, feestdagen en festivalperiodes zijn vaak drukker dan doordeweekse ritten. Vroeg contact opnemen geeft meer ruimte in de planning.',
	},
	{
		title: 'Route en duur',
		text: 'Afstand, reistijd, wachttijd en eventuele tussenstops bepalen een groot deel van de rit. Geef die gegevens door aan Tourgo.',
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

export const tourgoBookingTips: readonly InfoCard[] = [
	{
		title: 'Geef een duidelijke route door',
		text: 'Noteer opstapplaats, eindbestemming en gewenste tussenstops. Hoe scherper je bericht, hoe gerichter Tourgo kan meedenken.',
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

export const tourgoPlanningChecklist: readonly string[] = [
	'Capaciteit passend bij jouw groep (tot max. 80 personen)',
	'Inclusief of exclusief wachttijd op locatie',
	'Mogelijkheid tot meerdere opstapplaatsen',
	'Wat er bij muziek, licht en interieur hoort',
	'Annulerings- en betalingsvoorwaarden',
	'Ervaring met festivals, bruiloften of bedrijfsuitjes',
];

export const tourgoWebsiteHref = websiteHref;
export const tourgoWhatsappLabel = 'WhatsApp Tourgo';
export const tourgoWebsiteLabel = 'Bekijk Tourgo Partybussen';
