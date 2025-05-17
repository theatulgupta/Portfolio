import React from "react";
import Tilt from "react-parallax-tilt";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#0f0f1b] to-[#141420] text-white"
    >
      {/* Section Title */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl">
          Experience
        </h2>
        <div className="w-20 h-1 mt-3 bg-[#8245ec] mx-auto rounded-full"></div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
          A journey of growth from learning the basics to mastering fullstack
          development.
        </p>
      </div>

      {/* Timeline Container */}
      <div
        className="relative w-full max-w-4xl mx-auto"
        style={{ minHeight: experiences.length * 160 + 100 }} // Extend height based on experiences
      >
        {/* Vertical line - centered horizontally */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 border-l border-[#8245ec]/40"
          style={{ height: "100%" }} // full height to cover all cards/logos
        ></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const logoTopSmall = index * 160 + 80; // middle between cards vertically

          return (
            <div
              key={exp.id}
              className={`relative mb-20 flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
              style={{ minHeight: 160 }}
            >
              {/* Logo positioned on vertical line */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0f0f1b] rounded-full border-2 border-[#8245ec] shadow-[0_0_15px_rgba(130,69,236,0.4)] flex items-center justify-center">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="object-contain w-10 h-10 rounded-full cursor-pointer sm:w-12 sm:h-12"
                />
              </div>

              {/* Card with tilt */}
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={600}
                scale={1.02}
                gyroscope={true}
                className={`w-full md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="cursor-pointer p-4 sm:p-6 rounded-xl shadow-[0_0_25px_rgba(130,69,236,0.25)] bg-gray-900/80 backdrop-blur-md transition-transform duration-300 ease-in-out hover:shadow-purple-700/50 border border-white/5 mx-4">
                  <div className="flex flex-col gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {exp.role} @{" "}
                      <span className="text-[#8245ec]">{exp.company}</span>
                    </h3>
                    <span className="text-xs text-gray-400 sm:text-sm">
                      {exp.date}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-gray-300 sm:text-base">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm text-purple-200 rounded-full bg-[#8245ec]/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
