export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">
              Pusukuri <span className="text-cyan-400">Pranith Rao</span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Web Developer • Prompt Engineer
            </p>
          </div>

          <div className="flex gap-6 text-slate-300">
            <a
              href="https://github.com/pranithrao24"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pranith-rao-1a4460318"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="mailto:pusukuripranithrao24@gmail.com"
              className="hover:text-cyan-400"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Pusukuri Pranith Rao. Built with Next.js &
          Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}