export type GuideImageAsset = {
	/** Public path, e.g. /images/guides/partybus-groep-instapt.webp */
	src: string;
	/** Descriptive filename without path */
	filename: string;
	alt: string;
	title: string;
	caption?: string;
	width: number;
	height: number;
};

export const GUIDE_IMAGE_ASPECT = {
	width: 1920,
	height: 1080,
} as const;

const base = '/images/guides';

/** Shared premium partybus imagery — WebP, 16:9, lazy-loaded in guides (hero separate). */
export const guideImagePool = {
	groepInstapt: {
		src: `${base}/partybus-groep-instapt.webp`,
		filename: 'partybus-groep-instapt.webp',
		alt: 'Groep stapt in een luxe zwarte partybus met paarse LED-verlichting in de avond',
		title: 'Groep stapt in bij een partybus',
		caption: 'Samen instappen — de sfeer begint direct bij de opstapplaats.',
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	},
	onderweg: {
		src: `${base}/partybus-onderweg-nacht.webp`,
		filename: 'partybus-onderweg-nacht.webp',
		alt: 'Luxe zwarte partybus rijdt ’s avonds door de stad met paarse verlichting',
		title: 'Partybus onderweg in de avond',
		caption: 'Comfortabel groepsvervoer zonder dat iemand zelf hoeft te rijden.',
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	},
	interieur: {
		src: `${base}/partybus-interieur-sfeer.webp`,
		filename: 'partybus-interieur-sfeer.webp',
		alt: 'Gezellig interieur van een partybus met paarse sfeerverlichting en zitplaatsen',
		title: 'Sfeer in de partybus',
		caption: 'Muziek, licht en ruimte voor de hele groep onderweg.',
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	},
	festivalAankomst: {
		src: `${base}/partybus-festival-aankomst.webp`,
		filename: 'partybus-festival-aankomst.webp',
		alt: 'Partybus arriveert bij een evenementenlocatie in de avond',
		title: 'Aankomst bij festival of evenement',
		caption: 'Samen aankomen op de bestemming — zonder parkeerstress.',
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	},
	festivalterrein: {
		src: `${base}/partybus-festivalterrein.webp`,
		filename: 'partybus-festivalterrein.webp',
		alt: 'Festivalterrein en groepsvervoer in de avond',
		title: 'Festivalterrein en groepsrit',
		caption: 'Populair voor festivals, concerten en grote evenementen.',
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	},
	terugreis: {
		src: `${base}/partybus-terugreis-avond.webp`,
		filename: 'partybus-terugreis-avond.webp',
		alt: 'Partybus op de terugweg na een avond uit in Nederland',
		title: 'Terugreis met de hele groep',
		caption: 'Vaste verzamelplek en tijd — iedereen reist weer samen terug.',
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	},
	cta: {
		src: `${base}/partybus-cta-offerte.webp`,
		filename: 'partybus-cta-offerte.webp',
		alt: 'Luxe partybus bij nacht — klaar voor een groepsrit door Nederland',
		title: 'Partybus huren en offertes vergelijken',
		caption: 'Vraag vrijblijvend meerdere offertes aan voor jouw rit.',
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	},
	luxeExterieur: {
		src: `${base}/partybus-luxe-exterieur.webp`,
		filename: 'partybus-luxe-exterieur.webp',
		alt: 'Premium zwarte partybus met paarse LED-accenten in de nacht',
		title: 'Luxe partybus exterieur',
		caption: 'Representatief groepsvervoer voor feesten, festivals en uitjes.',
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	},
} satisfies Record<string, GuideImageAsset>;

const p = guideImagePool;

/** Supporting images per guide page (hero excluded). */
export const festivalGuideImages: GuideImageAsset[] = [
	p.groepInstapt,
	p.onderweg,
	p.interieur,
	p.festivalAankomst,
	p.festivalterrein,
	p.terugreis,
	p.cta,
];

export const pricingGuideImages: GuideImageAsset[] = [
	p.luxeExterieur,
	p.onderweg,
	p.interieur,
	p.groepInstapt,
	p.festivalAankomst,
	p.terugreis,
	p.cta,
];

export const partybusHurenGuideImages: GuideImageAsset[] = [
	p.groepInstapt,
	p.interieur,
	p.onderweg,
	p.luxeExterieur,
	p.festivalterrein,
	p.festivalAankomst,
	p.terugreis,
	p.cta,
];
