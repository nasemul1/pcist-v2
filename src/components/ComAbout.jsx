import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ComAbout = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="flex items-center justify-center py-10 px-5 lg:px-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full lg:w-[85%] flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Video Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center items-center"
          variants={fadeInLeft}
        >
          <motion.video
            muted
            controls
            controlsList="nodownload"
            className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <source src="https://ist.edu.bd/wp-content/uploads/2021/10/pcIST-Presentation-Video.mp4" type="video/mp4" />
          </motion.video>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center"
          variants={fadeInRight}
        >
          <motion.h2 
            className="text-3xl 2xl:text-5xl text-slate-950 font-bold"
            variants={fadeInUp}
          >
            About Us
          </motion.h2>

          <motion.p 
            className='mt-3 text-sm 2xl:text-[20px] text-justify text-gray-700 leading-relaxed'
            variants={fadeInUp}
          >
            Founded in 2007, pcIST is a thriving programming club dedicated to nurturing the next generation of tech enthusiasts. Based in Institute of Science and Technology, Dhanmondi, we are passionate about empowering students with the skills and knowledge they need to excel in the world of programming and technology.
            <span className='inline-block lg:hidden'>..</span> <br />
            <span className='hidden lg:block'><br /> At pcIST, we organize a wide range of activities, including hands-on courses, coding contests, technical seminars, and vibrant tech fests. Our goal is to create a dynamic learning environment where students can sharpen their problem-solving skills, collaborate with like-minded peers, and stay ahead in tech.</span>
          </motion.p>

          <motion.div className='mt-5' variants={fadeInUp}>
            <Link 
              to='/about' 
              className='px-5 py-2 text-xs md:text-sm 2xl:text-[20px] text-white bg-orange-500 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-600 transition-all duration-300'
            >
              Read More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ComAbout;
