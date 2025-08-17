import React, { useContext } from 'react'
import ComponentHeader from '../components/ComponentHeader'
import { UserContext } from '../context/UserContext'
import { HashLoader } from "react-spinners";

const ContestTracker = () => {

	const { contests, cloading, cmessage } = useContext(UserContext);

	if(cloading){
		return( 
	      <div className="min-h-screen w-full flex justify-center items-center text-center py-10 text-lg">
	        <HashLoader color='#FF6900' />
	      </div>
	    )
	}

	return (
		<div className='w-full'>
			<ComponentHeader title="Contest Tracker" route="Contest Tracker" />
			{ cmessage && <p>Failed to fetch data from api.</p> }
			<div className='w-full lg:w-[85%] max-w-[1200px] mx-auto py-10 px-5 lg:px-0'>
				<div className='w-full px-5 lg:px-0 flex flex-wrap items-center justify-center gap-5'>
				{ contests &&
					contests.map((contest, index) => (
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
			</div>
		</div>
	)
}

export default ContestTracker