import type { RegionalFooterConfig } from '../settings/regionalFooters';
import { zeelandMunicipalities } from '../provinces/zeeland';
import { buildPartnerWhatsappHref } from '../../lib/partnerWhatsappMessage';
const base='/images/partners/startransfer';
export const starTransferLogo=`${base}/logo.png`;
export const starTransferPhotos=[
 {src:`${base}/partybus-buiten.webp`,alt:'Partybus van StarTransfer van buiten'},
 {src:`${base}/partybus-interieur.webp`,alt:'Interieur en verlichting van de StarTransfer partybus'},
 {src:`${base}/partybus-interieur-2.webp`,alt:'Zitplaatsen in de StarTransfer partybus'},
 {src:`${base}/experience-buiten.webp`,alt:'The Experience partybus van StarTransfer'},
 {src:`${base}/experience-interieur.webp`,alt:'Interieur van The Experience van StarTransfer'},
 {src:`${base}/experience-lounge.webp`,alt:'VIP-lounge van The Experience van StarTransfer'},
 {src:`${base}/vip-buiten.webp`,alt:'StarTransfer V.I.P. bus van buiten'},
 {src:`${base}/dj-opstelling.webp`,alt:'DJ-opstelling in de StarTransfer partybus'},
 {src:`${base}/vip-interieur.webp`,alt:'Zitplaatsen en interieur van de StarTransfer V.I.P. bus'},
 {src:`${base}/vip-lounge.webp`,alt:'Lounge met sfeerverlichting in de StarTransfer partybus'},
];
export const starTransferHeaderPhotos=[starTransferPhotos[0],starTransferPhotos[3],starTransferPhotos[6],starTransferPhotos[4],starTransferPhotos[5],starTransferPhotos[9]];
export const starTransfer={id:'startransfer',provinceSlug:'zeeland',publicProfile:{name:'StarTransfer',website:{href:'https://startransfer.nl/',label:'Bekijk StarTransfer'},email:'info@startransfer.nl',phone:{display:'010 381 08 00',href:'tel:+31103810800'},address:{street:'Fokkerstraat 521',postalCode:'3125 BD',city:'Schiedam'},whatsapp:{phone:'31684002350',temporary:true,ariaLabel:'WhatsApp-aanvraag voor StarTransfer via Partybus Nederland'}},internalRouting:{leadEmail:'info@starlocal.nl'}} as const;
export function buildStarTransferWhatsappHref(departure='Zeeland'){return buildPartnerWhatsappHref(starTransfer.publicProfile.whatsapp.phone,'StarTransfer — aanvraag via Partybus Nederland',departure);}
export const zeelandFooter:RegionalFooterConfig={id:'zeeland',compact:true,ctaLabel:'Vraag je rit aan',ctaHref:buildStarTransferWhatsappHref(),brandText:'StarTransfer is de partner van PartybusNederland.nl voor Zeeland. Vraag beschikbaarheid, route en prijs rechtstreeks aan.',navigation:[{label:'Home',href:'/'},{label:'StarTransfer in Zeeland',href:'/provincies/zeeland/'},{label:'Festivalvervoer',href:'/provincies/zeeland/festivals/'}],locationHeading:'Vertrekplaatsen in Zeeland',locations:zeelandMunicipalities.map(city=>({label:city.name,href:city.path})),partner:{name:starTransfer.publicProfile.name,logo:starTransferLogo,email:starTransfer.publicProfile.email,phone:starTransfer.publicProfile.phone,address:starTransfer.publicProfile.address,website:starTransfer.publicProfile.website}};
