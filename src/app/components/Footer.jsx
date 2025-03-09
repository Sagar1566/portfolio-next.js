import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-gray-700 text-white bg-[#121212]">
      <div className="container p-12 flex justify-between items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-2xl font-bold">
        SG
        </span>
        <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
