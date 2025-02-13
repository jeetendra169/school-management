import React from "react";

function Aboutus() {
  return (
    <>
      <div id="about" className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 bg-orange-200 rounded-full flex items-center justify-center w-full h-full">
              <img
                alt="A school building"
                className="rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
                src="https://storage.googleapis.com/a1aa/image/FyXA86kagqz6ORN2xGiq7qzm7Av56W9Y-xoKgNh-reo.jpg"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 lg:pl-12 text-center lg:text-left">
          <h2 className="text-sm text-gray-500 uppercase mb-2">About Us</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Welcome to VRS TECH SCHOOL
            <br />A Place for Advanced Learning
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 text-justify lg:mr-10">
            At VRS TECH SCHOOL, we are committed to providing high-quality
            education with an emphasis on technology and innovation. Our
            curriculum is designed to foster creativity, problem-solving, and
            hands-on experience to prepare students for a dynamic future in the
            tech industry.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg text-gray-700 mb-6">
            <li className="flex items-center">
              <i className="fas fa-paw text-orange-500 mr-2"></i>
              Over 15 years of excellence in education
            </li>
            <li className="flex items-center">
              <i className="fas fa-paw text-orange-500 mr-2"></i>
              State-of-the-art learning facilities
            </li>
            <li className="flex items-center">
              <i className="fas fa-paw text-orange-500 mr-2"></i>
              Expert faculty with industry experience
            </li>
            <li className="flex items-center">
              <i className="fas fa-paw text-orange-500 mr-2"></i>
              Hands-on technology training
            </li>
            <li className="flex items-center">
              <i className="fas fa-paw text-orange-500 mr-2"></i>
              Comprehensive curriculum
            </li>
            <li className="flex items-center">
              <i className="fas fa-paw text-orange-500 mr-2"></i>
              Career-oriented approach
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-orange-600 transition duration-300">
            More About Us
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <img
          alt="Cartoon illustration of a school building"
          className="w-20 h-20 sm:w-24 sm:h-24"
          src="https://storage.googleapis.com/a1aa/image/cSd3BBzpJZRMJ6wtK4dtuuhPYBqYuQKV4GYj2ZEpV6o.jpg"
        />
      </div>
    </>
  );
}

export default Aboutus;
