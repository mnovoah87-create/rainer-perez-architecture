import { useState } from "react";
import { projects, catColor } from "../data/projects";

function ProjectSVG({ gradA, gradB, idx }) {
  const id = `pg${idx}`;
  const shapes = [
    // 0 - cultural: columns
    <g key="s">
      <rect x="10" y="40" width="180" height="110" fill="rgba(250,248,244,0.1)" stroke="rgba(250,248,244,0.4)" strokeWidth="1"/>
      <rect x="0" y="40" width="200" height="8" fill="rgba(250,248,244,0.3)"/>
      {[40,80,120,160].map(x => <line key={x} x1={x} y1="40" x2={x} y2="150" stroke="rgba(250,248,244,0.2)" strokeWidth="1"/>)}
      <rect x="75" y="90" width="50" height="60" fill="rgba(250,248,244,0.15)" stroke="rgba(250,248,244,0.35)" strokeWidth="1"/>
    </g>,
    // 1 - residential: house
    <g key="s">
      <rect x="20" y="60" width="120" height="90" fill="rgba(250,248,244,0.1)" stroke="rgba(250,248,244,0.4)" strokeWidth="1"/>
      <polygon points="10,60 80,10 150,60" fill="rgba(250,248,244,0.12)" stroke="rgba(250,248,244,0.45)" strokeWidth="1.5"/>
      <rect x="55" y="110" width="50" height="40" fill="rgba(250,248,244,0.15)" stroke="rgba(250,248,244,0.3)" strokeWidth="0.5"/>
      <rect x="30" y="80" width="30" height="24" fill="rgba(200,184,154,0.3)" stroke="rgba(250,248,244,0.25)" strokeWidth="0.5"/>
      <rect x="100" y="80" width="30" height="24" fill="rgba(250,248,244,0.12)" stroke="rgba(250,248,244,0.25)" strokeWidth="0.5"/>
    </g>,
    // 2 - commercial: tower
    <g key="s">
      <rect x="30" y="20" width="80" height="150" fill="rgba(250,248,244,0.1)" stroke="rgba(250,248,244,0.4)" strokeWidth="1"/>
      {[[38,35],[62,35],[84,35],[38,70],[62,70],[84,70],[38,105],[62,105],[84,105]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width="18" height="22"
          fill={i===1||i===5 ? "rgba(200,184,154,0.3)" : "rgba(250,248,244,0.12)"}
          stroke="rgba(250,248,244,0.25)" strokeWidth="0.5"/>
      ))}
      <rect x="50" y="145" width="40" height="25" fill="rgba(250,248,244,0.15)" stroke="rgba(250,248,244,0.35)" strokeWidth="0.5"/>
    </g>,
    // 3 - residential: terraced
    <g key="s">
      <rect x="0" y="50" width="180" height="80" fill="rgba(250,248,244,0.08)" stroke="rgba(250,248,244,0.35)" strokeWidth="1"/>
      <rect x="10" y="30" width="160" height="22" fill="rgba(250,248,244,0.1)" stroke="rgba(250,248,244,0.3)" strokeWidth="1"/>
      <rect x="20" y="10" width="140" height="22" fill="rgba(250,248,244,0.06)" stroke="rgba(250,248,244,0.25)" strokeWidth="0.5"/>
      <line x1="0" y1="130" x2="180" y2="130" stroke="rgba(250,248,244,0.4)" strokeWidth="1.5"/>
      <rect x="70" y="80" width="40" height="50" fill="rgba(250,248,244,0.15)" stroke="rgba(250,248,244,0.35)" strokeWidth="0.5"/>
    </g>,
    // 4 - cultural: dome
    <g key="s">
      <ellipse cx="90" cy="75" rx="80" ry="55" fill="rgba(250,248,244,0.08)" stroke="rgba(250,248,244,0.35)" strokeWidth="1"/>
      <rect x="30" y="75" width="120" height="50" fill="rgba(250,248,244,0.06)"/>
      <line x1="10" y1="125" x2="170" y2="125" stroke="rgba(250,248,244,0.4)" strokeWidth="1.5"/>
      <line x1="90" y1="20" x2="90" y2="125" stroke="rgba(200,184,154,0.4)" strokeWidth="0.5" strokeDasharray="4,4"/>
    </g>,
    // 5 - commercial: market
    <g key="s">
      <rect x="20" y="30" width="160" height="110" fill="rgba(250,248,244,0.08)" stroke="rgba(250,248,244,0.35)" strokeWidth="1"/>
      {[60,100,140].map(x => <line key={x} x1={x} y1="30" x2={x} y2="140" stroke="rgba(250,248,244,0.2)" strokeWidth="1"/>)}
      <line x1="20" y1="70" x2="180" y2="70" stroke="rgba(250,248,244,0.15)" strokeWidth="0.5"/>
      <line x1="20" y1="105" x2="180" y2="105" stroke="rgba(250,248,244,0.15)" strokeWidth="0.5"/>
      <rect x="0" y="25" width="200" height="8" fill="rgba(200,184,154,0.35)"/>
    </g>,
    // 6 - residential: split level
    <g key="s">
      <rect x="0" y="40" width="160" height="100" fill="rgba(250,248,244,0.08)" stroke="rgba(250,248,244,0.35)" strokeWidth="1"/>
      <rect x="20" y="20" width="60" height="22" fill="rgba(250,248,244,0.1)" stroke="rgba(250,248,244,0.3)" strokeWidth="0.5"/>
      <rect x="80" y="10" width="60" height="32" fill="rgba(250,248,244,0.08)" stroke="rgba(250,248,244,0.25)" strokeWidth="0.5"/>
      <rect x="20" y="65" width="50" height="40" fill="rgba(200,184,154,0.25)" stroke="rgba(250,248,244,0.25)" strokeWidth="0.5"/>
      <rect x="90" y="65" width="50" height="40" fill="rgba(250,248,244,0.12)" stroke="rgba(250,248,244,0.25)" strokeWidth="0.5"/>
      <line x1="0" y1="140" x2="160" y2="140" stroke="rgba(250,248,244,0.4)" strokeWidth="1.5"/>
    </g>,
  ];

  return (
    <svg viewBox="0 0 200 160" fill="none" style={{ width: "58%", opacity: 0.9 }}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradA} />
          <stop offset="100%" stopColor={gradB} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="160" fill={`url(#${id})`} />
      {shapes[idx % shapes.length]}
    </svg>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 1.5rem" }}>

      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "2.5rem",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div>
          <span style={{
            fontFamily: "var(--mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "0.75rem",
            display: "block",
          }}>
            Selected Work
          </span>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 300,
          }}>
            Projects
          </h2>
        </div>

        {/* Filter buttons */}
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {["all", "residential", "commercial", "cultural"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "0.45rem 1rem",
                border: `1px solid ${filter === f ? "var(--ink)" : "var(--light)"}`,
                background: filter === f ? "var(--ink)" : "transparent",
                color: filter === f ? "var(--white)" : "var(--muted)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.25rem",
      }}>
        {filtered.map((p, i) => (
          <div
            key={p.id}
            onClick={() => setModal(p)}
            style={{
              cursor: "pointer",
              background: "var(--white)",
              transition: "transform 0.25s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div style={{
              aspectRatio: "4/3",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(135deg, ${p.gradA}, ${p.gradB})`,
              position: "relative",
            }}>
              <ProjectSVG gradA={p.gradA} gradB={p.gradB} idx={i} />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(26,23,20,0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(26,23,20,0.45)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(26,23,20,0)"}
              >
                <span style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--paper)",
                  border: "1px solid rgba(245,242,236,0.6)",
                  padding: "0.5rem 1.2rem",
                  pointerEvents: "none",
                }}>
                  View Project
                </span>
              </div>
            </div>
            <div style={{ padding: "1rem 0 0.5rem" }}>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--warm)",
                marginBottom: "0.3rem",
              }}>
                {p.category} · {p.year}
              </div>
              <div style={{ fontSize: "1.15rem", fontWeight: 300, marginBottom: "0.2rem" }}>
                {p.title}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: 300 }}>
                {p.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(26,23,20,0.88)",
            zIndex: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setModal(null)}
        >
          <div
            style={{
              background: "var(--paper)",
              maxWidth: 700,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal image */}
            <div style={{
              aspectRatio: "16/7",
              background: `linear-gradient(135deg, ${modal.gradA}, ${modal.gradB})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <ProjectSVG gradA={modal.gradA} gradB={modal.gradB} idx={modal.id} />
            </div>

            {/* Modal content */}
            <div style={{ padding: "2rem" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
              }}>
                <div>
                  <div style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--warm)",
                    marginBottom: "0.4rem",
                  }}>
                    {modal.category} · {modal.year}
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 300, marginBottom: "0.25rem" }}>
                    {modal.title}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                    {modal.location}
                  </div>
                </div>
                <button
                  onClick={() => setModal(null)}
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}>
                  × Close
                </button>
              </div>

              <p style={{
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}>
                {modal.desc}
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.25rem",
                borderTop: "1px solid var(--light)",
                paddingTop: "1.5rem",
              }}>
                {[
                  ["Area",   modal.area],
                  ["Budget", modal.budget],
                  ["Status", modal.status],
                  ["Award",  modal.award],
                ].map(([l, v]) => (
                  <div key={l}>
                    <div style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--warm)",
                      marginBottom: "0.2rem",
                    }}>
                      {l}
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 300 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}