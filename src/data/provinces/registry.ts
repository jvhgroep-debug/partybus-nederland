import { noordBrabantProvince } from './noordBrabant';

export type ProvincePageMeta = {
	slug: string;
	path: string;
	canonical: string;
	title: string;
	metaDescription: string;
	h1: string;
};

export const provincePages: readonly ProvincePageMeta[] = [noordBrabantProvince];

export const provincePaths: readonly string[] = provincePages.map((page) => page.path);
