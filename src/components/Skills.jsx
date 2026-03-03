import { SKILLS } from "../data/constants";

function SkillCard({ category, items }) {
  return (
    <div className="card">
      <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 14, color: "#0f172a", letterSpacing: "-.2px" }}>
        {category}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {items.map((skill) => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ background: "#fafafe" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ textAlign: "center" }}>Technical Skills</span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px" }}>
            My Tech Stack
          </h2>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <SkillCard key={category} category={category} items={items} />
          ))}
        </div>

      </div>
    </section>
  );
}
