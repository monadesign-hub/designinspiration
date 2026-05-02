export default function Cover({ bm }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        overflow: "hidden",
        borderRadius: "14px 14px 0 0",
        flexShrink: 0,
        background: bm.accentDim,
      }}
    >
      <img
        src={bm.cover}
        alt={`${bm.title} screenshot`}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
          background: "linear-gradient(to bottom, transparent, #111111)",
          pointerEvents: "none",
        }}
      />
      <a
        href={bm.url}
        target="_blank"
        rel="noreferrer"
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 20,
          padding: "5px 13px",
          fontSize: 11,
          fontWeight: 500,
          color: "#d4d4d8",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#4ade80",
            flexShrink: 0,
          }}
        />
        Visit ↗
      </a>
    </div>
  );
}
