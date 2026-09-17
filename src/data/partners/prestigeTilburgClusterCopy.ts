import type { TilburgClusterFaq, TilburgClusterPage } from '../tilburg/clusterPages';
import { prestigeCoachService } from './prestigeCoachService';

const partnerName = prestigeCoachService.publicProfile.name;

function rewriteMarketplaceText(text: string): string {
	return text
		.replace(
			/Partybus Nederland is het platform waarop je meerdere aanbieders vergelijkt — jij kiest zelf met wie je boekt\./g,
			`PartybusNederland.nl werkt in Noord-Brabant samen met ${partnerName}. Een aanvraag vanuit Tilburg gaat naar deze partner.`,
		)
		.replace(
			/Vergelijken via Partybus Nederland werkt het beste als je dezelfde briefing naar meerdere aanbieders stuurt\./g,
			`Een duidelijke briefing helpt ${partnerName}. Gebruik daarom één set feiten.`,
		)
		.replace(
			/dat offertes echt vergelijkbaar zijn/g,
			'dat de aanvraag scherp genoeg is',
		)
		.replace(
			/Je verplicht je niet tot boeken door te vergelijken\. Bekijk voorstellen, stel verhelderende vragen en kies pas als tijden, capaciteit en voorwaarden kloppen\./g,
			`Een eerste aanvraag is vrijblijvend. Bekijk het voorstel van ${partnerName} en stem tijden, capaciteit en voorwaarden af voordat je boekt.`,
		)
		.replace(
			/aanbieders reageren gerichter/g,
			`${partnerName} kan gerichter meedenken`,
		)
		.replace(
			/zodat aanbieders geen gokwerk leveren/g,
			`zodat ${partnerName} geen gokwerk hoeft te doen`,
		)
		.replace(
			/zodat aanbieders een passend voorstel kunnen doen/g,
			`zodat ${partnerName} een passend voorstel kan doen`,
		)
		.replace(
			/Transparante aanbieders zetten dit vooraf in de offerte/g,
			`${partnerName} zet dit vooraf in het voorstel`,
		)
		.replace(/losse verhuurders/g, 'losse taxi’s of eigen vervoer')
		.replace(/een passende shortlist komt/g, 'een passende rit komt')
		.replace(/houdt contact met de aanbieder/g, `houdt contact met ${partnerName}`)
		.replace(/meerdere aanbieders/gi, partnerName)
		.replace(/verschillende aanbieders/gi, partnerName)
		.replace(/passende aanbieders/gi, partnerName)
		.replace(/de aanbieders/gi, partnerName)
		.replace(/aanbieders/gi, partnerName)
		.replace(/een aanbieder/gi, partnerName)
		.replace(/de aanbieder/gi, partnerName)
		.replace(/Gratis offertes aanvragen/gi, 'Partybus aanvragen')
		.replace(/gratis offertes/gi, 'een aanvraag')
		.replace(/meerdere offertes/gi, 'de mogelijkheden')
		.replace(/offertes vergelijken/gi, 'een partybus aanvragen')
		.replace(/partybussen te vergelijken/gi, 'een partybus aan te vragen')
		.replace(/bij het vergelijken van partybussen/gi, 'bij het plannen van een partybus')
		.replace(/Slim vergelijken in Tilburg gaat/gi, 'Slim plannen in Tilburg gaat')
		.replace(/ — vergelijken loont/gi, ' — de juiste buscapaciteit is belangrijk')
		.replace(/Hoe eerder je vergelijkt/gi, 'Hoe eerder je aanvraagt')
		.replace(/vergelijk meerdere/gi, 'bespreek de')
		.replace(/Vergelijk /g, 'Bekijk ')
		.replace(/vergelijk /g, 'bekijk ')
		.replace(/ te vergelijken/gi, ' aan te vragen')
		.replace(/vergelijken/gi, 'aanvragen');
}

function rewriteTitle(title: string): string {
	const cleaned = title
		.replace(/\s*\|\s*Partybus vergelijken/i, '')
		.replace(/\s*\|\s*Slim vergelijken/i, '')
		.replace(/\s*\|\s*Vergelijken/i, '')
		.replace(/\s*\|\s*Gratis aanvragen/i, '')
		.replace(/\s*\|\s*Prestige Coach Service/i, '')
		.trim();
	return `${cleaned} | ${partnerName}`;
}

function rewriteDescription(description: string): string {
	return rewriteMarketplaceText(description)
		.replace(/Vraag een aanvraag aan/gi, 'Vraag een partybus aan')
		.replace(/via Partybus Nederland\.?$/i, `via ${partnerName}, de partner van PartybusNederland.nl in Noord-Brabant.`);
}

function rewriteFaqs(faqs: readonly TilburgClusterFaq[]): TilburgClusterFaq[] {
	return faqs.map((faq) => ({
		question: rewriteMarketplaceText(faq.question),
		answer: rewriteMarketplaceText(faq.answer),
	}));
}

export function applyPrestigeTilburgClusterCopy(page: TilburgClusterPage): TilburgClusterPage {
	return {
		...page,
		title: rewriteTitle(page.title),
		description: rewriteDescription(page.description),
		lead: rewriteMarketplaceText(page.lead),
		paragraphs: page.paragraphs.map((paragraph) => rewriteMarketplaceText(paragraph)),
		faqs: rewriteFaqs(page.faqs),
		related: page.related.map((item) => ({
			...item,
			label: item.label.replace(/Gratis offertes aanvragen/i, 'Partybus aanvragen'),
		})),
	};
}
