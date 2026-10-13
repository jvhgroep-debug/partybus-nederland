/**
 * Cloudflare Pages Function — POST /api/offerte
 *
 * Env: RESEND_API_KEY (verplicht)
 * FROM_EMAIL: optioneel. Partybus-domeinen worden genegeerd tot DNS live is;
 * fallback is Resend testdomein: onboarding@resend.dev
 */
import {
	resolveQuotePartnerId,
	resolveQuotePartnerLeadEmail,
} from '../../src/lib/quotePartnerRouting';

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
	partnerId?: string;
	partnerCity?: string;
	website?: string;
	requestId?: string;
}

const INBOX = 'info@starlocal.nl';
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
 * Geverifieerde Star Local / Resend-afzenders blijven staan.
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
	if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
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
	const partnerId = resolveQuotePartnerId(body.partnerId) || undefined;
	const partnerCity = partnerId
		? String(body.partnerCity ?? '').trim() || city
		: undefined;
	const requestedSourcePage = String(body.sourcePage ?? '').trim();
	const sourcePage = requestedSourcePage.startsWith('/')
		? requestedSourcePage.slice(0, 500)
		: undefined;
	const fields: string[] = [];
	if (!name) fields.push('name');
	if (!email || !EMAIL_RE.test(email)) fields.push('email');
	if (!phone) fields.push('phone');
	if (!city) fields.push('city');
 const guests = String(body.guests ?? '').trim();
 const date = String(body.date ?? '').trim();
 if (guests && (!/^\d+$/.test(guests) || Number(guests) < 1 || Number(guests) > 80)) fields.push('guests');
 if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0,10) !== date)) fields.push('date');
 if (name.length > 200) fields.push('name');
 if (email.length > 254) fields.push('email');
 if (phone.length > 50) fields.push('phone');
 if (city.length > 200) fields.push('city');
 if (String(body.message ?? '').length > 10000) fields.push('message');
 if (body.partnerId && !partnerId) fields.push('partnerId');

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
			date: date || undefined,
			guests: guests || undefined,
			message: String(body.message ?? '').trim() || undefined,
			sourcePage,
			requestId: String(body.requestId ?? '').slice(0,100),
			partnerId,
			partnerCity,
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
	if (payload.partnerId) rows.push(['Partner-ID', payload.partnerId]);
	if (payload.partnerCity) rows.push(['Partnergemeente', payload.partnerCity]);
	if (payload.message) rows.push(['Bericht', payload.message]);
	return rows;
}

