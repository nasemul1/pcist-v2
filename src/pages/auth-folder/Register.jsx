import React from 'react'
import side from '../../assets/Others/register.webp';
import { Link, useNavigate } from 'react-router-dom';
import ist_logo from '../../assets/IST_logo.gif'
import pcist_logo from '../../../public/vite.svg'

const Register = () => {

	const navigate = useNavigate();

	return (
		<div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#C2D2E1] to-[#F9C6B0]'>
	        <div id="regi-card" className='border-4 border-[#FF6900] overflow-hidden w-10/12 h-3/4 text-white bg-white flex rounded-lg drop-shadow-lg'>
	            <div id="left-side" className='w-3/6 hidden md:block bg-cover bg-center' style={{backgroundImage: `url(${side})`}}></div>
	            <div id="right-side" className='p-6 w-full md:w-3/6 text-black bg-white md:rounded-r-lg flex flex-col justify-center items-center'>
	                <form className='w-full flex flex-col items-center justify-center'>
	                    <div className='w-3/4 flex justify-center gap-5'>
			              <img src={ist_logo} className='h-[64px] w-[64px]' />
			              <div className='w-[2px] h-full bg-gray-500'></div>
			              <img src={pcist_logo} className='h-[64px] w-[64px]' />
			            </div>
	                    <p className='mt-4 align-center text-center'><span className='text-[#FF6900] font-semibold'>Sign up</span> Your Account</p>
	                    <input placeholder='Class Roll' type="number" id='roll' className=' p-2 w-3/4 bg-inherit border-b-2 border-[#020618] rounded-sm outline-none' required/><br />
	                    <input placeholder='Email' type="email" name="email" id="email" className=' p-2 w-3/4 bg-inherit border-b-2 border-[#020618] rounded-sm outline-none' required/><br />
	                    <input placeholder='Password' type="password" name="pass" id="pass" className='mb-2 p-2 w-3/4 bg-inherit border-b-2 border-[#020618] rounded-sm outline-none' required/><br />
	                    <button type="submit" className='pl-4 pr-4 pt-2 pb-2 w-3/4 text-white font-bold bg-[#020618] hover:bg-[#020618]/75 border-0 rounded-sm'>Proceed</button>
	                    <button onClick={()=>navigate(-1)} className='cursor-pointer mt-2 pl-4 pr-4 pt-2 pb-2 w-3/4 text-[#FF6900] font-bold bg-gray-200 hover:bg-gray-200/75  border-0 rounded-sm'>Back</button>
	                    <div className='mt-6'>
	                        <Link to={'/'} className='mt-6 text-[#FF6900]'>Home</Link>
	                        <span className='ml-2 mr-2'>|</span>
	                        <Link to={'/login'} className='mt-6 text-[#FF6900]'>Login</Link>
	                    </div>
	                </form>
	            </div>
	        </div>
      </div>
	)
}

export default Register