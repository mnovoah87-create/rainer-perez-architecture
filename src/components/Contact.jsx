import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

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
        Get in Touch
      </span>

      <h2 style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1.8rem, 4vw, 3rem)",
        fontWeight: 300,
        lineHeight: 1.2,
        marginBottom: "1rem",
      }}>
        Let's build something{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>extraordinary</em>
      </h2>

      <p style={{
        fontSize: "1rem",
        fontWeight: 300,
        color: "var(--muted)",
        maxWidth: 480,
        lineHeight: 1.9,
        marginBottom: "3rem",
      }}>
        Whether you have a detailed brief or just the beginning of an idea,
        we'd love to hear from you. Every great building begins with a
        conversation.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
      }}>
        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[
            ["Studio",  "1200 Brickell Ave, Suite 800, Miami FL 33131"],
            ["Email",   "hello@rainerperez.com"],
            ["Phone",   "+1 (305) 555 0192"],
            ["Hours",   "Monday – Friday, 9:00 – 18:00"],
          ].map(([l, v]) => (
            <div key={l}>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--warm)",
                marginBottom: "0.25rem",
              }}>
                {l}
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 300 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {[
            ["Full Name",     "Your name",                          "text"],
            ["Email Address", "your@email.com",                     "email"],
            ["Project Type",  "Residential, Commercial, Cultural…", "text"],
          ].map(([label, placeholder, type]) => (
            <div key={label}>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "0.4rem",
              }}>
                {label}
              </div>
              <input
                type={type}
                placeholder={placeholder}
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "var(--ink)",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--light)",
                  padding: "0.6rem 0",
                  outline: "none",
                  width: "100%",
                }}
              />
            </div>
          ))}

          {/* Textarea */}
          <div>
            <div style={{
              fontFamily: "var(--mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "0.4rem",
            }}>
              Message
            </div>
            <textarea
              placeholder="Tell us about your project…"
              rows={4}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "1rem",
                fontWeight: 300,
                color: "var(--ink)",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid var(--light)",
                padding: "0.6rem 0",
                outline: "none",
                width: "100%",
                resize: "none",
              }}
            />
          </div>

          <button
            onClick={() => setSent(true)}
            style={{
              alignSelf: "flex-start",
              fontFamily: "var(--mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--white)",
              background: sent ? "var(--accent)" : "var(--ink)",
              padding: "0.85rem 2rem",
              border: "none",
              cursor: sent ? "default" : "pointer",
              transition: "background 0.3s",
            }}>
            {sent ? "Message Sent ✓" : "Send Enquiry"}
          </button>
        </div>
      </div>
    </div>
  );
}