import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-white">

      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-cyan-400">
              Shobika
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              MCA Graduate passionate about creating
              responsive web applications,
              Python solutions,
              Data Analytics dashboards,
              and modern software.
            </p>

          </div>

          {/* Middle */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a href="#home" className="hover:text-cyan-400">Home</a>
              <a href="#about" className="hover:text-cyan-400">About</a>
              <a href="#skills" className="hover:text-cyan-400">Skills</a>
              <a href="#projects" className="hover:text-cyan-400">Projects</a>
              <a href="#experience" className="hover:text-cyan-400">Experience</a>
              <a href="#contact" className="hover:text-cyan-400">Contact</a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-6 text-3xl">

              <a href="https://github.com/" target="_blank">
                <FaGithub className="hover:text-cyan-400" />
              </a>

              <a href="https://linkedin.com/" target="_blank">
                <FaLinkedin className="hover:text-cyan-400" />
              </a>

              <a href="mailto:shobika0076@gmail.com">
                <FaEnvelope className="hover:text-cyan-400" />
              </a>

            </div>

            <button
              onClick={scrollToTop}
              className="mt-10 bg-cyan-500 text-black p-4 rounded-full hover:bg-cyan-400 transition"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <p className="text-center text-gray-400">
          © 2026 Shobika. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;