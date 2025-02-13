import React from "react";
import 'animate.css';  // Import Animate.css

function Learning() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        How We <span className="text-red-500">Deliver</span> Excellence
      </h1>
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-start items-start gap-5">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/4 mt-0 md:mt-48 animate__animated animate__fadeInLeft">
            <div className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-full inline-block mb-4">
              Step 1
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Start learning
            </h2>
            <p className="text-gray-600">
              Begin your educational journey with access to high-quality course
              materials, engaging content, and support from instructors and
              peers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/4 mb-8 md:mb-0 mt-0 md:mt-32 animate__animated animate__fadeInLeft animate__delay-1s">
            <div className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-full inline-block mb-4">
              Step 2
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Enroll today
            </h2>
            <p className="text-gray-600">
              Sign up for your chosen course directly through our website.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/4 mb-8 md:mb-0 mt-0 md:mt-16 animate__animated animate__fadeInLeft animate__delay-2s">
            <div className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-full inline-block mb-4">
              Step 3
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Select your course
            </h2>
            <p className="text-gray-600">
              Our course listings include all the details you need to make an
              informed decision.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/4 mb-8 md:mb-0 animate__animated animate__fadeInLeft animate__delay-3s">
            <div className="bg-blue-500 text-white text-sm font-semibold px-2 py-1 rounded-full inline-block mb-4">
              Step 4
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Explore categories
            </h2>
            <p className="text-gray-600">
              Browse through our various course categories to find the area that
              interests you the most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
