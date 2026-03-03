import { PROJECTS } from "../data/constants";

function ProjectCard({ icon, title, desc, impact, tech, github }) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "clamp(28px,3vw,36px)", marginBottom: 14 }}>{icon}</div>
      <h3 style={{ fontWeight: 800, fontSize: "clamp(17px,1.5vw,20px)", marginBottom: 10, letterSpacing: "-0.5px" }}>
        {title}
      </h3>
      <p style={{ color: "#64748b", fontSize: "clamp(13px,1vw,14px)", lineHeight: 1.75, marginBottom: 14, flex: 1 }}>
        {desc}
      </p>

      {/* Impact */}
      <div style={{
        background: "#f8fafc", border: "1px solid #e2e8f0",
        borderRadius: 9, padding: "10px 14px", marginBottom: 16,
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: ".08em" }}>
          Impact ·{" "}
        </span>
        <span style={{ fontSize: 13, color: "#475569" }}>{impact}</span>
      </div>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
      </div>

      {/* GitHub link */}
      <a href={github} style={{
        color: "#6366f1", fontWeight: 600, fontSize: 13,
        textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5,
      }}>
        View on GitHub →
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ textAlign: "center" }}>Projects</span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px" }}>
            Things I've Built
          </h2>
          <p style={{ color: "#64748b", marginTop: 10, fontSize: "clamp(14px,1.1vw,16px)" }}>
            A selection of projects that reflect my engineering thinking.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}
