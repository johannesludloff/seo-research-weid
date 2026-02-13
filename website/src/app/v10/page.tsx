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

const properties = [
  {
    image: images.property1,
    title: "Stadtvilla am Schlossgarten",
    location: "Erlangen Altstadt",
    area: "285 m\u00B2",
    rooms: "7 Zimmer",
  },
  {
    image: images.property2,
    title: "Penthouse mit Dachterrasse",
    location: "R\u00F6thelheimpark",
    area: "142 m\u00B2",
    rooms: "4 Zimmer",
  },
  {
    image: images.property3,
    title: "Architektenhaus im Gr\u00FCnen",
    location: "Burgberg",
    area: "210 m\u00B2",
    rooms: "5 Zimmer",
  },
];

/* ─── Page ─── */

export default function V10HomePage() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <Link
            href="/v10"
            className="font-display text-lg tracking-[0.18em] text-ivory"
          >
            WEID
          </Link>

          <nav className="hidden items-center gap-10 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory md:flex">
            <Link
              className="transition-opacity hover:opacity-50"
              href="/verkaufen"
            >
              Verkaufen
            </Link>
            <Link
              className="transition-opacity hover:opacity-50"
              href="/immobilien"
            >
              Immobilien
            </Link>
            <Link
              className="transition-opacity hover:opacity-50"
              href="/wertermittlung"
            >
              Wertermittlung
            </Link>
            <Link
              className="transition-opacity hover:opacity-50"
              href="/ueber-uns"
            >
              {"\u00DCber uns"}
            </Link>
            <Link
              className="transition-opacity hover:opacity-50"
              href="/kontakt"
            >
              Kontakt
            </Link>
          </nav>

          <div className="text-ivory md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* ━━━ Hero ━━━ */}
      <section className="relative h-screen w-full">
        <Image
          src={images.hero}
          alt="Elegante Immobilie in Erlangen"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/50 via-noir/20 to-noir/40" />

        {/* Minimal text — bottom-left corner */}
        <div className="absolute bottom-12 left-6 z-10 md:bottom-16 md:left-12 lg:bottom-20 lg:left-20">
          <Reveal variant="fade">
            <p className="font-display text-lg tracking-[0.15em] text-ivory md:text-xl">
              WEID Immobilien
            </p>
          </Reveal>
          <Reveal variant="fade" delay={200}>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-ivory/60">
              Erlangen
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Services ━━━ */}
      <section className="bg-ivory px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <Reveal variant="fade">
            <p className="text-center text-[10px] uppercase tracking-[0.4em] text-taupe">
              Leistungen
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-12 md:mt-16 md:flex-row md:gap-16 lg:gap-24">
            {/* Verkauf & Vermarktung */}
            <Reveal variant="fade" delay={100}>
              <div className="flex-1">
                <h3 className="font-display text-xl leading-snug">
                  {"Verkauf & Vermarktung"}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-taupe">
                  Diskrete Strategien und ma{"\u00DF"}geschneiderte Konzepte
                  f{"\u00FC"}r den erfolgreichen Verkauf anspruchsvoller
                  Immobilien.
                </p>
              </div>
            </Reveal>

            {/* Wertermittlung */}
            <Reveal variant="fade" delay={200}>
              <div className="flex-1">
                <h3 className="font-display text-xl leading-snug">
                  Wertermittlung
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-taupe">
                  Fundierte Marktanalysen und pr{"\u00E4"}zise Bewertungen auf
                  Basis langj{"\u00E4"}hriger lokaler Expertise.
                </p>
              </div>
            </Reveal>

            {/* Beratung & Begleitung */}
            <Reveal variant="fade" delay={300}>
              <div className="flex-1">
                <h3 className="font-display text-xl leading-snug">
                  {"Beratung & Begleitung"}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-taupe">
                  Pers{"\u00F6"}nliche Betreuung und vertrauensvolle Begleitung
                  in jeder Phase Ihres Vorhabens.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ Properties — Full-bleed gallery ━━━ */}
      {properties.map((property, i) => (
        <section key={property.title} className="relative h-[80vh] w-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-noir/25" />

          {/* Tiny placard — bottom-left */}
          <div className="absolute bottom-10 left-6 z-10 md:bottom-14 md:left-12 lg:bottom-16 lg:left-20">
            <Reveal variant="fade" delay={i * 100}>
              <p className="font-display text-2xl leading-snug text-ivory md:text-3xl">
                {property.title}
              </p>
            </Reveal>
            <Reveal variant="fade" delay={i * 100 + 150}>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ivory/60">
                {property.location} {"\u00B7"} {property.area} {"\u00B7"}{" "}
                {property.rooms}
              </p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ━━━ Team Teaser ━━━ */}
      <section className="bg-ivory">
        {/* Oversized image */}
        <div className="relative h-[70vh] w-full">
          <Image
            src={images.team}
            alt="Das WEID Immobilien Team"
            fill
            className="object-cover"
          />
        </div>

        {/* Small text below the image */}
        <div className="px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-14 lg:px-20">
          <div className="max-w-md">
            <Reveal variant="fade">
              <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
                {"\u00DCber uns"}
              </p>
            </Reveal>

            <Reveal variant="fade" delay={150}>
              <p className="mt-5 text-[13px] leading-relaxed text-taupe">
                WEID Immobilien steht f{"\u00FC"}r Vertrauen, lokale
                Verwurzelung und individuelle Betreuung. Kein Massengesch
                {"\u00E4"}ft — sondern Handschlagqualit{"\u00E4"}t.
              </p>
            </Reveal>

            <Reveal variant="fade" delay={250}>
              <div className="mt-8">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/ueber-uns">Mehr erfahren</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="bg-ivory px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Kontakt
            </p>
          </Reveal>

          <Reveal variant="fade" delay={150}>
            <h2 className="mt-6 font-display text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              Bereit f{"\u00FC"}r den n{"\u00E4"}chsten Schritt?
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={300}>
            <div className="mt-10">
              <Button asChild>
                <Link href="/kontakt">Gespr{"\u00E4"}ch vereinbaren</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="bg-noir px-6 py-16 text-ivory md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/v10"
              className="font-display text-lg tracking-[0.15em]"
            >
              WEID IMMOBILIEN
            </Link>
            <p className="mt-4 text-[12px] leading-relaxed text-ivory/40">
              Ausgew{"\u00E4"}hlte Wohnimmobilien in Erlangen und Umgebung —
              mit Diskretion und Erfahrung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/30">
              Navigation
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-[12px] text-ivory/50">
              <Link
                href="/verkaufen"
                className="transition-colors hover:text-ivory"
              >
                Verkaufen
              </Link>
              <Link
                href="/immobilien"
                className="transition-colors hover:text-ivory"
              >
                Immobilien
              </Link>
              <Link
                href="/wertermittlung"
                className="transition-colors hover:text-ivory"
              >
                Wertermittlung
              </Link>
              <Link
                href="/ueber-uns"
                className="transition-colors hover:text-ivory"
              >
                {"\u00DCber uns"}
              </Link>
              <Link
                href="/kontakt"
                className="transition-colors hover:text-ivory"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/30">
              Kontakt
            </p>
            <div className="mt-5 text-[12px] leading-relaxed text-ivory/50">
              <p>Hauptstra{"\u00DFe"} 42</p>
              <p>91054 Erlangen</p>
              <p className="mt-3">
                <a
                  href="tel:+499131123456"
                  className="transition-colors hover:text-ivory"
                >
                  09131 / 123 456
                </a>
              </p>
              <p className="mt-1">
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

        {/* Bottom bar */}
        <div className="mx-auto mt-14 max-w-6xl border-t border-ivory/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-ivory/20 md:flex-row md:justify-between">
            <span>
              {"\u00A9"} {new Date().getFullYear()} WEID Immobilien
            </span>
            <div className="flex gap-6">
              <Link
                className="transition-colors hover:text-ivory/50"
                href="/impressum"
              >
                Impressum
              </Link>
              <Link
                className="transition-colors hover:text-ivory/50"
                href="/datenschutz"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Version Badge */}
      <div className="fixed bottom-4 left-4 z-50 rounded bg-noir/80 px-3 py-1.5 text-[10px] uppercase tracking-wider text-ivory/60">
        V10 — Luxury Oversized
      </div>
    
      <VersionNav current={10} />
    </main>
  );
}
