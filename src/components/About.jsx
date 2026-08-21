import { motion } from "motion/react";
import { User, GraduationCap, Code2, Cpu, CheckCircle2, Award } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

export default function About() {
  const focusAreas = [
    "Full-Stack MERN Engineering",
    "React Component Design & Architecture",
    "Node.js & Express RESTful APIs",
    "MongoDB & Mongoose Data Modeling",
    "Modern UI/UX with Tailwind CSS",
    "Authentication (JWT & Google OAuth)",
    "Clean Code & DOM Manipulation",
    "Real-World Web Applications"
  ];

  return (
    <section id="about" className="py-20 bg-[#fafafa] dark:bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Passionate MERN Developer & BCA Student.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Biography Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed"
          >
            <p>
              I am a passionate <strong className="text-slate-900 dark:text-white font-semibold">MERN Stack Developer</strong> currently pursuing my <strong className="text-slate-900 dark:text-white font-semibold">Bachelor of Computer Applications (BCA)</strong>. My core passion lies in engineering end-to-end web applications that combine robust backend logic with clean, intuitive user interfaces.
            </p>

            <p>
              Throughout my academic and practical development journey, I have focused heavily on mastering modern JavaScript (ES6+), React.js, Node.js, Express, and MongoDB. I enjoy breaking down complex problems into scalable code, writing clean RESTful APIs, and implementing secure user authentication models like JWT and OAuth.
            </p>

            <p>
              I believe in practical, hands-on learning. Rather than relying solely on theoretical concepts, I have actively built real-world applications—ranging from full-stack authentication apps and e-commerce platforms to voice-driven browser utilities and live REST API web portals.
            </p>

            {/* Core Focus Bullet Points Grid */}
            <div className="pt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Core Specializations & Interests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Developer Profile Card & Education Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Minimal Developer Profile Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-xl relative overflow-hidden group hover:border-indigo-500/20 dark:hover:border-indigo-500/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
              
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-white text-xl font-black font-mono shadow-md">
                  AM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {socialLinks.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    {socialLinks.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {socialLinks.education}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-black/5 dark:border-white/5 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Primary Discipline</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Full Stack Web Dev</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Frontend Stack</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">React, JavaScript, Tailwind</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Backend Stack</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Node.js, Express, MongoDB</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 dark:text-slate-400">Status</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    Ready for Software Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Education Highlight Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-md flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Building strong academic foundations in computer science theory, algorithms, database architectures, and software engineering methodologies.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
