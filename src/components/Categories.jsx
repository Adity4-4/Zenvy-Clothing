import React from 'react';

export default function Categories() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full h-[80vh]">
      {/* Men Section */}
      <div className="relative group overflow-hidden bg-gray-200 flex justify-center items-end h-full">
        <img 
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800" 
          alt="Men Fashion" 
          className="w-full h-full object-cover grayscale brightness-95"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/30 text-8xl font-bold tracking-widest uppercase pointer-events-none select-none">
            MEN
          </span>
        </div>
      </div>

      {/* Women Section */}
      <div className="relative group overflow-hidden bg-gray-300 flex justify-center items-end h-full">
        <img 
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800" 
          alt="Women Fashion" 
          className="w-full h-full object-cover grayscale brightness-95"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/30 text-8xl font-bold tracking-widest uppercase pointer-events-none select-none">
            WOMEN
          </span>
        </div>
      </div>
    </section>
  );
}