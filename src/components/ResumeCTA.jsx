import { Download, Eye, FileCheck2, ArrowRight } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

export default function ResumeCTA({ onOpenResume }) {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0f0f11] border border-white/5 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-mono font-medium">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>OFFICIAL RESUME</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Want to know more about my experience?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Take a closer look at my skills, projects, academic background, and full-stack development journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={socialLinks.resumeUrl}
              download="Aamin_Mansuri_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100"
            >
              <Download className="w-4 h-4 text-indigo-600" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02]"
            >
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>View Resume</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
