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
        <h2 className="text-4xl font-bold tracking-wide text-white sm:text-5xl">
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
              className="bg-gray-900/80 cursor-pointer backdrop-blur-lg border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(130,69,236,0.25)] overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="flex flex-col gap-4 p-5">
                <h3 className="text-2xl font-semibold text-center text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-center text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#8245ec]/30 text-purple-200 px-3 py-1 rounded-full text-xs"
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
            className="relative bg-gray-900 rounded-3xl shadow-lg max-w-lg w-[90vw] p-8 transform transition-transform scale-100"
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="object-cover w-full h-64 mb-6 rounded-2xl"
            />
            <h3 className="mb-4 text-3xl font-bold text-white">
              {selectedProject.title}
            </h3>
            <p className="mb-4 text-gray-300">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#8245ec]/30 text-purple-200 px-4 py-2 rounded-full text-sm"
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
                className="text-white bg-[#8245ec] hover:bg-[#6a2bdc] px-6 py-3 rounded-lg font-semibold transition"
              >
                GitHub
              </a>
              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#8245ec] hover:bg-[#6a2bdc] px-6 py-3 rounded-lg font-semibold transition"
              >
                Live Demo
              </a>
            </div>
            <button
              onClick={closeModal}
              className="absolute text-white transition cursor-pointer top-4 right-4 hover:text-purple-400"
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
