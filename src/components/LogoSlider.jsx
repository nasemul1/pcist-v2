import React from 'react'
import '../components/css/style.css'
import micro from '../assets/logo/microsoft.png'
import samsung from '../assets/logo/samsung.png'
import werner from '../assets/logo/warner.svg'
import bkash from '../assets/logo/bkash.png'
import robi from '../assets/logo/robi.png'
import trivago from '../assets/logo/trivago.png'
import well from '../assets/logo/welldev.png'
import tw from '../assets/logo/tw.png'

const logos = [
  micro, samsung, werner, bkash, robi, trivago, well, tw
];

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex w-max animate-scroll space-x-20">
        {/* Duplicate logos to create a seamless infinite effect */}
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="Logo" className="h-5" />
        ))}
      </div>
    </div>
  )
}

export default LogoSlider