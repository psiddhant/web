'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  { id: 1, name: 'EFFCO-AH GROWTH PLUS', description: 'High-quality potash fertilizer for improved crop yield and quality.', image: '/assets/1.jpg', details: 'EFFCO-AH POTASH is a premium potassium fertilizer designed to enhance crop growth, improve fruit quality, and increase overall yield. It is easily absorbed by plants and helps in strengthening cell walls, improving disease resistance, and regulating water balance.' },
  { id: 2, name: 'EFFCO-AH KILLER PLUS', description: 'Organic bio-fertilizer for sustainable agriculture.', image: '/assets/2.jpg', details: 'EFFCO-AH BIO-DOP is an innovative organic bio-fertilizer that promotes sustainable agriculture. It contains beneficial microorganisms that improve soil health, enhance nutrient uptake, and stimulate plant growth naturally.' },
  { id: 3, name: 'EFFCO-AH MICRO-PLUS', description: 'Zinc-rich fertilizer for micronutrient deficiency correction.', image: '/assets/3.jpg', details: 'EFFCO-AH MONO-ZINC is a specialized fertilizer that addresses zinc deficiency in crops. It plays a crucial role in enzyme production, protein synthesis, and overall plant metabolism, leading to improved crop health and yield.' },
  { id: 4, name: 'EFFCO-AH PROM PLUS', description: 'Enzyme-based soil conditioner for improved nutrient absorption.', image: '/assets/4.jpg', details: 'EFFCO-AH ZYME is an advanced enzyme-based soil conditioner that enhances nutrient absorption and improves overall soil health. It helps break down organic matter, making nutrients more readily available to plants and promoting stronger root development.' },
  { id: 5, name: 'EFFCO-AH SULF-90', description: 'Sulfur-rich fertilizer for balanced crop nutrition.', image: '/assets/5.jpg', details: 'EFFCO-AH SULPHER is a sulfur-rich fertilizer that provides essential nutrients for balanced crop nutrition. Sulfur is crucial for chlorophyll formation, protein synthesis, and overall plant metabolism, resulting in healthier crops and improved yield.' },
  { id: 6, name: 'EFFCO-AH ZINC MONO', description: 'Complete plant nutrition solution for optimal growth.', image: '/assets/6.jpg', details: 'EFFCO-AH KORAGAN is a comprehensive plant nutrition solution that provides a balanced mix of essential nutrients. It promotes optimal growth, improves crop quality, and enhances overall plant health throughout the growing season.' },
];

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id === parseInt(params.id));
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    quantity: 1,
  });
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center font-barlow text-xl text-gray-700">Product not found</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setMessage('');

    try {
      const response = await fetch('/api/bookProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productName: product.name,
          productId: product.id,
        }),
      });
      
      if (response.ok) {
        setMessage('Booking successful!');
        setFormData({ name: '', address: '', phoneNumber: '', quantity: 1 });
      } else {
        const errorData = await response.json();
        setMessage(`Booking failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br pt-32 from-orange-50 to-orange-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h1 className="absolute bottom-4 left-4 right-4 font-italiana text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              {product.name}
            </h1>
          </div>
          
          <div className="p-4 sm:p-6 md:p-8">
            <p className="font-barlow text-lg sm:text-xl md:text-2xl text-orange-600 mb-4">
              {product.description}
            </p>
            <p className="font-barlow text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              {product.details}
            </p>
            
            <form onSubmit={handleSubmit} className="mt-8 bg-orange-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-italiana font-bold text-orange-600 mb-6 text-center">Book Your Product</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-md border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-300"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 rounded-md border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-300"
                  placeholder="Your full address"
                ></textarea>
              </div>
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 rounded-md border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-300"
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-orange-500 text-white rounded-full font-barlow text-lg font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Book Product'}
              </button>
            </form>
            
            {message && (
              <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-md">
                <p className="font-barlow text-lg">{message}</p>
              </div>
            )}
            
            <div className="mt-8 flex justify-center">
              <Link href="/#Products">
                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-barlow text-lg font-semibold hover:bg-gray-300 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Back to Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}