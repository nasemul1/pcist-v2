import React from 'react'
import gs from '../assets/Members/gs.jpg'
import js1 from '../assets/Members/js-1.jpg'
import js2 from '../assets/Members/js-2.jpg'
import os1 from '../assets/Members/os-1.jpg'
import os2 from '../assets/Members/os-2.jpg'
import os3 from '../assets/Members/os-3.jpg'
import member1 from '../assets/Members/member-1.jpg'
import member2 from '../assets/Members/member-2.jpg'
import member3 from '../assets/Members/member-3.jpg'
import member4 from '../assets/Members/member-4.jpg'
import os4 from '../assets/Members/member-5.jpg'

const ClubMember = () => {
	return (
		<div className='mt-10 w-full'>
            <div className='mb-5 flex flex-col items-center gap-2'>
                <h3 className='text-2xl text-center font-semibold'>COMMITTEE MEMBERS</h3>
                <hr className='w-[320px] border border-orange-500'/>
            </div>
            <div className='mt-5 px-5 md:px-0 flex flex-col md:flex-row items-center justify-center flex-wrap gap-5'>
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={gs} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={js1} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={js2} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={os4} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={os2} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={os1} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={os3} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member2} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member1} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member3} alt="" />
                <img className='w-full md:w-60 rounded-sm overflow-hidden border' src={member4} alt="" />
            </div>
        </div>
	)
}

export default ClubMember