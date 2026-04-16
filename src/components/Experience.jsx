import React, { useEffect, useRef } from 'react';
import { experience } from '../data/constants';

const Experience = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
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
  }, []);

  return (
    <section id="experience" className="py-24 bg-white border-t border-slate-100" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16">
          <h3 id="experience-heading" className="text-4xl font-black text-slate-900"><span className="text-blue-600">Professional</span> Timeline</h3>
        </header>

        <div 
          ref={scrollRef} 
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-6 px-6"
        >
          {experience.map((exp, idx) => (
            <article 
              key={idx} 
              className="flex-none w-[85vw] md:w-[400px] snap-start"
            >
              <div className="group relative h-full bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 flex flex-col h-[580px]">
                
                {/* Card Header */}
                <div className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100 text-blue-600" aria-hidden="true">
                      {exp.icon}
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border ${exp.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                        {exp.status}
                      </span>
                      <time className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{exp.date}</time>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">{exp.title}</h3>
                    <p className="text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
                      {exp.org}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium italic">
                      "{exp.desc}"
                    </p>
                  </div>
                </div>

                {/* Card Tags / Footer */}
                <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Core Focus</p>
                  <div className="flex flex-wrap gap-2" aria-label="Skills and tags">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white border border-slate-100 text-[10px] font-black uppercase tracking-tighter text-slate-600 rounded-lg shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Experience;
