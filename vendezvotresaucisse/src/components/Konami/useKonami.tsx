// useKonami.ts
import { useEffect, useRef, useState } from "react";

type UseKonamiOptions = {
  onMatch?: () => void; // callback quand le code est entré
  resetAfterMs?: number; // remet l'état à false après X ms (optionnel)
  enableEnter?: boolean; // certains veulent finir par "Enter" (optionnel)
};

export const useKonami = ({
  onMatch,
  resetAfterMs,
  enableEnter = false,
}: UseKonamiOptions = {}) => {
  const [matched, setMatched] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Séquence officielle : ↑ ↑ ↓ ↓ ← → ← → B A (optionnel: Enter)
  const sequence = enableEnter
    ? [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
        "Enter",
      ]
    : [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
      ];

  const indexRef = useRef(0);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

      if (key === sequence[indexRef.current]) {
        indexRef.current += 1;

        if (indexRef.current === sequence.length) {
          indexRef.current = 0;
          setMatched(true);
          onMatch?.();

          if (resetAfterMs) {
            if (timerRef.current) window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(
              () => setMatched(false),
              resetAfterMs
            );
          }
        }
      } else {
        // si la touche ne correspond pas, on repart de zéro (sortable et robuste)
        indexRef.current = 0;
        // petit cas: si la touche actuelle est le début de séquence, on avance à 1
        if (key === sequence[0]) indexRef.current = 1;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [onMatch, resetAfterMs, sequence]);

  return matched;
};
