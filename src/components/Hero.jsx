import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import IntroVideo from "../assets/video/portfolio_intro_video.mp4";
import Resume from "../assets/resume/RESUME SHOBI.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto min-h-screen px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold mt-8 mb-6">
  Shobika M
</h1>

          <TypeAnimation
            sequence={[
              "Python Developer", 2000,
              "Full Stack Developer", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl text-cyan-400 font-semibold"
          />

          <p className="mt-8 text-gray-400 leading-8 text-lg">
            MCA graduate passionate about building modern web
            applications, solving real-world problems, and creating
            meaningful software using Python, React, SQL and Data analysis.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href={Resume}
              download
              className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">
            <a href="https://github.com/shobika943" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://linkedin.com/in/mohana-kannan-7349882a4" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="mailto:shobika0076@gmail.com">
              <FaEnvelope className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden border border-cyan-500 shadow-2xl">
            <video
              src={IntroVideo}
              controls
              preload="metadata"
              className="w-full max-w-md"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}

export default Hero;