import React from 'react';
import { motion } from 'framer-motion';
import one from '../assets/Contributors/1.jpg';
import two from '../assets/Contributors/2.jpg';
import three from '../assets/Contributors/3.jpeg';
import four from '../assets/Contributors/4.jpeg';

// Example images (replace with real images if available)
const contributors = [
  {
    name: 'Nasemul Islam',
    role: 'Full Project Planner & Full Stack Contributor',
    batch: '28',
    classRoll: ['21028'],
    img: one, // replace with actual image
  },
  {
    name: 'Sadi Mahmud',
    role: 'App & Backend Contributor',
    batch: '28',
    classRoll: ['21060'],
    img: two,
  },
  {
    name: 'Md Sazzad Hossain',
    role: 'Frontend & Deployment Contributor',
    batch: '28',
    classRoll: ['21073'],
    img: three,
  },
  {
    name: 'Iqbal Hossan Fazley Rabby',
    role: 'Frontend & UX/UI Advisor',
    batch: '28',
    classRoll: ['21061'],
    img: four,
  },
];

const Contributors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full pt-26 pb-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Contributors</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contributors.map((contributor, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            variants={cardVariants}
          >
            <img
              src={contributor.img}
              alt={contributor.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-1">{contributor.name}</h3>
            <p className="text-gray-600 mb-1">{contributor.role}</p>
            <p className="text-gray-500 text-sm mb-1">Batch: {contributor.batch}</p>
            <p className="text-gray-500 text-sm">
              Class Roll: {contributor.classRoll.join(', ')}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Contributors;
