import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span
        className='text-2xl md:text-5xl bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400 inline-block text-transparent bg-clip-text font-semibold'>
          Valeria Garcia  
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;