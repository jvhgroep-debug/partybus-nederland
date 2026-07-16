import type { GidsenGuideDef } from './types';
import { allGidsenDefinitions } from './content';

const SITE = 'https://www.partybusnederland.nl';

export const GIDSEN_HUB_PATH = '/gidsen/';
export const GIDSEN_HUB_LABEL = 'Kennisbank';

export function gidsenPath(slug: string): string {
	return `/gidsen/${slug}/`;
}

export function gidsenCanonical(slug: string): string {
	return `${SITE}${gidsenPath(slug)}`;
}

export function getGidsenDefinition(slug: string): GidsenGuideDef | undefined {
	return allGidsenDefinitions.find((guide) => guide.slug === slug);
}

export function getAllGidsenSlugs(): string[] {
	return allGidsenDefinitions.map((guide) => guide.slug);
}

export function getAllGidsenDefinitions(): readonly GidsenGuideDef[] {
	return allGidsenDefinitions;
}

export const gidsenHubMeta = {
	title: 'Kennisbank partybus huren | Alle gidsen & tips',
	description:
		'Uitgebreide kennisbank over partybus huren in Nederland: prijzen, regels, veiligheid, festivals, bruiloften, routes en meer. Vergelijk vrijblijvend offertes.',
	canonical: `${SITE}${GIDSEN_HUB_PATH}`,
	h1: 'Kennisbank partybus huren',
	eyebrow: 'KENNISBANK',
	lead: 'Alle praktische gidsen over partybus huren op één plek — van prijzen en regels tot festivals, bruiloften en bedrijfsuitjes.',
} as const;