async function sendResend(apiKey: string, from: string, idempotencyKey: string, message: {to: string; subject: string; html: string; text: string; replyTo?: string}): Promise<boolean> {
 const body = {from, to: [message.to], subject: message.subject, html: message.html, text: message.text, reply_to: message.replyTo};
 for (let attempt=0; attempt<3; attempt++) {
  try {
   const response = await fetch('https://api.resend.com/emails', {method:'POST', signal:AbortSignal.timeout(10000), headers:{Authorization:`Bearer ${apiKey}`, 'Content-Type':'application/json', 'Idempotency-Key':idempotencyKey}, body:JSON.stringify(body)});
   if (response.ok) return true;
   if (response.status !== 429 && response.status < 500) return false;
  } catch { /* Retry an uncertain send with the same provider idempotency key. */ }
  if (attempt < 2) await new Promise(resolve=>setTimeout(resolve, 250 * 2**attempt));
 }
 return false;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
 const nativeForm = !context.request.headers.get('content-type')?.includes('application/json');
 let body: unknown;
 try { body = nativeForm ? Object.fromEntries(await context.request.formData()) : await context.request.json(); }
 catch { return json({ok:false,error:'Ongeldige aanvraag.'},400); }
 const validated=validate(body);
 if(!validated.ok) return json({ok:false,error:validated.error,fields:validated.fields},400);
 const payload=validated.data;
 if(payload.website?.trim()) return nativeForm ? new Response(null,{status:303,headers:{Location:'/bedankt/'}}) : json({ok:true,message:SUCCESS,redirect:'/bedankt/'});
 const apiKey=context.env.RESEND_API_KEY?.trim();
 if(!apiKey) return json({ok:false,error:'E-mailverzending is nog niet geconfigureerd. Probeer later opnieuw of gebruik WhatsApp.'},503);
 const from=resolveFrom(context.env.FROM_EMAIL);
 if (nativeForm && payload.partnerId === 'startransfer') {
 const native = body as Record<string, unknown>;
 const details = ['trip','occasion','destination','departureTime','pickup','vehicle','returnDate','returnTime','festivalPickup','dropoff','notes'].filter(field=>native[field]).map(field=>`${field}: ${String(native[field]).slice(0,1000)}`).join('\n');
 payload.message = [payload.message, details].filter(Boolean).join('\n');
 }
 const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify(payload)));
 const key=Array.from(new Uint8Array(digest),value=>value.toString(16).padStart(2,'0')).join('');
 const rows=fieldRows(payload);
 const summaryText=rows.map(([k,v])=>`${k}: ${v}`).join('\n');
 const summaryHtml=rows.map(([k,v])=>`<tr><td>${escapeHtml(k)}</td><td>${escapeHtml(v).replace(/\n/g,'<br>')}</td></tr>`).join('');
 const html=`<div lang="nl" style="font-family:Arial,sans-serif;line-height:1.6"><p>Nieuwe offerteaanvraag via Partybus Nederland</p><table>${summaryHtml}</table></div>`;
 const ownerReceived=await sendResend(apiKey,from,`quote-${key}-owner`,{to:INBOX,subject:'Nieuwe offerteaanvraag – Partybus Nederland',html,text:summaryText,replyTo:payload.email});
 if(!ownerReceived) return json({ok:false,error:ERROR_GENERIC},502);
 const partnerEmail=resolveQuotePartnerLeadEmail(payload.partnerId);
 let partnerForwarded=!partnerEmail || partnerEmail.toLowerCase()===INBOX.toLowerCase();
 if(partnerEmail && partnerEmail.toLowerCase()!==INBOX.toLowerCase()) {
  partnerForwarded=await sendResend(apiKey,from,`quote-${key}-partner`,{to:partnerEmail,subject:`Nieuwe aanvraag – ${payload.partnerCity||payload.city}`,html,text:summaryText,replyTo:payload.email});
  if(!partnerForwarded) {
   console.error('quote_partner_forwarding_failed',{partnerId:payload.partnerId,requestKey:key});
   await sendResend(apiKey,from,`quote-${key}-forwarding-notice`,{to:INBOX,subject:`Actie nodig: partneraanvraag handmatig doorsturen – ${payload.partnerId}`,html,text:`Rechtstreekse partnerdoorsturing is niet bevestigd. Stuur de ontvangen aanvraag handmatig door.\n\n${summaryText}`,replyTo:payload.email});
  }
 }
 const customerConfirmed=await sendResend(apiKey,from,`quote-${key}-customer`,{to:payload.email,subject:'Bedankt voor je aanvraag bij Partybus Nederland',html:`<div lang="nl" style="font-family:Arial,sans-serif;line-height:1.6"><p>Hoi ${escapeHtml(payload.name)},</p><p>Partybus Nederland heeft je aanvraag ontvangen. Je rit is nog niet geboekt; beschikbaarheid en prijs worden afzonderlijk bevestigd.</p><table>${summaryHtml}</table></div>`,text:`Hoi ${payload.name},\n\nPartybus Nederland heeft je aanvraag ontvangen. Je rit is nog niet geboekt.\n\n${summaryText}`,replyTo:INBOX});
 if(!customerConfirmed) console.error('quote_customer_confirmation_failed',{requestKey:key});
 // Receipt by owner is authoritative. Secondary failures must not invite duplicate submissions.
 const message=customerConfirmed?SUCCESS:'Je aanvraag is ontvangen. De bevestigingsmail kon niet worden bevestigd; je hoeft de aanvraag niet opnieuw te versturen.';
 if(nativeForm) return new Response(null,{status:303,headers:{Location:'/bedankt/'}});
 return json({ok:true,message,redirect:'/bedankt/',partnerForwarded,customerConfirmed});
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
