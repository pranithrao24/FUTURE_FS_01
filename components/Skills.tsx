const skillGroups = [
  {
    title: "Frontend Development",
    icon: "🎨",
    description: "Building responsive and modern user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    description: "Authentication, cloud database, and application logic.",
    skills: [
      "Firebase Authentication",
      "Cloud Firestore",
      "Node.js",
      "SQL",
      "Flask",
    ],
  },
  {
    title: "Programming",
    icon: "💻",
    description: "Core programming and problem-solving skills.",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  },
  {
    title: "Data & Machine Learning",
    icon: "📊",
    description: "Data analysis and predictive application development.",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Machine Learning",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: "🚀",
    description: "Version control, development, and cloud deployment.",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman"],
  },
  {
    title: "Professional Skills",
    icon: "🧠",
    description: "Skills that support effective project delivery.",
    skills: [
      "Problem Solving",
      "Prompt Engineering",
      "Team Collaboration",
      "Communication",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            A growing technical stack focused on modern full-stack development,
            cloud tools, and data-driven applications.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 transition hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                {group.icon}
              </div>

              <h3 className="mt-6 text-xl font-black text-white">
                {group.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-300 transition group-hover:border-cyan-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}