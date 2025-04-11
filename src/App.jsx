import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import SingleBlog from './components/SingleBlog'

const App = () => {
  return (
    <div className="mx-auto max-w-[1920px] relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<BlogList />}></Route>
        <Route path='/blog/:id' element={<SingleBlog />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App