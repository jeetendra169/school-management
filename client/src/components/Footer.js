import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f3643] py-12 w-full md:rounded-tl-[5.5rem] md:rounded-tr-[5.5rem] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="SkillBloom logo" className="w-36 h-auto" />
            </div>
            <p className="text-gray-300">
              SkillBloom is an e-learning platform that empowers growth, breaks barriers, and unlocks endless possibilities for a brighter future.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">Pages</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Mentors', 'Blogs'].map((page, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-purple-400 transition duration-300">{page}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">Articles</h3>
            <ul className="space-y-2">
              {['Study', 'Exam', 'Study Abroad', 'Future Scope'].map((article, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-purple-400 transition duration-300">{article}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                📧 <span className="ml-2">hello@example.com</span>
              </li>
              <li className="flex items-center">
                📞 <span className="ml-2">+123-456-7890</span>
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-purple-500 mt-6 mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, color: 'text-blue-600' },
                { icon: FaInstagram, color: 'text-pink-500' },
                { icon: FaTwitter, color: 'text-blue-400' },
                { icon: FaLinkedinIn, color: 'text-blue-500' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.color} hover:scale-110 transition-transform duration-300 p-3 bg-white bg-opacity-20 rounded-full`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <hr className="mb-4 border-gray-600" />
          <p>
            © {new Date().getFullYear()} <span className="text-purple-500 font-bold">VRSTECHSCHOOL</span> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
