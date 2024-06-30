import React from 'react'

const Hero = () => {
  return (
    <div className='flex overflow-x-hidden items-center justify-center h-screen mb-12 bg-fixed bg-center z-[70] bg-cover bg-img'>
    {/* Overlay */}
    <div className='absolute top-2  left-0 right-0 bottom-0 ' />
    <div className='p-5 text-white z-[2] mt-[-10rem] text-center'>
      <h2 className='lg:text-5xl text-4xl font-bold mt-16'>JAIVIK HABITAT FARMER HORTICULTURE <br /> PVT.LTD</h2>
    </div>
  </div>
  )
}

export default Hero
