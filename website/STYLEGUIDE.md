# Styleguide — Corporate Identity

*Abgeleitet aus Moodboard 3 · Ausführliche Richtlinien für digitale Anwendungen*

---

## 1. Designphilosophie

Das visuelle Erscheinungsbild folgt dem Prinzip **Warm Minimalism** — einer Ästhetik, die reduzierte Klarheit mit einer einladenden, materiellen Wärme verbindet. Die Gestaltung orientiert sich an der Bildsprache europäischer Editorials, Architektur- und Interior-Design-Magazine. Luxus wird nicht durch Überladung kommuniziert, sondern durch bewussten Umgang mit Raum, Proportion und Materialität.

**Drei Leitsätze:**

- **Reduktion mit Substanz** — Jedes Element hat eine Funktion. Dekoration entsteht durch Typografie, Weißraum und Bildkomposition, nicht durch Ornamente.
- **Warme Eleganz** — Die Farbwelt ist erdverbunden und natürlich. Schwarz schafft Kontrast und Autorität, warme Neutraltöne vermitteln Nähe und Raffinesse.
- **Editorialer Anspruch** — Layouts folgen einer magazinartigen Logik: große Typografie als Gestaltungselement, asymmetrische aber ausbalancierte Kompositionen, bewusster Wechsel zwischen Dichte und Leere.

---

## 2. Farbpalette

### 2.1 Primärfarben

| Farbe | Name | HEX | RGB | Verwendung |
|-------|------|-----|-----|------------|
| ◼ | **Noir** | `#1A1A1A` | 26, 26, 26 | Haupttextfarbe, Headlines, Akzentflächen |
| ◻ | **Ivory** | `#F5F0EA` | 245, 240, 234 | Primärer Hintergrund, Weißraum |
| ◧ | **Warm Sand** | `#C8B9A5` | 200, 185, 165 | Sekundärer Hintergrund, Flächen, Trennelemente |

### 2.2 Sekundärfarben

| Farbe | Name | HEX | RGB | Verwendung |
|-------|------|-----|-----|------------|
| ◧ | **Taupe** | `#9A8A78` | 154, 138, 120 | UI-Elemente, Subtext, deaktivierte Zustände |
| ◧ | **Espresso** | `#5C4A3A` | 92, 74, 58 | Akzente, Hover-States, sekundäre Headlines |
| ◧ | **Parchment** | `#E8E0D4` | 232, 224, 212 | Kartenhintergründe, Input-Felder, Sektionswechsel |

### 2.3 Akzentfarbe (sparsam einsetzen)

| Farbe | Name | HEX | RGB | Verwendung |
|-------|------|-----|-----|------------|
| ◧ | **Sage** | `#8A9A7E` | 138, 154, 126 | Einzelne Akzente, Erfolgszustände, Bildunterstützung |

### 2.4 Farbverhältnisse

Die Farbverteilung auf einer typischen Seite sollte folgendem Verhältnis entsprechen:

- **60 %** — Ivory / Parchment (Hintergrund, Weißraum)
- **25 %** — Noir (Typografie, grafische Elemente)
- **10 %** — Warm Sand / Taupe (Flächen, Trennelemente)
- **5 %** — Espresso / Sage (Akzente)

### 2.5 Farbregeln

- Schwarz-auf-Creme ist die Standard-Textdarstellung. Reines Weiß (`#FFFFFF`) wird vermieden — stattdessen immer Ivory oder Parchment nutzen.
- Kontrastverhältnisse für Barrierefreiheit einhalten: Noir auf Ivory erreicht ein Kontrastverhältnis von ca. 14:1 (WCAG AAA).
- Farbflächen (z. B. Warm Sand) werden großzügig und flächig eingesetzt, nie als schmale Streifen oder Linien.

---

## 3. Typografie

### 3.1 Schriftfamilien

| Rolle | Schrift (Empfehlung) | Alternativen | Stil |
|-------|---------------------|--------------|------|
| **Display / Headlines** | **Freight Display Pro** | Playfair Display, Noto Serif Display, Cormorant Garamond | Serifenbetont, editorial, kontrastreich |
| **Body / Fließtext** | **Söhne** (Klim Type) | Inter, Helvetica Neue, Neue Haas Grotesk | Grotesk, clean, gut lesbar |
| **Akzent / Labels** | **Söhne Mono** | JetBrains Mono, SF Mono | Monospace, technisch, für Details |

