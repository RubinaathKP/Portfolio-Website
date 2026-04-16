import React, { useState } from 'react';
import { Mail, Link2, GitBranch, Send, CheckCircle2, Loader2, User, Building, AtSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Netlify form submission requires URL search params for the body
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', organization: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="py-32 bg-white text-slate-900 overflow-hidden relative border-t border-slate-100" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="flex justify-center mb-12">
          <Logo />
        </div>

        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-5xl md:text-8xl font-black mb-8 tracking-tight">
            <span className="text-blue-600">Let's work together.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium">
            Open to internships, research collaborations, and open-source projects in {" "}
            <span className="font-black text-slate-900">AI, Agentic Workflows, CyberSecurity and Frontend Development.</span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-24">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-50 border-2 border-emerald-100 p-12 rounded-[2.5rem] text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={40} />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-emerald-900 mb-4">Message Sent!</h3>
                <p className="text-emerald-700 font-medium mb-8">Thanks for reaching out. I'll get back to you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-emerald-900 text-white px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-emerald-800 transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white border-2 border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                <div className="space-y-6">
                  <div className="relative">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl py-4 pl-12 pr-6 font-bold text-slate-900 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">Organization <span className="text-slate-300 font-medium">(Optional)</span></label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Organization"
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl py-4 pl-12 pr-6 font-bold text-slate-900 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">Email Address</label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 focus:bg-white rounded-2xl py-4 pl-12 pr-6 font-bold text-slate-900 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-4 disabled:bg-slate-400 disabled:cursor-not-allowed group"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-center text-red-500 text-xs font-bold pt-4">Something went wrong. Please try again.</p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <section className="flex flex-col sm:flex-row justify-center gap-4 mb-24" aria-label="Social Links">
          <a href="https://www.linkedin.com/in/rubinaathkp/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400" aria-label="LinkedIn Profile">
            <Link2 size={20} aria-hidden="true" /> LinkedIn
          </a>
          <a href="https://github.com/RubinaathKP" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-900" aria-label="GitHub Profile">
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
