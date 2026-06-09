import { services } from "../data/services";

export default function Services() {
  return (
    <div style={{
      background: "var(--ink)",
      padding: "5rem 0",
    }}>
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "0 1.5rem",
      }}>
        <span style={{
          fontFamily: "var(--mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--warm)",
          marginBottom: "1rem",
          display: "block",
        }}>
          What We Do
        </span>

        <h2 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 300,
          color: "var(--paper)",
          marginBottom: "3rem",
        }}>
          Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px",
          background: "rgba(200,184,154,0.15)",
        }}>
          {services.map(sv => (
            <div
              key={sv.n}
              style={{
                background: "var(--darkcard)",
                padding: "2rem 1.75rem",
                transition: "background 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#24201c"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--darkcard)"}
            >
              <span style={{
                fontFamily: "var(--mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                color: "var(--warm)",
                display: "block",
                marginBottom: "1.25rem",
              }}>
                {sv.n}
              </span>
              <div style={{
                fontFamily: "var(--serif)",
                fontSize: "1.2rem",
                fontWeight: 300,
                color: "var(--paper)",
                marginBottom: "1rem",
                lineHeight: 1.3,
              }}>
                {sv.title}
              </div>
              <p style={{
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "rgba(245,242,236,0.5)",
                lineHeight: 1.8,
              }}>
                {sv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}