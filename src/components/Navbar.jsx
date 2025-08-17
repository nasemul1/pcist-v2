import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { UserContext } from '../context/UserContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {

  const { handleLogout, isLogged, setIsLogged } = useContext(UserContext);

  const token = localStorage.getItem('token');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    if(token){
      setIsLogged(true);
    } else{
      setIsLogged(false);
    }
  }, [token, isLogged]);

  const handleClick = () =>{
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsScrollingDown(false);
      } else if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true); // scrolling down
      } else {
        setIsScrollingDown(false); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -80, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className={`fixed z-20 top-0 left-1/2 -translate-x-1/2 w-full mx-auto max-w-[1920px] flex items-center justify-center border-b border-white/20 shadow-lg lg:rounded-xl transition-all duration-300
          ${isScrollingDown ? 'bg-white' : 'bg-black/70 backdrop-blur-md border border-white/20'}
        `}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex items-center justify-center p-2 rounded-full shadow-md ${isScrollingDown ? 'bg-white' : 'bg-black/60 backdrop-blur-md border border-white/20'} w-16 h-16`}
        >
          <NavLink to='/'>
            <motion.img
              src={logo}
              className='w-12 h-12 object-contain rounded-full'
              alt="logo"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
            />
          </NavLink>
        </motion.div>
        <div className='ml-2 relative w-full max-w-7xl h-16'>
          <div className='h-[40%] bg-gradient-to-r from-orange-400/80 to-orange-500/80 w-full flex items-center text-white text-sm rounded-t-sm'>
            <Marquee pauseOnHover gradient={false} speed={50}>
              <span>🚧 Under construction 🚧</span>
            </Marquee>
          </div>
          <div className={`h-[60%] px-5 flex items-center justify-end lg:justify-between ${isScrollingDown ? 'text-black' : 'text-white'}`}>
            <motion.div
              className='hidden lg:flex gap-6 text-sm font-medium'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <NavLink to='/' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Home</NavLink>
              <NavLink to='/about' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>About</NavLink>
              {/*<NavLink to='/blog' >Blog</NavLink>*/}
              <NavLink to='/events' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Events</NavLink>
              <NavLink to='/contest' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Contest Tracker</NavLink>
              {isLogged && <NavLink to='/roadmaps' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Roadmaps</NavLink>}
              {isLogged && <NavLink to='/resources' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Study Resources</NavLink>}
              <NavLink to='/contact' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Contact</NavLink>
            </motion.div>
            <div className='flex items-center gap-4 text-sm font-medium'>
              {isLogged === false && <NavLink to='/login' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Login</NavLink>}
              {isLogged === false && <NavLink to='/register' className={`hidden lg:block transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Register</NavLink>}
              {isLogged && <NavLink to='/profile' className={`transition hover:text-orange-500 ${isScrollingDown ? 'text-black' : 'text-white'}`}>Profile</NavLink>}
              {isLogged && <p onClick={handleLogout} className='text-red-400 cursor-pointer hover:text-red-600 transition'>Logout</p>}
              <div
                onClick={handleClick}
                className={`flex items-center justify-center lg:hidden border ${isScrollingDown ? 'border-black/20 bg-white' : 'border-white/30 bg-black/60'} backdrop-blur-md rounded-full p-1 shadow-md transition-all duration-200`}
                style={{ minWidth: 36, minHeight: 36 }}
              >
                { 
                  isOpen===false && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 ${isScrollingDown ? 'text-black' : 'text-white'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                }
                {
                  isOpen && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 ${isScrollingDown ? 'text-black' : 'text-white'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>              
                }
              </div>
            </div>
          </div>
          <AnimatePresence>
          {
            isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={handleClick}
                className={`absolute right-2 top-16 w-[90vw] max-w-xs bg-black/80 backdrop-blur-lg border border-white/20 shadow-2xl flex flex-col items-center p-7 gap-5 lg:hidden text-base font-medium rounded-2xl z-30`}
              >
                <NavLink to='/' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Home</NavLink>
                <NavLink to='/about' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">About</NavLink>
                {/*<NavLink to='/gallery' >Gallery</NavLink>*/}
                <NavLink to='/events' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Events</NavLink>
                <NavLink to='/contest' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Contest Tracker</NavLink>
                {isLogged && <NavLink to='/roadmaps' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Roadmaps</NavLink>}
                {isLogged && <NavLink to='/resources' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Study Resources</NavLink>}
                <NavLink to='/contact' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Contact</NavLink>
                {isLogged === false && <NavLink to='/login' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Login</NavLink>}
                {isLogged === false && <NavLink to='/register' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Register</NavLink>}
                {isLogged && <NavLink to='/profile' className="hover:text-orange-400 transition text-white w-full text-center py-2 rounded-lg">Profile</NavLink>}
                {isLogged && <p onClick={handleLogout} className='text-red-400 cursor-pointer hover:text-red-600 transition w-full text-center py-2 rounded-lg'>Logout</p>}
              </motion.div>
            )
          }
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  )
}

export default Navbar