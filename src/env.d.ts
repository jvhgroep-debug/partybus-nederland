/// <reference types="astro/client" />
/// <reference types="@astrojs/cloudflare" />

interface ImportMetaEnv {
	readonly RESEND_API_KEY?: string;
	readonly FROM_EMAIL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module 'cloudflare:workers' {
	export const env: {
		RESEND_API_KEY?: string;
		FROM_EMAIL?: string;
		[key: string]: unknown;
	};
}
