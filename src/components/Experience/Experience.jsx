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
        <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 sm:text-5xl md:text-6xl drop-shadow-md">
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
          className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#8245ec]/40 via-[#8245ec]/20 to-transparent"
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
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#141420] rounded-full border-2 border-[#8245ec] shadow-[0_0_20px_rgba(130,69,236,0.6)] ring-2 ring-purple-900/30 flex items-center justify-center transition-transform duration-500 hover:scale-110">
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
                <div className="cursor-pointer p-4 sm:p-6 rounded-xl shadow-[0_0_30px_rgba(130,69,236,0.25)] bg-gradient-to-br from-[#1c1c2b]/80 to-[#1a1a27]/80 backdrop-blur-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_40px_#8245ec80] border border-white/5 mx-4 hover:-translate-y-1 hover:scale-[1.015]">
                  <div className="flex flex-col gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {exp.role} @{" "}
                      <span className="text-[#8245ec]">{exp.company}</span>
                    </h3>
                    <span className="text-xs text-gray-400 sm:text-sm">
                      {exp.date}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm text-purple-100 rounded-full bg-[#8245ec]/30 shadow-[0_0_10px_#8245ec50]"
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
