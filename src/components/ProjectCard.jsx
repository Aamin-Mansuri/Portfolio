import { useRef, useState } from "react";
import { Github, ExternalLink, Code2, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export default function ProjectCard({ project, isFeatured = false }) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden ${
        isFeatured ? "p-6 sm:p-8" : "p-6"
      }`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-2xl z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,.08), transparent 40%)`,
        }}
      />
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500 -z-10" />

      <div className="relative z-10">
        {/* Top Badges & Category */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/40">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>
          
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
            {project.stats?.stack}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Project Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights List if available */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-5 space-y-1.5 bg-[#fafafa] dark:bg-black/20 p-3.5 rounded-xl border border-black/5 dark:border-white/5">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-3 relative z-10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/80 dark:border-slate-700"
        >
          <Github className="w-4 h-4" />
          <span>Code</span>
          <span>→</span>
        </a>

        {project.liveDemo ? (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-2xs"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 italic">
            Source Verified on GitHub
          </span>
        )}
      </div>
    </div>
  );
}
