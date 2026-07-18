import type { KennisbankArticle } from './types';
import { partybusHurenCompleteGids } from './articles/partybusHurenCompleteGids';

/** Registry for Star Local pSEO Suite — kennisbank master articles. */
export const kennisbankArticles: readonly KennisbankArticle[] = [partybusHurenCompleteGids];

export function getKennisbankArticle(slug: string): KennisbankArticle | undefined {
	return kennisbankArticles.find((article) => article.slug === slug);
}

export const kennisbankHubMeta = {
	title: 'Kennisbank | Partybus Nederland',
	description:
		'Praktische kennisbankartikelen over partybus huren: groepsgrootte, kostenfactoren, festivals, veiligheid en boekingstips.',
	canonical: 'https://www.partybusnederland.nl/kennisbank/',
	h1: 'Kennisbank Partybus Nederland',
	lead: 'Diepgaande artikelen die je helpen een partybus te vergelijken en boeken — zonder vaste prijzen of beschikbaarheidsgaranties.',
} as const;
