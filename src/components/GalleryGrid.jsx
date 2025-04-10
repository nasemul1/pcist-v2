import React from 'react';
import img from '../assets/hero.jpg';

const images = [
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img,
  img
];

const GalleryGrid = () => {
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-w-6xl">
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
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;