import React from 'react'
import aboutImg from '../assets/aboutImage.jpg'
import { Link } from 'react-router-dom'

const ComponentHeader = ({title, route}) => {
  return (
    <div style={{backgroundImage: `url(${aboutImg})`}} className='w-full h-[320px] bg-cover bg-center'>
        <div className='w-full h-full bg-black/60 flex flex-col items-center justify-center'>
            <h2 className='pt-[72px] text-4xl text-white font-semibold'>{title}</h2>
            <div className='text-white text-sm flex gap-2 mt-2'>
                <Link to='/' className='hover:text-orange-400'>Home</Link>
                <span>-</span>
                <Link to='/about' className='hover:text-orange-400'>{route}</Link>
            </div>
        </div>
    </div>
  )
}

export default ComponentHeader