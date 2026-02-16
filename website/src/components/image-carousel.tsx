"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("relative", className)}>
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={cn(
          "absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-ivory/90 p-2 text-noir transition-opacity hover:bg-ivory",
          canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={cn(
          "absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-ivory/90 p-2 text-noir transition-opacity hover:bg-ivory",
          canScrollRight ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((image, index) => (
          <div
            key={image}
            className="relative h-[420px] min-w-[320px] flex-shrink-0 md:h-[520px] md:min-w-[420px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <Image
              src={image}
              alt={`Immobilie ${index + 1}`}
              fill
              className={cn(
                "object-cover transition-opacity duration-300",
                index === 0 ? "" : "group-hover:opacity-100"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
