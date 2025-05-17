import React, { useState } from "react";

import { FiX } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { projects } from "../../constants";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-[7vw] lg:px-[15vw] bg-skills-gradient font-sans"
    >
      {/* Section Title */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 sm:text-5xl drop-shadow-md">
          Projects
        </h2>
        <div className="w-20 h-1 mt-3 bg-[#8245ec] mx-auto rounded-full"></div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
          A selection of projects demonstrating my skills and expertise.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 sm:grid-cols-2">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={700}
            gyroscope={true}
            className="w-full"
          >
            <div
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => {
                const timeout = setTimeout(
                  () => setSelectedProject(project),
                  2000
                );
                setHoverTimeout(timeout);
              }}
              onMouseLeave={() => {
                if (hoverTimeout) {
                  clearTimeout(hoverTimeout);
                  setHoverTimeout(null);
                }
              }}
              className="bg-gradient-to-br from-[#1d1b2f] to-[#151323] cursor-pointer backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(130,69,236,0.3)] overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_#8245ec80]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="flex flex-col gap-4 p-5">
                <h3 className="text-2xl font-bold tracking-wide text-center text-white">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-center text-gray-400 sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#8245ec]/30 text-purple-100 px-3 py-1 rounded-full text-xs shadow-[0_0_10px_#8245ec40]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {selectedProject && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-b from-[#1f1d2e] to-[#15131f] rounded-3xl shadow-[0_0_60px_rgba(130,69,236,0.4)] max-w-lg w-[90vw] max-h-[90vh] overflow-y-auto p-6 sm:p-8 transform transition-transform scale-100 border border-white/10 backdrop-blur-md"
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="object-cover w-full h-40 mb-4 sm:h-64 sm:mb-6 rounded-2xl"
            />
            <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              {selectedProject.title}
            </h3>
            <p className="mb-4 text-sm text-gray-300 sm:text-base">
              {selectedProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#8245ec]/30 text-purple-100 px-3 py-1 rounded-full text-xs shadow-[0_0_10px_#8245ec40] sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-6">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#8245ec] hover:bg-[#6a2bdc] px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-purple-600/50"
              >
                GitHub
              </a>
              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#8245ec] hover:bg-[#6a2bdc] px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-purple-600/50"
              >
                Live Demo
              </a>
            </div>
            <button
              onClick={closeModal}
              className="absolute z-10 text-xl text-white transition cursor-pointer top-3 right-3 sm:top-4 sm:right-4 hover:text-purple-400 sm:text-2xl"
              aria-label="Close modal"
              style={{ fontSize: 24 }}
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
