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
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        {/* Left Side - 50% */}
        <div className="w-full mt-8 text-center md:w-1/2 md:text-left md:mt-0">
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Hi, I am
          </h1>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Atul Gupta
          </h2>

          <h3 className="mb-4 text-xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl">
            I am{" "}
            <span className="mr-1 text-white">
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
              style={{ color: "#8245ec", fontWeight: "bold" }}
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="max-w-3xl mt-8 mb-10 text-base leading-relaxed text-gray-400 sm:text-lg md:text-lg">
            I’m a Fullstack Developer skilled in modern web and mobile app
            development. I build intuitive interfaces and efficient backends to
            create smooth user experiences. With a strong grasp of UI/UX and
            scalable code, I turn ideas into practical software solutions.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1OqY3kpZv8lqOf0APHfnVlJ4oI7NGig53/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 mt-5 text-lg font-bold text-white transition duration-300 transform rounded-full hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center w-full md:w-1/2 md:justify-center">
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
