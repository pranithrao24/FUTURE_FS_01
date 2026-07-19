const qualities = [
  "Quick Learner",
  "Problem Solver",
  "Team Player",
  "Effective Communicator",
  "Self-Motivated",
  "Adaptable",
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
              Turning ideas into useful digital products
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              I am a Computer Science Engineering student at Vaagdevi College
              of Engineering, Warangal, with a strong interest in full-stack web
              development and real-world software solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              I enjoy building secure, responsive, and scalable applications.
              My projects include a multi-business CRM, a professional local
              business website, and a machine learning stock prediction system.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {qualities.map((quality) => (
                <span
                  key={quality}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-200"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                label: "College",
                value: "Vaagdevi College of Engineering",
              },
              {
                label: "Program",
                value: "B.Tech – Computer Science Engineering",
              },
              {
                label: "Current Year",
                value: "3rd Year",
              },
              {
                label: "Location",
                value: "Warangal, Telangana",
              },
              {
                label: "Primary Focus",
                value: "Full Stack Web Development",
              },
              {
                label: "Career Goal",
                value: "Software Developer",
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  {item.label}
                </p>

                <h3 className="mt-3 text-lg font-black leading-7 text-white">
                  {item.value}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}