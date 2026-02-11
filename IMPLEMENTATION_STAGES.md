# Implementierungs-Phasen: WEID Immobilien Website

Dieses Dokument teilt die Website-Entwicklung und SEO-Strategie in klar abgegrenzte Phasen ein. **Stage 1** ist das Pflichtpaket für den Launch. **Stage 2–4** sind optionale Erweiterungspakete.

---

## 🚀 Stage 1: MVP Launch (Pflicht)

> **Ziel:** Funktionierende Website mit den wichtigsten Seiten, Propstack-Anbindung und rechtlicher Absicherung.

### Seiten (7 Stück)
| Seite | URL | Beschreibung |
|-------|-----|--------------|
| Homepage | `/` | Hero, USPs, aktuelle Objekte, CTAs |
| Verkaufen | `/verkaufen` | Landing Page für Eigentümer |
| Immobilien | `/immobilien` | Objektübersicht (Propstack-Feed) |
| Objektdetail | `/immobilien/[id]` | Dynamische Detailseiten |
| Wertermittlung | `/wertermittlung` | Lead-Formular für Bewertungsanfragen |
| Über uns | `/ueber-uns` | Team, Geschichte, Vertrauen |
| Kontakt | `/kontakt` | Formular, Adresse, Karte |

### Technische Komponenten
- ✅ Next.js Setup mit Tailwind CSS
- ✅ Propstack API Integration (Objektliste + Details)
- ✅ Responsives Design (Mobile-First)
- ✅ Kontaktformular mit E-Mail-Versand
- ✅ Lead-Formular für Wertermittlung

### Rechtliche Pflichtseiten
- ✅ Impressum
- ✅ Datenschutzerklärung
- ✅ Cookie-Consent-Banner (DSGVO-konform)

### Tracking (Basis)
- ✅ Google Analytics 4 (mit Consent)
- ✅ Facebook Pixel (mit Consent)
- ✅ Google Tag Manager Setup

### SEO Grundlagen
- ✅ Meta-Titles & Descriptions für alle Seiten
- ✅ Open Graph Tags (Social Sharing)
- ✅ XML Sitemap
- ✅ robots.txt
- ✅ Google Search Console Verifizierung

### Geschätzter Aufwand
| Bereich | Stunden |
|---------|---------|
| Frontend-Entwicklung | 25–35h |
| Propstack-Integration | 15–20h |
| DSGVO/Tracking | 6–8h |
| Testing & Launch | 8–10h |
| **Gesamt Stage 1** | **54–73h** |

---

## 📍 Stage 2: Local SEO Paket (Optional)

> **Ziel:** Besseres Ranking für lokale Suchanfragen durch Stadtteil-Seiten.

### Seiten (8 Stück)
| Stadtteil | URL |
|-----------|-----|
| Burgberg | `/stadtteil/burgberg` |
| Sieglitzhof | `/stadtteil/sieglitzhof` |
| Tennenlohe | `/stadtteil/tennenlohe` |
| Alterlangen | `/stadtteil/alterlangen` |
| Frauenaurach | `/stadtteil/frauenaurach` |
| Büchenbach | `/stadtteil/buechenbach` |
| Bruck | `/stadtteil/bruck` |
| Eltersdorf | `/stadtteil/eltersdorf` |

### Inhalt pro Stadtteil-Seite
- Beschreibung des Stadtteils (300–500 Wörter)
- Durchschnittspreise (automatisch aus Propstack oder manuell)
- Aktuelle Objekte in diesem Stadtteil (gefilterte Propstack-Anzeige)
- Infrastruktur-Infos (Schulen, ÖPNV, Einkaufen)
- Lokales Bildmaterial

### SEO-Vorteile
- Ranking für Long-Tail Keywords ("Wohnung kaufen Tennenlohe")
- Interne Verlinkung stärkt die Gesamtdomain
- Lokale Relevanz für Google

### Geschätzter Aufwand
| Bereich | Stunden |
|---------|---------|
| Template-Entwicklung | 8–10h |
| Content-Erstellung (8 Seiten) | 12–16h |
| Propstack-Filter Integration | 4–6h |
| **Gesamt Stage 2** | **24–32h** |

---

## 📚 Stage 3: Content Marketing Paket (Optional)

> **Ziel:** Authority-Aufbau durch Ratgeber-Artikel und Marktberichte.

