export type NavLink = {
	href: string;
	label: string;
};

export const mainNav: NavLink[] = [
	{ href: '/', label: 'Home' },
	{ href: '/#diensten', label: 'Diensten' },
	{ href: '/gids/partybus-huren/', label: 'Gids' },
	{ href: '/gidsen/', label: 'Kennisbank' },
	{ href: '/#steden', label: 'Steden' },
	{ href: '/hoe-werkt-het/', label: 'Hoe werkt het' },
	{ href: '/over-ons/', label: 'Over ons' },
	{ href: '/contact/', label: 'Contact' },
];

export const primaryCta: NavLink = {
	href: '/gratis-partybus-offertes-aanvragen/',
	label: 'Gratis offertes',
};