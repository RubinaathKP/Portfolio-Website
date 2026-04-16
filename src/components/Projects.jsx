import React, { useState } from 'react';
import { ChevronRight, GitBranch } from 'lucide-react';
import { projects } from '../data/constants';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const activeP = projects.find((p) => p.id === activeProject);

  return (
    <section id="projects" className="py-24 bg-white" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Case Studies</h2>
          <h3 id="projects-heading" className="text-4xl font-black">Featured Projects</h3>
        </header>

        <div className="flex overflow-x-auto gap-8 pb-8 mb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map(project => (
            <article
              key={project.id}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              className={`group min-w-[85vw] md:min-w-[400px] snap-center shrink-0 p-8 border-2 flex flex-col justify-between ${activeProject === project.id ? 'border-blue-600 ring-4 ring-blue-50' : 'border-slate-100 hover:border-slate-300'} rounded-3xl transition-all duration-300 cursor-pointer bg-white`}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setActiveProject(activeProject === project.id ? null : project.id); }}
              aria-expanded={activeProject === project.id}
              aria-controls={activeProject === project.id ? "project-details" : undefined}
            >
              <div>
                <div className={`inline-block px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-6 ${project.tagColor}`}>
                  {project.category}
                </div>
                <h3 className="font-bold text-2xl mb-4 leading-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">"{project.summary}"</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest mt-auto pt-4">
                {activeProject === project.id ? 'Close Details' : 'View more'}
                <ChevronRight size={14} className={`transition-transform duration-300 ${activeProject === project.id ? 'rotate-90' : ''}`} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {activeProject && activeP && (
          <div className="animate-in" id="project-details" role="region" aria-labelledby="project-details-title">
            <article className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                {/* Header row */}
                <header className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">Case Study</span>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{activeP.context}</span>
                    </div>
                    <h3 id="project-details-title" className="text-4xl md:text-5xl font-black mb-8 leading-tight">{activeP.title}</h3>
                    <div className="flex flex-wrap gap-3" aria-label={`Technologies used for ${activeP.title}`}>
                      {activeP.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/10 text-[10px] font-bold rounded-lg uppercase tracking-widest text-white/70">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <a href={activeP.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-400 transition focus:outline-none focus:ring-4 focus:ring-blue-500" aria-label={`View source code for ${activeP.title} on GitHub`}>
                      <GitBranch size={18} aria-hidden="true" /> Source
                    </a>
                    <a href={activeP.report} className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border border-white/10 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white/20 transition focus:outline-none focus:ring-4 focus:ring-white">
                      Full Report
                    </a>
                  </div>
                </header>

                {/* Overview */}
                <div className="border-t border-white/10 pt-10 pb-10">
                  <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3">Overview</h4>
                  <p className="text-white/70 leading-relaxed text-sm max-w-3xl">{activeP.overview}</p>
                </div>

                {/* Problem / Solution / Impact */}
                <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                  <div className="space-y-4">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-red-400">The Problem</h4>
                    <p className="text-white/70 leading-relaxed text-sm">{activeP.problem}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-blue-400">The Solution</h4>
                    <p className="text-white/70 leading-relaxed text-sm">{activeP.solution}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-emerald-400">The Impact</h4>
                    <p className="text-white/70 leading-relaxed text-sm">{activeP.result}</p>
                    <div className="pt-4">
                      <h5 className="text-[10px] font-black uppercase text-white/30 mb-2">Datasets Used</h5>
                      <div className="flex flex-wrap gap-2" aria-label="Datasets">
                        {activeP.datasets.map(d => (
                          <span key={d} className="text-[10px] font-bold text-white/50">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
