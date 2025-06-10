import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

const ListEvents = () => {
  const { url, events, eventLoading, getEventMessage } = useContext(UserContext);
  const slug = localStorage.getItem('slug');
  const token = localStorage.getItem('token');

  const handleDelete = async (id) => {
    // console.log('Delete event with ID:', id);
    
    try {
        const response = await axios.delete(`${url}/event/delete_event/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: { slug: slug }
        });

        // if(response.status==200){
          
        // }
        // console.log('Event deleted successfully:', response.data);

    } catch (error) {
        if (error.response) {
            console.error('Error deleting event:', error.response.data.message);
        } else {
            console.error('Error:', error.message);
        }
    }
  };

  const handleUpdate = (id) => {
    console.log('Update event with ID:', id);
    // TODO: Navigate to update page or open update modal here
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">All Events</h2>

      {/* Loading State */}
      {eventLoading && (
        <p className="text-gray-600 text-center">Loading events...</p>
      )}

      {/* Error Message */}
      {!eventLoading && getEventMessage && (
        <div className="text-red-600 bg-red-100 p-3 rounded mb-4 text-center">
          {getEventMessage}
        </div>
      )}

      {/* No Events Found */}
      {!eventLoading && !getEventMessage && events.length === 0 && (
        <p className="text-gray-600 text-center">No events found.</p>
      )}

      {/* Events List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {!eventLoading &&
          !getEventMessage &&
          events.map((event) => (
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

              {/* Buttons */}
              <div className=" flex gap-x-5 mt-4">
                <button
                  onClick={() => handleUpdate(event._id)}
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
    </div>
  );
};

export default ListEvents;
