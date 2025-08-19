// src/hooks/useScrollSpy.js
import { useEffect, useState } from "react";

/**
 * Beobachtet eine Liste von Section-IDs und liefert die aktuell aktive zurück.
 * @param {string[]} ids - Section IDs in der Reihenfolge der Seite
 * @param {object} options - IntersectionObserver Optionen
 */
export default function useScrollSpy(
  ids,
  { rootMargin = "-40% 0px -55% 0px", threshold = 0 } = {}
) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) setActive(id);
        });
      },
      { root: null, rootMargin, threshold }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin, threshold]);

  return active;
}
