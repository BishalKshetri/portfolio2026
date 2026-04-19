import Section from "@/components/Section";
import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <Section id="contact-section" title="Contact">
      <div style={styles.grid}>

        <a href={`mailto:${profile.email}`} style={styles.card}>
          <div style={styles.cardIcon}>
            <EmailIcon />
          </div>
          <div>
            <div style={styles.cardLabel}>Email</div>
            <div style={styles.cardValue}>{profile.email}</div>
          </div>
        </a>

        <a href={`tel:${profile.phone}`} style={styles.card}>
          <div style={styles.cardIcon}>
            <PhoneIcon />
          </div>
          <div>
            <div style={styles.cardLabel}>Phone</div>
            <div style={styles.cardValue}>{profile.phone}</div>
          </div>
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer" style={styles.card} aria-label="Visit LinkedIn profile">
          <div style={styles.cardIcon}>
            <LinkedinIcon />
          </div>
          <div>
            <div style={styles.cardLabel}>LinkedIn</div>
            <div style={styles.cardValue}>budhakshetribishal</div>
          </div>
        </a>

        <a href={profile.github} target="_blank" rel="noreferrer" style={styles.card}>
          <div style={styles.cardIcon}>
            <GithubIcon />
          </div>
          <div>
            <div style={styles.cardLabel}>GitHub</div>
            <div style={styles.cardValue}>BishalKshetri</div>
          </div>
        </a>

      </div>
    </Section>
  );
}

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.93 5.93l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.85rem",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: "0.85rem",
    padding: "1rem 1.1rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    transition: "border-color 0.2s, box-shadow 0.2s",
    color: "inherit",
  },
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    background: "var(--card-bg)",
    border: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-light)",
    flexShrink: 0,
  },
  cardLabel: {
    fontSize: "0.68rem",
    fontWeight: 600,
    color: "var(--text-xlight)",
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    marginBottom: "0.15rem",
  },
  cardValue: {
    fontSize: "0.78rem",
    color: "var(--text-mid)",
    fontWeight: 500,
  },
};