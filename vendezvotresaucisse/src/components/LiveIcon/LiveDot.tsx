import "./LiveDot.scss";

type LiveDotProps = { live: boolean; size?: number };
export default function LiveDot({ live, size = 14 }: LiveDotProps) {
  return (
    <span
      className={`live-dot ${live ? "is-live" : ""}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label={live ? "En live" : "Hors ligne"}
      title={live ? "En live" : "Hors ligne"}
    />
  );
}
