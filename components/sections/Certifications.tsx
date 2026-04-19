"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { certifications } from "@/data/resume";

export default function Certifications() {
  return (
    <Section id="certifications-section" title="Certifications">
      <div style={styles.list}>
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.file}
            target="_blank"
            rel="noreferrer"
            style={styles.card}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#111";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            {/* Left accent */}
            <div style={{ ...styles.accent, background: cert.color }} />

            {/* Icon */}
            <div style={styles.iconWrap}>
              <CertIcon />
            </div>

            {/* Content */}
            <div style={styles.content}>
              <div style={styles.title}>{cert.title}</div>
              <div style={styles.issuer}>{cert.issuer}</div>
            </div>

            {/* Right */}
            <div style={styles.right}>
              <span style={styles.year}>{cert.year}</span>
              <span style={styles.viewLink}>View ↗</span>
            </div>

          </motion.a>
        ))}
      </div>
    </Section>
  );
}

const CertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const styles: Record<string, React.CSSProperties> = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    overflow: "hidden",
    transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
    textDecoration: "none",
    color: "inherit",
    position: "relative",
  },
  accent: {
    width: 4,
    alignSelf: "stretch",
    flexShrink: 0,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 8,
    background: "var(--card-bg)",
    border: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-light)",
    flexShrink: 0,
  },
  content: {
    flex: 1,
    padding: "1rem 0",
  },
  title: {
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "var(--text)",
    marginBottom: "0.2rem",
  },
  issuer: {
    fontSize: "0.75rem",
    color: "var(--text-light)",
  },
right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "0.25rem",
    padding: "0 0.75rem",
    flexShrink: 0,
    minWidth: "70px",
  },
year: {
    fontSize: "0.68rem",
    fontWeight: 600,
    color: "var(--text-xlight)",
    whiteSpace: "nowrap" as const,
  },
  viewLink: {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "var(--accent)",
  },
};