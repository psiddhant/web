import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.png" height={40} width={40} alt="JHFHPL Logo" className="mr-3" />
              <span className="text-2xl font-bold">JHFHPL</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Enhancing experiences with top-notch agricultural solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Projects'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Employee" className="text-gray-300 hover:text-white transition-colors">
                  Employee Application
                </Link>
              </li>
              <li>
                <Link href="/canteen" className="text-gray-300 hover:text-white transition-colors">
                  Canteen/Distributor Application
                </Link>
              </li>
              <li>
                <Link href="/ContactUs" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="tel:+918533093254" className="text-gray-300 hover:text-white transition-colors">+91 8533093254</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:hariyalibazaar7@gmail.com" className="text-gray-300 hover:text-white transition-colors">hariyalibazaar7@gmail.com</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <span className="text-gray-300">123 Agriculture Street, Green City, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-green-900 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JAIVIK HABITAT FARMER HORTICULTURE PVT. LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
