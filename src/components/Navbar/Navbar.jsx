import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-gradient-to-r from-[#0e0c1c]/80 to-[#1a162f]/80 backdrop-blur-md shadow-[0_2px_20px_rgba(130,69,236,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div className="text-lg font-extrabold tracking-wider text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 drop-shadow-md">
          <span className="">&lt;Atul/Gupta&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden space-x-8 md:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className="cursor-pointer text-gray-300 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_6px_#8245ec]"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden space-x-4 md:flex">
          <a
            href="https://github.com/theatulgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_#8245ec80]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/theatulgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_#8245ec80]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-gradient-to-br from-[#1c1a2d]/90 to-[#151323]/90 backdrop-blur-md z-50 rounded-2xl shadow-[0_0_40px_rgba(130,69,236,0.2)] border border-white/10 md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className="cursor-pointer text-gray-300 hover:text-white transition-all duration-200 hover:drop-shadow-[0_0_6px_#8245ec]"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex pt-2 space-x-4">
              <a
                href="https://github.com/theatulgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_#8245ec80]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/theatulgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_#8245ec80]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
