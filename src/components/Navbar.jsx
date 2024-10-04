"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { href: "/", text: "Home" },
  { href: "/#about", text: "About" },
  { href: "/#Products", text: "Products" },
  { href: "/projects", text: "Projects" },
  { href: "/Employee", text: "Employee" },
  { href: "/canteen", text: "Canteen/Distributor" },
  { href: "/ContactUs", text: "ContactUs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl text-teal-600 font-bold">JHFHPL</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Desktop menu items */}
              {navItems.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-teal-600 hover:text-gray-600">
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile menu items */}
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} mobile />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ href, text, mobile }) => (
  <Link href={href}>
    <span className={`text-teal-600 hover:text-gray-600 ${mobile ? 'block' : 'inline-block'} px-3 py-2 rounded-md text-sm font-medium`}>
      {text}
    </span>
  </Link>
);

export default Navbar;