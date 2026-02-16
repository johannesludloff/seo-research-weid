import { Bodoni_Moda, Archivo } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { VersionNav } from "@/components/version-nav";
import { BuyerPopup } from "@/components/buyer-popup";
import { DesignInfoModal } from "@/components/design-info-modal";
import { MobileNav } from "@/components/mobile-nav";
import { Reveal } from "@/components/reveal";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-v13-display",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-v13-body",
});

export default function V13Page() {
  return (
    <div
      className={`${bodoni.variable} ${archivo.variable}`}
      style={{ fontFamily: "var(--font-v13-body)" }}
    >
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#0a0a0a]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-6 md:px-20 lg:px-32">
          <Link
            href="/v13"
            className="text-2xl font-bold text-[#b8953e]"
            style={{ fontFamily: "var(--font-v13-display)" }}
          >
            WEID
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-12 md:flex">
            <Link
              href="#objekte"
              className="text-[10px] uppercase tracking-widest text-[#f5efe6] transition-colors hover:text-[#b8953e]"
            >
              Objekte
            </Link>
            <Link
              href="#leistungen"
              className="text-[10px] uppercase tracking-widest text-[#f5efe6] transition-colors hover:text-[#b8953e]"
            >
              Leistungen
            </Link>
            <Link
              href="#team"
              className="text-[10px] uppercase tracking-widest text-[#f5efe6] transition-colors hover:text-[#b8953e]"
            >
              Team
            </Link>
            <Link
              href="#kontakt"
              className="rounded border border-[#b8953e] px-6 py-2 text-[10px] uppercase tracking-widest text-[#b8953e] transition-all hover:bg-[#b8953e] hover:text-[#0a0a0a]"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center bg-[#0a0a0a] px-8 md:px-20 lg:px-32">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="relative flex items-center gap-8">
            {/* Gold accent line */}
            <div className="hidden h-64 w-[1px] bg-[#b8953e] md:block lg:h-80"></div>

            <div className="max-w-5xl">
              <Reveal>
                <h1
                  className="text-6xl leading-[0.95] text-[#f5efe6] md:text-8xl lg:text-[9rem]"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  Raum für das{" "}
                  <span className="italic text-[#b8953e]">Wesentliche.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-12 max-w-2xl text-lg tracking-wide text-[#8a8580] md:text-xl">
                  WEID Immobilien vermittelt ausgewählte Wohn- und
                  Gewerbeimmobilien in Erlangen und Umgebung. Diskret.
                  Präzise. Mit klarem Blick für Architektur und Lage.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-16 flex flex-wrap gap-6">
                  <Link
                    href="#objekte"
                    className="rounded border border-[#b8953e] px-10 py-4 text-sm uppercase tracking-widest text-[#b8953e] transition-all hover:bg-[#b8953e] hover:text-[#0a0a0a]"
                  >
                    Objekte entdecken
                  </Link>
                  <Link
                    href="#kontakt"
                    className="rounded border border-[#f5efe6] px-10 py-4 text-sm uppercase tracking-widest text-[#f5efe6] transition-all hover:bg-[#f5efe6] hover:text-[#0a0a0a]"
                  >
                    Kontakt
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[#b8953e]"></div>

      {/* Stats Row */}
      <section className="bg-[#0a0a0a] px-8 py-32 md:px-20 lg:px-32">
        <div className="mx-auto max-w-[1800px]">
          <Reveal>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
              {/* Stat 1 */}
              <div className="border-b border-[#b8953e] pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-16">
                <div
                  className="text-7xl font-bold text-[#b8953e] lg:text-8xl"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  15+
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-widest text-[#8a8580]">
                  Jahre in Erlangen
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-[#b8953e] pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-16">
                <div
                  className="text-7xl font-bold text-[#b8953e] lg:text-8xl"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  240+
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-widest text-[#8a8580]">
                  Vermittelte Objekte
                </div>
              </div>

              {/* Stat 3 */}
              <div>
                <div
                  className="text-7xl font-bold text-[#b8953e] lg:text-8xl"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  Ø 47
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-widest text-[#8a8580]">
                  Tage bis Verkauf
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[#b8953e]"></div>

      {/* Services */}
      <section
        id="leistungen"
        className="bg-[#0a0a0a] px-8 py-32 md:px-20 lg:px-32"
      >
        <div className="mx-auto max-w-[1800px]">
          <Reveal>
            <div className="mb-24">
              <div className="text-[10px] uppercase tracking-widest text-[#b8953e]">
                Leistungen
              </div>
              <h2
                className="mt-4 text-5xl text-[#f5efe6] md:text-7xl"
                style={{ fontFamily: "var(--font-v13-display)" }}
              >
                Was wir für Sie tun
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Service 1 */}
            <Reveal delay={0.1}>
              <div className="rounded border border-[#b8953e] bg-[#141414] p-12">
                <div
                  className="text-6xl font-bold text-[#b8953e]"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  01
                </div>
                <h3
                  className="mt-8 text-3xl text-[#f5efe6]"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  Präzise Wertermittlung
                </h3>
                <p className="mt-6 leading-relaxed tracking-wide text-[#8a8580]">
                  Was ist Ihre Immobilie in Erlangen wirklich wert? Wir
                  analysieren den lokalen Markt, vergleichen aktuelle Verkäufe
                  und liefern Ihnen eine fundierte Einschätzung.
                </p>
              </div>
            </Reveal>

            {/* Service 2 */}
            <Reveal delay={0.2}>
              <div className="rounded border border-[#b8953e] bg-[#141414] p-12">
                <div
                  className="text-6xl font-bold text-[#b8953e]"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  02
                </div>
                <h3
                  className="mt-8 text-3xl text-[#f5efe6]"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  Diskrete Vermarktung
                </h3>
                <p className="mt-6 leading-relaxed tracking-wide text-[#8a8580]">
                  Nicht jeder Verkauf gehört ins Schaufenster. Wir erreichen
                  vorgemerkte Käufer aus unserem Netzwerk, bevor Ihre
                  Immobilie öffentlich inseriert wird.
                </p>
              </div>
            </Reveal>

            {/* Service 3 */}
            <Reveal delay={0.3}>
              <div className="rounded border border-[#b8953e] bg-[#141414] p-12">
                <div
                  className="text-6xl font-bold text-[#b8953e]"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  03
                </div>
                <h3
                  className="mt-8 text-3xl text-[#f5efe6]"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  Begleitung bis zum Notar
                </h3>
                <p className="mt-6 leading-relaxed tracking-wide text-[#8a8580]">
                  Vom ersten Beratungsgespräch bis zur Schlüsselübergabe: Wir
                  koordinieren Gutachter, Finanzierungsberater und
                  Notartermine.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[#b8953e]"></div>

      {/* Properties */}
      <section
        id="objekte"
        className="bg-[#0a0a0a] px-8 py-32 md:px-20 lg:px-32"
      >
        <div className="mx-auto max-w-[1800px]">
          <Reveal>
            <div className="mb-24">
              <div className="text-[10px] uppercase tracking-widest text-[#b8953e]">
                Portfolio
              </div>
              <h2
                className="mt-4 text-5xl text-[#f5efe6] md:text-7xl"
                style={{ fontFamily: "var(--font-v13-display)" }}
              >
                Ausgewählte Objekte
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Large property (left) */}
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded bg-[#141414]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
                    alt="Stadtvilla am Schlossgarten"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 inline-block rounded bg-[#6b2d3e] px-4 py-1 text-[10px] uppercase tracking-widest text-[#f5efe6]">
                    Verkauf
                  </div>
                  <h3
                    className="text-3xl text-[#f5efe6]"
                    style={{ fontFamily: "var(--font-v13-display)" }}
                  >
                    Stadtvilla am Schlossgarten
                  </h3>
                  <div className="mt-4 space-y-2 text-sm tracking-wide text-[#8a8580]">
                    <div>Erlangen · Altstadt</div>
                    <div>285 m² · 7 Zimmer</div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Two stacked properties (right) */}
            <div className="flex flex-col gap-8">
              <Reveal delay={0.2}>
                <div className="group relative overflow-hidden rounded bg-[#141414]">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
                        alt="Penthouse mit Dachterrasse"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-6">
                      <div className="mb-4 inline-block w-fit rounded bg-[#6b2d3e] px-4 py-1 text-[10px] uppercase tracking-widest text-[#f5efe6]">
                        Exklusiv
                      </div>
                      <h3
                        className="text-2xl text-[#f5efe6]"
                        style={{ fontFamily: "var(--font-v13-display)" }}
                      >
                        Penthouse mit Dachterrasse
                      </h3>
                      <div className="mt-4 space-y-2 text-sm tracking-wide text-[#8a8580]">
                        <div>Erlangen · Röthelheimpark</div>
                        <div>142 m² · 4 Zimmer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="group relative overflow-hidden rounded bg-[#141414]">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"
                        alt="Architektenhaus im Grünen"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-6">
                      <div className="mb-4 inline-block w-fit rounded bg-[#6b2d3e] px-4 py-1 text-[10px] uppercase tracking-widest text-[#f5efe6]">
                        Neubau
                      </div>
                      <h3
                        className="text-2xl text-[#f5efe6]"
                        style={{ fontFamily: "var(--font-v13-display)" }}
                      >
                        Architektenhaus im Grünen
                      </h3>
                      <div className="mt-4 space-y-2 text-sm tracking-wide text-[#8a8580]">
                        <div>Erlangen · Burgberg</div>
                        <div>210 m² · 5 Zimmer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[#b8953e]"></div>

      {/* About/Team */}
      <section
        id="team"
        className="bg-[#0a0a0a] px-8 py-32 md:px-20 lg:px-32"
      >
        <div className="mx-auto max-w-[1800px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Image */}
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop"
                  alt="Team WEID Immobilien"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={0.2}>
              <div className="flex flex-col justify-center">
                <h2
                  className="text-5xl text-[#f5efe6] md:text-6xl lg:text-7xl"
                  style={{ fontFamily: "var(--font-v13-display)" }}
                >
                  Persönlich.{" "}
                  <span className="italic text-[#b8953e]">Verbindlich.</span>
                </h2>
                <div className="mt-12 space-y-6 text-lg leading-relaxed tracking-wide text-[#8a8580]">
                  <p>
                    WEID Immobilien ist kein Franchiseunternehmen. Wir sind
                    inhabergeführt, unabhängig und seit 2009 ausschließlich in
                    Erlangen tätig.
                  </p>
                  <p>
                    Das bedeutet: Wir kennen jeden Stadtteil, jede Schule,
                    jede Mikrolage. Wir wissen, wo sich Quartiere entwickeln
                    und wo Käufer wirklich kaufen.
                  </p>
                  <p>
                    Unser Team besteht aus zertifizierten
                    Immobilienbewertern, erfahrenen Maklern und einem
                    Netzwerk aus Architekten, Gutachtern und
                    Finanzierungsberatern.
                  </p>
                </div>
                <div className="mt-12">
                  <Link
                    href="#kontakt"
                    className="inline-block rounded border border-[#b8953e] px-10 py-4 text-sm uppercase tracking-widest text-[#b8953e] transition-all hover:bg-[#b8953e] hover:text-[#0a0a0a]"
                  >
                    Team kennenlernen
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[#b8953e]"></div>

      {/* CTA Section */}
      <section id="kontakt" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2400&auto=format&fit=crop"
            alt="Kontakt WEID Immobilien"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/80"></div>
        </div>

        <div className="relative px-8 py-32 md:px-20 lg:px-32 lg:py-40">
          <div className="mx-auto max-w-[1800px] text-center">
            <Reveal>
              <h2
                className="text-5xl text-[#f5efe6] md:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-v13-display)" }}
              >
                Ihr nächster Schritt{" "}
                <span className="italic text-[#b8953e]">beginnt hier.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mx-auto mt-12 max-w-2xl text-lg tracking-wide text-[#8a8580]">
                Ob Verkauf, Kauf oder Bewertung – vereinbaren Sie ein
                unverbindliches Erstgespräch. Wir nehmen uns Zeit.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-16">
                <Link
                  href="mailto:kontakt@weid-immobilien.de"
                  className="inline-block rounded border-2 border-[#b8953e] bg-[#b8953e] px-12 py-5 text-sm uppercase tracking-widest text-[#0a0a0a] transition-all hover:bg-transparent hover:text-[#b8953e]"
                >
                  Termin vereinbaren
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] px-8 py-20 md:px-20 lg:px-32">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Logo & Tagline */}
            <div>
              <div
                className="text-3xl font-bold text-[#b8953e]"
                style={{ fontFamily: "var(--font-v13-display)" }}
              >
                WEID
              </div>
              <p className="mt-4 text-sm tracking-wide text-[#8a8580]">
                Raum für das Wesentliche.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="mb-6 text-[10px] uppercase tracking-widest text-[#b8953e]">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#objekte"
                    className="text-sm tracking-wide text-[#f5efe6] transition-colors hover:text-[#b8953e]"
                  >
                    Objekte
                  </Link>
                </li>
                <li>
                  <Link
                    href="#leistungen"
                    className="text-sm tracking-wide text-[#f5efe6] transition-colors hover:text-[#b8953e]"
                  >
                    Leistungen
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="text-sm tracking-wide text-[#f5efe6] transition-colors hover:text-[#b8953e]"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#kontakt"
                    className="text-sm tracking-wide text-[#f5efe6] transition-colors hover:text-[#b8953e]"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-[10px] uppercase tracking-widest text-[#b8953e]">
                Kontakt
              </h3>
              <ul className="space-y-3 text-sm tracking-wide text-[#f5efe6]">
                <li>WEID Immobilien</li>
                <li>Hugenottenplatz 1a</li>
                <li>91054 Erlangen</li>
                <li className="pt-2">
                  <a
                    href="tel:+4991312060"
                    className="transition-colors hover:text-[#b8953e]"
                  >
                    +49 9131 2060
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:kontakt@weid-immobilien.de"
                    className="transition-colors hover:text-[#b8953e]"
                  >
                    kontakt@weid-immobilien.de
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 border-t border-[#b8953e] pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs tracking-wide text-[#8a8580]">
                © 2025 WEID Immobilien. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-8">
                <Link
                  href="/impressum"
                  className="text-xs tracking-wide text-[#8a8580] transition-colors hover:text-[#b8953e]"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="text-xs tracking-wide text-[#8a8580] transition-colors hover:text-[#b8953e]"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Version indicator */}
      <div className="fixed bottom-4 left-4 z-50 rounded bg-[#b8953e]/90 px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#0a0a0a]">
        V13 — Noir Atelier
      </div>

      {/* Version Nav */}
      <VersionNav current={13} total={15} />

      {/* Buyer Popup */}
      <BuyerPopup />

      {/* Design Info Modal */}
      <DesignInfoModal
        designName="Noir Atelier"
        subtitle="Dark Cinematic Luxury"
        fontDisplay="Bodoni Moda"
        fontDisplayReason="High-contrast Didone serif with dramatic thick-thin strokes. Evokes fashion editorials and architectural magazines — the opposite of the warm, gentle Cormorant Garamond used in V1-V12."
        fontBody="Archivo"
        fontBodyReason="Geometric sans-serif with a technical precision. Its neutral character lets the Bodoni headlines shine while maintaining excellent readability on dark backgrounds."
        colors={[
          { name: "Obsidian", hex: "#0a0a0a", usage: "Primary background" },
          { name: "Onyx", hex: "#141414", usage: "Card surfaces" },
          { name: "Antique Gold", hex: "#b8953e", usage: "Accent & highlights" },
          { name: "Cream", hex: "#f5efe6", usage: "Primary text" },
          { name: "Stone", hex: "#8a8580", usage: "Secondary text" },
          { name: "Burgundy", hex: "#6b2d3e", usage: "Tags & hover" },
        ]}
        spacingPhilosophy="Cinematic breathing room. Sections use 128-160px vertical padding to create a gallery-like pacing. Content is intentionally sparse per viewport — each scroll reveals one focused element. The generous space signals luxury and exclusivity."
        overallRationale="Noir Atelier inverts the warm ivory palette of all previous versions. By going fully dark with gold accents, it channels the atmosphere of a high-end architectural gallery or fashion atelier. This positions WEID as ultra-premium — the kind of agency that sells penthouses, not apartments. The dark theme also makes property photography pop dramatically."
      />
    </div>
  );
}
