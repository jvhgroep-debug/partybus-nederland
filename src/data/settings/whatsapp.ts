import {buildPartnerWhatsappHref} from '../../lib/partnerWhatsappMessage';
export const whatsapp = {
	phoneDisplay: '+31 6 84002350',
	phone: '31684002350',
	href: buildPartnerWhatsappHref('31684002350','Partybus Nederland','Nederland'),
	label: 'Chat via WhatsApp',
} as const;
