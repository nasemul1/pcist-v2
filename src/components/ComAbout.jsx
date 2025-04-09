import React from 'react'
import { Link } from 'react-router-dom'

const ComAbout = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="py-15 px-5 w-full lg:w-[85%] flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 flex items-center">
          <video muted controls controlsList="nodownload">
            <source src="https://ist.edu.bd/wp-content/uploads/2021/10/pcIST-Presentation-Video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl 2xl:text-5xl text-slate-950 font-semibold">About Us</h2>
          <p className='mt-3 text-sm 2xl:text-[20px] text-justify'>Founded in 2007, pcIST is a thriving programming club dedicated to nurturing the next generation of tech enthusiasts. Based in Institute of Science and Technology, Dhanmondi, we are passionate about empowering students with the skills and knowledge they need to excel in the world of programming and technology.<span className='inline-block lg:hidden'>..</span> <br /><span className='hidden lg:block'><br /> At pcIST, we organize a wide range of activities, including hands-on courses, coding contests, technical seminars, and vibrant tech fests. Our goal is to create a dynamic learning environment where students can sharpen their problem-solving skills, collaborate with like-minded peers, and stay...</span></p>
          <div className='mt-5'>
            <Link to='/about' className='px-5 py-2 text-xs md:text-sm 2xl:text-[20px] bg-amber-500 rounded-xs'>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComAbout;