const education = [
  {
    period: "2024 – 2028",
    qualification: "Bachelor of Technology",
    institution: "Vaagdevi College of Engineering",
    details: "Computer Science Engineering • CGPA: 8.05",
    location: "Warangal, Telangana",
  },
  {
    period: "2022 – 2024",
    qualification: "Intermediate",
    institution: "Narayana Junior College",
    details: "Percentage: 96%",
    location: "Bongulur, Telangana",
  },
  {
    period: "2022",
    qualification: "Secondary School Certificate",
    institution: "Pathfinder High School",
    details: "CGPA: 9.5/10",
    location: "Warangal, Telangana",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-slate-900/40 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Academic Journey
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            My academic background has helped me build a strong foundation in
            computer science, programming, and software development.
          </p>
        </div>

        <div className="relative mt-14 space-y-7 border-l border-cyan-400/20 pl-8">
          {education.map((item) => (
            <article
              key={`${item.qualification}-${item.period}`}
              className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400" />

              <p className="text-sm font-black uppercase tracking-widest text-cyan-400">
                {item.period}
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                {item.qualification}
              </h3>

              <p className="mt-2 text-lg font-bold text-slate-300">
                {item.institution}
              </p>

              <p className="mt-3 text-slate-400">{item.details}</p>
              <p className="mt-1 text-sm text-slate-500">{item.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}