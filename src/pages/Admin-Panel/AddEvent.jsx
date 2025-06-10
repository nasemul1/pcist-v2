import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

const AddEvent = () => {

  const { url } = useContext(UserContext);

  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    date: '',
    location: '',
    description: '',
    needMembership: false, // new field added
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const data = new FormData();
    const slug = localStorage.getItem('slug');

    data.append('slug', slug);
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (image) {
      data.append('image', image);
    }

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${url}/event/add_event`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setMessage(res.data.message);
      setFormData({
        eventName: '',
        eventType: '',
        date: '',
        location: '',
        description: '',
        needMembership: false, // reset the new field
      });
      setImage(null);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg p-6 max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Add New Event</h2>

      {message && (
        <div className="mb-4 text-sm text-white bg-[#FF6900] p-2 rounded">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="eventType"
          placeholder="Event Type"
          value={formData.eventType}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option value="" disabled>Select Location</option>
          <option value="Campus">Campus</option>
          <option value="Online">Online</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />

        {/* New Checkbox Field */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="needMembership"
            checked={formData.needMembership}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <span>Need Membership?</span>
        </label>

        <div className="w-full">
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded cursor-pointer p-4 hover:border-[#FF6900] transition-colors">
            <span className="text-gray-500 mb-2">Click to upload an event image</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {image ? (
              <p className="text-green-600 text-sm mt-2">{image.name}</p>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4M21 16v-4a4 4 0 00-4-4H5a4 4 0 00-4 4v4m0 4h16a4 4 0 004-4v-4"
                />
              </svg>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#FF6900] text-white px-4 py-2 rounded cursor-pointer"
        >
          {loading ? 'Creating...' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
