import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";
import { VersionNav } from "@/components/version-nav";

/* ─── Images (kept to absolute minimum) ─── */

const images = {
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
      "Diskrete Strategien für anspruchsvolle Immobilien.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    description:
      "Fundierte Analysen auf Basis lokaler Expertise.",
  },
  {
    number: "03",
    title: "Beratung & Begleitung",
    description:
      "Persönliche Betreuung in jeder Phase.",
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

export default function V3HomePage() {
  return (
    <main className="bg-ivory text-noir">
      {/* ━━━ Header ━━━ */}
      <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-8 md:px-12 lg:px-20">
          <Link
            href="/v3"
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

      {/* ━━━ Hero — Pure Typography ━━━ */}
      <section className="flex min-h-screen flex-col justify-center px-6 pt-48 pb-32 md:px-12 md:pt-64 md:pb-40 lg:px-20">
        <div className="mx-auto w-full max-w-3xl">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Immobilien Erlangen
            </p>
          </Reveal>

          <Reveal variant="fade" delay={200}>
            <h1 className="mt-10 font-display text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.88] tracking-tight md:mt-14">
              Stille ist
              <br />
              ein <span className="italic">Raum.</span>
            </h1>
          </Reveal>

          <Reveal variant="fade" delay={400}>
            <p className="mt-10 max-w-sm text-[13px] leading-relaxed text-taupe md:mt-14">
              Wir vermitteln Lebensräume in Erlangen — mit ruhiger Klarheit
              und einem Auge für das Besondere.
            </p>
          </Reveal>

          <Reveal variant="fade" delay={500}>
            <div className="mt-12 h-px w-16 bg-noir/15 md:mt-16" />
          </Reveal>

          <Reveal variant="fade" delay={600}>
            <div className="mt-12 md:mt-16">
              <Button variant="ghost" asChild>
                <Link href="/immobilien">Objekte entdecken</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <Reveal variant="fade" delay={800}>
          <div className="mx-auto mt-auto flex flex-col items-center pt-20">
            <div className="h-12 w-px bg-noir/10" />
          </div>
        </Reveal>
      </section>

      {/* ━━━ Services — Vertical Text Blocks ━━━ */}
      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Leistungen
            </p>
          </Reveal>

          <div className="mt-20 md:mt-28">
            {services.map((service, i) => (
              <Reveal key={service.number} variant="fade" delay={i * 150}>
                <div
                  className={`${i > 0 ? "mt-20 md:mt-28" : ""}`}
                >
                  <span className="font-display text-[13px] text-taupe/50">
                    {service.number}
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-snug md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-taupe">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ Properties — Single Column, Extreme Whitespace ━━━ */}
      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Ausgewählte Objekte
            </p>
          </Reveal>

          <div className="mt-20 space-y-24 md:mt-28 md:space-y-40">
            {properties.map((property, i) => (
              <Reveal key={property.title} variant="fade" delay={i * 100}>
                <div>
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 md:mt-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-taupe">
                      {property.location}
                    </p>
                    <h3 className="mt-2 font-display text-xl leading-snug md:text-2xl">
                      {property.title}
                    </h3>
                    <div className="mt-3 flex gap-6 text-[11px] uppercase tracking-[0.15em] text-taupe">
                      <span>{property.area}</span>
                      <span>{property.rooms}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" delay={200}>
            <div className="mt-20 md:mt-28">
              <Button variant="ghost" asChild>
                <Link href="/immobilien">Alle Objekte ansehen</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Team Teaser — Single Image, Minimal Text ━━━ */}
      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:gap-16 lg:gap-20">
            <Reveal variant="fade">
              <div className="relative aspect-[3/4]">
                <Image
                  src={images.team}
                  alt="Das WEID Immobilien Team"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal variant="fade" delay={200} className="flex flex-col justify-end">
              <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
                Über uns
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                Persönlich.
                <br />
                <span className="italic">Verbindlich.</span>
              </h2>
              <p className="mt-6 text-[13px] leading-relaxed text-taupe">
                WEID Immobilien steht für Vertrauen, lokale Verwurzelung
                und individuelle Betreuung. Kein Massengeschäft — sondern
                Handschlagqualität.
              </p>
              <div className="mt-8">
                <Button variant="ghost" asChild>
                  <Link href="/ueber-uns">Mehr erfahren</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ━━━ CTA — Centered, Barely Styled ━━━ */}
      <section className="px-6 py-32 md:px-12 md:py-48 lg:px-20">
        <div className="mx-auto max-w-xl text-center">
          <Reveal variant="fade">
            <p className="text-[10px] uppercase tracking-[0.4em] text-taupe">
              Lassen Sie uns sprechen
            </p>
          </Reveal>
          <Reveal variant="fade" delay={150}>
            <h2 className="mt-8 font-display text-3xl font-light leading-tight md:text-5xl">
              Ihr nächster Schritt
              <br />
              beginnt <span className="italic">hier.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={300}>
            <p className="mx-auto mt-8 max-w-sm text-[13px] leading-relaxed text-taupe">
              Ob Verkauf, Bewertung oder eine erste Einschätzung — wir nehmen
              uns Zeit. Diskret und unverbindlich.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={400}>
            <div className="mt-12">
              <Button asChild>
                <Link href="/kontakt">Gespräch vereinbaren</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer className="bg-noir px-6 py-16 text-ivory md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-3xl">
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
                <p>Hauptstraße 42</p>
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
              © {new Date().getFullYear()} WEID Immobilien
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

      {/* Version indicator */}
      <div className="fixed bottom-4 left-4 z-50 rounded bg-noir/80 px-3 py-1.5 text-[10px] uppercase tracking-wider text-ivory/60">
        V3 — Ultra-Minimal
      </div>
    
      <VersionNav current={3} />
    </main>
  );
}
