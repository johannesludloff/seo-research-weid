import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";
import { VersionNav } from "@/components/version-nav";

/* ─── Unsplash images ─── */

const images = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  property1:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  property2:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
  property3:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop",
  ctaBg:
    "https://images.unsplash.com/photo-1600607687920-4e2a09a8a82?q=80&w=2400&auto=format&fit=crop",
};

/* ─── Data ─── */

const services = [
  {
    number: "01",
    title: "Verkauf & Vermarktung",
    description:
      "Diskrete, massgeschneiderte Vermarktungsstrategien fur anspruchsvolle Immobilien. Vom ersten Gesprach bis zum Notartermin begleiten wir Sie mit Sorgfalt und Marktkenntnis.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    description:
      "Fundierte Marktwertanalysen auf Basis lokaler Expertise und aktueller Marktdaten. Transparent, nachvollziehbar und als solide Grundlage fur Ihre Entscheidung.",
  },
  {
    number: "03",
    title: "Beratung & Begleitung",
    description:
      "Personliche Betreuung in jeder Phase Ihrer Immobilienentscheidung. Ehrlich, kompetent und mit einem geschulten Blick furs Detail.",
  },
];

const properties = [
  {
    image: images.property1,
    tag: "Verkauf",
    title: "Stadtvilla am Schlossgarten",
    location: "Erlangen \u00b7 Altstadt",
    area: "285 m\u00b2",
    rooms: "7 Zimmer",
  },
  {
    image: images.property2,
    tag: "Exklusiv",
    title: "Penthouse mit Dachterrasse",
    location: "Erlangen \u00b7 R\u00f6thelheimpark",
    area: "142 m\u00b2",
    rooms: "4 Zimmer",
  },
  {
    image: images.property3,
    tag: "Neubau",
    title: "Architektenhaus im Gr\u00fcnen",
    location: "Erlangen \u00b7 Burgberg",
    area: "210 m\u00b2",
    rooms: "5 Zimmer",
  },
];

/* ─── Page ─── */

