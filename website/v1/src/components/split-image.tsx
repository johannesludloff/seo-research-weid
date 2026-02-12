"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SplitImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: React.ReactNode;
  priority?: boolean;
}

export function SplitImage({
  src,
  alt,
  className,
  overlay,
  priority = false,
}: SplitImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
      />
      {overlay && (
        <div className="absolute inset-0 flex items-end">{overlay}</div>
      )}
    </div>
  );
}
