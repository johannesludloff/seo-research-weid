import { Reveal } from "@/components/reveal";

interface SectionPlaceholderProps {
  id?: string;
  label: string;
  description?: string;
  variant?: "light" | "dark" | "muted";
  minHeight?: string;
}

/**
 * Placeholder section for wireframing.
 * Replace with actual content when designs arrive.
 * 
 * @example
 * <SectionPlaceholder 
 *   label="Propstack Feed" 
 *   description="Aktuelle Objekte werden hier angezeigt"
 *   variant="muted"
 * />
 */
export function SectionPlaceholder({
  id,
  label,
  description,
  variant = "light",
  minHeight = "min-h-[300px]",
}: SectionPlaceholderProps) {
  const variants = {
    light: "bg-ivory text-noir",
    dark: "bg-noir text-ivory",
    muted: "bg-parchment text-noir",
  };

  return (
    <section id={id} className={`${variants[variant]} ${minHeight} px-6 py-16 md:px-14`}>
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-4 rounded border-2 border-dashed border-taupe/30 px-6 py-3">
          <span className="text-xs uppercase tracking-[0.2em] text-taupe">
            {label}
          </span>
        </div>
        {description && (
          <p className="text-sm text-taupe">{description}</p>
        )}
      </Reveal>
    </section>
  );
}
