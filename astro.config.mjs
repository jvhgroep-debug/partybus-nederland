// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.partybusnederland.nl',
	adapter: cloudflare({
		imageService: 'compile',
	}),
	session: {
		driver: {
			entrypoint: 'unstorage/drivers/null',
		},
	},
});
