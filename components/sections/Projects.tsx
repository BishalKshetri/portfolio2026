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
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            {/* Project Image */}
            <div style={styles.imageWrap}>
              <img
                src={project.image}
                alt={project.title}
                style={styles.image}
              />
              <div style={styles.imageOverlay}>
                <span style={styles.viewText}>View Project ↗</span>
              </div>
            </div>

            {/* Content */}
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardDesc}>{project.description}</p>
            </div>

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

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    overflow: "hidden",
    transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  },
  imageWrap: {
    position: "relative",
    width: "100%",
    height: 160,
    overflow: "hidden",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.3s ease",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.55)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.25s",
  },
  viewText: {
    color: "#fff",
    fontSize: "0.82rem",
    fontWeight: 600,
    letterSpacing: "0.3px",
  },
  cardBody: {
    flex: 1,
    padding: "1rem 1.1rem 0.75rem 1.1rem",
  },
  cardTitle: {
    fontSize: "0.88rem",
    fontWeight: 700,
    color: "var(--text)",
    marginBottom: "0.4rem",
    lineHeight: 1.4,
  },
  cardDesc: {
    fontSize: "0.77rem",
    color: "var(--text-light)",
    lineHeight: 1.75,
  },
  cardFooter: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.35rem",
    padding: "0.75rem 1.1rem 1rem 1.1rem",
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