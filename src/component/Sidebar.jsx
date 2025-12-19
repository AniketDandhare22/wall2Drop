import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaTh, FaStar, FaCog, FaBars } from "react-icons/fa";
import logo from "../logo.png";

function Sidebar({ Theme }) {
  const [isOpen, setIsOpen] = useState(true); // Sidebar expanded/collapsed

  const navItems = [
    { name: "Home", icon: <FaHome /> } ,
    { name: "About", icon: <FaInfoCircle /> ,link:'https://aniketdandhareportfolio.netlify.app/', external:true},
    { name: "Categories", icon: <FaTh />, onClick: () => alert("Upcoming Feature")},
    { name: "Favorites", icon: <FaStar /> ,onClick: () => alert("Upcoming Feature")},
    { name: "Settings", icon: <FaCog />,onClick: () => prompt("Rate our site (x/5)") },
  ];

  return (
    <div
      className={`
        glass-effect h-full flex flex-col 
        transition-width duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-16"} 
        overflow-hidden
        rounded-lg
        relative
      `}
    >
      {/* Toggle Button */}
      <button
        className="absolute top-4 right-4 text-xl z-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Logo */}
      <div className={`flex items-center gap-2 px-4 py-6 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        <img src={logo} alt="Logo" className={`w-10 h-6 ${Theme ? "filter invert" : ""}`} />
        <span className="text-xl font-bold">Wall2Drop</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-4">
        {navItems.map((item, index) => (
          <button
            href={item.link}
            onClick={item.onClick}
            key={index}
            className={`
              flex items-center gap-4 px-4 py-2 
              hover:bg-white/20 transition-colors duration-200
              w-full
            `}
          >
            <span className="text-lg">{item.icon}</span>
            <span className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
              {item.name}
            </span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className={`mt-auto text-white/70 px-4 py-2 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
        © 2025 Picssum.com
      </div>
    </div>
  );
}

export default Sidebar;
