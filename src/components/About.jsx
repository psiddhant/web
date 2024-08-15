const About = () => {
  return (
    <div id="about" className="h-screen w-full py-16 px-8 flex items-center justify-center ">
      <div className="max-w-4xl text-center lg:text-left">
        <div className="t text-4xl lg:text-6xl font-bold mb-6">
          <h1>About Us</h1> 
        </div>
        <div className="border-b-2 border-gray-500 mb-6 w-20 mx-auto lg:mx-0"></div>
        <div className=" text-lg lg:text-2xl leading-relaxed lg:leading-loose">
          <p>
            For over 8 years, <span className="font-semibold text-yellow-400">JAIVIK HABITAT FARMER HORTICULTURE PVT. LTD.</span> has been a trusted provider of high-quality fertilizers and manure. Our mission is to enhance soil health and boost crop yields through sustainable practices and innovative products.
          </p>
          <p className="mt-4">
            We offer a range of organic and inorganic solutions tailored to meet diverse agricultural needs. Committed to customer satisfaction, we provide expert guidance and support to help farmers achieve their best results. Join us in growing a sustainable future for agriculture.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
