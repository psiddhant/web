import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Product = () => {
  const products = [
    { id: 1, name: 'EFFCO-AH GROWTH PLUS', description: 'DESC', image: '/assets/1.jpg' },
    { id: 2, name: 'EFFCO-AH KILLER PLUS', description: 'desc', image: '/assets/2.jpg' },
    { id: 3, name: 'EFFCO-AH MICRO-PLUS', description: 'desc', image: '/assets/3.jpg' },
    { id: 4, name: 'EFFCO-AH PROM PLUS', description: 'desc', image: '/assets/4.jpg'  },
    { id: 5, name: 'EFFCO-AH SULF-90 FUNGISICIDE', description: 'DESC', image: '/assets/5.jpg' },
    { id: 6, name: 'EFFCO-AH ZINC MONO', description: 'desc', image: '/assets/6.jpg' },
  ];

  return (
    <div id="Products" className="py-16 lg:py-24 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-italiana font-extrabold mb-4 text-orange-600">
            Our Products
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl shadow-xl shadow-orange-900/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-700/60 hover:-translate-y-2"
            >
              <div className="relative h-80 w-full">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-2xl font-italiana font-bold text-white mb-2">{product.name}</h2>
                <p className="text-sm font-barlow text-gray-300">{product.description}</p>
                <Link href={`/product/${product.id}`}>
                  <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full font-barlow font-semibold hover:bg-orange-600 transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;