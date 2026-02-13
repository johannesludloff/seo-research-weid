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
      "Diskrete, maßgeschneiderte Vermarktungsstrategien für anspruchsvolle Immobilien. Vom ersten Gespräch bis zum Notartermin begleiten wir Sie mit Expertise und Fingerspitzengefühl.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    description:
      "Fundierte Marktwertanalysen auf Basis lokaler Expertise und aktueller Marktdaten. Transparent, nachvollziehbar und auf Ihre Immobilie zugeschnitten.",
  },
  {
    number: "03",
    title: "Beratung & Begleitung",
    description:
      "Persönliche Betreuung in jeder Phase Ihrer Immobilienentscheidung. Ehrlich, kompetent und mit einem untrüglichen Blick fürs Detail.",
  },
];

const properties = [
  {
    image: images.property1,
    title: "Stadtvilla am Schlossgarten",
    location: "Erlangen Altstadt",
    area: "285 m²",
    rooms: "7 Zimmer",
  },
  {
    image: images.property2,
    title: "Penthouse mit Dachterrasse",
    location: "Röthelheimpark",
    area: "142 m²",
    rooms: "4 Zimmer",
  },
  {
    image: images.property3,
    title: "Architektenhaus im Grünen",
    location: "Burgberg",
    area: "210 m²",
    rooms: "5 Zimmer",
  },
];

/* ─── Page ─── */

