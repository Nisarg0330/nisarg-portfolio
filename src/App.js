import { globalStyles } from "./styles/globalStyles";
import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import About          from "./components/About";
import Skills         from "./components/Skills";
import Projects       from "./components/Projects";
import Certifications from "./components/Certifications";
import ResumeBanner   from "./components/ResumeBanner";
import Contact        from "./components/Contact";
import Footer         from "./components/Footer";

// Smooth-scroll helper shared across components
const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter',sans-serif", color: "#0f172a", background: "#fff" }}>
      <style>{globalStyles}</style>

      <Navbar       scrollTo={scrollTo} />
      <Hero         scrollTo={scrollTo} />
      <About        scrollTo={scrollTo} />
      <Skills />
      <Projects />
      <Certifications />
      <ResumeBanner />
      <Contact />
      <Footer />
    </div>
  );
}
