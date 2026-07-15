export type QuoteRequestPayload = {
	name: string;
	email: string;
	phone?: string;
	city?: string;
	date?: string;
	guests?: string | number;
	message?: string;
	sourcePage?: string;
};

export type EmailMessage = {
	to: string;
	subject: string;
	html: string;
	text: string;
	replyTo?: string;
};
