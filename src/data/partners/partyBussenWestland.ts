import { UTRECHT_MUNICIPALITY_SLUGS } from '../provinces/utrecht';
import {
	coversMunicipalitySlug,
	extraMunicipalitySlugs,
	type PartnerTerritory,
} from './coverage';
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

const whatsappPhone = '31610628733';
const websiteUrl = 'https://partybussenwestland.nl/';
const email = 'info@partybussenwestland.nl';
const displayPhone = '0174 352241';
const mediaBasePath = '/images/partners/party-bussen-westland';

export const partyBussenWestlandLogo = `${mediaBasePath}/party-bussen-westland-logo.png`;

/**
 * Utrecht = full province. Amsterdam is the only extra municipality.
 * Haarlem, Alkmaar and other Noord-Holland cities are not included.
 */
export const partyBussenWestlandTerritory = {
	provinceSlugs: ['utrecht'],
	extraMunicipalities: [{ slug: 'amsterdam', provinceSlug: 'noord-holland' }],
} as const satisfies PartnerTerritory;

const westlandMunicipalitySlugs = [
	...UTRECHT_MUNICIPALITY_SLUGS,
	...extraMunicipalitySlugs(partyBussenWestlandTerritory),
] as const;

const westlandWebp = (file: string, alt: string) =>
	({
		src: `${mediaBasePath}/${file}`,
		width: 320,
		height: 213,
		alt,
	}) as const;

/** Official set: the existing 18 local WebPs from utrecht partybus.zip. No extra copies. */
export const partyBussenWestlandOfficialWebps = [
	westlandWebp('party-bussen-westland-hero.webp', 'Partybus van Party Bussen Westland'),
	westlandWebp('party-bussen-westland-touringcar.webp', 'Touringcar van Party Bussen Westland'),
	westlandWebp(
		'party-bussen-westland-touringcar-achter.webp',
		'Achterzijde van een touringcar van Party Bussen Westland',
	),
	westlandWebp('party-bussen-westland-minibus.webp', 'Minibus van Party Bussen Westland'),
	westlandWebp(
		'party-bussen-westland-minibus-achter.webp',
		'Achterzijde van een minibus van Party Bussen Westland',
	),
	westlandWebp('party-bussen-westland-lounge.webp', 'Lounge-interieur van Party Bussen Westland'),
	westlandWebp(
		'party-bussen-westland-lounge-fauteuils.webp',
		'Loungefauteuils in een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-koelkast.webp',
		'Koelkast in een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-lederen-stoelen.webp',
		'Leren stoelen in een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-interieur-gangpad.webp',
		'Interieur van een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-interieur-nacht.webp',
		'Partybusinterieur met sfeerverlichting van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-blauwe-stoelen.webp',
		'Blauwe zitplaatsen in een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-paarse-stoelen.webp',
		'Paarse zitplaatsen in een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-lounge-paars.webp',
		'Paarse lounge in een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-zitplaatsen.webp',
		'Zitplaatsen in een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-duo-stoel.webp',
		'Duo-stoel in een partybus van Party Bussen Westland',
	),
	westlandWebp(
		'party-bussen-westland-rij-stoelen.webp',
		'Rij stoelen in een partybus van Party Bussen Westland',
	),
	westlandWebp('party-bussen-westland-tafel.webp', 'Tafel in een partybus van Party Bussen Westland'),
] as const;

export const partyBussenWestlandCityMedia = {
	desktopHeroes: [
		partyBussenWestlandOfficialWebps[0],
		partyBussenWestlandOfficialWebps[1],
		partyBussenWestlandOfficialWebps[3],
	],
	mobileHeroes: [
		partyBussenWestlandOfficialWebps[0],
		partyBussenWestlandOfficialWebps[5],
	],
	gallery: partyBussenWestlandOfficialWebps,
	gallerySize: 6,
} as const satisfies PartnerCityMediaConfig;

/**
 * Prepared config for Party Bussen Westland.
 * Utrecht municipalities use the partner city template; Amsterdam is not wired yet.
 */
export const partyBussenWestland = {
	id: 'party-bussen-westland',
	territory: partyBussenWestlandTerritory,
	provinceSlug: 'utrecht',
	/** Province page exists at /provincies/utrecht/. */
	provincePageExists: true,
	provincePath: '/provincies/utrecht/',
	coverage: 'Heel Utrecht, plus Amsterdam',
	publicProfile: {
		name: 'Party Bussen Westland',
		website: {
			href: websiteUrl,
			label: 'Bekijk Party Bussen Westland',
		},
		email,
		phone: {
			display: displayPhone,
			href: 'tel:+31174352241',
		},
		address: {
			street: 'Ambachtstraat 6B',
			postalCode: '2671 CN',
			city: 'Naaldwijk',
		},
		whatsapp: {
			phone: whatsappPhone,
			href: `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
				'Hallo Party Bussen Westland,\n\nIk kom via PartybusNederland.nl en wil graag informatie over partybus huren.',
			)}`,
			label: 'WhatsApp Party Bussen Westland',
			ariaLabel: 'WhatsApp Party Bussen Westland',
		},
		intro:
			'Party Bussen Westland is de partner van PartybusNederland.nl voor de provincie Utrecht. Het bedrijf is gevestigd in Naaldwijk en is rechtstreeks bereikbaar via WhatsApp voor informatie of beschikbaarheid.',
		media: {
			logo: partyBussenWestlandLogo,
			hero: partyBussenWestlandOfficialWebps[0].src,
			gallery: partyBussenWestlandOfficialWebps.map((image) => image.src),
			mobile: partyBussenWestlandOfficialWebps[0].src,
		} as PartnerMedia,
	},
	internalRouting: {
		leadEmail: email,
	},
} as const;

export type PartyBussenWestlandPublicProfile = (typeof partyBussenWestland)['publicProfile'];

export function isPartyBussenWestlandMunicipalitySlug(slug: string): boolean {
	return westlandMunicipalitySlugs.includes(slug as (typeof westlandMunicipalitySlugs)[number]);
}

export function coversPartyBussenWestlandMunicipality(
	municipalitySlug: string,
	municipalityProvinceSlug: string,
): boolean {
	return coversMunicipalitySlug(
		partyBussenWestlandTerritory,
		municipalitySlug,
		municipalityProvinceSlug,
	);
}

export function buildPartyBussenWestlandWhatsappHref(cityName: string): string {
	const message =
		`Hallo, ik kom via PartybusNederland.nl en wil graag informatie over een partybus vanuit ${cityName}.`;

	return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export function resolvePartyBussenWestlandCityMedia(citySlug: string) {
	const cityIndex = westlandMunicipalitySlugs.indexOf(
		citySlug as (typeof westlandMunicipalitySlugs)[number],
	);

	return resolvePartnerCityMedia(partyBussenWestlandCityMedia, citySlug, cityIndex);
}

export function buildPartyBussenWestlandLocalIntro(cityName: string): string {
	return `Partybus huren in ${cityName}? Party Bussen Westland is onze partner voor ${cityName}. Neem rechtstreeks contact op via WhatsApp voor informatie of beschikbaarheid.`;
}

export const partyBussenWestlandWebsiteHref = websiteUrl;
export const partyBussenWestlandWhatsappLabel = 'Direct contact via WhatsApp';
export const partyBussenWestlandWebsiteLabel = 'Bekijk de partybussen';
