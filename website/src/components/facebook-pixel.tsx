"use client";

import Script from "next/script";

/**
 * Facebook Pixel with Consentmanager Integration
 *
 * Uses automatic blocking (Basic Implementation):
 * - FB Pixel is blocked until user gives consent
 * - Consentmanager handles the blocking via cmplazyload class
 * - Consent signals are sent automatically
 *
 * Setup:
 * 1. Add FB Pixel ID to .env.local as NEXT_PUBLIC_FB_PIXEL_ID
 * 2. Ensure consentmanager has Facebook (vendor s905) in vendor list
 *
 * @see https://help.consentmanager.net/books/cmp/page/working-with-facebook-pixel
 */

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export function FacebookPixel() {
  // Don't render if no FB Pixel ID configured
  if (!FB_PIXEL_ID) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[FacebookPixel] Missing NEXT_PUBLIC_FB_PIXEL_ID. " +
        "Facebook Pixel will not be loaded."
      );
    }
    return null;
  }

  return (
    <>
      {/*
        Facebook Pixel with Consentmanager Automatic Blocking

        - type="text/plain" prevents execution until consent
        - class="cmplazyload" tells consentmanager to manage this script
        - data-cmp-vendor="s905" maps to Facebook/Meta vendor
      */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        type="text/plain"
        className="cmplazyload"
        data-cmp-vendor="s905"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      {/* Noscript fallback for Facebook Pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

/**
 * Track custom events in Facebook Pixel
 * Only fires if consent was given and FB Pixel is loaded
 */
export function trackFBEvent(
  eventName: string,
  parameters?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, parameters);
  }
}

// Type declaration for fbq
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}
