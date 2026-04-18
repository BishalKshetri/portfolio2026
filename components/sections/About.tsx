import Section from "@/components/Section";
import { profile } from "@/data/resume";

export default function About() {
  return (
    <Section id="about-section" title="">
      <div style={styles.topRow}>
        <div style={styles.left}>
          <h1 style={styles.heading}>{profile.name}</h1>
          <div style={styles.metaRow}>
            <p style={styles.role}>{profile.title}</p>
            <span style={styles.dot}>·</span>
            <span style={styles.location}>Kathmandu, Nepal</span>
          </div>
        </div>
        <div style={styles.statusBadge}>
          <span style={styles.statusDot} />
          Open to work
        </div>
      </div>
      <div style={styles.divider} />
      <p style={styles.bio}>{profile.bio}</p>
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
  role: {
    fontSize: "0.85rem",
    color: "var(--text-light)",
    fontWeight: 500,
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
    maxWidth: 680,
  },
};