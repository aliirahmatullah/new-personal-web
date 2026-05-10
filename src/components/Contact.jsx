import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-[#111111] text-[#F4F4F0]">

      {/* Massive CTA */}
      <div className="p-8 md:p-12 lg:p-20 border-b border-[#F4F4F0]/20 flex flex-col items-center text-center">
        <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
          Let's Work <br /> Together
        </h2>
        <a
          href="mailto:hello@example.com"
          className="group flex items-center gap-6 bg-[#F4F4F0] text-[#111111] px-10 py-6 hover:bg-[#FF3333] hover:text-[#F4F4F0] transition-colors duration-100 ease-linear cursor-pointer"
        >
          <span className="text-sm font-black tracking-widest">aliirahmatullah@gmail.com</span>
          <div className="bg-[#111111] text-[#F4F4F0] p-2 group-hover:translate-x-2 transition-transform duration-100 flex items-center justify-center border border-transparent group-hover:border-[#111111] group-hover:bg-[#F4F4F0] group-hover:text-[#111111]">
            <span className="block text-lg font-mono font-bold leading-none">-&gt;</span>
          </div>
        </a>
      </div>

      {/* Footer Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#F4F4F0]/20">

        <div className="p-8 flex items-center justify-center md:justify-start">
          <div className="text-sm font-black uppercase tracking-widest">
            Ali Rahmatullah © 2026
          </div>
        </div>

        <a href="https://github.com/aliirahmatullah" className="p-8 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#F4F4F0] hover:bg-[#F4F4F0]/5 transition-colors" target='blank'>
          Github
        </a>

        <a href="https://www.linkedin.com/in/alirahmatullah/" className="p-8 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#F4F4F0] hover:bg-[#F4F4F0]/5 transition-colors" target='blank'>
          Linkedin
        </a>

        <a href="https://www.instagram.com/all.rhmtllh/" className="p-8 flex items-center justify-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#F4F4F0] hover:bg-[#F4F4F0]/5 transition-colors" target='blank'>
          Instagram
        </a>

      </div>
    </footer>
  );
};

export default Contact;
