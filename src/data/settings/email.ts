/**
 * Centrale e-mailinstellingen voor Partybus Nederland.
 * Ontvanger, onderwerpen en defaults aanpassen hier.
 *
 * Environment (Cloudflare Pages / .env):
 * - RESEND_API_KEY (verplicht voor verzending)
 * - FROM_EMAIL (verplicht geverifieerde afzender in Resend)
 */
export const emailSettings = {
	/** Vast ontvangstadres voor alle contact- en offerteaanvragen */
	inbox: 'info@starlocal.nl',

	/**
	 * Preview / zonder DNS: Resend testdomein.
	 * Partybus-domein (mail.partybusnederland.nl) pas na DNS-koppeling.
	 */
	fromDefault: 'Partybus Nederland <onboarding@resend.dev>',

	subjects: {
		/** Bevestiging naar de klant */
		customer: 'Bedankt voor je aanvraag bij Partybus Nederland',
		/** Intern bericht naar het inbox-adres */
		owner: 'Nieuwe offerteaanvraag – Partybus Nederland',
	},

	successMessage:
		'Bedankt! Je aanvraag is succesvol verzonden. Wij nemen zo snel mogelijk contact met je op.',

	errorMessage:
		'Er ging iets mis bij het verzenden. Probeer het opnieuw of bereik ons via WhatsApp.',

	/** Reply-To op de klantmail (klantantwoorden naar de inbox) */
	replyToInbox: true as boolean,
} as const;

export type EmailSettings = typeof emailSettings;
