import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaLeaf, FaShieldAlt, FaSeedling, FaFlask, FaBug, FaAtom } from 'react-icons/fa';

const Product = () => {
  const products = [
    { id: 1, name: 'EFFCO-AH GROWTH PLUS', description: 'Enhance plant growth', image: '/assets/1.jpg', icon: FaSeedling },
    { id: 2, name: 'EFFCO-AH KILLER PLUS', description: 'Effective pest control', image: '/assets/2.jpg', icon: FaBug },
    { id: 3, name: 'EFFCO-AH MICRO-PLUS', description: 'Essential micronutrients', image: '/assets/3.jpg', icon: FaAtom },
    { id: 4, name: 'EFFCO-AH PROM PLUS', description: 'Promote healthy growth', image: '/assets/4.jpg', icon: FaLeaf },
    { id: 5, name: 'EFFCO-AH SULF-90 FUNGISICIDE', description: 'Powerful fungus protection', image: '/assets/5.jpg', icon: FaShieldAlt },
    { id: 6, name: 'EFFCO-AH ZINC MONO', description: 'Zinc-rich supplement', image: '/assets/6.jpg', icon: FaFlask },
  ];

  return (
    <div id="Products" className="py-16 lg:py-24 min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-italiana text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-green-800">
            Our Products
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-80 w-full">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent opacity-70 lg:opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
                <product.icon className="text-4xl text-green-300 mb-3" />
                <h2 className="font-italiana text-3xl font-bold text-white mb-2">{product.name}</h2>
                <p className="font-barlow text-sm text-green-100 mb-4">{product.description}</p>
                <Link href={`/product/${product.id}`}>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-full font-barlow font-semibold hover:bg-green-600 transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
              {/* Always visible product name for desktop */}
   
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;