import {
	tilburgClusterPages,
	TILBURG_CITY_HUB,
	TILBURG_QUOTE_PATH,
	type TilburgClusterLink,
	type TilburgClusterPage,
} from '../data/tilburg/clusterPages';
import { getTilburgClusterVisuals } from '../data/tilburg/clusterVisuals';

/** Minimum internal nav set: hub + 3 cluster + kennisbank + offerte (= 6). */
export function buildTilburgClusterNavLinks(page: TilburgClusterPage): TilburgClusterLink[] {
	const visuals = getTilburgClusterVisuals(page.slug);

	const hub: TilburgClusterLink = {
		href: TILBURG_CITY_HUB,
		label: 'Partybus huren Tilburg — hoofdpagina',
	};
	const offerte: TilburgClusterLink = {
		href: TILBURG_QUOTE_PATH,
		label: 'Gratis partybus-offertes aanvragen',
	};

	const clusterFromRelated = page.related.filter(
		(link) =>
			link.href.startsWith('/steden/partybus-huren-tilburg/') &&
			link.href !== TILBURG_CITY_HUB &&
			link.href !== page.path,
	);

	const seen = new Set<string>();
	const clusterLinks: TilburgClusterLink[] = [];

	for (const link of clusterFromRelated) {
		if (clusterLinks.length >= 3) break;
		if (!seen.has(link.href)) {
			seen.add(link.href);
			clusterLinks.push(link);
		}
	}

	if (clusterLinks.length < 3) {
		for (const candidate of tilburgClusterPages) {
			if (candidate.slug === page.slug) continue;
			if (clusterLinks.length >= 3) break;
			if (!seen.has(candidate.path)) {
				seen.add(candidate.path);
				clusterLinks.push({ href: candidate.path, label: candidate.navLabel });
			}
		}
	}

	return [hub, ...clusterLinks, visuals.kennisbankLink, offerte];
}
