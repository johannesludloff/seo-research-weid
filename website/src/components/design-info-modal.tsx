"use client";

import { useState } from "react";

interface ColorSwatch {
  name: string;
  hex: string;
  usage: string;
}

interface DesignInfoModalProps {
  designName: string;
  subtitle: string;
  fontDisplay: string;
  fontDisplayReason: string;
  fontBody: string;
  fontBodyReason: string;
  colors: ColorSwatch[];
  spacingPhilosophy: string;
  overallRationale: string;
}

export function DesignInfoModal({
  designName,
  subtitle,
  fontDisplay,
  fontDisplayReason,
  fontBody,
  fontBodyReason,
  colors,
  spacingPhilosophy,
  overallRationale,
}: DesignInfoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur transition-transform hover:scale-110"
        aria-label="Design Info"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
              Design Rationale
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">{designName}</h2>
            <p className="mt-1 text-sm text-gray-500">{subtitle}</p>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {overallRationale}
            </p>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                Typography
              </h3>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Display: {fontDisplay}
                  </p>
                  <p className="text-xs text-gray-500">{fontDisplayReason}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Body: {fontBody}
                  </p>
                  <p className="text-xs text-gray-500">{fontBodyReason}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                Color Palette
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {colors.map((color) => (
                  <div key={color.hex} className="flex items-center gap-3 rounded-lg border border-gray-100 p-2">
                    <div
                      className="h-8 w-8 flex-shrink-0 rounded-md border border-gray-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-xs font-medium text-gray-700">{color.name}</p>
                      <p className="text-[10px] text-gray-400">
                        {color.hex} — {color.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                Spacing Philosophy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {spacingPhilosophy}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
