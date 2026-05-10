import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F4F4F0] border-b border-[#111111] sticky top-0 z-50">
      <div className="flex items-stretch h-20 divide-x divide-[#111111]">
        
        {/* Logo/Name Area */}
        <div className="w-1/3 min-w-[250px] flex items-center px-8">
          <div className="text-2xl font-black tracking-tighter uppercase leading-none">
            Ali<br/>Rahmatullah<span className="text-gray-400">.</span>
          </div>
        </div>

        {/* Links Area */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-12 text-sm font-bold uppercase tracking-widest text-[#111111]">
          <a href="#about" className="hover:bg-[#111111] hover:text-[#F4F4F0] px-4 py-2 transition-colors">About</a>
          <a href="#skills" className="hover:bg-[#111111] hover:text-[#F4F4F0] px-4 py-2 transition-colors">Skills</a>
          <a href="#projects" className="hover:bg-[#111111] hover:text-[#F4F4F0] px-4 py-2 transition-colors">Projects</a>
        </div>

        {/* CTA Area */}
        <div className="w-1/4 min-w-[200px] hidden md:flex border-l border-[#111111]">
          <a href="#contact" className="w-full h-full bg-[#FF3333] text-[#F4F4F0] flex items-center justify-center text-sm font-bold uppercase tracking-widest hover:bg-[#111111] hover:text-[#F4F4F0] transition-colors">
            Contact Me -&gt;
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