*Hinweis: Bei Verwendung von Google Fonts sind Cormorant Garamond (Display) und Inter (Body) die empfohlenen kostenlosen Alternativen.*

### 3.2 Typografische Skala (Desktop)

| Element | Größe | Gewicht | Zeilenabstand | Laufweite |
|---------|-------|---------|---------------|-----------|
| Hero-Headline | 72–120 px | Light / Regular | 0.9–1.0 em | -0.02 em |
| H1 | 48–64 px | Regular | 1.1 em | -0.02 em |
| H2 | 32–40 px | Regular | 1.15 em | -0.01 em |
| H3 | 24–28 px | Medium | 1.2 em | 0 |
| Body Large | 20 px | Regular | 1.6 em | 0 |
| Body | 16–17 px | Regular | 1.65 em | 0.01 em |
| Caption / Label | 12–13 px | Medium | 1.4 em | 0.08 em |
| Navigation | 14–15 px | Medium | 1.0 em | 0.05–0.12 em |

### 3.3 Typografische Skala (Mobile)

Alle Größen um ca. 20–30 % reduzieren. Hero-Headlines: 36–48 px. Body bleibt bei 16 px als Minimum.

### 3.4 Typografische Regeln

- **Headlines als Gestaltungselement**: Große Display-Schrift wird bewusst als visuelles Gestaltungsmittel eingesetzt — nicht nur zur Informationshierarchie, sondern auch zur Raumgestaltung.
- **Versalien für Labels**: Navigation, Kategorien und Metadaten in Versalien (Uppercase) mit erweiterter Laufweite (Letter-Spacing: 0.08–0.12 em).
- **Kursiv für Betonung**: Kursive Serifenschrift wird gezielt für editoriale Akzente eingesetzt — z. B. Zitate, Slogans oder einzelne Worte in Headlines (wie „of" in „Echoes of Elegance").
- **Kontrast durch Gewicht**: Die Mischung aus Light/Regular-Serifenschrift (Display) und Medium-Grotesk (Body) erzeugt eine bewusste Spannung.
- **Keine Unterstreichungen** für Links. Stattdessen: Farbwechsel oder dezenter Hover-Effekt.

---

## 4. Bildsprache

### 4.1 Fotografie-Stil

Die Bildsprache folgt einer warmen, editorialen Ästhetik mit klarem Fokus auf Materialität, Licht und Raum.

**Lichtstimmung:**
Natürliches, warmes Licht ist der Standard. Bevorzugt wird weiches Seitenlicht oder diffuses Tageslicht. Harte Blitzlichtaufnahmen oder kühle Studiobeleuchtung werden vermieden.

**Farbcharakter:**
Fotos werden in einer warmen, leicht entsättigten Tonalität gehalten. Schwarzpunkt leicht angehoben (matte Schatten), Highlights warm. Die Farbtemperatur liegt im Bereich 5500–6500K mit leichtem Warm-Shift in der Nachbearbeitung.

**Motive:**

- *Architektur & Interieur*: Ruhige, lichtdurchflutete Innenräume. Fokus auf Materialien (Holz, Stein, Textil), Proportionen und Details. Keine überinszenierten Showrooms.
- *Porträts*: Natürliche, ungestellte Stimmung. Warme Hauttöne, ruhiger Blick. Die Personen wirken reflektiert und souverän, nie aufdringlich oder übertrieben posierend.
- *Details & Stillleben*: Nahaufnahmen von Oberflächen, Materialien und Objekten. Die Schönheit liegt im Alltäglichen.

### 4.2 Bildbearbeitung — Referenzwerte

| Parameter | Richtung | Intensität |
|-----------|----------|------------|
| Belichtung | leicht überbelichtet | +0.3 bis +0.5 |
| Kontrast | reduziert | -10 bis -20 |
| Highlights | abgesenkt | -20 bis -40 |
| Schatten | angehoben | +20 bis +40 |
| Weißabgleich | warm | +5 bis +10 (Temp) |
| Sättigung | leicht reduziert | -10 bis -15 |
| Körnung | subtil | 15–25 (Lightroom) |

### 4.3 Don'ts — Bildsprache

- Keine kühlen, blaustichigen Bilder
- Keine Stockfoto-Ästhetik (überbelichtete Büros, gestelltes Lächeln)
- Keine HDR-Effekte oder übertrieben bearbeitete Bilder
- Keine Collagen oder Fotomontagen
- Keine Bilder mit dominanten, gesättigten Farben

