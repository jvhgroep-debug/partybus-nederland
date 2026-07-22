import type { LocalCityProfile } from '../localTypes';
import { localProfilesMiddenOost } from './middenOost';
import { localProfilesNoordOost } from './noordOost';
import { localProfilesRandstadWest } from './randstadWest';
import { localProfilesZuid } from './zuid';

export const localCityProfiles: readonly LocalCityProfile[] = [
	...localProfilesRandstadWest,
	...localProfilesMiddenOost,
	...localProfilesZuid,
	...localProfilesNoordOost,
];

const localCityProfileBySlug = new Map(
	localCityProfiles.map((profile) => [profile.slug, profile] as const),
);

export function getLocalCityProfile(slug: string): LocalCityProfile | undefined {
	return localCityProfileBySlug.get(slug);
}
