import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

import emailjs from "@emailjs/browser";

const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "theatulgupta_2025", // Replace with your EmailJS service ID
        "theatulgupta_template", // Replace with your EmailJS template ID
        { user_email: subscriberEmail },
        "WOyBIBuKqnD23wkpu" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Thank you for subscribing!");
          setSubscriberEmail("");
        },
        () => {
          setStatus("Failed to subscribe. Please try again later.");
        }
      );
  };

  return (
    <footer className="bg-[#0f0f1b] border-t border-white/5 text-white py-12 px-6 md:px-[7vw] lg:px-[15vw] font-sans">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        {/* Left - Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-1 text-[#8245ec]">
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
            className="hover:text-[#8245ec] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/theatulgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:atulgupta3058@gmail.com"
            title="Send Email"
            target="_blank"
            className="hover:text-[#8245ec] transition"
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
            className="px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8245ec] text-sm w-64"
          />
          <button
            type="submit"
            className="bg-[#8245ec] hover:bg-[#6a2bdc] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Subscribe
          </button>
        </form>
        {status && (
          <p className="mt-2 text-sm text-center text-gray-400">{status}</p>
        )}
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-10 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} Atul Kumar Gupta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
