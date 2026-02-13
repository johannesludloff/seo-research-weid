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

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "200+", label: "Projekte realisiert" },
  { value: "98%", label: "Zufriedenheit" },
  { value: "Erlangen", label: "& Region" },
];

const services = [
  {
    number: "01",
    title: "Verkauf & Vermarktung",
    description:
      "Diskrete Strategien und maßgeschneiderte Konzepte für den erfolgreichen Verkauf anspruchsvoller Immobilien. Von der Marktanalyse über die zielgruppengerechte Präsentation bis zum notariellen Abschluss begleiten wir jeden Schritt mit Präzision und Erfahrung.",
  },
  {
    number: "02",
    title: "Wertermittlung",
    description:
      "Fundierte Marktanalysen und präzise Bewertungen auf Basis langjähriger lokaler Expertise. Wir berücksichtigen aktuelle Marktdaten, Mikrolage-Faktoren und individuelle Objektmerkmale für eine realistische Einschätzung Ihres Immobilienwerts.",
  },
  {
    number: "03",
    title: "Beratung & Begleitung",
    description:
      "Persönliche Betreuung und vertrauensvolle Begleitung in jeder Phase Ihres Immobilienvorhabens. Ob Kauf, Verkauf oder strategische Portfolioplanung — wir stehen Ihnen mit Expertise und Diskretion zur Seite.",
  },
];

const properties = [
  {
    image: images.property1,
    title: "Stadtvilla am Schlossgarten",
    location: "Erlangen Altstadt",
    area: "285 m²",
    rooms: "7 Zimmer",
    type: "Villa",
    year: "1928",
    price: "Auf Anfrage",
  },
  {
    image: images.property2,
    title: "Penthouse mit Dachterrasse",
    location: "Röthelheimpark",
    area: "142 m²",
    rooms: "4 Zimmer",
    type: "Penthouse",
    year: "2019",
    price: "Auf Anfrage",
  },
  {
    image: images.property3,
    title: "Architektenhaus im Grünen",
    location: "Burgberg",
    area: "210 m²",
    rooms: "5 Zimmer",
    type: "Einfamilienhaus",
    year: "2021",
    price: "Auf Anfrage",
  },
];

