import React, { useEffect, useRef } from 'react';
import { experience } from '../data/constants';

export default function Experience() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by one card width + gap
          const firstChild = scrollRef.current.children[0];
          const cardWidth = firstChild ? firstChild.offsetWidth : 400;
          scrollRef.current.scrollBy({ left: cardWidth + 32, behavior: 'smooth' }); // 32 is gap-8
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-24 bg-slate-50 border-t border-slate-100" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Milestones</h2>
          <h3 id="experience-heading" className="text-4xl font-black">Professional Timeline</h3>
        </header>

        <div ref={scrollRef} className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {experience.map((exp, idx) => (
            <article key={idx} className="relative w-[85vw] shrink-0 lg:w-[calc(33.333%-1.333rem)] snap-start p-10 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group flex flex-col h-[550px] overflow-hidden">
              <header className="flex items-center justify-between mb-8">
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors" aria-hidden="true">{exp.icon}</div>
                <div className="text-right">
                  <span className={`text-[9px] font-black uppercase tracking-[0.15em] px-2 py-1 rounded mr-2 ${exp.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
                    {exp.status}
                  </span>
                  <time className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{exp.date}</time>
                </div>
              </header>
              <div className="flex-grow">
                <h3 className="font-black text-xl mb-1 group-hover:text-blue-600 transition-colors">{exp.title}</h3>
                <p className="text-sm font-bold text-green-400 mb-6 uppercase tracking-widest">{exp.org}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">"{exp.desc}"</p>
              </div>
              <footer className="mt-auto">
                <div className="flex flex-wrap gap-2" aria-label="Skills and tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-tighter px-2 py-1 bg-slate-100 text-slate-500 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
