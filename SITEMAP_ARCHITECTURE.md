# Website-Architektur: WEID Immobilien

Diese Sitemap zeigt die geplante Seitenstruktur als Flowchart. Das Diagramm wird direkt in GitHub gerendert (Mermaid-Format).

## Haupt-Sitemap

```mermaid
flowchart TD
    HOME["🏠 Homepage<br/>/"]
    
    %% Hauptnavigation
    HOME --> VERKAUFEN["💰 Verkaufen<br/>/verkaufen"]
    HOME --> KAUFEN["🔑 Kaufen<br/>/kaufen"]
    HOME --> IMMOBILIEN["🏘️ Immobilien<br/>/immobilien"]
    HOME --> WERTERMITTLUNG["📊 Wertermittlung<br/>/wertermittlung"]
    HOME --> RATGEBER["📚 Ratgeber<br/>/ratgeber"]
    HOME --> UEBER["👥 Über uns<br/>/ueber-uns"]
    HOME --> KONTAKT["📞 Kontakt<br/>/kontakt"]

    %% Verkaufen Unterseiten
    VERKAUFEN --> V_HAUS["Haus verkaufen<br/>/verkaufen/haus"]
    VERKAUFEN --> V_WOHNUNG["Wohnung verkaufen<br/>/verkaufen/wohnung"]
    VERKAUFEN --> V_GRUNDSTUECK["Grundstück verkaufen<br/>/verkaufen/grundstueck"]
    VERKAUFEN --> V_GEWERBE["Gewerbe verkaufen<br/>/verkaufen/gewerbe"]

    %% Kaufen Unterseiten
    KAUFEN --> K_HAEUSER["Häuser<br/>/kaufen/haeuser"]
    KAUFEN --> K_WOHNUNGEN["Wohnungen<br/>/kaufen/wohnungen"]
    KAUFEN --> K_GRUNDSTUECKE["Grundstücke<br/>/kaufen/grundstuecke"]
    KAUFEN --> K_GEWERBE["Gewerbe<br/>/kaufen/gewerbe"]

    %% Immobilien (Propstack-Feed)
    IMMOBILIEN --> IMM_DETAIL["📄 Objektdetail<br/>/immobilien/[id]"]

    %% Über uns
    UEBER --> TEAM["Team<br/>/ueber-uns/team"]
    UEBER --> KARRIERE["Karriere<br/>/ueber-uns/karriere"]
```

## Stadtteil-Seiten (Local SEO)

```mermaid
flowchart TD
    HOME["🏠 Homepage"] --> STADTTEILE["📍 Stadtteile<br/>/stadtteil"]
    
    STADTTEILE --> ST_BURGBERG["Burgberg<br/>/stadtteil/burgberg"]
    STADTTEILE --> ST_SIEGLITZ["Sieglitzhof<br/>/stadtteil/sieglitzhof"]
    STADTTEILE --> ST_TENNENLOHE["Tennenlohe<br/>/stadtteil/tennenlohe"]
    STADTTEILE --> ST_ALTERLANGEN["Alterlangen<br/>/stadtteil/alterlangen"]
    STADTTEILE --> ST_FRAUENAURACH["Frauenaurach<br/>/stadtteil/frauenaurach"]
    STADTTEILE --> ST_BUECHENBACH["Büchenbach<br/>/stadtteil/buechenbach"]
    STADTTEILE --> ST_BRUCK["Bruck<br/>/stadtteil/bruck"]
    STADTTEILE --> ST_ELTERSDORF["Eltersdorf<br/>/stadtteil/eltersdorf"]

    %% Jede Stadtteil-Seite verlinkt auf Objekte
    ST_BURGBERG -.-> IMM["🏘️ Immobilien<br/>in diesem Stadtteil"]
    ST_SIEGLITZ -.-> IMM
    ST_TENNENLOHE -.-> IMM
```

## Ratgeber-Struktur (Content Marketing)

