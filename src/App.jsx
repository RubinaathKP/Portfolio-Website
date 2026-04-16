import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CertificationsCarousel from './components/CertificationsCarousel';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans scroll-smooth">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <CertificationsCarousel />
      </main>
      <Footer />
    </div>
  );
}
