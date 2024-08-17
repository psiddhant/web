import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image';

const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=hariyalibazaar7@gmail.com&su=Inquiry&body=Hello,%20I%20would%20like%20to...';
  };

  return (
    <div className='relative overflow-x-hidden items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50' />
      <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center'>
        {/* Animated Image */}
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className='mb-6'
        >
          <Image src="/label.png" height={200} width={200} />
        </motion.div>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight'>
          JAIVIK HABITAT FARMER HORTICULTURE <br /> PVT. LTD
        </h2>
        <p className='text-base md:text-lg lg:text-xl'>
          CONTACT US : 8533093254  | 
          <button 
            onClick={handleEmailClick} 
            className="text-white"
          >
            Email Us
          </button>
        </p>
        <div className='flex gap-9 mt-5'>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className='text-5xl font-[italiana] font-bold tracking-[5px]'
          >
            JHFHPL
          </motion.h1>
          <motion.h1    initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}    className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1    initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}    className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1    initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}    className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1    initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}    className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          <motion.h1     initial={{x:"0",}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:15 ,repeat:Infinity}}   className='text-5xl font-[italiana] font-bold tracking-[5px]'>
            JHFHPL
          </motion.h1>
          {/* Repeat the above motion.h1 as needed */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
