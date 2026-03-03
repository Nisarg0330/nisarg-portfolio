import { HERO_STATS } from "../data/constants";

export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(155deg,#fafafe 0%,#fff 45%,#f7f6ff 100%)",
      }}
      className="section-pad"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", paddingTop: 44 }} className="fade-up">

        {/* ── Availability badge ── */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#eef2ff", border: "1px solid #c7d2fe",
          borderRadius: 100, padding: "6px 16px", marginBottom: 28,
          flexWrap: "wrap",
        }}>
          <span style={{
            width: 8, height: 8, background: "#22c55e", borderRadius: "50%",
            display: "inline-block", flexShrink: 0,
            boxShadow: "0 0 0 3px rgba(34,197,94,.15)",
          }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#6366f1" }}>
            Open to Internship & Entry-Level Roles · Toronto, Canada
          </span>
        </div>

        {/* ── Headline ── */}
        <h1 style={{
          fontSize: "clamp(36px, 6.5vw, 76px)",
          fontWeight: 900,
          lineHeight: 1.08,
          letterSpacing: "clamp(-1.5px, -0.03em, -2.5px)",
          marginBottom: 20,
          maxWidth: 820,
        }}>
          Building Scalable<br />
          <span className="gradient-text">Software & Cloud</span><br />
          Solutions.
        </h1>

        {/* ── Tagline ── */}
        <p style={{
          fontSize: "clamp(15px, 1.8vw, 18px)",
          color: "#64748b",
          maxWidth: 520,
          lineHeight: 1.75,
          marginBottom: 36,
          fontWeight: 400,
        }}>
          Software Engineer based in Toronto. I craft clean, performant applications —
          from full-stack web apps to cloud-deployed systems built to scale.
        </p>

        {/* ── CTA buttons ── */}
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>View Projects →</button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>Contact Me</button>
          <a href="/assets/Nisarg_Patel.pdf" className="btn-outline">⬇ Resume</a>
        </div>

        {/* ── Stats ── */}
        <div className="hero-stats" style={{ marginTop: 52, paddingTop: 44, borderTop: "1px solid #f1f5f9" }}>
          {HERO_STATS.map(([number, label]) => (
            <div key={label}>
              <div style={{ fontSize: "clamp(24px,3vw,32px)", fontWeight: 800, letterSpacing: "-1px", color: "#0f172a" }}>
                {number}
              </div>
              <div style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500, marginTop: 3 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
