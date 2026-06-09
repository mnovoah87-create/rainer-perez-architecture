export default function Hero({ onNav }) {
  return (
    <div>
      {/* HERO */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "calc(100vh - 57px)",
      }}>
        {/* Left */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "3rem 2rem 3rem 2rem",
        }}>
          <span style={{
            fontFamily: "var(--mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1.25rem",
            display: "block",
          }}>
            Architecture & Urban Design
          </span>

          <h1 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>
            Spaces that{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>breathe</em>
            <br />and endure
          </h1>

          <p style={{
            fontSize: "1rem",
            fontWeight: 300,
            color: "var(--muted)",
            maxWidth: 380,
            marginBottom: "2rem",
            lineHeight: 1.9,
          }}>
            We design buildings that respect their context, honor the people
            who inhabit them, and outlast the trends of their era.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => onNav("work")}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--white)",
                background: "var(--ink)",
                padding: "0.85rem 2rem",
                border: "none",
                cursor: "pointer",
              }}>
              View Projects
            </button>
            <button
              onClick={() => onNav("contact")}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--ink)",
                background: "transparent",
                padding: "0.85rem 2rem",
                border: "1px solid var(--ink)",
                cursor: "pointer",
              }}>
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right — illustrated building */}
        <div style={{
          background: "linear-gradient(135deg, #d4c8b4 0%, #a8967e 40%, #6b5440 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px),
              repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.03) 50px, rgba(0,0,0,0.03) 51px)
            `,
          }} />
          <BuildingSVG />
        </div>
      </div>

      {/* MARQUEE */}
      <div style={{
        background: "var(--ink)",
        padding: "0.85rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}>
        <div style={{
          display: "inline-flex",
          gap: "3rem",
          animation: "marquee 22s linear infinite",
        }}>
          {[
            "Residential Design","·","Cultural Spaces","·",
            "Commercial Architecture","·","Urban Planning","·",
            "Interior Design","·","Sustainable Design","·","Restoration","·",
            "Residential Design","·","Cultural Spaces","·",
            "Commercial Architecture","·","Urban Planning","·",
            "Interior Design","·","Sustainable Design","·","Restoration","·",
          ].map((t, i) => (
            <span key={i} style={{
              fontFamily: "var(--mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--warm)",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div style={{
        background: "var(--white)",
        padding: "4rem 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        borderTop: "1px solid var(--light)",
      }}>
        {[
          ["20+", "Years of practice"],
          ["180", "Projects completed"],
          ["32",  "Awards received"],
        ].map(([n, l]) => (
          <div key={l}>
            <div style={{
              fontFamily: "var(--serif)",
              fontSize: "3rem",
              fontWeight: 300,
              lineHeight: 1,
              marginBottom: "0.4rem",
            }}>
              {n}
            </div>
            <div style={{
              fontFamily: "var(--mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}>
              {l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildingSVG() {
  return (
    <svg viewBox="0 0 320 480" fill="none" style={{ width: "60%", opacity: 0.9 }}>
      <rect x="80" y="60" width="160" height="400"
        fill="rgba(250,248,244,0.1)" stroke="rgba(250,248,244,0.45)" strokeWidth="1.5" />
      {[90, 144, 198, 252, 306].map((y, ri) =>
        [102, 146, 190].map((x, ci) => (
          <rect key={`${ri}-${ci}`} x={x} y={y} width="28" height="36"
            fill={
              ri === 1 && ci === 1 ? "rgba(200,184,154,0.35)" :
              ri === 3 && ci === 1 ? "rgba(200,184,154,0.25)" :
              ci === 0 || ci === 2 ? "rgba(250,248,244,0.18)" :
              "rgba(250,248,244,0.07)"
            }
            stroke="rgba(250,248,244,0.28)" strokeWidth="0.5" />
        ))
      )}
      <rect x="126" y="400" width="68" height="60"
        fill="rgba(250,248,244,0.13)" stroke="rgba(250,248,244,0.4)" strokeWidth="1" />
      <line x1="20" y1="460" x2="300" y2="460"
        stroke="rgba(250,248,244,0.3)" strokeWidth="1" />
      <rect x="20" y="240" width="58" height="220"
        fill="rgba(250,248,244,0.05)" stroke="rgba(250,248,244,0.2)" strokeWidth="1" />
      <rect x="242" y="310" width="58" height="150"
        fill="rgba(250,248,244,0.05)" stroke="rgba(250,248,244,0.2)" strokeWidth="1" />
      <line x1="80" y1="60" x2="240" y2="60"
        stroke="rgba(200,184,154,0.7)" strokeWidth="2" />
    </svg>
  );
}