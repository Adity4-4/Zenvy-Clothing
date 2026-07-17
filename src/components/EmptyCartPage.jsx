import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Sparkles, Heart, ShoppingCart } from 'lucide-react';

const suggestedItems = [
  { id: 1, name: "Premium Knit Sweater", category: "Sweaters", price: "$89", img: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Oversized Denim Jacket", category: "Outerwear", price: "$120", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Classic Cotton Tee", category: "Tees", price: "$29", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Relaxed Linen Pants", category: "Pants", price: "$68", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=400" },
];

const EmptyCartPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans pb-24">
      {/* 1. Main Empty Cart State Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-20 pb-16 flex flex-col items-center text-center">
        
        {/* Animated Icon Canvas Container */}
        <div className="relative w-48 h-48 bg-[#f3f9fb] rounded-full flex items-center justify-center border border-[#008ecc]/10 shadow-inner mb-8">
          {/* Main Floating Cart Icon */}
          <motion.div
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, -4, 4, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-[#008ecc] z-10"
          >
            <ShoppingCart size={80} className="stroke-[1.2]" />
          </motion.div>

          {/* Sparkles / Background Accents */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-8 right-8 text-amber-400"
          >
            <Sparkles size={20} fill="currentColor" />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-10 left-8 text-[#008ecc]/40"
          >
            <ShoppingBag size={24} />
          </motion.div>
        </div>

        {/* Text Details */}
        <h1 className="text-3xl font-light tracking-tight text-gray-900 mb-3">
          Your Cart is Empty
        </h1>
        <p className="text-sm text-gray-500 font-light max-w-sm mb-8 leading-relaxed">
          Looks like you haven't added anything to your Zenvy bag yet. Let's find something perfectly tailored for you.
        </p>

        {/* Dynamic Return Button */}
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden bg-[#008ecc] text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-lg shadow-[#008ecc]/20 transition-colors duration-300 hover:bg-[#0076a8]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start Shopping 
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </motion.button>
      </section>

      {/* 2. Curated Suggestions Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-12 border-t border-gray-200/60 pt-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-[#008ecc] tracking-widest uppercase block mb-1">
              Handpicked Just For You
            </span>
            <h2 className="text-xl md:text-2xl font-light text-gray-800 tracking-tight">
              Trending Closets
            </h2>
          </div>
          <button className="text-xs font-semibold tracking-wider text-[#008ecc] hover:text-[#0076a8] flex items-center gap-1 group transition-colors">
            View All <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {suggestedItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Frame Image */}
              <div className="relative aspect-[3/4] bg-[#f3f9fb] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Wishlist Icon */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm text-gray-400 hover:text-rose-500 rounded-full shadow-sm active:scale-90 transition-all">
                  <Heart size={14} />
                </button>
              </div>

              {/* Text Details Area */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-xs md:text-sm font-semibold text-gray-700 truncate group-hover:text-[#008ecc] transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-50">
                  <span className="text-sm font-bold text-gray-950">{item.price}</span>
                  <button className="p-1.5 bg-[#f3f9fb] text-[#008ecc] hover:bg-[#008ecc] hover:text-white rounded-xl text-xs font-bold transition-all duration-300">
                    <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EmptyCartPage;