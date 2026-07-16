import { whatsapp } from '../settings/whatsapp';
import type { CityPageData } from './types';
import { buildPilotCityPageData } from './pilotFactory';

/**
 * Amsterdam = Master City Template content.
 * Uses shared departure-city content; URL/canonical stay inventory-based.
 */
const generated = buildPilotCityPageData('amsterdam');
if (!generated) {
	throw new Error('Missing Amsterdam inventory data');
}

export const amsterdamCity: CityPageData = {
	...generated,
	hero: {
		...generated.hero,
		whatsappHref: 'https://wa.me/31684002350',
		image: '/images/hero-partybus.png',
	},
	cta: {
		...generated.cta,
		whatsappHref: whatsapp.href,
	},
};
