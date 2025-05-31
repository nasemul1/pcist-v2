import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { url } = useContext(UserContext);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const slug = localStorage.getItem('slug');

  useEffect(() => {
    if (!token || !slug) {
      navigate('/login'); // redirect to login if not authenticated
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.post(
          `${url}/user/get-user-data`,
          { slug },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setProfile(res.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, slug, url, navigate]);

  if (loading) return <div className="text-center py-10 text-lg">Loading...</div>;
  if (!profile) return <div className="text-center py-10 text-red-500">Failed to load profile</div>;

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="mt-15 sm:mt-0 border-4 border-[#FF6900] w-full max-w-6xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Panel */}
        <div className="w-full md:w-1/3 lg:border-r p-6 flex flex-col items-center">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${profile.name}`}
            alt="Avatar"
            className="w-32 h-32 rounded-full shadow-md"
          />
          <h2 className="text-xl font-bold mt-4">{profile.name}</h2>
          <p className="text-sm text-gray-500">{profile.dept} Department</p>
          <p className="mt-1 text-sm text-gray-400">Batch: {profile.batch}</p>

          <div className="mt-6 w-full">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">Coding Handles</h3>
            <ul className="text-sm space-y-1 text-gray-600">
              <li>Codeforces: {profile.cfhandle}</li>
              <li>CodeChef: {profile.cchandle}</li>
              <li>AtCoder: {profile.atchandle}</li>
            </ul>
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">T-Shirt Size</h3>
            <p className="text-sm text-gray-600">{profile.tshirt}</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-2/3 p-8 overflow-auto">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Profile Details</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Info label="Class Roll" value={profile.classroll} />
              <Info label="Membership" value={profile.membership ? 'Active' : 'Inactive'} />
              <Info label="Email" value={profile.email} />
              <Info label="Phone" value={profile.phone} />
              <Info label="Gender" value={profile.gender} />
              <Info label="Password" value="********" />
            </div>
          </div>

          {/* You can remove this section or add more info here */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Badges:</h2>
            <p className="text-sm text-gray-500 mt-2">No badges achieved yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="border p-4 rounded-lg bg-gray-50">
    <p className="text-xs text-gray-500">{label}</p>
    <p className="text-sm font-medium text-gray-800">{value}</p>
  </div>
);

export default Profile;
