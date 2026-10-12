import { festivals, festivalWhatsapp } from './registry';
import { partyBussenWestland } from '../partners/partyBussenWestland';
import { amsterdamWestlandMedia } from '../partners/amsterdamPartyBussenWestland';
export const amsterdamFestivals = festivals.map((festival,index) => ({
 ...festival,
 path: `/steden/partybus-huren-amsterdam/festivals/${festival.slug}/`,
 tip: festival.tip.replaceAll('vanuit Brabant', 'vanuit Amsterdam').replaceAll('Brabantse', 'Amsterdamse').replaceAll('in Brabant', 'in Amsterdam').replaceAll('Prestige', 'Party Bussen Westland'),
 hero: amsterdamWestlandMedia.gallery[index % amsterdamWestlandMedia.gallery.length],
}));
export function amsterdamFestivalWhatsapp(festival: (typeof amsterdamFestivals)[number], direction='Vanaf het festivalterrein') {
 return festivalWhatsapp(festival, direction, {name:partyBussenWestland.publicProfile.name,phone:partyBussenWestland.publicProfile.whatsapp.phone,region:'Amsterdam'});
}