### Seiten
| Artikel | URL | Keyword-Fokus |
|---------|-----|---------------|
| Ratgeber-Übersicht | `/ratgeber` | Hub für alle Artikel |
| Haus verkaufen: 7 Schritte | `/ratgeber/haus-verkaufen-erlangen` | "Haus verkaufen Erlangen" |
| Wohnung bewerten: So geht's | `/ratgeber/wohnung-bewerten-tipps` | "Wohnung bewerten" |
| Immobilienpreise Erlangen 2026 | `/ratgeber/immobilienpreise-erlangen-2026` | "Immobilienpreise Erlangen" |
| Erbimmobilie verkaufen | `/ratgeber/erbimmobilie-verkaufen` | "Erbschaft Immobilie" |
| Energetische Sanierung | `/ratgeber/energetische-sanierung-foerderung` | "Sanierung Förderung Bayern" |

### Content-Spezifikationen
- 800–1.500 Wörter pro Artikel
- Strukturiert mit H2/H3-Überschriften
- Interne Links zu relevanten Seiten (Wertermittlung, Kontakt)
- Call-to-Action am Ende jedes Artikels

### Lead-Magneten
- PDF-Download: "Verkäufer-Checkliste"
- PDF-Download: "Marktbericht Erlangen 2026"
- Newsletter-Anmeldung

### Geschätzter Aufwand
| Bereich | Stunden |
|---------|---------|
| Blog-Template Entwicklung | 6–8h |
| Content-Erstellung (5 Artikel) | 15–20h |
| PDF-Erstellung (2 Stück) | 4–6h |
| Newsletter-Integration | 3–4h |
| **Gesamt Stage 3** | **28–38h** |

---

## 🎯 Stage 4: Conversion-Optimierung (Optional)

> **Ziel:** Mehr Leads durch bessere User Experience und erweiterte Funktionen.

### Erweiterte Features
| Feature | Beschreibung |
|---------|--------------|
| Interaktiver Immobilienrechner | Online-Tool zur groben Wertschätzung |
| Käufer-Suchprofil | Nutzer können Suchkriterien speichern |
| Benachrichtigungen | E-Mail bei neuen passenden Objekten |
| Video-Integration | Vorstellungsvideos auf der Homepage |
| Virtuelle Touren | 360°-Ansichten für Objekte (falls verfügbar) |
| Live-Chat | WhatsApp oder Intercom Integration |

### Performance & Analytics
- A/B-Testing Setup
- Heatmaps (Hotjar/Microsoft Clarity)
- Conversion-Tracking verfeinern
- Core Web Vitals Optimierung

### Erweiterte SEO
| Maßnahme | Beschreibung |
|----------|--------------|
| Backlink-Aufbau | Lokale Verzeichnisse, Partnerschaften |
| Google Business Profile | Optimierung & regelmäßige Posts |
| Schema Markup erweitert | FAQPage, HowTo, Review |
| Weitere Ratgeber-Artikel | +5 Artikel pro Quartal |

### Geschätzter Aufwand
| Bereich | Stunden |
|---------|---------|
| Interaktiver Rechner | 15–20h |
| Suchprofil & Benachrichtigungen | 12–15h |
| Video/Tour Integration | 6–8h |
| Analytics & Testing | 8–10h |
| **Gesamt Stage 4** | **41–53h** |

---

## 📊 Übersicht aller Stages

| Stage | Inhalt | Stunden | Priorität |
|-------|--------|---------|-----------|
| **Stage 1** | MVP Launch | 54–73h | 🔴 Pflicht |
| **Stage 2** | Local SEO (Stadtteile) | 24–32h | 🟡 Empfohlen |
| **Stage 3** | Content Marketing | 28–38h | 🟡 Empfohlen |
| **Stage 4** | Conversion-Optimierung | 41–53h | 🟢 Optional |

### Empfohlene Reihenfolge
```
Stage 1 (Launch) → Stage 2 (Local SEO) → Stage 3 (Content) → Stage 4 (Conversion)
```

### Zeitlicher Rahmen
| Stage | Empfohlener Zeitpunkt |
|-------|----------------------|
| Stage 1 | Sofort (Website-Launch) |
| Stage 2 | 2–4 Wochen nach Launch |
| Stage 3 | 1–2 Monate nach Launch |
| Stage 4 | 3–6 Monate nach Launch |

---

## 💰 Hinweis zur Kalkulation

Die Stundenangaben sind Schätzungen und können je nach:
- Komplexität der Propstack-API
- Umfang des bereitgestellten Contents (Texte, Bilder)
- Anzahl der Feedback-Runden

variieren. Eine detaillierte Kalkulation erfolgt nach Freigabe des jeweiligen Stage-Pakets.
