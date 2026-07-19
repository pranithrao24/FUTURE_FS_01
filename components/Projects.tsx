"use client";

import { useState } from "react";

type Project = {
  title: string;
  category: string;
  icon: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [

  {
  title: "StockVision",
  category: "Machine Learning",
  icon: "📈",
  description:
    "A full-stack AI-powered stock market prediction platform built with React and Flask. It uses historical market data and machine learning to forecast stock prices, visualize trends, and provide Buy, Hold, or Sell recommendations through an interactive dashboard.",
  highlights: [
    "Live stock market data using Yahoo Finance API",
    "7-day future stock price forecasting",
    "Buy, Hold, and Sell recommendation system",
    "Interactive historical and forecast charts",
    "Model metrics including MAE, RMSE, and R² Score",
    "RESTful Flask API with responsive React dashboard",
  ],
  technologies: [
    "React.js",
    "Flask",
    "Python",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Chart.js",
    "Yahoo Finance API",
  ],
  github: "https://github.com/pranithrao24/stock-market",
  demo: "https://stockvision-8b0r.onrender.com/",
},

  {
    title: "LeadFlow CRM",
    category: "Full Stack",
    icon: "💼",
    description:
      "A secure multi-business CRM platform that helps businesses register, manage private workspaces, organize client leads, track follow-ups, monitor conversions, and analyze performance.",
    highlights: [
      "Multi-business authentication",
      "Private lead workspaces",
      "Follow-up and priority tracking",
      "Analytics and CSV export",
      "Public enquiry form",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
    ],
    github: "https://github.com/pranithrao24/FUTURE_FS_02",
    demo: "https://future-fs-02-phi-rosy.vercel.app/",
  },
  {
    title: "Royal Spice Restaurant",
    category: "Business Website",
    icon: "🍽️",
    description:
      "A premium local business website designed to improve restaurant visibility, customer engagement, online reservations, menu discovery, and direct communication.",
    highlights: [
      "Interactive menu filters",
      "Food details modal",
      "Gallery lightbox",
      "Table reservation system",
      "WhatsApp and Google Maps",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/pranithrao24/FUTURE_FS_03",
    demo: "https://future-fs-03-one-orcin.vercel.app/",
  },
];

const categories = [
  "All",
  "Full Stack",
  "Business Website",
  "Machine Learning",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Featured Work
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Projects that solve real problems
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              A collection of full-stack, business, and machine learning
              projects developed to demonstrate practical problem-solving and
              modern software development skills.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  activeCategory === category
                    ? "bg-cyan-400 text-slate-950"
                    : "border border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-400/30 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-3xl">
                    {project.icon}
                  </div>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-bold text-cyan-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-cyan-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-cyan-400 px-4 py-3 text-center font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    GitHub
                  </a>

                  {project.demo === "#" ? (
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-xl border border-white/10 px-4 py-3 font-black text-slate-500"
                    >
                      Demo Soon
                    </button>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-cyan-400/30 px-4 py-3 text-center font-black text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-3 w-full rounded-xl bg-white/[0.04] px-4 py-3 font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  View Project Details
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-5 py-10 backdrop-blur"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-cyan-400/20 bg-slate-900 p-8 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-xl text-white hover:bg-cyan-400 hover:text-slate-950"
            >
              ×
            </button>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl">
              {selectedProject.icon}
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-cyan-400">
              {selectedProject.category}
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              {selectedProject.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              {selectedProject.description}
            </p>

            <h4 className="mt-7 font-black text-white">Key Features</h4>

            <div className="mt-4 space-y-3">
              {selectedProject.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <span className="text-cyan-400">✓</span>
                  {highlight}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {selectedProject.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}