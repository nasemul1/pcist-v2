import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Contest = () => {

    const { contests } = useContext(UserContext);
    const trimmedContests = contests.slice(0, 4);

  return (
    <div className='w-full bg-gray-100 flex justify-center py-15'>
        <div className='w-full lg:w-[85%]'>
            <div className='mb-5 flex flex-col items-center gap-2'>
                <h3 className='text-[20px] text-center font-semibold'>Online Contests Tracker</h3>
                <hr className='w-[240px] border border-orange-500'/>
            </div>
            <div className='px-5 flex flex-col md:flex-row justify-center gap-5'>
                { trimmedContests &&
                    trimmedContests.map((contest, index) => (
                        <div key={index} className='h-[254px] w-full md:w-[260px] flex flex-col justify-center border p-5 rounded-sm'>
                            <p className='mt-2 text-sm'>
                                {new Date(contest.startTime).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'short',  // Jan, Feb, Mar...
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true
                                })}
                            </p>
                            <h3 className='mt-3 text-[18px] font-medium'>{contest.title}</h3>
                            <p className='mt-2 text-[14px] font-medium'>{contest.site}</p>
                            <a href={contest.url} className='block w-[60px] text-center mt-3 py-1 bg-orange-400 rounded-xs' target='_blank'>Visit</a>
                        </div>
                    ))
                }
            </div>
            <div className='mt-10 flex'>
                <Link to="/contest" className='mx-auto px-5 py-1.5 bg-gray-300 rounded-full'>See More</Link>
            </div>
        </div>
    </div>
  )
}

export default Contest