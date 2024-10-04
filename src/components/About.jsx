import React from 'react';
import { FaLeaf, FaHandshake, FaChartLine } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="min-h-screen w-full py-16 px-8 flex items-center justify-center bg-gray-100">
      <div className="max-w-5xl">
        <h1 className="font-italiana text-5xl lg:text-7xl font-bold mb-8 text-center text-green-800">
          About Us
        </h1>
        <div className="border-b-2 border-green-500 mb-10 w-24 mx-auto"></div>
        <div className="font-barlow text-lg lg:text-xl leading-relaxed text-gray-700 space-y-6">
          <p className="text-center">
            For over 8 years, <span className="font-semibold text-green-600">JAIVIK HABITAT FARMER HORTICULTURE PVT. LTD.</span> has been a trusted provider of high-quality fertilizers and manure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center text-center">
              <FaLeaf className="text-5xl text-green-500 mb-4" />
              <h3 className="font-italiana text-2xl font-bold mb-2">Sustainable Practices</h3>
              <p>Our mission is to enhance soil health and boost crop yields through innovative products.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-5xl text-green-500 mb-4" />
              <h3 className="font-italiana text-2xl font-bold mb-2">Customer Satisfaction</h3>
              <p>We provide expert guidance and support to help farmers achieve their best results.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaChartLine className="text-5xl text-green-500 mb-4" />
              <h3 className="font-italiana text-2xl font-bold mb-2">Diverse Solutions</h3>
              <p>We offer a range of organic and inorganic solutions tailored to meet diverse agricultural needs.</p>
            </div>
          </div>
          <p className="text-center mt-10">
            Join us in growing a sustainable future for agriculture.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
