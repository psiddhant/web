"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-10 lg:mt-3 mt-2 items-center  ml-5 backdrop-blur-md shadow-md fixed lg:w-[900px] md:w-[700px] w-[300px] rounded-lg
     z-10 top-0">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
       <Link  href={"/"}>       <h1 className="text-xl text-white font-bold">JHFHPL</h1></Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <h1 className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</h1>
                </Link>
                <Link href="#about">
                  <h1 className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About</h1>
                </Link>
                <Link href="#Products">
                  <h1 className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Products</h1>
                </Link>
                <Link href="/projects">
                  <h1 className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Projects</h1>
                </Link>
                <Link href="/Employee">
                  <h1 className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Employee</h1>
                </Link>
                <Link href="/canteen">
                  <h1 className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Canteen/Distributor</h1>
                </Link>
                <Link href="#contact">
                  <h1 className="text-white hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Contact</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <li className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Home</li>
            </Link>
            <Link href="#about">
              <li className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">About</li>
            </Link>
            <Link href="/Employee">
              <li className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Employee</li>
            </Link>
            <Link href="#products">
              <li className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Products</li>
            </Link>
            <Link href="/projects">
              <li className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Projects</li>
            </Link>
            <Link href="/canteen">
              <li className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Canteen/Distributor</li>
            </Link>
            <Link href="#contact">
              <li className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Contact</li>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
