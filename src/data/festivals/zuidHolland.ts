import { festivals, festivalWhatsapp } from './registry';
import { tourgoPartybussen, tourgoPartybussenCityMedia } from '../partners/tourgoPartybussen';
export const zuidHollandFestivals = festivals.map((festival,index) => ({
 ...festival,
 path: `/provincies/zuid-holland/festivals/${festival.slug}/`,
 tip: festival.tip.replaceAll('vanuit Brabant', 'vanuit Zuid-Holland').replaceAll('Brabantse', 'Zuid-Hollandse').replaceAll('in Brabant', 'in Zuid-Holland').replaceAll('Prestige', 'Tourgo'),
 hero: tourgoPartybussenCityMedia.desktopHeroes[index % tourgoPartybussenCityMedia.desktopHeroes.length],
}));
export function tourgoFestivalWhatsapp(festival: (typeof zuidHollandFestivals)[number], direction='Vanaf het festivalterrein') {
 return festivalWhatsapp(festival, direction, {name:tourgoPartybussen.publicProfile.name,phone:tourgoPartybussen.publicProfile.whatsapp.phone,region:'Zuid-Holland'});
}
