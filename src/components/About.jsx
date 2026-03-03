import { ABOUT_CARDS } from "../data/constants";

export default function About({ scrollTo }) {
  return (
    <section id="about" className="section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="about-grid">

          {/* ── Left: text ── */}
          <div>
            <span className="section-label">About Me</span>
            <h2 style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 800, letterSpacing: "-1.5px",
              lineHeight: 1.15, marginBottom: 20,
            }}>
              Engineering solutions,<br />not just writing code.
            </h2>
            <p style={{ color: "#64748b", lineHeight: 1.82, fontSize: "clamp(14px,1.1vw,15px)", marginBottom: 16 }}>
              I'm Nisarg Patel, a software engineer from Toronto with a Diploma in Computer
              Programming and an AWS Cloud Practitioner certification. I approach every problem
              with a systems-thinking mindset — breaking complexity into clean, maintainable solutions.
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.82, fontSize: "clamp(14px,1.1vw,15px)", marginBottom: 32 }}>
              My foundation spans data structures, algorithms, OOP, full-stack web development,
              and cloud technologies. I believe great software isn't just functional — it's
              scalable, readable, and built to stand the test of time.
            </p>
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              See My Work →
            </button>
          </div>

          {/* ── Right: info cards ── */}
          <div className="about-cards">
            {ABOUT_CARDS.map(({ icon, title, desc }) => (
              <div key={title} className="info-card">
                <div style={{ fontSize: "clamp(22px,2.5vw,28px)", marginBottom: 10 }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 5 }}>{title}</div>
                <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.55 }}>{desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
