import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { prestigeCoachService } from '../data/partners/prestigeCoachService';
import { tourgoPartybussen } from '../data/partners/tourgoPartybussen';
import {
	QUOTE_PARTNER_IDS,
	resolveQuoteFormPartnerId,
	resolveQuotePartnerId,
	resolveQuotePartnerLeadEmail,
} from './quotePartnerRouting';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');

function readSrc(relativePath: string) {
	return readFileSync(join(root, relativePath), 'utf8');
}

test('allowlist is explicit Prestige + Tourgo only', () => {
	assert.deepEqual([...QUOTE_PARTNER_IDS], ['prestige-coach-service', 'tourgo']);
});

test('A. partnerId=prestige-coach-service selects Prestige', () => {
	assert.equal(resolveQuotePartnerId('prestige-coach-service'), prestigeCoachService.id);
	assert.equal(
		resolveQuotePartnerLeadEmail(resolveQuotePartnerId('prestige-coach-service')),
		prestigeCoachService.internalRouting.leadEmail,
	);
});

test('B. partnerId=tourgo selects Tourgo', () => {
	assert.equal(resolveQuotePartnerId('tourgo'), tourgoPartybussen.id);
	assert.equal(
		resolveQuotePartnerLeadEmail(resolveQuotePartnerId('tourgo')),
		tourgoPartybussen.internalRouting.leadEmail,
	);
});

test('C. ?partner=tourgo is accepted by QuoteForm resolver', () => {
	assert.equal(resolveQuoteFormPartnerId({ queryPartner: 'tourgo' }), 'tourgo');
});

test('D. ?partner=prestige-coach-service is accepted by QuoteForm resolver', () => {
	assert.equal(
		resolveQuoteFormPartnerId({ queryPartner: 'prestige-coach-service' }),
		'prestige-coach-service',
	);
});

test('E. no partnerId stays national', () => {
	assert.equal(resolveQuotePartnerId(''), '');
	assert.equal(resolveQuotePartnerId(undefined), '');
	assert.equal(resolveQuoteFormPartnerId({}), '');
	assert.equal(resolveQuotePartnerLeadEmail(''), null);
	assert.equal(resolveQuotePartnerLeadEmail(undefined), null);
});

test('F. unknown partnerId has no partner routing', () => {
	assert.equal(resolveQuotePartnerId('onbekend'), '');
	assert.equal(resolveQuotePartnerId('party-bussen-westland'), '');
	assert.equal(resolveQuotePartnerLeadEmail('onbekend'), null);
});

test('G. ?partner=onbekend has no partner routing', () => {
	assert.equal(resolveQuoteFormPartnerId({ queryPartner: 'onbekend' }), '');
	assert.equal(resolveQuoteFormPartnerId({ queryPartner: 'party-bussen-westland' }), '');
});

test('H. Tourgo leadEmail comes only from existing partner data', () => {
	assert.equal(
		resolveQuotePartnerLeadEmail('tourgo'),
		tourgoPartybussen.internalRouting.leadEmail,
	);
	assert.equal(tourgoPartybussen.internalRouting.leadEmail, 'info@tourgo.nl');
});

test('explicit prop wins over query; invalid values never infer a partner', () => {
	assert.equal(
		resolveQuoteFormPartnerId({
			propPartnerId: 'prestige-coach-service',
			queryPartner: 'tourgo',
		}),
		'prestige-coach-service',
	);
	assert.equal(
		resolveQuoteFormPartnerId({
			propPartnerId: 'onbekend',
			queryPartner: 'tourgo',
		}),
		'tourgo',
	);
});

test('QuoteForm and /api/offerte use the shared allowlist, not a global default', () => {
	const quoteForm = readSrc('src/components/forms/QuoteForm.astro');
	const offerteApi = readSrc('functions/api/offerte.ts');
	assert.match(quoteForm, /resolveQuotePartnerId\(partnerId\)/);
	assert.match(quoteForm, /allowedPartnerIds\.indexOf\(queryPartnerRaw\)/);
	assert.doesNotMatch(quoteForm, /provinceSlug|zuid-holland|noord-brabant/);
	assert.match(offerteApi, /resolveQuotePartnerId\(body\.partnerId\)/);
	assert.match(offerteApi, /resolveQuotePartnerLeadEmail\(payload\.partnerId\)/);
});

test('existing pages do not get an automatic Tourgo partnerId', () => {
	const zuidHolland = readSrc('src/components/provinces/ZuidHollandProvincePageTemplate.astro');
	const noordBrabant = readSrc('src/components/provinces/ProvincePageTemplate.astro');
	const utrecht = readSrc('src/components/partners/UtrechtPartnerHero.astro');
	const amsterdam = readSrc('src/components/partners/AmsterdamPartnerHero.astro');
	const landelijk = readSrc('src/pages/gratis-partybus-offertes-aanvragen.astro');
	const blog = readSrc(
		'src/pages/kennisbank/samenwerking-tourgo-partybussen-zuid-holland/index.astro',
	);

	assert.match(noordBrabant, /partnerId=\{prestigeCoachService\.id\}/);
	assert.doesNotMatch(zuidHolland, /partnerId=/);
	assert.doesNotMatch(utrecht, /partnerId=/);
	assert.doesNotMatch(amsterdam, /partnerId=/);
	assert.doesNotMatch(landelijk, /partnerId=/);
	assert.match(blog, /partnerId=\{tourgoPartybussen\.id\}/);
	assert.match(blog, /partnerCity="Zuid-Holland"/);
	assert.match(blog, /submitLabel="Partybus aanvragen"/);
});
