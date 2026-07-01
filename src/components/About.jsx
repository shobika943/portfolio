import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-3xl p-10 shadow-xl border border-slate-700"
          >
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              I am <span className="text-cyan-400 font-semibold">Shobika</span>,
              an MCA graduate with a strong interest in Full Stack Development,
              Python programming, SQL, React, and Data Analytics.
            </p>

            <p className="text-gray-300 leading-8 mt-6 text-lg">
              I enjoy solving real-world problems, learning new technologies,
              and building responsive web applications that provide a great user
              experience.
            </p>

            <p className="text-gray-300 leading-8 mt-6 text-lg">
              My goal is to contribute to innovative software projects while
              continuously improving my technical and problem-solving skills.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-xl font-bold text-cyan-400">Education</h4>
              <p className="mt-3 text-gray-300">
                🎓 Master of Computer Applications (MCA)
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-xl font-bold text-cyan-400">Experience</h4>
              <p className="mt-3 text-gray-300">
                Full Stack, .NET and Graphic Design Internships
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-xl font-bold text-cyan-400">Career Goal</h4>
              <p className="mt-3 text-gray-300">
                To build impactful software solutions and grow as a Full Stack
                Developer and Data Analyst.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;