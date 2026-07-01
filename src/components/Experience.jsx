import { motion } from "framer-motion";

const experiences = [
  {
    company: "Adetive Solutions Pvt. Ltd.",
    role: "Graphic Design Intern",
    duration: "Sep 2023 – Feb 2024",
    description:
      "Designed creative posters, banners, social media graphics, and learned branding concepts.",
  },
  {
    company: "Vinsup Solutions",
    role: "Full Stack Development Intern",
    duration: "May 2025 – Jun 2025",
    description:
      "Worked with React.js, Node.js, frontend components, backend APIs, and database integration.",
  },
  {
    company: "Innovaq Tech",
    role: ".NET Stack Development Intern",
    duration: "Nov 2025 – Mar 2026",
    description:
      "Developed web applications using .NET technologies, REST APIs, SQL databases, and deployment workflows.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-cyan-400 mb-20"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-cyan-500">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 ml-8 relative"
            >
              <div className="absolute -left-11 top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-950"></div>

              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 shadow-lg">

                <h3 className="text-2xl font-bold text-cyan-400">
                  {exp.role}
                </h3>

                <h4 className="text-xl mt-2">
                  {exp.company}
                </h4>

                <p className="text-gray-400 mt-2">
                  {exp.duration}
                </p>

                <p className="mt-5 text-gray-300 leading-7">
                  {exp.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;