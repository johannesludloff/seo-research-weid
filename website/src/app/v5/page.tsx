import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";

/* ─── Data ─── */

const services = [
  {
    number: "01",
    title: "Verkauf & Vermarktung",
    description:
      "Diskrete, maßgeschneiderte Vermarktungsstrategien für anspruchsvolle Immobilien. Vom ersten Gespräch bis zum Notartermin — wir begleiten Sie mit Erfahrung und Feingefühl.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    description:
      "Fundierte Marktwertanalysen auf Basis lokaler Expertise und aktueller Marktdaten. Transparent, nachvollziehbar und marktgerecht.",
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
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    title: "Stadtvilla am Schlossgarten",
    location: "Erlangen Altstadt",
    area: "285 m²",
    rooms: "7 Zimmer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    title: "Penthouse mit Dachterrasse",
    location: "Röthelheimpark",
    area: "142 m²",
    rooms: "4 Zimmer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    title: "Architektenhaus im Grünen",
    location: "Burgberg",
    area: "210 m²",
    rooms: "5 Zimmer",
  },
];

const navLinks = [
  { href: "/verkaufen", label: "Verkaufen" },
  { href: "/immobilien", label: "Immobilien" },
  { href: "/wertermittlung", label: "Wertermittlung" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

const footerNav = [
  { href: "/verkaufen", label: "Verkaufen" },
  { href: "/immobilien", label: "Immobilien" },
  { href: "/wertermittlung", label: "Wertermittlung" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

/* ─── Page ─── */

export default function V5HomePage() {
  return (
    <div className="min-h-screen bg-ivory font-body text-noir">
      {/* ── Version Badge ── */}
      <div className="fixed bottom-4 left-4 z-50 rounded bg-noir/80 px-3 py-1.5 text-[10px] uppercase tracking-wider text-ivory/60">
        V5 — Typography First
      </div>

      {/* ════════════════════════════════════════════════════════════
          1. HEADER
      ════════════════════════════════════════════════════════════ */}
      <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
          {/* Logo */}
          <Link href="/" className="text-[13px] font-medium uppercase tracking-[0.2em] text-ivory">
            WEID
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] text-ivory/70 transition-colors hover:text-ivory"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════════════════════
          2. HERO — Pure Typography
      ════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ivory px-6 md:px-10 lg:px-16">
        {/* Decorative background letter */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
        >
          <span className="font-display text-[50vw] font-light leading-none text-parchment/40">
            R
          </span>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full text-center">
          <Reveal variant="fade" delay={100}>
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-taupe">
              Weid Immobilien — Erlangen
            </p>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <h1 className="font-display text-[clamp(5rem,15vw,14rem)] font-light uppercase leading-[0.85] tracking-tight text-noir">
              RAUM
            </h1>
          </Reveal>

          <Reveal variant="up" delay={400}>
            <p className="mt-4 font-display text-[clamp(1.5rem,3.5vw,3.5rem)] italic leading-tight text-espresso/80 md:mt-6">
              für das Wesentliche
            </p>
          </Reveal>

          <Reveal variant="fade" delay={600}>
            <p className="mx-auto mt-8 max-w-md text-[14px] leading-relaxed text-taupe md:mt-10">
              Wir vermitteln nicht nur Immobilien — wir schaffen Verbindungen
              zwischen Menschen und den Räumen, die ihr Leben bereichern.
            </p>
          </Reveal>

          <Reveal variant="up" delay={750}>
            <div className="mt-10 flex items-center justify-center gap-4 md:mt-12">
              <Button asChild>
                <Link href="/immobilien">Immobilien entdecken</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/kontakt">Kontakt</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. SERVICES
      ════════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden border-t border-warm-sand/50 bg-ivory px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal variant="up">
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-taupe">
              Leistungen
            </p>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <h2 className="mb-20 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] text-noir md:mb-28">
              Was wir für
              <br />
              <span className="italic text-espresso">Sie tun</span>
            </h2>
          </Reveal>

          <div className="space-y-0">
            {services.map((service, i) => (
              <Reveal key={service.number} variant="up" delay={i * 120}>
                <div className="border-t border-warm-sand/50 py-10 md:py-14 lg:py-16">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12 lg:gap-16">
                    {/* Number */}
                    <span className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-none text-parchment">
                      {service.number}
                    </span>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="font-display text-[clamp(1.5rem,3vw,2.8rem)] font-light leading-tight text-noir">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-taupe">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden items-center self-center md:flex">
                      <Link
                        href="/kontakt"
                        className="text-[11px] uppercase tracking-[0.2em] text-taupe transition-colors hover:text-noir"
                      >
                        Mehr erfahren &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            {/* Bottom border */}
            <div className="border-t border-warm-sand/50" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. PROPERTIES
      ════════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-ivory px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1440px]">
          {/* Section heading */}
          <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div>
              <Reveal variant="up">
                <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-taupe">
                  Ausgewählte Objekte
                </p>
              </Reveal>
              <Reveal variant="up" delay={100}>
                <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] text-noir">
                  Aktuelle
                  <br />
                  <span className="italic text-espresso">Immobilien</span>
                </h2>
              </Reveal>
            </div>
            <Reveal variant="fade" delay={200}>
              <Button variant="outline" asChild>
                <Link href="/immobilien">Alle Objekte</Link>
              </Button>
            </Reveal>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {properties.map((property, i) => (
              <Reveal key={property.title} variant="up" delay={i * 150}>
                <Link href="/immobilien" className="group relative block">
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-transparent" />

                    {/* Text overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-ivory/60">
                        {property.location}
                      </p>
                      <h3 className="font-display text-[clamp(1.1rem,1.8vw,1.5rem)] font-light leading-tight text-ivory">
                        {property.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-4 text-[11px] tracking-wider text-ivory/50">
                        <span>{property.area}</span>
                        <span className="h-px w-3 bg-ivory/30" />
                        <span>{property.rooms}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. TEAM TEASER
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ivory px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        {/* Background word */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
        >
          <span className="font-display text-[clamp(6rem,12vw,12rem)] font-light uppercase leading-none tracking-tight text-parchment">
            TEAM
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16 lg:gap-24">
            {/* Image */}
            <Reveal variant="left" delay={100}>
              <div className="relative h-[320px] w-full overflow-hidden md:h-[420px] md:w-[360px] lg:w-[440px]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop"
                  alt="Das WEID Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
            </Reveal>

            {/* Text */}
            <Reveal variant="right" delay={200}>
              <div className="max-w-lg">
                <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-taupe">
                  Über uns
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.05] text-noir">
                  Persönlich.
                  <br />
                  <span className="italic text-espresso">
                    Verbindlich. Vor Ort.
                  </span>
                </h2>
                <p className="mt-6 text-[14px] leading-relaxed text-taupe">
                  Hinter WEID Immobilien steht ein Team mit tiefem Verständnis
                  für den Erlanger Immobilienmarkt. Wir kennen die Lagen, die
                  Nachbarschaften und die Menschen — und verbinden sie mit den
                  richtigen Immobilien.
                </p>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="/ueber-uns">Team kennenlernen</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-noir px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">
        {/* Decorative background text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-end justify-end overflow-hidden pr-8 pb-8"
        >
          <span className="font-display text-[20vw] font-light uppercase leading-none text-ivory/[0.03]">
            WEID
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] text-center">
          <Reveal variant="up">
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-ivory/40">
              Lassen Sie uns sprechen
            </p>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[0.9] text-ivory">
              Ihr nächster
              <br />
              <span className="italic text-warm-sand">Schritt</span>
            </h2>
          </Reveal>

          <Reveal variant="fade" delay={300}>
            <p className="mx-auto mt-8 max-w-md text-[14px] leading-relaxed text-ivory/50">
              Ob Verkauf, Bewertung oder Beratung — ein unverbindliches
              Erstgespräch ist der beste Anfang.
            </p>
          </Reveal>

          <Reveal variant="up" delay={450}>
            <div className="mt-10">
              <Button variant="ivory" size="lg" asChild>
                <Link href="/kontakt">Gespräch vereinbaren</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. FOOTER
      ════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-ivory/10 bg-noir px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="text-[13px] font-medium uppercase tracking-[0.2em] text-ivory"
              >
                WEID
              </Link>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ivory/40">
                Immobilien mit Substanz. Beratung mit Haltung. Seit über 15
                Jahren in Erlangen verwurzelt.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-ivory/30">
                Navigation
              </p>
              <nav className="flex flex-col gap-3">
                {footerNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-ivory/50 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-ivory/30">
                Kontakt
              </p>
              <div className="space-y-3 text-[13px] leading-relaxed text-ivory/50">
                <p>
                  WEID Immobilien
                  <br />
                  Hauptstraße 42
                  <br />
                  91054 Erlangen
                </p>
                <p>
                  <a
                    href="tel:+4991311234567"
                    className="transition-colors hover:text-ivory"
                  >
                    +49 9131 123 45 67
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

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 md:flex-row">
            <p className="text-[11px] text-ivory/30">
              &copy; {new Date().getFullYear()} WEID Immobilien. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="text-[11px] text-ivory/30 transition-colors hover:text-ivory/60"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-[11px] text-ivory/30 transition-colors hover:text-ivory/60"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
