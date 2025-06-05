import React, { useContext, useEffect, useState } from 'react'
import ComponentHeader from '../components/ComponentHeader'
import codeforces from '../assets/logo/oj-logo/codeforces.png'
import leetcode from '../assets/logo/oj-logo/leetcode.png'
import codechef from '../assets/logo/oj-logo/code-chef.svg'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { HashLoader } from "react-spinners";

const ContestTracker = () => {

	const { upcoming_contest_url } = useContext(UserContext);
	const [contests, setContests] = useState();
	const [loading, setLoading] = useState(true);
	const [message, setMessage] = useState('');

	const getContestData = async () => {

		try{

			const response = await axios.get(upcoming_contest_url);
			setContests(response.data);
			// console.log(contests);
			setLoading(false);

		} catch (error) {
			setMessage('Error getting contest data.');
		}

	}

	useEffect(() => {
		getContestData();
	},[]);

	if(loading){
		return( 
	      <div className="min-h-screen w-full flex justify-center items-center text-center py-10 text-lg">
	        <HashLoader color='#FF6900' />
	      </div>
	    )
	}

	return (
		<div className='w-full'>
			<ComponentHeader title="Contest Tracker" route="Contest Tracker" />
			<div className='w-full lg:w-[85%] max-w-[1200px] mx-auto py-10 px-5 lg:px-0'>
				<div className='w-full px-5 lg:px-0 flex flex-wrap items-center justify-center gap-5'>
				{ contests &&
					contests.map((contest, index) => (
						<div key={index} className='h-[254px] w-full md:w-[260px] flex flex-col justify-center border p-5 rounded-sm'>
		                    {contest.site == 'codeforces' && <img className='w-[160px] py-3' src={codeforces} alt="" />}
		                    {contest.site == 'leetcode' && <img className='w-[160px] py-3' src={leetcode} alt="" />}
		                    {contest.site == 'codechef' && <img className='w-[160px]' src={codechef} alt="" />}
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
		                    <a href={contest.url} className='block w-[60px] text-center mt-3 py-1 bg-orange-400 rounded-xs' target='_blank'>Visit</a>
		                </div>
					))
				}
	                {/*<div className='w-full md:w-[260px] border p-5 rounded-sm'>
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
	                </div>*/}
	            </div>
			</div>
		</div>
	)
}

export default ContestTracker