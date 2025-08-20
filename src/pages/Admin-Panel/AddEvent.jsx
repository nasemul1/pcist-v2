import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

const AddEvent = () => {
  const { url } = useContext(UserContext);

  const [formData, setFormData] = useState({
    eventName: '',
    eventType: '',
    date: '',
    registrationDeadline: '',
    location: '',
    description: '',
    needMembership: false,
  });

  const [images, setImages] = useState([]);
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
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const data = new FormData();
      const slug = localStorage.getItem('slug') || '';
      const token = localStorage.getItem('token') || '';

      // append slug
      data.append('slug', slug);

      // append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        // API expects string "true"/"false", not boolean
        if (typeof value === 'boolean') {
          data.append(key, value ? 'true' : 'false');
        } else {
          data.append(key, value);
        }
      });

      // append multiple images
      images.forEach((img) => {
        data.append('images', img);
      });

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

      setMessage(res.data.message || 'Event created successfully!');
      setFormData({
        eventName: '',
        eventType: '',
        date: '',
        registrationDeadline: '',
        location: '',
        description: '',
        needMembership: false,
      });
      setImages([]);
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

      <form
        onSubmit={handleSubmit}
        className="space-y-5 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-100"
      >
        {/* Event Name */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1 text-sm">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 outline-none transition"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1 text-sm">
            Event Type
          </label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 outline-none transition bg-white"
          >
            <option value="">Select Type</option>
            <option value="solo">Solo</option>
            <option value="team">Team</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1 text-sm">
            Date & Time
          </label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 outline-none transition"
          />
        </div>

        {/* Registration Deadline */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1 text-sm">
            Registration Deadline (Date & Time)
          </label>
          <input
            type="datetime-local"
            name="registrationDeadline"
            value={formData.registrationDeadline}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 outline-none transition"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1 text-sm">
            Location
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 outline-none transition bg-white"
          >
            <option value="">Select Location</option>
            <option value="ist_auditorium">IST Auditorium</option>
            <option value="lab1">Lab 1</option>
            <option value="lab2">Lab 2</option>
            <option value="online">Online</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-800 font-semibold mb-1 text-sm">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 outline-none transition"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Images
          </label>
          <div className="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-orange-400 rounded-sm cursor-pointer bg-orange-50 hover:bg-orange-100 transition">
            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="imageUpload"
            />
            <label
              htmlFor="imageUpload"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-300 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3M12 12V3"
                />
              </svg>
              <span className="text-sm text-gray-500 font-medium">
                Click to upload images
              </span>
              <span className="text-xs text-gray-500">
                PNG, JPG up to 5MB
              </span>
            </label>
          </div>

          {/* Show preview */}
          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-3">
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="h-20 w-full object-cover rounded-sm border border-orange-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Need Membership */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="needMembership"
            checked={formData.needMembership}
            onChange={handleChange}
            className="h-4 w-4 text-orange-500 border-gray-300 rounded-sm focus:ring-orange-400"
          />
          <label className="ml-2 text-sm text-gray-700 font-medium">
            Membership Required
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 font-semibold rounded-sm hover:bg-orange-600 active:bg-orange-700 transition"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
