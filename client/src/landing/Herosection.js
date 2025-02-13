import React from "react";
import { motion } from "framer-motion";

function Herosection() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section - Text and Image */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            From
            <span className="text-red-400"> Knowledge </span>
            To
            <span className="text-blue-400"> Action </span>
          </h1>
          <p className="mt-4 text-gray-600">
            We believe that education is the key to unlocking potential and
            creating a brighter future. To provide high-quality, accessible,
            and transformative learning experiences that empower individuals
            to achieve their personal.
          </p>
          <motion.img
            alt="A woman wearing headphones and studying with a laptop"
            className="mt-6 rounded-lg shadow-lg"
            src="https://storage.googleapis.com/a1aa/image/bfH5YYnnAb1T9l5XH0-PjtFU_o7rJ5cmTgXpUTWAJhU.jpg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Right Section - Features */}
        <motion.div 
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose VRS TECH SCHOOL?
          </h2>
          <ul className="mt-6 space-y-4">
            {[
              "Variety",
              "Quality education",
              "Expert instructors",
              "Career advancement",
              "Flexible learning options"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <i className="fas fa-check text-blue-400 mr-2"></i>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          <motion.button
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            More about us
          </motion.button>
          <div className="mt-8 flex space-x-8">
            {["4.8/5 Average course rating", "2K+ Active students enrolled"].map((text, index) => (
              <motion.div
                key={index}
                className="bg-red-100 p-4 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <p className="text-2xl font-bold text-red-500">{text.split(" ")[0]}</p>
                <p className="text-gray-600">{text.split(" ").slice(1).join(" ")}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Herosection;
