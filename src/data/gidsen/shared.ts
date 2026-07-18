import type { GuideImageAsset } from '../guides/guideImages';
import { guideImagePool } from '../guides/guideImages';
import { gidsenPath } from './registry';

export type GidsenCategoryId =
	| 'partybus-huren'
	| 'kosten-planning'
	| 'veiligheid-regels'
	| 'gelegenheden'
	| 'festivals-evenementen'
	| 'groepsvervoer'
	| 'praktische-tips';

export type GidsenCategory = {
	id: GidsenCategoryId;
	label: string;
	description: string;
};

export type HubGuideCard = {
	slug: string;
	label: string;
	description: string;
	category: GidsenCategoryId;
	linkLabel: string;
	imageKey: keyof typeof guideImagePool;
};

export const gidsenCategories: readonly GidsenCategory[] = [
	{
		id: 'partybus-huren',
		label: 'Partybus huren',
		description: 'Basisinformatie over wat een partybus is en hoe je er een huurt.',
	},
	{
		id: 'kosten-planning',
		label: 'Kosten en planning',
		description: 'Prijsfactoren, checklists en timing — zonder vaste tarieven.',
	},
	{
		id: 'veiligheid-regels',
		label: 'Veiligheid en regels',
		description: 'Veilig reizen, huisregels en afspraken in de bus.',
	},
	{
		id: 'gelegenheden',
		label: 'Gelegenheden',
		description: 'Bruiloften, vrijgezellenfeesten, bedrijven en schoolfeesten.',
	},
	{
		id: 'festivals-evenementen',
		label: 'Festivals en evenementen',
		description: 'Festival- en concertvervoer, feestlocaties en routes.',
	},
	{
		id: 'groepsvervoer',
		label: 'Groepsvervoer',
		description: 'Groepsgroottes, opstapplaatsen en nachtvervoer.',
	},
	{
		id: 'praktische-tips',
		label: 'Praktische tips',
		description: 'Tips, muziek, drankbeleid en vertrektijden.',
	},
] as const;

