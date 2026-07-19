"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "React & Next.js Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-bold text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to internships and opportunities
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Welcome to my portfolio
          </p>

          <h1 className="mt-5 text-5xl font-black leading-[1.05] text-white md:text-7xl">
            Pusukuri
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Pranith Rao
            </span>
          </h1>

          <div className="mt-6 flex min-h-12 items-center">
            <span className="mr-3 text-xl font-bold text-slate-400">
              I&apos;m a
            </span>

            <span
              key={roles[roleIndex]}
              className="animate-fade-up text-xl font-black text-cyan-400 md:text-2xl"
            >
              {roles[roleIndex]}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Computer Science Engineering student focused on creating modern,
            secure, and user-friendly web applications using Next.js, React,
            TypeScript, Firebase, Python, and modern development tools.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-400 px-7 py-4 font-black text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Explore Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-cyan-400/40 bg-cyan-400/5 px-7 py-4 font-black text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["3+", "Projects"],
              ["10+", "Technologies"],
              ["100%", "Responsive"],
              ["Full Stack", "Focus"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <h3 className="text-xl font-black text-cyan-400">{value}</h3>
                <p className="mt-1 text-xs font-semibold text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-80 w-80 rounded-full border border-cyan-400/20" />
          <div className="absolute h-96 w-96 animate-spin-slow rounded-full border border-dashed border-violet-400/20" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-3 shadow-2xl shadow-cyan-400/10">
            <Image
              src="/profile.jpg"
              alt="Pusukuri Pranith Rao"
              width={400}
              height={500}
              priority
              className="h-[470px] w-[370px] rounded-[2rem] object-cover"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl">
              <p className="text-sm font-bold text-cyan-400">
                Full Stack Developer
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Next.js • React • Firebase • Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}