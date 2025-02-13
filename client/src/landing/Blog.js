import React from "react";

const Blog = () => {
  return (
    <>
      <div id="blogs" className="container mx-auto p-6">
        <div className="bg-gray-200 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-indigo-900">Our Blog</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Three women studying together with a laptop"
              className="w-full h-58 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/zTuembkvI7AmSH1tBcgXyFpTuB-uGWbJ3vl5Q2DMtTg.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">Online learning</span>
                <span>September 4, 2024</span>
              </div>
              <h2 className="text-lg font-semibold text-indigo-900">
                How to maximize your study time effectively
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of students with laptops"
              className="w-full h-58 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/kyb_bySMHIz43j8uub36ADuxBqsLllDuTXzFMtUa8P4.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">Career</span>
                <span>September 4, 2024</span>
              </div>
              <h2 className="text-lg font-semibold text-indigo-900">
                Top 10 study tips for academic success
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of women studying together with a laptop"
              className="w-full h-58 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/lh3phCHJFHvColrKdDi4d1OhxREOa22GKYIynLs81KE.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">Motivation</span>
                <span>September 4, 2024</span>
              </div>
              <h2 className="text-lg font-semibold text-indigo-900">
                How to stay motivated during your studies
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of students working together on a project"
              className="w-full h-58 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/FfPLwr172dYI8xnZf3E497gp50RcAbyZidRJogSykvE.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">Success Stories</span>
                <span>September 4, 2024</span>
              </div>
              <h2 className="text-lg font-semibold text-indigo-900">
                Real success stories from students who achieved their goals
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of students discussing online learning"
              className="w-full h-58 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/Bc_VZDyl3as_6kKZkRmqgDxSlgfZw_jNbBTIayWXbwY.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">Online Learning</span>
                <span>September 4, 2024</span>
              </div>
              <h2 className="text-lg font-semibold text-indigo-900">
                The future of education and emerging trends in online learning
              </h2>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              alt="Group of students studying together with a laptop"
              className="w-full h-58 object-cover"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/pPojksxRKmEMfPCDopLpB0-z2dFiVP3tNlu5DR116XE.jpg"
              width="600"
            />
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-2">Study Tips</span>
                <span>September 4, 2024</span>
              </div>
              <h2 className="text-lg font-semibold text-indigo-900">
                Maximizing your learning with effective study tips for online
                students
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
