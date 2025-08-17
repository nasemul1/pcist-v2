import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
    >
      {/* Softer gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="mx-5 relative md:w-full h-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-xl flex flex-col items-center justify-center bg-black/70 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl py-10 px-6"
        >
          <h2 className="text-base md:text-lg font-light mb-2 text-white/80 tracking-wide">
            Programming Club of IST
          </h2>
          <motion.h1
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-2xl md:text-4xl 2xl:text-6xl text-center font-bold leading-tight text-white mb-3"
          >
            Welcome to <span className="text-orange-400">PCIST</span>
          </motion.h1>
          <p className="text-sm md:text-base 2xl:text-xl text-center mt-2 text-white/90 font-normal">
            A vibrant community for coders, problem solvers, and tech enthusiasts.<br />
            <span className="text-white/70">Learn, practice, and grow with workshops, contests, and projects.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">Competitive Programming</span>
            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">C++</span>
            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">DSA</span>
            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">Python</span>
            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">JavaScript</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <Link
              to='/register'
              className='px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg text-base transition'
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
        <div className='absolute bottom-10 border border-white/30 p-2 text-white/70 animate-bounce rounded-full bg-black/60 backdrop-blur'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero