import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:hariyalibazaar7@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to...';
  };

  return (
    <div className='relative overflow-hidden flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-img'>
      {/* Gradient Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0' />
      
      <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center'>
        {/* Animated Logo */}
        <motion.div
          className='mb-8'
        >
          <Image 
            src="/label.png" 
            height={180} 
            width={180} 
            alt="JHFHPL Logo" 
            className="rounded-full shadow-xl" // Enhanced shadow
            style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }} // Glow effect
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} // Text shadow
        >
          JAIVIK HABITAT FARMER <br /> HORTICULTURE PVT. LTD
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-lg md:text-xl lg:text-2xl mb-8'
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }} // Text shadow
        >
          <p>CONTACT US: <a href="tel:8533093254" className="hover:underline">8533093254</a></p>
          <button 
            onClick={handleEmailClick} 
            className="mt-2 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg" // Added shadow
          >
            Email Us
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='overflow-hidden w-full'
        >
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
            className='flex whitespace-nowrap'
          >
            {[...Array(50)].map((_, index) => (
              <span 
                key={index} 
                className='text-8xl mt-16 font-[italiana] font-bold tracking-[5px] mx-4'
                style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }} // Text shadow
              >
                JHFHPL
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
