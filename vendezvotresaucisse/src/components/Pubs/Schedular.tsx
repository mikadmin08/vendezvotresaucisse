import { useEffect, useRef, useState } from "react";
import { Pubs } from "./Pubs";

type Props = {
  intervalMs?: number; // 5 min par défaut
  initialDelayMs?: number; // si tu veux la première apparition plus tôt/tard
};

export const Schedular = ({
  intervalMs = 5 * 60 * 1000,
  initialDelayMs = 0,
}: Props) => {
  const [show, setShow] = useState(false);
  const openRef = useRef(false); // savoir si la pub est déjà ouverte
  const timerRef = useRef<number | null>(null);

  // Ouverture contrôlée (ne rouvre pas si déjà ouvert)
  const openIfClosed = () => {
    if (!openRef.current) setShow(true);
  };

  // Marquer l'état d'ouverture/fermeture
  useEffect(() => {
    openRef.current = show;
  }, [show]);

  // Tick récurrent + respect de la visibilité de l’onglet
  useEffect(() => {
    // première exécution
    const first = window.setTimeout(() => {
      if (!document.hidden) openIfClosed();
    }, initialDelayMs);

    // intervalle
    const startInterval = () =>
      window.setInterval(() => {
        if (!document.hidden) openIfClosed();
      }, intervalMs);

    let intervalId = startInterval();

    // pause/reprise quand l’onglet est masqué/visible
    const onVisChange = () => {
      if (document.hidden) {
        if (intervalId) window.clearInterval(intervalId);
      } else {
        intervalId = startInterval();
      }
    };

    document.addEventListener("visibilitychange", onVisChange);

    timerRef.current = intervalId as unknown as number;

    return () => {
      window.clearTimeout(first);
      if (intervalId) window.clearInterval(intervalId);
      document.removeEventListener("visibilitychange", onVisChange);
    };
  }, [intervalMs, initialDelayMs]);

  // Quand la pub se ferme, démonter et laisser tourner l’intervalle
  const handleClose = () => setShow(false);

  return show ? <Pubs onClose={handleClose} /> : null;
};
