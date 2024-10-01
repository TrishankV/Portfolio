import React from 'react';

const Header = () => {
  return (
    <header className="relative p-8 border-b-4 border-arcade-yellow text-center bg-gradient-to-r from-arcade-blue to-arcade-purple shadow-lg overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-arcade-blue to-arcade-purple animate-gradient-move opacity-50"></div>
      
      {/* Animated line pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/arcade-pattern.png')] opacity-10 pointer-events-none"></div>

      {/* Header text */}
      <h1 
        className="relative z-10 text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 drop-shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out"
        tabIndex="0" 
        aria-label="Yet another portfolio"
      >
        YET ANOTHER PORTFOLIO !!!
      </h1>
      
      {/* Subtext or tagline (optional) */}
      <p className="relative z-10 text-xl md:text-3xl text-gray-300 mt-4">
        Trushank R Vashikar . 
      </p>
    </header>
  );
};

export default Header;
