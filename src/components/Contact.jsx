import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_LINKS } from "../data/constants";

// ─────────────────────────────────────────────────────────────────────────────
// 🔧 EMAILJS CONFIG — replace these three values with your own from emailjs.com
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_zxc1der";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_vvqhg0r";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "LX4SklOVC9CtG3YI-";   // e.g. "aBcDeFgHiJkLmNoP"
// ─────────────────────────────────────────────────────────────────────────────


const ICONS = {
  GitHub: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#0f172a" }}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#0a66c2" }}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#6366f1" }}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
};

function ContactLink({ icon, label, value, href }) {
  return (
    <a href={href} className="contact-link">
      <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
        {ICONS[label] || <span style={{ fontSize: 20 }}>{icon}</span>}
      </span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: ".08em" }}>
          {label}
        </div>
        <div style={{ fontWeight: 600, color: "#0f172a", fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {value}
        </div>
      </div>
    </a>
  );
}

function ContactForm() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = async () => {
    if (!isValid) return;
    setStatus("sending");

    // Template variables sent to EmailJS
    // These must match the variable names in your EmailJS template exactly:
    //   {{to_name}}    — sender's name (shown in the auto-reply greeting)
    //   {{to_email}}   — sender's email (EmailJS uses this as the reply-to address)
    //   {{from_name}}  — your name (shown in the sign-off)
    //   {{message}}    — the message body (for your notification email)
    const templateParams = {
      to_name:   form.name,
      to_email:  form.email,
      from_name: "Nisarg Patel",
      message:   form.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  // ── Sent state ──
  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: "36px 0" }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
        <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 10, letterSpacing: "-0.5px" }}>
          Message Sent!
        </h3>
        <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, marginBottom: 8 }}>
          Thanks for reaching out, <strong>{form.name}</strong>.
        </p>
        <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
          A personalised confirmation has been sent to <strong>{form.email}</strong>.<br />
          Nisarg will get back to you within <strong>24 hours</strong>.
        </p>
        <button
          className="btn-primary"
          onClick={() => { setForm({ name: "", email: "", message: "" }); setStatus("idle"); }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 20 }}>Send a Message</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

        {/* Name */}
        <div>
          <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 7, color: "#374151" }}>
            Your Name
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        {/* Email */}
        <div>
          <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 7, color: "#374151" }}>
            Email Address
          </label>
          <input
            className="form-input"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Message */}
        <div>
          <label style={{ display: "block", fontWeight: 600, fontSize: 13, marginBottom: 7, color: "#374151" }}>
            Message
          </label>
          <textarea
            className="form-input"
            rows={4}
            placeholder="I'd love to discuss an opportunity..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ resize: "vertical" }}
          />
        </div>

        {/* Error banner */}
        {status === "error" && (
          <div style={{
            background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10,
            padding: "12px 16px", display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <p style={{ color: "#dc2626", fontSize: 13, fontWeight: 500 }}>
              Something went wrong. Please check your EmailJS config or try again.
            </p>
          </div>
        )}

        {/* Submit button */}
        <button
          className="btn-primary btn-full-xs"
          style={{
            width: "100%", justifyContent: "center", padding: "15px",
            opacity: (!isValid || status === "sending") ? 0.6 : 1,
            cursor: (!isValid || status === "sending") ? "not-allowed" : "pointer",
            transition: "all .2s",
          }}
          onClick={handleSubmit}
          disabled={!isValid || status === "sending"}
        >
          {status === "sending" ? (
            <>
              <span style={{ display: "inline-block", animation: "spin .8s linear infinite" }}>⏳</span>
              Sending…
            </>
          ) : (
            "Send Message →"
          )}
        </button>

        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

        {/* Helper note */}
        <p style={{ color: "#94a3b8", fontSize: 12, textAlign: "center", lineHeight: 1.5 }}>
          You'll receive a personalised confirmation email instantly.
        </p>

      </div>
    </>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ textAlign: "center" }}>Contact</span>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,44px)", fontWeight: 800, letterSpacing: "-1.5px" }}>
            Let's Connect
          </h2>
          <p style={{ color: "#64748b", marginTop: 10, fontSize: "clamp(14px,1.1vw,16px)" }}>
            Open to opportunities, collaborations, and conversations.
          </p>
        </div>

        {/* Two-column → single column on mobile */}
        <div className="contact-grid">
          {/* Links */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 20 }}>Get in Touch</h3>
            {CONTACT_LINKS.map((link) => (
              <ContactLink key={link.label} {...link} />
            ))}
          </div>

          {/* Form */}
          <div className="card" style={{ padding: "clamp(20px,3vw,32px)" }}>
            <ContactForm />
          </div>
        </div>

      </div>
    </section>
  );
}
