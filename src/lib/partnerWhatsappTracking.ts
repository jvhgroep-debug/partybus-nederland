import { prestigeCoachService } from '../data/partners/prestigeCoachService';
import { tourgoPartybussen } from '../data/partners/tourgoPartybussen';
import {
	partyBussenWestland,
	partyBussenWestlandTerritory,
} from '../data/partners/partyBussenWestland';
import { matchTerritoryMunicipality } from '../data/partners/coverage';

export const PARTNER_WHATSAPP_BUTTON_TYPES = [
	'hero',
	'occasions',
	'conversion-band',
	'partner-section',
	'cta',
	'footer',
	'float',
	'province-hero',
] as const;

export type PartnerWhatsappButtonType = (typeof PARTNER_WHATSAPP_BUTTON_TYPES)[number];

export type PartnerWhatsappPageType = 'municipality' | 'province';

export type PartnerWhatsappTrackingContext = {
	partnerId: string;
	provinceSlug: string;
	municipalitySlug: string | null;
	municipalityName: string;
	pagePath: string;
	pageType: PartnerWhatsappPageType;
};

export type PartnerWhatsappClickPayload = PartnerWhatsappTrackingContext & {
	buttonType: PartnerWhatsappButtonType;
};

const buttonTypeSet = new Set<string>(PARTNER_WHATSAPP_BUTTON_TYPES);

export function isPartnerWhatsappButtonType(value: string): value is PartnerWhatsappButtonType {
	return buttonTypeSet.has(value);
}

export function buildNoordBrabantWhatsappTrackingContext(input: {
	municipalitySlug: string | null;
	municipalityName: string;
	pagePath: string;
	pageType: PartnerWhatsappPageType;
}): PartnerWhatsappTrackingContext {
	return {
		partnerId: prestigeCoachService.id,
		provinceSlug: prestigeCoachService.provinceSlug,
		municipalitySlug: input.municipalitySlug,
		municipalityName: input.municipalityName,
		pagePath: input.pagePath,
		pageType: input.pageType,
	};
}

export function buildZuidHollandWhatsappTrackingContext(input: {
	municipalitySlug: string | null;
	municipalityName: string;
	pagePath: string;
	pageType: PartnerWhatsappPageType;
}): PartnerWhatsappTrackingContext {
	return {
		partnerId: tourgoPartybussen.id,
		provinceSlug: tourgoPartybussen.provinceSlug,
		municipalitySlug: input.municipalitySlug,
		municipalityName: input.municipalityName,
		pagePath: input.pagePath,
		pageType: input.pageType,
	};
}

export function buildPartyBussenWestlandWhatsappTrackingContext(input: {
	municipalitySlug: string | null;
	municipalityName: string;
	municipalityProvinceSlug: string;
	pagePath: string;
	pageType: PartnerWhatsappPageType;
}): PartnerWhatsappTrackingContext {
	const match = input.municipalitySlug
		? matchTerritoryMunicipality(
				partyBussenWestlandTerritory,
				input.municipalitySlug,
				input.municipalityProvinceSlug,
			)
		: null;

	return {
		partnerId: partyBussenWestland.id,
		provinceSlug: match?.provinceSlug ?? input.municipalityProvinceSlug,
		municipalitySlug: input.municipalitySlug,
		municipalityName: input.municipalityName,
		pagePath: input.pagePath,
		pageType: input.pageType,
	};
}

export const PARTNER_WHATSAPP_TRACKING_ENDPOINT = '/api/partner-whatsapp-click';
