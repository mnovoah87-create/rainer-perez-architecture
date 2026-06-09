import { steps } from "../data/services";

export default function Process() {
  return (
    <div style={{
      maxWidth: 900,
      margin: "0 auto",
      padding: "5rem 1.5rem",
    }}>
      <span style={{
        fontFamily: "var(--mono)",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: "1rem",
        display: "block",
      }}>
        How We Work
      </span>

      <h2 style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1.8rem, 4vw, 3rem)",
        fontWeight: 300,
        marginBottom: "3rem",
      }}>
        Our Process
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem",
      }}>
        {steps.map((st, i) => (
          <div
            key={st.n}
            style={{
              borderTop: `2px solid ${i === 0 ? "var(--accent)" : "var(--light)"}`,
              paddingTop: "1.5rem",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderTopColor = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.borderTopColor = i === 0 ? "var(--accent)" : "var(--light)"}
          >
            <span style={{
              fontFamily: "var(--mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--warm)",
              display: "block",
              marginBottom: "0.75rem",
            }}>
              {st.n}
            </span>
            <div style={{
              fontFamily: "var(--serif)",
              fontSize: "1.25rem",
              fontWeight: 300,
              marginBottom: "0.75rem",
            }}>
              {st.title}
            </div>
            <p style={{
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "var(--muted)",
              lineHeight: 1.8,
            }}>
              {st.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}