import { getPublishedCity } from '../cities/registry';

export type FooterLink = {
	label: string;
	href: string;
};

export type RegionalFooterConfig = {
	id: string;
	compact?: boolean;
	ctaLabel?: string;
	ctaHref?: string;
	brandText?: string;
	navigation: readonly FooterLink[];
	locationHeading: string;
	locations: readonly FooterLink[];
	partner?: {
		name: string;
		logo?: string;
		email?: string;
		phone?: { display: string; href: string };
		address?: { street: string; postalCode: string; city: string };
		website?: { href: string; label: string };
	};
};

function municipalityLink(slug: string, label?: string): FooterLink {
	const municipality = getPublishedCity(slug);
	if (!municipality) {
		throw new Error(`Missing published municipality for regional footer: ${slug}`);
	}

	return {
		label: label ?? municipality.name,
		href: municipality.path,
	};
}

export const noordBrabantFooter: RegionalFooterConfig = {
	id: 'noord-brabant',
	compact: true,
	ctaLabel: 'Gratis offertes',
	navigation: [
		{ label: 'Home', href: '/' },
		{ label: 'Hoe werkt het', href: '/hoe-werkt-het/' },
		{ label: 'Over ons', href: '/over-ons/' },
		{ label: 'Contact', href: '/contact/' },
	],
	locationHeading: 'Noord-Brabant',
	locations: [
		{ label: 'Partybus Noord-Brabant', href: '/provincies/noord-brabant/' },
		municipalityLink('breda'),
		municipalityLink('tilburg'),
		municipalityLink('eindhoven'),
		municipalityLink('den-bosch', "'s-Hertogenbosch"),
		municipalityLink('roosendaal'),
		municipalityLink('bergen-op-zoom'),
		municipalityLink('oosterhout'),
		municipalityLink('etten-leur'),
	],
};

export const zuidHollandFooter: RegionalFooterConfig = {
	id: 'zuid-holland',
	compact: true,
	ctaLabel: 'Bekijk Tourgo Partybussen',
	ctaHref: 'https://www.tourgo.nl/',
	brandText:
		'PartybusNederland.nl werkt in Zuid-Holland samen met Tourgo Partybussen. Neem rechtstreeks contact op voor de mogelijkheden.',
	navigation: [
		{ label: 'Home', href: '/' },
		{ label: 'Partybus Zuid-Holland', href: '/provincies/zuid-holland/' },
		{ label: 'Over ons', href: '/over-ons/' },
		{ label: 'Contact', href: '/contact/' },
	],
	locationHeading: 'Zuid-Holland',
	locations: [
		{ label: 'Partybus Zuid-Holland', href: '/provincies/zuid-holland/' },
		municipalityLink('rotterdam'),
		municipalityLink('den-haag'),
		municipalityLink('leiden'),
		municipalityLink('delft'),
		municipalityLink('dordrecht'),
		municipalityLink('gouda'),
		municipalityLink('zoetermeer'),
		municipalityLink('schiedam'),
	],
};

export const utrechtFooter: RegionalFooterConfig = {
	id: 'utrecht',
	compact: true,
	ctaLabel: 'Direct contact via WhatsApp',
	ctaHref: 'https://wa.me/31610628733',
	brandText:
		'PartybusNederland.nl werkt in provincie Utrecht samen met Party Bussen Westland. Neem rechtstreeks contact op voor informatie of beschikbaarheid.',
	navigation: [
		{ label: 'Home', href: '/' },
		{ label: 'Partybus Utrecht', href: '/provincies/utrecht/' },
		{ label: 'Over ons', href: '/over-ons/' },
		{ label: 'Contact', href: '/contact/' },
	],
	locationHeading: 'Utrecht',
	locations: [
		{ label: 'Partybus Utrecht', href: '/provincies/utrecht/' },
		municipalityLink('utrecht'),
		municipalityLink('amersfoort'),
		municipalityLink('nieuwegein'),
		municipalityLink('veenendaal'),
		municipalityLink('zeist'),
		municipalityLink('woerden'),
		municipalityLink('houten'),
	],
	partner: {
		name: 'Party Bussen Westland',
		logo: '/images/partners/party-bussen-westland/party-bussen-westland-logo.png',
		email: 'info@partybussenwestland.nl',
		phone: {
			display: '0174 352241',
			href: 'tel:+31174352241',
		},
		address: {
			street: 'Ambachtstraat 6B',
			postalCode: '2671 CN',
			city: 'Naaldwijk',
		},
		website: {
			href: 'https://partybussenwestland.nl/',
			label: 'partybussenwestland.nl',
		},
	},
};

const partyBussenWestlandFooterPartner = utrechtFooter.partner;

export const amsterdamFooter: RegionalFooterConfig = {
	id: 'amsterdam',
	compact: true,
	ctaLabel: 'Direct contact via WhatsApp',
	ctaHref: 'https://wa.me/31610628733',
	brandText:
		'PartybusNederland.nl werkt in Amsterdam samen met Party Bussen Westland. Het bedrijf is gevestigd in Naaldwijk. Neem rechtstreeks contact op voor informatie of beschikbaarheid.',
	navigation: [
		{ label: 'Home', href: '/' },
		{ label: 'Partybus Amsterdam', href: '/steden/partybus-huren-amsterdam/' },
		{ label: 'Over ons', href: '/over-ons/' },
		{ label: 'Contact', href: '/contact/' },
	],
	locationHeading: 'Amsterdam',
	locations: [
		{ label: 'Partybus Amsterdam', href: '/steden/partybus-huren-amsterdam/' },
		{ label: 'Partybus Utrecht', href: '/provincies/utrecht/' },
		municipalityLink('utrecht'),
		municipalityLink('amersfoort'),
		municipalityLink('nieuwegein'),
	],
	partner: partyBussenWestlandFooterPartner,
};
