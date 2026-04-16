import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main Navigation" className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="focus:outline-none focus:ring-2 focus:ring-blue-600 rounded">
          <Logo />
        </a>
        <div className="hidden md:flex space-x-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">
          <a href="#about" className="hover:text-blue-600 transition focus:outline-none focus:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600 transition focus:outline-none focus:text-blue-600">Projects</a>
          <a href="#experience" className="hover:text-blue-600 transition focus:outline-none focus:text-blue-600">Timeline</a>
          <a href="#contact" className="text-blue-600 hover:opacity-80 transition focus:outline-none focus:opacity-80">Connect</a>
        </div>
      </div>
    </nav>
  );
}
