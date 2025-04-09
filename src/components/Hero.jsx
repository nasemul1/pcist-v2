import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${heroImage})` }} className="w-full h-screen bg-cover bg-center bg-no-repeat">
      <div className="relative text-white w-full h-full flex flex-col items-center justify-center bg-black/60">
        <div className='w-full lg:w-[85%] flex flex-col items-center'>
          <h1 className="px-5 text-3xl md:text-4xl 2xl:text-7xl md:w-[480px] 2xl:w-[960px] text-center font-semibold">Welcome to PCIST - Where Innovation Meets Code!</h1>
          <p className="text-xs md:text-sm 2xl:text-2xl text-center mt-3">Join us to learn, practice, and grow together!</p>
          <Link to='/register' className='px-5 py-2 mt-5 bg-amber-500 rounded-xs'>Get Started</Link>
        </div>
        <div className='absolute bottom-10 border p-2 text-slate-300 animate-bounce rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero