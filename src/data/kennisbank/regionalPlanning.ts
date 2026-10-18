import type { KennisbankArticle } from './types';
import { regionalPlanningContent } from './regionalPlanningContent';
import { samenwerkingWestland } from './articles/samenwerkingWestland';
import { samenwerkingPrestigeNoordBrabant } from './articles/samenwerkingPrestigeNoordBrabant';
import { samenwerkingTourgoZuidHolland } from './articles/samenwerkingTourgoZuidHolland';
import { partyBussenWestland, buildPartyBussenWestlandWhatsappHref } from '../partners/partyBussenWestland';
import { prestigeCoachService, buildPrestigeCoachServiceWhatsappHref } from '../partners/prestigeCoachService';
import { tourgoPartybussen, buildTourgoWhatsappHref } from '../partners/tourgoPartybussen';

const partners = {
  'party-bussen-westland': { profile: partyBussenWestland, source: samenwerkingWestland, whatsapp: buildPartyBussenWestlandWhatsappHref },
  'prestige-coach-service': { profile: prestigeCoachService, source: samenwerkingPrestigeNoordBrabant, whatsapp: buildPrestigeCoachServiceWhatsappHref },
  tourgo: { profile: tourgoPartybussen, source: samenwerkingTourgoZuidHolland, whatsapp: buildTourgoWhatsappHref },
};
const cityNames: Record<string, string> = { amsterdam: 'Amsterdam', utrecht: 'Utrecht', breda: 'Breda', tilburg: 'Tilburg', oss: 'Oss', rotterdam: 'Rotterdam', 'den-haag': 'Den Haag', leiden: 'Leiden' };

export const regionalPlanningArticles = regionalPlanningContent.map(content => {
  const partner = partners[content.partner as keyof typeof partners];
  const path = `/kennisbank/${content.slug}/`;
  const quoteHref = '/gratis-partybus-offertes-aanvragen/?' + new URLSearchParams({ partner: partner.profile.id, city: content.region, source: path }).toString();
  const whatsappHref = partner.whatsapp(content.region);
  const article: KennisbankArticle = {
    slug: content.slug, path, canonical: `https://www.partybusnederland.nl${path}`,
    seoTitle: content.title, metaDescription: content.description, h1: content.title,
    eyebrow: `RIT PLANNEN · ${content.region.toUpperCase()}`, lead: content.lead,
    heroImage: partner.source.heroImage, ctaImage: partner.source.ctaImage,
    heroPrimaryHref: quoteHref, heroPrimaryLabel: `Vraag jullie rit vanuit ${content.region} aan`,
    sections: content.sections,
    checklist: { title: 'Leg deze gegevens klaar voor je aanvraag', lead: 'Met één compleet overzicht kan de partner jullie gewenste rit beoordelen.', items: [
      'Datum, bestemming en het aantal deelnemers per opstapadres.',
      'Volledige adressen voor vertrek, extra stops en terugkomst.',
      'Gewenste aankomsttijd, ophaaltijd na afloop en contactpersoon.',
      'Wensen voor bagage, muziek, verlichting en consumpties.',
      'Vraag bevestiging van voertuig, capaciteit, totaalprijs en wijzigingsafspraken.',
    ] },
    faqs: [content.faq,
      { question: 'Zijn extra opstapplaatsen automatisch inbegrepen?', answer: 'Nee. Geef alle gewenste stops vooraf door en laat de vervoerder bevestigen welke route, tijden en kosten in het voorstel zijn opgenomen.' },
      { question: 'Heb ik met een aanvraag al een boeking?', answer: 'Nee. De vervoerder beoordeelt beschikbaarheid en maakt een voorstel. Je boekt volgens de afspraken en voorwaarden die je met de aanbieder vastlegt.' },
    ],
    summary: { title: 'Deel één bevestigd reisschema met de groep', paragraphs: [`Bespreek jullie plan met ${partner.profile.publicProfile.name} en wacht op bevestiging van de concrete ritafspraken. Deel daarna het vertrekadres, verzameltijd, terugrit en de contactpersoon met alle deelnemers.`] },
    cta: { title: `Bespreek jullie rit vanuit ${content.region}`, lead: `Vraag ${partner.profile.publicProfile.name} naar de uitvoering voor jullie datum, adressen en groepsgrootte.`, primaryHref: quoteHref, primaryLabel: 'Vraag prijs en beschikbaarheid aan', whatsappHref, whatsappLabel: `WhatsApp ${partner.profile.publicProfile.name}` },
    relatedLinks: [ { label: `Partnerinformatie: ${partner.profile.publicProfile.name}`, href: partner.source.path }, { label: 'Kostenfactoren van een partybus', href: '/gids/partybus-kosten/' }, { label: 'Opstapplaatsen kiezen', href: '/gidsen/opstapplaatsen/' } ],
    cityLinks: content.cities.map(slug => ({ label: `Partybus huren vanuit ${cityNames[slug]}`, href: `/steden/partybus-huren-${slug}/` })),
    trustNote: `Dit artikel helpt bij het plannen. ${partner.profile.publicProfile.name} bevestigt route, beschikbaarheid, voertuig en prijs. De gebruikte foto’s komen uit de bestaande partnerpresentatie en zijn geen toezegging van een specifiek voertuig.`,
  };
  return { ...content, article, quoteHref, whatsappHref, partnerName: partner.profile.publicProfile.name };
});

export function regionalPlanningForCity(slug: string) {
  return regionalPlanningArticles.find(item => item.cities.includes(slug));
}
