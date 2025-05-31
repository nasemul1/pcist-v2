import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import side from '../../assets/Others/login.webp'
import ist_logo from '../../assets/IST_logo.gif'
import pcist_logo from '../../../public/vite.svg'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();
  const { url } = useContext(UserContext);

  const [classroll, setClassRoll] = useState('');
  const [password, setPassword] = useState('');
  const [passShow, setPassShow] = useState(true);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto‐hide error after 5 seconds
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(''), 5000);
    return () => clearTimeout(timer);
  }, [message]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!classroll || !password) return;
    setLoading(true);

    try {
      const response = await axios.post(url + '/user/login', { classroll, password });
      // console.log(response.data.user.email);
      if (response.data.status === true) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('slug', response.data.slug);
        navigate('/');
      } else {
        setMessage('Invalid roll or password');
      }
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong. Please try again.');
    } finally{
      setLoading(false);
    }
  }

  // Clear message as soon as user edits inputs
  const handleRollChange = (e) => {
    setClassRoll(e.target.value);
    if (message) setMessage('');
  }
  const handlePassChange = (e) => {
    setPassword(e.target.value);
    if (message) setMessage('');
  }


  return (
    <div className='w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#C2D2E1] to-[#F9C6B0]'>
      <div id="login-card" className='border-4 border-[#FF6900] overflow-hidden w-10/12 h-3/4 text-white bg-white flex rounded-lg drop-shadow-lg'>
        <div id="left-side" className='w-3/6 hidden md:block bg-cover' style={{ backgroundImage: `url(${side})` }} />
        <div id="right-side" className='p-6 w-full md:w-3/6 text-black bg-white md:rounded-r-lg flex flex-col justify-center items-center'>
          <form onSubmit={onSubmitHandler} className='w-full flex flex-col items-center justify-center'>
            {/* Logos */}
            <div className='w-3/4 flex justify-center gap-5'>
              <img src={ist_logo} className='h-[64px] w-[64px]' alt="IST logo" />
              <div className='w-[2px] h-full bg-gray-500' />
              <img src={pcist_logo} className='h-[64px] w-[64px]' alt="pcIST logo" />
            </div>

            <p className='my-5 text-center'>
              <span className='text-[#FF6900] font-semibold'>Login</span> Your Account
            </p>

            {/* Roll input */}
            <input
              onChange={handleRollChange}
              placeholder='Class Roll'
              type="number"
              value={classroll}
              className='mb-2 p-2 w-3/4 bg-inherit border-b-2 border-[#020618] rounded-sm outline-none'
              required
            />

            {/* Password input + toggle */}
            <div className='mb-5 w-3/4 relative flex items-center'>
              <input
                onChange={handlePassChange}
                placeholder='Password'
                type={passShow ? 'password' : 'text'}
                value={password}
                className='w-full p-2 border-b-2 border-[#020618] rounded-sm outline-none'
                required
              />
              <div onClick={() => setPassShow(!passShow)} className='absolute right-0 pr-2 cursor-pointer'>
                {passShow ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>

            {/* Error message */}
            {message && (
              <p className="text-red-400 mb-4">{message}</p>
            )}

            {/* Buttons */}
            <button
              type="submit"
              disabled={loading}
              className='cursor-pointer pl-4 pr-4 pt-2 pb-2 w-3/4 text-white font-bold bg-[#020618] hover:bg-[#020618]/75 border-0 rounded-sm'
            >
              { loading ? "loading..." : "Login"}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className='cursor-pointer mt-2 pl-4 pr-4 pt-2 pb-2 w-3/4 text-[#FF6900] font-bold bg-gray-200 hover:bg-gray-200/75 border-0 rounded-sm'
            >
              Back
            </button>

            {/* Links */}
            <div className='mt-6'>
              <Link to='/' className='text-[#FF6900]'>Home</Link>
              <span className='mx-2'>|</span>
              <Link to='/register' className='text-[#FF6900]'>Create a new account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
