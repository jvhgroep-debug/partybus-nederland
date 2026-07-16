export type NavLink = {
	href: string;
	label: string;
};

export const mainNav: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/gids/partybus-huren/', label: 'Gids' },
	{ href: '/#steden', label: 'Steden' },
	{ href: '/#diensten', label: 'Diensten' },
	{ href: '/#werkwijze', label: 'Hoe werkt het' },
	{ href: '/#faq', label: 'FAQ' },
	{ href: '/contact', label: 'Contact' },
];

export const primaryCta: NavLink = {
	href: '/gratis-partybus-offertes-aanvragen/',
	label: 'Gratis offertes',
};