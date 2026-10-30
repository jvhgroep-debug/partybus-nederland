import { afspeellijst } from './articles/afspeellijst';
import { tijdslotUtrecht } from './articles/tijdslotUtrecht';
import { organisatorBrabant } from './articles/organisatorBrabant';
import { wachtenZeeland } from './articles/wachtenZeeland';
import { terugritGroepskeuze } from './articles/terugritGroepskeuze';
import { mobiliteitswensen } from './articles/mobiliteitswensen';
import { ritWijzigenZeeland } from './articles/ritWijzigenZeeland';
import { samenwerkingStarTransferZeeland } from './articles/samenwerkingStarTransferZeeland';
import { samenwerkingWestland } from './articles/samenwerkingWestland';
import type { KennisbankArticle } from './types';
import { regionalPlanningArticles } from './regionalPlanning';
import { bruiloftBrabantGasten } from './articles/bruiloftBrabantGasten';
import { weekendBagageZuidHolland } from './articles/weekendBagageZuidHolland';
import { groepsgrootteWijzigen } from './articles/groepsgrootteWijzigen';
import { partybusHurenCompleteGids } from './articles/partybusHurenCompleteGids';
import { samenwerkingPrestigeNoordBrabant } from './articles/samenwerkingPrestigeNoordBrabant';
import { samenwerkingTourgoZuidHolland } from './articles/samenwerkingTourgoZuidHolland';

/** Registry for Star Local pSEO Suite — kennisbank master articles. */
export const kennisbankArticles: readonly KennisbankArticle[] = [
  afspeellijst,
  tijdslotUtrecht,
  organisatorBrabant,
  wachtenZeeland,
  terugritGroepskeuze,
  mobiliteitswensen,
  ritWijzigenZeeland,
  weekendBagageZuidHolland,
  bruiloftBrabantGasten,
  ...regionalPlanningArticles.map(item => item.article),
  groepsgrootteWijzigen,
	samenwerkingStarTransferZeeland,
	partybusHurenCompleteGids,
	samenwerkingWestland,
	samenwerkingPrestigeNoordBrabant,
	samenwerkingTourgoZuidHolland,
];

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
