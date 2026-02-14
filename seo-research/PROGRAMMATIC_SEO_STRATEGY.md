# Programmatic SEO Strategie: WEID Immobilien

Dieser Plan beschreibt die Skalierung der Sichtbarkeit für WEID Immobilien durch automatisierte, aber hochwertige Inhaltsseiten.

## 1. Keyword-Cluster & Variablen

Wir fokussieren uns auf drei Haupt-Säulen, die für einen Erlanger Makler den höchsten ROI (Leads für Verkäufer) bieten.

### Säule A: Stadtteil-Spezifischer Verkauf (Local-Intent)
*   **Keyword-Muster:** `[Immobilientyp] verkaufen [Stadtteil] Erlangen`
*   **Variablen:**
    *   **Immobilientyp:** Haus, Wohnung, Grundstück, Mehrfamilienhaus
    *   **Stadtteil:** Burgberg, Sieglitzhof, Tennenlohe, Alterlangen, Frauenaurach, Büchenbach, Bruck, Eltersdorf, Dechsendorf, Kriegenbrunn, Hüttendorf, Kosbach
*   **Ziel:** Verkäufer abfangen, die lokal nach Expertise suchen.

### Säule B: Immobilienpreise & Marktberichte (Information-Intent)
*   **Keyword-Muster:** `Immobilienpreise [Stadtteil] Erlangen [Jahr]`
*   **Variablen:**
    *   **Stadtteil:** (siehe oben)
    *   **Jahr:** 2025, 2026
*   **Ziel:** Eigentümer in der Orientierungsphase binden.

### Säule C: Wertermittlung (High-Intent)
*   **Keyword-Muster:** `[Immobilientyp] bewerten [Stadtteil] Erlangen`
*   **Variablen:**
    *   **Immobilientyp:** (siehe Säule A)
    *   **Stadtteil:** (siehe oben)
*   **Ziel:** Direkte Überleitung zum Wertermittlungstool.

---

## 2. Seiten-Architektur (Templates)

Um "Thin Content" zu vermeiden, nutzen wir das **"Modular Content Template"** aus unserem `seo-master` Skill.

### Statische Elemente (auf jeder pSEO Seite):
*   WEID Expertise-Vorteile (Regionalität, Propstack-Anbindung, Full-Service).
*   Interaktives Wertermittlungs-Widget.
*   Kontakt-Sektion mit lokalem Ansprechpartner.

### Dynamische Elemente (pro Stadtteil/Typ):
*   **Daten-Punkte:** Aktuelle Durchschnittspreise pro m² (aus Marktberichten).
*   **Lokaler Bezug:** Erwähnung von markanten Punkten (z.B. "Nähe Siemens Campus" bei Bruck, "Exklusive Lagen" bei Burgberg).
*   **Interne Verlinkung:** "Aktuelle Angebote in [Stadtteil]" (Live-Feed aus Propstack).

---

## 3. Implementierungs-Fahrplan

### Schritt 1: Daten-Grundlage (Woche 1)
*   Erstellung einer `locations.json` mit Stadtteil-Daten (PLZ, Charakteristika, Preis-Indizes).
*   Nutzung des `seo-master` Skills zur Generierung von Content-Bausteinen für jeden Stadtteil.

### Schritt 2: Next.js Dynamic Routes (Woche 2)
*   Anlegen von `/src/app/verkaufen/[type]-verkaufen-[slug]/page.tsx`
*   Anlegen von `/src/app/marktbericht/erlangen-[slug]/page.tsx`

### Schritt 3: Humanizing & Qualität (Woche 3)
*   Durchlauf aller generierten Texte durch den `humanizer` Skill, um den WEID-Tonfall (hochwertig, persönlich, unaufdringlich) sicherzustellen.

---

## 4. Beispiel-URL Struktur

*   `weid-immobilien.de/verkaufen/haus-verkaufen-burgberg`
*   `weid-immobilien.de/verkaufen/wohnung-verkaufen-tennenlohe`
*   `weid-immobilien.de/marktbericht/erlangen-sieglitzhof`

---

## 5. Erfolgskontrolle (Analytics)

*   Tracking von Pageviews pro Stadtteil-Seite.
*   Conversion-Rate: Wie viele Nutzer starten die Wertermittlung von einer pSEO-Seite aus?
