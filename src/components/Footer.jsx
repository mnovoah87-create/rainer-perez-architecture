export default function Footer({ onNav }) {
  return (
    <footer style={{
      background: "var(--ink)",
      padding: "2.5rem 1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <button
        onClick={() => onNav("home")}
        style={{
          fontFamily: "var(--mono)",
          fontSize: "0.68rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--warm)",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}>
        Rainer Pérez Architecture
      </button>

      <ul style={{
        display: "flex",
        gap: "1.5rem",
        listStyle: "none",
        margin: 0,
        padding: 0,
        flexWrap: "wrap",
      }}>
        {[
          ["about",         "About"],
          ["work",          "Work"],
          ["south-florida", "South Florida"],
          ["contact",       "Contact"],
        ].map(([sec, label]) => (
          <li key={sec}>
            <button
              onClick={() => onNav(sec)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(245,242,236,0.4)",
                border: "none",
                background: "none",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--warm)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(245,242,236,0.4)"}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <span style={{
        fontFamily: "var(--mono)",
        fontSize: "0.6rem",
        letterSpacing: "0.1em",
        color: "rgba(245,242,236,0.25)",
      }}>
        © {new Date().getFullYear()} Rainer Pérez Architecture
      </span>
    </footer>
  );
}