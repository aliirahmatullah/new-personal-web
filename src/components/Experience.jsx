import { useState } from "react";
import dqlab from "../assets/certificates/DQLAB.png";
import machine from "../assets/certificates/machine.png";
import data from "../assets/certificates/data.png";
import sql from "../assets/certificates/sql.png";
import igdx from "../assets/certificates/igdx.png";
import k3 from "../assets/certificates/k3.png";
import javascript from "../assets/certificates/javascript.png";
import ai from "../assets/certificates/ai.png";
import web from "../assets/certificates/web.png";
import git from "../assets/certificates/git.png";

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Show 3 items per page

  const education = [
    {
      school: "SMKS Wikrama Kota Bogor",
      major: "Software Engineering (PPLG)",
      year: "2024 - Present",
      location: "Bogor, Indonesia",
    },
    {
      school: "SMPN 1 Ciawi",
      major: "General Education",
      year: "2021 - 2024",
      location: "Bogor, Indonesia",
    },
  ];

  const credentials = [
    {
      title: "Machine Learning With Python for Beginner",
      issuer: "DQLAB",
      year: "2026",
      image: dqlab,
    },
    {
      title: "Belajar Machine Learning Untuk Pemula",
      issuer: "Dicoding",
      year: "2026",
      image: machine,
    },
    {
      title: "Belajar Visualisasi Data",
      issuer: "Dicoding",
      year: "2025",
      image: data,
    },
    {
      title: "Belajar Dasar SQL",
      issuer: "Dicoding",
      year: "2025",
      image: sql,
    },
    {
      title: "IGDX Career",
      issuer: "Kominfo",
      year: "2024",
      image: igdx,
    },
    {
      title: "Keselamatan dan Kesehatan Kerja",
      issuer: "ILO",
      year: "2024",
      image: k3,
    },
    {
      title: "Belajar Dasar Javascript",
      issuer: "Dicoding",
      year: "2025",
      image: javascript,
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding",
      year: "2025",
      image: ai,
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      year: "2024",
      image: web,
    },
    {
      title: "Belajar Dasar GIT",
      issuer: "Dicoding",
      year: "2025",
      image: git,
    },
  ];

  return (
    <>
      <section id="experience" className="bg-secondary border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-primary">
          {/* Education Column */}
          <div className="flex flex-col bg-[#E5E5E5]">
            <div className="p-8 md:p-12 border-b border-primary bg-primary text-secondary">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF3333] mb-4">
                / BACKGROUND
              </h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Education
              </h3>
            </div>

            <div className="flex flex-col p-4 md:p-8 gap-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 bg-secondary border border-primary hover:-translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0_0_#111111] transition-transform duration-100 ease-linear cursor-default group"
                >
                  <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-4">
                    <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:text-[#FF3333] transition-colors duration-100">
                      {edu.school}
                    </h4>
                    <span className="border border-primary px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-none whitespace-nowrap bg-primary text-secondary group-hover:bg-[#FF3333] group-hover:border-[#FF3333] transition-colors duration-100">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-xl font-medium text-gray-600 mb-4">
                    {edu.major}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span className="w-2 h-2 bg-[#FF3333]"></span>
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials Column */}
          <div className="flex flex-col bg-[#E5E5E5]">
            <div className="p-8 md:p-12 border-b border-primary bg-secondary text-primary">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF3333] mb-4">
                / CERTIFICATES
              </h2>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Credentials
              </h3>
            </div>

            <div className="flex flex-col p-4 md:p-8 gap-4 h-full">
              <div className="flex-1 flex flex-col gap-4">
                {credentials
                  .slice(
                    (currentPage - 1) * itemsPerPage,
                    currentPage * itemsPerPage,
                  )
                  .map((cred, i) => (
                    <div
                      key={i}
                      className="p-6 md:p-8 bg-primary text-secondary border border-primary flex flex-col xl:flex-row justify-between items-start xl:items-center group hover:-translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0_0_#FF3333] transition-transform duration-100 ease-linear"
                    >
                      <div className="mb-6 xl:mb-0">
                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 group-hover:text-[#FF3333] transition-colors duration-100">
                          {cred.title}
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                          {cred.issuer}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-xs font-bold uppercase tracking-widest border border-secondary group-hover:border-[#FF3333] group-hover:text-[#FF3333] px-4 py-2 rounded-none transition-colors duration-100">
                          {cred.year}
                        </span>
                        <button
                          onClick={() => setSelectedCert(cred)}
                          className="text-xs font-bold uppercase tracking-widest bg-secondary text-primary group-hover:bg-[#FF3333] group-hover:text-primary px-4 py-2 border border-secondary group-hover:border-[#FF3333] transition-colors duration-100 cursor-pointer"
                        >
                          Selengkapnya -&gt;
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Pagination Controls */}
              {credentials.length > itemsPerPage && (
                <div className="flex justify-between items-center mt-4 border-t border-primary pt-6">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 border border-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-secondary transition-colors cursor-pointer"
                  >
                    &lt;- Prev
                  </button>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Page {currentPage} of{" "}
                    {Math.ceil(credentials.length / itemsPerPage)}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(
                          prev + 1,
                          Math.ceil(credentials.length / itemsPerPage),
                        ),
                      )
                    }
                    disabled={
                      currentPage ===
                      Math.ceil(credentials.length / itemsPerPage)
                    }
                    className="text-xs font-bold uppercase tracking-widest px-4 py-2 border border-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-secondary transition-colors cursor-pointer"
                  >
                    Next -&gt;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-100 bg-primary/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-secondary border-2 border-primary p-2 max-w-5xl w-full relative shadow-[16px_16px_0_0_#FF3333] animate-[pulse_0.2s_ease-out_1]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 bg-[#FF3333] text-secondary w-10 h-10 flex items-center justify-center font-bold text-xl border border-primary hover:scale-110 hover:-translate-y-1 transition-transform z-10 cursor-pointer"
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>
            <div className="p-4 md:p-6 border-b borderprimary bg-primary text-secondary flex justify-between items-center">
              <h3 className="font-black uppercase tracking-widest text-sm md:text-base text-[#FF3333]">
                {selectedCert.title}
              </h3>
              <span className="text-xs font-bold text-gray-400 border border-gray-600 px-2 py-1">
                {selectedCert.year}
              </span>
            </div>
            <div className="aspect-video bg-gray-200 border border-primary mt-2 relative group overflow-hidden">
              <img
                src={selectedCert.image}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                alt="Certificate"
              />
              <div className="absolute bottom-4 left-4 bg-[#FF3333] text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Original Image
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
