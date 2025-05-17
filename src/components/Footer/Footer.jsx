import "react-toastify/dist/ReactToastify.css";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import emailjs from "@emailjs/browser";

const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "theatulgupta_2025", // Replace with your EmailJS service ID
        "theatulgupta_template", // Replace with your EmailJS template ID
        { user_email: subscriberEmail },
        "WOyBIBuKqnD23wkpu" // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Thank you for subscribing!", {
            position: "top-right",
            theme: "dark",
          });
          setSubscriberEmail("");
          setIsLoading(false);
        },
        () => {
          toast.error("Failed to subscribe. Please try again later.", {
            position: "top-right",
            theme: "dark",
          });
          setIsLoading(false);
        }
      );
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a1829] to-[#12101c] border-t border-white/10 text-white py-12 px-6 md:px-[7vw] lg:px-[15vw] font-sans backdrop-blur-md shadow-[0_0_60px_#8245ec20]">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        {/* Left - Text */}
        <div className="text-center md:text-left">
          <h2 className="mb-1 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Atul Kumar Gupta
          </h2>
          <p className="text-sm text-gray-400">
            Building ideas into impactful digital solutions.
          </p>
        </div>

        {/* Center - Socials */}
        <div className="flex items-center gap-6 text-xl text-white">
          <a
            href="https://github.com/theatulgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition hover:drop-shadow-[0_0_8px_#8245ec80]"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/theatulgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition hover:drop-shadow-[0_0_8px_#8245ec80]"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:atulgupta3058@gmail.com"
            title="Send Email"
            target="_blank"
            className="hover:text-[#8245ec] transition hover:drop-shadow-[0_0_8px_#8245ec80]"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right - Newsletter */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            placeholder="Subscribe to newsletter"
            required
            value={subscriberEmail}
            onChange={(e) => setSubscriberEmail(e.target.value)}
            className="px-4 py-2 rounded-full bg-[#1e1b2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8245ec] text-sm w-64 border border-white/10 shadow-sm"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-[#8245ec] hover:bg-[#6a2bdc] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-purple-600/50 ${
              isLoading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <svg
                className="w-4 h-4 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-10 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} Atul Kumar Gupta. All rights reserved.
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
