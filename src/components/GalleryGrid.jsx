import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserContext } from '../context/UserContext';

const GalleryGrid = () => {
  const [images, setImages] = useState([]);
  const [popupImage, setPopupImage] = useState(null);
  const { url } = useContext(UserContext);

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(url+'/event/fetch_gallery_images'); // replace 'url' with your base API
        const data = await response.json();
        console.log('Fetched images:', data);
        if (data.images) {
          // Map to just URLs for simplicity
          setImages(data.images.map(img => img.url));
        }
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="p-4 flex items-center justify-center">
      {/* Masonry Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl">
        {images.map((src, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-transform"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover"
              onClick={() => setPopupImage(src)}
            />
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {popupImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setPopupImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={popupImage}
              alt="popup"
              className="max-w-full max-h-full object-contain p-4 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryGrid;
