import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import side from '../../assets/Others/login.webp'

const Login = () => {

	const navigate = useNavigate();

	return (
		<div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#C2D2E1] to-[#F9C6B0]'>
	        <div id="login-card" className='border-4 border-[#FF6900] overflow-hidden w-10/12 h-3/4 text-white bg-white flex rounded-lg drop-shadow-lg'>
		        <div id="left-side" className='w-3/6 hidden md:block bg-cover' style={{backgroundImage: `url(${side})`}}></div>
		        <div id="right-side" className='p-6 w-full md:w-3/6 text-black bg-white md:rounded-r-lg flex flex-col justify-center items-center'>
		          <form className='w-full flex flex-col items-center justify-center'>
		            <div className='w-3/4'>
		              <p className='text-left'>Hello !</p>
		              <p className='text-[#FF6900] font-bold'>Greetings</p>
		            </div>
		            <p className='m-5 align-center text-center'><span className='text-[#FF6900] font-semibold'>Login</span> Your Account</p>
		            <input placeholder='Username' type="text" id='user' value='' className='mb-2 p-2 w-3/4 bg-inherit border-b-2 border-[#020618] rounded-sm outline-none' required/><br />
		            <input placeholder='Password' type="password" name="pass" id="pass" value='' onChange={e => setPass(e.target.value)} className='mb-5 p-2 w-3/4 bg-inherit border-b-2 border-[#020618] rounded-sm outline-none' required/><br />
		            <button type="submit" className='cursor-pointer pl-4 pr-4 pt-2 pb-2 w-3/4 text-white font-bold bg-[#020618] hover:bg-[#020618]/75 border-0 rounded-sm'>Login</button>
		            <button onClick={()=>navigate(-1)} className='cursor-pointer mt-2 pl-4 pr-4 pt-2 pb-2 w-3/4 text-red-400 font-bold bg-gray-200 hover:bg-gray-200/75  border-0 rounded-sm'>Back</button>
		            <div className='mt-6'>
		              <Link to='/' className='mt-6 text-[#FF6900]'>Home</Link>
		              <span className='ml-2 mr-2'>|</span>
		              <Link to={'/register'} className='mt-6 text-[#FF6900]'>Create a new account</Link>
		            </div>
		          </form>
		        </div>
	        </div>
	    </div>
	)
}

export default Login