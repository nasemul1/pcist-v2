import React from 'react'
import { HiAcademicCap } from "react-icons/hi2";
import { FaPlaneDeparture, FaBrain } from "react-icons/fa";
import GalleryGrid from '../components/GalleryGrid';
import ComponentHeader from '../components/ComponentHeader';
import JoinUs from '../components/JoinUs'

const About = () => {
  return (
    <div className='w-full'>
        <ComponentHeader title="About Us" route="About" />
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
                    <h3 className='text-2xl text-center font-semibold'>EVENTS GALLERY</h3>
                    <hr className='w-[260px] border border-orange-500'/>
                </div>
                <GalleryGrid />
            </div>
            <JoinUs />
        </div>
    </div>
  )
}

export default About