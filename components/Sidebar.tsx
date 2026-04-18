"use client";

import Image from "next/image";
import { profile, navLinks } from "@/data/resume";

interface SidebarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  return (
    <aside style={styles.sidebar}>

      <div style={styles.avatarWrap}>
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={88}
          height={88}
          style={styles.avatarImg}
          priority
        />
      </div>

      <div style={styles.nameBlock}>
        <div style={styles.name}>{profile.name}</div>
        <div style={styles.badge}>{profile.title}</div>
      </div>

      <div style={styles.divider} />

      <div style={styles.cta}>
        <a href={`mailto:${profile.email}`} style={styles.btnPrimary}>
          Hire Me
        </a>
        <a href={profile.resume} target="_blank" rel="noreferrer" style={styles.btnSecondary}>
          Download CV
        </a>
      </div>

      <div style={styles.divider} />

      <div style={styles.contacts}>
        <a href={`mailto:${profile.email}`} style={styles.contactLink}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
          }}
        >
          <EmailIcon />
          <span style={styles.contactLabel}>{profile.email}</span>
        </a>

        <a href={`tel:${profile.phone}`} style={styles.contactLink}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
          }}
        >
          <PhoneIcon />
          <span style={styles.contactLabel}>{profile.phone}</span>
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer" style={styles.contactLink}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
          }}
        >
          <LinkedinIcon />
          <span style={styles.contactLabel}>LinkedIn</span>
        </a>

        <a href={profile.github} target="_blank" rel="noreferrer" style={styles.contactLink}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(3px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
          }}
        >
          <GithubIcon />
          <span style={styles.contactLabel}>GitHub</span>
        </a>
      </div>

      <div style={styles.divider} />

      <nav style={styles.nav}>
        {navLinks.map((link) => (
          <NavItem
            key={link.href}
            label={link.label}
            active={activeSection === link.href}
            onClick={() => onNavClick(link.href)}
          />
        ))}
      </nav>

      <div style={styles.bottomTag}>Available for opportunities</div>

    </aside>
  );
}

function NavItem({ label, active, onClick }: {
  label: string; active: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.navLink,
        ...(active ? styles.navLinkActive : {}),
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateX(4px)";
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.45)";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateX(0)";
          (e.currentTarget as HTMLButtonElement).style.background = "none";
        }
      }}
    >
      <span style={{
        ...styles.navDot,
        ...(active ? styles.navDotActive : {}),
      }} />
      {label}
    </button>
  );
}

const EmailIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.93 5.93l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const styles: Record<string, React.CSSProperties> = {
  sidebar: {
    width: "var(--sidebar)",
    height: "100vh",
    position: "sticky",
    top: 0,
    background: "var(--nav)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "0",
    padding: "2rem 1.5rem",
    overflowY: "auto",
    flexShrink: 0,
  },
  avatarWrap: {
    width: 88,
    height: 88,
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto 1.25rem auto",
    flexShrink: 0,
    border: "2px solid rgba(255,255,255,0.1)",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  nameBlock: {
    textAlign: "center",
    marginBottom: "0rem",
  },
  name: {
    fontSize: "1.05rem",
    fontWeight: 600,
    color: "#ffffff",
    letterSpacing: "-0.2px",
    marginBottom: "0.4rem",
  },
  badge: {
    display: "inline-block",
    fontSize: "0.7rem",
    fontWeight: 500,
    color: "rgba(255,255,255,0.5)",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "0.2rem 0.65rem",
    borderRadius: 20,
    letterSpacing: "0.4px",
  },
  divider: {
    height: 1,
    background: "rgba(255,255,255,0.2.5)",
    margin: "0.85rem 0",
    flexShrink: 0,
  },
  cta: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "0rem",
  },
  btnPrimary: {
    display: "block",
    textAlign: "center",
    background: "#ffffff",
    color: "#0e0e0e",
    padding: "0.55rem",
    borderRadius: 7,
    fontSize: "0.8rem",
    fontWeight: 600,
    letterSpacing: "0.2px",
  },
  btnSecondary: {
    display: "block",
    textAlign: "center",
    background: "transparent",
    color: "rgba(255,255,255,0.6)",
    padding: "0.55rem",
    borderRadius: 7,
    fontSize: "0.8rem",
    fontWeight: 500,
    border: "1px solid rgba(255,255,255,0.12)",
  },
  contacts: {
    display: "flex",
    flexDirection: "column",
    gap: "0.05rem",
  },
  contactLink: {
    display: "flex",
    gap: "0.55rem",
    alignItems: "center",
    fontSize: "0.78rem",
    color: "rgba(255,255,255,0.55)",
    padding: "0.3rem 0",
    transition: "color 0.2s, transform 0.2s",
  },
  contactLabel: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
  },
navLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    width: "100%",
    textAlign: "left",
    background: "none",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: "0.72rem",
    color: "rgba(255,255,255,0.45)",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.6rem",
    paddingRight: "0.6rem",
    textTransform: "uppercase",
    letterSpacing: "0.9px",
    fontWeight: 500,
    transition: "color 0.2s, transform 0.2s, background 0.2s",
  },
  navLinkActive: {
    color: "#ffffff",
    background: "rgba(255,255,255,0.08)",
    paddingLeft: "0.6rem",
  },
  navDot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.2)",
    flexShrink: 0,
    transition: "background 0.2s, box-shadow 0.2s",
  },
  navDotActive: {
    background: "#ffffff",
    boxShadow: "0 0 6px rgba(255,255,255,0.6)",
  },
  bottomTag: {
    marginTop: "auto",
    paddingTop: "1.25rem",
    fontSize: "0.73rem",
    color: "rgba(255,255,255,0.65)",
    textAlign: "center",
    letterSpacing: "0.3px",
  },
};