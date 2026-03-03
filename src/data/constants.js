// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = ["About", "Skills", "Projects", "Certifications", "Contact"];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS = {
  "Programming":    ["Java", "Python", "C", "C#", "JavaScript", ".NET" ],
  "Web":            ["React", "Next.js", "Node.js", "Angular", "FastAPI"],
  "Cloud / DevOps": ["AWS", "Docker", "GitHub Actions"],
  "Databases":      ["MySQL", "MongoDB", "PostgreSQL"],
  "Tools":          ["Git", "Linux", "Postman", "VS Code", "IntelliJ"],
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title:  "Blackjack Game",
    desc:   "A fully functional Blackjack game built with Java, demonstrating deep understanding of OOP principles—encapsulation, inheritance, and polymorphism—through a clean card-game architecture.",
    tech:   ["Java", "OOP", "Data Structures"],
    impact: "Showcases mastery of object-oriented design patterns and clean game logic abstraction.",
    github: "#",
    icon:   "♠️",
  },
  {
    title: "Software Engineer | Full-Stack & Cloud Developer",
    desc: "Passionate about building scalable web applications and cloud-ready systems using modern technologies. Strong foundation in data structures, backend engineering, and responsive frontend development.",
    tech: ["React", "Node.js", "AWS"],
    impact: "Focused on writing clean, maintainable code and building performance-driven applications that solve real-world problems efficiently.",
    github: "https://github.com/yourusername",
    icon: "💻",
},
  
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    provider: "Sheridan College",
    title:    "Computer Programming Diploma",
    icon:     "🎓",
    gradient: "linear-gradient(135deg,#ff9900,#ffb347)",
    desc:     "Graduated with distinction from Sheridan College's Computer Programming program, gaining foundational knowledge in software development, data structures, and system design.",
  },
  {
    provider: "Amazon Web Services",
    title:    "AWS Certified Cloud Practitioner (Coming Soon)",
    icon:     "☁️",
    gradient: "linear-gradient(135deg,#ff9900,#ffb347)",
    desc:     "Validates foundational knowledge of AWS Cloud services, architecture, security, pricing, and support. Demonstrates ability to design and deploy cloud solutions using core AWS services including EC2, S3, RDS, and IAM.",
  },
];

// ─── Contact Links ─────────────────────────────────────────────────────────────
export const CONTACT_LINKS = [
  { icon: "✉️", label: "Email",    value: "nisargpatel0330@email.com",      href: "mailto:nisargpate0330@email.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/nisarg0330",  href: "https://linkedin.com/in/nisarg0330" },
  { icon: "🐙", label: "GitHub",   value: "github.com/nisarg0330",       href: "https://github.com/nisarg0330" },
];

// ─── Hero Stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  ["4+", "Projects Built"],
  ["1",  "AWS Certification"],
  ["5+", "Technologies"],
];

// ─── About Info Cards ─────────────────────────────────────────────────────────
export const ABOUT_CARDS = [
  { icon: "🎓", title: "Education", desc: "Diploma in Computer Programming" },
  { icon: "☁️", title: "Certified", desc: "AWS Cloud Practitioner" },
  { icon: "📍", title: "Location",  desc: "Toronto, Canada" },
  { icon: "🎯", title: "Goal",      desc: "Internship or Entry-Level SWE" },
];
