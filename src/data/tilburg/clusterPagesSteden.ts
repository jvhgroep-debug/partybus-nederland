import {
	type TilburgClusterPage,
	tilburgClusterPages,
	TILBURG_CITY_HUB,
	TILBURG_QUOTE_PATH,
	getTilburgClusterPage,
} from './clusterPages';

export type { TilburgClusterPage };
export { TILBURG_CITY_HUB, TILBURG_QUOTE_PATH };

/** Canonical Tilburg SEO cluster under /steden/partybus-huren-tilburg/{onderwerp}/ */
export const tilburgClusterPagesSteden: TilburgClusterPage[] = tilburgClusterPages;

export const tilburgClusterStedenPaths = tilburgClusterPagesSteden.map((page) => page.path);

export function getTilburgClusterPageSteden(onderwerp: string): TilburgClusterPage | undefined {
	return getTilburgClusterPage(onderwerp);
}