// KonamiGate.tsx
import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { useKonami } from "./useKonami";

type KonamiGateProps = PropsWithChildren<{
  resetAfterMs?: number;
  enableEnter?: boolean;
}>;

export const KonamiGate = ({
  children,
  resetAfterMs = 0,
  enableEnter = false,
}: KonamiGateProps) => {
  const matched = useKonami({ resetAfterMs, enableEnter });

  if (!matched) return null;

  // Affiche en overlay via portail, accessible & simple à fermer avec ESC si tu veux étendre
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,0.6)" }}
    >
      <div
        className="rounded-2xl shadow-xl max-w-[90vw] max-h-[90vh] overflow-auto p-6"
        style={{ background: "white" }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
