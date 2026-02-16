import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ConsentManager } from "@/components/consent-manager";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "WEID Immobilien | Erlangen",
  description: "Ihr lokaler Immobilienmakler in Erlangen. Verkauf, Bewertung und persönliche Beratung.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Consentmanager CMP - must load before any tracking */}
        <ConsentManager />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-body`}>
        {children}
        {/* GA4 - blocked by consentmanager until consent */}
        <Analytics />
      </body>
    </html>
  );
}
