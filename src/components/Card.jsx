import { useState } from "react";
import Cover from "./Cover.jsx";
import Tag from "./Tag.jsx";
import TechRow from "./TechRow.jsx";

export default function Card({ bm, layout }) {
  const [open, setOpen] = useState(false);
  const isRow = layout === "list";

  return (
    <div
      style={{
        background: "#111111",
        border: `1px solid ${open ? bm.accentBorder : "rgba(255,255,255,0.07)"}`,
        borderRadius: 16,
        overflow: "hidden",
        display: isRow ? "flex" : "block",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: open
          ? `0 0 0 1px ${bm.accentBorder}, 0 20px 56px rgba(0,0,0,0.55)`
          : "0 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ width: isRow ? 280 : "100%", flexShrink: 0 }}>
        <Cover bm={bm} />
      </div>
      <div style={{ padding: "20px 22px 22px", flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 8,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 19,
                fontWeight: 800,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              {bm.title}
            </h3>
            <p style={{ color: "#52525b", fontSize: 12, margin: "3px 0 0" }}>
              {bm.subtitle}
            </p>
          </div>
          <span style={{ fontSize: 10, color: "#3f3f46", paddingTop: 3, flexShrink: 0 }}>
            {bm.dateAdded}
          </span>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: bm.accentDim,
            border: `1px solid ${bm.accentBorder}`,
            borderRadius: 8,
            padding: "4px 10px",
            marginBottom: 12,
          }}
        >
          <span style={{ fontSize: 11, color: bm.accent, fontWeight: 600 }}>
            {bm.style}
          </span>
          <span style={{ color: "#52525b", fontSize: 11 }}>· {bm.builder}</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
          {bm.categories.map((c) => (
            <Tag key={c} label={c} />
          ))}
        </div>

        <p style={{ color: "#52525b", fontSize: 11, margin: "0 0 16px" }}>
          By <span style={{ color: "#71717a" }}>{bm.creator}</span>{" "}
          <span style={{ color: "#3f3f46" }}>{bm.handle}</span>
        </p>

        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
            background: open ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
            border: `1px solid ${open ? bm.accentBorder : "rgba(255,255,255,0.08)"}`,
            borderRadius: open ? "10px 10px 0 0" : 10,
            padding: "10px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all 0.2s",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: open ? "#e4e4e7" : "#71717a",
            }}
          >
            {open ? "Hide" : "Show"} techniques · {bm.techniques.length}
          </span>
          <span
            style={{
              color: open ? "#a1a1aa" : "#52525b",
              fontSize: 18,
              lineHeight: 1,
              display: "inline-block",
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          >
            ›
          </span>
        </button>

        {open && (
          <div
            style={{
              borderRadius: "0 0 10px 10px",
              overflow: "hidden",
              border: `1px solid ${bm.accentBorder}`,
              borderTop: "none",
            }}
          >
            {bm.techniques.map((t, i) => (
              <TechRow
                key={i}
                t={t}
                i={i}
                isLast={i === bm.techniques.length - 1}
                border={bm.accentBorder}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
