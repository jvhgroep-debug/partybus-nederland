import { emailSettings } from '../../data/settings/email';
import { buildCustomerConfirmation, buildOwnerNotification } from './templates';
import type { EmailMessage, QuoteRequestPayload } from './types';

export type QuoteEmailResult =
	| { ok: true; sent: true; provider: 'resend'; ids: string[] }
	| { ok: true; sent: false; reason: 'missing_api_key' | 'missing_from' }
	| { ok: false; reason: 'provider_error'; error: string };

function resolveFrom(): string {
	return (typeof process !== 'undefined' && process.env?.EMAIL_FROM) || emailSettings.fromDefault;
}

function resolveApiKey(): string | undefined {
	if (typeof process === 'undefined') return undefined;
	return process.env.RESEND_API_KEY || undefined;
}

/** True when Resend verzending echt mag lopen. */
export function isEmailSendingEnabled(): boolean {
	return Boolean(resolveApiKey());
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
 *
 * Zonder RESEND_API_KEY gebeurt er geen verzending (structuur wel klaar).
 */
export async function submitQuoteRequest(payload: QuoteRequestPayload): Promise<QuoteEmailResult> {
	const apiKey = resolveApiKey();
	if (!apiKey) {
		return { ok: true, sent: false, reason: 'missing_api_key' };
	}

	const from = resolveFrom();
	if (!from) {
		return { ok: true, sent: false, reason: 'missing_from' };
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

export { buildCustomerConfirmation, buildOwnerNotification };
export type { QuoteRequestPayload, EmailMessage };
