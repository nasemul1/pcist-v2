import React, { useContext, useState } from 'react'
import ist_logo from '../../assets/IST_logo.gif';
import pcist_logo from '../../assets/vite.svg';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyForgotPassCode = () => {

	const navigate = useNavigate();
	const [code, setCode] = useState();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const { url } = useContext(UserContext);
	const [password, setPassword] = useState();
	const [rePassword, setRePassword] = useState();
	const email = localStorage.getItem('email');

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		setMessage('');

		if(password !== rePassword){
			setMessage(`Password didn't matched:(`)
			return;
		}

		try{

			const response = await axios.post(
			`${url}/user/recover-password`,
			{ email, code, password }
			);

			if(response.data.status){
				setMessage('Password Change Successfully');
				localStorage.removeItem('email');
				navigate('/login');
			}
			else {
				setMessage(response.data.message);
			}
		} catch(error) {
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
		          Email Verification
		        </h2>

		        <p className="text-center text-gray-700 mb-2">
		          Enter the 6-digit code sent at your email
		        </p>

		        {message && (
		          <p className="text-center text-sm text-red-600 mb-4">{message}</p>
		        )}


		        <form onSubmit={onSubmitHandler} className="flex flex-col items-center">
		          <input
		            type="text"
		            maxLength="6"
		            value={code}
		            onChange={(e) => setCode(e.target.value)}
		            className="text-center text-sm tracking-widest border-2 border-gray-300 focus:outline-none focus:border-[#FF6900] rounded-md p-1 w-2/3 mb-4"
		            placeholder="Enter PIN"
		            required
		          />

		          <input
		            type="password"
		            value={password}
		            onChange={(e) => setPassword(e.target.value)}
		            className="text-center text-sm tracking-widest border-2 border-gray-300 focus:outline-none focus:border-[#FF6900] rounded-md p-1 w-2/3 mb-4"
		            placeholder="Enter New Password"
		            required
		          />

		          <input
		            type="password"
		            value={rePassword}
		            onChange={(e) => setRePassword(e.target.value)}
		            className="text-center text-sm tracking-widest border-2 border-gray-300 focus:outline-none focus:border-[#FF6900] rounded-md p-1 w-2/3 mb-4"
		            placeholder="Re-enter Password"
		            required
		          />

		          <button
		            type="submit"
		            disabled={loading}
		            className="bg-[#FF6900] hover:bg-[#FF6900]/90 text-white font-bold py-2 px-6 rounded-md transition-all duration-200"
		          >
		            { loading ? 'loading...' : 'Verify'}
		          </button>
		        </form>

	    	</div>
	    </div>
	)
}

export default VerifyForgotPassCode