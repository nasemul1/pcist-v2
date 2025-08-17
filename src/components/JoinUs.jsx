import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <div className="w-full flex justify-center py-20 bg-gradient-to-r from-orange-50 via-gray-100 to-orange-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-[85%] flex flex-col items-center text-center"
      >
        {/* Heading */}
        <motion.h3
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          🚀 Join Us to Learn, Practice & Grow Together!
        </motion.h3>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-md md:text-lg text-gray-600 max-w-2xl leading-relaxed"
        >
          Be part of a vibrant community of learners and developers.  
          Gain hands-on experience, improve your skills, and build real projects while networking with like-minded people.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/register"
            className="inline-block px-7 py-3 mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Extra highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Learn", desc: "Access resources and improve your coding skills." },
            { title: "Practice", desc: "Solve problems, build projects, and grow confidence." },
            { title: "Collaborate", desc: "Work together, share knowledge, and succeed." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <h4 className="text-xl font-semibold text-orange-500">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default JoinUs;
