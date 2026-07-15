# Offerteformulier & e-mail (Resend + Cloudflare Pages)

## Environment variables

| Variable | Verplicht | Opmerking |
|----------|-----------|-----------|
| `RESEND_API_KEY` | ja | Bestaande key in Cloudflare Pages |
| `FROM_EMAIL` | nee (preview) | Wordt genegeerd als het partybusnederland.nl bevat. Default: `onboarding@resend.dev` |

**Geen DNS / geen mail.partybusnederland.nl** tijdens preview.

Ontvangstadres (vast): `jvhgroep@gmail.com`

## Wat er bij verzenden gebeurt

1. Interne mail naar `jvhgroep@gmail.com`
2. Bevestiging naar het e-mailadres van de klant
3. Redirect naar `/bedankt/`

Resend-testdomein kan alleen naar het Resend-accountadres mailen. Voor een volledige
test van beide mails: vul **jvhgroep@gmail.com** in als klant-e-mail.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Formulier: `/gratis-partybus-offertes-aanvragen/`
