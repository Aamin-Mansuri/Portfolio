import { heroTechStack } from "../data/skills";

export default function TechStack() {
  return (
    <section className="py-8 border-y border-black/5 dark:border-white/5 bg-[#fafafa] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">
            Core Technical Ecosystem
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {heroTechStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
