# Partybus Nederland

Astro-website voor Partybus Nederland, klaar voor **Cloudflare Pages** met offerteformulier via **Resend**.

## Lokaal

```sh
npm install
npm run build
npm run preview
```

## Offerteformulier

- Homepage: `/#offerte`
- Contact: `/contact/#offerte`
- API: `POST /api/offerte`

Zie [docs/EMAIL-SETUP.md](docs/EMAIL-SETUP.md) voor Resend + Cloudflare environment variables:

- `RESEND_API_KEY`
- `FROM_EMAIL`

Aanvragen gaan naar `jvhgroep@gmail.com` met klantbevestiging.

## Deploy (Cloudflare Pages)

- Repository: `jvhgroep-debug/partybus-nederland`
- Build command: `npm run build`
- Node: `22.12.0` (`.node-version`)
- Adapter: `@astrojs/cloudflare`
