export type QuoteRequestPayload = {
	name: string;
	email: string;
	phone: string;
	city: string;
	date?: string;
	guests?: string | number;
	message?: string;
	sourcePage?: string;
	website?: string; // honeypot
};

export type EmailMessage = {
	to: string;
	subject: string;
	html: string;
	text: string;
	replyTo?: string;
};

export type EmailRuntimeEnv = {
	RESEND_API_KEY?: string;
	FROM_EMAIL?: string;
};
