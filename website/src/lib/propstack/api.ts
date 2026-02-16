import { PropstackUnit, PropstackResponse } from "./types";
import { mockProperties } from "./mock-data";

const API_BASE = "https://api.propstack.de/v1";
const API_KEY = process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;

/**
 * Holt alle Immobilien von Propstack oder gibt Mock-Daten zurück
 */
export async function getProperties(): Promise<PropstackUnit[]> {
  // Wenn kein API-Key, nutze Mock-Daten
  if (!API_KEY) {
    console.log("[Propstack] Kein API-Key konfiguriert, nutze Mock-Daten");
    return mockProperties;
  }

  try {
    const response = await fetch(`${API_BASE}/units`, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 }, // Cache für 5 Minuten
    });

    if (!response.ok) {
      console.error("[Propstack] API-Fehler:", response.status);
      return mockProperties;
    }

    const data: PropstackResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error("[Propstack] Verbindungsfehler:", error);
    return mockProperties;
  }
}

/**
 * Holt eine einzelne Immobilie nach ID
 */
export async function getProperty(id: string): Promise<PropstackUnit | null> {
  // Wenn kein API-Key, nutze Mock-Daten
  if (!API_KEY) {
    const property = mockProperties.find((p) => p.id === id);
    return property || null;
  }

  try {
    const response = await fetch(`${API_BASE}/units/${id}`, {
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      // Fallback auf Mock
      const property = mockProperties.find((p) => p.id === id);
      return property || null;
    }

    return await response.json();
  } catch (error) {
    console.error("[Propstack] Verbindungsfehler:", error);
    const property = mockProperties.find((p) => p.id === id);
    return property || null;
  }
}

/**
 * Filtert Immobilien nach Typ (Kauf/Miete)
 */
export async function getPropertiesByType(
  type: "BUY" | "RENT"
): Promise<PropstackUnit[]> {
  const all = await getProperties();
  return all.filter((p) => p.marketing_type === type);
}
