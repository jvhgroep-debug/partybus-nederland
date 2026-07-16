import type { GuideImageAsset } from './guideImages';
import { guideImagePool } from './guideImages';
import { festivalWhy } from './festivalGuide';
import { noFixedPriceReasons } from './pricingGuide';

export type GuideVisualSection = {
	image: GuideImageAsset;
	imagePosition: 'left' | 'right';
	eyebrow: string;
	title: string;
	titleId: string;
	lead?: string;
	paragraphs: readonly string[];
};

const p = guideImagePool;

export const festivalVisualSections: GuideVisualSection[] = [
	{
		image: p.onderweg,
		imagePosition: 'right',
		eyebrow: 'Onderweg',
		title: festivalWhy.title,
		titleId: 'festival-onderweg',
		lead: festivalWhy.lead,
		paragraphs: festivalWhy.paragraphs,
	},
	{
		image: p.opstapplaats,
		imagePosition: 'left',
		eyebrow: 'Opstapplaats',
		title: 'Samen instappen op de opstapplaats',
		titleId: 'festival-opstapplaats',
		lead: 'Kies een bereikbare plek waar de bus goed kan laden en de hele groep overzicht houdt.',
		paragraphs: [
			'Vaak vertrek je vanaf een adres, station of centrale verzamelplek in jouw stad. Meerdere opstapplaatsen zijn vaak mogelijk wanneer je een logische route vooraf doorgeeft.',
			'Geef in je aanvraag door hoeveel personen er instappen, of er bagage mee gaat en hoe laat je uiterlijk wilt vertrekken richting het festival.',
		],
	},
	{
		image: p.festival,
		imagePosition: 'right',
		eyebrow: 'Festival',
		title: 'Naar Tomorrowland, Defqon.1 en meer',
		titleId: 'festival-evenement',
		lead: 'Populaire festivals vragen om strakke planning rond vertrek, aankomst en terugreis.',
		paragraphs: [
			'Vanuit vrijwel elke stad in Nederland kun je een partybus aanvragen richting grote festivals en evenementen. Vermeld altijd festivalnaam, editie en datum in je aanvraag.',
			'Houd rekening met festivalverkeer, grensovergangen bij buitenlandse edities en realistische eindtijden op het terrein.',
		],
	},
	{
		image: p.interieur,
		imagePosition: 'left',
		eyebrow: 'Sfeer in de bus',
		title: 'De beleving begint al onderweg',
		titleId: 'festival-sfeer',
		lead: 'Muziek, sfeerverlichting en ruimte voor de groep maken de rit onderdeel van het feest.',
		paragraphs: [
			'Bij de meeste partybussen horen muziek en paarse sfeerverlichting bij de standaardbeleving. Niemand in de groep hoeft te rijden — iedereen kan meegenieten van de rit.',
			'Check in de offerte wat is toegestaan rond eigen consumpties en stem verwachtingen af met de hele groep vóór vertrek.',
		],
	},
	{
		image: p.aankomst,
		imagePosition: 'right',
		eyebrow: 'Aankomst',
		title: 'Aankomst op het festivalterrein',
		titleId: 'festival-aankomst',
		lead: 'Plan terug vanaf de gewenste aankomsttijd en houd ruimte voor laden, uitstappen en drukte rond het terrein.',
		paragraphs: [
			'Vraag vooraf of de bus mag wachten, ergens in de buurt kan staan of op een afgesproken drop-off zone. Dat verschilt per evenement en locatie.',
			'Een vaste aankomstafspraak voorkomt dat de groep verspreid raakt bij drukte rond de ingang of parkeerzones.',
		],
	},
	{
		image: p.terugreis,
		imagePosition: 'left',
		eyebrow: 'Terugreis',
		title: 'Na afloop weer samen terug',
		titleId: 'festival-terugreis',
		lead: 'Spreek een vaste verzamelplek en tijd af — handig bij late eindtijden en drukte na het festival.',
		paragraphs: [
			'Heen- en terugrit kun je in één aanvraag zetten, zodat iedereen weet waar en wanneer de bus terugkomt. Dat geeft rust na een lange festivaldag.',
			'Vermeld in je aanvraag of de chauffeur moet wachten, later terugkomt of direct na afloop vertrekt.',
		],
	},
];

