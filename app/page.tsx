"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import BackToTop from "@/components/BackToTop";
import { navLinks } from "@/data/resume";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about-section");
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: "-50% 0px -50% 0px" }
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
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto", minHeight: "100vh", display: "flex", flexDirection: isMobile ? "column" : "row", boxShadow: "0 0 80px rgba(0,0,0,0.08)" }}>

      {/* Mobile Top Bar */}
      {isMobile && (
        <div style={styles.mobileBar}>
          <span style={styles.mobileName}>Bishal Budhakshetri</span>
          <button style={styles.menuBtn} onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle menu">
            {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobile && sidebarOpen && (
        <div style={styles.mobileDrawer}>
          <Sidebar activeSection={activeSection} onNavClick={scrollToSection} isMobile={true} />
        </div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sidebar activeSection={activeSection} onNavClick={scrollToSection} isMobile={false} />
      )}

      <main style={{ flex: 1, background: "var(--bg)", padding: isMobile ? "1rem" : "2.5rem 3rem", fontSize: "17px" }}>
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

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const styles: Record<string, React.CSSProperties> = {
  mobileBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#0e0e0e",
    color: "#fff",
    padding: "0.9rem 1.25rem",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  mobileName: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#fff",
  },
  menuBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    padding: 4,
  },
  mobileDrawer: {
    position: "fixed",
    top: 52,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    overflowY: "auto",
    background: "#0e0e0e",
  },
  footer: {
    textAlign: "center",
    fontSize: "0.73rem",
    color: "var(--text-xlight)",
    marginTop: "2rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid var(--border)",
    letterSpacing: "0.3px",
  },
};