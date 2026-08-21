import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Send, Copy, Check, MessageSquare } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>05. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Great.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Have a project, opportunity, or idea in mind? I'd love to hear from you. Feel free to reach out via email or direct message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Social & Email Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 space-y-3 shadow-md">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-black/20 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-black/40 transition-colors shadow-sm"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400">Email Address</span>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="block text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  {socialLinks.email}
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 shadow-md flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-slate-200 dark:bg-black/20 text-slate-800 dark:text-slate-200">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    GitHub Profile
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    @Aamin-Mansuri
                  </p>
                </div>
              </div>
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 shadow-md flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    LinkedIn Network
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    aamin-mansuri
                  </p>
                </div>
              </div>
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Instagram Card */}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 hover:border-indigo-500/20 dark:hover:border-indigo-500/30 shadow-md flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Instagram Profile
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    @aamin.mansuriii
                  </p>
                </div>
              </div>
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>

          </div>

          {/* Contact Form Container (mailto client launcher) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleMailtoSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#fafafa] dark:bg-[#0f0f11] border border-black/5 dark:border-white/5 space-y-5 shadow-md"
            >
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Send Direct Message
                </h3>
                <span className="text-xs font-mono text-slate-400">Opens Email Client</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/20 border border-black/5 dark:border-white/5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/20 border border-black/5 dark:border-white/5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Developer Inquiry / Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/20 border border-black/5 dark:border-white/5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, role, or message..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-black/20 border border-black/5 dark:border-white/5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none shadow-sm"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/5 dark:border-white/5">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 active:scale-95 transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                <span className="text-[11px] font-mono text-slate-400 text-center sm:text-right">
                  Direct Mail: aaminmansuri988@gmail.com
                </span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
