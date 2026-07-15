import { emailSettings } from '../../data/settings/email';
import { site } from '../../data/settings/site';
import type { EmailMessage, QuoteRequestPayload } from './types';

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

function fieldLines(payload: QuoteRequestPayload): string[] {
	return [
		`Naam: ${payload.name}`,
		`E-mail: ${payload.email}`,
		payload.phone ? `Telefoon: ${payload.phone}` : '',
		payload.city ? `Stad: ${payload.city}` : '',
		payload.date ? `Datum: ${payload.date}` : '',
		payload.guests != null && payload.guests !== '' ? `Aantal gasten: ${payload.guests}` : '',
		payload.sourcePage ? `Bronpagina: ${payload.sourcePage}` : '',
		payload.message ? `Bericht:\n${payload.message}` : '',
	].filter(Boolean);
}

function fieldHtml(payload: QuoteRequestPayload): string {
	const rows: Array<[string, string]> = [
		['Naam', payload.name],
		['E-mail', payload.email],
	];
	if (payload.phone) rows.push(['Telefoon', payload.phone]);
	if (payload.city) rows.push(['Stad', payload.city]);
	if (payload.date) rows.push(['Datum', payload.date]);
	if (payload.guests != null && payload.guests !== '') rows.push(['Aantal gasten', String(payload.guests)]);
	if (payload.sourcePage) rows.push(['Bronpagina', payload.sourcePage]);
	if (payload.message) rows.push(['Bericht', payload.message]);

	return rows
		.map(
			([label, value]) =>
				`<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#111;">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`,
		)
		.join('');
}

/** Automatische bevestigingsmail naar de klant */
export function buildCustomerConfirmation(payload: QuoteRequestPayload): EmailMessage {
	const text = [
		`Hoi ${payload.name},`,
		'',
		`Bedankt voor je aanvraag bij ${site.name}.`,
		'We hebben je bericht goed ontvangen en gaan ermee aan de slag.',
		'Je ontvangt zo snel mogelijk een reactie — meestal binnen 24 uur.',
		'',
		'Samenvatting van je aanvraag:',
		...fieldLines(payload).map((line) => `- ${line}`),
		'',
		`Met vriendelijke groet,`,
		`Het team van ${site.name}`,
		site.url,
	].join('\n');

	const html = `
		<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;max-width:560px;">
			<p>Hoi ${escapeHtml(payload.name)},</p>
			<p>Bedankt voor je aanvraag bij <strong>${escapeHtml(site.name)}</strong>.</p>
			<p>We hebben je bericht goed ontvangen en gaan ermee aan de slag. Je ontvangt zo snel mogelijk een reactie — meestal binnen 24 uur.</p>
			<p><strong>Samenvatting van je aanvraag</strong></p>
			<table style="border-collapse:collapse;font-size:14px;">${fieldHtml(payload)}</table>
			<p style="margin-top:24px;">Met vriendelijke groet,<br>Het team van ${escapeHtml(site.name)}</p>
			<p style="color:#666;font-size:13px;"><a href="${escapeHtml(site.url)}">${escapeHtml(site.url)}</a></p>
		</div>
	`.trim();

	return {
		to: payload.email,
		subject: emailSettings.subjects.customer,
		html,
		text,
		replyTo: emailSettings.replyToInbox ? emailSettings.inbox : undefined,
	};
}

/** Interne notificatie naar het vaste ontvangstadres */
export function buildOwnerNotification(payload: QuoteRequestPayload): EmailMessage {
	const text = [
		`Nieuwe offerteaanvraag via ${site.name}`,
		'',
		...fieldLines(payload),
		'',
		`Beantwoord de klant via: ${payload.email}`,
	].join('\n');

	const html = `
		<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;max-width:560px;">
			<p><strong>Nieuwe offerteaanvraag</strong> via ${escapeHtml(site.name)}</p>
			<table style="border-collapse:collapse;font-size:14px;">${fieldHtml(payload)}</table>
			<p style="margin-top:20px;">Beantwoord de klant via: <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
		</div>
	`.trim();

	return {
		to: emailSettings.inbox,
		subject: emailSettings.subjects.owner,
		html,
		text,
		replyTo: payload.email,
	};
}
