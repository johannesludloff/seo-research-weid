"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "fade";

const variantClasses: Record<RevealVariant, string> = {
  up: "section-reveal",
  left: "reveal-left",
  right: "reveal-right",
  fade: "reveal-fade",
};

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
}

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, delay);
          } else {
            entry.target.classList.add("is-visible");
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
