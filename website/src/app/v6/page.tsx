import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";

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
    title: "Verkauf & Vermarktung",
    description:
      "Diskrete Strategien und maßgeschneiderte Konzepte für den erfolgreichen Verkauf anspruchsvoller Immobilien in Erlangen und Umgebung.",
  },
  {
    title: "Wertermittlung",
    description:
      "Fundierte Marktanalysen und präzise Bewertungen auf Basis langjähriger lokaler Expertise und aktueller Marktdaten.",
  },
  {
    title: "Beratung & Begleitung",
    description:
      "Persönliche Betreuung und vertrauensvolle Begleitung in jeder Phase Ihres Immobilienvorhabens.",
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

export default function V6HomePage() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex flex-col items-center px-6 pt-8 pb-4 md:px-12 lg:px-20">
          <Link
            href="/v6"
            className="font-display text-xl tracking-[0.15em] text-ivory"
          >
            WEID IMMOBILIEN
          </Link>
          <nav className="mt-3 hidden items-center gap-10 text-[10px] font-medium uppercase tracking-[0.25em] text-ivory md:flex">
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
              Über uns
            </Link>
            <Link
              className="transition-opacity hover:opacity-50"
              href="/kontakt"
            >
              Kontakt
            </Link>
          </nav>
          <div className="absolute right-6 top-8 text-ivory md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* ━━━ Hero ━━━ */}
      <section className="px-6 pt-40 pb-24 md:px-12 md:pt-48 md:pb-32 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Immobilien in Erlangen
            </p>
          </Reveal>

          <Reveal variant="fade" delay={150}>
            <div className="mx-auto mt-8 h-px w-16 bg-warm-sand" />
          </Reveal>

          <Reveal variant="up" delay={200}>
            <h1 className="mx-auto mt-8 max-w-3xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.05] tracking-tight">
              Eleganz hat eine Adresse.
            </h1>
          </Reveal>

          <Reveal variant="fade" delay={350}>
            <div className="mx-auto mt-8 h-px w-16 bg-warm-sand" />
          </Reveal>

          <Reveal variant="fade" delay={450}>
            <p className="mx-auto mt-8 max-w-lg text-[13px] leading-relaxed text-taupe">
              Wir vermitteln ausgewählte Wohnimmobilien in Erlangen und Umgebung
              — mit Diskretion, Erfahrung und einem Gespür für das Besondere.
            </p>
          </Reveal>

          <Reveal variant="up" delay={500}>
            <div className="relative mt-16 aspect-[16/10] w-full md:mt-20">
              <Image
                src={images.hero}
                alt="Elegante Immobilie in Erlangen"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Services ━━━ */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Unsere Leistungen
            </p>
          </Reveal>

          <Reveal variant="fade" delay={100}>
            <div className="mx-auto mt-6 h-px w-16 bg-warm-sand" />
          </Reveal>

          <div className="mt-20 md:mt-24">
            {services.map((service, i) => (
              <Reveal key={service.title} variant="up" delay={i * 150}>
                <div className="text-center">
                  {i > 0 && (
                    <div className="mx-auto mb-16 h-px w-24 bg-warm-sand/50 md:mb-20" />
                  )}
                  <h3 className="font-display text-2xl leading-snug md:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-taupe">
                    {service.description}
                  </p>
                  {i < services.length - 1 && (
                    <div className="mt-16 md:mt-20" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Properties ━━━ */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Ausgewählte Objekte
            </p>
          </Reveal>

          <Reveal variant="fade" delay={100}>
            <div className="mx-auto mt-6 h-px w-16 bg-warm-sand" />
          </Reveal>

          <Reveal variant="fade" delay={150}>
            <h2 className="mx-auto mt-8 max-w-2xl font-display text-3xl font-light leading-tight md:text-4xl">
              Immobilien mit Charakter
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-12">
            {properties.map((property, i) => (
              <Reveal key={property.title} variant="up" delay={i * 150}>
                <div className="text-center">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mx-auto mt-6 h-px w-12 bg-warm-sand" />
                  <h3 className="mt-5 font-display text-xl leading-snug md:text-2xl">
                    {property.title}
                  </h3>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-taupe">
                    {property.location} · {property.area} · {property.rooms}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={500}>
            <div className="mt-16 md:mt-20">
              <Button variant="outline" asChild>
                <Link href="/immobilien">Alle Objekte ansehen</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Team Teaser ━━━ */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Über uns
            </p>
          </Reveal>

          <Reveal variant="fade" delay={100}>
            <div className="mx-auto mt-6 h-px w-16 bg-warm-sand" />
          </Reveal>

          <Reveal variant="up" delay={200}>
            <h2 className="mx-auto mt-8 max-w-2xl font-display text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              Persönlich. <span className="italic">Verbindlich.</span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={350}>
            <div className="relative mx-auto mt-12 aspect-[4/3] max-w-2xl md:mt-16">
              <Image
                src={images.team}
                alt="Das WEID Immobilien Team"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal variant="fade" delay={450}>
            <p className="mx-auto mt-10 max-w-lg text-[13px] leading-relaxed text-taupe md:mt-12">
              WEID Immobilien steht für Vertrauen, lokale Verwurzelung und
              individuelle Betreuung. Kein Massengeschäft — sondern
              Handschlagqualität. Seit Jahren begleiten wir unsere Kunden in
              Erlangen mit persönlichem Engagement.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={550}>
            <div className="mt-10">
              <Button variant="ghost" asChild>
                <Link href="/ueber-uns">Mehr erfahren</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="bg-parchment px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade">
            <div className="mx-auto h-px w-16 bg-warm-sand" />
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mx-auto mt-10 max-w-xl font-display text-3xl font-light leading-tight md:text-4xl lg:text-5xl">
              Lassen Sie uns ins Gespräch kommen.
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={300}>
            <p className="mx-auto mt-8 max-w-md text-[13px] leading-relaxed text-taupe">
              Ob Verkauf, Bewertung oder eine erste unverbindliche Einschätzung
              — wir nehmen uns Zeit für Ihr Anliegen. Diskret und persönlich.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={400}>
            <div className="mx-auto mt-8 h-px w-16 bg-warm-sand" />
          </Reveal>

          <Reveal variant="up" delay={500}>
            <div className="mt-10">
              <Button asChild>
                <Link href="/kontakt">Gespräch vereinbaren</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="bg-noir px-6 py-16 text-ivory md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo */}
          <Link
            href="/v6"
            className="inline-block font-display text-xl tracking-[0.15em]"
          >
            WEID IMMOBILIEN
          </Link>

          {/* Nav */}
          <nav className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-ivory/50">
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
              Über uns
            </Link>
            <Link
              href="/kontakt"
              className="transition-colors hover:text-ivory"
            >
              Kontakt
            </Link>
          </nav>

          {/* Divider */}
          <div className="mx-auto mt-10 h-px w-16 bg-ivory/15" />

          {/* Contact */}
          <div className="mt-10 text-[12px] leading-relaxed text-ivory/40">
            <p>Hauptstraße 42 · 91054 Erlangen</p>
            <p className="mt-2">
              <a
                href="tel:+499131123456"
                className="transition-colors hover:text-ivory"
              >
                09131 / 123 456
              </a>
              {" · "}
              <a
                href="mailto:info@weid-immobilien.de"
                className="transition-colors hover:text-ivory"
              >
                info@weid-immobilien.de
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto mt-10 h-px w-16 bg-ivory/15" />

          {/* Legal */}
          <div className="mt-8 flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-ivory/20 md:flex-row md:justify-center md:gap-8">
            <span>© {new Date().getFullYear()} WEID Immobilien</span>
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
        V6 — Classic Centered
      </div>
    </main>
  );
}
