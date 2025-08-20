import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://ist.edu.bd/wp-content/uploads/2021/10/NASA-Space-Apps-2015.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/ACM-ICPC-1.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NGPC-IUPC.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NASA-Space-Apps-2015_3.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/Google-DEV-FEST-2015.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NCPC-2018.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/12219517_10205395078617979_8315097649185331553_n.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NASA-Space-Apps-2016.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NGPC-2018-Position-18th.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NGPC-2019_2-.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NCPC-2015.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/National-Hackathon-2014.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/Power-Energy-Hackathon-2017.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NGPC-2017.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NASA-Space-Apps-2017.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/NASA-Space-Apps-2015_2.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/IUT-IUPC-2015.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/BUET-IUPC-2018.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/Code-Warriors-Challenge-Runner-Up-2015_1.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/IUGPC-2018.jpg',
  'https://ist.edu.bd/wp-content/uploads/2021/10/Code-Warriors-Challenge-Runner-Up-2015.jpg'
];

const GalleryGrid = () => {
  const [popupImage, setPopupImage] = useState(null);

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
            className={`overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-transform`}
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
              onClick={(e) => e.stopPropagation()} // Prevent closing on image click
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
