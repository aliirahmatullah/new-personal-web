const About = () => {
  return (
    <section id="about" className="bg-secondary border-b border-primary">
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-primary">
        {/* Left Column: Title Block */}
        <div className="md:col-span-4 p-8 md:p-12 lg:p-20 flex flex-col justify-between bg-primary text-secondary">
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-12">
            / ABOUT ME
          </div>
          <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
            Driven By
            <br />
            Logic.
          </h3>
        </div>

        {/* Right Column: Content Block */}
        <div className="md:col-span-8 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
          <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 max-w-2xl text-primary">
            Designed for Impact.
          </h4>

          <div className="text-lg font-medium text-gray-800 md:columns-2 gap-8 md:gap-12 w-full text-justify">
            <p className="leading-relaxed mb-6">
              I am a{" "}
              <span className="font-bold text-primary bg-primary/10 px-1">
                Software Engineering (PPLG)
              </span>{" "}
              student at SMKS Wikrama Bogor with over 2 years of experience in
              web and software development. I am passionate about full-stack
              development, artificial intelligence, and building modern digital
              experiences.
            </p>

            <p className="leading-relaxed mb-6">
              I enjoy creating scalable applications, from interactive frontend
              interfaces to robust backend systems, with a strong focus on clean
              architecture, performance, and user experience.
            </p>

            <div className="pt-6 border-t border-primary break-inside-avoid">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-2">
                Location
              </span>

              <span className="text-2xl font-black uppercase tracking-tighter">
                Bogor, Indonesia<span className="text-[#FF3333]">.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
