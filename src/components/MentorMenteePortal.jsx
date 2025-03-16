import React, { useState } from "react";
import { Menu } from "lucide-react";

const MentorMenteePortal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/assets/loginbg.webp" // Replace with the correct image path
        alt="Medi-Caps University"
        className="absolute w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="inset-0 bg-black bg-opacity-40"></div>
      
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full backdrop-blur-[5px] p-4 flex justify-between items-center">
        <img src="/assets/landing1.png" alt="Medi-Caps University Logo" className="h-12" />
        {/* Desktop Menu */}
        <div className="hidden md:flex text-white space-x-6 pr-6">
          <a href="#about" className="hover:text-gray-300 cursor-pointer">About</a>
          <a href="#developers" className="hover:text-gray-300 cursor-pointer">Developers</a>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={28} />
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-black bg-opacity-80 p-4 rounded-md flex flex-col space-y-4 md:hidden">
          <a href="#about" className="text-white hover:text-gray-300 cursor-pointer">About</a>
          <a href="#developers" className="text-white hover:text-gray-300 cursor-pointer">Developers</a>
        </div>
      )}
      
      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-12 ml-[10%] space-y-2"
        style={{ textShadow: "0px 4.22581px 4.22581px rgba(0, 0, 0, 0.25)" }}>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">Welcome to</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Mentor- Mentee</h1>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">Portal</h2>
        <button className="mt-6 bg-red-800 hover:bg-white hover:text-red-800 text-white font-bold py-2 px-15 text-lg rounded-md cursor-pointer">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default MentorMenteePortal;
