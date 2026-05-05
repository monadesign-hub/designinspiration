import { useState, useMemo } from "react";
import Card from "./components/Card.jsx";
import bookmarksData from "./data/bookmarks.json";

// Sort newest first (by dateAdded)
const BOOKMARKS = [...bookmarksData].sort((a, b) =>
  b.dateAdded.localeCompare(a.dateAdded),
);

export default function App() {
  const [filter, setFilter] = useState("all");
  const [layout, setLayout] = useState("grid");

  const allCats = useMemo(
    () => ["all", ...new Set(BOOKMARKS.flatMap((b) => b.categories))],
    [],
  );

  const visible =
    filter === "all"
      ? BOOKMARKS
      : BOOKMARKS.filter((b) => b.categories.includes(filter));

  return (
    <div
      style={{
        background: "#0d0d0d",
        minHeight: "100vh",
        color: "#f4f4f5",
        padding: "44px 28px 100px",
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <p
            style={{
              color: "#ffffff",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 6px",
            }}
          >
            Visual Design Craft
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  margin: 0,
                }}
              >
                Margin Notes
              </h1>
              <p style={{ color: "#ffffff", fontSize: 13, margin: "5px 0 0" }}>
                {BOOKMARKS.length} curated · pixel-perfect craft & motion reference
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: 4,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 10,
                padding: 3,
              }}
            >
              {[
                ["grid", "⊞ Grid"],
                ["list", "☰ List"],
              ].map(([v, label]) => (
                <button
                  key={v}
                  onClick={() => setLayout(v)}
                  style={{
                    background:
                      layout === v ? "rgba(255,255,255,0.1)" : "none",
                    border: "none",
                    borderRadius: 8,
                    padding: "5px 14px",
                    fontSize: 12,
                    color: layout === v ? "#f4f4f5" : "#52525b",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
          {allCats.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background:
                  filter === cat ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${filter === cat ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.07)"}`,
                color: filter === cat ? "#f4f4f5" : "#71717a",
                borderRadius: 20,
                padding: "5px 14px",
                fontSize: 12,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {cat === "all" ? `All (${BOOKMARKS.length})` : cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          style={{
            display: layout === "grid" ? "grid" : "flex",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {visible.map((bm) => (
            <Card key={bm.id} bm={bm} layout={layout} />
          ))}
        </div>
      </div>
    </div>
  );
}
