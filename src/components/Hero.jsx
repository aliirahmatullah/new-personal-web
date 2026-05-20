import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col bg-secondary border-b border-primary">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-primary">
        {/* Left: Massive Typography & Portrait */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-20 bg-secondary gap-8 md:gap-12">
          {/* Portrait Photo */}
          <div className="w-32 h-40 md:w-48 md:h-64 border-2 border-primary bg-primary p-1.5 shadow-brutal-accent transform -rotate-3 hover:rotate-0 transition-transform duration-300 self-start">
            <div className="w-full h-full relative overflow-hidden bg-secondary">
              <img
                src={profile}
                alt="Ali Rahmatullah Portrait"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div>
            <h1 className="text-[11vw] md:text-[5.5vw] lg:text-[5vw] xl:text-[4.5vw] font-black uppercase tracking-tighter leading-[0.85] text-primary">
              Software
              <br />
              Development<span className="text-accent">.</span>
            </h1>
          </div>
        </div>

        {/* Right: Structured Sub-Grid */}
        <div className="flex flex-col divide-y divide-primary">
          {/* Top Half: Portrait & Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-muted flex-1 bg-primary">
            <div className="p-8 flex flex-col justify-center text-secondary">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                // Status
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-accent rounded-none animate-[pulse_1s_steps(2,start)_infinite]"></div>
                  <span className="text-sm font-bold uppercase tracking-widest">
                    Available
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-400">
                  Creating modern digital experiences. Available for freelance
                  and internships.
                </p>
              </div>
            </div>
            <div className="w-full text-secondary p-6 md:p-8 flex flex-col justify-center font-mono text-xs sm:text-sm overflow-x-auto">
              <div className="text-gray-500 mb-4">// profile.json</div>

              <div className="text-secondary pl-2 md:pl-4 border-l-2 border-muted">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-yellow-300">developer</span>{" "}
                <span className="text-blue-400">=</span> {"{"}
                <div className="pl-4 py-2 whitespace-nowrap">
                  <div>
                    <span className="text-green-400">"name"</span>:{" "}
                    <span className="text-orange-300">
                      "Nur Ali Rahmatullah"
                    </span>
                    ,
                  </div>

                  <div>
                    <span className="text-green-400">"role"</span>:{" "}
                    <span className="text-orange-300">
                      "Software Developer"
                    </span>
                    ,
                  </div>

                  <div>
                    <span className="text-green-400">"location"</span>:{" "}
                    <span className="text-orange-300">"Bogor, Indonesia"</span>,
                  </div>

                  <div>
                    <span className="text-green-400">"status"</span>:{" "}
                    <span className="text-orange-300">
                      "Open to Internship, Freelance & Work"
                    </span>
                    ,
                  </div>

                  <div>
                    <span className="text-green-400">"stack"</span>: [
                  </div>

                  <div className="pl-4 text-orange-300">
                    "React", "Node.js", "MySQL", "Laravel", "Python", "Flutter"
                  </div>

                  <div>],</div>

                  <div>
                    <span className="text-green-400">"focus"</span>: [
                  </div>

                  <div className="pl-4 text-orange-300">
                    "Fullstack Development", "Mobile Apps", "Machine Learning"
                  </div>

                  <div>],</div>

                  <div>
                    <span className="text-green-400">"currently_learning"</span>
                    : [
                  </div>

                  <div className="pl-4 text-orange-300">
                    "Django REST API", "Docker", "AI Engineering"
                  </div>

                  <div>],</div>

                  <div>
                    <span className="text-green-400">"available_for"</span>: [
                  </div>

                  <div className="pl-4 text-orange-300">
                    "Internship", "Freelance", "Collaboration"
                  </div>

                  <div>],</div>

                  <div>
                    <span className="text-green-400">"passion"</span>:{" "}
                    <span className="text-orange-300">
                      "Minimalism & Logic"
                    </span>
                    ,
                  </div>
                </div>
                {"}"};
              </div>

              <div className="mt-4 text-gray-500 animate-pulse">_</div>
            </div>
          </div>

          {/* Bottom Half: Bio */}
          <div className="p-8 md:p-12 flex flex-col justify-center flex-1">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
              Ali Rahmatullah
            </h2>
            <p className="text-2xl md:text-3xl font-medium leading-tight text-primary">
              Combining Software Engineering and Artificial Intelligence to
              create impactful digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Separator */}
      <div className="py-4 border-t border-primary bg-secondary overflow-hidden">
        <div className="marquee-container">
          <div className="animate-marquee marquee-content flex items-center h-full gap-24 px-12">
            {Array(5)
              .fill([
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
              ])
              .flat()
              .map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="h-10 w-10 object-contain"
                  alt="Tech Logo"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
