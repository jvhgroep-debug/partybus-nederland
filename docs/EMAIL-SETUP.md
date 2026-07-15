# Offerteformulier & e-mail (Resend + Cloudflare Pages)

## Environment variables (verplicht)

Zet deze in **Cloudflare Pages → Settings → Environment variables** (Production én Preview):

| Variable | Voorbeeld |
|----------|-----------|
| `RESEND_API_KEY` | `re_...` |
| `FROM_EMAIL` | `Partybus Nederland <noreply@partybusnederland.nl>` |

`FROM_EMAIL` moet een **geverifieerd** afzender-/domeinadres in Resend zijn.

Ontvangstadres (vast in code): `jvhgroep@gmail.com`

## Cloudflare Pages instellingen

- **Framework preset:** geen / none (of Astro static)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (repo-root)

De statische pagina’s komen uit Astro. De API staat in `functions/api/offerte.ts` (Pages Function).

Definitieve formulier-URL:

`/gratis-partybus-offertes-aanvragen/`

## Lokaal testen

1. Kopieer `.env.example` naar `.env` (voor documentatie; de Pages Function gebruikt CF env-vars).
2. `npm run build`
3. `npx wrangler pages dev dist`
4. Open `http://127.0.0.1:8788/gratis-partybus-offertes-aanvragen/`

Na push naar `main` deployt Cloudflare opnieuw. Zonder de env-vars geeft `/api/offerte` HTTP 503.
