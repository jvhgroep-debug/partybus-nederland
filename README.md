# Partybus Nederland

Astro-website voor Partybus Nederland, klaar voor **Cloudflare Pages** met offerteformulier via **Resend**.

## Lokaal

```sh
npm install
npm run build
npm run preview
```

Voor het API-endpoint lokaal (Pages Function):

```sh
npx wrangler pages dev dist
```

## Offerteformulier

- Definitieve URL: `/gratis-partybus-offertes-aanvragen/`
- API: `POST /api/offerte` (`functions/api/offerte.ts`)

Zie [docs/EMAIL-SETUP.md](docs/EMAIL-SETUP.md) voor Resend + Cloudflare environment variables:

- `RESEND_API_KEY`
- `FROM_EMAIL`

Aanvragen gaan naar `info@starlocal.nl` met klantbevestiging.

## Deploy (Cloudflare Pages)

- Repository: `jvhgroep-debug/partybus-nederland`
- Build command: `npm run build`
- Build output directory: `dist`
- Node: `22.12.0` (`.node-version`)