const navLinks = [
  { href: "/verkaufen", label: "Verkaufen" },
  { href: "/immobilien", label: "Immobilien" },
  { href: "/wertermittlung", label: "Wertermittlung" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

/* ─── Page ─── */

export default function V9HomePage() {
  return (
    <main className="min-h-screen bg-ivory text-noir">
      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 items-center px-6 py-5 lg:px-8">
          <div className="col-span-3">
            <Link
              href="/"
              className="font-display text-xl font-light tracking-wide text-ivory"
            >
              WEID
            </Link>
          </div>
          <nav className="col-span-6 hidden justify-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.16em] text-ivory transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="col-span-9 flex justify-end md:col-span-3">
            <MobileNav />
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-parchment pt-20">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-1">
            {/* Image — columns 1-8 */}
            <div className="relative aspect-[4/3] lg:col-span-8 lg:col-start-1 lg:row-start-1 lg:aspect-auto lg:h-[85vh]">
              <Image
                src={images.hero}
                alt="Moderne Architektur — WEID Immobilien"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            {/* Text block — columns 7-12, overlapping image */}
            <div className="bg-ivory p-8 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:z-10 lg:my-auto lg:p-12">
              <Reveal variant="up">
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-taupe">
                  Immobilien in Erlangen
                </p>
                <h1 className="font-display text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                  Struktur.
                  <br />
                  Substanz.
                  <br />
                  Stil.
                </h1>
                <p className="mt-6 max-w-md text-[14px] leading-relaxed text-taupe">
                  WEID Immobilien verbindet architektonisches Verständnis mit
                  fundierter Marktkenntnis. Seit über 15 Jahren Ihr Partner für
                  anspruchsvolle Immobilien in Erlangen und der Metropolregion
                  Nürnberg.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button asChild>
                    <Link href="/immobilien">Immobilien entdecken</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/kontakt">Kontakt</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="border-b border-t border-warm-sand bg-ivory">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} variant="up" delay={i * 100}>
                <div
                  className={`px-6 py-8 lg:px-8 lg:py-10 ${i > 0 ? "border-l border-warm-sand" : ""}`}
                >
                  <p className="font-display text-3xl font-light tracking-tight lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-taupe">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <Reveal variant="up">
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  Leistungen
                </p>
                <h2 className="mt-3 font-display text-3xl font-light tracking-tight lg:text-4xl">
                  Was wir tun
                </h2>
              </div>
              <div className="mt-4 lg:col-span-5 lg:col-start-5 lg:mt-0 lg:self-end">
                <p className="text-[14px] leading-relaxed text-taupe">
                  Drei Kernbereiche, in denen wir seit über einem Jahrzehnt
                  Maßstäbe setzen. Jeder Bereich wird mit der gleichen Präzision
                  und dem gleichen Engagement betreut.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.number} variant="up" delay={i * 120}>
                <div className="border-t border-warm-sand px-0 py-8 md:px-6 md:py-10 md:first:pl-0 md:last:pr-0">
                  <p className="text-[11px] tracking-[0.14em] text-taupe">
                    {service.number}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-light tracking-tight lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-taupe">
                    {service.description}
                  </p>
                  <Link
                    href="/kontakt"
                    className="mt-6 inline-block text-[11px] uppercase tracking-[0.14em] text-noir transition-opacity hover:opacity-60"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Properties ── */}
      <section className="border-t border-warm-sand bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <Reveal variant="up">
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  Portfolio
                </p>
                <h2 className="mt-3 font-display text-3xl font-light tracking-tight lg:text-4xl">
                  Ausgewählte Objekte
                </h2>
              </div>
              <div className="mt-4 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end lg:text-right">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/immobilien">Alle Objekte</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Asymmetric grid: property 1 large left, property 2 smaller right, property 3 full width below */}
          <div className="grid grid-cols-1 gap-0 border-t border-warm-sand lg:grid-cols-12 lg:grid-rows-2">
            {/* Property 1 — columns 1-7, spans 2 rows */}
            <Reveal
              variant="up"
              className="border-b border-warm-sand lg:col-span-7 lg:row-span-2 lg:border-b-0 lg:border-r lg:border-warm-sand"
            >
              <Link href="/immobilien" className="group block h-full">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[540px]">
                  <Image
                    src={properties[0].image}
                    alt={properties[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-light tracking-tight lg:text-2xl">
                      {properties[0].title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-taupe">
                      {properties[0].type}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-6 text-[11px] uppercase tracking-[0.12em] text-taupe">
                    <span>{properties[0].location}</span>
                    <span>{properties[0].area}</span>
                    <span>{properties[0].rooms}</span>
                    <span>Bj. {properties[0].year}</span>
                  </div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-noir">
                    {properties[0].price}
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* Property 2 — columns 8-12, row 1 */}
            <Reveal
              variant="up"
              delay={150}
              className="border-b border-warm-sand lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:border-b"
            >
              <Link href="/immobilien" className="group block h-full">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[280px]">
                  <Image
                    src={properties[1].image}
                    alt={properties[1].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-lg font-light tracking-tight lg:text-xl">
                      {properties[1].title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-taupe">
                      {properties[1].type}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-6 text-[11px] uppercase tracking-[0.12em] text-taupe">
                    <span>{properties[1].location}</span>
                    <span>{properties[1].area}</span>
                    <span>{properties[1].rooms}</span>
                  </div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-noir">
                    {properties[1].price}
                  </p>
                </div>
              </Link>
            </Reveal>

            {/* Property 3 — columns 8-12, row 2 */}
            <Reveal
              variant="up"
              delay={250}
              className="border-b border-warm-sand lg:col-span-5 lg:col-start-8 lg:row-start-2"
            >
              <Link href="/immobilien" className="group block h-full">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[200px]">
                  <Image
                    src={properties[2].image}
                    alt={properties[2].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-lg font-light tracking-tight lg:text-xl">
                      {properties[2].title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-taupe">
                      {properties[2].type}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-6 text-[11px] uppercase tracking-[0.12em] text-taupe">
                    <span>{properties[2].location}</span>
                    <span>{properties[2].area}</span>
                    <span>{properties[2].rooms}</span>
                  </div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-noir">
                    {properties[2].price}
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Team Teaser ── */}
      <section className="border-t border-warm-sand bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            {/* Image column */}
            <Reveal variant="left">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[560px]">
                <Image
                  src={images.team}
                  alt="Das WEID Immobilien Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            {/* Text column */}
            <Reveal variant="right">
              <div className="border-t border-warm-sand p-8 lg:border-l lg:border-t-0 lg:border-warm-sand lg:p-12 lg:pl-16">
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  Über uns
                </p>
                <h2 className="mt-4 font-display text-3xl font-light tracking-tight lg:text-4xl">
                  Lokale Expertise,
                  <br />
                  persönlicher Ansatz
                </h2>
                <p className="mt-6 text-[14px] leading-relaxed text-taupe">
                  Als inhabergeführtes Unternehmen mit Sitz in Erlangen verbinden
                  wir tiefgreifende Marktkenntnis mit einem persönlichen und
                  diskreten Ansatz. Unser Team vereint Erfahrung aus Architektur,
                  Finanzwesen und Immobilienrecht.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-warm-sand pt-8">
                  <div>
                    <p className="font-display text-2xl font-light tracking-tight">
                      12
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-taupe">
                      Mitarbeiter
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-light tracking-tight">
                      3
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-taupe">
                      Fachbereiche
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-light tracking-tight">
                      2009
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-taupe">
                      Gegründet
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-light tracking-tight">
                      IVD
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-taupe">
                      Mitglied
                    </p>
                  </div>
                </div>
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

      {/* ── CTA ── */}
      <section className="bg-noir">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-0 border-l border-warm-sand/20 lg:grid-cols-12">
            {/* Text — left 2/3 */}
            <div className="p-8 lg:col-span-8 lg:p-16">
              <Reveal variant="up">
                <p className="text-[10px] uppercase tracking-[0.2em] text-warm-sand/60">
                  Nächster Schritt
                </p>
                <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-ivory lg:text-5xl">
                  Lassen Sie uns über
                  <br />
                  Ihre Immobilie sprechen.
                </h2>
                <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-ivory/60">
                  Ob Verkauf, Bewertung oder strategische Beratung — ein
                  persönliches Gespräch ist der beste Ausgangspunkt. Kontaktieren
                  Sie uns unverbindlich.
                </p>
              </Reveal>
            </div>

            {/* Contact — right 1/3 */}
            <div className="border-t border-warm-sand/20 p-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:border-warm-sand/20 lg:p-16">
              <Reveal variant="up" delay={150}>
                <div className="flex h-full flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ivory/40">
                    Telefon
                  </p>
                  <p className="mt-2 font-display text-lg font-light text-ivory">
                    09131 / 123 456 0
                  </p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-ivory/40">
                    E-Mail
                  </p>
                  <p className="mt-2 text-[14px] text-ivory">
                    info@weid-immobilien.de
                  </p>
                  <div className="mt-8">
                    <Button variant="ivory" asChild>
                      <Link href="/kontakt">Beratungsgespräch vereinbaren</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-noir">
        <div className="mx-auto max-w-[1400px] border-t border-warm-sand/20 px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="font-display text-xl font-light tracking-wide text-ivory"
              >
                WEID
              </Link>
              <p className="mt-4 text-[11px] leading-relaxed text-ivory/40">
                Immobilien mit Substanz.
                <br />
                Seit 2009 in Erlangen.
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.12em] text-ivory/30">
                IVD Mitglied
              </p>
            </div>

            {/* Services links */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-ivory/40">
                Leistungen
              </p>
              <nav className="mt-4 flex flex-col gap-3">
                <Link
                  href="/verkaufen"
                  className="text-[12px] text-ivory/60 transition-opacity hover:opacity-80"
                >
                  Verkaufen
                </Link>
                <Link
                  href="/wertermittlung"
                  className="text-[12px] text-ivory/60 transition-opacity hover:opacity-80"
                >
                  Wertermittlung
                </Link>
                <Link
                  href="/immobilien"
                  className="text-[12px] text-ivory/60 transition-opacity hover:opacity-80"
                >
                  Immobilien
                </Link>
              </nav>
            </div>

            {/* Info links */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-ivory/40">
                Information
              </p>
              <nav className="mt-4 flex flex-col gap-3">
                <Link
                  href="/ueber-uns"
                  className="text-[12px] text-ivory/60 transition-opacity hover:opacity-80"
                >
                  Über uns
                </Link>
                <Link
                  href="/impressum"
                  className="text-[12px] text-ivory/60 transition-opacity hover:opacity-80"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutz"
                  className="text-[12px] text-ivory/60 transition-opacity hover:opacity-80"
                >
                  Datenschutz
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-ivory/40">
                Kontakt
              </p>
              <div className="mt-4 flex flex-col gap-3 text-[12px] text-ivory/60">
                <p>WEID Immobilien GmbH</p>
                <p>
                  Hauptstraße 42
                  <br />
                  91054 Erlangen
                </p>
                <p>09131 / 123 456 0</p>
                <p>info@weid-immobilien.de</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-warm-sand/10 pt-8 md:flex-row md:items-center">
            <p className="text-[10px] text-ivory/30">
              &copy; {new Date().getFullYear()} WEID Immobilien GmbH. Alle
              Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="text-[10px] text-ivory/30 transition-opacity hover:opacity-80"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-[10px] text-ivory/30 transition-opacity hover:opacity-80"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Version Badge ── */}
      <div className="fixed bottom-4 left-4 z-50 rounded bg-noir/80 px-3 py-1.5 text-[10px] uppercase tracking-wider text-ivory/60">
        V9 — Architectural Grid
      </div>
    </main>
  );
}
