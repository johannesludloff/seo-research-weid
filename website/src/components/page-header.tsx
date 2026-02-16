import { Reveal } from "@/components/reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/**
 * Reusable page header component.
 * Swap out styling when final designs arrive.
 */
export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-parchment px-6 py-20 md:px-14 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          {eyebrow && (
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-taupe">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-taupe md:text-xl">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
