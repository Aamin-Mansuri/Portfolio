import { X, Download, Printer, CheckCircle2, FileText, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { socialLinks } from "../data/socialLinks";
import { skillCategories } from "../data/skills";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#fafafa] dark:bg-[#050505] rounded-2xl shadow-2xl border border-black/5 dark:border-white/5 flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0f0f11]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Aamin Mansuri - Professional Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-black/20 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <a
              href={socialLinks.resumeUrl}
              download="Aamin_Mansuri_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-black/20 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200 text-sm font-sans" id="resume-printable-area">
          
          {/* Resume Title Header */}
          <div className="border-b border-black/5 dark:border-white/5 pb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              {socialLinks.name}
            </h1>
            <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
              MERN Stack Developer | Full Stack Web Developer | BCA Student
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400 mt-3 font-mono">
              <span>Email: {socialLinks.email}</span>
              <span>GitHub: github.com/Aamin-Mansuri</span>
              <span>LinkedIn: linkedin.com/in/aamin-mansuri-83396036a</span>
            </div>
          </div>

          {/* Objective / Summary */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Dedicated MERN Stack Developer currently pursuing BCA. Proven experience in designing and delivering responsive frontend interfaces with React.js and building secure, scalable REST APIs with Node.js, Express, and MongoDB. Adept at JWT authentication, OAuth 2.0 integration, state management, and modern CSS architecture.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase mb-3">
              EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-sm">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <span className="text-xs font-mono text-slate-500">Undergraduate Degree Program</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Relevant Coursework: Software Engineering, Data Structures & Algorithms, Database Management Systems (DBMS), Web Technologies, Object-Oriented Programming.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase mb-3">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="p-3.5 rounded-xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map(s => (
                      <span key={s.name} className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#fafafa] dark:bg-black/20 border border-black/5 dark:border-white/5 text-slate-600 dark:text-slate-300">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-wider text-slate-900 dark:text-white uppercase mb-3">
              KEY DEVELOPMENT PROJECTS
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-sm">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    1. MERN Authentication Application
                  </h3>
                  <span className="text-xs font-mono text-indigo-600">MERN Stack</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                  Full-stack authentication system with JWT security, Google OAuth SSO, protected client routes, and a React user dashboard.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  GitHub: https://github.com/Aamin-Mansuri/Mern-Authentication-App.git
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-sm">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    2. E-Commerce Web Application
                  </h3>
                  <span className="text-xs font-mono text-indigo-600">React.js & Context API</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                  Responsive shopping storefront with product search, filtering, login/signup auth, and dynamic cart state management.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  GitHub: https://github.com/Aamin-Mansuri/E-Commerce-Web-Project.git
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 shadow-sm">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    3. Voice Assistant Web Application
                  </h3>
                  <span className="text-xs font-mono text-indigo-600">JavaScript & Web Speech API</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                  Browser-based voice assistant leveraging Web Speech API to process spoken queries and deliver text-to-speech audio responses.
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  GitHub: https://github.com/Aamin-Mansuri/voice-as-js-project-6.git
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#0f0f11] flex justify-between items-center text-xs text-slate-500">
          <span>Aamin Mansuri • MERN Stack Developer Portfolio</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg font-semibold bg-slate-100 dark:bg-black/20 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-black/40 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
