import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import anomalyImg from "../assets/images/anomaly.png";
import bankImg from "../assets/images/bankexam.png";
import campusImg from "../assets/images/campus.png";
const projects = [
  {
    title: "Smart File Activity Anomaly Detection",
    image: anomalyImg,
    tech: "ASP.NET • SQL Server",
    description:
      "Developed a cloud security application that detects suspicious file activity using IP analysis and decoy data to improve security.",
    
  },
  {
    title: "Bank Exam App",
    image: bankImg,
    tech: "React • Node.js • MongoDB",
    description:
      "A web application that helps banking aspirants prepare for competitive exams through mock tests and study materials.",
    
  },
  {
    title: "Campus Recruitment Management System",
    image: campusImg,
    tech: "HTML • CSS • PHP • MySQL",
    description:
      "Designed a recruitment portal for managing student registrations, company listings, interview schedules, and placement activities.",
    
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center text-cyan-400 mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-xl"
            >
              <img
  src={project.image}
  alt={project.title}
  className="w-full h-52 object-cover rounded-2xl mb-6"
/>

              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-sm text-cyan-300 mt-2">
                {project.tech}
              </p>

              <p className="text-gray-300 mt-5 leading-7">
                {project.description}
              </p>

              <div className="flex gap-4 mt-8">

               

                

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;