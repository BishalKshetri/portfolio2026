"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <Section id="projects-section" title="Projects">
      <div style={styles.grid}>
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#111";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.09)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            {/* Header */}
            <div style={styles.cardHeader}>
              <div style={styles.folderWrap}>
                <FolderIcon />
              </div>
              <div style={styles.arrowWrap}>
                <ArrowIcon />
              </div>
            </div>

            {/* Content */}
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDesc}>{project.description}</p>

            {/* Footer */}
            <div style={styles.cardFooter}>
              {project.tools.map((tool) => (
                <span key={tool} style={styles.tag}>{tool}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

const FolderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "1.4rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.1rem",
  },
  folderWrap: {
    color: "var(--text-xlight)",
  },
  arrowWrap: {
    color: "var(--text-xlight)",
    transition: "color 0.2s",
  },
  cardTitle: {
    fontSize: "0.88rem",
    fontWeight: 700,
    color: "var(--text)",
    marginBottom: "0.5rem",
    lineHeight: 1.4,
  },
  cardDesc: {
    fontSize: "0.77rem",
    color: "var(--text-light)",
    lineHeight: 1.75,
    flex: 1,
    marginBottom: "1.1rem",
  },
  cardFooter: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.35rem",
    marginTop: "auto",
  },
  tag: {
    fontSize: "0.67rem",
    fontWeight: 600,
    color: "var(--text-light)",
    background: "var(--card-bg)",
    border: "1px solid var(--border)",
    padding: "0.2rem 0.55rem",
    borderRadius: 4,
    letterSpacing: "0.2px",
  },
};