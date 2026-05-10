import React from 'react';

const Skills = () => {
  const skills = [
    { name: "React JS", cat: "Frontend", level: "Intermediate" },
    { name: "JavaScript", cat: "Core", level: "Intermediate" },
    { name: "Tailwind CSS", cat: "Styling", level: "Advanced" },
    { name: "Node.js", cat: "Backend", level: "Intermediate" },
    { name: "MySQL", cat: "Database", level: "Intermediate" },
    { name: "Python", cat: "Core", level: "Intermediate" },
    { name: "Django REST API", cat: "Rest API", level: "Advanced" },
    { name: "Flutter", cat: "Mobile", level: "Advanced" },
  ];

  return (
    <section id="skills" className="bg-[#F4F4F0] border-b border-[#111111]">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#111111]">

        {/* Left: Skills Table */}
        <div className="flex flex-col">
          <div className="p-8 md:p-12 border-b border-[#111111] bg-[#111111] text-[#F4F4F0]">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">/ CAPABILITIES</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Technical Arsenal</h3>
          </div>

          <div className="flex flex-col divide-y divide-[#111111]">
            <div className="grid grid-cols-3 divide-x divide-[#111111] bg-gray-200 text-xs font-bold uppercase tracking-widest text-black">
              <div className="p-4">Technology</div>
              <div className="p-4">Category</div>
              <div className="p-4">Proficiency</div>
            </div>

            {skills.map((skill, i) => (
              <div key={i} className="grid grid-cols-3 divide-x divide-[#111111] hover:bg-[#111111] hover:text-[#F4F4F0] transition-colors cursor-crosshair group">
                <div className="p-4 font-black uppercase tracking-tighter text-lg group-hover:translate-x-1 transition-transform">{skill.name}</div>
                <div className="p-4 font-medium text-sm flex items-center">{skill.cat}</div>
                <div className="p-4 font-bold uppercase tracking-widest text-xs flex items-center">
                  {skill.level} <span className="ml-auto text-[#FF3333] opacity-0 group-hover:opacity-100">*</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: GitHub Contribution & Soft Skills */}
        <div className="flex flex-col divide-y divide-[#111111]">

          {/* Blueprint Radar Chart */}
          <div className="p-8 md:p-12 flex flex-col justify-center h-full relative overflow-hidden group">
            <h4 className="text-xl font-black uppercase tracking-tighter mb-8 z-10 relative">
              Cognitive Blueprint
            </h4>

            <div className="relative w-full max-w-[300px] mx-auto aspect-square flex items-center justify-center z-10">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {/* Axes */}
                <line x1="50" y1="0" x2="50" y2="100" stroke="#111111" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#111111" strokeWidth="0.5" strokeDasharray="2 2" />

                {/* Radar Grid */}
                <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#111111" strokeWidth="0.5" />
                <polygon points="50,25 75,50 50,75 25,50" fill="none" stroke="#111111" strokeWidth="0.5" />

                {/* Data Polygon */}
                <polygon points="50,15 85,50 50,70 20,50" fill="rgba(255, 51, 51, 0.1)" stroke="#FF3333" strokeWidth="1.5" className="group-hover:fill-transparent transition-colors duration-500" />

                {/* Data Points */}
                <circle cx="50" cy="15" r="2" fill="#FF3333" />
                <circle cx="85" cy="50" r="2" fill="#FF3333" />
                <circle cx="50" cy="70" r="2" fill="#FF3333" />
                <circle cx="20" cy="50" r="2" fill="#FF3333" />

                {/* Labels */}
                <text x="50" y="5" fontSize="4" fontWeight="bold" textAnchor="middle" fill="#111111">Problem Solving</text>
                <text x="95" y="51" fontSize="4" fontWeight="bold" textAnchor="start" fill="#111111">Collaboration</text>
                <text x="50" y="98" fontSize="4" fontWeight="bold" textAnchor="middle" fill="#111111">Critical Thinking</text>
                <text x="5" y="51" fontSize="4" fontWeight="bold" textAnchor="end" fill="#111111">Communication</text>
              </svg>
            </div>

            <div className="absolute top-8 right-8 text-xs font-bold uppercase tracking-widest text-[#FF3333] border border-[#FF3333] px-2 py-1 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
              ANALYZED
            </div>
          </div>

          <div className="p-8 bg-[#E5E5E5]">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 flex justify-between">
              <span>FIG. 01: CODE COMMITS</span>
              <span className="text-[#FF3333] animate-pulse">LIVE DATA</span>
            </div>
            <div className="border border-[#111111] bg-[#F4F4F0] p-4 overflow-hidden relative group">
              <img
                src="https://ghchart.rshah.org/111111/aliirahmatullah"
                alt="GitHub Chart"
                className="w-full grayscale contrast-150 mix-blend-multiply group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform"
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF3333] pointer-events-none transition-colors"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
