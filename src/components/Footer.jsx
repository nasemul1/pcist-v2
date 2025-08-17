import React from "react";
import { FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900/95 backdrop-blur-md text-white py-12 shadow-lg">
      <div className="w-full lg:w-[85%] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-bold text-white mb-2">Programming Club IST</h4>
          <p className="text-gray-400 text-sm md:text-base">
            A vibrant community to learn, practice, and grow in programming. Join us for events, contests, and collaborative projects.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="text-gray-400 space-y-1">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
            <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
          </ul>
        </motion.div>

        {/* Contact & Contributors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-2">Contact & Contributors</h4>
          <p className="text-gray-400 text-sm">Email: info@pcist.com</p>
          <p className="text-gray-400 text-sm">Phone: +880 1234 567890</p>
          <Link to="/contributors" className="text-gray-300 hover:text-white transition-colors text-sm mt-2 inline-block">
            See Contributors
          </Link>
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-6 mt-10 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.youtube.com/@ProgrammingClubIST"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaYoutube />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.facebook.com/groups/126910177403543"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/yourprojectrepo"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FaGithub />
        </motion.a>
      </motion.div>

      {/* Bottom Line */}
      <div className="w-full h-0.5 bg-gray-700 mt-8 rounded-full"></div>

      {/* Copyright */}
      <p className="text-gray-500 text-center mt-4 text-sm">
        © 2025 Programming Club of IST. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
