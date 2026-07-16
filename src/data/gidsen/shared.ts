import { gidsenPath } from './registry';

export const hubGuideLinks = [
	{
		slug: 'partybus-huren',
		label: 'Partybus huren',
		description: 'Complete uitleg over partybus huren in Nederland',
	},
	{
		slug: 'partybus-prijzen',
		label: 'Partybus prijzen',
		description: 'Waar de prijs van afhangt — zonder vaste tarieven',
	},
	{
		slug: 'partybus-regels',
		label: 'Regels & voorwaarden',
		description: 'Wat mag wel en niet in en rond de partybus',
	},
	{
		slug: 'partybus-veiligheid',
		label: 'Veiligheid',
		description: 'Veilig reizen met groepen tot maximaal 80 personen',
	},
	{
		slug: 'partybus-checklist',
		label: 'Checklist',
		description: 'Alles wat je nodig hebt voor een goede aanvraag',
	},
	{
		slug: 'partybus-tips',
		label: 'Praktische tips',
		description: 'Plan een soepele rit zonder verrassingen',
	},
	{
		slug: 'opstapplaatsen',
		label: 'Opstapplaatsen',
		description: 'Kies de juiste ophaallocatie voor je groep',
	},
	{
		slug: 'vertrektijden',
		label: 'Vertrektijden',
		description: 'Timing, files en realistische planning',
	},
	{
		slug: 'partybus-muziek',
		label: 'Muziek & sfeer',
		description: 'Geluid, playlists en verwachtingen',
	},
	{
		slug: 'drankbeleid',
		label: 'Drankbeleid',
		description: 'Regels rond alcohol en consumpties',
	},
	{
		slug: 'groepsgroottes',
		label: 'Groepsgroottes',
		description: 'Capaciteit tot maximaal 80 personen uitgelegd',
	},
	{
		slug: 'partybus-routes',
		label: 'Populaire routes',
		description: 'Steden, festivals en vaste ritten',
	},
	{
		slug: 'feestlocaties',
		label: 'Feestlocaties',
		description: 'Naar clubs, zalen en uitgaansgebieden',
	},
	{
		slug: 'nachtvervoer',
		label: 'Nachtvervoer',
		description: 'Veilig terug na een late avond',
	},
	{
		slug: 'bedrijven',
		label: 'Bedrijven & zakelijk',
		description: 'Representatief vervoer voor teams',
	},
	{
		slug: 'schoolfeesten',
		label: 'Schoolfeesten',
		description: 'Gala, eindexamenfeest en groepsvervoer',
	},
	{
		slug: 'bruiloften',
		label: 'Bruiloften',
		description: 'Gasten vervoeren tussen ceremonie en feest',
	},
	{
		slug: 'vrijgezellenfeest',
		label: 'Vrijgezellenfeest',
		description: 'Meerdere stops in één avond',
	},
	{
		slug: 'concert-vervoer',
		label: 'Concertvervoer',
		description: 'Naar arena’s en podia als groep',
	},
	{
		slug: 'festival-vervoer',
		label: 'Festivalvervoer',
		description: 'Heen en terug naar festivals in NL en België',
	},
] as const;

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
	{ label: 'Tomorrowland', href: '/gidsen/festival-vervoer/#tomorrowland' },
	{ label: 'Defqon.1', href: '/gidsen/festival-vervoer/#defqon' },
	{ label: 'Pinkpop', href: '/gidsen/festival-vervoer/' },
	{ label: 'Lowlands', href: '/gidsen/festival-vervoer/' },
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

export function hubLink(slug: string) {
	return gidsenPath(slug);
}
