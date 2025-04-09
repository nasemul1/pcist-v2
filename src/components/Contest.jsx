import React from 'react'
import cf from '../assets/logo/codeforces.png'
import { Link } from 'react-router-dom'

const Contest = () => {
  return (
    <div className='w-full bg-gray-100 flex justify-center py-15'>
        <div className='w-full lg:w-[85%]'>
            <h2 className='text-center text-2xl text-slate-950 font-semibold px-5 mb-8'>Contest Tracker</h2>
            <div className='mt-10 w-full px-5 lg:px-0 flex flex-wrap items-center justify-center gap-5'>
                <div className='w-full md:w-[260px] border p-5 rounded-sm'>
                    <img className='w-full' src={cf} alt="" />
                    <p className='mt-2 text-sm'>23 March 2025 | Tue</p>
                    <h3 className='mt-3 text-[18px] font-medium'>Codeforces Round 1012 (Div. 2)</h3>
                    <a className='inline-block mt-3 px-5 py-1 bg-orange-400 rounded-xs' target='_blank' href="">Visit</a>
                </div>
                <div className='w-full md:w-[260px] border p-5 rounded-sm'>
                    <img className='w-full' src={cf} alt="" />
                    <p className='mt-2 text-sm'>25 March 2025 | Tue</p>
                    <h3 className='mt-3 text-[18px] font-medium'>Codeforces Round 1013 (Div. 3)</h3>
                    <a className='inline-block mt-3 px-5 py-1 bg-orange-400 rounded-xs' target='_blank' href="">Visit</a>
                </div>
                <div className='w-full md:w-[260px] border p-5 rounded-sm'>
                    <img className='w-full' src={cf} alt="" />
                    <p className='mt-2 text-sm'>25 March 2025 | Tue</p>
                    <h3 className='mt-3 text-[18px] font-medium'>Codeforces Round 1013 (Div. 3)</h3>
                    <a className='inline-block mt-3 px-5 py-1 bg-orange-400 rounded-xs' target='_blank' href="">Visit</a>
                </div>
                <div className='w-full md:w-[260px] border p-5 rounded-sm'>
                    <img className='w-full' src={cf} alt="" />
                    <p className='mt-2 text-sm'>25 March 2025 | Tue</p>
                    <h3 className='mt-3 text-[18px] font-medium'>Codeforces Round 1013 (Div. 3)</h3>
                    <a className='inline-block mt-3 px-5 py-1 bg-orange-400 rounded-xs' target='_blank' href="">Visit</a>
                </div>
            </div>
            <div className='mt-10 flex'>
                <Link to="/contest" className='mx-auto px-5 py-1.5 bg-gray-300 rounded-full'>See More</Link>
            </div>
        </div>
    </div>
  )
}

export default Contest