import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

const ListEvents = () => {
  const { url, events, eventLoading, getEventMessage, getAllEvents } = useContext(UserContext);
  const slug = localStorage.getItem('slug');
  const token = localStorage.getItem('token');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    _id: '',
    eventName: '',
    eventType: '',
    date: '',
    location: '',
    description: ''
  });

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${url}/event/delete_event/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: { slug: slug }
      });

      // Reload or fetch events again if needed
      console.log('Event deleted successfully:', response.data);
      getAllEvents();

    } catch (error) {
      if (error.response) {
        console.error('Error deleting event:', error.response.data.message);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  const openUpdateModal = (event) => {
    setCurrentEvent({
      _id: event._id,
      eventName: event.eventName,
      eventType: event.eventType,
      date: event.date.split('T')[0], // For input type='date'
      location: event.location,
      description: event.description
    });
    setIsModalOpen(true);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}/event/update_event/${currentEvent._id}`, {
        slug: slug,
        eventName: currentEvent.eventName,
        eventType: currentEvent.eventType,
        date: currentEvent.date,
        location: currentEvent.location,
        description: currentEvent.description
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Event updated successfully:', response.data);
      setIsModalOpen(false);
      // Optionally: refresh event list
    } catch (error) {
      if (error.response) {
        console.error('Error updating event:', error.response.data.message);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">All Events</h2>

      {eventLoading && <p className="text-gray-600 text-center">Loading events...</p>}

      {!eventLoading && getEventMessage && (
        <div className="text-red-600 bg-red-100 p-3 rounded mb-4 text-center">
          {getEventMessage}
        </div>
      )}

      {!eventLoading && !getEventMessage && events.length === 0 && (
        <p className="text-gray-600 text-center">No events found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {!eventLoading && !getEventMessage && events.map((event) => (
          <div
            key={event._id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{event.eventName}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Type:</strong> {event.eventType}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
            </div>

            <div className="flex gap-x-5 mt-4">
              <button
                onClick={() => openUpdateModal(event)}
                className="bg-slate-900 text-white px-3 py-1 rounded cursor-pointer transition"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(event._id)}
                className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <h2 className="text-xl font-semibold mb-4 text-center">Update Event</h2>
            <form onSubmit={handleUpdateSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="eventName"
                value={currentEvent.eventName}
                onChange={handleUpdateChange}
                placeholder="Event Name"
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="eventType"
                value={currentEvent.eventType}
                onChange={handleUpdateChange}
                placeholder="Event Type"
                className="border p-2 rounded"
                required
              />
              <input
                type="date"
                name="date"
                value={currentEvent.date}
                onChange={handleUpdateChange}
                className="border p-2 rounded"
                required
              />
              <select
                name="location"
                value={currentEvent.location}
                onChange={handleUpdateChange}
                required
                className="w-full border px-3 py-2 rounded"
              >
                <option value="" disabled>Select Location</option>
                <option value="Campus">Campus</option>
                <option value="Online">Online</option>
              </select>
              <textarea
                name="description"
                value={currentEvent.description}
                onChange={handleUpdateChange}
                placeholder="Description"
                className="border p-2 rounded"
                required
              ></textarea>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListEvents;
