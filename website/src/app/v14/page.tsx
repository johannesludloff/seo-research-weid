import Image from "next/image";
import Link from "next/link";
import { Newsreader, Figtree } from "next/font/google";
import { VersionNav } from "@/components/version-nav";
import { BuyerPopup } from "@/components/buyer-popup";
import { DesignInfoModal } from "@/components/design-info-modal";
import { MobileNav } from "@/components/mobile-nav";
import { Reveal } from "@/components/reveal";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-v14-display",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-v14-body",
});

export default function V14Page() {
  return (
    <div
      className={`${newsreader.variable} ${figtree.variable} font-[var(--font-v14-body)] bg-[#fafafa] text-[#111111]`}
    >
      {/* Header */}
      <header className="border-b-2 border-[#111111] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
          <Link
            href="/v14"
            className="font-[var(--font-v14-display)] text-2xl font-semibold text-[#111111]"
          >
            WEID
          </Link>
          <nav className="hidden items-center gap-16 md:flex">
            <Link
              href="#objekte"
              className="text-xs font-medium uppercase tracking-wider text-[#666666] transition-colors hover:text-[#0055ff]"
            >
              Objekte
            </Link>
            <Link
              href="#leistungen"
              className="text-xs font-medium uppercase tracking-wider text-[#666666] transition-colors hover:text-[#0055ff]"
            >
              Leistungen
            </Link>
            <Link
              href="#kontakt"
              className="text-xs font-medium uppercase tracking-wider text-[#666666] transition-colors hover:text-[#0055ff]"
            >
              Kontakt
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <div className="mb-8 h-0.5 w-24 bg-[#0055ff]" />
                <h1 className="font-[var(--font-v14-display)] text-5xl font-light leading-none text-[#111111] md:text-7xl">
                  Substanz.
                  <br />
                  Nicht Lautstärke.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#666666]">
                  Wir vermitteln Immobilien in Erlangen mit Präzision und
                  Diskretion. Keine lauten Versprechen, nur fundierte Analysen
                  und persönliche Betreuung.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <button className="mt-8 border-2 border-[#0055ff] bg-[#0055ff] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-[#0044dd] hover:border-[#0044dd]">
                  Objekte entdecken
                </button>
              </Reveal>
            </div>
            <Reveal delay={0.3}>
              <div className="relative aspect-[4/3] border-l-4 border-[#0055ff]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
                  alt="Moderne Architektur in Erlangen"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y-2 border-[#111111] bg-[#111111]">
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid grid-cols-1 divide-y divide-white/20 md:grid-cols-3 md:divide-x md:divide-y-0">
            <Reveal>
              <div className="px-8 py-8 text-center md:py-0">
                <div className="font-[var(--font-v14-display)] text-5xl font-light text-white">
                  15+
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-[#666666]">
                  Jahre Erfahrung
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="px-8 py-8 text-center md:py-0">
                <div className="font-[var(--font-v14-display)] text-5xl font-light text-white">
                  240+
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-[#666666]">
                  Objekte vermittelt
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="px-8 py-8 text-center md:py-0">
                <div className="font-[var(--font-v14-display)] text-5xl font-light text-white">
                  Ø 47
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-[#666666]">
                  Tage bis zum Verkauf
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-[#111111]" />

      {/* Services */}
      <section id="leistungen" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[#666666]">
              Leistungen
            </div>
            <h2 className="font-[var(--font-v14-display)] text-4xl font-light leading-tight text-[#111111] md:text-5xl">
              Was wir für Sie tun
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="border-b border-[#e0e0e0] pb-8">
                <div className="mb-4 font-[var(--font-v14-display)] text-3xl font-light text-[#0055ff]">
                  01
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#111111]">
                  Präzise Wertermittlung
                </h3>
                <p className="leading-relaxed text-[#666666]">
                  Was ist Ihre Immobilie in Erlangen wirklich wert? Wir
                  analysieren den lokalen Markt und liefern eine fundierte
                  Einschätzung.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border-b border-[#e0e0e0] pb-8">
                <div className="mb-4 font-[var(--font-v14-display)] text-3xl font-light text-[#0055ff]">
                  02
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#111111]">
                  Diskrete Vermarktung
                </h3>
                <p className="leading-relaxed text-[#666666]">
                  Wir erreichen vorgemerkte Käufer aus unserem Netzwerk, bevor
                  Ihre Immobilie öffentlich inseriert wird.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border-b border-[#e0e0e0] pb-8">
                <div className="mb-4 font-[var(--font-v14-display)] text-3xl font-light text-[#0055ff]">
                  03
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#111111]">
                  Begleitung bis zum Notar
                </h3>
                <p className="leading-relaxed text-[#666666]">
                  Vom ersten Gespräch bis zur Schlüsselübergabe: Wir
                  koordinieren alles.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-[#111111]" />

      {/* Properties */}
      <section id="objekte" className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-8">
          <Reveal>
            <h2 className="mb-16 font-[var(--font-v14-display)] text-4xl font-light leading-tight text-[#111111] md:text-5xl">
              Ausgewählte Objekte
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <div className="border border-[#e0e0e0] bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
                    alt="Stadtvilla am Schlossgarten"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 inline-block border border-[#0055ff] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#0055ff]">
                    Verkauf
                  </div>
                  <h3 className="mb-2 font-[var(--font-v14-display)] text-xl font-medium text-[#111111]">
                    Stadtvilla am Schlossgarten
                  </h3>
                  <div className="space-y-1 text-sm text-[#666666]">
                    <p>Erlangen · Altstadt</p>
                    <p>285 m² · 7 Zimmer</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border border-[#e0e0e0] bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
                    alt="Penthouse mit Dachterrasse"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 inline-block border border-[#0055ff] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#0055ff]">
                    Exklusiv
                  </div>
                  <h3 className="mb-2 font-[var(--font-v14-display)] text-xl font-medium text-[#111111]">
                    Penthouse mit Dachterrasse
                  </h3>
                  <div className="space-y-1 text-sm text-[#666666]">
                    <p>Erlangen · Röthelheimpark</p>
                    <p>142 m² · 4 Zimmer</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border border-[#e0e0e0] bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"
                    alt="Architektenhaus im Grünen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 inline-block border border-[#0055ff] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#0055ff]">
                    Neubau
                  </div>
                  <h3 className="mb-2 font-[var(--font-v14-display)] text-xl font-medium text-[#111111]">
                    Architektenhaus im Grünen
                  </h3>
                  <div className="space-y-1 text-sm text-[#666666]">
                    <p>Erlangen · Burgberg</p>
                    <p>210 m² · 5 Zimmer</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-[#111111]" />

      {/* Quote */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <div className="mb-8 h-0.5 w-full bg-[#111111]" />
          <Reveal>
            <blockquote className="font-[var(--font-v14-display)] text-4xl font-light italic leading-tight text-[#111111] md:text-5xl">
              Substanz vor Lautstärke
            </blockquote>
          </Reveal>
          <div className="mt-8 h-0.5 w-full bg-[#111111]" />
        </div>
      </section>

      <div className="h-0.5 bg-[#111111]" />

      {/* About */}
      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop"
                  alt="WEID Immobilien Team"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.1}>
                <h2 className="font-[var(--font-v14-display)] text-4xl font-light leading-tight text-[#111111] md:text-5xl">
                  Persönlich.
                  <br />
                  Verbindlich.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 leading-relaxed text-[#666666]">
                  Seit über 15 Jahren sind wir ausschließlich in Erlangen tätig.
                  Wir kennen jedes Viertel, jeden Markttrend, jeden relevanten
                  Kontakt. Diese Fokussierung ermöglicht es uns, Ihre Immobilie
                  präzise zu bewerten und zielgerichtet zu vermarkten.
                </p>
                <p className="mt-4 leading-relaxed text-[#666666]">
                  Unser Team besteht aus drei Maklern mit langjähriger
                  Erfahrung. Wir arbeiten transparent, verbindlich und immer in
                  Ihrem Interesse.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link
                  href="#kontakt"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#0055ff] transition-colors hover:text-[#0044dd]"
                >
                  Mehr erfahren
                  <span className="text-lg">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-[#111111]" />

      {/* CTA */}
      <section id="kontakt" className="bg-[#0055ff] py-24">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <Reveal>
            <h2 className="font-[var(--font-v14-display)] text-4xl font-light leading-tight text-white md:text-5xl">
              Ihr nächster Schritt
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg text-white/80">
              Vereinbaren Sie ein unverbindliches Gespräch. Wir analysieren Ihre
              Situation und zeigen Ihnen konkrete Handlungsoptionen.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <button className="mt-8 border-2 border-white bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#0055ff]">
              Gespräch vereinbaren
            </button>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-16 md:grid-cols-3">
            <div>
              <div className="font-[var(--font-v14-display)] text-2xl font-semibold text-white">
                WEID
              </div>
              <p className="mt-4 text-sm text-[#666666]">
                Immobilienvermittlung
                <br />
                in Erlangen seit 2009
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white">
                Kontakt
              </h3>
              <div className="space-y-2 text-sm text-[#666666]">
                <p>Hauptstraße 123</p>
                <p>91054 Erlangen</p>
                <p className="mt-4">+49 9131 123456</p>
                <p>kontakt@weid-immobilien.de</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white">
                Rechtliches
              </h3>
              <div className="space-y-2">
                <Link
                  href="/impressum"
                  className="block text-sm text-[#666666] transition-colors hover:text-white"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="block text-sm text-[#666666] transition-colors hover:text-white"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-[#666666]">
            © {new Date().getFullYear()} WEID Immobilien. Alle Rechte
            vorbehalten.
          </div>
        </div>
      </footer>

      {/* Overlays */}
      <div className="fixed bottom-4 left-4 z-50 border border-[#0055ff] bg-white px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#0055ff]">
        V14 — Klarheit
      </div>
      <VersionNav current={14} total={15} />
      <BuyerPopup />
      <DesignInfoModal
        designName="Klarheit"
        subtitle="Neo-Rational Swiss Precision"
        fontDisplay="Newsreader"
        fontDisplayReason="A refined transitional serif with optical sizing. Unlike the decorative Cormorant in V1-V12, Newsreader brings journalistic authority — it reads like a trusted editorial, not a luxury brochure."
        fontBody="Figtree"
        fontBodyReason="A geometric sans-serif with open apertures and perfect legibility. Its mathematical proportions align with the Swiss design philosophy — every letterform is purposeful."
        colors={[
          { name: "Paper", hex: "#fafafa", usage: "Primary background" },
          { name: "Pure White", hex: "#ffffff", usage: "Card surfaces" },
          { name: "Near Black", hex: "#111111", usage: "Primary text" },
          { name: "Mid Gray", hex: "#666666", usage: "Secondary text" },
          { name: "Signal Blue", hex: "#0055ff", usage: "Accent & CTAs" },
          { name: "Rule Gray", hex: "#e0e0e0", usage: "Borders & lines" },
        ]}
        spacingPhilosophy="Strict 8px grid system. Every margin, padding, and gap is a multiple of 8px — no exceptions. This mathematical precision creates an invisible rhythm that the eye perceives as 'trustworthy.' Horizontal rules act as visual anchors between content blocks, replacing the decorative flourishes of traditional real estate sites."
        overallRationale="Klarheit strips away every decorative element to let substance speak. Inspired by Swiss International Style and Dieter Rams' 'less but better' philosophy. The single accent color (signal blue) creates a clear visual hierarchy and conveys trust — a critical emotion in real estate. This design says: 'We focus on facts, not fluff.'"
      />
    </div>
  );
}
