import React, { useContext, useEffect, useRef, useState } from 'react';
import ist_logo from '../../assets/IST_logo.gif';
import pcist_logo from '../../assets/vite.svg';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {

  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const { url, didSendCode } = useContext(UserContext);
  const token = localStorage.getItem('token');
  const slug = localStorage.getItem('slug');

  useEffect(() => {
    if (!token || !slug) {
      navigate('/login');
    }
  }, [token, slug, navigate]);

  const sendVerificationCode = async () => {
    try {
      const response = await axios.post(
        `${url}/user/send-verification-email`,
        { slug }, // sending both email and slug in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // use Bearer token format
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.status) {
        setMessage('Verification code sent successfully.');
      } else {
        setMessage(response.data.message || 'Failed to send code');
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'Something went wrong.';
      console.error('Error sending code:', errorMsg);
      setMessage(errorMsg);
    }
  };

  const checkVerification = async () => {

    try{
      const response = await axios.post(
        `${url}/user/get-user-data`,
        { slug },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      )

      if (response.data.is_email_verified === false) {
        sendVerificationCode();
      } else {
        // setMessage(response.data.message || 'Failed to send code');
        // console.log(error);
        navigate('/');
      }
    }
    catch(error){
      const errorMsg =
        error.response?.data?.message || 'Something went wrong.';
      console.error('Error sending code:', error);
      setMessage(errorMsg);
    }
  }

  useEffect(() => {
    if (!didSendCode.current) {
      checkVerification();
      // sendVerificationCode();
      didSendCode.current = true;
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post(
        `${url}/user/verify-user`,
        { slug, code }, // sending both pin and slug in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // use Bearer token format
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.status) {
        setMessage('User Verified');
        navigate('/add-information');
      } else {
        setMessage(response.data.message || 'Failed to verify user');
      }
    }
    catch(error) {
      const errorMsg =
        error.response?.data?.message || 'Something went wrong.';
      console.error('Error sending code:', errorMsg);
      setMessage(errorMsg);
    }
  };

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
          Enter the 6-digit code sent to your email
        </p>

        {/*{message && (
          <p className="text-center text-sm text-red-600 mb-4">{message}</p>
        )}*/}

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            maxLength="6"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="text-center text-xl tracking-widest border-2 border-gray-300 focus:outline-none focus:border-[#FF6900] rounded-md p-2 w-2/3 mb-4"
            placeholder="Enter PIN"
            required
          />
          <button
            type="submit"
            className="bg-[#FF6900] hover:bg-[#FF6900]/90 text-white font-bold py-2 px-6 rounded-md transition-all duration-200"
          >
            Verify
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Didn't receive the code?{' '}
          <button
            className="text-[#FF6900] underline"
            onClick={sendVerificationCode}
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
