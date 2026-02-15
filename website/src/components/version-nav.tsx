"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VersionNavProps {
  current: number;
  total?: number;
}

export function VersionNav({ current, total = 15 }: VersionNavProps) {
  const prev = current > 1 ? current - 1 : null;
  const next = current < total ? current + 1 : null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-noir/90 backdrop-blur-sm px-6 py-3 rounded-full">
      {prev ? (
        <Link
          href={`/v${prev}`}
          className="flex items-center gap-1 text-ivory hover:text-warm-sand transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-body tracking-wide">V{prev}</span>
        </Link>
      ) : (
        <span className="flex items-center gap-1 text-taupe/50 cursor-not-allowed">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-body tracking-wide">V1</span>
        </span>
      )}

      <span className="text-ivory/60 text-sm font-body">
        {current} / {total}
      </span>

      {next ? (
        <Link
          href={`/v${next}`}
          className="flex items-center gap-1 text-ivory hover:text-warm-sand transition-colors"
        >
          <span className="text-sm font-body tracking-wide">V{next}</span>
          <ChevronRight className="w-5 h-5" />
        </Link>
      ) : (
        <span className="flex items-center gap-1 text-taupe/50 cursor-not-allowed">
          <span className="text-sm font-body tracking-wide">V{total}</span>
          <ChevronRight className="w-5 h-5" />
        </span>
      )}
    </div>
  );
}
