/**
 * Cloudflare Pages Function — POST /api/offerte
 *
 * Env: RESEND_API_KEY (verplicht)
 * FROM_EMAIL: optioneel. Partybus-domeinen worden genegeerd tot DNS live is;
 * fallback is Resend testdomein: onboarding@resend.dev
 */

interface Env {
	RESEND_API_KEY?: string;
	FROM_EMAIL?: string;
}

interface QuotePayload {
	name: string;
	email: string;
	phone: string;
	city: string;
	date?: string;
	guests?: string;
	message?: string;
	sourcePage?: string;
	website?: string;
}

const INBOX = 'jvhgroep@gmail.com';
/** Resend testdomein — werkt zonder DNS / zonder partybusnederland.nl */
const FROM_TEST = 'Partybus Nederland <onboarding@resend.dev>';
const SUCCESS =
	'Bedankt! Je aanvraag is succesvol verzonden. Wij nemen zo snel mogelijk contact met je op.';
const ERROR_GENERIC =
	'Er ging iets mis bij het verzenden. Probeer het opnieuw of bereik ons via WhatsApp.';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'no-store',
		},
	});
}

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

/**
 * Gebruik geen partybusnederland.nl / mail.* tot DNS gekoppeld is.
 * Resend testdomein werkt met de bestaande API-key.
 */
function resolveFrom(envFrom?: string): string {
	const raw = (envFrom || '').trim();
	if (!raw) return FROM_TEST;
	const lower = raw.toLowerCase();
	if (
		lower.includes('partybusnederland.nl') ||
		lower.includes('mail.partybus')
	) {
		return FROM_TEST;
	}
	return raw;
}

function validate(raw: unknown):
	| { ok: true; data: QuotePayload }
	| { ok: false; error: string; fields: string[] } {
	if (!raw || typeof raw !== 'object') {
		return { ok: false, error: 'Ongeldige aanvraag.', fields: [] };
	}
	const body = raw as Record<string, unknown>;

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
	const fields: string[] = [];
	if (!name) fields.push('name');
	if (!email || !EMAIL_RE.test(email)) fields.push('email');
	if (!phone) fields.push('phone');
	if (!city) fields.push('city');

	if (fields.length > 0) {
		return { ok: false, error: 'Vul alle verplichte velden correct in.', fields };
	}

	return {
		ok: true,
		data: {
			name,
			email,
			phone,
			city,
			date: String(body.date ?? '').trim() || undefined,
			guests: String(body.guests ?? '').trim() || undefined,
			message: String(body.message ?? '').trim() || undefined,
			sourcePage: String(body.sourcePage ?? '').trim() || undefined,
		},
	};
}

function fieldRows(payload: QuotePayload): Array<[string, string]> {
	const rows: Array<[string, string]> = [
		['Naam', payload.name],
		['E-mail', payload.email],
		['Telefoon', payload.phone],
		['Stad', payload.city],
	];
	if (payload.date) rows.push(['Datum', payload.date]);
	if (payload.guests) rows.push(['Aantal gasten', payload.guests]);
	if (payload.sourcePage) rows.push(['Bronpagina', payload.sourcePage]);
	if (payload.message) rows.push(['Bericht', payload.message]);
	return rows;
}

async function sendResend(
	apiKey: string,
	from: string,
	message: { to: string; subject: string; html: string; text: string; replyTo?: string },
): Promise<{ ok: true } | { ok: false; status: number; detail: string }> {
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

	const data = (await response.json().catch(() => ({}))) as {
		message?: string;
		name?: string;
	};

	if (!response.ok) {
		return {
			ok: false,
			status: response.status,
			detail: data.message || `Resend HTTP ${response.status}`,
		};
	}
	return { ok: true };
}

