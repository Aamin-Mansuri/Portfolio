import { motion } from "motion/react";
import { GraduationCap, Code2, Rocket, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { journeyTimeline } from "../data/journey";

export default function Journey() {
  const iconMap = [GraduationCap, Code2, Rocket];

  return (
    <section id="journey" className="py-20 bg-[#fafafa] dark:bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04. EDUCATION & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            My Academic & Development Journey.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Combining academic computer science foundations with focused hands-on full-stack development experience.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-black/5 dark:border-white/5 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10 max-w-4xl">
          {journeyTimeline.map((item, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-[#fafafa] dark:bg-[#050505] border-[3px] border-indigo-600 dark:border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-3.5 h-3.5" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-md hover:border-indigo-500/20 dark:hover:border-indigo-500/30 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/40">
                      {item.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/5 dark:border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#fafafa] dark:bg-black/20 text-slate-600 dark:text-slate-400 border border-black/5 dark:border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
