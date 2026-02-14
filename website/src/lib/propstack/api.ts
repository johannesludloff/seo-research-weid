import { mockProperties } from "@/lib/propstack/mock-data";
import { PropstackUnit, PropstackUnitsResponse } from "@/lib/propstack/types";

const PROPSTACK_BASE_URL = "https://api.propstack.de/v1";

async function fetchUnitsFromPropstack(apiKey: string): Promise<PropstackUnit[]> {
  const response = await fetch(`${PROPSTACK_BASE_URL}/units`, {
    headers: {
      "X-API-KEY": apiKey,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Propstack API error: ${response.status}`);
  }

  const payload = (await response.json()) as PropstackUnitsResponse;
  return payload.data;
}

export async function getProperties(): Promise<PropstackUnit[]> {
  const apiKey = process.env.NEXT_PUBLIC_PROPSTACK_API_KEY;

  if (!apiKey) {
    return mockProperties;
  }

  try {
    return await fetchUnitsFromPropstack(apiKey);
  } catch {
    return mockProperties;
  }
}

export async function getProperty(id: string): Promise<PropstackUnit | null> {
  const properties = await getProperties();
  return properties.find((property) => property.id === id) ?? null;
}
