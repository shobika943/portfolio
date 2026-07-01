import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Full Stack Application Development",
    issuer: "Professional Certification",
  },
  {
    title: "Graphic Designing",
    issuer: "Professional Certification",
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
  },
  {
    title: "REST API with Flask & Python",
    issuer: "Professional Certification",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
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
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certifications.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-xl text-center"
            >
              <FaCertificate
                size={55}
                className="mx-auto text-cyan-400"
              />

              <h3 className="text-xl font-bold mt-6">
                {certificate.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {certificate.issuer}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;