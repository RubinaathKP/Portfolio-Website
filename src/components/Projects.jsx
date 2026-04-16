import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, GitBranch, Layout, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/constants';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const activeP = projects.find((p) => p.id === activeProject);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pause automatic sliding if a project is actively expanded
      if (activeProject !== null) return;

      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const firstChild = scrollRef.current.children[0];
          const cardWidth = firstChild ? firstChild.offsetWidth : 400;
          scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeProject]);

  return (
    <section id="projects" className="py-24 bg-white" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Case Studies</h2>
          <h3 id="projects-heading" className="text-4xl font-black text-slate-900">Featured Projects</h3>
        </header>

        {/* Projects Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 mb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-6 px-6"
        >
          {projects.map(project => (
            <article
              key={project.id}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              className="flex-none w-[85vw] md:w-[400px] snap-start cursor-pointer"
            >
              <div className={`group relative h-full bg-white border rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col h-[520px] ${activeProject === project.id ? 'border-blue-600 ring-4 ring-blue-50 shadow-xl' : 'border-slate-200 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200'}`}>

                {/* Card Header */}
                <div className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100 text-blue-600">
                      <Code2 className="w-8 h-8" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${project.tagColor.includes('red') ? 'bg-red-50 text-red-700 border-red-100' : project.tagColor.includes('blue') ? 'bg-blue-50 text-blue-700 border-blue-100' : project.tagColor.includes('emerald') ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-yellow-50 text-yellow-700 border-yellow-100'}`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
                    {project.context}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic">
                    "{project.summary}"
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
                  <button className="w-full py-3 px-6 bg-white border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                    {activeProject === project.id ? 'Close Details' : 'View details'}
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeProject === project.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Expandable Details Panel */}
        {activeProject && activeP && (
          <div className="animate-in" id="project-details">
            <article className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -mr-48 -mt-48" />

              <div className="relative z-10">
                <header className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-400/20">Case Study</span>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{activeP.context}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black mb-10 leading-tight">{activeP.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      {activeP.tech.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 text-[10px] font-black rounded-lg uppercase tracking-widest text-white/60 hover:bg-white/10 transition-colors">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                    <a href={activeP.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-400 transition-all duration-300 transform hover:-translate-y-1">
                      <GitBranch size={18} /> Source Code
                    </a>
                    {activeP.report && activeP.report !== "#" && (
                      <a href={activeP.report} className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
                        View Full Report
                      </a>
                    )}
                  </div>
                </header>

                <div className="grid lg:grid-cols-3 gap-12 border-t border-white/10 pt-16 mt-16">
                  <div className="lg:col-span-3 pb-8">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">The Challenge Overview</h4>
                    <p className="text-white/70 leading-relaxed text-lg max-w-4xl font-medium">{activeP.overview}</p>
                  </div>

                  <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-red-400 mb-2">The Problem</h4>
                    <p className="text-white/70 leading-relaxed text-sm font-medium">{activeP.problem}</p>
                  </div>

                  <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-blue-400 mb-2">The Solution</h4>
                    <p className="text-white/70 leading-relaxed text-sm font-medium">{activeP.solution}</p>
                  </div>

                  <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                    <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-2">Technical Result</h4>
                    <p className="text-white/70 leading-relaxed text-sm font-medium">{activeP.result}</p>
                    {activeP.datasets.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <h5 className="text-[10px] font-black uppercase text-white/30 mb-3">Datasets</h5>
                        <div className="flex flex-wrap gap-2">
                          {activeP.datasets.map(d => (
                            <span key={d} className="text-[10px] font-bold text-white/50 bg-white/5 px-2 py-1 rounded">{d}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;
