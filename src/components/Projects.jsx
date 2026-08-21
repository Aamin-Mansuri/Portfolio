import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, Code, Sparkles, Filter } from "lucide-react";
import { projects, projectCategories } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#fafafa] dark:bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03. FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Real-World Development Projects.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              A curated selection of full-stack MERN applications, React dashboards, voice utilities, and REST API integrations built with clean code practices.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 overflow-x-auto self-start md:self-auto shadow-sm">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <ProjectCard project={project} isFeatured={project.featured} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repositories Link */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-md">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            Looking for more code repositories?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-xl mx-auto">
            Explore my GitHub profile for full commit history, mini-projects, utility tools, and active source code repositories.
          </p>
          <a
            href="https://github.com/Aamin-Mansuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
          >
            <span>Visit @Aamin-Mansuri on GitHub</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
