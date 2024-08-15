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
    <div id="Products" className="  mb:h-[3500px]      lg:mt-0 lg:mb-32 text-white">
      <div className="top mt-9">
        <h1 className="uppercase text-4xl text-center font-extrabold shadow-inherit">Products</h1>
      </div>
      <div className="bottom lg:pl-28 pt-40 pl-[50px] flex flex-wrap gap-20">
        {products.map((product, index) => (
          <div key={index} className="card h-20 content-center text-center  overflow-hidden bg-[#D9D9D9] bg-opacity-10 w-64 rounded-lg">
           
            <h1 className="">{product.name}</h1>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
