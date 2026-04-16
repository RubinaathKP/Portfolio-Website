import React from 'react';
import { MapPin, GraduationCap, Target, CheckCircle2, Play } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-100" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left — bio */}
          <div className="lg:col-span-7">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-4">About Me</h2>
            <h3 id="about-heading" className="text-4xl font-black mb-8 leading-tight">Building at the edge of AI and security</h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              <p>
                I'm Rubinaath, a first-year CSE student at Easwari Engineering College. I try to build end-to-end systems
                that solve real problems — from <strong className="text-slate-900 font-semibold">cyber threat detection</strong>{' '}
                to <strong className="text-slate-900 font-semibold">urban emission mapping</strong>.
              </p>
              <p>
                My interests includes <strong className="text-slate-900 font-semibold">agentic workflows and automation</strong>, Frontend development , CyberSecurity and Open-Source Projects.

                I am open to <strong className="text-slate-900 font-semibold">Research Opportunities</strong>, <strong className="text-slate-900 font-semibold">Internships</strong> and <strong className="text-slate-900 font-semibold">Freelancing</strong>

              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-12 mt-12">
              <div className="flex items-start gap-3">
                <MapPin className="text-slate-400 mt-1" size={20} aria-label="Location icon" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Location</h4>
                  <address className="font-bold text-slate-900 not-italic">Chennai, Tamil Nadu</address>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="text-slate-400 mt-1" size={20} aria-label="Education icon" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Education</h4>
                  <p className="font-bold text-slate-900">B.E. CSE, Year 1</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="text-slate-400 mt-1" size={20} aria-label="Target Role icon" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Interests</h4>
                  <p className="font-bold text-slate-900">AI, CyberSecurity, Frontend Development</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-500 mt-1" size={20} aria-label="Availability Status icon" />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Status</h4>
                  <p className="font-bold text-slate-900">Open to Internships, Research & Freelancing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — video + skills */}
          <div className="lg:col-span-5 pt-12 lg:pt-0">

            {/* Skill stack */}
            <article className="mt-12 bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group">
              <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">Current Skill Stack</h4>
              <div className="space-y-6">
                {[
                  { label: "Languages", color: "text-blue-600", items: ["Python", "JavaScript", "Java", "C"] },
                  { label: "AI / ML", color: "text-purple-600", items: ["Scikit-Learn", "SHAP(XAI)", "Random Forest", "XGBoost", "SGDClassifier"] },
                  { label: "Frontend", color: "text-pink-600", items: ["React", "HTML/CSS", "TailwindCSS", "Streamlit", "Material UI"] },
                  { label: "Tools", color: "text-emerald-600", items: ["Git", "FastAPI", "Ollama", "React", "Spring Boot"] },
                ].map(({ label, color, items }) => (
                  <div key={label}>
                    <h5 className={`text-[10px] font-black uppercase ${color} mb-2`}>{label}</h5>
                    <div className="flex flex-wrap gap-2" role="list" aria-label={`${label} specific skills`}>
                      {items.map(s => (
                        <span key={s} role="listitem" className="px-2 py-1 bg-slate-50 border border-slate-100 rounded font-bold text-xs">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}
