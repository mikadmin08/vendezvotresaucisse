import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import Balek from "../../assets/Balek.gif";
import Okrales from "../../assets/Okrales.gif";
import "./index.scss";

type PromoToastProps = {
  autoShowDelayMs?: number; // délai avant apparition
  onClose?: () => void; // callback après disparition complète
};

export const Pubs = ({ autoShowDelayMs = 0, onClose }: PromoToastProps) => {
  const [visible, setVisible] = useState(autoShowDelayMs === 0);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const [pubIndex, setPubIndex] = useState<number>(
    () => Math.floor(Math.random() * 2) // ou pubs.length si tu déclares pubs avant
  );

  const pubs = [Balek, Okrales];

  const pickRandom = () => {
    setPubIndex((prev) => {
      const max = pubs.length;
      if (max <= 1) return 0;
      let idx = Math.floor(Math.random() * max);
      // éviter la répétition immédiate
      if (idx === prev) idx = (idx + 1) % max;
      return idx;
    });
  };

  useEffect(() => {
    if (autoShowDelayMs > 0) {
      const t = window.setTimeout(() => {
        pickRandom();
        setVisible(true);
      }, autoShowDelayMs);
      return () => window.clearTimeout(t);
    }
  }, [autoShowDelayMs]);

  // Quand on déclenche la fermeture, attendre la fin de l’anim pour démonter
  const handleClose = () => {
    if (closing) return;
    setClosing(true);
    // durée = 300ms (même valeur que l’anim CSS de sortie)
    closeTimer.current = window.setTimeout(() => {
      setVisible(false);
      setClosing(false);
      onClose?.();
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  if (!visible && !closing) return null;

  return (
    <div
      className={`pub-container ${
        closing ? "promo-toast--out" : "promo-toast--in"
      }`}
    >
      <div className="pub-body">
        <Button
          onClick={() => handleClose()}
          className="skip-button"
          label="Passer la pub"
        />
        <img className="gif" src={pubs[pubIndex]} alt="pub" />
      </div>
    </div>
  );
};
