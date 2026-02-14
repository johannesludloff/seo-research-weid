"use client";

import { useEffect, useState } from "react";
import { getProperties, getProperty } from "@/lib/propstack/api";
import { PropstackUnit } from "@/lib/propstack/types";

interface UsePropertiesState {
  properties: PropstackUnit[];
  isLoading: boolean;
  error: string | null;
}

interface UsePropertyState {
  property: PropstackUnit | null;
  isLoading: boolean;
  error: string | null;
}

export function useProperties(): UsePropertiesState {
  const [state, setState] = useState<UsePropertiesState>({
    properties: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isActive = true;

    (async () => {
      try {
        const properties = await getProperties();
        if (!isActive) return;
        setState({ properties, isLoading: false, error: null });
      } catch (error) {
        if (!isActive) return;
        setState({
          properties: [],
          isLoading: false,
          error: error instanceof Error ? error.message : "Unbekannter Fehler",
        });
      }
    })();

    return () => {
      isActive = false;
    };
  }, []);

  return state;
}

export function useProperty(id: string): UsePropertyState {
  const [state, setState] = useState<UsePropertyState>({
    property: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isActive = true;

    (async () => {
      try {
        const property = await getProperty(id);
        if (!isActive) return;
        setState({ property, isLoading: false, error: null });
      } catch (error) {
        if (!isActive) return;
        setState({
          property: null,
          isLoading: false,
          error: error instanceof Error ? error.message : "Unbekannter Fehler",
        });
      }
    })();

    return () => {
      isActive = false;
    };
  }, [id]);

  return state;
}
