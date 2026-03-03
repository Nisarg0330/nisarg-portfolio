import resumePDF from "../assets/Nisarg_Patel.pdf";

export default function ResumeBanner() {
  return (
    <section className="section-pad" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontSize: "clamp(24px,3.5vw,40px)",
          fontWeight: 800, color: "#fff",
          letterSpacing: "-1px", marginBottom: 14,
        }}>
          Want to know more?
        </h2>
        <p style={{
          color: "rgba(255,255,255,.75)",
          fontSize: "clamp(14px,1.2vw,16px)",
          marginBottom: 30, lineHeight: 1.7,
        }}>
          Download my resume for a full overview of my education, skills, and experience.
        </p>
        <div className="resume-btn-wrap">
          <a
            href={resumePDF}
            download="Nisarg_Patel.pdf"
            style={{
              background: "#fff", color: "#6366f1",
              padding: "15px 34px", borderRadius: 11,
              fontWeight: 700, fontSize: 15,
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: "0 4px 20px rgba(0,0,0,.15)",
              transition: "transform .2s",
            }}
          >
            ⬇ Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
