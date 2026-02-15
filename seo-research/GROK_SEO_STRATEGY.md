# SEO-Strategie Weid Immobilien (weid-immobilien.de)

## 1. Konkurrenz
- Brunner, VON POLL, Müller & Müller, Ulrichs, Stielke → starke GBP + Reviews + Lagen-Content

## 2. Kern-Keywords
- Primär: Immobilienmakler Erlangen
- Verkauf: Haus verkaufen Erlangen, Wohnung verkaufen Erlangen, Immobilie verkaufen Erlangen
- Kauf: Haus kaufen Erlangen, Wohnung kaufen Erlangen, Neubau Erlangen
- Long-Tail: Wertermittlung Erlangen gratis, Makler Buckenhof, Haus verkaufen Erlangen-Nord

## 3. To-Do-Liste (Updated Feb 2026)
- [ ] GBP claimen + optimieren (Fotos, Posts wöchentlich, 10+ Reviews in 4 Wochen)
- [ ] Titel/Meta: „Weid Immobilien | Makler Erlangen – Verkauf & Vermietung“
- [ ] Schema LocalBusiness + FAQPage + RealEstateListing (JSON-LD für AEO / KI-Sichtbarkeit)
- [ ] Blog starten: Marktberichte, Tipps, Mietspiegel
- [ ] Backlinks: lokale Partner, Immoportale
- [ ] **Programmatic SEO:** Landingpages aus Dropbox-Daten (JSON) automatisiert erstellen

## 4. Programmatic SEO & Content
- **Automatische Objekt-Landingpages:** Aus Dropbox (JSON + Fotos) synchronisiert.
- **URL-Schema:** `/objekt/erlangen-alterlangen-3zimmer-380k`
- **Sichtbarkeit:** Bei „verkauft“: `noindex` + Redirect / Alternativen-Anzeige.
- **Weitere Landingpage-Typen:**
  - Stadtteil-Guides („Leben in Alterlangen“)
  - Preis-Cluster („Wohnungen bis 400k in Erlangen“)
  - FAQ-Autopages (basierend auf People Also Ask & AlsoAsked.com)
  - Vergleichs-Tools (Haus vs. Wohnung)

## 5. Design & UI-Patterns (Warm Minimalism)
- **Hero:** Vollbild-Foto + zentraler Suchbalken (Ort / Preis / Zimmer)
- **Karte:** Interaktive Karte + Filter oben (Google-Maps-Style)
- **Virtual Staging:** Vorher-Nachher-Slider, Toggle-Button prominent (360°-Touren)
- **Mobile-First:** Sticky-CTA („Termin buchen“) immer sichtbar
- **Typografie:** Poppins (Bold für Headings 38–48px, Regular für Body 16px)
- **Farben:** Basis #FFFFFF, Akzent #00FF7F (Neongrün), Kontrast #FFEB3B (Icons)

## 6. GBP-Optimierung
- Wöchentliche Posts (neue Objekte / Tipps)
- Automatisierung: Make / Zapier / n8n → Propstack → GBP-Post
- Timeline: 2–4 Wochen erste Sichtbarkeit, 4–6 Monate Top 3 (bei Reviews)

## 7. Tracking & Reporting
- GA4 + Events (lead, source via UTM)
- Search Console (Impressions, Positionen)
- Looker Studio Dashboard
- Monatliche Lead-Meldung vom Kunden

## 8. Preisstruktur (Retainer-Modell)
- **Einmalig:** 1.500 € (Website-Remake + Setup)
- **Retainer:** 250 € / Monat (mind. 12 Monate für SEO & Wartung)
- **Zusatzoptionen:**
  - Performance-Marketing: +100–400 € (Ads Budget/Management)
  - Virtual Staging: +50 € (alle Objekte inklusive bis 5/Monat via Collov AI/Pedra)
  - AI-Tools: +50 € (Chatbot, Texte, Staging-Calls)

## 9. Premium-Retainer & Upsells
- **Premium (300–3.000 €/Monat):** Voll-Lead-Pipeline, KI-Chatbot, wöchentlicher Markt-Report, Social-Content-Service
- **Zusatzprodukte:**
  - Preis-Alarm (40 € Setup + 20 €/Monat)
  - Lead-Pop-up nach 5s (150 € Setup + 25 €/Monat)
  - Automatisierte Exposé-PDFs (20 € / Stück)
  - Instagram-Feed-Embed (80 € einmalig)

## 10. Technische Basis & Skalierung
- **Stack:** Bun, Dropbox → JSON + Fotos als Datenquelle
- **Infrastruktur:** Cloud Code / Serverless (Vercel) für Generierung & Sync
- **Automatisierung:** Cron-Jobs für Reports / Alarme / Sync
- **Skalierung:** Geografische Silos (z. B. `erlangen.maklercloud.de`, `nuernberg.maklercloud.de`)
- **Dashboard:** Zentrales Management für Leads, Retainer und Status.