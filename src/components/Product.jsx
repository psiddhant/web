import React from 'react'

const Product = () => {
  return (
    <div id='Products' className='h-screen  lg:mt-0 text-white'> 
      <main>
        <div className="top mt-9">
            <h1 className='uppercase text-4xl text-center font-extrabold shadow-inherit '>products</h1>
        </div>
        <div className="sha"></div>
        <div className="bottom lg:pl-28 pt-40 flex-wrap pl-[70px] flex gap-20">
            <div className="card h-80 overflow-hidden   bg-[#D9D9D9]  bg-opacity-10 w-64 rounded-lg">
                <div className="img h-44 pt-3    text-black items-center flex justify-center w-64">
                    <div className="h-40 w-56 rounded-lg
                    bg-opacity-20 bg-slate-600 items-center"></div>
                </div>
                <h1 className='pt-6 pl-4'>title</h1>
                <p className='pl-4'>desc</p>
            </div>
            <div className="card h-80 overflow-hidden   bg-[#D9D9D9]  bg-opacity-10 w-64 rounded-lg">
                <div className="img h-44 pt-3    text-black items-center flex justify-center w-64">
                    <div className="h-40 w-56 rounded-lg
                    bg-opacity-20 bg-slate-600 items-center"></div>
                </div>
                <h1 className='pt-6 pl-4'>title</h1>
                <p className='pl-4'>desc</p>
            </div>
            <div className="card h-80 overflow-hidden   bg-[#D9D9D9]  bg-opacity-10 w-64 rounded-lg">
                <div className="img h-44 pt-3    text-black items-center flex justify-center w-64">
                    <div className="h-40 w-56 rounded-lg
                    bg-opacity-20 bg-slate-600 items-center"></div>
                </div>
                <h1 className='pt-6 pl-4'>title</h1>
                <p className='pl-4'>desc</p>
            </div>
            <div className="card h-80 overflow-hidden   bg-[#D9D9D9]  bg-opacity-10 w-64 rounded-lg">
                <div className="img h-44 pt-3    text-black items-center flex justify-center w-64">
                    <div className="h-40 w-56 rounded-lg
                    bg-opacity-20 bg-slate-600 items-center"></div>
                </div>
                <h1 className='pt-6 pl-4'>title</h1>
                <p className='pl-4'>desc</p>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Product
