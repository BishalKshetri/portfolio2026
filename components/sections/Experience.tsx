import Section from "@/components/Section";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <Section id="experiences-section" title="Experience">
      <div style={{ display: "flex", flexDirection: "column" }}>
        {experience.map((job, i) => (
          <div
            key={i}
            style={styles.item}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "var(--bg)";
              (e.currentTarget as HTMLDivElement).style.borderRadius = "10px";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "transparent";
              (e.currentTarget as HTMLDivElement).style.borderRadius = "0";
            }}
          >
            <div style={styles.timeline}>
              <div style={styles.dot} />
              <div style={styles.line} />
            </div>
            <div style={styles.content}>
              <div style={styles.header}>
                <div>
                  <span style={styles.company}>{job.company}</span>
                  <div style={styles.role}>{job.role}</div>
                </div>
                <div style={styles.meta}>
                  <span style={styles.period}>{job.period}</span>
                  <span style={styles.location}>{job.location}</span>
                </div>
              </div>
              <ul style={styles.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={styles.bullet}>{b}</li>
                ))}
              </ul>
              <div style={styles.skillsWrap}>
                {job.skills.map((s) => (
                  <span key={s} style={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  item: {
    display: "flex",
    gap: "1.25rem",
    paddingBottom: "2rem",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    width: 12,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "var(--text)",
    border: "2px solid var(--bg)",
    outline: "2px solid var(--border)",
    flexShrink: 0,
    marginTop: 6,
    zIndex: 1,
  },
  line: {
    flex: 1,
    width: 1,
    background: "var(--border)",
    marginTop: 4,
  },
  content: { flex: 1 },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "0.75rem",
    flexWrap: "wrap" as const,
  },
  company: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--text)",
    display: "block",
    marginBottom: "0.15rem",
  },
  role: {
    fontSize: "0.82rem",
    fontWeight: 500,
    color: "var(--accent)",
  },
  meta: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "0.15rem",
  },
  period: {
    fontSize: "0.75rem",
    color: "var(--text-light)",
    fontWeight: 500,
    whiteSpace: "nowrap",
  },
  location: {
    fontSize: "0.72rem",
    color: "var(--text-xlight)",
    whiteSpace: "nowrap",
  },
  bullets: {
    margin: "0 0 0.75rem 1rem",
    padding: 0,
  },
  bullet: {
    fontSize: "0.82rem",
    color: "var(--text-light)",
    marginBottom: "0.3rem",
    lineHeight: 1.8,
  },
  skillsWrap: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.4rem",
  },
  skillTag: {
    fontSize: "0.68rem",
    fontWeight: 500,
    color: "var(--text-light)",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    padding: "0.2rem 0.55rem",
    borderRadius: 4,
    letterSpacing: "0.2px",
  },
};