export default function TechRow({ t, i, isLast, border }) {
  return (
    <div
      style={{
        padding: "12px 16px",
        background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.15)",
        borderBottom: !isLast ? `1px solid ${border}` : "none",
      }}
    >
      <p style={{ fontSize: 12, fontWeight: 600, color: "#e4e4e7", margin: "0 0 4px" }}>
        {t.label}
      </p>
      <p style={{ fontSize: 12, color: "#a1a1aa", margin: 0, lineHeight: 1.6 }}>
        {t.desc}
      </p>
    </div>
  );
}