/** Hub cards — unique copy, category, link text and image key per guide. */
export const hubGuideLinks: readonly HubGuideCard[] = [
	{
		slug: 'partybus-huren',
		label: 'Partybus huren',
		description: 'Wat een partybus is, voor wie het werkt en hoe je offertes vergelijkt.',
		category: 'partybus-huren',
		linkLabel: 'Lees de gids partybus huren',
		imageKey: 'luxeExterieur',
	},
	{
		slug: 'partybus-prijzen',
		label: 'Partybus prijzen',
		description: 'Waar de prijs van afhangt: route, uren, groepsgrootte en extra’s.',
		category: 'kosten-planning',
		linkLabel: 'Bekijk prijsfactoren',
		imageKey: 'onderweg',
	},
	{
		slug: 'partybus-regels',
		label: 'Regels & voorwaarden',
		description: 'Wat wel en niet mag in de bus — zodat iedereen weet waar die aan toe is.',
		category: 'veiligheid-regels',
		linkLabel: 'Lees over regels',
		imageKey: 'interieur',
	},
	{
		slug: 'partybus-veiligheid',
		label: 'Veiligheid',
		description: 'Veilig reizen met groepen tot maximaal 80 personen en een professionele chauffeur.',
		category: 'veiligheid-regels',
		linkLabel: 'Lees over veiligheid',
		imageKey: 'onderweg',
	},
	{
		slug: 'partybus-checklist',
		label: 'Checklist',
		description: 'De gegevens die je nodig hebt voor een complete, vergelijkbare aanvraag.',
		category: 'kosten-planning',
		linkLabel: 'Open de checklist',
		imageKey: 'opstapplaats',
	},
	{
		slug: 'partybus-tips',
		label: 'Praktische tips',
		description: 'Plan een soepele rit: timing, communicatie en verwachtingen afstemmen.',
		category: 'praktische-tips',
		linkLabel: 'Bekijk alle tips',
		imageKey: 'interieur',
	},
	{
		slug: 'opstapplaatsen',
		label: 'Opstapplaatsen',
		description: 'Kies een bereikbare ophaallocatie en plan eventuele tussenstops slim.',
		category: 'groepsvervoer',
		linkLabel: 'Lees over opstapplaatsen',
		imageKey: 'opstapplaats',
	},
	{
		slug: 'vertrektijden',
		label: 'Vertrektijden',
		description: 'Reken terug vanaf aankomst: files, laden en realistische buffers.',
		category: 'praktische-tips',
		linkLabel: 'Plan vertrektijden',
		imageKey: 'onderweg',
	},
	{
		slug: 'partybus-muziek',
		label: 'Muziek & sfeer',
		description: 'Geluid, playlists en wat je mag verwachten van de sfeerverlichting.',
		category: 'praktische-tips',
		linkLabel: 'Lees over muziek',
		imageKey: 'interieur',
	},
	{
		slug: 'drankbeleid',
		label: 'Drankbeleid',
		description: 'Regels rond alcohol en eigen consumpties — vraag dit altijd na in de offerte.',
		category: 'veiligheid-regels',
		linkLabel: 'Lees over drankbeleid',
		imageKey: 'interieur',
	},
	{
		slug: 'groepsgroottes',
		label: 'Groepsgroottes',
		description: 'Capaciteit tot maximaal 80 personen: hoe kies je de juiste busgrootte?',
		category: 'groepsvervoer',
		linkLabel: 'Bekijk groepsgroottes',
		imageKey: 'opstapplaats',
	},
	{
		slug: 'partybus-routes',
		label: 'Populaire routes',
		description: 'Stedenritten, festivals en vaste routes — met links naar voorbeelden.',
		category: 'festivals-evenementen',
		linkLabel: 'Bekijk routes',
		imageKey: 'onderweg',
	},
	{
		slug: 'feestlocaties',
		label: 'Feestlocaties',
		description: 'Naar clubs, zalen en uitgaansgebieden zonder parkeerstress.',
		category: 'festivals-evenementen',
		linkLabel: 'Lees over feestlocaties',
		imageKey: 'aankomst',
	},
	{
		slug: 'nachtvervoer',
		label: 'Nachtvervoer',
		description: 'Veilig terug na een late avond — met vaste verzamelplek en chauffeur.',
		category: 'groepsvervoer',
		linkLabel: 'Lees over nachtvervoer',
		imageKey: 'terugreis',
	},
	{
		slug: 'bedrijven',
		label: 'Bedrijven & zakelijk',
		description: 'Representatief groepsvervoer voor teamuitjes en personeelsfeesten.',
		category: 'gelegenheden',
		linkLabel: 'Lees over zakelijk vervoer',
		imageKey: 'luxeExterieur',
	},
	{
		slug: 'schoolfeesten',
		label: 'Schoolfeesten',
		description: 'Gala en eindexamenfeest: overzichtelijk groepsvervoer voor scholen.',
		category: 'gelegenheden',
		linkLabel: 'Lees over schoolfeesten',
		imageKey: 'opstapplaats',
	},
	{
		slug: 'bruiloften',
		label: 'Bruiloften',
		description: 'Gasten vervoeren tussen ceremonie, receptie en feestlocatie.',
		category: 'gelegenheden',
		linkLabel: 'Lees over bruiloften',
		imageKey: 'aankomst',
	},
	{
		slug: 'vrijgezellenfeest',
		label: 'Vrijgezellenfeest',
		description: 'Meerdere stops in één avond — de groep blijft bij elkaar.',
		category: 'gelegenheden',
		linkLabel: 'Lees over vrijgezellenfeesten',
		imageKey: 'interieur',
	},
	{
		slug: 'concert-vervoer',
		label: 'Concertvervoer',
		description: 'Samen naar arena’s en podia — heen én vaak terug als groep.',
		category: 'festivals-evenementen',
		linkLabel: 'Lees over concertvervoer',
		imageKey: 'festival',
	},
	{
		slug: 'festival-vervoer',
		label: 'Festivalvervoer',
		description: 'Heen en terug naar festivals in Nederland en België.',
		category: 'festivals-evenementen',
		linkLabel: 'Lees over festivalvervoer',
		imageKey: 'festival',
	},
] as const;

