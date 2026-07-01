import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
          Shobika
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
          <li><a href="#certifications" className="hover:text-cyan-400 transition">Certificates</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;