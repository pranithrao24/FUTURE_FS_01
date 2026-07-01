const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Programming",
    skills: ["Python"],
  },
  {
    title: "Database",
    skills: ["SQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "AI Skills",
    skills: ["Prompt Engineering", "AI Tools"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-white">
          Technologies I work with
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
          >
            <h3 className="mb-5 text-xl font-bold text-cyan-400">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}