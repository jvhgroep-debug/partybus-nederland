import { getPublishedCity } from '../cities/registry';

export type FooterLink = {
	label: string;
	href: string;
};

export type RegionalFooterConfig = {
	id: string;
	compact?: boolean;
	ctaLabel?: string;
	navigation: readonly FooterLink[];
	locationHeading: string;
	locations: readonly FooterLink[];
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
