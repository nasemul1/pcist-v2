import React, { useState } from 'react';

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
      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-6xl">
        {images.map((src, index) => (
          <div
            key={index}
            className={`overflow-hidden ${
              index === 0 ? 'row-span-2 col-span-2' : ''
            }`}
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setPopupImage(src)}
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setPopupImage(null)}
        >
          <img
            src={popupImage}
            alt="popup"
            className="max-w-full max-h-full object-contain p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
          />
          <button
            onClick={() => setPopupImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
