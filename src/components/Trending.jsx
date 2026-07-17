import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Sparkles, ShoppingBag } from 'lucide-react';

const trendingProducts = [
  {
    id: 1,
    tag: "BEST DEAL",
    title: "Zenvy Aero-Max Sneakers",
    price: "$120.00",
    bgColor: "bg-gradient-to-tr from-[#e1f1f7] to-[#008ecc]/20",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    badgeType: "starburst",
    badgeColor: "bg-black text-yellow-400",
    emoji: "😲",
    rotation: -6
  },
  {
    id: 2,
    tag: "Black Friday",
    title: "Lumière Glow Skincare Set",
    price: "$85.00",
    bgColor: "bg-gradient-to-tr from-purple-100 to-indigo-200",
    image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=600",
    badgeType: "cloud",
    badgeColor: "bg-purple-600 text-white",
    emoji: "😍",
    rotation: 4
  },
  {
    id: 3,
    tag: "50% OFF",
    title: "Zenvy Bass-Drop Headphones",
    price: "$199.00",
    bgColor: "bg-gradient-to-tr from-yellow-50 to-amber-200",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    badgeType: "circle",
    badgeColor: "bg-rose-500 text-white",
    emoji: "🔥",
    rotation: -3
  }
];

const TrendingShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentProd = trendingProducts[currentIndex];

  const handleTimelineChange = (e) => {
    setCurrentIndex(Number(e.target.value));
  };

  return (
    <section className="py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#008ecc] uppercase mb-2">
          <Sparkles size={14} className="animate-spin-slow" /> What's Hot Right Now
        </span>
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-tight">
          Trending Deals Arena
        </h2>
      </div>

      {/* Main Interactive Canvas Box */}
      <div className="relative w-full max-w-2xl aspect-[4/3] rounded-[2rem] bg-slate-50 border border-slate-200/60 shadow-inner flex items-center justify-center p-8 overflow-hidden select-none">
        
        {/* Bounding Box Vector Editor Overlay */}
        <motion.div 
          animate={{ rotate: currentProd.rotation }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative w-72 h-72 md:w-96 md:h-96 border-2 border-dashed border-[#008ecc] flex items-center justify-center rounded-2xl group cursor-grab active:cursor-grabbing"
        >
          {/* Vector Transformation Handles at corners */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#008ecc] rounded-full" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#008ecc] rounded-full" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#008ecc] rounded-full" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#008ecc] rounded-full" />
          
          {/* Outer anchor connection point line top handle */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <div className="w-3 h-3 bg-white border-2 border-[#008ecc] rounded-full shadow-sm" />
            <div className="w-0.5 h-8 bg-[#008ecc]" />
          </div>

          {/* Morphing Background Canvas Plate */}
          <motion.div 
            layoutId="canvasBg"
            className={`absolute inset-4 rounded-2xl shadow-md ${currentProd.bgColor} transition-colors duration-500`}
          />

          {/* Floating Action Badge Component */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentProd.id}`}
              initial={{ scale: 0, opacity: 0, rotate: -30 }}
              animate={{ scale: 1, opacity: 1, rotate: 12 }}
              exit={{ scale: 0, opacity: 0 }}
              className={`absolute -top-4 -left-6 z-20 font-black px-4 py-3 shadow-lg text-center leading-none text-sm tracking-tighter uppercase
                ${currentProd.badgeType === 'starburst' ? 'rounded-tl-2xl rounded-br-2xl' : ''}
                ${currentProd.badgeType === 'cloud' ? 'rounded-full' : ''}
                ${currentProd.badgeType === 'circle' ? 'rounded-full aspect-square flex items-center justify-center w-20' : ''}
                ${currentProd.badgeColor}`}
            >
              {currentProd.tag}
            </motion.div>
          </AnimatePresence>

          {/* Asset Image Showcase */}
          <AnimatePresence mode="wait">
            <motion.img
              key={`img-${currentProd.id}`}
              src={currentProd.image}
              alt={currentProd.title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-4/5 h-4/5 object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] pointer-events-none"
            />
          </AnimatePresence>

          {/* Animated Reaction Emoji Sticker */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`emoji-${currentProd.id}`}
              initial={{ scale: 0, x: 20 }}
              animate={{ scale: 1, x: 0 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="absolute -bottom-4 -right-4 z-20 text-4xl bg-white rounded-full p-2 shadow-md filter drop-shadow-sm"
            >
              {currentProd.emoji}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Context Card Box */}
        <div className="absolute bottom-6 left-6 z-30 bg-white/80 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/40 shadow-sm max-w-[240px]">
          <h4 className="text-xs font-bold text-[#008ecc] uppercase tracking-wide">Featured Item</h4>
          <p className="text-sm font-semibold text-gray-800 truncate">{currentProd.title}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-bold text-gray-900">{currentProd.price}</span>
            <button className="p-1.5 bg-[#008ecc] text-white rounded-lg hover:bg-[#0076a8] active:scale-90 transition-all">
              <ShoppingBag size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Editor Video Control Timeline Panel */}
      <div className="w-full max-w-md mt-8 bg-slate-100 rounded-2xl p-4 border border-slate-200/80 flex items-center gap-4 shadow-sm">
        {/* Play/Pause Simulator */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2.5 bg-white text-gray-700 hover:text-[#008ecc] rounded-xl border border-slate-200 shadow-sm active:scale-95 transition-all"
        >
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </button>

        {/* Scrubbing Keyframe Range Slider Track */}
        <div className="flex-1 relative flex items-center">
          <input 
            type="range" 
            min="0" 
            max={trendingProducts.length - 1} 
            value={currentIndex}
            onChange={handleTimelineChange}
            className="w-full accent-[#008ecc] bg-slate-300 h-1.5 rounded-lg appearance-none cursor-pointer"
          />
          {/* Visual Diamond Keyframe Indicators beneath track matching video layout */}
          <div className="absolute w-full flex justify-between px-1 top-4 pointer-events-none">
            {trendingProducts.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rotate-45 transform transition-all duration-300 ${
                  i === currentIndex ? 'bg-[#008ecc] scale-125 shadow-sm' : 'bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default TrendingShowcase;