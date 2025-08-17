import React from 'react';
import { motion } from 'framer-motion';
import micro from '../assets/logo/microsoft.png';
import samsung from '../assets/logo/samsung.png';
import werner from '../assets/logo/warner.svg';
import bkash from '../assets/logo/bkash.png';
import robi from '../assets/logo/robi.png';
import trivago from '../assets/logo/trivago.png';
import well from '../assets/logo/welldev.png';
import tw from '../assets/logo/tw.png';

const logos = [micro, samsung, werner, bkash, robi, trivago, well, tw];

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden py-6 bg-gray-50">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear'
          }
        }}
      >
        {/* Duplicate logos to make infinite scroll seamless */}
        {logos.concat(logos).map((logo, idx) => (
          <div key={idx} className="mx-10 flex items-center justify-center">
            <img src={logo} alt={`logo-${idx}`} className="h-6 object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
