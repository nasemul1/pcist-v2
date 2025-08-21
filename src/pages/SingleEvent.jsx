import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const SingleEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [Name, setName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [memberEmails, setMemberEmails] = useState(["", "", ""]);
  const [submitting, setSubmitting] = useState(false);
  const [eventType, setEventType] = useState("");

  const url = import.meta.env.VITE_BACKEND_URL;
  const slug = localStorage.getItem("slug");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${url}/event/get_one_event/${id}`);
        setEvent(response.data.data);
        setEventType(response.data.eventType)
        console.log("Event data:", response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const handleRegister = async () => {
    if (eventType === "solo") {
      if (!Name) return alert("Please enter your name.");
    } else if (eventType === "team") {
      if (!teamName) return alert("Please enter team name.");
      if (memberEmails.some((email) => !email))
        return alert("Please enter all 3 member emails.");
    }
    try {
      setSubmitting(true);
      if (eventType === "solo") {
        await axios.post(
          `${url}/event/register_for_solo_event/${id}`,
          { Name, slug },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else if (eventType === "team") {
        await axios.post(
          `${url}/event/register_for_team_event/${id}`,
          {
            teamName,
            members,
            slug,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      alert("Registered successfully!");
      setShowModal(false);
      setName("");
      setTeamName("");
      setMemberEmails(["", "", ""]);
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response && error.response.status === 403) {
        alert("You are not authorized to register for this event. Please check your membership or login status.");
      } else {
        alert("Registration failed. Try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>;
  if (!event) return <p className="text-center mt-20 text-xl">Event not found</p>;

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="w-full h-72 relative">
        <img
          src={event.images?.[0]?.url || "/placeholder.jpg"}
          alt={event.eventName}
          className="w-full h-full object-cover rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {event.eventName}
          </h1>
          <p className="text-white mt-2 text-lg md:text-xl drop-shadow">
            📅 {formatDate(event.date)} | 📍 {event.location}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-12 px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Details */}
        <motion.div
          className="md:col-span-2 bg-white rounded-2xl shadow-md p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About this event
          </h2>
          <p className="text-gray-700 leading-relaxed">{event.description}</p>

          <div className="mt-6 space-y-2 text-gray-600">
            <p>
              <strong>Date:</strong> {formatDate(event.date)}
            </p>
            <p>
              <strong>Registration Deadline:</strong>{" "}
              {formatDate(event.registrationDeadline)}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Membership Required:</strong>{" "}
              {event.needMembership ? "Yes" : "No"}
            </p>
          </div>

          {/* Members */}
          {event.registeredMembers?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Registered Members:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {event.registeredMembers.map((m, i) => (
                  <li key={i}>{m.name}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Teams */}
          {event.registeredTeams?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Registered Teams:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {event.registeredTeams.map((t, i) => (
                  <li key={i}>{t.name}</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Right: Side Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Event Highlights
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Exciting activities</li>
              <li>Networking opportunities</li>
              <li>Exclusive content</li>
            </ul>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Register Now
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Register for {event.eventName}
            </h2>
            {eventType === "solo" ? (
              <>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {memberEmails.map((email, idx) => (
                  <input
                    key={idx}
                    type="email"
                    placeholder={`Member ${idx + 1} Email`}
                    value={email}
                    onChange={(e) => {
                      const updated = [...memberEmails];
                      updated[idx] = e.target.value;
                      setMemberEmails(updated);
                    }}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                ))}
              </>
            )}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setName("");
                  setTeamName("");
                  setMemberEmails(["", "", ""]);
                }}
                className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleRegister}
                disabled={submitting}
                className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                {submitting ? "Registering..." : "Submit"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SingleEvent;