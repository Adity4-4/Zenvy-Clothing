import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down further than the height of the screen (the hero video) minus 50px, hide it
      if (window.scrollY > window.innerHeight - 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // CHANGED: Added dynamic template literals to toggle `-translate-y-full` and `opacity-0` when isHidden is true
    <header 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-transparent px-8 py-4 transition-all duration-500 ease-in-out ${
        isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      
      {/* Navigation Links */}
      <nav className="flex items-center space-x-6 text-sm font-medium text-white/90">
        <div className="group relative cursor-pointer flex items-center gap-1 transition-colors hover:text-white">
          <span>Men</span>
          <span className="text-xs text-white/60 group-hover:text-white">▼</span>
        </div>
        <div className="group relative cursor-pointer flex items-center gap-1 transition-colors hover:text-white">
          <span>Woman</span>
          <span className="text-xs text-white/60 group-hover:text-white">▼</span>
        </div>
      </nav>

      {/* Brand Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Link to="/"> 
          <span className="text-xl font-bold tracking-widest text-white drop-shadow-md hover:opacity-80 transition-opacity">
            ZENVY CLOTHING
          </span>
        </Link> 
      </div>

      {/* Search & Actions */}
      <div className="flex items-center space-x-6">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-white/10 backdrop-blur-md text-xs px-4 py-1.5 rounded-full focus:bg-white/20 focus:outline-none w-48 text-white placeholder-white/70 transition-all shadow-inner"
          />
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4 text-white/90">
          <button className="hover:text-white transition-colors p-1 rounded-full hover:bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          
          <Link to="/Cart" className="hover:text-white transition-colors p-1 rounded-full hover:bg-white/20">  
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </Link>
          
          <button className="hover:text-white transition-colors p-1 rounded-full hover:bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </button>
          
          <button className="hover:text-white transition-colors flex items-center gap-0.5 p-1 rounded-full hover:bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="text-[10px] text-white/60">▼</span>
          </button>
          
          <div className="text-xs font-semibold cursor-pointer pl-2 text-white/90 hover:text-white transition-colors self-stretch flex items-center gap-1">
            ID <span className="text-[10px] text-white/60">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
}