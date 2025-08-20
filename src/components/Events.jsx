import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { motion } from "framer-motion";

const Events = ({event, place}) => {
  let events;
  if(event === "Solo") {
    const { soloEvents } = useContext(UserContext);
    events = soloEvents;
  } else if(event === "Team") {
    const { teamEvents } = useContext(UserContext); 
    events = teamEvents;
  }
  const trimmedEvents = events.slice(0, 3);

  // date formatting function
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex items-center justify-center bg-dark-900">
      <div className={`${place ==='Home' ? 'py-12' : 'py-6'} w-full lg:w-[85%]`}>
        {/* Heading */}
        <div className="mb-5 flex flex-col items-center gap-2">
          <h3 className="text-2xl text-center font-semibold">Upcoming {event} Events</h3>
          <hr className="w-[240px] border border-orange-500" />
        </div>

        {/* Event Cards */}
        <div className="mt-10 px-5 lg:px-0 flex flex-wrap items-center justify-center gap-6">
          {trimmedEvents &&
            trimmedEvents.map((event, index) => (
              <motion.div
                key={event._id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="w-full md:w-[270px] bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                <img
                  className="w-full h-40 object-cover"
                  src={event.images?.[0]?.url || "/placeholder.jpg"}
                  alt={event.eventName}
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{formatDate(event.date)}</p>
                  <h3 className="mt-2 text-lg font-semibold text-gray-800 line-clamp-2">
                    {event.eventName}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                    {event.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">📍 {event.location}</p>
                  <Link
                    to={`/events/${event._id}`}
                    className="px-5 py-1 inline-block mt-3 text-sm rounded-md bg-orange-500 text-white hover:bg-orange-600 transition"
                  >
                    Register
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>

        {/* See More */}
        { place === "Home" &&
          <div className="mt-12 flex">
            <Link
              to="/events"
              className="mx-auto px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full font-medium shadow-md transition-all"
            >
              See More
            </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Events;
