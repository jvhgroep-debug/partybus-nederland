export const GUIDE_IMAGE_WIDTHS = [640, 960, 1280, 1920] as const;

export type GuideImageSrc = {
	src: string;
	width: number;
};

export type GuideImageAsset = {
	/** Default src (1920w) */
	src: string;
	/** Descriptive filename without path */
	filename: string;
	/** Base name without extension — used for responsive variants */
	baseName: string;
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

export function buildGuideImageSrcset(image: GuideImageAsset): string {
	return GUIDE_IMAGE_WIDTHS.map((w) => `${base}/${image.baseName}-${w}w.webp ${w}w`).join(', ');
}

function guideImage(
	baseName: string,
	meta: Omit<GuideImageAsset, 'src' | 'filename' | 'baseName' | 'width' | 'height'>,
): GuideImageAsset {
	const filename = `${baseName}.webp`;
	return {
		...meta,
		baseName,
		filename,
		src: `${base}/${baseName}-1920w.webp`,
		width: GUIDE_IMAGE_ASPECT.width,
		height: GUIDE_IMAGE_ASPECT.height,
	};
}

/** Shared premium partybus imagery — WebP, 16:9, responsive srcset. */
export const guideImagePool = {
	opstapplaats: guideImage('partybus-opstapplaats', {
		alt: 'Groep verzamelt zich bij de opstapplaats voor een luxe zwarte partybus met paarse LED-verlichting',
		title: 'Opstapplaats en instappen bij de partybus',
		caption: 'Kies een bereikbare opstapplaats — de sfeer begint al bij het instappen.',
	}),
	onderweg: guideImage('partybus-onderweg-nacht', {
		alt: 'Luxe zwarte partybus rijdt ’s avonds door Nederland met paarse verlichting',
		title: 'Onderweg in de partybus',
		caption: 'Comfortabel groepsvervoer zonder dat iemand zelf hoeft te rijden.',
	}),
	interieur: guideImage('partybus-interieur-sfeer', {
		alt: 'Gezellig interieur van een partybus met paarse sfeerverlichting en zitplaatsen',
		title: 'Gezellige sfeer in de partybus',
		caption: 'Muziek, licht en ruimte voor de hele groep onderweg.',
	}),
	festival: guideImage('partybus-festivalterrein', {
		alt: 'Festivalterrein in Nederland bij avond met groepsvervoer per partybus',
		title: 'Festival of evenement met groepsvervoer',
		caption: 'Populair voor festivals, concerten en grote evenementen door heel Nederland.',
	}),
	aankomst: guideImage('partybus-festival-aankomst', {
		alt: 'Partybus arriveert bij een evenementenlocatie in de Nederlandse avond',
		title: 'Aankomst op locatie',
		caption: 'Samen aankomen op de bestemming — zonder parkeerstress.',
	}),
	terugreis: guideImage('partybus-terugreis-avond', {
		alt: 'Partybus op de terugweg na een avond uit in Nederland',
		title: 'Terugreis met de hele groep',
		caption: 'Vaste verzamelplek en tijd — iedereen reist weer samen terug.',
	}),
	cta: guideImage('partybus-cta-offerte', {
		alt: 'Luxe partybus bij nacht — klaar voor een groepsrit door Nederland',
		title: 'Partybus huren en offertes vergelijken',
		caption: 'Vraag vrijblijvend meerdere offertes aan voor jouw rit.',
	}),
	luxeExterieur: guideImage('partybus-luxe-exterieur', {
		alt: 'Premium zwarte partybus met paarse LED-accenten in de Nederlandse nacht',
		title: 'Luxe partybus exterieur',
		caption: 'Representatief groepsvervoer voor feesten, festivals en uitjes.',
	}),
} satisfies Record<string, GuideImageAsset>;
