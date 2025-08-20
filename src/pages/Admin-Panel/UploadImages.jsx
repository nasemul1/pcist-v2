import React, { useState, useContext } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { UserContext } from "../../context/UserContext";

const UploadImages = () => {
  const { url } = useContext(UserContext);
  const token = localStorage.getItem("token") || "";

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection
  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  // Submit images to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      setMessage("Please select images first!");
      return;
    }

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    images.forEach((img) => {
      formData.append("images", img);
    });

    try {
      const res = await axios.post(`${url}/event/upload_images_to_gallery`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage(res.data.message || "Images uploaded successfully!");
      setImages([]);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Failed to upload images ❌");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Upload Images to Gallery
      </h2>

      {/* Message */}
      {message && (
        <p
          className={`text-center p-3 mb-4 rounded ${
            message.includes("❌") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* File Input */}
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-orange-400 rounded-2xl cursor-pointer bg-orange-50 hover:bg-orange-100 transition">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="galleryUpload"
          />
          <label htmlFor="galleryUpload" className="flex flex-col items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-gray-300 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3M12 12V3" />
            </svg>
            <span className="text-sm text-gray-500 font-medium">Click to select images</span>
            <span className="text-xs text-gray-500">PNG, JPG, up to 5MB</span>
          </label>
        </div>

        {/* Preview Selected Images */}
        {images.length > 0 && (
          <motion.div
            className="grid grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="relative rounded-lg overflow-hidden border border-orange-300"
                whileHover={{ scale: 1.05 }}
              >
                <img src={URL.createObjectURL(img)} alt="preview" className="w-full h-32 object-cover" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white py-2 font-semibold rounded-lg hover:bg-orange-600 transition"
        >
          {loading ? "Uploading..." : "Upload Images"}
        </button>
      </form>
    </div>
  );
};

export default UploadImages;
