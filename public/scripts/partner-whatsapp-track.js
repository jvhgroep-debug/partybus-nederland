(function initPartnerWhatsappTracking() {
	const config = window.__PARTNER_WHATSAPP_TRACKING__;
	if (!config || typeof config !== 'object') return;

	const endpoint = config.endpoint || '/api/partner-whatsapp-click';
	const dedupeMs = 2000;

	function buildPayload(buttonType) {
		return {
			partnerId: config.partnerId,
			provinceSlug: config.provinceSlug,
			municipalitySlug: config.municipalitySlug ?? null,
			municipalityName: config.municipalityName,
			pagePath: config.pagePath,
			pageType: config.pageType,
			buttonType,
		};
	}

	function shouldSkipDuplicate(buttonType) {
		try {
			const key = ['pwa', config.partnerId, config.pagePath, buttonType].join(':');
			const previous = sessionStorage.getItem(key);
			const now = Date.now();
			if (previous && now - Number(previous) < dedupeMs) {
				return true;
			}
			sessionStorage.setItem(key, String(now));
		} catch {
			// Ignore storage errors; never block WhatsApp.
		}
		return false;
	}

	function sendClick(buttonType) {
		if (!buttonType || shouldSkipDuplicate(buttonType)) return;

		const payload = JSON.stringify(buildPayload(buttonType));

		try {
			if (navigator.sendBeacon) {
				const blob = new Blob([payload], { type: 'application/json' });
				navigator.sendBeacon(endpoint, blob);
				return;
			}
		} catch {
			// Fall through to fetch keepalive.
		}

		try {
			fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: payload,
				keepalive: true,
			}).catch(function () {
				// Swallow network errors.
			});
		} catch {
			// Swallow fetch errors.
		}
	}

	document.addEventListener(
		'click',
		function (event) {
			const target = event.target;
			if (!(target instanceof Element)) return;

			const link = target.closest('[data-partner-whatsapp]');
			if (!(link instanceof HTMLAnchorElement)) return;

			const buttonType = link.getAttribute('data-button-type');
			if (!buttonType) return;

			sendClick(buttonType);
		},
		true,
	);
})();
