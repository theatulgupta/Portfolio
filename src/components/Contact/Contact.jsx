import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Tilt from "react-parallax-tilt";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "theatulgupta_2025",
        "theatulgupta_template",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subscribe: formData.subscribe ? "Yes" : "No",
          time: new Date().toLocaleString(),
        },
        "WOyBIBuKqnD23wkpu"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            theme: "dark",
          });
          setFormData({ name: "", email: "", message: "", subscribe: false });
          setIsLoading(false);
        },
        () => {
          toast.error("Failed to send message. Try again later.", {
            position: "top-right",
            theme: "dark",
          });
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-[7vw] lg:px-[15vw] bg-skills-gradient font-sans"
    >
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 sm:text-5xl drop-shadow-md">
          Contact Me
        </h2>
        <div className="w-24 h-1 mt-3 bg-[#8245ec] mx-auto rounded-full"></div>
        <p className="max-w-2xl mx-auto mt-3 text-lg text-gray-400">
          Have a project or question? Let’s connect.
        </p>
      </div>

      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.01}
        transitionSpeed={800}
        gyroscope={true}
        className="w-full"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-[#1d1b2f] to-[#151323] backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(130,69,236,0.35)] p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-[0_0_60px_#8245ec80]"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="px-5 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 outline-none focus:bg-gray-800 focus:ring-2 focus:ring-[#a674ff] border border-white/10 shadow-sm transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="px-5 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 outline-none focus:bg-gray-800 focus:ring-2 focus:ring-[#a674ff] border border-white/10 shadow-sm transition"
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="px-5 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 outline-none focus:bg-gray-800 focus:ring-2 focus:ring-[#a674ff] border border-white/10 shadow-sm transition resize-none"
          />
          <label className="flex items-center gap-3 text-sm text-gray-300">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="w-4 h-4 rounded accent-[#8245ec]"
            />
            Subscribe to newsletter
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-fit self-center bg-[#8245ec] hover:bg-[#6a2bdc] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-300 ease-in-out shadow-md ${
              isLoading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white animate-spin"
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
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </Tilt>
      <ToastContainer />
    </section>
  );
};

export default Contact;
