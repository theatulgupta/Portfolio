import React, { useState } from "react";

import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import theatulgupta from "../../assets/theatulgupta.jpeg";

const roles = [
  "Fullstack Developer",
  "App Developer",
  "UI/UX Developer",
  "Coder",
];

const getArticle = (word) => {
  const firstLetter = word.trim()[0].toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(firstLetter) ? "an" : "a";
};

const About = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  return (
    <section
      id="about"
      className="py-12 px-[6vw] md:px-[10vw] lg:px-[18vw] font-sans mt-20 md:mt-28 lg:mt-36"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        {/* Left Side - 50% */}
        <div className="w-full mt-8 text-center md:w-1/2 md:text-left md:mt-0 motion-safe:animate-fadeInUp">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 sm:text-6xl md:text-7xl drop-shadow-md">
            Hi, I’m Atul Gupta
          </h1>

          <h3 className="flex flex-wrap items-center gap-2 mb-6 text-2xl font-medium text-gray-300 sm:text-3xl md:text-4xl">
            I’m{" "}
            <span className="font-semibold text-purple-300">
              {getArticle(roles[currentRoleIndex])}
            </span>
            <TypeAnimation
              sequence={roles.flatMap((role, index) => [
                () => setCurrentRoleIndex(index),
                role,
                2000,
              ])}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              cursorStyle="|"
              style={{ color: "#a855f7", fontWeight: "bold" }}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="max-w-2xl mt-4 mb-10 text-lg leading-relaxed text-gray-400 sm:text-xl">
            I build immersive digital experiences, blending aesthetic design
            with efficient engineering. Whether it’s a complex web platform or a
            polished mobile app, I focus on delivering intuitive and impactful
            results.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1OqY3kpZv8lqOf0APHfnVlJ4oI7NGig53/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 mt-5 text-lg font-bold text-white transition duration-300 transform rounded-full hover:scale-105 hover:shadow-[0_0_25px_#a855f7]"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center w-full px-4 md:w-1/2 md:justify-center">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[24rem] md:h-[24rem] rounded-full shadow-[0_0_15px_4px_rgba(130,69,236,0.15)]/65"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={theatulgupta}
              alt="Atul Kumar Gupta"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
