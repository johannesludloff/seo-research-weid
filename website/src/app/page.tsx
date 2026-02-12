import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";
import { ImageCarousel } from "@/components/image-carousel";

const heroImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop";

const carouselImages = [
  "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600&auto=format&fit=crop"
];

const featureImages = {
  main: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2000&auto=format&fit=crop",
  upper: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
  lower: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1200&auto=format&fit=crop"
};

export default function Home() {
  return (
    <main className="bg-ivory text-noir">
      <header className="px-6 py-8 md:px-14">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="font-display text-2xl tracking-wide">WEID Immobilien</div>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] md:flex">
            <a className="transition-colors hover:text-espresso" href="#portfolio">
              Portfolio
            </a>
            <a className="transition-colors hover:text-espresso" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-espresso" href="#contact">
              Kontakt
            </a>
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="relative min-h-[90vh]">
        <Image
          src={heroImage}
          alt="Warmes Interieur in Erlangen"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-noir/40" />
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-end px-6 pb-16 md:px-14 md:pb-24">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-ivory/70">
              Erlangen · Residenzen & Investments
            </p>
            <h1 className="font-display text-4xl font-light leading-[0.95] text-ivory md:text-6xl lg:text-7xl">
              Echoes of Elegance
              <span className="block italic">restoring spaces with calm precision.</span>
            </h1>
          </Reveal>
          <Reveal
            className="mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-ivory/70"
            role="presentation"
            aria-label="Zum Scrollen nach unten wischen"
          >
            <span className="h-px w-16 bg-ivory/70" aria-hidden="true" />
            Scroll
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24 md:px-14" id="services">
        <div className="mx-auto max-w-6xl">
          <div className="relative bg-parchment px-8 py-20 md:px-16">
            <span className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-taupe">
              Ankauf
            </span>
            <span className="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-taupe">
              Beratung
            </span>
            <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-taupe">
              Verkauf
            </span>
            <span className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.3em] text-taupe">
              Vermietung
            </span>
            <Reveal className="mx-auto max-w-2xl text-center text-lg text-noir md:text-xl">
              WEID Immobilien begleitet Eigentümerinnen und Eigentümer in Erlangen mit
              ruhiger Klarheit — von der präzisen Bewertung bis zur diskreten Vermarktung.
            </Reveal>
            <div className="mt-12 h-px w-full bg-warm-sand" />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-14" id="portfolio">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-taupe">Ausgewählt</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
              Kuratierte Immobilien mit Haltung
            </h2>
            <p className="mt-6 text-base text-taupe">
              Jede Immobilie wird als individuelles Projekt betrachtet. Wir setzen auf
              lichtdurchflutete Grundrisse, ruhige Materialien und eine Vermarktung, die
              Substanz vor Lautstärke stellt.
            </p>
            <div className="mt-10">
              <Button variant="outline">Portfolio anfragen</Button>
            </div>
          </Reveal>
          <Reveal className="overflow-hidden">
            <ImageCarousel images={carouselImages} />
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-24 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <Reveal className="relative h-[480px] lg:col-span-8">
            <Image src={featureImages.main} alt="Hauptobjekt" fill className="object-cover" />
            <div className="absolute bottom-6 left-6 bg-ivory/90 px-6 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">Altbau</p>
              <p className="font-display text-2xl">Stadtvilla am Schlossgarten</p>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Reveal className="relative h-[230px]">
              <Image src={featureImages.upper} alt="Nebenobjekt" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-ivory/90 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-taupe">Maisonette</p>
                <p className="font-display text-xl">Loft am Fluss</p>
              </div>
            </Reveal>
            <Reveal className="relative h-[230px]">
              <Image src={featureImages.lower} alt="Nebenobjekt" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-ivory/90 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-taupe">Neubau</p>
                <p className="font-display text-xl">Pavillon im Grünen</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-noir px-6 py-24 text-ivory md:px-14" id="contact">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-ivory/60">Kontakt</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Architected to stand alone.
            </h2>
            <p className="mt-6 text-base text-ivory/70">
              Wir begleiten Sie mit diskreter Expertise — vom ersten Gespräch bis zur
              Übergabe. Vertrauen Sie auf einen Prozess, der Klarheit schafft.
            </p>
          </Reveal>
          <Reveal className="flex items-end">
            <Button className="w-full" variant="outline">
              Gespräch vereinbaren
            </Button>
          </Reveal>
        </div>
      </section>

      <footer className="bg-noir px-6 py-10 text-ivory md:px-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-ivory/20 pt-8 text-xs uppercase tracking-[0.2em] md:flex-row md:items-center md:justify-between">
          <span>WEID Immobilien · Erlangen</span>
          <div className="flex gap-6">
            <a className="transition-colors hover:text-ivory/70" href="#">
              Impressum
            </a>
            <a className="transition-colors hover:text-ivory/70" href="#">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
