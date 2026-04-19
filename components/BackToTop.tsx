"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={styles.btn}
      title="Back to top"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "#333";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = "#111";
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
      }}
    >
      ↑
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  btn: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "#111",
    color: "#fff",
    border: "none",
    fontSize: "1.1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
    transition: "background 0.2s, transform 0.2s",
    zIndex: 999,
  },
};