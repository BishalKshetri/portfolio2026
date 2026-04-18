import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bishal Budhakshetri | Data Analyst",
  description:
    "Portfolio of Bishal Budhakshetri — Data Analyst proficient in Python, SQL, Power BI, and PostgreSQL.",
  openGraph: {
    title: "Bishal Budhakshetri | Data Analyst",
    description: "Data Analyst based in Kathmandu, Nepal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}