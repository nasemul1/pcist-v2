import React from 'react'
import LogoSlider from './LogoSlider'

const Alumni = () => {
  return (
    <div className='w-full bg-gray-100 flex justify-center py-15'>
        <div className='w-full lg:w-[85%]'>
            <h2 className='text-center text-2xl text-slate-950 font-semibold px-5 mb-8'>Alumni from IST are working in this companies</h2>
            <LogoSlider />
        </div>
    </div>
  )
}

export default Alumni