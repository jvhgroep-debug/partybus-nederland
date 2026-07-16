/**
 * Centrale beeldstijl voor unieke stadsafbeeldingen (partybus + landmark).
 * Geen generatie hier — alleen prompts, bestandsnamen en status.
 */

export const CITY_IMAGE_STYLE = {
	format: 'webp' as const,
	aspectRatio: '16:9',
	directory: '/images/cities/',
	filenamePattern: 'partybus-{slug}.webp',
	palette: {
		base: 'zwart-goud premium',
		accent: 'subtiele paarse LED-verlichting op de bus',
		atmosphere: 'avond of nacht, nat wegdek met subtiele reflecties, warme stadsverlichting',
	},
	rules: [
		'herkenbare locatie van de stad',
		'luxe zwarte partybus op de voorgrond',
		'realistische Nederlandse architectuur',
		'geen tekst',
		'geen logo’s',
		'geen mensen prominent in beeld',
		'cinematic commercial photography',
	],
} as const;

/** Vaste masterprompt — vul LANDMARK en STAD in. */
export const CITY_IMAGE_MASTER_PROMPT =
	'Een zeer realistische, luxe zwarte partybus op de voorgrond bij {LANDMARK} in {CITY}, Nederland, gefotografeerd in de avond of nacht, nat wegdek met subtiele reflecties, warme stadsverlichting, zwart-gouden premium uitstraling, subtiele paarse ledverlichting op de bus, cinematic commercial photography, realistische Nederlandse architectuur, geen tekst, geen logo’s, geen mensen prominent in beeld, 16:9.';

export type CityImageStatus = 'planned' | 'existing' | 'generated' | 'approved';

export function buildCityImagePrompt(landmark: string, city: string): string {
	return CITY_IMAGE_MASTER_PROMPT.replace('{LANDMARK}', landmark).replace('{CITY}', city);
}

export function buildCityImageFilename(slug: string): string {
	return `partybus-${slug}.webp`;
}

export function buildCityImageAlt(city: string, landmark: string): string {
	return `Luxe partybus in ${city} bij ${landmark} in de avond`;
}