---

## 5. Layout & Komposition

### 5.1 Grid-System

Das Layout basiert auf einem **12-Spalten-Grid** mit folgenden Parametern:

| Parameter | Desktop (1440px) | Tablet (768px) | Mobile (375px) |
|-----------|------------------|-----------------|-----------------|
| Spalten | 12 | 8 | 4 |
| Gutter | 24 px | 20 px | 16 px |
| Margin (außen) | 80–120 px | 40 px | 20 px |

### 5.2 Kompositionsprinzipien

**Großzügiger Weißraum**: Der Weißraum ist ein aktives Gestaltungselement, kein Rest. Zwischen Sektionen mindestens 120–160 px (Desktop). Inhalte „atmen" lassen.

**Asymmetrische Balance**: Layouts müssen nicht symmetrisch sein. Bilder können eine Seite dominieren, während Text auf der gegenüberliegenden Seite Raum bekommt. Die Balance entsteht durch optisches Gewicht, nicht durch Gleichverteilung.

**Full-Bleed meets Contained**: Bilder dürfen den gesamten Viewport ausfüllen (Full-Bleed) oder in klar definierten Containern stehen. Der Wechsel zwischen beiden Modi erzeugt Rhythmus.

**Übergroße Typografie als Fläche**: Headlines können über 50 % der Viewport-Höhe einnehmen. Typografie wird zum grafischen Element.

### 5.3 Abstände — Spacing-System

Auf Basis einer 8px-Einheit:

| Token | Wert | Verwendung |
|-------|------|------------|
| `space-xs` | 8 px | Interne Abstände in Buttons, Tags |
| `space-sm` | 16 px | Abstände zwischen verwandten Elementen |
| `space-md` | 32 px | Abstände innerhalb von Sektionen |
| `space-lg` | 64 px | Abstände zwischen Sektionen |
| `space-xl` | 128 px | Abstände zwischen Hauptbereichen |
| `space-2xl` | 160–200 px | Hero-Bereiche, große Sektionswechsel |

### 5.4 Karten & Container

- Kartenhintergründe in Parchment oder Warm Sand
- Keine sichtbaren Borders — Trennung durch Farbflächen und Abstand
- Ecken: 0 px (scharfe Kanten) oder maximal 4 px Radius
- Kein Drop Shadow. Falls Tiefe nötig: sehr subtiler Box-Shadow mit Warm Sand als Schattenfarbe

---

## 6. UI-Elemente

### 6.1 Buttons

| Typ | Hintergrund | Text | Border | Hover |
|-----|-------------|------|--------|-------|
| **Primary** | Noir `#1A1A1A` | Ivory `#F5F0EA` | keine | Espresso `#5C4A3A` |
| **Secondary** | transparent | Noir `#1A1A1A` | 1px Noir | Noir Hintergrund, Ivory Text |
| **Ghost** | transparent | Taupe `#9A8A78` | keine | Noir Text |

- Button-Padding: 14–18 px vertikal, 28–40 px horizontal
- Schrift: Body-Grotesk, Medium, Uppercase, Letter-Spacing 0.08 em
- Ecken: 0 px (eckig) — passend zur architektonischen Ästhetik
- Transition: 300ms ease-out für alle Zustandsänderungen

### 6.2 Links

- Standard: Noir, kein Underline
- Hover: Espresso, optional dezente Underline-Animation (von links nach rechts einblendend)
- Visited: Taupe

### 6.3 Eingabefelder

- Border-Bottom-Only-Stil (Linie unten, kein vollständiger Rahmen)
- Parchment-Hintergrund oder transparent
- Fokus-Zustand: Border wechselt von Taupe zu Noir
- Placeholder-Text in Taupe, Eingabetext in Noir

### 6.4 Navigation

- Hauptnavigation: Grotesk, Medium, Uppercase, erweiterte Laufweite
- Dezent und zurückhaltend — die Navigation dominiert nie das Layout
- Hamburger-Menü auf Mobile, Full-Screen-Overlay mit großer Display-Typografie

---

## 7. Bewegung & Animation

### 7.1 Grundprinzipien

Animationen sind subtil und dienen der Orientierung, nicht der Unterhaltung. Die Bewegungssprache ist ruhig und bedacht — sie unterstreicht die Markenidentität von warmer Zurückhaltung.

