import { festivals, festivalWhatsapp } from './registry';
import { partyBussenWestland, partyBussenWestlandCityMedia } from '../partners/partyBussenWestland';
export const utrechtFestivals = festivals.map((festival,index) => ({
 ...festival,
 path: `/provincies/utrecht/festivals/${festival.slug}/`,
 tip: festival.tip.replaceAll('vanuit Brabant', 'vanuit Utrecht').replaceAll('Brabantse', 'Utrechtse').replaceAll('in Brabant', 'in Utrecht').replaceAll('Prestige', 'Party Bussen Westland'),
 hero: partyBussenWestlandCityMedia.desktopHeroes[index % partyBussenWestlandCityMedia.desktopHeroes.length],
}));
export function utrechtFestivalWhatsapp(festival: (typeof utrechtFestivals)[number], direction='Vanaf het festivalterrein') {
 return festivalWhatsapp(festival, direction, {name:partyBussenWestland.publicProfile.name,phone:partyBussenWestland.publicProfile.whatsapp.phone,region:'Utrecht'});
}
