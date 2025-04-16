import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#29356b] text-white py-6">
      <div className="container mx-auto  flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg py-3 font-bold">Hyderabad Growth</h3>
          <p className="text-sm text-gray-300">Real Estate Market Insights</p>
        </div>

        {/* Center Section -  Links */}
        <div className="text-center md:text-center">
          <h4 className="font-bold py-3">Quick Links</h4>
          <nav className="text-sm text-gray-300">
            <a href="#" className="hover:text-gray-100 mx-1">
              Home
            </a>{" "}
            •
            <a href="#" className="hover:text-gray-100 mx-1">
              Areas
            </a>{" "}
            •
            <a href="#" className="hover:text-gray-100 mx-1">
              Videos
            </a>{" "}
            •
            <a href="#" className="hover:text-gray-100 mx-1">
              Blog
            </a>{" "}
            •
            <a href="#" className="hover:text-gray-100 mx-1">
              Contact
            </a>
          </nav>
        </div>

        <div className="text-center md:text-right">
          <h4 className="font-bold">Connect</h4>
          <div className="flex justify-center md:justify-end space-x-2 mt-2">
            <span className="w-6 h-6 bg-blue-400 rounded-full inline-block"></span>
            <span className="w-6 h-6 bg-blue-400 rounded-full inline-block"></span>
            <span className="w-6 h-6 bg-blue-400 rounded-full inline-block"></span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-xs mt-4">
        © 2025 Hyderabad Growth | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
