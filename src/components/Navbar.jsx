import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import Marquee from "react-fast-marquee";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <nav className='fixed z-10 top-0 lg:top-2 lg:rounded-sm lg:overflow-hidden shadow-lg left-1/2 -translate-x-1/2 w-full lg:w-[85%] flex items-center'>
      <div className='bg-white p-1'>
        <NavLink to='/'><img src={logo} className='size-14' alt="logo" /></NavLink>
      </div>
      <div className='relative w-full h-16 bg-[#15191A] text-white'>
        <div className='h-[40%] bg-orange-500 w-full flex items-center text-sm'>
          <Marquee pauseOnHover gradient={false} speed={50}>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
          </Marquee>
        </div>
        <div className='h-[60%] px-5 flex items-center justify-end lg:justify-between'>
          <div className='hidden lg:flex gap-5 text-sm'>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/blog' >Blog</NavLink>
            <NavLink to='/events' >Events</NavLink>
            <NavLink to='/contest' >Contest Tracker</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
          </div>
          <div className='flex items-center gap-5 text-sm'>
            <NavLink to='/login' >Login</NavLink>
            <NavLink to='/register' className='hidden lg:block'>Register</NavLink>
            <div onClick={handleClick} className='block lg:hidden border rounded-full p-1'>
              { 
                isOpen===false && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              }
              {
                isOpen && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>              
              }
            </div>
          </div>
        </div>
        {
          isOpen && <div onClick={handleClick} className='absolute right-0 w-full max-w-[180px] bg-[#15191A] flex flex-col items-end p-5 gap-5 lg:hidden text-sm'>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/gallery' >Gallery</NavLink>
            <NavLink to='/events' >Events</NavLink>
            <NavLink to='/contest' >Contest Tracker</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar