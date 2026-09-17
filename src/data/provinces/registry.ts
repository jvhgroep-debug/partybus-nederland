import { noordBrabantProvince } from './noordBrabant';
import { zuidHollandProvince } from './zuidHolland';
import { utrechtProvince } from './utrecht';

export type ProvincePageMeta = {
	slug: string;
	path: string;
	canonical: string;
	title: string;
	metaDescription: string;
	h1: string;
};

export const provincePages: readonly ProvincePageMeta[] = [
	noordBrabantProvince,
	zuidHollandProvince,
	utrechtProvince,
];

export const provincePaths: readonly string[] = provincePages.map((page) => page.path);
