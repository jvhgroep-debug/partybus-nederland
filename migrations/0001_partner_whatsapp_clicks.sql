CREATE TABLE IF NOT EXISTS partner_whatsapp_clicks (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	partner_id TEXT NOT NULL,
	province_slug TEXT NOT NULL,
	municipality_slug TEXT,
	municipality_name TEXT NOT NULL,
	page_path TEXT NOT NULL,
	page_type TEXT NOT NULL CHECK (page_type IN ('municipality', 'province')),
	button_type TEXT NOT NULL,
	clicked_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
	user_agent TEXT,
	referrer TEXT
);

CREATE INDEX IF NOT EXISTS idx_pwc_partner_province
	ON partner_whatsapp_clicks (partner_id, province_slug);

CREATE INDEX IF NOT EXISTS idx_pwc_municipality
	ON partner_whatsapp_clicks (municipality_slug);

CREATE INDEX IF NOT EXISTS idx_pwc_page_path
	ON partner_whatsapp_clicks (page_path);

CREATE INDEX IF NOT EXISTS idx_pwc_clicked_at
	ON partner_whatsapp_clicks (clicked_at);

CREATE INDEX IF NOT EXISTS idx_pwc_button_type
	ON partner_whatsapp_clicks (button_type);