function isTestDomainRecipientLimit(detail: string): boolean {
	const d = detail.toLowerCase();
	return (
		d.includes('only send testing emails') ||
		d.includes('verify a domain') ||
		d.includes('own email address')
	);
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	let body: unknown;
	try {
		body = await context.request.json();
	} catch {
		return json({ ok: false, error: 'Ongeldige aanvraag.' }, 400);
	}

	const validated = validate(body);
	if (!validated.ok) {
		return json({ ok: false, error: validated.error, fields: validated.fields }, 400);
	}

	const payload = validated.data;
	if (payload.website && payload.website.trim() !== '') {
		return json({ ok: true, message: SUCCESS, redirect: '/bedankt/' });
	}

	const apiKey = context.env.RESEND_API_KEY?.trim();
	const from = resolveFrom(context.env.FROM_EMAIL);
	if (!apiKey) {
		return json(
			{
				ok: false,
				error:
					'E-mailverzending is nog niet geconfigureerd. Probeer later opnieuw of gebruik WhatsApp.',
			},
			503,
		);
	}

	const rows = fieldRows(payload);
	const summaryText = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
	const summaryHtml = rows
		.map(
			([k, v]) =>
				`<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;">${escapeHtml(k)}</td><td style="padding:6px 0;color:#111;">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`,
		)
		.join('');

	const ownerResult = await sendResend(apiKey, from, {
		to: INBOX,
		subject: 'Nieuwe offerteaanvraag – Partybus Nederland',
		text: `Nieuwe aanvraag via Partybus Nederland\n\n${summaryText}`,
		html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;"><p><strong>Nieuwe offerteaanvraag</strong></p><table style="border-collapse:collapse;font-size:14px;">${summaryHtml}</table></div>`,
		replyTo: payload.email,
	});

	if (!ownerResult.ok) {
		const hint = isTestDomainRecipientLimit(ownerResult.detail)
			? ' De Resend-account moet gekoppeld zijn aan jvhgroep@gmail.com om met het testdomein te kunnen mailen.'
			: '';
		return json(
			{
				ok: false,
				error: `${ERROR_GENERIC}${hint}`,
			},
			502,
		);
	}

	const sameAsInbox = payload.email.toLowerCase() === INBOX.toLowerCase();

	if (!sameAsInbox) {
		const customerResult = await sendResend(apiKey, from, {
			to: payload.email,
			subject: 'Bedankt voor je aanvraag bij Partybus Nederland',
			text: [
				`Hoi ${payload.name},`,
				'',
				'Bedankt voor je aanvraag bij Partybus Nederland.',
				'We hebben je bericht goed ontvangen en gaan ermee aan de slag.',
				'',
				'Samenvatting:',
				summaryText,
				'',
				'Met vriendelijke groet,',
				'Het team van Partybus Nederland',
			].join('\n'),
			html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;max-width:560px;"><p>Hoi ${escapeHtml(payload.name)},</p><p>Bedankt voor je aanvraag bij <strong>Partybus Nederland</strong>.</p><p>We hebben je bericht goed ontvangen en gaan ermee aan de slag.</p><p><strong>Samenvatting</strong></p><table style="border-collapse:collapse;font-size:14px;">${summaryHtml}</table><p style="margin-top:24px;">Met vriendelijke groet,<br>Het team van Partybus Nederland</p></div>`,
			replyTo: INBOX,
		});

		if (!customerResult.ok) {
			if (isTestDomainRecipientLimit(customerResult.detail)) {
				// Testdomein: klantmail naar derden geblokkeerd → stuur bevestigingskopie naar inbox
				await sendResend(apiKey, from, {
					to: INBOX,
					subject: `Klantbevestiging (preview) – bedoeld voor ${payload.email}`,
					text: [
						`Kon de bevestiging niet naar ${payload.email} sturen (Resend-testdomeinlimiet).`,
						'Tot DNS/afzenderdomein live is, werkt klantmail alleen naar het Resend-accountadres.',
						'',
						'--- Bevestigingstekst voor de klant ---',
						'',
						`Hoi ${payload.name},`,
						'Bedankt voor je aanvraag bij Partybus Nederland.',
						summaryText,
					].join('\n'),
					html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;"><p><em>Preview:</em> bevestiging kon niet naar <strong>${escapeHtml(payload.email)}</strong> (Resend testdomein).</p><p>Hoi ${escapeHtml(payload.name)}, bedankt voor je aanvraag.</p><table style="border-collapse:collapse;font-size:14px;">${summaryHtml}</table></div>`,
					replyTo: payload.email,
				});
			} else {
				return json({ ok: false, error: ERROR_GENERIC }, 502);
			}
		}
	} else {
		// Zelfde inbox: aparte bevestigingsmail naast de internmelding
		const confirmResult = await sendResend(apiKey, from, {
			to: INBOX,
			subject: 'Bedankt voor je aanvraag bij Partybus Nederland',
			text: [
				`Hoi ${payload.name},`,
				'',
				'Bedankt voor je aanvraag bij Partybus Nederland.',
				'We hebben je bericht goed ontvangen en gaan ermee aan de slag.',
				'',
				'Samenvatting:',
				summaryText,
				'',
				'Met vriendelijke groet,',
				'Het team van Partybus Nederland',
			].join('\n'),
			html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;max-width:560px;"><p>Hoi ${escapeHtml(payload.name)},</p><p>Bedankt voor je aanvraag bij <strong>Partybus Nederland</strong>.</p><p>We hebben je bericht goed ontvangen en gaan ermee aan de slag.</p><p><strong>Samenvatting</strong></p><table style="border-collapse:collapse;font-size:14px;">${summaryHtml}</table><p style="margin-top:24px;">Met vriendelijke groet,<br>Het team van Partybus Nederland</p></div>`,
			replyTo: INBOX,
		});

		if (!confirmResult.ok) {
			return json({ ok: false, error: ERROR_GENERIC }, 502);
		}
	}

	return json({ ok: true, message: SUCCESS, redirect: '/bedankt/' });
};

export const onRequest: PagesFunction<Env> = async (context) => {
	if (context.request.method === 'OPTIONS') {
		return new Response(null, {
			status: 204,
			headers: { Allow: 'POST, OPTIONS' },
		});
	}
	if (context.request.method === 'POST') {
		return onRequestPost(context);
	}
	return json({ ok: false, error: 'Alleen POST is toegestaan.' }, 405);
};
