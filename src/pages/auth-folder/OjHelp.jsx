import React from 'react'
import cf from '../../assets/Help/codeforces.png'
import atcoder from '../../assets/Help/atcoder.png'
import codechef from '../../assets/Help/codechef.png'

const OjHelp = () => {
	return (
		<div className="w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#C2D2E1] to-[#F9C6B0]">
			<div className="border-4 border-[#FF6900] overflow-scroll w-11/12 max-w-6xl h-[90%] text-black bg-white flex flex-col rounded-lg drop-shadow-lg p-4 md:p-6">
				<h3 className='mb-5'>First create account on these websites. then follow the below instruction:</h3>
				<div className='mb-15'>
					<h3 className='text-xl text-[#FF6900] font-semibold mb-2'>Codeforces handle: </h3>
					<img src={cf} className='w-full' />
				</div>
				<div className='mb-15'>
					<h3 className='text-xl text-[#FF6900] font-semibold mb-2'>Atcoder handle: </h3>
					<img src={atcoder} className='w-full' />
				</div>
				<div>
					<h3 className='text-xl text-[#FF6900] font-semibold mb-2'>CodeChef handle: </h3>
					<img src={codechef} className='w-full' />
				</div>
			</div>
		</div>
	)
}

export default OjHelp