export default function V7HomePage() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <Link
            href="/v7"
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

      {/* ━━━ Hero: Narrow Text (1/3) + Wide Image (2/3) ━━━ */}
      <section className="relative min-h-screen lg:grid lg:grid-cols-3">
        {/* Left — Text (1/3) */}
        <div className="flex min-h-[50vh] flex-col justify-end bg-ivory px-6 pb-12 pt-32 md:px-12 lg:col-span-1 lg:min-h-screen lg:px-16 lg:pb-20">
          <Reveal variant="left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
              Immobilien · Erlangen
            </p>
          </Reveal>
          <Reveal variant="left" delay={100}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.9] tracking-tight">
              Horizonte
              <br />
              <span className="italic text-espresso">erweitern.</span>
            </h1>
          </Reveal>
          <Reveal variant="left" delay={200}>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-taupe">
              Wir kuratieren Lebensräume in Erlangen — mit ruhiger Klarheit
              und einem Auge für das Besondere.
            </p>
          </Reveal>
          <Reveal variant="left" delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Button asChild>
                <Link href="/immobilien">Objekte entdecken</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/kontakt">Kontakt</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right — Image (2/3) */}
        <div className="relative min-h-[50vh] lg:col-span-2 lg:min-h-screen">
          <Image
            src={images.hero}
            alt="Moderne Architektur in Erlangen"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute bottom-8 right-6 hidden lg:block">
            <p
              className="text-[10px] uppercase tracking-[0.3em] text-ivory/60"
              style={{ writingMode: "vertical-rl" }}
            >
              Seit 2009 in Erlangen
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ Services — Horizontal Scroll ━━━ */}
      <section className="py-20 md:py-28" id="services">
        <div className="px-6 md:px-12 lg:px-20">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                  Leistungen
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                  Was wir für Sie tun
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-taupe md:text-right">
                Drei Kernkompetenzen, ein Versprechen: Ihre Immobilie in den
                besten Händen.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="horizontal-scroll scrollbar-hide gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`w-[85vw] shrink-0 md:w-[50vw] lg:w-[40vw] ${
                i === 0 ? "pl-6 md:pl-12 lg:pl-20" : ""
              } ${i === services.length - 1 ? "pr-6 md:pr-12 lg:pr-20" : ""}`}
            >
              <div className="flex h-full flex-col justify-between bg-parchment p-8 md:p-10 lg:p-12">
                <div>
                  <p className="font-display text-7xl font-light text-warm-sand md:text-8xl lg:text-9xl">
                    {service.number}
                  </p>
                  <h3 className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-8 text-[15px] leading-relaxed text-taupe">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-taupe">
          &larr; Scrollen &rarr;
        </p>
      </section>

      {/* ━━━ Properties — Horizontal Scroll Gallery ━━━ */}
      <section className="py-20 md:py-28" id="portfolio">
        <div className="px-6 md:px-12 lg:px-20">
          <Reveal>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                  Portfolio
                </p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                  Ausgewählte Objekte
                </h2>
              </div>
              <Button variant="outline" asChild className="hidden md:inline-flex">
                <Link href="/immobilien">Alle ansehen</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="horizontal-scroll scrollbar-hide gap-6 md:gap-8">
          {properties.map((property, i) => (
            <div
              key={property.title}
              className={`relative h-[70vh] w-[85vw] shrink-0 md:w-[50vw] lg:w-[40vw] ${
                i === 0 ? "pl-6 md:pl-12 lg:pl-20" : ""
              } ${i === properties.length - 1 ? "pr-6 md:pr-12 lg:pr-20" : ""}`}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/60">
                    {property.location}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-snug text-ivory md:text-3xl">
                    {property.title}
                  </h3>
                  <div className="mt-3 flex gap-6 text-xs uppercase tracking-[0.15em] text-ivory/70">
                    <span>{property.area}</span>
                    <span className="text-ivory/30">|</span>
                    <span>{property.rooms}</span>
                  </div>
                  <div className="mt-5">
                    <Button variant="ivory" size="sm" asChild>
                      <Link href="/immobilien">Details ansehen</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.25em] text-taupe">
          &larr; Scrollen &rarr;
        </p>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/immobilien">Alle Objekte ansehen</Link>
          </Button>
        </div>
      </section>

      {/* ━━━ Team Teaser ━━━ */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.55fr_0.45fr] md:gap-16">
            <Reveal variant="left">
              <div className="relative h-[400px] md:h-[520px]">
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
                Über uns
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Persönlich.
                <br />
                <span className="italic">Verbindlich.</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-taupe">
                WEID Immobilien wurde mit der Überzeugung gegründet, dass
                Immobilienvermittlung Vertrauenssache ist. Wir kennen den
                Erlanger Markt wie unsere eigene Nachbarschaft — weil es
                genau das ist.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-taupe">
                Unser kleines Team verbindet lokale Verwurzelung mit
                zeitgemäßer Vermarktung. Kein Massengeschäft, sondern
                individuelle Betreuung mit Handschlagqualität.
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

      {/* ━━━ CTA — Full-Bleed Noir ━━━ */}
      <section className="bg-noir px-6 py-24 md:px-12 md:py-32 lg:px-20" id="contact">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">
              Lassen Sie uns sprechen
            </p>
          </Reveal>
          <Reveal variant="fade" delay={150}>
            <h2 className="mt-8 font-display text-4xl font-light leading-[0.95] text-ivory md:text-6xl lg:text-7xl">
              Ihr nächster Schritt
              <br />
              <span className="italic">beginnt hier.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={300}>
            <p className="mx-auto mt-8 max-w-lg text-[15px] leading-relaxed text-ivory/60">
              Ob Verkauf, Bewertung oder eine erste Einschätzung — wir
              nehmen uns Zeit für Ihr Anliegen. Diskret, persönlich und
              unverbindlich.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={400}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button variant="ivory" size="lg" asChild>
                <Link href="/kontakt">Gespräch vereinbaren</Link>
              </Button>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                oder rufen Sie an: 09131 / 123 456
              </span>
            </div>
          </Reveal>
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
                Persönlich, diskret, kompetent.
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
                  Über uns
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
                <p>Hauptstraße 42</p>
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
            <span>© {new Date().getFullYear()} WEID Immobilien · Erlangen</span>
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
        V7 — Horizontal Scroll
      </div>
    
      <VersionNav current={7} />
    </main>
  );
}
