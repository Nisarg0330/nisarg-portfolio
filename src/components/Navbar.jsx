import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => { scrollTo(id); setMenuOpen(false); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,.95)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid #f1f5f9" : "none",
      transition: "all .3s",
    }}>
      {/* ── Top bar ── */}
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 66, padding: "0 20px",
      }}>
        {/* Logo */}
        <span
          onClick={() => handleNav("hero")}
          style={{ fontWeight: 800, fontSize: 20, cursor: "pointer", letterSpacing: "-0.5px", flexShrink: 0 }}
        >
          <span className="gradient-text">NP</span>
          <span style={{ color: "#0f172a" }}>.</span>
        </span>

        {/* Desktop nav */}
        <div className="nav-desktop">
          {NAV_LINKS.map((l) => (
            <button key={l} className="nav-link" onClick={() => handleNav(l.toLowerCase())}>{l}</button>
          ))}
          <button
            className="btn-primary"
            style={{ padding: "9px 18px", fontSize: 13, marginLeft: 8 }}
            onClick={() => handleNav("contact")}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ── Mobile menu dropdown ── */}
      {menuOpen && (
        <div style={{
          background: "#fff", borderTop: "1px solid #f1f5f9",
          padding: "16px 20px", display: "flex", flexDirection: "column", gap: 8,
        }}>
          {NAV_LINKS.map((l) => (
            <button key={l} className="nav-link" onClick={() => handleNav(l.toLowerCase())}
              style={{ textAlign: "left", padding: "10px 12px" }}>
              {l}
            </button>
          ))}
          <button className="btn-primary" style={{ marginTop: 8, justifyContent: "center" }}
            onClick={() => handleNav("contact")}>
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
