export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black text-white">
              Pusukuri <span className="text-cyan-400">Pranith Rao</span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Full Stack Developer • CSE Student
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-sm font-bold text-slate-300">
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/pranithrao24"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 hover:border-cyan-400/30 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pranith-rao-1a4460318"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 px-4 py-2 text-sm font-bold text-slate-300 hover:border-cyan-400/30 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-9 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Pusukuri Pranith Rao. Designed and
          developed using Next.js and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}