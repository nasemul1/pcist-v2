import React from 'react'
import Navbar from '../components/Navbar'
import heroImage from '../assets/hero.jpg'
import Hero from '../components/Hero'
import ComAbout from '../components/ComAbout'
import Alumni from '../components/Alumni'
import Events from '../components/Events'
import Contest from '../components/Contest'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ComAbout />
      <Alumni />
      <Events />
      <Contest />
      <Blog />
    </div>
  )
}

export default Home