### 7.2 Timing & Easing

| Typ | Dauer | Easing |
|-----|-------|--------|
| Mikro-Interaktionen (Hover, Focus) | 200–300 ms | ease-out |
| Sektionswechsel / Scroll-Reveals | 600–800 ms | cubic-bezier(0.25, 0.1, 0.25, 1) |
| Seitenübergänge | 400–600 ms | ease-in-out |

### 7.3 Scroll-Animationen

- Inhalte faden sanft von unten ein (translate-y: 20–40 px → 0, opacity: 0 → 1)
- Bilder können mit leichtem Parallax-Effekt (max. 10 % Versatz) arbeiten
- Keine Bounce-Effekte, keine Rotation, kein Zoom-In

### 7.4 Don'ts — Animation

- Keine schnellen, abrupten Bewegungen
- Keine aufmerksamkeitsfordernden Pulse- oder Blink-Effekte
- Kein Auto-Play-Video mit Ton
- Keine animierten Hintergründe oder Partikeleffekte

---

## 8. Tonalität & Sprache

### 8.1 Stimme der Marke

Die Markenstimme ist **kultiviert, sachkundig und einladend** — wie ein Gespräch mit jemandem, der viel weiß, aber nie belehrt. Die Kommunikation ist direkt, ohne harsch zu sein; elegant, ohne distanziert zu wirken.

### 8.2 Sprachliche Richtlinien

- **Kurze, klare Sätze** bevorzugen. Jeder Satz trägt Bedeutung.
- **Aktive Sprache** verwenden. „Wir gestalten Räume" statt „Räume werden von uns gestaltet."
- **Fachsprache** ist willkommen, wenn sie dem Verständnis dient — nicht als Showeffekt.
- **Keine Superlative** ohne Substanz. Statt „das Beste" lieber konkret benennen, was etwas auszeichnet.
- **Kein Marketing-Jargon**: Begriffe wie „synergetisch", „innovativ", „cutting-edge" vermeiden.

### 8.3 Headline-Stil

Headlines folgen dem editorialen Muster des Moodboards — sie dürfen poetisch, fragmentarisch oder ungewöhnlich formatiert sein:

- Gut: „Echoes of Elegance" · „Architected to Stand Alone" · „Discover what's possible"
- Vermeiden: „Die 10 besten Tipps für…" · „Jetzt entdecken!" · „Sie werden nicht glauben…"

---

## 9. Social Media — Anwendungshinweise

### 9.1 Instagram / Feed

- Raster-Ästhetik bewahren: Abwechlung zwischen Bild-Posts (Architektur, Detail) und Typografie-Posts (Zitat, Headline auf Parchment-Fläche)
- Keine Neon-Farben, keine Emojis in Bildoverlays
- Captions: kurz, sachlich, mit einem Moment der Reflexion

### 9.2 Stories / Reels

- Gleiche Farbwelt und Typografie wie im statischen Design
- Übergänge: Schnitte oder langsame Überblendungen. Keine Sticker, Konfetti oder GIF-Overlays
- Text-Overlays: Display-Serif auf Halbtransparentem Noir-Hintergrund oder direkt auf Bild

### 9.3 Web / Newsletter

- Header-Bilder: Full-Width, warme Fotografie
- CTA-Buttons: Primary-Style (Noir auf Ivory)
- Footer: Noir-Hintergrund, Ivory-Text, minimalistische Linkstruktur

---

## 10. Do's & Don'ts — Zusammenfassung

### Do's

- Großzügig mit Weißraum umgehen
- Typografie als eigenständiges Gestaltungselement einsetzen
- Warme, natürliche Fotografie mit mattem Finish verwenden
- Konsequent in der Farbwelt bleiben (Noir, Ivory, Sand)
- Editorialen Anspruch in jeder Anwendung aufrechterhalten
- Wenige, aber hochwertige Bilder pro Layout

### Don'ts

- Keine knalligen Farben, Neons oder Gradienten
- Keine abgerundeten Ecken über 4 px
- Keine generischen Stockfotos
- Keine dekorativen Icons oder Illustrationen
- Keine überladenen Layouts mit zu vielen Elementen
- Keine Schriftarten außerhalb des definierten Systems
- Keine Unterstreichungen, Schatten oder 3D-Effekte

---

*Version 1.0 · Erstellt Februar 2026 · Basierend auf Moodboard 3*
