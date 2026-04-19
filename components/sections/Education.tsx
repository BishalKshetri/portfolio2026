import Section from "@/components/Section";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <Section id="education-section" title="Education">
      <div style={styles.list}>
        {education.map((edu, i) => (
          <div
            key={i}
            style={styles.item}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--text-light)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.07)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div style={styles.left}>
              <div style={styles.degree}>{edu.degree}</div>
              <div style={styles.college}>{edu.college}</div>
              {edu.university && <div style={styles.uni}>{edu.university}</div>}
            </div>
            <div style={styles.right}>
              <span style={styles.year}>{edu.year}</span>
              <span style={styles.location}>{edu.location}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  list: { display: "flex", flexDirection: "column", gap: "0.85rem" },
item: {
    display: "flex",
    flexDirection: "column",
    padding: "1.1rem 1.25rem",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    gap: "0.5rem",
    transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
  },
  left: { flex: 1 },
  degree: {
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "var(--text)",
    marginBottom: "0.2rem",
  },
  college: {
    fontSize: "0.78rem",
    color: "var(--text-light)",
    marginBottom: "0.1rem",
  },
  uni: {
    fontSize: "0.75rem",
    color: "var(--text-xlight)",
  },
right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
  },
  year: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "var(--text-light)",
  },
  location: {
    fontSize: "0.72rem",
    color: "var(--text-xlight)",
  },
};