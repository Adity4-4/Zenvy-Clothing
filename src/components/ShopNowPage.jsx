import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ShoppingBag, Heart, Star, LayoutGrid, Eye } from 'lucide-react';

const clothingProducts = [
  { id: 1, name: "Premium Knit Sweater", category: "Sweaters", price: "$89", rating: 4.8, badge: "Trending", img: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=500" },
  { id: 2, name: "Oversized Denim Jacket", category: "Outerwear", price: "$120", rating: 4.9, badge: "Best Seller", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500" },
  { id: 3, name: "Classic Cotton Tee", category: "Tees", price: "$29", rating: 4.5, badge: null, img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500" },
  { id: 4, name: "Slim Fit Oxford Shirt", category: "Shirts", price: "$59", rating: 4.7, badge: "New", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500" },
  { id: 5, name: "Relaxed Linen Pants", category: "Pants", price: "$68", rating: 4.6, badge: null, img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=500" },
  { id: 6, name: "Urban Puff Jacket", category: "Outerwear", price: "$145", rating: 4.9, badge: "50% OFF", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=500" },
  { id: 7, name: "Vintage Stripe Sweater", category: "Sweaters", price: "$75", rating: 4.4, badge: null, img: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=500" },
  { id: 8, name: "Heavyweight Graphic Tee", category: "Tees", price: "$35", rating: 4.7, badge: "New", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=500" },
];

const categories = ["All", "Shirts", "Denim", "Tees", "Pants", "Sweaters", "Outerwear"];

const ShopNowPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const filteredProducts = selectedCategory === "All" 
    ? clothingProducts 
    : clothingProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans pb-24">
      
      {/* 1. Page Banner */}
      <div className="w-full bg-[#f3f9fb] border-b border-gray-100 py-12 px-4 md:px-12 text-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-2">
          Zenvy Apparel
        </h1>
        <p className="text-xs md:text-sm text-gray-500 tracking-widest uppercase font-medium">
          Carefully Crafted Essentials / Sustainable Living
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-10">
        
        {/* 2. Controls & Filters Panel */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-6 mb-8">
          {/* Category Pills Slider */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 relative shrink-0 ${
                  selectedCategory === cat 
                    ? 'text-white' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#008ecc] hover:text-[#008ecc]'
                }`}
              >
                {selectedCategory === cat && (
                  <motion.div 
                    layoutId="activeShopTab"
                    className="absolute inset-0 bg-[#008ecc] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Utility Tools Indicator */}
          <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-gray-500 justify-end">
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200 hover:text-[#008ecc] hover:border-[#008ecc] transition-all">
              <SlidersHorizontal size={14} /> Filters
            </button>
            <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-xl border border-gray-200 text-gray-400">
              <LayoutGrid size={14} className="text-[#008ecc]" /> Grid ({filteredProducts.length})
            </div>
          </div>
        </div>

        {/* 3. Clothing Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const isFav = favorites.includes(product.id);
              
              return (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Frame Container */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f3f9fb]">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Left Custom Badge overlay */}
                    {product.badge && (
                      <span className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    {/* Right Heart Wishlist Trigger */}
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 z-10 p-2.5 bg-white/80 backdrop-blur-md text-gray-600 hover:text-rose-500 rounded-full shadow-sm active:scale-90 transition-all"
                    >
                      <Heart size={16} fill={isFav ? "currentColor" : "none"} className={isFav ? "text-rose-500" : ""} />
                    </button>

                    {/* Sliding Quick Actions Panel on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button className="p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-[#008ecc] hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 active:scale-90">
                        <Eye size={18} />
                      </button>
                      <button className="p-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-[#008ecc] hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 active:scale-90">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Information Details block */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-1">
                        <span>{product.category}</span>
                        <div className="flex items-center gap-0.5 text-amber-500">
                          <Star size={12} fill="currentColor" />
                          <span className="text-gray-600 font-semibold">{product.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#008ecc] transition-colors duration-200 line-clamp-1">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                      <span className="text-base font-bold text-gray-900">{product.price}</span>
                      <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#f3f9fb] text-[#008ecc] hover:bg-[#008ecc] hover:text-white rounded-xl text-xs font-bold transition-all duration-300 active:scale-95">
                        Add to Bag
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default ShopNowPage;