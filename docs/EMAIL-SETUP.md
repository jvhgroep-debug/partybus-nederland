# Offerteformulier & e-mail (Resend + Cloudflare Pages)

## Environment variables

| Variable | Verplicht | Opmerking |
|----------|-----------|-----------|
| `RESEND_API_KEY` | ja | Bestaande key in Cloudflare Pages |
| `FROM_EMAIL` | aanbevolen | Bijv. `Partybus Nederland <info@starlocal.nl>` wanneer `starlocal.nl` in Resend is geverifieerd. Zonder dit: `onboarding@resend.dev` |

**Geen DNS / geen mail.partybusnederland.nl** tijdens preview.

Ontvangstadres (vast): `info@starlocal.nl`

## Wat er bij verzenden gebeurt

1. Interne mail naar `info@starlocal.nl`
2. Bevestiging naar het e-mailadres van de klant
3. Redirect naar `/bedankt/`

Resend-testdomein (`onboarding@resend.dev`) mag vaak alleen naar het Resend-accountadres mailen.
Voor betrouwbare levering naar `info@starlocal.nl` en klanten: verifieer `starlocal.nl` in Resend en zet `FROM_EMAIL`.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Formulieren: homepage CTA, `/gratis-partybus-offertes-aanvragen/`, `/contact/`, dienstenpagina’s
- API: `POST /api/offerte`
