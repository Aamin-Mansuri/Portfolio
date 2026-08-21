import { motion } from "motion/react";
import { ArrowRight, Download, Github, Code2, Database, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background Grid Pattern & Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Developer Information & Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                  Aamin Mansuri.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                MERN Stack Developer & Full Stack Web Developer
              </p>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Building scalable, responsive and user-focused web applications with modern JavaScript technologies.
              Specialized in React, Node.js, Express, and MongoDB architectures.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg text-white bg-slate-900 dark:text-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-[0.98] transition-all shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.resumeUrl}
                download="Aamin_Mansuri_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-white/10 transition-all shadow-2xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>BCA Student</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>MERN Specialist</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>REST & JWT Security</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Code Editor Container */}
            <div className="relative rounded-2xl bg-slate-900 text-slate-100 p-1 border border-slate-800 shadow-2xl overflow-hidden group">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 rounded-t-xl border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>developer.config.js</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed space-y-2 overflow-x-auto">
                <p className="text-slate-500">// MERN Developer Profile</p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">name</span>:{" "}
                  <span className="text-amber-300">"Aamin Mansuri"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">role</span>:{" "}
                  <span className="text-amber-300">"MERN Stack Developer"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">education</span>:{" "}
                  <span className="text-amber-300">"BCA Undergraduate"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">stack</span>: [
                  <span className="text-cyan-300">"MongoDB"</span>,{" "}
                  <span className="text-cyan-300">"Express"</span>,{" "}
                  <span className="text-cyan-300">"React"</span>,{" "}
                  <span className="text-cyan-300">"Node"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">status</span>:{" "}
                  <span className="text-emerald-300">"Ready to Build & Deploy"</span>
                </p>
                <p>&#125;;</p>
                <p className="pt-2 text-slate-400">
                  <span className="text-purple-400">async function</span>{" "}
                  <span className="text-blue-400">buildApp</span>() &#123;
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-purple-400">return</span> await developer.<span className="text-yellow-300">deployScalableWebApps</span>();
                </p>
                <p>&#125;</p>
              </div>

              {/* Floating Feature Badges */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 rounded-b-xl flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300 font-mono">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>React 19</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300 font-mono">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Node.js REST</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 text-xs text-slate-300 font-mono">
                  <Database className="w-3.5 h-3.5 text-green-400" />
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Server(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}
