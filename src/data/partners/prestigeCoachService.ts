import { NOORD_BRABANT_MUNICIPALITY_SLUGS } from '../provinces/noordBrabant';
import {
	resolvePartnerCityMedia,
	type PartnerCityMediaConfig,
} from './partnerMediaDistribution';

export type PartnerMedia = {
	logo: string | null;
	hero: string | null;
	gallery: readonly string[];
	mobile: string | null;
};

const whatsappPhone = '31629041798';
const whatsappMessage =
	'Hallo Prestige Coach Service,\n\nIk wil graag informatie over partybus huren in Noord-Brabant.';
const mediaBasePath = '/images/partners/prestige-coach-service';
export const prestigeCoachServiceLogo = `${mediaBasePath}/prestige-coach-service-logo.svg`;

export const prestigeCoachServiceCityMedia = {
	desktopHeroes: [
		{
			src: `${mediaBasePath}/prestige-coach-service-hero.webp`,
			width: 1920,
			height: 1280,
			alt: 'Prestige Coach Service partybus',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-vuurshow.webp`,
			width: 1200,
			height: 800,
			alt: 'Prestige Coach Service partybus tijdens een avondrit',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-feest.webp`,
			width: 1200,
			height: 800,
			alt: 'Feestelijke sfeer in een partybus van Prestige Coach Service',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-groepsfoto.webp`,
			width: 1200,
			height: 904,
			alt: 'Groep bij een partybus van Prestige Coach Service',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-lounge.webp`,
			width: 1600,
			height: 1067,
			alt: 'Luxe lounge-interieur van Prestige Coach Service',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-interieur.webp`,
			width: 1600,
			height: 1067,
			alt: 'Interieur voor groepsvervoer van Prestige Coach Service',
		},
	],
	mobileHeroes: [
		{
			src: `${mediaBasePath}/prestige-coach-service-mobile.webp`,
			width: 900,
			height: 1350,
			alt: 'Prestige Coach Service partybus op mobiel',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-led-interieur.webp`,
			width: 1200,
			height: 900,
			alt: 'Partybusinterieur met ledverlichting',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-groepsfoto.webp`,
			width: 1200,
			height: 904,
			alt: 'Groep bij een Prestige Coach Service partybus',
		},
	],
	gallery: [
		{
			src: `${mediaBasePath}/prestige-coach-service-hero.webp`,
			width: 1920,
			height: 1280,
			alt: 'Prestige Coach Service partybus',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-audio.webp`,
			width: 1200,
			height: 800,
			alt: 'Audio-installatie in de partybus',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-interieur.webp`,
			width: 1600,
			height: 1067,
			alt: 'Luxe interieur voor groepsvervoer',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-lounge.webp`,
			width: 1600,
			height: 1067,
			alt: 'Lounge-interieur van Prestige Coach Service',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-led-interieur.webp`,
			width: 1200,
			height: 900,
			alt: 'Partybusinterieur met feestverlichting',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-vuurshow.webp`,
			width: 1200,
			height: 800,
			alt: 'Prestige Coach Service partybus tijdens een show',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-feest.webp`,
			width: 1200,
			height: 800,
			alt: 'Feestelijke sfeer in de partybus',
		},
		{
			src: `${mediaBasePath}/prestige-coach-service-groepsfoto.webp`,
			width: 1200,
			height: 904,
			alt: 'Groep reizigers bij de partybus',
		},
	],
	gallerySize: 3,
} as const satisfies PartnerCityMediaConfig;

/**
 * Single source of truth for the Noord-Brabant regional partner.
 * Internal routing data must never be passed to public-facing components.
 */
export const prestigeCoachService = {
	id: 'prestige-coach-service',
	provinceSlug: 'noord-brabant',
	provincePath: '/provincies/noord-brabant/',
	coverage: 'Heel Noord-Brabant',
	publicProfile: {
		name: 'Prestige Coach Service',
		address: {
			street: 'Oordeelsestraat 7c',
			postalCode: '5111 PA',
			city: 'Baarle-Nassau',
		},
		kvk: '91531918',
		vatId: 'NL004898384B50',
		whatsapp: {
			phone: whatsappPhone,
			href: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`,
			label: 'Direct contact via WhatsApp',
			ariaLabel: 'WhatsApp Prestige Coach Service',
		},
		media: {
			logo: null,
			hero: `${mediaBasePath}/prestige-coach-service-hero.webp`,
			gallery: [
				`${mediaBasePath}/prestige-coach-service-hero.webp`,
				`${mediaBasePath}/prestige-coach-service-audio.webp`,
				`${mediaBasePath}/prestige-coach-service-interieur.webp`,
				`${mediaBasePath}/prestige-coach-service-lounge.webp`,
				`${mediaBasePath}/prestige-coach-service-led-interieur.webp`,
				`${mediaBasePath}/prestige-coach-service-vuurshow.webp`,
				`${mediaBasePath}/prestige-coach-service-feest.webp`,
				`${mediaBasePath}/prestige-coach-service-groepsfoto.webp`,
			],
			mobile: `${mediaBasePath}/prestige-coach-service-mobile.webp`,
		} as PartnerMedia,
	},
	internalRouting: {
		leadEmail: 'info@prestigecoachservice.nl',
	},
	footerAttribution: {
		prefix: 'Mede mogelijk gemaakt door',
		label: 'StarLocal.nl',
		href: 'https://www.starlocal.nl/',
	},
} as const;

export type PrestigeCoachServicePublicProfile =
	(typeof prestigeCoachService)['publicProfile'];

export function buildPrestigeCoachServiceWhatsappHref(cityName: string): string {
	const message =
		`Hallo, ik kom via PartybusNederland.nl en wil graag informatie over een partybus vanuit ${cityName}.`;

	return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function buildPrestigeCoachServiceQuoteHref(
	cityName: string,
	sourcePath: string,
): string {
	const params = new URLSearchParams({
		partner: prestigeCoachService.id,
		city: cityName,
		source: sourcePath,
	});

	return `/gratis-partybus-offertes-aanvragen/?${params.toString()}`;
}

export function resolvePrestigeCoachServiceCityMedia(citySlug: string) {
	const cityIndex = NOORD_BRABANT_MUNICIPALITY_SLUGS.indexOf(
		citySlug as (typeof NOORD_BRABANT_MUNICIPALITY_SLUGS)[number],
	);

	return resolvePartnerCityMedia(prestigeCoachServiceCityMedia, citySlug, cityIndex);
}

export function buildPrestigeCoachServiceLocalIntro(
	cityName: string,
	citySlug: string,
): string {
	const partnerName = prestigeCoachService.publicProfile.name;
	const variants = [
		`Voor aanvragen vanuit ${cityName} binnen Noord-Brabant kunt u rechtstreeks contact opnemen met ${partnerName}.`,
		`Vertrekt uw groep vanuit ${cityName}? ${partnerName} is rechtstreeks bereikbaar voor aanvragen in heel Noord-Brabant.`,
		`Een partybus nodig vanuit ${cityName}? Neem rechtstreeks contact op met ${partnerName} voor beschikbaarheid in Noord-Brabant.`,
		`${partnerName} behandelt aanvragen voor groepsvervoer met vertrek vanuit ${cityName} en de rest van Noord-Brabant.`,
	] as const;
	const variantIndex = [...citySlug].reduce((total, character) => total + character.charCodeAt(0), 0)
		% variants.length;

	return variants[variantIndex];
}
