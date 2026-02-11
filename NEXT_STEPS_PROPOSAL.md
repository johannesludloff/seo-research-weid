# Nächste Schritte: WEID Immobilien Projekt

## Status Quo

### ✅ Abgeschlossen
- [x] SEO-Recherche & Wettbewerber-Analyse
- [x] Keyword-Strategie
- [x] Content-Strategie (3-Monats-Plan)
- [x] Website-Architektur (Sitemap Flowcharts)
- [x] Implementierungs-Phasen mit Stunden-Schätzung
- [x] Backlink-Strategie
- [x] Client-Onboarding-Tool erstellt

---

## 📋 Empfohlene nächste Schritte

### Schritt 1: Kundenbriefing abschließen
**Wer:** Joe + WEID Immobilien  
**Was:** 
- Client-Onboarding-Formular ausfüllen lassen ([client-onboarding App](https://github.com/johannesludloff/client-onboarding))
- Oder: Persönliches Kickoff-Meeting mit den offenen Fragen

**Offene Punkte vom Kunden benötigt:**
| Thema | Frage | Status |
|-------|-------|--------|
| Domain | Bestehende Domain behalten oder neue? | ⬜ Offen |
| Email | Gibt es E-Mail-Adressen auf der Domain? | ⬜ Offen |
| Hosting | Präferenz für Hosting-Anbieter? | ⬜ Offen |
| Propstack | API-Zugangsdaten vorhanden? | ⬜ Offen |
| Design | In welchem Format liefert die Designerin? (Figma?) | ⬜ Offen |
| Content | Wer schreibt die Texte für die Seiten? | ⬜ Offen |
| Tracking | Facebook/Google Ads Accounts vorhanden? | ⬜ Offen |
| Timeline | Gewünschter Launch-Termin? | ⬜ Offen |
| Budget | Budget-Rahmen für Stage 1? | ⬜ Offen |

---

### Schritt 2: Angebot erstellen
**Wer:** Joe  
**Was:** Basierend auf den Implementierungs-Stages ein formelles Angebot erstellen

**Vorgeschlagene Struktur:**
```
Angebot: Website-Entwicklung WEID Immobilien

Paket 1: MVP Launch (Stage 1)
- 7 Hauptseiten inkl. Propstack-Integration
- DSGVO-Compliance & Tracking
- Geschätzt: 54-73 Stunden
- Preis: [Stundensatz x Stunden] oder Pauschal

Optionale Erweiterungen:
- Paket 2: Local SEO (8 Stadtteil-Seiten) — 24-32h
- Paket 3: Content Marketing (Blog + Ratgeber) — 28-38h
- Paket 4: Conversion-Optimierung — 41-53h
```

---

### Schritt 3: Design-Assets erhalten
**Wer:** Joe ↔ Designerin  
**Was:**
- Design-Dateien anfordern (idealerweise Figma)
- Style Guide (Farben, Fonts, Abstände)
- Logo in verschiedenen Formaten (SVG, PNG)
- Bildmaterial / Stockfotos

**Deliverables von der Designerin:**
- [ ] Homepage Design
- [ ] Unterseiten-Templates
- [ ] Mobile Responsive Designs
- [ ] Logo & Favicon
- [ ] Style Guide

---

### Schritt 4: Technisches Setup
**Wer:** Alfred (oder Codex)  
**Was:**
- GitHub Repository für das Projekt erstellen
- Next.js Projekt aufsetzen
- Tailwind CSS konfigurieren
- Propstack API Verbindung testen
- Vercel/Hosting-Account vorbereiten

**Kann vorbereitet werden sobald:**
- Propstack API-Zugangsdaten vorliegen
- Design-Richtung bekannt ist

---

### Schritt 5: Entwicklung Stage 1
**Wer:** Codex / Claude Code / Joe  
**Reihenfolge:**

| Woche | Aufgaben |
|-------|----------|
| 1 | Projekt-Setup, Homepage, Layout-Komponenten |
| 2 | Propstack-Integration, Immobilienliste |
| 3 | Objektdetail-Seiten, Verkaufen-Seite |
| 4 | Wertermittlung, Kontakt, Über uns |
| 5 | DSGVO, Tracking, Testing |
| 6 | Launch & Go-Live |

---

### Schritt 6: Nach dem Launch
**Wer:** Joe + WEID  
**Was:**
- Google Search Console verifizieren
- Backlinks einrichten (Priorität 1 aus Strategie)
- Google Business Profile optimieren
- Erste Bewertungen sammeln
- Optional: Stage 2-4 beauftragen

---

## 🎯 Empfehlung: Sofort-Aktionen

### Diese Woche
1. **Onboarding-Link an WEID senden**
   - Client-Onboarding App deployen (z.B. auf Vercel)
   - Link an den Kunden schicken
   
2. **Kickoff-Call vereinbaren**
   - Offene Fragen persönlich klären
   - Timeline abstimmen

3. **Design-Status erfragen**
   - Wann sind die Designs fertig?
   - In welchem Format?

### Nächste Woche
4. **Angebot erstellen & versenden**
   - Basierend auf den Stages
   - Mit klarem Scope & Timeline

5. **Nach Auftragserteilung:**
   - Propstack-Zugang erhalten
   - GitHub Repo erstellen
   - Entwicklung starten

---

## 💰 Grobe Kostenübersicht (zur Orientierung)

| Paket | Stunden | Bei 100€/h | Bei 95€/h |
|-------|---------|------------|-----------|
| Stage 1 (MVP) | ~65h | 6.500€ | 6.175€ |
| Stage 2 (Local SEO) | ~28h | 2.800€ | 2.660€ |
| Stage 3 (Content) | ~33h | 3.300€ | 3.135€ |
| Stage 4 (Conversion) | ~47h | 4.700€ | 4.465€ |
| **Gesamt (alle Stages)** | **~173h** | **17.300€** | **16.435€** |

*Hinweis: Finale Kalkulation nach Klärung aller Anforderungen.*

---

## ❓ Offene Entscheidungen

| Frage | Optionen | Empfehlung |
|-------|----------|------------|
| Hosting | Vercel, Hetzner, Eigenes | Vercel (einfach, schnell) |
| CMS für Ratgeber | Headless CMS, Notion, Manuell | Notion als Backend (günstig) |
| Formular-Backend | Eigenes API, Formspree, Typeform | Eigenes API (mehr Kontrolle) |
| Cookie-Consent | Cookiebot, Usercentrics, Eigenes | Cookiebot (bewährt) |
