import { whatsapp } from '../settings/whatsapp';
import type { CityPageData } from './types';
import { buildPilotCityPageData } from './pilotFactory';

const generated = buildPilotCityPageData('rotterdam');
if (!generated) {
	throw new Error('Missing Rotterdam inventory data');
}

export const rotterdamCity: CityPageData = {
	...generated,
	cta: {
		...generated.cta,
		whatsappHref: whatsapp.href,
	},
};
