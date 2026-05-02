const CAT = {
  "landing-page": { color: "#fbbf24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.22)" },
  typography: { color: "#a78bfa", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.22)" },
  motion: { color: "#34d399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.22)" },
  layout: { color: "#f97316", bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.22)" },
  "ui-components": { color: "#60a5fa", bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.22)" },
  "data-viz": { color: "#34d399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.22)" },
  color: { color: "#f472b6", bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.22)" },
  illustration: { color: "#fb923c", bg: "rgba(251,146,60,0.1)", border: "rgba(251,146,60,0.22)" },
  "3d": { color: "#22d3ee", bg: "rgba(34,211,238,0.1)", border: "rgba(34,211,238,0.22)" },
  interaction: { color: "#e879f9", bg: "rgba(232,121,249,0.1)", border: "rgba(232,121,249,0.22)" },
};

const FALLBACK = { color: "#71717a", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" };

export default function Tag({ label }) {
  const s = CAT[label] || FALLBACK;
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: s.color,
        background: s.bg,
        border: `1px solid ${s.border}`,
        borderRadius: 6,
        padding: "3px 8px",
      }}
    >
      {label}
    </span>
  );
}
