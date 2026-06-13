import { useState, useEffect, useRef } from "react";
import { sfProjects } from "../data/sfProjects";

const catColor = {
  residential: "#8b6f4e",
  commercial:  "#4a7c6e",
  cultural:    "#5a6a8a",
};

export default function SouthFlorida() {
  const [active, setActive]   = useState(null);
  const mapRef                = useRef(null);
  const leafletMap            = useRef(null);
  const markersRef            = useRef([]);

  const activeProject = active !== null ? sfProjects.find(p => p.id === active) : null;

  useEffect(() => {
    // Load Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id    = "leaflet-css";
      link.rel   = "stylesheet";
      link.href  = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
      document.head.appendChild(link);
    }

    // Load Leaflet JS then init map
    if (window.L) {
      initMap();
    } else {
      const script  = document.createElement("script");
      script.src    = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
      script.onload = initMap;
      document.body.appendChild(script);
    }

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  function initMap() {
    if (!mapRef.current || leafletMap.current) return;

    const L   = window.L;
    const map = L.map(mapRef.current, {
      center:            [25.95, -80.20],
      zoom:              10,
      scrollWheelZoom:   false,
      zoomControl:       true,
    });

    leafletMap.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: "© OpenStreetMap contributors © CARTO",
      subdomains:  "abcd",
      maxZoom:     19,
    }).addTo(map);

    sfProjects.forEach(p => {
      const color = catColor[p.category];

      const icon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
          <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z" fill="${color}"/>
          <circle cx="14" cy="14" r="5" fill="rgba(255,255,255,0.85)"/>
        </svg>`,
        className:  "",
        iconSize:   [28, 36],
        iconAnchor: [14, 36],
        popupAnchor:[0, -38],
      });

      const marker = L.marker([p.lat, p.lng], { icon }).addTo(map);

      marker.bindPopup(`
        <div class="map-popup">
          <div class="map-popup-tag">${p.category} · ${p.year}</div>
          <div class="map-popup-title">${p.title}</div>
          <div class="map-popup-loc">${p.location}</div>
        </div>
      `, { maxWidth: 280, minWidth: 220 });

      marker.on("click", () => setActive(p.id));
      markersRef.current.push({ id: p.id, marker });
    });
  }

  function flyTo(id) {
    setActive(id);
    const p   = sfProjects.find(p => p.id === id);
    const ref = markersRef.current.find(m => m.id === id);
    if (leafletMap.current && p) {
      leafletMap.current.setView([p.lat, p.lng], 13, { animate: true });
    }
    if (ref) ref.marker.openPopup();
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 1.5rem" }}>

      {/* Header */}
      <span style={{
        fontFamily: "var(--mono)",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: "1rem",
        display: "block",
      }}>
        Where We Build
      </span>

      <h2 style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1.8rem, 4vw, 3rem)",
        fontWeight: 300,
        marginBottom: "1rem",
      }}>
        Projects Across the Region
      </h2>

      <p style={{
        fontSize: "1rem",
        fontWeight: 300,
        color: "var(--muted)",
        maxWidth: 560,
        lineHeight: 1.9,
        marginBottom: "1.5rem",
      }}>
        From Brickell to Boca Raton, our footprint in South Florida spans over
        a decade of residential, cultural, and commercial commissions across
        the tri-county area.
      </p>

      {/* Legend */}
      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {Object.entries(catColor).map(([cat, col]) => (
          <div key={cat} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{
              width: 10, height: 10,
              borderRadius: "50%",
              background: col,
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "var(--mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}>
              {cat}
            </span>
          </div>
        ))}
      </div>

      {/* Map */}
      <div
        ref={mapRef}
        style={{
          width: "100%",
          height: 420,
          border: "1px solid var(--light)",
          marginBottom: "1.5rem",
        }}
      />

      {/* Active project detail */}
      {activeProject ? (
        <div style={{
          background: "var(--white)",
          border: "1px solid var(--light)",
          padding: "1.5rem",
          marginBottom: "1.5rem",
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: catColor[activeProject.category],
                marginBottom: "0.3rem",
              }}>
                {activeProject.category} · {activeProject.year}
              </div>
              <div style={{ fontSize: "1.3rem", fontWeight: 300, marginBottom: "0.2rem" }}>
                {activeProject.title}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                {activeProject.location}
              </div>
            </div>
            <button
              onClick={() => setActive(null)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                color: "var(--muted)",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}>
              × Close
            </button>
          </div>
          <p style={{
            fontSize: "0.9rem",
            fontWeight: 300,
            color: "var(--muted)",
            lineHeight: 1.9,
            marginBottom: "1rem",
          }}>
            {activeProject.desc}
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[["Area", activeProject.area], ["Budget", activeProject.budget]].map(([l, v]) => (
              <div key={l}>
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
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
      ) : (
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--muted)",
          padding: "1rem 0",
          marginBottom: "0.5rem",
        }}>
          Click a marker to see project details
        </div>
      )}

      {/* Projects list */}
      <div style={{ borderTop: "1px solid var(--light)" }}>
        {sfProjects.map(p => (
          <div
            key={p.id}
            onClick={() => flyTo(p.id)}
            style={{
              padding: "1rem 0",
              borderBottom: "1px solid var(--light)",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1rem",
              borderLeft: active === p.id ? "3px solid var(--accent)" : "3px solid transparent",
              paddingLeft: active === p.id ? "0.75rem" : "0",
              transition: "all 0.2s",
            }}
          >
            <div>
              <div style={{
                fontSize: "1rem",
                fontWeight: 300,
                color: active === p.id ? "var(--accent)" : "var(--ink)",
                marginBottom: "0.15rem",
                transition: "color 0.2s",
              }}>
                {p.title}
              </div>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--warm)",
              }}>
                {p.year} · {p.location}
              </div>
            </div>
            <div style={{
              fontFamily: "var(--mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.2rem 0.6rem",
              border: `1px solid ${catColor[p.category]}`,
              color: catColor[p.category],
              flexShrink: 0,
              marginTop: "0.2rem",
            }}>
              {p.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}