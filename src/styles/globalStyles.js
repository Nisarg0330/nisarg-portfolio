export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  /* ── Reset & Base ─────────────────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; font-size: 16px; }
  body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; color: #0f172a; background: #fff; -webkit-font-smoothing: antialiased; }
  img, video { max-width: 100%; display: block; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 5px; }

  /* Buttons */
  .btn-primary {
    background: #6366f1; color: #fff; padding: 13px 26px; border-radius: 10px;
    font-weight: 600; font-size: 14px; border: none; cursor: pointer;
    transition: all .2s; display: inline-flex; align-items: center; gap: 8px;
    text-decoration: none;
  }
  .btn-primary:hover { background: #4f46e5; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,.3); }

  .btn-outline {
    background: transparent; color: #0f172a; padding: 13px 26px; border-radius: 10px;
    font-weight: 600; font-size: 14px; border: 2px solid #e2e8f0; cursor: pointer;
    transition: all .2s; display: inline-flex; align-items: center; gap: 8px;
    text-decoration: none;
  }
  .btn-outline:hover { border-color: #6366f1; color: #6366f1; transform: translateY(-2px); }

  /* Cards */
  .card {
    background: #fff; border: 1px solid #f1f5f9; border-radius: 16px; padding: 28px;
    transition: all .22s; box-shadow: 0 1px 3px rgba(0,0,0,.04);
  }
  .card:hover { box-shadow: 0 14px 42px rgba(0,0,0,.09); transform: translateY(-4px); border-color: #e0e7ff; }

  /* Skill Pill */
  .skill-pill {
    background: #f8fafc; border: 1px solid #e2e8f0; color: #475569;
    padding: 7px 15px; border-radius: 8px; font-size: 13px; font-weight: 500;
    transition: all .2s; display: inline-block; cursor: default;
  }
  .skill-pill:hover { background: #eef2ff; border-color: #a5b4fc; color: #6366f1; }

  /* Tag */
  .tech-tag { background: #eef2ff; color: #6366f1; padding: 4px 11px; border-radius: 20px; font-size: 11px; font-weight: 700; }

  /* Nav link */
  .nav-link {
    color: #64748b; font-size: 14px; font-weight: 500; background: none; border: none;
    cursor: pointer; padding: 6px 12px; border-radius: 8px; transition: all .2s;
  }
  .nav-link:hover { color: #6366f1; background: #eef2ff; }

  /* Section label */
  .section-label {
    font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
    color: #6366f1; margin-bottom: 10px; display: block;
  }

  /* Form input */
  .form-input {
    width: 100%; padding: 13px 15px; border: 1.5px solid #e2e8f0; border-radius: 10px;
    font-size: 14px; font-family: inherit; outline: none; transition: border-color .2s;
    background: #fafafa; color: #0f172a;
  }
  .form-input:focus { border-color: #6366f1; background: #fff; }

  /* Gradient text */
  .gradient-text {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  /* Info card */
  .info-card {
    background: #fafafa; border: 1px solid #f1f5f9; border-radius: 14px;
    padding: 22px 18px; transition: border-color .2s;
  }
  .info-card:hover { border-color: #a5b4fc; }

  /* Contact link */
  .contact-link {
    display: flex; align-items: center; gap: 14px; padding: 14px 18px;
    background: #fafafa; border-radius: 11px; margin-bottom: 10px;
    text-decoration: none; border: 1px solid #f1f5f9; transition: all .2s;
  }
  .contact-link:hover { border-color: #a5b4fc; background: #eef2ff; }

  /* Footer link */
  .footer-link { color: #475569; font-size: 13px; text-decoration: none; transition: color .2s; }
  .footer-link:hover { color: #818cf8; }

  /* Animation */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  .fade-up { animation: fadeUp .6s ease forwards; }

  /* ══════════════════════════════════════════════════════════════════════════
     RESPONSIVE LAYOUT HELPERS
     Breakpoints:
       xs  : < 480px   (small phones)
       sm  : 480–639px (large phones)
       md  : 640–767px (large phones / small tablets)
       lg  : 768–1023px (tablets)
       xl  : 1024–1279px (small desktops / laptops)
       2xl : ≥ 1280px  (large desktops)
  ══════════════════════════════════════════════════════════════════════════ */

  /* Navbar */
  .nav-desktop  { display: flex; gap: 2px; align-items: center; }
  .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; font-size: 22px; line-height: 1; color: #0f172a; }
  @media (max-width: 767px) {
    .nav-desktop   { display: none !important; }
    .nav-hamburger { display: block !important; }
  }

  /* Hero */
  .hero-btns  { display: flex; flex-wrap: wrap; gap: 12px; }
  .hero-stats { display: flex; flex-wrap: wrap; gap: 48px; }
  @media (max-width: 479px) {
    .hero-btns { flex-direction: column; }
    .hero-btns .btn-primary,
    .hero-btns .btn-outline { width: 100%; }
    .hero-stats { gap: 24px; }
  }
  @media (min-width: 480px) and (max-width: 639px) {
    .hero-stats { gap: 32px; }
  }

  /* About */
  .about-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .about-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  @media (max-width: 767px) {
    .about-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
  }
  @media (max-width: 479px) {
    .about-cards { grid-template-columns: 1fr !important; }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .about-grid { gap: 48px !important; }
  }

  /* Skills */
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 18px; }
  @media (max-width: 479px)  { .skills-grid { grid-template-columns: 1fr; } }
  @media (min-width: 480px) and (max-width: 639px) { .skills-grid { grid-template-columns: 1fr 1fr; } }

  /* Projects */
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; }
  @media (max-width: 639px) { .projects-grid { grid-template-columns: 1fr; } }

  /* Contact */
  .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 44px; max-width: 900px; margin: 0 auto; }
  @media (max-width: 767px) { .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }

  /* Footer */
  .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
  @media (max-width: 479px) { .footer-inner { flex-direction: column; text-align: center; gap: 12px; } }

  /* Section padding — scales across all breakpoints */
  .section-pad { padding: 100px 24px; }
  @media (min-width: 1280px) { .section-pad { padding: 120px 40px; } }
  @media (max-width: 1023px) { .section-pad { padding: 80px 24px; } }
  @media (max-width: 767px)  { .section-pad { padding: 64px 20px; } }
  @media (max-width: 479px)  { .section-pad { padding: 52px 16px; } }

  /* Resume banner CTA — full-width on xs */
  .resume-btn-wrap { display: inline-flex; }
  @media (max-width: 479px) {
    .resume-btn-wrap { display: flex; width: 100%; }
    .resume-btn-wrap a { width: 100%; justify-content: center; }
  }

  /* Certifications card — stack on xs */
  .cert-card-inner { display: flex; align-items: flex-start; gap: 22px; }
  @media (max-width: 479px) {
    .cert-card-inner { flex-direction: column; align-items: center; text-align: center; }
  }

  /* Buttons full-width on xs inside forms */
  @media (max-width: 479px) {
    .btn-full-xs { width: 100%; }
  }
`;
