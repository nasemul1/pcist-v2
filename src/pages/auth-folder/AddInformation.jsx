import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const AddInformation = () => {

  const { url } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const slug = localStorage.getItem('slug');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token || !slug) {
      navigate('/login');
    }
  }, [token, slug, navigate]);

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

      if (response.data.name) {
        navigate('/profile');
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
    checkVerification();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    profileimage: '',
    gender: '',
    tshirt: '',
    batch: '',
    dept: '',
    cfhandle: '',
    atchandle: '',
    cchandle: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if(!formData) return;

    setLoading(true);
    try {
      const response = await axios.put(
        `${url}/user/update-profile`,
        { ...formData, slug },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.status) {
        setMessage('User updated successfully!');
        navigate('/profile');
      } else {
        setMessage(response.data.message || 'Update failed.');
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || 'Something went wrong.';
      setMessage(errorMsg);
      console.log(error);
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center bg-gradient-to-r from-[#C2D2E1] to-[#F9C6B0]">
      <div className="border-4 border-[#FF6900] overflow-hidden w-11/12 max-w-6xl h-[90%] text-black bg-white flex flex-col items-center justify-center rounded-lg drop-shadow-lg p-4 md:p-6">
        <h3 className='text-xl md:text-2xl font-semibold text-center text-[#FF6900] mb-4'>Enter Your Detail Information</h3>
        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-y-auto px-2 md:px-4"
        >
          <Input label="Full Name* " name="name" value={formData.name} onChange={handleChange} required />
          <Input label="Phone*" name="phone" value={formData.phone} onChange={handleChange} required />
          <Select label="Gender*" name="gender" value={formData.gender} onChange={handleChange} options={['Male', 'Female', 'Other']} required />
          <Select label="T-Shirt Size*" name="tshirt" value={formData.tshirt} onChange={handleChange} options={['S', 'M', 'L', 'XL', 'XXL']} required/>
          <Input label="Batch* (Ex: 28,29,30,31)" name="batch" type="number" value={formData.batch} onChange={handleChange} required />
          <Select label="Department*" name="dept" value={formData.dept} onChange={handleChange} options={['CSE', 'EEE', 'BBA', 'DIPLOMA']} required/>
          <Input label="Codeforces Handle" name="cfhandle" value={formData.cfhandle} onChange={handleChange} />
          <Input label="AtCoder Handle" name="atchandle" value={formData.atchandle} onChange={handleChange} />
          <Input label="CodeChef Handle" name="cchandle" value={formData.cchandle} onChange={handleChange} />

          <div className='flex items-center'>
          	<Link to='/oj-help' className='text-blue-500 hover:text-red-500'>How to get Codeforces, Atcoder, CodeChef handle?</Link>
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              // onClick={handleSubmit}
              className="bg-[#FF6900] text-white font-bold py-2 px-6 rounded-md hover:bg-[#FF6900]/90 transition-all cursor-pointer"
            >
              {loading ? 'loading...' :'Submit'}
            </button>
          </div>

          {message && (
            <div className="col-span-1 md:col-span-2 text-center text-red-600 font-semibold">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = 'text', required }) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="border rounded-md p-2"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="border rounded-md p-2"
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default AddInformation;
