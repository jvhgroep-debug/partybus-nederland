import { noordBrabantProvince } from './noordBrabant';
import { zuidHollandProvince } from './zuidHolland';

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
];

export const provincePaths: readonly string[] = provincePages.map((page) => page.path);
