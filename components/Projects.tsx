const projects = [
  {
    title: "CodeTech",
    description:
      "An AI-powered programming learning platform that generates learning roadmaps, interactive modules, quizzes, and mentor guidance for students. The platform is designed to make learning programming more interactive and personalized.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Firebase",
      "AI",
    ],
    github: "https://github.com/pranithrao24",
  },
  {
    title: "Stock Price Prediction",
    description:
      "A machine learning web application that predicts stock prices using historical market data and presents results through an interactive dashboard. Built to demonstrate data analysis and predictive modeling.",
    technologies: [
      "Python",
      "Machine Learning",
      "Flask",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/pranithrao24",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          Projects
        </p>

        <h2 className="mt-3 text-4xl font-extrabold text-white">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          A selection of projects that demonstrate my interest in web
          development, AI-powered applications, and software engineering.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
          >
            {/* Image Placeholder */}
            <div className="flex h-56 items-center justify-center bg-slate-900">
              <span className="text-slate-500 text-center px-4">
                Project Screenshot will be added after deployment
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}