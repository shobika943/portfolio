import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    icon: <FaPython size={45} />,
    name: "Python",
    level: "Advanced",
  },
  {
    icon: <FaReact size={45} />,
    name: "React",
    level: "Intermediate",
  },
  {
    icon: <FaJs size={45} />,
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    icon: <FaHtml5 size={45} />,
    name: "HTML5",
    level: "Advanced",
  },
  {
    icon: <FaCss3Alt size={45} />,
    name: "CSS3",
    level: "Advanced",
  },
  {
    icon: <SiMysql size={45} />,
    name: "MySQL",
    level: "Advanced",
  },
  {
    icon: <SiMongodb size={45} />,
    name: "MongoDB",
    level: "Intermediate",
  },
  {
    icon: <FaDatabase size={45} />,
    name: "SQL / Power BI",
    level: "Intermediate",
  },
  {
    icon: <FaGitAlt size={45} />,
    name: "Git & GitHub",
    level: "Intermediate",
  },
  {
    icon: <VscVscode size={45} />,
    name: "VS Code",
    level: "Advanced",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-700 shadow-lg text-center cursor-pointer"
            >
              <div className="flex justify-center text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {skill.name}
              </h3>

              <p className="mt-2 text-gray-400">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;