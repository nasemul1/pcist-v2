import React from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { FaPlaneDeparture, FaBrain } from "react-icons/fa";
import GalleryGrid from '../components/GalleryGrid';
import ComponentHeader from '../components/ComponentHeader';
import JoinUs from '../components/JoinUs';
import { motion } from 'framer-motion';

const About = () => {
  const offerData = [
    {
      icon: <HiAcademicCap size={30} />,
      title: "PROVIDE COURSES",
      desc: "We offer courses, seminars, and workshops on competitive programming, DSA, and more to enhance skills and stay updated.",
    },
    {
      icon: <FaBrain size={30} />,
      title: "ARRANGE CONTESTS",
      desc: "We host on-campus coding contests, giving students a platform to compete, improve problem-solving skills, and prepare for larger challenges.",
    },
    {
      icon: <FaPlaneDeparture size={30} />,
      title: "PARTICIPATE IN IUPC",
      desc: "We select and send top programmers to IUCP, ICPC, and other prestigious competitions, helping them compete at higher levels.",
    },
  ];

  return (
    <div className='w-full'>
      <ComponentHeader title="About Us" route="About" />

      <motion.div
        className='w-full lg:w-[85%] mx-auto py-10 px-5 lg:px-0 flex flex-col items-center justify-center gap-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* About Text */}
        <motion.p
          className='text-justify text-gray-700'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Founded in 2007, pcIST is a thriving programming club committed to fostering a community of passionate coders and technology enthusiasts. Based at the Institute of Science and Technology, Dhanmondi, we strive to equip students with the essential skills, knowledge, and confidence to excel in the ever-evolving world of programming and technology. At pcIST, we believe in learning through experience. We organize a diverse range of activities, including hands-on coding workshops, competitive programming contests, technical seminars, and exciting tech fests. These initiatives create a dynamic environment where students can enhance their problem-solving skills, collaborate with like-minded peers, and stay ahead of emerging technologies. Whether you're a beginner taking your first steps into programming or an experienced coder looking to sharpen your skills, pcIST welcomes you to be a part of this journey of innovation and growth. Together, we code, compete, and create the future!
        </motion.p>

        {/* What We Offer */}
        <div className='mt-10 w-full'>
          <div className='mb-5 flex flex-col items-center gap-2'>
            <h3 className='text-2xl text-center font-semibold'>WHAT WE OFFER</h3>
            <hr className='w-[260px] border border-orange-500'/>
          </div>
          <div className='mt-5 flex flex-col md:flex-row items-center justify-center gap-5'>
            {offerData.map((item, index) => (
              <motion.div
                key={index}
                className='w-full md:w-[240px] rounded-sm border border-gray-300 p-5 text-center cursor-pointer hover:shadow-lg transition-shadow'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className='icon-div w-full flex justify-center mb-2 text-orange-500'>{item.icon}</div>
                <h4 className='mt-2 text-[15px] text-orange-500 font-semibold'>{item.title}</h4>
                <p className='text-sm mt-1 text-gray-600'>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Events Gallery */}
        <div className='mt-10 w-full'>
          <div className='mb-5 flex flex-col items-center gap-2'>
            <h3 className='text-2xl text-center font-semibold'>EVENTS GALLERY</h3>
            <hr className='w-[260px] border border-orange-500'/>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <GalleryGrid /> {/* Add hover effect in GalleryGrid for images */}
          </motion.div>
        </div>

        <JoinUs />
      </motion.div>
    </div>
  )
}

export default About;
