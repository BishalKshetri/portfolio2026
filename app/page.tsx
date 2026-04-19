"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import BackToTop from "@/components/BackToTop";
import Certifications from "@/components/sections/Certifications";
import { navLinks } from "@/data/resume";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about-section");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px"
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div style={styles.layout}>
      <Sidebar activeSection={activeSection} onNavClick={scrollToSection} />
      <main style={styles.main}>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={styles.footer}
        >
          © 2026 Bishal Budhakshetri — Data Analyst
        </motion.footer>
      </main>
      <BackToTop />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
layout: {
    display: "flex",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    background: "var(--bg)",
    padding: "2.5rem 3rem",
  },
  footer: {
    textAlign: "center",
    fontSize: "0.72rem",
    color: "var(--text-xlight)",
    marginTop: "1rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid var(--border)",
    letterSpacing: "0.3px",
  },
};