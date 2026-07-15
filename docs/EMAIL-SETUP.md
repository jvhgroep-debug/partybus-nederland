# Offerteformulier & e-mail (Resend + Cloudflare Pages)

## Environment variables (verplicht)

Zet deze in **Cloudflare Pages → Settings → Environment variables** (Production én Preview):

| Variable | Voorbeeld |
|----------|-----------|
| `RESEND_API_KEY` | `re_...` |
| `FROM_EMAIL` | `Partybus Nederland <noreply@partybusnederland.nl>` |

`FROM_EMAIL` moet een **geverifieerd** afzender-/domeinadres in Resend zijn.

Ontvangstadres (vast in code): `jvhgroep@gmail.com`

## Lokaal testen

1. Kopieer `.env.example` naar `.env` en vul de keys in.
2. `npm run build && npm run preview`
3. Open `http://127.0.0.1:4321/#offerte` of `/contact/`
4. Verstuur een testaanvraag — check inbox + klantmail.

## Cloudflare Pages deploy

- **Build command:** `npm run build`
- **Deploy command / output:** Astro Cloudflare adapter (Workers/Pages)
- Node: `22.12.0` (zie `.node-version`)

Na push naar `main` deployt Cloudflare opnieuw. Zonder de env-vars geeft het API-endpoint HTTP 503.
