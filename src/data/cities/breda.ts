import { whatsapp } from '../settings/whatsapp';
import type { CityPageData } from './types';
import { buildPilotCityPageData } from './pilotFactory';
import { getPublishedCity } from './registry';

const generated = buildPilotCityPageData('breda');
if (!generated) {
	throw new Error('Missing Breda inventory data');
}

const bredaOccasionOverrides: Record<
	string,
	{ image?: string; infoHref?: string | null }
> = {
	Vrijgezellenfeest: {
		image: '/images/partners/prestige-coach-service/prestige-coach-service-feest.webp',
		infoHref: null,
	},
	Bruiloft: {
		image: '/images/partners/prestige-coach-service/prestige-coach-service-lounge.webp',
		infoHref: null,
	},
	Bedrijfsuitje: {
		image: '/images/partners/prestige-coach-service/prestige-coach-service-hero.webp',
		infoHref: null,
	},
	Verjaardag: {
		image: '/images/partners/prestige-coach-service/prestige-coach-service-led-interieur.webp',
		infoHref: null,
	},
	Schoolfeest: {
		image: '/images/partners/prestige-coach-service/prestige-coach-service-groepsfoto.webp',
		infoHref: null,
	},
	Gala: {
		image: '/images/partners/prestige-coach-service/prestige-coach-service-interieur.webp',
		infoHref: null,
	},
	Carnaval: {
		infoHref: null,
	},
};

const bredaBrabantDestinations = [
	{
		slug: 'oosterhout',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-hero.webp',
		text: 'Samen vanuit Breda naar een feest, evenement of avond uit in Oosterhout.',
	},
	{
		slug: 'etten-leur',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-vuurshow.webp',
		text: 'Partybusvervoer tussen Breda en Etten-Leur voor groepen en gelegenheden.',
	},
	{
		slug: 'tilburg',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-interieur.webp',
		text: 'Met de hele groep vanuit Breda naar Tilburg en samen weer terug.',
	},
	{
		slug: 'roosendaal',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-feest.webp',
		text: 'Een feestelijke groepsrit vanuit Breda naar Roosendaal plannen.',
	},
	{
		slug: 'bergen-op-zoom',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-lounge.webp',
		text: 'Comfortabel partybusvervoer vanuit Breda richting Bergen op Zoom.',
	},
	{
		slug: 'baarle-nassau',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-mobile.webp',
		text: 'Rechtstreeks vanuit Breda naar de thuisbasis van Prestige Coach Service.',
	},
	{
		slug: 'dongen',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-groepsfoto.webp',
		text: 'Groepsvervoer vanuit Breda naar een feest of evenement in Dongen.',
	},
	{
		slug: 'drimmelen',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-led-interieur.webp',
		text: 'Met sfeervol vervoer vanuit Breda naar Drimmelen en omgeving.',
	},
	{
		slug: 'gilze-en-rijen',
		image: '/images/partners/prestige-coach-service/prestige-coach-service-audio.webp',
		text: 'Partybusvervoer vanuit Breda naar Gilze en Rijen voor jullie groep.',
	},
] as const;

const bredaBrabantDestinationCards = bredaBrabantDestinations.map(({ slug, image, text }) => {
	const municipality = getPublishedCity(slug);
	if (!municipality) {
		throw new Error(`Missing published Noord-Brabant municipality: ${slug}`);
	}

	return {
		name: municipality.name,
		text,
		image,
		href: municipality.path,
	};
});

export const bredaCity: CityPageData = {
	...generated,
	occasions: {
		...generated.occasions,
		items: generated.occasions.items.map((item) => ({
			...item,
			...bredaOccasionOverrides[item.title],
		})),
	},
	locations: {
		title: 'Partybus vanuit Breda door heel Noord-Brabant',
		lead: 'Vanuit Breda met de partybus naar een feest, evenement of andere bestemming in Noord-Brabant? Bekijk populaire plaatsen in de provincie.',
		items: bredaBrabantDestinationCards,
	},
	cta: {
		...generated.cta,
		whatsappHref: whatsapp.href,
	},
};
