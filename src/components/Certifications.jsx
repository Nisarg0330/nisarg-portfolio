import { CERTIFICATIONS } from "../data/constants";

function CertCard({ provider, title, icon, gradient, desc }) {
  return (
    <div className="card" style={{ padding: "clamp(20px,3vw,32px)" }}>
      <div className="cert-card-inner">
        {/* Icon */}
        <div style={{
          width: "clamp(50px,6vw,62px)", height: "clamp(50px,6vw,62px)",
          background: gradient, borderRadius: 16, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "clamp(22px,3vw,28px)",
        }}>
          {icon}
        </div>

        {/* Text */}
        <div>
          <span className="tech-tag" style={{ marginBottom: 10, display: "inline-block" }}>
            {provider}
          </span>
          <h3 style={{ fontWeight: 800, fontSize: "clamp(16px,1.5vw,20px)", letterSpacing: "-0.5px", marginBottom: 8 }}>
            {title}
          </h3>
          <p style={{ color: "#64748b", fontSize: "clamp(13px,1vw,14px)", lineHeight: 1.78 }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad" style={{ background: "#fafafe" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ textAlign: "center" }}>Certifications</span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px" }}>
            Credentials
          </h2>
        </div>

        {/* Cards */}
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "row", gap: 20 }}>
          {CERTIFICATIONS.map((cert) => (
            <CertCard key={cert.title} {...cert} />
          ))}
        </div>

      </div>
    </section>
  );
}
