import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "theatulgupta_2025", // Your EmailJS service ID
        "theatulgupta_template", // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subscribe: formData.subscribe ? "Yes" : "No",
          time: new Date().toLocaleString(),
        },
        "WOyBIBuKqnD23wkpu" // Your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "", subscribe: false });
        },
        () => {
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-[7vw] lg:px-[15vw] bg-skills-gradient font-sans"
    >
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold tracking-wide text-white sm:text-5xl">
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
          className="bg-gray-900/80 backdrop-blur-md border border-white/20 rounded-3xl shadow-[0_0_30px_rgba(130,69,236,0.3)] p-8 flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="px-5 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 outline-none focus:bg-gray-800 focus:ring-2 focus:ring-[#a674ff] transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="px-5 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 outline-none focus:bg-gray-800 focus:ring-2 focus:ring-[#a674ff] transition"
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
            className="px-5 py-3 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 outline-none focus:bg-gray-800 focus:ring-2 focus:ring-[#a674ff] transition resize-none"
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
            className="w-fit self-center bg-[#8245ec] hover:bg-[#6a2bdc] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-300 ease-in-out shadow-md"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-2 text-sm text-center text-gray-300">{status}</p>
          )}
        </form>
      </Tilt>
    </section>
  );
};

export default Contact;
