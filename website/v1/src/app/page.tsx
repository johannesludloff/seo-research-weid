import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";
import { Marquee } from "@/components/marquee";
import { SplitImage } from "@/components/split-image";

/* ─── Unsplash images ─── */

const images = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  interlude:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop",
  property1:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  property2:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
  property3:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
  team: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop",
  ctaBg:
    "https://images.unsplash.com/photo-1600566753086-00f18f6b2d97?q=80&w=2400&auto=format&fit=crop",
};

/* ─── Data ─── */

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "200+", label: "Erfolgreiche Projekte" },
  { value: "98%", label: "Kundenzufriedenheit" },
];

const services = [
  {
    number: "01",
    title: "Verkauf & Vermarktung",
    description:
      "Diskrete, maßgeschneiderte Vermarktungsstrategien für anspruchsvolle Immobilien. Vom ersten Gespräch bis zum Notartermin.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    description:
      "Fundierte Marktwertanalysen auf Basis lokaler Expertise und aktueller Marktdaten. Transparent und nachvollziehbar.",
  },
  {
    number: "03",
    title: "Beratung & Begleitung",
    description:
      "Persönliche Betreuung in jeder Phase Ihrer Immobilienentscheidung. Ehrlich, kompetent und mit Blick fürs Detail.",
  },
];

const properties = [
  {
    image: images.property1,
    tag: "Verkauf",
    title: "Stadtvilla am Schlossgarten",
    location: "Erlangen · Altstadt",
    area: "285 m²",
    rooms: "7 Zimmer",
  },
  {
    image: images.property2,
    tag: "Exklusiv",
    title: "Penthouse mit Dachterrasse",
    location: "Erlangen · Röthelheimpark",
    area: "142 m²",
    rooms: "4 Zimmer",
  },
  {
    image: images.property3,
    tag: "Neubau",
    title: "Architektenhaus im Grünen",
    location: "Erlangen · Burgberg",
    area: "210 m²",
    rooms: "5 Zimmer",
  },
];

/* ─── Page ─── */

export default function Home() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
          <Link
            href="/"
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

      {/* ━━━ Hero: Split Screen ━━━ */}
      <section className="relative min-h-screen lg:grid lg:grid-cols-2">
        {/* Left — Text */}
        <div className="flex min-h-[60vh] flex-col justify-end bg-ivory px-6 pb-12 pt-32 md:px-12 lg:min-h-screen lg:px-20 lg:pb-20">
          <Reveal variant="left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
              Immobilien · Erlangen
            </p>
          </Reveal>
          <Reveal variant="left" delay={100}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[0.9] tracking-tight">
              Raum für
              <br />
              <span className="italic text-espresso">das Wesentliche.</span>
            </h1>
          </Reveal>
          <Reveal variant="left" delay={200}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-taupe">
              Wir vermitteln nicht nur Immobilien — wir kuratieren Lebensräume
              in Erlangen mit ruhiger Klarheit und einem Auge für das
              Besondere.
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

        {/* Right — Image */}
        <div className="relative min-h-[50vh] lg:min-h-screen">
          <Image
            src={images.hero}
            alt="Moderne Architektur in Erlangen"
            fill
            priority
            className="object-cover"
          />
          {/* Vertical text accent */}
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

      {/* ━━━ Marquee Divider ━━━ */}
      <Marquee
        className="border-y border-warm-sand/50 bg-parchment py-5"
        speed={50}
      >
        <span className="mx-12 font-display text-2xl italic text-taupe/60 md:text-3xl">
          Verkauf
        </span>
        <span className="mx-4 text-warm-sand">·</span>
        <span className="mx-12 font-display text-2xl italic text-taupe/60 md:text-3xl">
          Beratung
        </span>
        <span className="mx-4 text-warm-sand">·</span>
        <span className="mx-12 font-display text-2xl italic text-taupe/60 md:text-3xl">
          Wertermittlung
        </span>
        <span className="mx-4 text-warm-sand">·</span>
        <span className="mx-12 font-display text-2xl italic text-taupe/60 md:text-3xl">
          Vermarktung
        </span>
        <span className="mx-4 text-warm-sand">·</span>
        <span className="mx-12 font-display text-2xl italic text-taupe/60 md:text-3xl">
          Expertise
        </span>
        <span className="mx-4 text-warm-sand">·</span>
      </Marquee>

      {/* ━━━ Stats Row ━━━ */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-warm-sand">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 120}>
                <div className="text-center md:px-8">
                  <p className="font-display text-6xl font-light tracking-tight md:text-7xl lg:text-8xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-taupe">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Services — Numbered List ━━━ */}
      <section className="px-6 py-20 md:px-12 lg:px-20" id="services">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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

          <div className="divide-y divide-warm-sand border-y border-warm-sand">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={i * 100}>
                <div className="group grid gap-4 py-10 transition-colors hover:bg-parchment/40 md:grid-cols-[80px_1fr_1.2fr] md:gap-8 md:px-4 md:py-12">
                  <p className="font-display text-4xl font-light text-warm-sand transition-colors group-hover:text-espresso md:text-5xl">
                    {service.number}
                  </p>
                  <h3 className="font-display text-2xl leading-snug md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-taupe md:pt-2">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Full-Bleed Interlude Image ━━━ */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={images.interlude}
          alt="Architektur Detail"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-noir/20" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <Reveal variant="fade">
            <p className="text-center font-display text-3xl italic text-ivory md:text-5xl lg:text-6xl">
              &ldquo;Substanz vor Lautstärke&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Properties — Alternating Layout ━━━ */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20" id="portfolio">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-16 flex items-end justify-between">
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

          <div className="space-y-16 md:space-y-24">
            {properties.map((property, i) => {
              const isReversed = i % 2 === 1;
              return (
                <Reveal key={property.title} variant={isReversed ? "right" : "left"}>
                  <div
                    className={`grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:gap-10 ${
                      isReversed ? "md:direction-rtl" : ""
                    }`}
                    style={isReversed ? { direction: "rtl" } : undefined}
                  >
                    <div
                      className="relative h-[320px] md:h-[440px]"
                      style={{ direction: "ltr" }}
                    >
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-taupe">
                        {property.tag}
                      </span>
                    </div>
                    <div
                      className="flex flex-col justify-center"
                      style={{ direction: "ltr" }}
                    >
                      <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                        {property.location}
                      </p>
                      <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                        {property.title}
                      </h3>
                      <div className="mt-4 flex gap-6 text-xs uppercase tracking-[0.15em] text-taupe">
                        <span>{property.area}</span>
                        <span className="text-warm-sand">|</span>
                        <span>{property.rooms}</span>
                      </div>
                      <div className="mt-6 h-px w-16 bg-warm-sand" />
                      <div className="mt-6">
                        <Button variant="ghost" asChild>
                          <Link href="/immobilien">Details ansehen →</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/immobilien">Alle Objekte ansehen</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Team / About Teaser ━━━ */}
      <section className="bg-parchment px-6 py-20 md:px-12 md:py-28 lg:px-20">
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
                  Ihr nächster Schritt
                  <br />
                  <span className="italic">beginnt hier.</span>
                </h2>
                <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ivory/60">
                  Ob Verkauf, Bewertung oder eine erste Einschätzung — wir
                  nehmen uns Zeit für Ihr Anliegen. Diskret, persönlich und
                  unverbindlich.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Button variant="ivory" size="lg" asChild>
                    <Link href="/kontakt">Gespräch vereinbaren</Link>
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
    </main>
  );
}
