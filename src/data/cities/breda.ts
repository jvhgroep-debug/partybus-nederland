import { whatsapp } from '../settings/whatsapp';
import type { CityPageData } from './types';
import { buildPilotCityPageData } from './pilotFactory';

const generated = buildPilotCityPageData('breda');
if (!generated) {
	throw new Error('Missing Breda inventory data');
}

export const bredaCity: CityPageData = {
	...generated,
	cta: {
		...generated.cta,
		whatsappHref: whatsapp.href,
	},
};
