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
import { navLinks } from "@/data/resume";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about-section");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-60px 0px -40% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={styles.layout}>
      <Sidebar activeSection={activeSection} onNavClick={scrollToSection} />
      <main style={styles.main}>
        <About />
        <Experience />
        <Skills />
        <Projects />
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
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  layout: {
    display: "flex",
    maxWidth: 1400,
    margin: "0 auto",
    minHeight: "100vh",
    boxShadow: "0 0 80px rgba(0,0,0,0.07)",
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