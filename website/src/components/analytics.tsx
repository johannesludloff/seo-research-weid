"use client";

import Script from "next/script";

/**
 * Google Analytics 4 with Consentmanager Integration
 * 
 * Uses automatic blocking (Basic Implementation):
 * - GA4 is blocked until user gives consent
 * - Consentmanager handles the blocking via cmplazyload class
 * - Google Consent Mode v2 signals are sent automatically
 * 
 * Setup:
 * 1. Add GA4 Measurement ID to .env.local as NEXT_PUBLIC_GA_MEASUREMENT_ID
 * 2. Ensure consentmanager has Google Analytics (vendor s26) in vendor list
 * 
 * @see https://help.consentmanager.net/books/cmp/page/working-with-google-analytics
 */

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  // Don't render if no GA ID configured
  if (!GA_MEASUREMENT_ID) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[Analytics] Missing NEXT_PUBLIC_GA_MEASUREMENT_ID. " +
        "Google Analytics will not be loaded."
      );
    }
    return null;
  }

  return (
    <>
      {/* 
        Google Analytics 4 with Consentmanager Automatic Blocking
        
        - type="text/plain" prevents execution until consent
        - class="cmplazyload" tells consentmanager to manage this script
        - data-cmp-vendor="s26" maps to Google Analytics vendor
        - data-cmp-src is used instead of src for blocked scripts
      */}
      <Script
        id="gtag-js"
        strategy="afterInteractive"
        type="text/plain"
        className="cmplazyload"
        data-cmp-vendor="s26"
        data-cmp-src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        type="text/plain"
        className="cmplazyload"
        data-cmp-vendor="s26"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Track custom events in GA4
 * Only fires if consent was given and GA is loaded
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
