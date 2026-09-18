import { prestigeCoachService } from '../data/partners/prestigeCoachService';
import { tourgoPartybussen } from '../data/partners/tourgoPartybussen';

/**
 * Explicit quote-partner allowlist. Never infer from province, city, or URL path.
 * A partner is only selected from a form prop or a valid ?partner= query value.
 */
export const QUOTE_PARTNER_IDS = [
	prestigeCoachService.id,
	tourgoPartybussen.id,
] as const;

export type QuotePartnerId = (typeof QUOTE_PARTNER_IDS)[number];

export function isQuotePartnerId(value: string): value is QuotePartnerId {
	return (QUOTE_PARTNER_IDS as readonly string[]).includes(value);
}

export function resolveQuotePartnerId(value: unknown): QuotePartnerId | '' {
	const partnerId = String(value ?? '').trim();
	return isQuotePartnerId(partnerId) ? partnerId : '';
}

/** Prop wins; otherwise query. Invalid or missing values stay national (no partner). */
export function resolveQuoteFormPartnerId(options: {
	propPartnerId?: unknown;
	queryPartner?: unknown;
}): QuotePartnerId | '' {
	return resolveQuotePartnerId(options.propPartnerId) || resolveQuotePartnerId(options.queryPartner);
}

export function resolveQuotePartnerLeadEmail(partnerId: string | undefined | null): string | null {
	if (partnerId === prestigeCoachService.id) {
		return prestigeCoachService.internalRouting.leadEmail;
	}
	if (partnerId === tourgoPartybussen.id) {
		return tourgoPartybussen.internalRouting.leadEmail;
	}
	return null;
}
