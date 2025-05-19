import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: use any icon library


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-3xl w-full  top-2 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-8 py-6 md:py-8 flex items-center justify-between">
      
        <a href="/" className="flex items-center h-10">
          <img src="/images/logo.png" alt="Logo" className=" absolute h-54 w-auto" />
        </a>

    
        <nav className="hidden md:flex space-x-6 font-medium text-xl text-gray-800">
          <a
            href="/"
            className="relative hover:text-blue-600 transition duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
          >
            HOME
          </a>
          <a
            href="/services"
            className="relative hover:text-blue-600 transition duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
          >
            SERVICES
          </a>
          <a
            href="/aboutus"
            className="relative hover:text-blue-600 transition duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="relative hover:text-blue-600 transition duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
          >
            CONTACT
          </a>

           <a
            href="/portfolio"
            className="relative hover:text-blue-600 transition duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
          >
            PORTFOLIO
          </a>
        </nav>

       
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow">
          <nav className="flex flex-col space-y-4 font-medium text-sm text-gray-800">
            <a href="#work" onClick={() => setMenuOpen(false)}>WORK</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>SERVICES</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>BLOG</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
                <a href="#portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
