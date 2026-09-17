/**
 * Scalable partner territory for Star Local pSEO.
 *
 * Supports:
 * - one or more full provinces
 * - one or more extra municipalities outside those provinces
 * - province + extra municipality combinations
 *
 * Do not scatter city-by-city exceptions in templates.
 * Geographic provinceSlug on extra municipalities must stay the real province
 * (Amsterdam = noord-holland), never the partner's main province.
 */
export type ExtraMunicipalityCoverage = {
	slug: string;
	provinceSlug: string;
};

export type PartnerTerritory = {
	provinceSlugs: readonly string[];
	extraMunicipalities: readonly ExtraMunicipalityCoverage[];
};

export type TerritoryMatch = {
	kind: 'province' | 'extra-municipality';
	provinceSlug: string;
	municipalitySlug: string;
};

export function extraMunicipalitySlugs(territory: PartnerTerritory): readonly string[] {
	return territory.extraMunicipalities.map((item) => item.slug);
}

export function coversMunicipalitySlug(
	territory: PartnerTerritory,
	municipalitySlug: string,
	municipalityProvinceSlug: string,
): boolean {
	return matchTerritoryMunicipality(territory, municipalitySlug, municipalityProvinceSlug) !== null;
}

export function matchTerritoryMunicipality(
	territory: PartnerTerritory,
	municipalitySlug: string,
	municipalityProvinceSlug: string,
): TerritoryMatch | null {
	// Extra municipalities first, so Amsterdam never inherits provinceSlug utrecht.
	const extra = territory.extraMunicipalities.find((item) => item.slug === municipalitySlug);
	if (extra) {
		return {
			kind: 'extra-municipality',
			provinceSlug: extra.provinceSlug,
			municipalitySlug: extra.slug,
		};
	}

	if (territory.provinceSlugs.includes(municipalityProvinceSlug)) {
		return {
			kind: 'province',
			provinceSlug: municipalityProvinceSlug,
			municipalitySlug,
		};
	}

	return null;
}
