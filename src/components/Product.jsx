import React from 'react';

const Product = () => {
  const products = [
    { name: 'EFFCO-AH POTASH', description: 'DESC' },
    { name: 'EFFCO-AH BIO-DOP', description: 'desc' },
    { name: 'EFFCO-AH MONO-ZINC', description: 'desc' },
    { name: 'EFFCO-AH ZYME', description: 'desc' },
    { name: 'EFFCO-AH SULPHER', description: 'DESC' },
    { name: 'EFFCO-AH KORAGAN', description: 'desc' },
    { name: 'EFFCO-AH ALERT', description: 'DESC' },
    { name: 'EFFCO-AH E-STIM', description: 'desc' },
    // { name: 'EFFCO-AH SUPER GOLD (GROWTH PROMOTER)', description: 'desc' },
  ];

  return (
    <div id="Products" className=" py-12 lg:py-24 h-[1300px] lg:h-[1000px]">
      <div className="cursor-pointer container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className=" uppercase text-[3rem] pb-16 md:text-5xl lg:text-6xl font-extrabold mb-4">
            Products
          </h1>
        </div>
        <div className="flex flex-wrap  justify-center gap-8 text-white md:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="card bg-black shadow-lg shadow-orange-600/90 bg-opacity-50 text-center p-6 rounded-lg transform transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
