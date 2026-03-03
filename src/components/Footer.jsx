export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", padding: "clamp(20px,3vw,36px) clamp(16px,3vw,24px)", borderTop: "1px solid #1e293b" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="footer-inner">

          {/* Logo */}
          <span style={{ fontWeight: 800, fontSize: 20, color: "#fff" }}>
            <span style={{
              background: "linear-gradient(135deg,#818cf8,#a78bfa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              NP
            </span>
            <span style={{ color: "#818cf8" }}>.</span>
          </span>

          {/* Copyright */}
          <p style={{ color: "#94a3b8", fontSize: 13, fontWeight: 500 }}>
            © 2025 Nisarg Patel · Toronto, Canada
          </p>

          {/* Links */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  color: "#94a3b8",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={e => e.target.style.color = "#a78bfa"}
                onMouseLeave={e => e.target.style.color = "#94a3b8"}
              >
                {l}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
