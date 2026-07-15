/**
 * Centrale e-mailinstellingen voor Partybus Nederland.
 * Pas hier ontvangers, onderwerpen en afzender aan.
 *
 * Verzending via Resend gebeurt pas als RESEND_API_KEY
 * (en optioneel EMAIL_FROM) in de omgeving staat.
 */
export const emailSettings = {
	/** Vast ontvangstadres voor alle offerteaanvragen */
	inbox: 'jvhgroep@gmail.com',

	/**
	 * Afzender in Resend (moet een geverifieerd domein/afzender zijn).
	 * Override met env EMAIL_FROM wanneer beschikbaar.
	 */
	fromDefault: 'Partybus Nederland <noreply@partybusnederland.nl>',

	subjects: {
		/** Bevestiging naar de klant */
		customer: 'Bedankt voor je aanvraag bij Partybus Nederland',
		/** Intern bericht naar het inbox-adres */
		owner: 'Nieuwe offerteaanvraag - Partybus Nederland',
	},

	/** Reply-To op de klantmail (klant antwoorden bereiken de inbox) */
	replyToInbox: true as boolean,
} as const;

export type EmailSettings = typeof emailSettings;
