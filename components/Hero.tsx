import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center overflow-hidden px-6 pt-28">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Welcome to My Portfolio
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Pusukuri
            <span className="block text-cyan-400">Pranith Rao</span>
          </h1>

          <h2 className="mt-5 text-xl font-bold text-slate-200 md:text-2xl">
            Full Stack Web Developer & Prompt Engineer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Building clean, responsive and intelligent web applications using
            modern technologies. Passionate about AI, full stack development,
            and creating impactful digital experiences.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-cyan-400 px-6 py-3 font-bold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-9 grid max-w-lg grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">2+</h3>
              <p className="mt-1 text-sm text-slate-400">Projects</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">7+</h3>
              <p className="mt-1 text-sm text-slate-400">Skills</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <h3 className="text-2xl font-bold text-cyan-400">AI</h3>
              <p className="mt-1 text-sm text-slate-400">Enthusiast</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden rounded-3xl border border-cyan-400/40 bg-slate-900 p-3 shadow-2xl shadow-cyan-400/20">
            <Image
              src="/profile.jpg"
              alt="Pusukuri Pranith Rao"
              width={360}
              height={440}
              priority
              className="h-[440px] w-[360px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}