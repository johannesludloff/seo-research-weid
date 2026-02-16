import { districts } from "@/lib/data/districts";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function generateStaticParams() {
  return districts.map((d) => ({ slug: d.slug }));
}

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const district = districts.find((d) => d.slug === params.slug);
  if (!district) notFound();

  return (
    <main className="bg-ivory text-noir min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-taupe mb-4">Stadtteil-Porträt Erlangen</p>
          <h1 className="font-display text-5xl md:text-7xl mb-8 leading-tight">
            Wohnen in <br/><span className="italic text-espresso">{district.name}</span>
          </h1>
        </Reveal>

        <section className="grid gap-12 mt-16">
          <Reveal delay={100}>
            <div className="border-l border-warm-sand pl-8">
              <h2 className="font-display text-2xl mb-4">Der Charakter</h2>
              <p className="text-taupe leading-relaxed">{district.vibe}</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="border-l border-warm-sand pl-8">
              <h2 className="font-display text-2xl mb-4">Sehenswertes & Landmarks</h2>
              <ul className="list-disc list-inside text-taupe space-y-2">
                {district.landmarks.map(l => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="border-l border-warm-sand pl-8">
              <h2 className="font-display text-2xl mb-4">Ihre Nachbarschaft</h2>
              <p className="text-taupe leading-relaxed">{district.target}</p>
            </div>
          </Reveal>
        </section>

        <section className="mt-24 bg-parchment p-12 text-center">
          <h2 className="font-display text-3xl mb-6">Sie möchten in {district.name} verkaufen?</h2>
          <p className="text-taupe mb-8 max-w-lg mx-auto">Nutzen Sie unsere Expertise am {district.name} für eine präzise Wertermittlung und diskrete Vermarktung.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild><Link href="/wertermittlung">Kostenlose Bewertung</Link></Button>
            <Button variant="outline" asChild><Link href="/kontakt">Gespräch vereinbaren</Link></Button>
          </div>
        </section>
      </div>
    </main>
  );
}
