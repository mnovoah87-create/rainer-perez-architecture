import { useState } from "react";

const SECTIONS = ["home", "about", "work", "services", "process", "south-florida", "contact"];
const LABELS = {
  home: "Home",
  about: "About",
  work: "Work",
  services: "Services",
  process: "Process",
  "south-florida": "South Florida",
  contact: "Contact",
};

export default function Nav({ section, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(sec) {
    onNav(sec);
    setMenuOpen(false);
  }

  return (
    <>
      {/* NAV BAR */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 1.5rem",
        background: "rgba(245,242,236,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--light)",
      }}>
        <button
          onClick={() => navigate("home")}
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--ink)",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}>
          Rainer Pérez
        </button>

        {/* Desktop links */}
        <ul style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
          className="desktop-nav">
          {SECTIONS.filter(s => s !== "home").map(sec => (
            <li key={sec}>
              <button
                onClick={() => navigate(sec)}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: section === sec ? "var(--accent)" : "var(--muted)",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}>
                {LABELS[sec]}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            border: "1px solid var(--light)",
            background: "none",
            padding: "0.4rem 0.9rem",
            cursor: "pointer",
          }}
          className="hamburger">
          Menu
        </button>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 150,
          }}
        />
      )}

      {/* DRAWER */}
      <div style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "70vw",
        maxWidth: 300,
        background: "var(--white)",
        zIndex: 200,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
        borderLeft: "1px solid var(--light)",
        display: "flex",
        flexDirection: "column",
        padding: "2rem 1.5rem",
      }}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "var(--muted)",
            border: "none",
            background: "none",
            alignSelf: "flex-end",
            marginBottom: "2rem",
            cursor: "pointer",
          }}>
          × Close
        </button>

        {SECTIONS.map(sec => (
          <button
            key={sec}
            onClick={() => navigate(sec)}
            style={{
              display: "block",
              fontFamily: "var(--serif)",
              fontSize: "1.6rem",
              fontWeight: 300,
              color: section === sec ? "var(--accent)" : "var(--ink)",
              padding: "0.6rem 0",
              borderBottom: "1px solid var(--light)",
              border: "none",
              borderBottom: "1px solid var(--light)",
              background: "none",
              textAlign: "left",
              width: "100%",
              cursor: "pointer",
            }}>
            {LABELS[sec]}
          </button>
        ))}
      </div>

      <style>{`
        .desktop-nav { display: none; }
        .hamburger { display: block; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex; }
          .hamburger { display: none; }
        }
      `}</style>
    </>
  );
}