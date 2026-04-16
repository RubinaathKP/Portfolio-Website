import React from 'react';
import { Mail, Link2, GitBranch } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 bg-white text-slate-900 overflow-hidden relative border-t border-slate-100" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>
        <h2 id="contact-heading" className="text-5xl md:text-8xl font-black mb-12 tracking-tight">
          Let's build <span className="text-blue-600">secure</span> intelligence.
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-2xl mx-auto font-medium">
          Open to internships, research collaborations, and open-source projects in{' '}
          <span className="text-slate-900 font-bold">AI Security.</span>
        </p>

        <section className="flex flex-col sm:flex-row justify-center gap-4 mb-24" aria-label="Contact Links">
          <a href="mailto:rubinaath612@gmail.com" className="flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-400" aria-label="Send Email">
            <Mail size={20} aria-hidden="true" /> Email Me
          </a>
          <a href="https://www.linkedin.com/in/rubinaathkp/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all shadow-lg shadow-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-400" aria-label="LinkedIn Profile">
            <Link2 size={20} aria-hidden="true" /> LinkedIn
          </a>
          <a href="https://github.com/RubinaathKP" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-lg shadow-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-900" aria-label="GitHub Profile">
            <GitBranch size={20} aria-hidden="true" /> GitHub
          </a>
        </section>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <div>Rubinaath • 2025</div>
          <address className="not-italic">Chennai, Tamil Nadu </address>
          <div className="text-blue-600">Always building</div>
        </div>
      </div>
    </footer>
  );
}
