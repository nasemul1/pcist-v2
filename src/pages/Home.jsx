import React from 'react'
import Navbar from '../components/Navbar'
import heroImage from '../assets/hero.jpg'
import Hero from '../components/Hero'
import ComAbout from '../components/ComAbout'
import Alumni from '../components/Alumni'
import Events from '../components/Events'
import Contest from '../components/Contest'
import JoinUs from '../components/JoinUs'

const Home = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <Hero />
      <ComAbout />
      <Alumni />
      <Events event={"Solo"} place={"Home"}/>
      <Events event={"Team"} place={"Home"}/>
      <Contest />
      <JoinUs />
    </div>
  )
}

export default Home