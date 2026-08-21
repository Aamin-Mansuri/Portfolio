import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Code2, FileCode, Palette, Layout, Grid, Layers,
  Server, Cpu, Globe, ShieldCheck, KeyRound,
  Database, Workflow, GitBranch, Github, Terminal, Zap, Send, Wrench
} from "lucide-react";
import { skillCategories } from "../data/skills";

// Dynamic Lucide Icon Mapper
const iconMap = {
  Code2, FileCode, Palette, Layout, Grid, Layers,
  Server, Cpu, Globe, ShieldCheck, KeyRound,
  Database, Workflow, GitBranch, Github, Terminal, Zap, Send
};

function SkillCategoryCard({ categoryGroup, index }) {
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
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-md hover:border-indigo-500/20 dark:hover:border-indigo-500/30 transition-all group overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-2xl z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,.06), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10">
        <div className="mb-5 pb-4 border-b border-black/5 dark:border-white/5">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-between">
            <span>{categoryGroup.category}</span>
            <span className="text-xs font-mono font-normal text-slate-400 dark:text-slate-500">
              {categoryGroup.skills.length} Skills
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {categoryGroup.description}
          </p>
        </div>

        {/* Skills Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categoryGroup.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={skill.name}
                className="p-3 rounded-xl bg-[#fafafa] dark:bg-black/20 border border-black/5 dark:border-white/5 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-xs transition-all flex flex-col justify-between group/skill bg-white/50 dark:bg-[#0f0f11]/50 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className={`p-2 rounded-lg border ${skill.bg} group-hover/skill:scale-105 transition-transform`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500">
                    {skill.level}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#fafafa] dark:bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Tools & Technologies I Work With.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Structured competency across modern frontend design, backend REST architectures, database modeling, and version control tools.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((categoryGroup, index) => (
            <SkillCategoryCard 
              key={categoryGroup.category} 
              categoryGroup={categoryGroup} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
