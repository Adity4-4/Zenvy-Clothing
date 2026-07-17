import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-4 border-b border-gray-100">
      {/* Navigation Links */}
      <nav className="flex items-center space-x-6 text-sm font-medium text-gray-700">
        <div className="group relative cursor-pointer flex items-center gap-1">
          <span>Men</span>
          <span className="text-xs">▼</span>
        </div>
        <div className="group relative cursor-pointer flex items-center gap-1">
          <span>Woman</span>
          <span className="text-xs">▼</span>
        </div>
      </nav>

      {/* Brand Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
      <Link to="/"> <span className="text-xl font-bold tracking-widest text-black">ZENVY CLOTHING</span></Link> 
      </div>

      {/* Search & Actions */}
      <div className="flex items-center space-x-6">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 text-xs px-4 py-1.5 rounded-full border border-gray-200 focus:outline-none w-48 text-gray-600"
          />
        </div>
        
        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <button className="hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
       <Link to="/Cart">  <button className="hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </button></Link>
          <button className="hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          </button>
          <button className="hover:text-black flex items-center gap-0.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="text-xs">▼</span>
          </button>
          <div className="text-xs font-semibold cursor-pointer border-l pl-3 border-gray-300">ID ▼</div>
        </div>
      </div>
    </header>
  );
}