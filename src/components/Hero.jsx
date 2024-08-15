import Link from 'next/link'
import React from 'react'

const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=your-email@example.com&su=Inquiry&body=Hello,%20I%20would%20like%20to...';
  };
  return (
    <div className='relative overflow-x-hidden items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50' />
      <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center'>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight'>
          JAIVIK HABITAT FARMER HORTICULTURE <br /> PVT. LTD
        </h2>
        <p className='text-base md:text-lg lg:text-xl'>
          CONTACT US : 8533093254  | <button 
          onClick={handleEmailClick} 
          className=" text-white   rounded "
        >
         Email Us
        </button>
        </p>
      </div>
    </div>
  )
}

export default Hero
