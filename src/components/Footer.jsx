import React from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='w-full flex justify-center py-10 bg-slate-950 text-white'>
        <div className='w-full lg:w-[85%] px-10 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-5'>
            <div>
              <p className='text-center lg:text-center'>All rights reserved. Copyright © 2025 Programming Club of IST.</p>
            </div>
            <div className="flex gap-5">
              <a href='https://www.youtube.com/@ProgrammingClubIST' target='_blank'><FaYoutube /></a>
              <a href='https://www.facebook.com/groups/126910177403543' target='_blank'><FaFacebook /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer