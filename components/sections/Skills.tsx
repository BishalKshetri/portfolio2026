"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { topSkills, techSkills, softSkills } from "@/data/resume";

export default function Skills() {
  return (
    <Section id="skills-section" title="Professional Skills">

      {/* Top Skills */}
      <div style={styles.block}>
        <div style={styles.subTitle}>Core Proficiencies</div>
        <div style={styles.topSkills}>
          {topSkills.map((skill, i) => (
            <div key={skill.name} style={styles.skillRow}>
              <div style={styles.skillLeft}>
                <span style={styles.skillName}>{skill.name}</span>
                <span style={styles.skillMeta}>{skill.meta}</span>
              </div>
              <div style={styles.skillRight}>
                <div style={styles.bar}>
                  <motion.div
                    style={styles.fill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: i * 0.1 }}
                  />
                </div>
                <span style={styles.pct}>{skill.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.separator} />

      {/* Technical Skills */}
      <div style={styles.block}>
        <div style={styles.subTitle}>Technical Stack</div>
        <div style={styles.techGrid}>
          {techSkills.map((item) => (
            <div key={item.label} style={styles.techCard}>
              <div style={styles.techLabel}>{item.label}</div>
              <div style={styles.techTags}>
                {item.value.replace(/\.$/, "").split(", ").map((tag) => (
                  <span key={tag} style={styles.techTag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.separator} />

      {/* Soft Skills */}
      <div style={styles.block}>
        <div style={styles.subTitle}>Professional Strengths</div>
        <div style={styles.softGrid}>
          {softSkills.map((s, i) => (
            <motion.div
              key={s}
              style={styles.softCard}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <span style={styles.softIcon}>✦</span>
              {s}
            </motion.div>
          ))}
        </div>
      </div>

    </Section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  block: {
    marginBottom: "0.5rem",
  },
  separator: {
    height: 1,
    background: "var(--border)",
    margin: "1.75rem 0",
  },
  subTitle: {
    fontSize: "0.68rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1.1px",
    color: "var(--text-xlight)",
    marginBottom: "1.25rem",
  },

  // Top Skills
  topSkills: {
    display: "flex",
    flexDirection: "column",
    gap: "0.9rem",
  },
  skillRow: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  skillLeft: {
    width: 200,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
  },
  skillName: {
    fontSize: "0.83rem",
    fontWeight: 600,
    color: "var(--text)",
  },
  skillMeta: {
    fontSize: "0.68rem",
    color: "var(--text-xlight)",
  },
  skillRight: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: "0.65rem",
  },
  bar: {
    flex: 2,
    height: 5,
    borderRadius: 4,
    background: "var(--progress-bg)",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 4,
    background: "var(--text)",
  },
  pct: {
    fontSize: "0.7rem",
    fontWeight: 600,
    color: "var(--text-xlight)",
    width: 32,
    textAlign: "right",
  },

  // Tech Stack
  techGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  techCard: {
    padding: "0.9rem 1rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 8,
  },
  techLabel: {
    fontSize: "0.68rem",
    fontWeight: 700,
    color: "var(--text-xlight)",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
    marginBottom: "0.6rem",
  },
  techTags: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.35rem",
  },
  techTag: {
    fontSize: "0.72rem",
    fontWeight: 500,
    color: "var(--text-mid)",
    background: "var(--card-bg)",
    border: "1px solid var(--border)",
    padding: "0.18rem 0.5rem",
    borderRadius: 4,
  },

  // Soft Skills
  softGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.5rem",
  },
  softCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    fontSize: "0.78rem",
    color: "var(--text-mid)",
    padding: "0.65rem 0.85rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 7,
    lineHeight: 1.5,
  },
  softIcon: {
    fontSize: "0.55rem",
    color: "var(--text-xlight)",
    marginTop: 3,
    flexShrink: 0,
  },
};