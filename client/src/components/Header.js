import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/images/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0f3643]  w-full text-white shadow-lg">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo and Login Button */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="SkillBloom Logo"
            className=" w-16 md:w-24 h-auto"
          />
        </div>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-18 left-0 w-full md:w-auto bg-[#0f3643] md:flex md:space-x-6 p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {["Home", "About Us", "Courses", "Blogs", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="block md:inline-block hover:text-purple-400 transition duration-300 font-semibold py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Social Media Icons */}
        <div className="flex md:flex space-x-4  p-4 rounded-lg">
          <button className="bg-purple-500 text-white px-8 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
            Login
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
