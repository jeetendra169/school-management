import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 w-full bg-[#0f3643] text-white shadow-lg z-50">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="SkillBloom Logo"
            className="w-16 md:w-24 h-auto"
          />
        </div>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-18 left-0 w-full md:w-auto bg-[#0f3643] md:flex md:space-x-6 p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Team", id: "team" },
            { name: "Blogs", id: "blogs" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="relative block md:inline-block hover:text-purple-400 transition duration-300 font-semibold py-2 md:py-0 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full focus:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Login Button */}
        <div className="flex md:flex space-x-4 p-4 rounded-lg">
          <Link to="/login">
            <button className="bg-purple-500 text-white px-8 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
              Login
            </button>
          </Link>
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
