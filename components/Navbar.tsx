"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && window.scrollY >= section.offsetTop - 160) {
          current = link.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-400/10 bg-slate-950/95 shadow-xl backdrop-blur-xl"
          : "bg-slate-950/70 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-xl font-black tracking-tight text-white"
        >
          Pranith<span className="text-cyan-400"> Rao</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-2 text-sm font-bold transition ${
                activeSection === link.id
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-cyan-400"
              }`}
            >
              {link.name}

              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-cyan-400" />
              )}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 lg:hidden">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 font-bold transition ${
                  activeSection === link.id
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}