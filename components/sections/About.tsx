"use client";

import { useEffect, useRef } from "react";
import Section from "@/components/Section";
import { profile } from "@/data/resume";

export default function About() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let typed: any;

    const initTyped = async () => {
      const Typed = (await import("typed.js")).default;
      typed = new Typed(typedRef.current, {
        strings: ["Data Analyst", "Power BI Developer", "SQL Expert", "Data Storyteller"],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    };

    initTyped();

    return () => {
      if (typed) typed.destroy();
    };
  }, []);

  return (
    <Section id="about-section" title="">
      <div style={styles.topRow}>
        <div style={styles.left}>
          <h1 style={styles.heading}>{profile.name}</h1>
          <div style={styles.metaRow}>
            <span style={styles.typedWrap}>
              <span ref={typedRef} />
            </span>
          </div>
        </div>
        <div style={styles.statusBadge}>
          <span style={styles.statusDot} />
          Open to work
        </div>
      </div>

      <div style={styles.divider} />

      <p style={styles.bio}>{profile.bio}</p>

      {/* Stats Row */}
      <div style={styles.statsRow} className="stats-row">
        <div style={styles.statItem}>
          <div style={styles.statNumber}>2+</div>
          <div style={styles.statLabel}>Years Experience</div>
        </div>
        <div style={styles.statDivider} className="stat-divider" />
        <div style={styles.statItem}>
          <div style={styles.statNumber}>3+</div>
          <div style={styles.statLabel}>Projects Completed</div>
        </div>
        <div style={styles.statDivider} className="stat-divider"/>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>5+</div>
          <div style={styles.statLabel}>Tools Mastered</div>
        </div>
        <div style={styles.statDivider} className="stat-divider" />
        <div style={styles.statItem}>
          <div style={styles.statNumber}>2</div>
          <div style={styles.statLabel}>Organizations Served</div>
        </div>
      </div>

      {/* Quick Skills */}
      <div style={styles.quickSkills}>
        {["Python", "SQL", "Power BI", "PostgreSQL", "MS Excel", "SSMS"].map((skill) => (
          <span key={skill} style={styles.skillTag}>{skill}</span>
        ))}
      </div>

    </Section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.25rem",
    flexWrap: "wrap" as const,
    gap: "0.75rem",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },
  heading: {
    fontSize: "1.75rem",
    fontWeight: 700,
    letterSpacing: "-0.5px",
    lineHeight: 1.2,
    color: "var(--text)",
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  typedWrap: {
    fontSize: "0.88rem",
    color: "var(--accent)",
    fontWeight: 600,
  },
  dot: {
    color: "var(--text-xlight)",
    fontSize: "0.85rem",
  },
  location: {
    fontSize: "0.85rem",
    color: "var(--text-xlight)",
  },
  statusBadge: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.72rem",
    fontWeight: 500,
    color: "#16a34a",
    background: "#f0fdf4",
    border: "1px solid #bbf7d0",
    padding: "0.3rem 0.75rem",
    borderRadius: 20,
    whiteSpace: "nowrap" as const,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#16a34a",
    flexShrink: 0,
  },
  divider: {
    height: 1,
    background: "var(--border)",
    margin: "1.25rem 0",
  },
  bio: {
    fontSize: "0.88rem",
    color: "var(--text-light)",
    lineHeight: 1.95,
    marginBottom: "1.5rem",
  },
statsRow: {
    display: "flex",
    alignItems: "center",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "1rem 0.5rem",
    marginBottom: "1.25rem",
    overflowX: "auto",
    flexWrap: "wrap" as const,
    gap: "0.5rem",
  },
  statItem: {
    flex: 1,
    textAlign: "center",
    minWidth: "80px"
  },
  statNumber: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "var(--text)",
    lineHeight: 1,
    marginBottom: "0.3rem",
  },
  statLabel: {
    fontSize: "0.7rem",
    color: "var(--text-light)",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  statDivider: {
    width: 1,
    height: 36,
    background: "var(--border)",
    flexShrink: 0,
  },
  quickSkills: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.4rem",
  },
  skillTag: {
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "var(--text-mid)",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    padding: "0.3rem 0.7rem",
    borderRadius: 5,
  },
};