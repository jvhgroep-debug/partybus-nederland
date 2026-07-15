import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import {
	emailSettings,
	submitQuoteRequest,
	validateQuotePayload,
} from '../../lib/email';

export const prerender = false;

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'no-store',
		},
	});
}

function getRuntimeEnv(): { RESEND_API_KEY?: string; FROM_EMAIL?: string } {
	try {
		return {
			RESEND_API_KEY: env.RESEND_API_KEY as string | undefined,
			FROM_EMAIL: env.FROM_EMAIL as string | undefined,
		};
	} catch {
		return {
			RESEND_API_KEY: import.meta.env.RESEND_API_KEY,
			FROM_EMAIL: import.meta.env.FROM_EMAIL,
		};
	}
}

export const POST: APIRoute = async ({ request }) => {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return json({ ok: false, error: 'Ongeldige aanvraag.' }, 400);
	}

	const validated = validateQuotePayload(body);
	if (!validated.ok) {
		return json(
			{
				ok: false,
				error: validated.error,
				fields: validated.fields,
			},
			400,
		);
	}

	const result = await submitQuoteRequest(validated.data, getRuntimeEnv());

	if (!result.ok) {
		const status = result.reason === 'missing_config' ? 503 : 502;
		return json(
			{
				ok: false,
				error: result.reason === 'provider_error' ? emailSettings.errorMessage : result.error,
			},
			status,
		);
	}

	return json({
		ok: true,
		message: emailSettings.successMessage,
	});
};

export const ALL: APIRoute = async ({ request }) => {
	if (request.method === 'OPTIONS') {
		return new Response(null, {
			status: 204,
			headers: {
				Allow: 'POST, OPTIONS',
			},
		});
	}
	return json({ ok: false, error: 'Alleen POST is toegestaan.' }, 405);
};
