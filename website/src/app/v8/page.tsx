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
      "Wir inszenieren Ihre Immobilie mit Feingefuhl und Strategie — fur den richtigen Kaufer zum richtigen Zeitpunkt.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    description:
      "Fundierte Marktanalysen und lokale Expertise bilden die Grundlage fur eine realistische Bewertung Ihrer Immobilie.",
  },
  {
    number: "03",
    title: "Beratung & Begleitung",
    description:
      "Von der ersten Idee bis zur Schlusselubergabe — wir stehen Ihnen personlich zur Seite.",
  },
];

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
    location: "Rothelheimpark",
    area: "142 m\u00B2",
    rooms: "4 Zimmer",
  },
  {
    image: images.property3,
    title: "Architektenhaus im Grunen",
    location: "Burgberg",
    area: "210 m\u00B2",
    rooms: "5 Zimmer",
  },
];

/* ─── Page ─── */

export default function V8HomePage() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-20">
          <Link
            href="/v8"
            className="font-display text-lg tracking-[0.12em] text-ivory"
          >
            WEID
          </Link>
          <nav className="hidden items-center gap-12 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory md:flex">
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

      {/* ━━━ Chapter 1: Hero ━━━ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Architektonisches Meisterwerk"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-noir/60" />
        </div>

        {/* Chapter indicator */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 md:left-12 lg:left-20">
          <Reveal variant="fade" delay={600}>
            <span className="font-display text-[11px] tracking-[0.3em] text-ivory/30">
              01
            </span>
          </Reveal>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 text-center text-ivory md:px-12 lg:px-20">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.5em] text-ivory/50">
              WEID Immobilien Erlangen
            </p>
          </Reveal>

          <Reveal variant="fade" delay={300}>
            <h1 className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[0.92] tracking-tight">
              Eine Geschichte von
              <br />
              Raum und <span className="italic">Zeit.</span>
            </h1>
          </Reveal>

          <Reveal variant="fade" delay={500}>
            <p className="mx-auto mt-8 max-w-md text-[13px] leading-relaxed text-ivory/60">
              Wir vermitteln nicht nur Immobilien. Wir erzahlen die Geschichte
              eines Ortes — und finden den Menschen, der sie weiterschreibt.
            </p>
          </Reveal>
        </div>

        {/* Animated down arrow */}
        <Reveal variant="fade" delay={800}>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/40">
                Scrollen
              </span>
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                className="animate-bounce text-ivory/40"
              >
                <path
                  d="M8 0v20m0 0l6-6m-6 6l-6-6"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ━━━ Chapter 2: Philosophy ━━━ */}
      <section className="relative flex min-h-screen items-center justify-center bg-ivory px-6 md:px-12 lg:px-20">
        {/* Chapter indicator */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 md:left-12 lg:left-20">
          <Reveal variant="fade">
            <span className="font-display text-[11px] tracking-[0.3em] text-taupe/40">
              02
            </span>
          </Reveal>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
              Philosophie
            </p>
          </Reveal>

          <Reveal variant="fade" delay={200}>
            <h2 className="mt-10 font-display text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.05] tracking-tight">
              Wir glauben, dass jeder
              <br />
              Raum eine <span className="italic">Seele</span> hat.
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={400}>
            <div className="mx-auto mt-10 h-px w-16 bg-taupe/20" />
          </Reveal>

          <Reveal variant="fade" delay={500}>
            <p className="mx-auto mt-10 max-w-lg text-[13px] leading-[1.8] text-taupe">
              Jede Immobilie tragt eine Geschichte in sich — von den Menschen,
              die in ihr gelebt haben, von den Raumen, die Erinnerungen bewahren.
              Unsere Aufgabe ist es, diese Geschichte zu verstehen und den
              nachsten Erzahler zu finden. Mit Geduld, mit Respekt, mit einem
              Blick fur das Unsichtbare.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Chapter 3: Services ━━━ */}
      <section className="relative flex min-h-screen items-center bg-parchment px-6 py-32 md:px-12 md:py-40 lg:px-20">
        {/* Chapter indicator */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 md:left-12 lg:left-20">
          <Reveal variant="up">
            <span className="font-display text-[11px] tracking-[0.3em] text-taupe/40">
              03
            </span>
          </Reveal>
        </div>

        <div className="mx-auto w-full max-w-5xl">
          <Reveal variant="up">
            <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
              Leistungen
            </p>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h2 className="mt-6 font-display text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              Was wir <span className="italic">tun.</span>
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-24">
            {services.map((service, i) => (
              <Reveal key={service.number} variant="up" delay={i * 200}>
                <div
                  className={`flex flex-col gap-4 border-t border-taupe/20 py-10 md:flex-row md:items-baseline md:gap-12 md:py-14 ${
                    i === services.length - 1 ? "border-b" : ""
                  }`}
                >
                  <span className="font-display text-[13px] text-taupe/50">
                    {service.number}
                  </span>
                  <h3 className="font-display text-xl leading-snug md:w-64 md:text-2xl lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="max-w-sm text-[13px] leading-relaxed text-taupe md:ml-auto">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Chapter 4: Properties ━━━ */}
      <section className="relative flex min-h-screen items-center bg-ivory px-6 py-32 md:px-12 md:py-40 lg:px-20">
        {/* Chapter indicator */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 md:left-12 lg:left-20">
          <Reveal variant="up">
            <span className="font-display text-[11px] tracking-[0.3em] text-taupe/40">
              04
            </span>
          </Reveal>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <Reveal variant="up">
            <p className="text-[10px] uppercase tracking-[0.5em] text-taupe">
              Ausgewahlte Objekte
            </p>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h2 className="mt-6 font-display text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              Raume, die <span className="italic">Geschichten</span> erzahlen.
            </h2>
          </Reveal>

          {/* Featured property */}
          <Reveal variant="up" delay={200}>
            <div className="mt-12 md:mt-20">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={properties[0].image}
                  alt={properties[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 flex flex-col gap-2 md:mt-8 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">
                    {properties[0].title}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-taupe">
                    {properties[0].location}
                  </p>
                </div>
                <div className="flex gap-6 text-[11px] uppercase tracking-[0.15em] text-taupe">
                  <span>{properties[0].area}</span>
                  <span>{properties[0].rooms}</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Two smaller properties */}
          <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
            {properties.slice(1).map((property, i) => (
              <Reveal key={property.title} variant="up" delay={300 + i * 150}>
                <div>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-5 md:mt-6">
                    <h3 className="font-display text-lg leading-snug md:text-xl">
                      {property.title}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-taupe">
                      {property.location}
                    </p>
                    <div className="mt-2 flex gap-6 text-[11px] uppercase tracking-[0.15em] text-taupe">
                      <span>{property.area}</span>
                      <span>{property.rooms}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={400}>
            <div className="mt-12 md:mt-16">
              <Button variant="outline" asChild>
                <Link href="/immobilien">Alle Objekte entdecken</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Chapter 5: Team ━━━ */}
      <section className="relative flex min-h-screen items-center bg-noir text-ivory">
        {/* Chapter indicator */}
        <div className="absolute left-6 top-1/2 z-10 -translate-y-1/2 md:left-12 lg:left-20">
          <Reveal variant="fade">
            <span className="font-display text-[11px] tracking-[0.3em] text-ivory/30">
              05
            </span>
          </Reveal>
        </div>

        <div className="grid w-full md:grid-cols-2">
          {/* Image left */}
          <Reveal variant="left">
            <div className="relative aspect-[3/4] w-full md:aspect-auto md:h-screen">
              <Image
                src={images.team}
                alt="Das WEID Immobilien Team"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Text right */}
          <div className="flex items-center px-6 py-20 md:px-12 md:py-0 lg:px-20">
            <div className="max-w-md">
              <Reveal variant="fade" delay={200}>
                <p className="text-[10px] uppercase tracking-[0.5em] text-ivory/40">
                  Uber uns
                </p>
              </Reveal>

              <Reveal variant="fade" delay={300}>
                <h2 className="mt-6 font-display text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
                  Hinter jeder Geschichte
                  <br />
                  stehen <span className="italic">Menschen.</span>
                </h2>
              </Reveal>

              <Reveal variant="fade" delay={400}>
                <div className="mt-8 h-px w-12 bg-ivory/20" />
              </Reveal>

              <Reveal variant="fade" delay={500}>
                <p className="mt-8 text-[13px] leading-[1.8] text-ivory/60">
                  WEID Immobilien steht fur Vertrauen, lokale Verwurzelung
                  und individuelle Betreuung. Wir sind kein Maklerkonzern —
                  wir sind Ihr personlicher Begleiter auf einem der wichtigsten
                  Wege Ihres Lebens.
                </p>
              </Reveal>

              <Reveal variant="fade" delay={600}>
                <p className="mt-6 text-[13px] leading-[1.8] text-ivory/60">
                  In Erlangen verwurzelt, mit einem Netzwerk, das auf Handschlag
                  basiert. So arbeiten wir — seit uber 20 Jahren.
                </p>
              </Reveal>

              <Reveal variant="fade" delay={700}>
                <div className="mt-10">
                  <Button variant="ivory" asChild>
                    <Link href="/ueber-uns">Team kennenlernen</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Chapter 6: CTA ━━━ */}
      <section className="relative flex min-h-screen items-center justify-center bg-ivory px-6 md:px-12 lg:px-20">
        {/* Chapter indicator */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 md:left-12 lg:left-20">
          <Reveal variant="fade">
            <span className="font-display text-[11px] tracking-[0.3em] text-taupe/40">
              06
            </span>
          </Reveal>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade">
            <h2 className="font-display text-[clamp(2rem,5.5vw,5rem)] font-light leading-[1.05] tracking-tight">
              Das nachste Kapitel
              <br />
              schreiben wir
              <br />
              <span className="italic">gemeinsam.</span>
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={300}>
            <div className="mt-12 md:mt-16">
              <Button size="lg" asChild>
                <Link href="/kontakt">Gesprach vereinbaren</Link>
              </Button>
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
              <p className="font-display text-lg tracking-[0.12em]">WEID</p>
              <p className="mt-4 text-[12px] leading-relaxed text-ivory/40">
                Ihr Immobilienmakler
                <br />
                in Erlangen.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/30">
                Navigation
              </p>
              <nav className="mt-4 flex flex-col gap-3">
                <Link
                  href="/verkaufen"
                  className="text-[12px] text-ivory/50 transition-colors hover:text-ivory"
                >
                  Verkaufen
                </Link>
                <Link
                  href="/immobilien"
                  className="text-[12px] text-ivory/50 transition-colors hover:text-ivory"
                >
                  Immobilien
                </Link>
                <Link
                  href="/wertermittlung"
                  className="text-[12px] text-ivory/50 transition-colors hover:text-ivory"
                >
                  Wertermittlung
                </Link>
                <Link
                  href="/ueber-uns"
                  className="text-[12px] text-ivory/50 transition-colors hover:text-ivory"
                >
                  Uber uns
                </Link>
                <Link
                  href="/kontakt"
                  className="text-[12px] text-ivory/50 transition-colors hover:text-ivory"
                >
                  Kontakt
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/30">
                Kontakt
              </p>
              <div className="mt-4 space-y-2 text-[12px] text-ivory/50">
                <p>Hauptstrasse 42</p>
                <p>91054 Erlangen</p>
                <p className="mt-3">
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
          <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.2em] text-ivory/20 md:flex-row md:items-center md:justify-between">
            <span>
              &copy; {new Date().getFullYear()} WEID Immobilien
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
        V8 — Story Scroll
      </div>
    
      <VersionNav current={8} />
    </main>
  );
}
