import React from 'react'
import aboutImg from '../assets/aboutImage.jpg'
import { Link } from 'react-router-dom'
import { HiAcademicCap } from "react-icons/hi2";
import { FaPlaneDeparture, FaBrain } from "react-icons/fa";
import gs from '../assets/Members/gs.jpg'
import js1 from '../assets/Members/js-1.jpg'
import js2 from '../assets/Members/js-2.jpg'
import os1 from '../assets/Members/os-1.jpg'
import os2 from '../assets/Members/os-2.jpg'
import os3 from '../assets/Members/os-3.jpg'
import member1 from '../assets/Members/member-1.jpg'
import member2 from '../assets/Members/member-2.jpg'
import member3 from '../assets/Members/member-3.jpg'
import member4 from '../assets/Members/member-4.jpg'
import member5 from '../assets/Members/member-5.jpg'


const About = () => {
  return (
    <div className='w-full'>
        <div style={{backgroundImage: `url(${aboutImg})`}} className='w-full h-[320px] bg-cover bg-center'>
            <div className='w-full h-full bg-black/60 flex flex-col items-center justify-center'>
                <h2 className='pt-[72px] text-4xl text-white font-semibold'>About Us</h2>
                <div className='text-white text-sm flex gap-2 mt-2'>
                    <Link to='/' className='hover:text-orange-400'>Home</Link>
                    <span>-</span>
                    <Link to='/about' className='hover:text-orange-400'>About Us</Link>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-[85%] mx-auto py-10 px-5 lg:px-0 flex flex-col items-center justify-center gap-5'>
            <p className='text-justify'>Founded in 2007, pcIST is a thriving programming club committed to fostering a community of passionate coders and technology enthusiasts. Based at the Institute of Science and Technology, Dhanmondi, we strive to equip students with the essential skills, knowledge, and confidence to excel in the ever-evolving world of programming and technology. At pcIST, we believe in learning through experience. We organize a diverse range of activities, including hands-on coding workshops, competitive programming contests, technical seminars, and exciting tech fests. These initiatives create a dynamic environment where students can enhance their problem-solving skills, collaborate with like-minded peers, and stay ahead of emerging technologies. Whether you're a beginner taking your first steps into programming or an experienced coder looking to sharpen your skills, pcIST welcomes you to be a part of this journey of innovation and growth. Together, we code, compete, and create the future!</p>
            <div className='mt-10 w-full'>
                <div className='mb-5 flex flex-col items-center gap-2'>
                    <h3 className='text-2xl text-center font-semibold'>WHAT WE OFFER</h3>
                    <hr className='w-[260px] border border-orange-500'/>
                </div>
                <div className='mt-5 flex flex-col md:flex-row items-center justify-center gap-5'>
                    <div className='w-full md:w-[240px] rounded-sm border border-gray-300 p-5 text-center'>
                        <div className='icon-div w-full flex justify-center'>
                            <HiAcademicCap />
                        </div>
                        <h4 className='mt-2 text-[15px] text-orange-500 font-semibold'>PROVIDE COURSES</h4>
                        <p className='text-sm mt-1'>We offer courses, seminars, and workshops on competitive programming, DSA, and more to enhance skills and stay updated.</p>
                    </div>
                    <div className='w-full md:w-[240px] rounded-sm border border-gray-300 p-5 text-center'>
                        <div className='icon-div w-full flex justify-center'>
                            <FaBrain />
                        </div>
                        <h4 className='mt-2 text-[15px] text-orange-500 font-semibold'>ARRANGE CONTESTS</h4>
                        <p className='text-sm mt-1'>We host on-campus coding contests, giving students a platform to compete, improve problem-solving skills, and prepare for larger challenges.</p>
                    </div>
                    <div className='w-full md:w-[240px] rounded-sm border border-gray-300 p-5 text-center'>
                        <div className='icon-div w-full flex justify-center'>
                            <FaPlaneDeparture />
                        </div>
                        <h4 className='mt-2 text-[15px] text-orange-500 font-semibold'>PERTICIPATE IN IUPC</h4>
                        <p className='text-sm mt-1'>We select and send top programmers to IUCP, ICPC, and other prestigious competitions, helping them compete at higher levels.</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 w-full'>
                <div className='mb-5 flex flex-col items-center gap-2'>
                    <h3 className='text-2xl text-center font-semibold'>COMMITTEE MEMBERS</h3>
                    <hr className='w-[320px] border border-orange-500'/>
                </div>
                <div className='mt-5 px-5 md:px-0 flex flex-col md:flex-row items-center justify-center flex-wrap gap-5'>
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={gs} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={js1} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={js2} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={os2} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={os1} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={os3} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member2} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member1} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member3} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member4} alt="" />
                    <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member5} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About