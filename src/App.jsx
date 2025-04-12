import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import SingleBlog from './components/SingleBlog'
import UpcomingEvents from './pages/UpcomingEvents'
import ContestTracker from './pages/ContestTracker'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className="mx-auto max-w-[1920px] relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<BlogList />}></Route>
        <Route path='/blog/:id' element={<SingleBlog />}></Route>
        <Route path='/events' element={<UpcomingEvents />}></Route>
        <Route path='/contest' element={<ContestTracker />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App