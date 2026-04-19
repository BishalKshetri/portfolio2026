"use client";

import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      style={styles.section}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {title && (
        <div style={styles.titleRow}>
          <h2 style={styles.title}>{title}</h2>
        </div>
      )}
      {children}
    </motion.section>
  );
}
const styles: Record<string, React.CSSProperties> = {
  section: {
    marginBottom: "2rem",
    padding: "2rem 2.25rem",
    background: "var(--card-bg)",
    border: "1px solid var(--border)",
    borderRadius: 14,
    boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
  },
titleRow: {
    marginBottom: "1.75rem",
    paddingBottom: "0.8rem",
    borderBottom: "2px solid var(--border)",
  },
  title: {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "var(--text)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
};