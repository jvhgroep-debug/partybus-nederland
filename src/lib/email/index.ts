import { emailSettings } from '../../data/settings/email';
import type { EmailMessage, EmailRuntimeEnv, QuoteRequestPayload } from './types';
import { buildCustomerConfirmation, buildOwnerNotification } from './templates';

export type QuoteEmailResult =
	| { ok: true; sent: true; provider: 'resend'; ids: string[] }
	| { ok: false; reason: 'validation' | 'missing_config' | 'provider_error'; error: string; fields?: string[] };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateQuotePayload(raw: unknown): {
	ok: true;
	data: QuoteRequestPayload;
} | {
	ok: false;
	error: string;
	fields: string[];
} {
	if (!raw || typeof raw !== 'object') {
		return { ok: false, error: 'Ongeldige aanvraag.', fields: [] };
	}

	const body = raw as Record<string, unknown>;

	// Honeypot: bots that fill this are rejected silently as "success" by API
	if (typeof body.website === 'string' && body.website.trim() !== '') {
		return {
			ok: true,
			data: {
				name: 'honeypot',
				email: 'honeypot@invalid.local',
				phone: '',
				city: '',
				website: body.website,
			},
		};
	}

	const name = String(body.name ?? '').trim();
	const email = String(body.email ?? '').trim();
	const phone = String(body.phone ?? '').trim();
	const city = String(body.city ?? '').trim();
	const date = String(body.date ?? '').trim();
	const guests = String(body.guests ?? '').trim();
	const message = String(body.message ?? '').trim();
	const sourcePage = String(body.sourcePage ?? '').trim();

	const fields: string[] = [];
	if (!name) fields.push('name');
	if (!email || !EMAIL_RE.test(email)) fields.push('email');
	if (!phone) fields.push('phone');
	if (!city) fields.push('city');

	if (fields.length > 0) {
		return {
			ok: false,
			error: 'Vul alle verplichte velden correct in.',
			fields,
		};
	}

	return {
		ok: true,
		data: {
			name,
			email,
			phone,
			city,
			date: date || undefined,
			guests: guests || undefined,
			message: message || undefined,
			sourcePage: sourcePage || undefined,
		},
	};
}

function resolveEnv(env?: EmailRuntimeEnv): { apiKey?: string; from?: string } {
	const apiKey =
		env?.RESEND_API_KEY ||
		(typeof import.meta !== 'undefined' && import.meta.env?.RESEND_API_KEY) ||
		(typeof process !== 'undefined' ? process.env?.RESEND_API_KEY : undefined);

	const from =
		env?.FROM_EMAIL ||
		(typeof import.meta !== 'undefined' && import.meta.env?.FROM_EMAIL) ||
		(typeof process !== 'undefined' ? process.env?.FROM_EMAIL : undefined) ||
		emailSettings.fromDefault;

	return {
		apiKey: apiKey ? String(apiKey).trim() : undefined,
		from: from ? String(from).trim() : undefined,
	};
}

export function isEmailSendingEnabled(env?: EmailRuntimeEnv): boolean {
	const { apiKey, from } = resolveEnv(env);
	return Boolean(apiKey && from);
}

async function sendViaResend(message: EmailMessage, apiKey: string, from: string): Promise<{ id?: string }> {
	const body: Record<string, unknown> = {
		from,
		to: [message.to],
		subject: message.subject,
		html: message.html,
		text: message.text,
	};
	if (message.replyTo) body.reply_to = message.replyTo;

	const response = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	const data = (await response.json().catch(() => ({}))) as { id?: string; message?: string };
	if (!response.ok) {
		throw new Error(data.message || `Resend HTTP ${response.status}`);
	}
	return { id: data.id };
}

/**
 * Verstuurt:
 * 1) interne mail naar jvhgroep@gmail.com
 * 2) bevestiging naar de klant
 */
export async function submitQuoteRequest(
	payload: QuoteRequestPayload,
	env?: EmailRuntimeEnv,
): Promise<QuoteEmailResult> {
	if (payload.website && payload.website.trim() !== '') {
		return { ok: true, sent: true, provider: 'resend', ids: [] };
	}

	const { apiKey, from } = resolveEnv(env);
	if (!apiKey || !from) {
		return {
			ok: false,
			reason: 'missing_config',
			error: 'E-mailverzending is nog niet geconfigureerd. Probeer later opnieuw of gebruik WhatsApp.',
		};
	}

	const ownerMail = buildOwnerNotification(payload);
	const customerMail = buildCustomerConfirmation(payload);

	try {
		const owner = await sendViaResend(ownerMail, apiKey, from);
		const customer = await sendViaResend(customerMail, apiKey, from);
		return {
			ok: true,
			sent: true,
			provider: 'resend',
			ids: [owner.id, customer.id].filter(Boolean) as string[],
		};
	} catch (error) {
		return {
			ok: false,
			reason: 'provider_error',
			error: error instanceof Error ? error.message : String(error),
		};
	}
}

export { buildCustomerConfirmation, buildOwnerNotification, emailSettings };
export type { QuoteRequestPayload, EmailMessage, EmailRuntimeEnv };
