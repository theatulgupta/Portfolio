import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import clsx from "clsx";

const Skills = () => {
  const [flippedSkills, setFlippedSkills] = useState({});

  const handleSkillClick = (categoryTitle, skillName) => {
    const key = `${categoryTitle}-${skillName}`;
    setFlippedSkills((prev) => ({ ...prev, [key]: true }));

    setTimeout(() => {
      setFlippedSkills((prev) => ({ ...prev, [key]: false }));
    }, 800);
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-[7vw] lg:px-[15vw] bg-skills-gradient font-sans"
    >
      {/* Section Title */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-wide text-white sm:text-5xl">
          Skills
        </h2>
        <div className="w-20 h-1 mt-3 bg-[#8245ec] mx-auto rounded-full"></div>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
          Technical competencies shaped by practical experience and continuous
          learning.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid gap-10 sm:grid-cols-2">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
            className="w-full"
          >
            <div className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(130,69,236,0.25)] p-6 sm:p-8">
              <h3 className="mb-6 text-2xl font-semibold text-center text-white sm:text-3xl">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const key = `${category.title}-${skill.name}`;
                  return (
                    <div
                      key={key}
                      onClick={() =>
                        handleSkillClick(category.title, skill.name)
                      }
                      className={clsx(
                        "flex flex-col items-center justify-center gap-1 p-2 rounded-2xl bg-gray-800/40 hover:scale-105 cursor-pointer select-none transition-all duration-300 ease-in-out",
                        flippedSkills[key]
                          ? "animate-flipY bg-purple-700/70 shadow-lg shadow-purple-700/50"
                          : "hover:bg-gray-700/60"
                      )}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <span className="text-sm text-gray-200 sm:text-base whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
