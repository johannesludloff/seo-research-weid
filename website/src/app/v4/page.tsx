import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";
import { VersionNav } from "@/components/version-nav";

/* ─── Images ─── */

const images = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  property1:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  property2:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
  property3:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop",
};

/* ─── Data ─── */

const services = [
  {
    number: "01",
    title: "Verkauf & Vermarktung",
    description:
      "Diskrete, ma\u00dfgeschneiderte Vermarktungsstrategien f\u00fcr anspruchsvolle Immobilien. Vom ersten Gespr\u00e4ch bis zum Notartermin begleiten wir Sie mit Weitblick und Sorgfalt.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    description:
      "Fundierte Marktwertanalysen auf Basis lokaler Expertise und aktueller Marktdaten. Transparent, nachvollziehbar und als Grundlage f\u00fcr Ihre Entscheidung.",
  },
  {
    number: "03",
    title: "Beratung & Begleitung",
    description:
      "Pers\u00f6nliche Betreuung in jeder Phase Ihrer Immobilienentscheidung. Ehrlich, kompetent und immer mit Blick f\u00fcrs Detail.",
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

export default function V4HomePage() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <Link
            href="/v4"
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

      {/* ━━━ Hero — Asymmetric Split with CSS Grid ━━━ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* 12-column grid with overlapping areas */}
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
          {/* Text — left side, positioned unexpectedly low (70% down) */}
          <div className="relative z-20 flex flex-col justify-end px-6 pb-16 pt-32 md:px-12 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:justify-end lg:px-20 lg:pb-[15vh]">
            <Reveal variant="left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                Immobilien &middot; Erlangen
              </p>
            </Reveal>
            <Reveal variant="left" delay={100}>
              <h1 className="mt-6 font-display text-5xl font-light leading-[0.9] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
                Kuratierte
                <br />
                R&auml;ume f&uuml;r
                <br />
                <span className="italic text-espresso">
                  anspruchsvolles
                </span>
                <br />
                Leben.
              </h1>
            </Reveal>
            <Reveal variant="left" delay={200}>
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-taupe">
                Wir vermitteln nicht nur Immobilien &mdash; wir kuratieren
                Lebensr&auml;ume in Erlangen mit ruhiger Klarheit und einem Auge
                f&uuml;r das Besondere.
              </p>
            </Reveal>
            <Reveal variant="left" delay={300}>
              <div className="mt-10 flex items-center gap-6">
                <Button asChild>
                  <Link href="/immobilien">Objekte entdecken</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/kontakt">Kontakt</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Hero image — right ~65%, overlapping the text column */}
          <div className="relative min-h-[50vh] lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:min-h-screen">
            <Image
              src={images.hero}
              alt="Moderne Architektur in Erlangen"
              fill
              priority
              className="object-cover"
            />
            {/* Vertical accent text */}
            <div className="absolute bottom-12 right-8 hidden lg:block">
              <p
                className="text-[10px] uppercase tracking-[0.3em] text-ivory/50"
                style={{ writingMode: "vertical-rl" }}
              >
                Seit 2009 in Erlangen
              </p>
            </div>
          </div>

          {/* Overlapping element: small label that sits between image and text */}
          <div className="hidden lg:absolute lg:bottom-[12vh] lg:left-[38%] lg:z-30 lg:block">
            <Reveal variant="fade" delay={500}>
              <div className="bg-ivory px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                  Erlangen &middot; seit 2009
                </p>
                <p className="mt-1 font-display text-lg italic text-espresso">
                  Substanz vor Lautst&auml;rke
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ Services — Magazine Spread Style ━━━ */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20" id="services">
        <div className="mx-auto max-w-7xl">
          {/* Section header — offset to the right */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:col-start-7">
              <Reveal variant="right">
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                  Leistungen
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">
                  Was wir
                  <br />
                  f&uuml;r Sie tun
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Services — asymmetric two-column layout */}
          <div className="mt-20 space-y-0">
            {/* Service 01 */}
            <Reveal variant="left">
              <div className="grid grid-cols-1 border-t border-warm-sand py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
                <div className="lg:col-span-2 lg:col-start-1">
                  <p className="font-display text-7xl font-light italic text-warm-sand/60 lg:text-8xl">
                    {services[0].number}
                  </p>
                </div>
                <div className="mt-4 lg:col-span-3 lg:col-start-3 lg:mt-0 lg:pt-4">
                  <h3 className="font-display text-2xl leading-snug md:text-3xl">
                    {services[0].title}
                  </h3>
                </div>
                <div className="mt-4 lg:col-span-4 lg:col-start-7 lg:mt-0 lg:pt-5">
                  <p className="text-[15px] leading-relaxed text-taupe">
                    {services[0].description}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Service 02 — with interlude image breaking the grid */}
            <Reveal variant="right">
              <div className="grid grid-cols-1 border-t border-warm-sand py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
                <div className="lg:col-span-4 lg:col-start-5 lg:pt-4">
                  <h3 className="font-display text-2xl leading-snug md:text-3xl">
                    {services[1].title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-taupe">
                    {services[1].description}
                  </p>
                </div>
                <div className="lg:col-span-2 lg:col-start-10">
                  <p className="mt-4 text-right font-display text-7xl font-light italic text-warm-sand/60 lg:mt-0 lg:text-8xl">
                    {services[1].number}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Interlude image — breaks out of the grid */}
            <Reveal variant="fade">
              <div className="relative -mx-6 my-4 h-[280px] md:-mx-12 md:h-[360px] lg:-mx-20 lg:h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop"
                  alt="Architektur Detail"
                  fill
                  className="object-cover"
                />
                {/* Pull quote overlapping the image */}
                <div className="absolute bottom-0 left-6 z-10 -mb-8 bg-ivory px-8 py-6 md:left-12 md:-mb-10 lg:left-20">
                  <p className="font-display text-2xl italic text-espresso md:text-3xl lg:text-4xl">
                    &ldquo;Jede Immobilie
                    <br />
                    erz&auml;hlt eine Geschichte.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Service 03 */}
            <Reveal variant="left" delay={100}>
              <div className="grid grid-cols-1 border-t border-warm-sand py-12 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-24">
                <div className="lg:col-span-2 lg:col-start-2">
                  <p className="font-display text-7xl font-light italic text-warm-sand/60 lg:text-8xl">
                    {services[2].number}
                  </p>
                </div>
                <div className="mt-4 lg:col-span-3 lg:col-start-5 lg:mt-0 lg:pt-4">
                  <h3 className="font-display text-2xl leading-snug md:text-3xl">
                    {services[2].title}
                  </h3>
                </div>
                <div className="mt-4 lg:col-span-3 lg:col-start-9 lg:mt-0 lg:pt-5">
                  <p className="text-[15px] leading-relaxed text-taupe">
                    {services[2].description}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="border-t border-warm-sand" />
          </div>
        </div>
      </section>

      {/* ━━━ Properties — Asymmetric Masonry Grid ━━━ */}
      <section
        className="bg-parchment px-6 py-24 md:px-12 md:py-32 lg:px-20"
        id="portfolio"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:col-start-1">
              <Reveal>
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                  Portfolio
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-7xl">
                  Ausgew&auml;hlte
                  <br />
                  Objekte
                </h2>
              </Reveal>
            </div>
            <div className="mt-6 flex items-end lg:col-span-3 lg:col-start-10 lg:mt-0">
              <Reveal variant="right" delay={200}>
                <Button variant="outline" asChild>
                  <Link href="/immobilien">Alle ansehen</Link>
                </Button>
              </Reveal>
            </div>
          </div>

          {/* Asymmetric masonry grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-8">
            {/* Property 1 — Large, spans 2 rows on left */}
            <Reveal
              variant="left"
              className="lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1"
            >
              <div className="group relative">
                <div className="relative h-[400px] overflow-hidden md:h-[500px] lg:h-[680px]">
                  <Image
                    src={properties[0].image}
                    alt={properties[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-5 top-5 bg-ivory/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {properties[0].tag}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {properties[0].location}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight md:text-3xl lg:text-4xl">
                    {properties[0].title}
                  </h3>
                  <div className="mt-3 flex gap-6 text-xs uppercase tracking-[0.15em] text-taupe">
                    <span>{properties[0].area}</span>
                    <span className="text-warm-sand">|</span>
                    <span>{properties[0].rooms}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Property 2 — Top right, smaller */}
            <Reveal
              variant="right"
              delay={150}
              className="lg:col-span-4 lg:col-start-9 lg:row-start-1"
            >
              <div className="group relative">
                <div className="relative h-[300px] overflow-hidden lg:h-[320px]">
                  <Image
                    src={properties[1].image}
                    alt={properties[1].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-5 top-5 bg-ivory/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {properties[1].tag}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {properties[1].location}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-tight md:text-2xl">
                    {properties[1].title}
                  </h3>
                  <div className="mt-3 flex gap-6 text-xs uppercase tracking-[0.15em] text-taupe">
                    <span>{properties[1].area}</span>
                    <span className="text-warm-sand">|</span>
                    <span>{properties[1].rooms}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Property 3 — Bottom right, offset with negative margin to create overlap */}
            <Reveal
              variant="right"
              delay={300}
              className="lg:col-span-4 lg:col-start-9 lg:row-start-2"
            >
              <div className="group relative lg:-mt-4">
                <div className="relative h-[300px] overflow-hidden lg:h-[280px]">
                  <Image
                    src={properties[2].image}
                    alt={properties[2].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-5 top-5 bg-ivory/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {properties[2].tag}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {properties[2].location}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-tight md:text-2xl">
                    {properties[2].title}
                  </h3>
                  <div className="mt-3 flex gap-6 text-xs uppercase tracking-[0.15em] text-taupe">
                    <span>{properties[2].area}</span>
                    <span className="text-warm-sand">|</span>
                    <span>{properties[2].rooms}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Mobile CTA */}
          <Reveal className="mt-12 text-center lg:hidden">
            <Button variant="outline" asChild>
              <Link href="/immobilien">Alle Objekte ansehen</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Team Teaser — Asymmetric Offset Composition ━━━ */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
            {/* Text — floating left */}
            <div className="flex flex-col justify-center lg:col-span-4 lg:col-start-1 lg:row-start-1">
              <Reveal variant="left">
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                  &Uuml;ber uns
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl lg:text-6xl">
                  Pers&ouml;nlich.
                  <br />
                  <span className="italic">Verbindlich.</span>
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-taupe">
                  WEID Immobilien wurde mit der &Uuml;berzeugung gegr&uuml;ndet,
                  dass Immobilienvermittlung Vertrauenssache ist. Wir kennen den
                  Erlanger Markt wie unsere eigene Nachbarschaft &mdash; weil es
                  genau das ist.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-taupe">
                  Unser kleines Team verbindet lokale Verwurzelung mit
                  zeitgem&auml;&szlig;er Vermarktung. Kein Massengesch&auml;ft,
                  sondern individuelle Betreuung mit Handschlagqualit&auml;t.
                </p>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="/ueber-uns">Mehr erfahren</Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Image — offset to the right, creating asymmetry */}
            <div className="relative mt-12 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:mt-0">
              <Reveal variant="right" delay={150}>
                <div className="relative h-[400px] md:h-[520px] lg:h-[600px]">
                  <Image
                    src={images.team}
                    alt="Das WEID Immobilien Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
              {/* Overlapping accent element */}
              <Reveal variant="fade" delay={400}>
                <div className="relative z-10 -mt-16 ml-0 bg-ivory px-8 py-6 lg:-ml-20 lg:-mt-20">
                  <p className="font-display text-xl italic text-espresso md:text-2xl lg:text-3xl">
                    &ldquo;Vertrauen entsteht durch N&auml;he,
                    <br />
                    nicht durch Versprechen.&rdquo;
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-taupe">
                    Das WEID Team
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA — Typography-Driven Full Bleed ━━━ */}
      <section className="bg-parchment px-6 py-28 md:px-12 md:py-36 lg:px-20 lg:py-44">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
              Lassen Sie uns sprechen
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-8 font-display text-5xl font-light leading-[0.9] md:text-6xl lg:text-8xl">
              Ihr n&auml;chster Schritt
              <br />
              <span className="italic text-espresso">beginnt hier.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={200}>
            <div className="mx-auto mt-10 h-px w-24 bg-warm-sand" />
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-10 max-w-xl text-[15px] leading-relaxed text-taupe">
              Ob Verkauf, Bewertung oder eine erste Einsch&auml;tzung &mdash;
              wir nehmen uns Zeit f&uuml;r Ihr Anliegen. Diskret, pers&ouml;nlich
              und unverbindlich.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button size="lg" asChild>
                <Link href="/kontakt">Gespr&auml;ch vereinbaren</Link>
              </Button>
              <span className="text-[10px] uppercase tracking-[0.2em] text-taupe/60">
                oder rufen Sie an: 09131 / 123 456
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="bg-noir px-6 py-16 text-ivory md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
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
        V4 &mdash; Editorial Grid
      </div>
    
      <VersionNav current={4} />
    </main>
  );
}
