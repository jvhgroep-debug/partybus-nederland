/** Phase 1: single municipality test before province-wide rollout. */
export const ZUID_HOLLAND_TOURGO_TEST_SLUGS = ['rotterdam'] as const;

export type ZuidHollandTourgoTestSlug = (typeof ZUID_HOLLAND_TOURGO_TEST_SLUGS)[number];

export function isZuidHollandTourgoTestSlug(
	slug: string,
): slug is ZuidHollandTourgoTestSlug {
	return (ZUID_HOLLAND_TOURGO_TEST_SLUGS as readonly string[]).includes(slug);
}
