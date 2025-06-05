import React, { useContext, useEffect, useRef, useState } from 'react';
import ist_logo from '../../assets/IST_logo.gif';
import pcist_logo from '../../assets/vite.svg';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const SendForgotPassCode = () => {

	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const { url, didSendCode } = useContext(UserContext);
	const token = localStorage.getItem('token');
	const slug = localStorage.getItem('slug');
	const [loading, setLoading] = useState(false);

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		try{

			const response = await axios.post(
				`${url}/user/send-forgot-password-email`,
				{ email }
			)

			if(response.data.status){
				setMessage('Verification code sent to your email account.');
				localStorage.setItem('email', email);
				navigate('/verify-forgot-pass-code');
			}
			else{
				setMessage(response.data.message);
			}

		} catch (error){
			console.error(error);
      		setMessage('Something went wrong. Please try again.');
		}

	}

	return (
		<div className="w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#C2D2E1] to-[#F9C6B0]">
	      <div className="border-4 border-[#FF6900] w-10/12 md:w-1/2 p-8 md:px-8 py-10 bg-white rounded-lg shadow-lg">
	        <div className="pb-5 flex justify-center gap-5">
	          <img src={ist_logo} className="h-[48px] w-[48px]" alt="IST logo" />
	          <div className="w-[2px] h-[48px] bg-gray-500" />
	          <img src={pcist_logo} className="h-[48px] w-[48px]" alt="pcIST logo" />
	        </div>

	        <h2 className="text-2xl font-bold text-[#FF6900] text-center mb-4">
	          Forgot Password?
	        </h2>
	        <p className="text-center text-gray-700 mb-2">
	          Enter your email, Which is used to create account on pcist website.
	        </p>

	        {message && (
	          <p className="text-center text-sm text-red-600 mb-4">{message}</p>
	        )}

	        <form onSubmit={onSubmitHandler} className="flex flex-col items-center">
				<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="text-center text-lg tracking-widest border-2 border-gray-300 focus:outline-none focus:border-[#FF6900] rounded-md p-2 w-2/3 mb-4"
				placeholder="Enter Email"
				required
				/>
				<button
				type="submit"
				disabled={loading}
				className="bg-[#FF6900] hover:bg-[#FF6900]/90 text-white font-bold py-2 px-6 rounded-md transition-all duration-200 cursor-pointer"
				>
					{ loading ? 'loading...' : 'Send'}
				</button>

		        <div className='mt-4'>
		          <Link to='/' className='text-[#FF6900]'>Home</Link>
		          <span className='mx-2'>|</span>
		          <Link to='/login' className='text-[#FF6900]'>Login</Link>
		        </div>
	        </form>
	      </div>
	    </div>
	)
}

export default SendForgotPassCode