export default function About() {
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
        Studio
      </span>

      <h2 style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1.8rem, 4vw, 3rem)",
        fontWeight: 300,
        lineHeight: 1.2,
        marginBottom: "2rem",
      }}>
        Designing with{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>purpose</em>,
        <br />building for permanence
      </h2>

      <p style={{
        fontSize: "1rem",
        fontWeight: 300,
        color: "var(--muted)",
        lineHeight: 1.9,
        marginBottom: "1.25rem",
        maxWidth: 680,
      }}>
        Founded in 2004, Rainer Pérez Architecture is a Miami-based studio
        working across the full spectrum of architectural scale — from intimate
        private residences to major civic buildings across South Florida and
        internationally.
      </p>

      <p style={{
        fontSize: "1rem",
        fontWeight: 300,
        color: "var(--muted)",
        lineHeight: 1.9,
        marginBottom: "1.25rem",
        maxWidth: 680,
      }}>
        Our approach begins with deep listening: to the site, to the brief, to
        the people who will inhabit the space. We believe that exceptional
        architecture emerges from the careful interplay of programme, material,
        light, and landscape.
      </p>

      <p style={{
        fontSize: "1rem",
        fontWeight: 300,
        color: "var(--muted)",
        lineHeight: 1.9,
        marginBottom: "3rem",
        maxWidth: 680,
      }}>
        We are a team of 14 architects, designers, and project managers. Our
        work has been recognised internationally and we have built in over 20
        countries.
      </p>

      {/* Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        borderTop: "1px solid var(--light)",
        paddingTop: "3rem",
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