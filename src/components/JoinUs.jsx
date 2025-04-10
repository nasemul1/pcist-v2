import React from 'react'
import { Link } from 'react-router-dom'

const JoinUs = () => {
  return (
    <div className='w-full flex justify-center py-15 bg-gray-100'>
        <div className='w-full lg:w-[85%] flex flex-col items-center'>
            <h3 className='text-2xl font-semibold text-center'>Join us to learn, practice, and grow together!</h3>
            <Link to='/register' className='block px-5 py-2 mt-5 bg-amber-500 rounded-full text-[#F3F4F6]'>Get Started</Link>
        </div>
    </div>
  )
}

export default JoinUs