export function getHubCardImage(card: HubGuideCard): GuideImageAsset {
	return guideImagePool[card.imageKey];
}

export function guidesByCategory(categoryId: GidsenCategoryId): HubGuideCard[] {
	return hubGuideLinks.filter((guide) => guide.category === categoryId);
}

export const legacyGuideLinks = [
	{
		label: 'Hoofdgids partybus huren',
		href: '/gids/partybus-huren/',
		description: 'Originele uitgebreide gids op /gids/',
	},
	{
		label: 'Prijzengids',
		href: '/gids/partybus-kosten/',
		description: 'Factoren en tips voor offertes vergelijken',
	},
	{
		label: 'Festivalgids',
		href: '/gids/festival-vervoer/',
		description: 'Uitgebreide festivalgids op /gids/',
	},
] as const;

export const popularDestinations = [
	{ label: 'Amsterdam', href: '/steden/partybus-huren-amsterdam/' },
	{ label: 'Rotterdam', href: '/steden/partybus-huren-rotterdam/' },
	{ label: 'Utrecht', href: '/steden/partybus-huren-utrecht/' },
	{ label: 'Den Haag', href: '/steden/partybus-huren-den-haag/' },
	{ label: 'Eindhoven', href: '/steden/partybus-huren-eindhoven/' },
	{ label: 'Schiphol-route', href: '/partybus-rotterdam-schiphol/' },
] as const;

export const popularRoutes = [
	{ label: 'Rotterdam – Amsterdam', href: '/partybus-rotterdam-amsterdam/' },
	{ label: 'Rotterdam – Tomorrowland', href: '/partybus-rotterdam-tomorrowland/' },
	{ label: 'Breda – Defqon.1', href: '/partybus-breda-defqon/' },
	{ label: 'Den Haag – Utrecht', href: '/partybus-den-haag-utrecht/' },
] as const;

export const popularFestivals = [
	{ label: 'Festivalvervoer (kennisbank)', href: '/gidsen/festival-vervoer/' },
	{ label: 'Festivalgids (/gids/)', href: '/gids/festival-vervoer/' },
	{ label: 'Route Rotterdam – Tomorrowland', href: '/partybus-rotterdam-tomorrowland/' },
	{ label: 'Route Breda – Defqon.1', href: '/partybus-breda-defqon/' },
] as const;

export const veelGezochteVragen = [
	{
		question: 'Wat kost een partybus huren?',
		href: '/gidsen/partybus-prijzen/',
	},
	{
		question: 'Hoeveel personen passen er in een partybus?',
		href: '/gidsen/groepsgroottes/',
	},
	{
		question: 'Mag er alcohol in de partybus?',
		href: '/gidsen/drankbeleid/',
	},
	{
		question: 'Hoe kies ik een opstapplaats?',
		href: '/gidsen/opstapplaatsen/',
	},
	{
		question: 'Kan ik een partybus naar een festival huren?',
		href: '/gidsen/festival-vervoer/',
	},
	{
		question: 'Welke regels gelden in de bus?',
		href: '/gidsen/partybus-regels/',
	},
] as const;

/** Existing legal/trust pages. */
export const existingTrustPages = [
	{ label: 'Privacybeleid', href: '/privacybeleid/' },
	{ label: 'Cookiebeleid', href: '/cookiebeleid/' },
	{ label: 'Algemene voorwaarden', href: '/algemene-voorwaarden/' },
	{ label: 'Disclaimer', href: '/disclaimer/' },
	{ label: 'Contact', href: '/contact/' },
] as const;

/** Still optional / not yet published. */
export const missingTrustPages = ['Over ons'] as const;

export function hubLink(slug: string) {
	return gidsenPath(slug);
}
