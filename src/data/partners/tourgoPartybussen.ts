import { ZUID_HOLLAND_MUNICIPALITY_SLUGS } from '../provinces/zuidHolland';
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

const whatsappPhone = '31623044970';
const websiteUrl = 'https://www.tourgo.nl/';
const email = 'info@tourgo.nl';
const displayPhone = '06 23 04 49 70';
const mediaBasePath = '/images/partners/tourgo-partybussen';

export const tourgoPartybussenLogo = `${mediaBasePath}/tourgo-partybussen-logo.png`;

export const tourgoPartybussenCityMedia = {
	desktopHeroes: [
		{
			src: `${mediaBasePath}/tourgo-partybussen-hero.webp`,
			width: 1920,
			height: 1280,
			alt: 'Tourgo Partybussen partybus op straat',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-xl.webp`,
			width: 1600,
			height: 1067,
			alt: 'Tourgo XXL partybus',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-exclusive.webp`,
			width: 1400,
			height: 933,
			alt: 'Tourgo Exclusive partybus',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-karaoke.webp`,
			width: 1600,
			height: 1067,
			alt: 'Tourgo partybus met karaoke en feestverlichting',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-street.webp`,
			width: 1600,
			height: 1200,
			alt: 'Tourgo partybus tijdens een rit',
		},
	],
	mobileHeroes: [
		{
			src: `${mediaBasePath}/tourgo-partybussen-mobile.webp`,
			width: 900,
			height: 1200,
			alt: 'Tourgo partybus op mobiel',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-interior-xl.webp`,
			width: 1400,
			height: 1050,
			alt: 'Interieur van een Tourgo partybus',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-exclusive-detail.webp`,
			width: 1400,
			height: 933,
			alt: 'Tourgo partybus met feestverlichting',
		},
	],
	gallery: [
		{
			src: `${mediaBasePath}/tourgo-partybussen-hero.webp`,
			width: 1920,
			height: 1280,
			alt: 'Tourgo Partybussen partybus',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-xl.webp`,
			width: 1600,
			height: 1067,
			alt: 'Tourgo XXL partybus van buiten',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-interior-xl.webp`,
			width: 1400,
			height: 1050,
			alt: 'Feestelijk interieur in een Tourgo partybus',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-exclusive.webp`,
			width: 1400,
			height: 933,
			alt: 'Tourgo Exclusive partybus',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-exclusive-detail.webp`,
			width: 1400,
			height: 933,
			alt: 'Tourgo partybus met sfeerverlichting',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-karaoke.webp`,
			width: 1600,
			height: 1067,
			alt: 'Tourgo partybus met karaoke',
		},
		{
			src: `${mediaBasePath}/tourgo-partybussen-street.webp`,
			width: 1600,
			height: 1200,
			alt: 'Tourgo partybus onderweg',
		},
	],
	gallerySize: 3,
} as const satisfies PartnerCityMediaConfig;

/**
 * Single source of truth for the Zuid-Holland regional partner (Tourgo).
 */
export const tourgoPartybussen = {
	id: 'tourgo',
	provinceSlug: 'zuid-holland',
	provincePath: '/provincies/zuid-holland/',
	coverage: 'Heel Zuid-Holland',
	publicProfile: {
		name: 'Tourgo Partybussen',
		website: {
			href: websiteUrl,
			label: 'Bekijk Tourgo Partybussen',
		},
		email,
		phone: {
			display: displayPhone,
			href: `tel:+31623044970`,
		},
		whatsapp: {
			phone: whatsappPhone,
			href: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
				'Hallo Tourgo Partybussen,\n\nIk kom via PartybusNederland.nl en wil graag informatie over partybus huren in Zuid-Holland.',
			)}`,
			label: 'WhatsApp Tourgo',
			ariaLabel: 'WhatsApp Tourgo Partybussen',
		},
		intro:
			'Tourgo Partybussen is een gezinsbedrijf voor feestvervoer in Zuid-Holland. Van festivals en vrijgezellenfeesten tot bedrijfsuitjes: de bussen zijn ingericht voor groepen die het feest al onderweg willen beginnen.',
		media: {
			logo: tourgoPartybussenLogo,
			hero: `${mediaBasePath}/tourgo-partybussen-hero.webp`,
			gallery: tourgoPartybussenCityMedia.gallery.map((image) => image.src),
			mobile: `${mediaBasePath}/tourgo-partybussen-mobile.webp`,
		} as PartnerMedia,
	},
	internalRouting: {
		leadEmail: email,
	},
} as const;

export type TourgoPartybussenPublicProfile = (typeof tourgoPartybussen)['publicProfile'];

export function buildTourgoWhatsappHref(cityName: string): string {
	const message =
		`Hallo, ik kom via PartybusNederland.nl en wil graag informatie over een partybus vanuit ${cityName} (Zuid-Holland).`;

	return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function buildTourgoQuoteHref(cityName: string, sourcePath: string): string {
	const params = new URLSearchParams({
		partner: tourgoPartybussen.id,
		city: cityName,
		source: sourcePath,
	});

	return `/gratis-partybus-offertes-aanvragen/?${params.toString()}`;
}

export function resolveTourgoCityMedia(citySlug: string) {
	const cityIndex = ZUID_HOLLAND_MUNICIPALITY_SLUGS.indexOf(
		citySlug as (typeof ZUID_HOLLAND_MUNICIPALITY_SLUGS)[number],
	);

	return resolvePartnerCityMedia(tourgoPartybussenCityMedia, citySlug, cityIndex);
}

export function buildTourgoLocalIntro(cityName: string, citySlug: string): string {
	const partnerName = tourgoPartybussen.publicProfile.name;
	const variants = [
		`Voor partybus aanvragen vanuit ${cityName} in Zuid-Holland kunt u rechtstreeks contact opnemen met ${partnerName}.`,
		`Vertrekt uw groep in ${cityName}? ${partnerName} helpt met feestvervoer en beschikbaarheid in de regio.`,
		`Een partybus nodig vanuit ${cityName}? Neem contact op met ${partnerName} voor advies en planning in Zuid-Holland.`,
		`${partnerName} behandelt aanvragen voor groepsvervoer met vertrek vanuit ${cityName} en omgeving.`,
	] as const;
	const variantIndex = [...citySlug].reduce((total, character) => total + character.charCodeAt(0), 0)
		% variants.length;

	return variants[variantIndex];
}