export default function V2HomePage() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <Link
            href="/v2"
            className="font-display text-xl tracking-[0.06em] text-ivory md:text-2xl"
          >
            WEID
          </Link>
          <nav className="hidden items-center gap-10 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory md:flex">
            <Link
              className="transition-opacity hover:opacity-60"
              href="/verkaufen"
            >
              Verkaufen
            </Link>
            <Link
              className="transition-opacity hover:opacity-60"
              href="/immobilien"
            >
              Immobilien
            </Link>
            <Link
              className="transition-opacity hover:opacity-60"
              href="/wertermittlung"
            >
              Wertermittlung
            </Link>
            <Link
              className="transition-opacity hover:opacity-60"
              href="/kontakt"
            >
              Kontakt
            </Link>
          </nav>
          <div className="text-ivory">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* ━━━ Hero: Full-Bleed Dramatic ━━━ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <Image
          src={images.hero}
          alt="Moderne Architektur in Erlangen"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-noir/50" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-20 pt-32 md:px-12 md:pb-28 lg:px-20 lg:pb-32">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal variant="fade">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
                Immobilien &middot; Erlangen
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[0.85] tracking-tight text-ivory">
                Wo Architektur
                <br />
                auf <span className="italic text-warm-sand">Emotion</span>{" "}
                trifft.
              </h1>
            </Reveal>
            <Reveal variant="up" delay={250}>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ivory/60">
                Wir vermitteln nicht nur Immobilien — wir kuratieren
                Lebensr&auml;ume in Erlangen mit ruhiger Klarheit und einem Auge
                f&uuml;r das Besondere.
              </p>
            </Reveal>
            <Reveal variant="up" delay={350}>
              <div className="mt-10 flex items-center gap-6">
                <Button variant="ivory" asChild>
                  <Link href="/immobilien">Objekte entdecken</Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="text-ivory/70 hover:text-ivory"
                >
                  <Link href="/kontakt">Kontakt</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Scroll indicator */}
          <Reveal variant="fade" delay={600}>
            <div className="mx-auto mt-16 flex w-full max-w-6xl items-center gap-4">
              <div className="relative h-12 w-px overflow-hidden bg-ivory/20">
                <div className="absolute left-0 top-0 h-full w-full animate-pulse bg-ivory/60" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                Scroll
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Services — Horizontal Cards with Numbers ━━━ */}
      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32 lg:px-20" id="services">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                  Leistungen
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                  Was wir f&uuml;r Sie tun
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-taupe md:text-right">
                Drei Kernkompetenzen, ein Versprechen: Ihre Immobilie in den
                besten H&auml;nden.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-px bg-warm-sand md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={i * 120}>
                <div className="group flex h-full flex-col bg-ivory p-8 transition-colors hover:bg-parchment md:p-10">
                  <p className="font-display text-6xl font-light text-warm-sand transition-colors group-hover:text-espresso lg:text-7xl">
                    {service.number}
                  </p>
                  <h3 className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-taupe">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-8">
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-taupe transition-colors group-hover:text-espresso">
                      Mehr erfahren &rarr;
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Properties — Grid of Three ━━━ */}
      <section
        className="bg-parchment px-6 py-24 md:px-12 md:py-32 lg:px-20"
        id="portfolio"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                  Portfolio
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                  Ausgew&auml;hlte Objekte
                </h2>
              </div>
              <Button variant="outline" asChild className="hidden md:inline-flex">
                <Link href="/immobilien">Alle ansehen</Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {properties.map((property, i) => (
              <Reveal key={property.title} variant="up" delay={i * 120}>
                <Link href="/immobilien" className="group block">
                  <div className="relative h-[400px] overflow-hidden md:h-[480px]">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-taupe">
                      {property.tag}
                    </span>
                  </div>
                  <div className="mt-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                      {property.location}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-espresso md:text-3xl">
                      {property.title}
                    </h3>
                    <div className="mt-3 flex gap-6 text-xs uppercase tracking-[0.15em] text-taupe">
                      <span>{property.area}</span>
                      <span className="text-warm-sand">|</span>
                      <span>{property.rooms}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/immobilien">Alle Objekte ansehen</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Team / About Teaser ━━━ */}
      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.55fr_0.45fr] md:gap-16">
            <Reveal variant="left">
              <div className="relative h-[400px] md:h-[560px]">
                <Image
                  src={images.team}
                  alt="Das WEID Immobilien Team"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal variant="right" className="flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                &Uuml;ber uns
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Pers&ouml;nlich.
                <br />
                <span className="italic">Verbindlich.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-taupe">
                WEID Immobilien wurde mit der &Uuml;berzeugung gegr&uuml;ndet,
                dass Immobilienvermittlung Vertrauenssache ist. Wir kennen den
                Erlanger Markt wie unsere eigene Nachbarschaft — weil es genau
                das ist.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-taupe">
                Unser kleines Team verbindet lokale Verwurzelung mit
                zeitgem&auml;sser Vermarktung. Kein Massengesch&auml;ft, sondern
                individuelle Betreuung mit Handschlagqualit&auml;t.
              </p>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/ueber-uns">Mehr erfahren</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ CTA — Full-Bleed Dark with Image ━━━ */}
      <section className="relative min-h-[70vh] overflow-hidden" id="contact">
        <Image
          src={images.ctaBg}
          alt="Architektonisches Detail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-noir/70" />
        <div className="relative z-10 flex min-h-[70vh] items-center px-6 md:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-2xl">
              <Reveal>
                <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
                  Lassen Sie uns sprechen
                </p>
                <h2 className="mt-6 font-display text-4xl font-light leading-[0.95] text-ivory md:text-6xl lg:text-7xl">
                  Ihr n&auml;chster Schritt
                  <br />
                  <span className="italic">beginnt hier.</span>
                </h2>
                <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ivory/60">
                  Ob Verkauf, Bewertung oder eine erste Einsch&auml;tzung — wir
                  nehmen uns Zeit f&uuml;r Ihr Anliegen. Diskret, pers&ouml;nlich
                  und unverbindlich.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Button variant="ivory" size="lg" asChild>
                    <Link href="/kontakt">Gespr&auml;ch vereinbaren</Link>
                  </Button>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                    oder rufen Sie an: 09131 / 123 456
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="bg-noir px-6 py-16 text-ivory md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          {/* Top */}
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            <div>
              <p className="font-display text-3xl tracking-wide">WEID</p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/50">
                Ihr lokaler Immobilienmakler in Erlangen.
                <br />
                Pers&ouml;nlich, diskret, kompetent.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                Navigation
              </p>
              <nav className="mt-4 flex flex-col gap-3">
                <Link
                  href="/verkaufen"
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  Verkaufen
                </Link>
                <Link
                  href="/immobilien"
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  Immobilien
                </Link>
                <Link
                  href="/wertermittlung"
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  Wertermittlung
                </Link>
                <Link
                  href="/ueber-uns"
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  &Uuml;ber uns
                </Link>
                <Link
                  href="/kontakt"
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  Kontakt
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                Kontakt
              </p>
              <div className="mt-4 space-y-3 text-sm text-ivory/70">
                <p>Hauptstra&szlig;e 42</p>
                <p>91054 Erlangen</p>
                <p className="mt-4">
                  <a
                    href="tel:+499131123456"
                    className="transition-colors hover:text-ivory"
                  >
                    09131 / 123 456
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@weid-immobilien.de"
                    className="transition-colors hover:text-ivory"
                  >
                    info@weid-immobilien.de
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.2em] text-ivory/30 md:flex-row md:items-center md:justify-between">
            <span>
              &copy; {new Date().getFullYear()} WEID Immobilien &middot;
              Erlangen
            </span>
            <div className="flex gap-6">
              <Link
                className="transition-colors hover:text-ivory/60"
                href="/impressum"
              >
                Impressum
              </Link>
              <Link
                className="transition-colors hover:text-ivory/60"
                href="/datenschutz"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Version indicator */}
      <div className="fixed bottom-4 left-4 z-50 rounded bg-noir/80 px-3 py-1.5 text-[10px] uppercase tracking-wider text-ivory/60">
        V2 — Full-Bleed Hero
      </div>
    
      <VersionNav current={2} />
    </main>
  );
}
