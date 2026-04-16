import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ChevronRight,
  ExternalLink,
  Info,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { certifications } from '../data/constants';

const CertificationsCarousel = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const scrollRef = useRef(null);

  // Auto-scroll logic similar to Projects and Experience sections
  useEffect(() => {
    const interval = setInterval(() => {
      // Pause automatic sliding if a track is actively expanded
      if (expandedIndex !== null) return;

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
  }, [expandedIndex]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-emerald-700 bg-emerald-50 border-emerald-100';
      case 'In Progress':
        return 'text-blue-700 bg-blue-50 border-blue-100';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  const getProgressColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500';
      case 'In Progress':
        return 'bg-blue-600';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <section id="certifications" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-16">
          <h3 className="text-4xl font-black text-slate-900">Learnings and <span className="text-blue-600">Certifications</span></h3>
        </header>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide no-scrollbar -mx-6 px-6"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex-none w-[85vw] md:w-[400px] snap-start"
            >
              <div className="group relative h-full bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 flex flex-col">

                {/* Card Header */}
                <div className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100 text-blue-600" aria-hidden="true">
                      {cert.icon ? (
                        <img
                          src={cert.icon}
                          alt={`${cert.organization} logo`}
                          className="w-full h-full object-contain"
                        />
                      ) : cert.isLeetCode ? (
                        <div className="text-orange-500 font-black text-xl italic select-none">LC</div>
                      ) : (
                        <Award className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border ${getStatusStyle(cert.status)}`}>
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 text-xs font-black uppercase tracking-widest mb-8">
                    {cert.organization}
                  </p>

                  {/* Progress Section / LeetCode Stats */}
                  {cert.isLeetCode ? (
                    <div className="space-y-4 mb-8">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Acceptance Rate</p>
                          <p className="text-sm font-black text-slate-900">{cert.acceptanceRate}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Solved</p>
                          <p className="text-sm font-black text-slate-900">{cert.totalSolved}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {cert.stats.map((stat, si) => (
                          <div key={si} className="space-y-1">
                            <div className="flex justify-between text-[10px] font-bold">
                              <span className="text-slate-500">{stat.label}: {stat.solved}</span>
                              <span style={{ color: stat.color }}>Beats {stat.beats}</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{ width: stat.beats, backgroundColor: stat.color }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-slate-400">Progress</span>
                        <span className="text-slate-900">{cert.overallProgress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${cert.overallProgress}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full rounded-full ${getProgressColor(cert.status)}`}
                        />
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 pt-1">
                        <span>{cert.completedCourses} / {cert.totalCourses} Courses</span>
                      </div>
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cert.skills.slice(0, 3).map((skill, si) => (
                      <span key={si} className="px-2 py-1 bg-slate-100 text-[9px] font-black uppercase tracking-tighter text-slate-500 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="flex-grow py-3 px-6 bg-white border border-slate-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                    >
                      {expandedIndex === index ? 'Close Details' : 'View Details'}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                    {cert.verificationLink && (
                      <a
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-900 shadow-sm"
                        title="Verify Certification"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar mt-2 border-t border-slate-200/50">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Track Details</p>
                          {cert.modules.map((module, mi) => (
                            <div key={mi} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                              {cert.status === 'Completed' || mi < cert.completedCourses ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                              ) : (
                                <div className="w-4 h-4 rounded-full border-2 border-slate-200 mt-0.5 shrink-0" />
                              )}
                              <span className="text-[11px] font-bold text-slate-700 leading-tight">{module}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default CertificationsCarousel;