export const pricingVisualSections: GuideVisualSection[] = [
	{
		image: p.luxeExterieur,
		imagePosition: 'right',
		eyebrow: 'Partybus huren',
		title: 'Waar de prijs van een partybus van afhangt',
		titleId: 'pricing-intro',
		lead: 'Geen vaste landelijke tarieven — wel duidelijke bouwstenen waarmee je offertes begrijpt en vergelijkt.',
		paragraphs: [
			'De prijs hangt af van route, uren, datum, groepsgrootte, type bus en extra’s. Hoe completer je aanvraag, hoe relevanter en vergelijkbaarder de offertes.',
			'Op deze pagina lees je welke factoren meespelen — zonder misleidende “vanaf”-bedragen die in de praktijk niet kloppen.',
		],
	},
	{
		image: p.onderweg,
		imagePosition: 'left',
		eyebrow: 'Onderweg',
		title: 'Route, uren en kilometers tellen mee',
		titleId: 'pricing-onderweg',
		lead: 'Niet alleen de rijtijd bepaalt de offerte — ook ophalen, wachten en terugrijden spelen mee.',
		paragraphs: [
			'Een eerlijke prijsopgave is pas mogelijk wanneer aanbieders jouw rit concreet kunnen inschatten. Zonder context ontstaan offertes die niet passen bij jouw situatie.',
			'Geef daarom minstens deze gegevens door zodat je meerdere voorstellen eerlijk naast elkaar kunt leggen.',
		],
	},
	{
		image: p.interieur,
		imagePosition: 'right',
		eyebrow: 'Sfeer in de bus',
		title: 'Type bus en voorzieningen',
		titleId: 'pricing-interieur',
		lead: 'Verlichting, geluid en luxe uitvoering beïnvloeden de offerte — vraag alleen wat je écht nodig hebt.',
		paragraphs: [
			'Een compacte bus, een grotere partybus of een luxere uitvoering zitten in verschillende segmenten. Stem de bus af op jullie gelegenheid en groepsgrootte (tot max. 80 personen).',
			'Vergelijk niet alleen op prijs: let ook op wat er bij muziek, licht en interieur hoort.',
		],
	},
	{
		image: p.opstapplaats,
		imagePosition: 'left',
		eyebrow: 'Opstapplaats',
		title: 'Meerdere opstapplaatsen en stops',
		titleId: 'pricing-opstapplaats',
		lead: 'Elke extra ophaalstop betekent meer tijd en kilometers — vermeld alle plekken vooraf.',
		paragraphs: [
			'Combineer waar mogelijk op één centrale plek, of geef een logische volgorde van ophaalpunten door. Zo blijft de reistijd realistisch en de offerte scherp.',
			'Met een goede voorbereiding krijg je relevantere prijsvoorstellen zonder op kwaliteit in te leveren.',
		],
	},
	{
		image: p.aankomst,
		imagePosition: 'right',
		eyebrow: 'Aankomst',
		title: 'Bestemming en wachttijd op locatie',
		titleId: 'pricing-aankomst',
		lead: 'Festivals, bruiloften en bedrijfsfeesten vragen vaak om wachttijd of een vaste retourafspraak.',
		paragraphs: [
			'Blijft de chauffeur wachten tijdens een ceremonie, diner of festival? Wachttijd is vaak een aparte post in de offerte.',
			'Vermeld bestemming, gewenste aankomsttijd en of je heen-en-weer of alleen enkele ritten plant.',
		],
	},
	{
		image: p.terugreis,
		imagePosition: 'left',
		eyebrow: 'Terugreis',
		title: 'Terugrit en totale huurduur',
		titleId: 'pricing-terugreis',
		lead: 'De terugweg en totale duur van de huur bepalen een groot deel van de prijsopbouw.',
		paragraphs: [
			'Plan realistische tijden rond verkeer, laden en uitstappen. Een strak maar haalbaar schema voorkomt verrassingen achteraf.',
			'Vraag in elke offerte na wat er bij annulering, extra uren en chauffeurskosten hoort.',
		],
	},
];

