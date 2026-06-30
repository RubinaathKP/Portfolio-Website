import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link2, GitBranch } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 bg-white text-slate-900 overflow-hidden relative border-t border-slate-100" aria-labelledby="contact-heading">
      {/* Subtle modern background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="flex justify-center mb-12">
          <Logo />
        </div>

        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-5xl md:text-8xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Let's work together.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium">
            Open to internships, research collaborations, and open-source projects in {" "}
            <span className="font-black text-slate-900">AI, Agentic Workflows, CyberSecurity and Frontend Development.</span>
          </p>
        </div>

        <section className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-24" aria-label="Social Links">
          <motion.a 
            href="mailto:rubinaath612@gmail.com"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all hover:shadow-xl hover:shadow-blue-600/10 focus:outline-none focus:ring-4 focus:ring-blue-600/20" 
            aria-label="Email Rubinaath"
          >
            <Mail size={20} aria-hidden="true" /> Email Me
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/rubinaathkp/" 
            target="_blank" 
            rel="noreferrer" 
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400" 
            aria-label="LinkedIn Profile"
          >
            <Link2 size={20} aria-hidden="true" /> LinkedIn
          </motion.a>

          <motion.a 
            href="https://github.com/RubinaathKP" 
            target="_blank" 
            rel="noreferrer" 
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-900" 
            aria-label="GitHub Profile"
          >
            <GitBranch size={20} aria-hidden="true" /> GitHub
          </motion.a>
        </section>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <div>Rubinaath KP</div>
          <address className="not-italic">Chennai, Tamil Nadu </address>
          <div className="text-blue-600">Always building</div>
        </div>
      </div>
    </footer>
  );
}
