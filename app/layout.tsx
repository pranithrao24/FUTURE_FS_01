import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Pusukuri Pranith Rao | Full Stack Developer",

  description:
    "Professional portfolio of Pusukuri Pranith Rao, a Computer Science Engineering student specializing in Full Stack Web Development using Next.js, React, TypeScript, Firebase, Python, and Machine Learning.",

  keywords: [
    "Pusukuri Pranith Rao",
    "Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Firebase",
    "Tailwind CSS",
    "Python",
    "Machine Learning",
    "Stock Market Prediction",
    "LeadFlow CRM",
    "Royal Spice",
    "GitHub",
    "Vercel",
  ],

  authors: [{ name: "Pusukuri Pranith Rao" }],

  creator: "Pusukuri Pranith Rao",

  metadataBase: new URL("https://your-portfolio.vercel.app"),

  openGraph: {
    title: "Pusukuri Pranith Rao",
    description:
      "Full Stack Developer Portfolio showcasing modern web applications and AI-powered projects.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
        <Analytics/>
      </body>
    </html>
  );
}