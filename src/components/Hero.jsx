import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
   <div>
     <div className='   overflow-x-hidden items-center justify-center h-screen mb-12 bg-fixed bg-center z-[70] bg-cover bg-img'>
    {/* Overlay */}
    <div className='absolute top-2  left-0 right-0 bottom-0 ' />
    <div className='p-5 text-white z-[2] mt-[-10rem] text-center'>
      <h2 className='lg:text-5xl text-4xl font-bold mt-16'>JAIVIK HABITAT FARMER HORTICULTURE <br /> PVT.LTD</h2>
      <p className='mt-2'>CONTACT:8533093254 | EMAIL:hariyalibazaar7@jhfhpl.com</p>
    </div>
   
  {/* <div className=' line'>
      <div className='hello'>
      <div>Home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
          <div>home</div>
      </div>
    </div> */}
  </div>

   </div>
  )
}

export default Hero
