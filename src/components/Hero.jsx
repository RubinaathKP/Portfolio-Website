import React from 'react';
import { ChevronRight, GitBranch, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <header id="hero" className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden" aria-labelledby="hero-title">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 rounded-md">
            <Cpu size={12} aria-hidden="true" />
            CSE • Year 1 • Easwari Engineering College (SRM Group)
          </div>

          <h1 id="hero-title" className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
            <span className="text-slate-900">Rubi</span>
            <span className="text-slate-300">naath.</span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-500 leading-tight mb-10 max-w-3xl font-medium">
            AI-focused software developer building real-world intelligent systems — at the intersection of{' '}
            <span className="text-slate-900 underline decoration-blue-500 decoration-4 underline-offset-8">machine learning</span>{' '}
            and{' '}
            <span className="text-slate-900 underline decoration-red-500 decoration-4 underline-offset-8">cybersecurity.</span>
          </p>

          <div className="flex flex-wrap gap-3 mb-12" aria-label="Core Skills">
            {["AI / ML Engineering", "Cybersecurity Systems", "Frontend Engineering", "Competitive Problem Solving"].map(tag => (
              <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg uppercase tracking-tight">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition shadow-lg shadow-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-300">
              View Projects <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="https://github.com/RubinaathKP" target="_blank" rel="noreferrer" className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition focus:outline-none focus:ring-4 focus:ring-slate-300" aria-label="Visit GitHub Profile">
              GitHub <GitBranch size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