/** Bullet list for pricing “no fixed price” section — rendered beside onderweg image context. */
export const pricingRequestFields = noFixedPriceReasons;

export const partybusHurenVisualSections: GuideVisualSection[] = [
	{
		image: p.onderweg,
		imagePosition: 'right',
		eyebrow: 'Onderweg',
		title: 'Wat is een partybus precies?',
		titleId: 'guide-what',
		lead: 'Een luxe groepsvoertuig met sfeerverlichting, muziek en ruimte om samen te reizen.',
		paragraphs: [
			'Je gebruikt een partybus als rijdend startpunt van je avond: iedereen blijft bij elkaar, zonder losse taxi’s of parkeerstress.',
			'Populaire toepassingen zijn vrijgezellenfeesten, bruiloften, bedrijfsuitjes, festivals, verjaardagen en stadsritten door heel Nederland.',
		],
	},
	{
		image: p.opstapplaats,
		imagePosition: 'left',
		eyebrow: 'Opstapplaats',
		title: 'Waar hangt de prijs van af?',
		titleId: 'guide-pricing',
		lead: 'Er bestaat geen vaste landelijke prijs. Gebruik de factoren hieronder om offertes eerlijk te vergelijken.',
		paragraphs: [
			'Datum, route, groepsgrootte en extra’s bepalen de offerte. Hoe scherper je aanvraag, hoe relevanter de prijsvoorstellen.',
			'Vergelijk ook voorwaarden: annulering, wachttijd, chauffeurskosten en wat bij muziek en licht hoort.',
		],
	},
	{
		image: p.interieur,
		imagePosition: 'right',
		eyebrow: 'Sfeer in de bus',
		title: 'Praktische tips voor een soepele rit',
		titleId: 'guide-tips',
		lead: 'Met een goede voorbereiding krijg je relevantere offertes en een rustiger feestavond.',
		paragraphs: [
			'Noteer opstapplaats, eindbestemming en gewenste tussenstops. Houd rekening met verkeer, laden en fotomomenten.',
			'Stem muziek, sfeerverlichting en eventuele eigen consumpties af met de aanbieder vóór de rit.',
		],
	},
	{
		image: p.festival,
		imagePosition: 'left',
		eyebrow: 'Festival',
		title: 'Per gelegenheid anders plannen',
		titleId: 'guide-occasions',
		lead: 'De beste partybusrit hangt af van jouw moment — van festivalweekend tot bruiloft of bedrijfsuitje.',
		paragraphs: [
			'Festivals vragen om heen- en terugrit, bagagewensen en realistische eindtijden. Vrijgezellenfeesten combineren vaak meerdere stops in één avond.',
			'Bij bruiloften en bedrijfsuitjes tellen representativiteit, timing en een vaste verzamelplek extra zwaar.',
		],
	},
	{
		image: p.aankomst,
		imagePosition: 'right',
		eyebrow: 'Aankomst',
		title: 'Bestemmingen, festivals en routes',
		titleId: 'guide-destinations',
		lead: 'Vanuit jouw stad naar Amsterdam, Rotterdam, festivals of Schiphol — plan de aankomst net zo zorgvuldig als het vertrek.',
		paragraphs: [
			'Op stedenpagina’s vind je lokale context; op routepagina’s staat focus op een specifieke rit. Vermeld altijd je vertrekstad en concrete bestemming in de aanvraag.',
		],
	},
	{
		image: p.terugreis,
		imagePosition: 'left',
		eyebrow: 'Terugreis',
		title: 'Kort antwoord op veelgestelde vragen',
		titleId: 'guide-faq',
		lead: 'De meest gestelde vragen over capaciteit, stops en voorzieningen op één plek.',
		paragraphs: [
			'Groepen tot maximaal 80 personen zijn mogelijk, afhankelijk van het voertuig. Ritten naar België zijn vaak mogelijk voor festivals of steden — vermeld de bestemming in je aanvraag.',
			'Meerdere stops zijn vaak mogelijk als je ze vooraf doorgeeft. Muziek en sfeerverlichting horen bij de meeste bussen; check exacte opties in de offerte.',
		],
	},
];
