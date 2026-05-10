import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#111111] font-sans selection:bg-[#FF3333] selection:text-[#F4F4F0] p-0 md:p-8 relative">
      
      {/* Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-[999] opacity-40 mix-blend-multiply"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Master Outer Border (Wordfolio Style) */}
      <div className="max-w-[1600px] mx-auto bg-[#F4F4F0] border-2 border-[#111111] shadow-[12px_12px_0_0_#111111] relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
