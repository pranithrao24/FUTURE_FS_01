import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Pusukuri Pranith Rao | Web Developer Portfolio",
  description:
    "Portfolio of Pusukuri Pranith Rao, CSE student at Vaagdevi College of Engineering, skilled in web development, prompt engineering, Python, JavaScript, SQL, Git and GitHub.",
  keywords: [
    "Pusukuri Pranith Rao",
    "Web Developer",
    "Prompt Engineering",
    "CSE Student",
    "Vaagdevi College of Engineering",
    "Portfolio",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "SQL",
    "GitHub",
  ],
  authors: [{ name: "Pusukuri Pranith Rao" }],
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