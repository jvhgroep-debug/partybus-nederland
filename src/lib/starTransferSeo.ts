import {starTransfer} from '../data/partners/starTransfer';
export function buildStarTransferServiceSchema(pagePath:string,departure='Zeeland',festival?:string):Record<string,unknown>{
 const profile=starTransfer.publicProfile;
 return {'@context':'https://schema.org','@type':'Service','@id':`https://www.partybusnederland.nl${pagePath}#service`,name:festival?`Partybus naar ${festival} vanuit Zeeland`:`Partybus- en groepsvervoer vanuit ${departure}`,url:`https://www.partybusnederland.nl${pagePath}`,serviceType:'Partybus- en groepsvervoer',areaServed:{'@type':'AdministrativeArea',name:'Zeeland',containedInPlace:{'@type':'Country',name:'Nederland'}},provider:{'@type':'Organization','@id':'https://startransfer.nl/#organization',name:profile.name,url:profile.website.href,telephone:'+31103810800',email:profile.email,address:{'@type':'PostalAddress',streetAddress:profile.address.street,postalCode:profile.address.postalCode,addressLocality:profile.address.city,addressCountry:'NL'}}};
}
export function compactMetaDescription(text:string,max=170):string{if(text.length<=max)return text;return text.slice(0,max-1).replace(/\s+\S*$/,'')+'…';}
