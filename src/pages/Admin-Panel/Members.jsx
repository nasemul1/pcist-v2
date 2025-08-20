import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { UserContext } from "../../context/UserContext";

const Members = () => {
  const { url } = useContext(UserContext);
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [duration, setDuration] = useState(1);

  const slug = localStorage.getItem("slug") || "";
  const token = localStorage.getItem("token") || "";

  // Fetch members
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.post(
          `${url}/user/get-user-list`,
          { slug },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setMembers(response.data.data || []);
        setFilteredMembers(response.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch members ❌");
        setLoading(false);
      }
    };

    fetchMembers();
  }, [url, slug, token]);

  // Search filter
  useEffect(() => {
    if (!search) {
      setFilteredMembers(members);
    } else {
      setFilteredMembers(
        members.filter((m) =>
          m.slug.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, members]);

  // Open membership modal
  const openMembershipModal = (member) => {
    setSelectedMember(member);
    setDuration(1);
    setIsModalOpen(true);
  };

  // Submit membership activation
  const handleMembershipSubmit = async () => {
    if (!selectedMember) return;

    try {
		await axios.post(
			`${url}/user/update-membership-status/${selectedMember._id}`,
			{
				membership: true,
				durationInMonths: duration,
				slug
			},
			{
				headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json"
				}
			}
		);

      // Update member locally
      setMembers((prev) =>
        prev.map((m) =>
          m._id === selectedMember._id
            ? { ...m, membership: true }
            : m
        )
      );
      setFilteredMembers((prev) =>
        prev.map((m) =>
          m._id === selectedMember._id
            ? { ...m, membership: true }
            : m
        )
      );

      setIsModalOpen(false);
    } catch (err) {
      console.error("Membership activation failed:", err);
      alert("Failed to activate membership");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Members List
      </h2>

      {/* Search */}
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search by roll..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md w-full md:w-1/3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-600 animate-pulse">Loading...</p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-red-500 bg-red-100 p-3 rounded">
          {error}
        </p>
      )}

      {/* Members Grid */}
      {!loading && !error && (
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {filteredMembers.map((member) => (
            <motion.div
              key={member._id}
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition cursor-pointer flex flex-col justify-between"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">Roll: {member.slug}</p>
                <span
                  className={`inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full ${
                    member.membership
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {member.membership ? "Active" : "Inactive"}
                </span>
              </div>
              <button
                className="mt-4 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition"
                onClick={() => openMembershipModal(member)}
              >
                Activate Membership
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* No Members */}
      {!loading && !error && filteredMembers.length === 0 && (
        <p className="text-center text-gray-600 mt-4">No members found.</p>
      )}

      {/* Membership Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 relative">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Activate Membership
            </h2>
            <p className="mb-3 text-center">
              Member: {selectedMember?.name}
            </p>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Duration (months)</label>
              <select
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              >
                <option value={1}>1 Month</option>
                <option value={2}>2 Months</option>
                <option value={3}>3 Months</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleMembershipSubmit}
              >
                Activate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Members;
