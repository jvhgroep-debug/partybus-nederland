// @ts-check
import { defineConfig } from 'astro/config';

// Static site for Cloudflare Pages. The quote API lives in /functions (Pages Functions).
// https://astro.build/config
export default defineConfig({
	site: 'https://www.partybusnederland.nl',
	output: 'static',
});
