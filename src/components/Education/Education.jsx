// Education.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-6 md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#141420] to-[#0f0f1b] text-white mt-0 mb-0"
    >
      {/* Section Title */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 sm:text-5xl drop-shadow-md">
          Education
        </h2>
        <div className="w-20 h-1 mt-3 bg-[#8245ec] mx-auto rounded-full"></div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
          My academic journey shaping my skills and knowledge.
        </p>
      </div>

      {/* Education Cards Container */}
      <div className="relative max-w-5xl mx-auto ">
        <svg
          className="absolute hidden top-6 bottom-6 left-8 sm:block"
          width="10"
          height="100%"
          viewBox="0 0 10 300"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 0
               C8 30, 2 60, 5 90
               C8 120, 2 150, 5 180
               C8 210, 2 240, 5 270
               C8 300, 2 330, 5 360"
            stroke="#8245ec"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="grid grid-cols-1 gap-10">
          {education.map((edu, index) => (
            <Tilt
              key={edu.id}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={700}
              gyroscope={true}
              className="w-full"
            >
              <div className="relative">
                <div className="absolute w-3 h-3 bg-purple-600 border-2 border-gray-900 rounded-full sm:w-4 sm:h-4 -left-5 sm:-left-6 top-8 shadow-[0_0_12px_#8245ec]" />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#1d1b2f] to-[#151323] backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(130,69,236,0.25)] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_#8245ec80] cursor-pointer"
                >
                  <div className="flex items-center gap-4 p-5 border-b border-white/5 bg-[#222030]/70">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="object-contain w-12 h-12 p-1 bg-white rounded-lg sm:h-14 sm:w-14"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-2xl md:text-2xl lg:text-2xl">
                        {edu.school}
                      </h3>
                      <p className="text-xs text-gray-400 sm:text-sm md:text-base">
                        {edu.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <h4 className="text-base font-medium text-purple-300 sm:text-lg md:text-xl">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-gray-400 sm:text-sm">
                      {edu.grade}
                    </p>
                    <p className="text-sm text-gray-300 sm:text-base">
                      {edu.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
