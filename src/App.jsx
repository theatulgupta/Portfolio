import About from "./components/About/About";
import BlurBlob from "./components/BlurBlob";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import { FaAnglesUp } from "react-icons/fa6";

const App = () => {
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-12">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed z-50 p-4 text-xl text-white transition-all rounded-full bottom-10 right-8 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #8245ec, #a855f7)",
          boxShadow: "0 0 2px #8245ec, 0 0 20px #8245ec",
        }}
        title="Back to Top"
      >
        <FaAnglesUp size={24} />
      </button>
    </div>
  );
};

export default App;
