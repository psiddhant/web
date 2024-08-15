import Link from 'next/link';
import React from 'react';

const projects = [
  {
    title: 'Dairy Farming',
    description: 'Dairy farming involves raising cattle for milk production. It requires proper management of cattle, feed, and milking processes.',
    imageUrl: 'https://agronfoodprocessing.com/wp-content/uploads/2023/07/Dairy-Farm.jpg',
    link:"https://wa.me/+918755170385"
  },
  {
    title: 'Poly House',
    description: 'A poly house is a type of greenhouse made with polyethylene. It creates a controlled environment for growing plants, enhancing yield and reducing pests.',
    imageUrl: 'https://rocketskills.in/wp-content/uploads/2021/01/Screen-Shot-2021-01-31-at-11.13.32-PM.png',
    link:"https://wa.me/+918755170385"
  },
  {
    title: 'Goat Farming',
    description: 'Goat farming involves raising goats for meat, milk, and fiber. It requires proper housing, feeding, and health management for optimal productivity.',
    imageUrl: 'https://media.licdn.com/dms/image/D4D12AQE8GXsdd3CwuA/article-cover_image-shrink_600_2000/0/1688809957021?e=2147483647&v=beta&t=ylS7zdQCeKnmeOn7OI8May6BBQVlsFITdZl_W46ZzKw',
    link:"https://wa.me/+918755170385"
  },
  {
    title: 'Fish Farming',
    description: 'Fish farming, or aquaculture, involves raising fish in controlled environments. It requires proper pond design, water quality management, and feeding practices.',
    imageUrl: 'https://www.bentoli.com/wp-content/uploads/2018/02/fish-farming.jpg',
    link:"https://wa.me/+918755170385"
  },
  {
    title: 'Israel Technical Farming',
    description: 'Israel technical farming employs advanced agricultural technologies like drip irrigation, greenhouses, and precision agriculture to optimize farming practices.',
    imageUrl: 'https://static.israel21c.org/www/uploads/2012/05/tal-ya-trays-1520x855.jpg',
    link:"https://wa.me/+918755170385"
  },
  {
    title: 'Net House',
    description: 'A net house is a structure covered with netting material to protect crops from pests and environmental factors while allowing proper ventilation.',
    imageUrl: 'https://www.jains.com/JainGreenhouse/images/Net_House_770x441.jpg',
    link:"https://wa.me/+918755170385"
  },
  {
    title: 'Soil Test',
    description: 'Soil testing analyzes soil composition to determine nutrient levels and pH, helping to optimize crop yields and reduce input costs with customized recommendations.',
    imageUrl: 'https://www.cuttingtechnologies.com/wp-content/uploads/2021/05/soil-testing-2-1080x675.jpg',
    link:"https://wa.me/+918755170385"
  },
  {
    title: 'Solar Pump',
    description: 'Solar pumps use solar energy to pump water for irrigation and livestock, offering an eco-friendly, cost-effective, and reliable solution in remote areas.',
    imageUrl: 'https://www.apollopowersystems.com/wp-content/uploads/2016/04/solar-water-pumping-solutions1-800x403.jpg',
    link:"https://wa.me/+918755170385"
  },
];

const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Our Projects</h1>
              <p className="sm:w-3/5 leading-relaxed text-end text-white sm:pl-10 pl-0">See Our Projects Below.</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {projects.map((project, index) => (
              <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt={project.title} className="object-cover object-center h-full w-full" src={project.imageUrl} />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">{project.title}</h2>
                <p className="text-white leading-relaxed mt-2">{project.description}</p>
               <div className='mt-4'>
               <Link href={project.link} className='bg-white text-black py-1 px-5 rounded-full mt-8'>Get More Details</Link>
               </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
