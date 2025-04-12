import React from 'react'
import ComponentHeader from '../components/ComponentHeader'
import ClubMember from '../components/ClubMember'

const Contact = () => {
	return (
		<div className='w-full'>
			<ComponentHeader title='Contact' route='Contact' />
			<div className='w-full lg:w-[85%] mx-auto pb-10 px-5 lg:px-0'>
				<ClubMember />
			</div>
		</div>
	)
}

export default Contact