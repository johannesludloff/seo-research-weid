'use client';

import { useState, useEffect } from "react";
import { PropstackUnit } from "./types";
import { getProperties, getProperty } from "./api";

/**
 * Hook für alle Immobilien
 */
export function useProperties() {
  const [properties, setProperties] = useState<PropstackUnit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchProperties() {
      try {
        const data = await getProperties();
        if (mounted) {
          setProperties(data);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error("Unbekannter Fehler"));
          setLoading(false);
        }
      }
    }

    fetchProperties();

    return () => {
      mounted = false;
    };
  }, []);

  return { properties, loading, error };
}

/**
 * Hook für eine einzelne Immobilie
 */
export function useProperty(id: string) {
  const [property, setProperty] = useState<PropstackUnit | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchProperty() {
      try {
        const data = await getProperty(id);
        if (mounted) {
          setProperty(data);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error("Unbekannter Fehler"));
          setLoading(false);
        }
      }
    }

    if (id) {
      fetchProperty();
    }

    return () => {
      mounted = false;
    };
  }, [id]);

  return { property, loading, error };
}
