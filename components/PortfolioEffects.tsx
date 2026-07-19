"use client";

import { useEffect, useState } from "react";

export default function PortfolioEffects() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentProgress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      setProgress(currentProgress);
      setShowTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-slate-900">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-xl font-black text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}