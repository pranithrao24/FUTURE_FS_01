export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>
        <h2 className="mt-3 text-4xl font-extrabold text-white">
          Building skills through real projects
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:col-span-2">
          <p className="text-lg leading-8 text-slate-300">
            I am a Computer Science Engineering student from Vaagdevi College
            of Engineering, Warangal. I am interested in web development,
            prompt engineering, and building practical software solutions.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            My focus is on creating clean, responsive, and user-friendly web
            applications while continuously improving my programming,
            problem-solving, and project development skills.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">College</p>
            <h3 className="mt-1 font-bold text-white">
              Vaagdevi College of Engineering
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Branch & Year</p>
            <h3 className="mt-1 font-bold text-white">CSE - 3rd Year</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">Location</p>
            <h3 className="mt-1 font-bold text-white">Warangal, Telangana</h3>
          </div>
        </div>
      </div>
    </section>
  );
}