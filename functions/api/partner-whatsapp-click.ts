/**
 * Cloudflare Pages Function — POST /api/partner-whatsapp-click
 *
 * Env: PARTNER_ANALYTICS (D1 binding)
 */
import { prestigeCoachService } from '../../src/data/partners/prestigeCoachService';
import {
	isPartnerWhatsappButtonType,
	PARTNER_WHATSAPP_BUTTON_TYPES,
	type PartnerWhatsappClickPayload,
} from '../../src/lib/partnerWhatsappTracking';

interface Env {
	PARTNER_ANALYTICS?: D1Database;
}

type ClickPayload = PartnerWhatsappClickPayload;

const ALLOWED_PARTNERS = new Set([prestigeCoachService.id]);
const ALLOWED_PROVINCES = new Set([prestigeCoachService.provinceSlug]);
const MAX_FIELD_LENGTH = 240;

function noContent(): Response {
	return new Response(null, {
		status: 204,
		headers: {
			'Cache-Control': 'no-store',
		},
	});
}

function truncate(value: string, max = MAX_FIELD_LENGTH): string {
	return value.length > max ? value.slice(0, max) : value;
}

function validatePayload(raw: unknown): ClickPayload | null {
	if (!raw || typeof raw !== 'object') return null;

	const body = raw as Record<string, unknown>;
	const partnerId = typeof body.partnerId === 'string' ? body.partnerId.trim() : '';
	const provinceSlug = typeof body.provinceSlug === 'string' ? body.provinceSlug.trim() : '';
	const municipalitySlug =
		typeof body.municipalitySlug === 'string' && body.municipalitySlug.trim()
			? body.municipalitySlug.trim()
			: null;
	const municipalityName =
		typeof body.municipalityName === 'string' ? body.municipalityName.trim() : '';
	const pagePath = typeof body.pagePath === 'string' ? body.pagePath.trim() : '';
	const pageType = body.pageType;
	const buttonType = typeof body.buttonType === 'string' ? body.buttonType.trim() : '';

	if (!ALLOWED_PARTNERS.has(partnerId)) return null;
	if (!ALLOWED_PROVINCES.has(provinceSlug)) return null;
	if (!municipalityName || !pagePath.startsWith('/') || !pagePath.endsWith('/')) return null;
	if (pageType !== 'municipality' && pageType !== 'province') return null;
	if (!isPartnerWhatsappButtonType(buttonType)) return null;

	return {
		partnerId,
		provinceSlug,
		municipalitySlug,
		municipalityName: truncate(municipalityName),
		pagePath: truncate(pagePath),
		pageType,
		buttonType,
	};
}

async function insertClick(env: Env, payload: ClickPayload, request: Request): Promise<void> {
	if (!env.PARTNER_ANALYTICS) return;

	const userAgent = truncate(request.headers.get('user-agent') ?? '', 512);
	const referrer = truncate(request.headers.get('referer') ?? '', 512);

	await env.PARTNER_ANALYTICS.prepare(
		`INSERT INTO partner_whatsapp_clicks (
			partner_id,
			province_slug,
			municipality_slug,
			municipality_name,
			page_path,
			page_type,
			button_type,
			user_agent,
			referrer
		) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
	)
		.bind(
			payload.partnerId,
			payload.provinceSlug,
			payload.municipalitySlug,
			payload.municipalityName,
			payload.pagePath,
			payload.pageType,
			payload.buttonType,
			userAgent || null,
			referrer || null,
		)
		.run();
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	try {
		const payload = validatePayload(await context.request.json());
		if (!payload) {
			return noContent();
		}

		await insertClick(context.env, payload, context.request);
	} catch {
		// Tracking failures must never affect the WhatsApp click flow.
	}

	return noContent();
};

export const onRequest: PagesFunction<Env> = async (context) => {
	if (context.request.method === 'OPTIONS') {
		return new Response(null, {
			status: 204,
			headers: {
				Allow: 'POST, OPTIONS',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, OPTIONS',
				'Access-Control-Allow-Headers': 'content-type',
			},
		});
	}

	if (context.request.method === 'POST') {
		return onRequestPost(context);
	}

	return new Response(JSON.stringify({ ok: false, allowed: PARTNER_WHATSAPP_BUTTON_TYPES }), {
		status: 405,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			Allow: 'POST, OPTIONS',
		},
	});
};