```mermaid
flowchart TD
    HOME["🏠 Homepage"] --> RATGEBER["📚 Ratgeber<br/>/ratgeber"]
    
    %% Kategorien
    RATGEBER --> R_VERKAUF["Verkauf-Tipps"]
    RATGEBER --> R_KAUF["Kauf-Tipps"]
    RATGEBER --> R_MARKT["Marktberichte"]
    RATGEBER --> R_RECHT["Recht & Steuern"]

    %% Artikel unter Verkauf
    R_VERKAUF --> A1["Haus verkaufen:<br/>7 Schritte zum Erfolg"]
    R_VERKAUF --> A2["Wohnung bewerten:<br/>So geht's richtig"]
    R_VERKAUF --> A3["Erbimmobilie verkaufen"]

    %% Artikel unter Markt
    R_MARKT --> M1["Immobilienpreise<br/>Erlangen 2026"]
    R_MARKT --> M2["Preisentwicklung<br/>Nürnberg Region"]

    %% Artikel unter Recht
    R_RECHT --> L1["Energetische Sanierung<br/>& Förderung"]
    R_RECHT --> L2["Grunderwerbsteuer<br/>Bayern"]
```

## User Journey: Verkäufer

```mermaid
flowchart LR
    A["🔍 Google Suche<br/>'Haus verkaufen Erlangen'"] --> B["🏠 Landing Page<br/>/verkaufen"]
    B --> C["📊 Wertermittlung<br/>/wertermittlung"]
    C --> D["📝 Lead-Formular<br/>ausgefüllt"]
    D --> E["📞 Kontaktaufnahme<br/>durch WEID"]
    E --> F["🤝 Maklervertrag"]

    style A fill:#f9f,stroke:#333
    style D fill:#9f9,stroke:#333
    style F fill:#9f9,stroke:#333
```

## User Journey: Käufer

```mermaid
flowchart LR
    A["🔍 Google Suche<br/>'Wohnung kaufen Erlangen'"] --> B["🏘️ Objektübersicht<br/>/immobilien"]
    B --> C["📄 Objektdetail<br/>/immobilien/[id]"]
    C --> D["📞 Anfrage senden"]
    D --> E["📅 Besichtigung"]
    E --> F["🔑 Kaufabschluss"]

    style A fill:#f9f,stroke:#333
    style D fill:#9f9,stroke:#333
    style F fill:#9f9,stroke:#333
```

## Gesamtstruktur (Übersicht)

```mermaid
flowchart TB
    subgraph NAV["Hauptnavigation"]
        HOME["🏠 Home"]
        VERKAUFEN["💰 Verkaufen"]
        KAUFEN["🔑 Kaufen"]
        IMMOBILIEN["🏘️ Immobilien"]
        WERTERMITTLUNG["📊 Wertermittlung"]
        RATGEBER["📚 Ratgeber"]
        UEBER["👥 Über uns"]
        KONTAKT["📞 Kontakt"]
    end

    subgraph LOCAL["Local SEO"]
        STADTTEILE["📍 8 Stadtteil-Seiten"]
    end

    subgraph CONTENT["Content Marketing"]
        ARTIKEL["📝 10+ Ratgeber-Artikel"]
    end

    subgraph DYNAMIC["Dynamischer Content (Propstack)"]
        OBJEKTE["🏠 Objektseiten"]
    end

    NAV --> LOCAL
    NAV --> CONTENT
    NAV --> DYNAMIC

    style NAV fill:#e1f5fe
    style LOCAL fill:#fff3e0
    style CONTENT fill:#f3e5f5
    style DYNAMIC fill:#e8f5e9
```

---

## Technische Hinweise

### URL-Struktur
- Alle URLs in Kleinbuchstaben
- Bindestriche statt Unterstriche
- Keine Umlaute in URLs (ä → ae, ö → oe, ü → ue)
- Beispiel: `/stadtteil/buechenbach` statt `/stadtteil/büchenbach`

### Empfohlene Seitenanzahl für Launch
| Kategorie | Anzahl Seiten |
|-----------|---------------|
| Hauptseiten | 7 |
| Stadtteil-Seiten | 8 |
| Ratgeber-Artikel | 5 (Start) |
| **Gesamt MVP** | **~20 Seiten** |

### Priorisierung
1. ⭐⭐⭐ Homepage, Verkaufen, Wertermittlung, Kontakt
2. ⭐⭐ Stadtteil-Seiten (Burgberg, Sieglitzhof, Tennenlohe)
3. ⭐ Ratgeber-Artikel, weitere Stadtteile
