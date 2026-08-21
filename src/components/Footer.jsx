import { ArrowUp, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/5">
          
          {/* Brand */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-wider">
              AAMIN <span className="text-indigo-600 dark:text-indigo-400">MANSURI</span>
            </h3>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              MERN Stack Developer & Full Stack Web Developer
            </p>
          </div>

          {/* Social Icons Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors shadow-sm"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${socialLinks.email}`}
              className="p-2.5 rounded-lg bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-sm"
              aria-label="Email Aamin Mansuri"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-black/20 transition-colors shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-xs font-mono text-slate-500 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {currentYear} Aamin Mansuri. All rights reserved.</span>
          <span>Crafted with React.js, Tailwind CSS & Motion</span>
        </div>
      </div>
    </footer>
  );
}
