import { useState } from "react";
import ghibli from "../assets/ghibli.png";
import fakestore from "../assets/fakestore.png";
import trashure from "../assets/trashure.png";
import tixid from "../assets/tixid.png";
import Cek from "../assets/cek.png";
import erigo from "../assets/erigo.png";
import aranya from "../assets/aranya.png";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const projects = [
    {
      title: "Studio Ghibli App",
      category: "Front End",
      desc: "An interactive frontend web application serving as a comprehensive catalog for Studio Ghibli movies and characters.Built with React, Vite, and Tailwind CSS, featuring seamless data fetching via REST API, global state management, and smooth UI animations using Framer Motion.",
      layout: "left",
      demoLink: "https://ghiblistudio-app.netlify.app/",
      repoLink: "https://github.com/aliirahmatullah/ghibli-studio.git",
      image: ghibli,
    },
    {
      title: "Platzi Fake Store App",
      category: "Front End",
      desc: "A responsive e-commerce frontend consuming the Platzi Fake Store API. Built with React, Vite, and Tailwind CSS, featuring product filtering, sorting, pagination, and a shopping cart with Flowbite UI components.",
      layout: "right",
      demoLink: "https://platzi-fake-store.netlify.app",
      repoLink: "https://github.com/aliirahmatullah/Platzi-Fake-Store.git",
      image: fakestore,
    },
    {
      title: "Trashure",
      category: "Fullstack",
      desc: "Trashure is a fullstack waste management platform designed to streamline waste collection and recycling processes. It features a gamified point system where users can earn and redeem points for deposited waste. Built with Laravel and Tailwind CSS, the application includes comprehensive reporting capabilities and precise Indonesian regional data integration.",
      layout: "left",
      demoLink: "#",
      repoLink: "https://github.com/aliirahmatullah/trashure-sts.git",
      image: trashure,
    },
    {
      title: "TixID - Clone",
      category: "FullStack",
      desc: "Cinema Ticketing System A fullstack Laravel-based movie ticketing platform featuring dynamic seat selection, multi-role dashboards (Admin, Staff, User), QR code payment simulation, PDF ticket rendering, and Excel data reporting. Designed with a modern UI using Tailwind CSS and Blade templates.",
      layout: "right",
      demoLink: "#",
      repoLink: "https://github.com/aliirahmatullah/tixid-final-project.git",
      image: tixid,
    },
    {
      title: "Cek Keterangan Nilai",
      category: "Frontend",
      desc: "A lightweight fullstack application utilizing PHP for backend logic and Bootstrap 5 for a responsive, interactive user interface to process student grades.",
      layout: "left",
      demoLink: "#",
      repoLink: "#",
      image: Cek,
    },
    {
      title: "Erigo Fashion Web",
      category: "Front End",
      desc: "A responsive multi-page fashion catalog showcasing apparel collections. Built with Laravel, Blade, and Tailwind CSS.",
      layout: "right",
      demoLink: "#",
      repoLink: "https://github.com/aliirahmatullah/erigo-fashion-psat.git",
      image: erigo,
    },
    {
      title: "Aranya Coffee",
      category: "Front End",
      desc: "A responsive coffee shop website built using React, Vite, and Tailwind CSS with modern UI/UX design and interactive user experience.",
      layout: "left",
      demoLink: "aranya-coffee.netlify.app",
      repoLink: "https://github.com/aliirahmatullah/aranya-coffee.git",
      image: aranya,
    },
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <section
      id="projects"
      className="bg-secondary flex flex-col divide-y divide-primary"
    >
      {/* Header */}
      <div className="p-8 md:p-12 bg-primary text-secondary flex justify-between items-end border-b border-primary">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">
            / SELECTED WORKS
          </h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Featured
            <br />
            Projects<span className="text-accent">.</span>
          </h3>
        </div>
        <div className="hidden md:block text-sm font-bold uppercase tracking-widest text-gray-400 text-right">
          {projects.length < 10 ? `0${projects.length}` : projects.length} Items{" "}
          <br /> 2023 - 2024
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col bg-tertiary p-4 md:p-8 gap-8">
        {currentProjects.map((project, index) => {
          const globalIndex = (currentPage - 1) * itemsPerPage + index;
          return (
            <div
              key={globalIndex}
              className="bg-secondary border border-primary grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-primary group hover:-translate-x-1 hover:translate-y-1 hover:shadow-brutal-primary transition-transform duration-100 ease-linear cursor-pointer"
            >
              {/* Info Block */}
              <div
                className={`p-8 md:p-12 flex flex-col justify-between ${project.layout === "right" ? "lg:order-last" : ""}`}
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-primary border border-primary px-3 py-1 group-hover:bg-accent group-hover:border-accent transition-colors duration-100">
                    {project.category}
                  </span>
                  <span className="text-xl font-black">
                    {globalIndex + 1 < 10
                      ? `0${globalIndex + 1}`
                      : globalIndex + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 group-hover:text-accent transition-colors duration-100">
                    {project.title}
                  </h4>
                  <p className="text-lg font-medium text-gray-600 max-w-md">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-6">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors duration-100"
                    >
                      Live Demo -&gt;
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors duration-100"
                    >
                      Source Code -&gt;
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Block (Placeholder) */}
              <div
                className={`w-full h-64 lg:h-auto border-primary overflow-hidden ${project.layout === "right" ? "border-b lg:border-b-0" : "border-t lg:border-t-0"}`}
              >
                <a
                  href={
                    project.demoLink && project.demoLink !== "#"
                      ? project.demoLink
                      : project.repoLink && project.repoLink !== "#"
                        ? project.repoLink
                        : "#"
                  }
                  target={
                    project.demoLink !== "#" || project.repoLink !== "#"
                      ? "_blank"
                      : "_self"
                  }
                  rel="noreferrer"
                  className="block w-full h-full"
                >
                  <img
                    src={
                      project.image ||
                      `https://images.unsplash.com/photo-${1550000000000 + globalIndex}?auto=format&fit=crop&q=80&w=1000`
                    }
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:contrast-150 transition-all duration-300 ease-out"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200";
                    }}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center p-8 md:p-12 bg-secondary border-t border-primary">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-xs md:text-sm font-bold uppercase tracking-widest px-6 py-3 border border-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-secondary transition-colors cursor-pointer bg-secondary text-primary"
          >
            &lt;- Prev Page
          </button>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="text-xs md:text-sm font-bold uppercase tracking-widest px-6 py-3 border border-primary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary hover:text-secondary transition-colors cursor-pointer bg-secondary text-primary"
          >
            Next Page -&gt;
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
