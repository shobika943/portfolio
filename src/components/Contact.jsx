import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import Resume from "../assets/resume/RESUME SHOBI.pdf";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9j93vtf",
        "template_2e9u69z",
        form.current,
        "Rz1LVyeYS6uTYo3dS"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-10 border border-slate-700"
          >
            <h3 className="text-3xl font-bold mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span>shobika0076@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            <div className="flex gap-6 mt-10 text-3xl">
              <a
                href="https://github.com/shobika943"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a
                href="https://linkedin.com/in/mohana-kannan-7349882a4"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>
            </div>

            <a
              href={Resume}
              download
              className="inline-flex items-center gap-3 mt-10 bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-10 border border-slate-700"
          >
            <h3 className="text-3xl font-bold mb-8">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Message"
                required
                className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-cyan-500 text-black py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;