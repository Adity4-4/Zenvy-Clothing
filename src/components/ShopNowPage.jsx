import React, { useState, useEffect, useRef } from 'react';
import { SlidersHorizontal, LayoutGrid, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// GSAP Imports
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BackgroundLayer } from './BackgroundLayer';

gsap.registerPlugin(ScrollTrigger);

const ShopNowPage = () => {
  // State Management
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // DOM Refs for GSAP
  const mainWrapperRef = useRef();
  const heroVideoRef = useRef();
  const gridContainerRef = useRef();
  const productRefs = useRef([]);

  // Fetch Data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const rawData = await response.json();

        const clothingData = rawData.filter(item => 
          item.category === "men's clothing" || item.category === "women's clothing"
        );

        // Corrected spelling and grammar mapping for the categories
        const formattedProducts = clothingData.map(item => ({
          id: item.id,
          name: item.title,
          category: item.category === "men's clothing" ? "Men's Wear" : "Women's Wear",
          price: `$${item.price.toFixed(2)}`,
          img: item.image
        }));

        setProducts(formattedProducts);
        const uniqueCategories = ["All", ...new Set(formattedProducts.map(p => p.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // GSAP Animation 1: Global Parallax (Runs ONLY ONCE on mount)
  // 1. Updated GSAP Hook
  useGSAP(() => {
    // A more stable parallax that doesn't conflict with ScrollTrigger.refresh()
    gsap.to(heroVideoRef.current, {
      y: 100, // Move down slightly
      ease: "none",
      scrollTrigger: {
        trigger: mainWrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Smoother scrub prevents layout jumps
      }
    });
  }, []); 

  // 2. Updated Product Grid Stagger (Refreshed correctly)
  useGSAP(() => {
    if (!loading && productRefs.current.length > 0) {
      // Use a slightly longer delay to ensure DOM is fully painted
      const timer = setTimeout(() => {
        gsap.fromTo(
          productRefs.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
          }
        );
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [loading, selectedCategory]); // <-- Only affects the grid when these change

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Clear the refs array before rendering new filtered items
  productRefs.current = [];

  return (
    <div ref={mainWrapperRef} className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* 1. FIXED BACKGROUND LAYER */}

      {/* 1. FIXED BACKGROUND LAYER */}
      <BackgroundLayer/>

      {/* 2. FOREGROUND CONTENT LAYER */}
      <div className="relative z-10 w-full flex flex-col">
        
        {/* Full-Screen Hero Text Area */}
        <div className="w-full h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-6 drop-shadow-2xl">
              The Collection
            </h1>
            <p className="text-xs md:text-sm text-zinc-300 tracking-[0.3em] uppercase font-semibold drop-shadow-md">
              Carefully Crafted / Designed to Last
            </p>
          </motion.div>
        </div>

        {/* The Floating Product Section */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 pb-32">
          
          {/* Sleek Filter Panel */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/20 pb-8 mb-16">
            
            {/* Glassmorphic Category Pills */}
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 relative shrink-0 ${
                    selectedCategory === cat 
                      ? 'text-black' 
                      : 'bg-transparent text-white/70 hover:text-white border border-white/20 hover:border-white/50 backdrop-blur-md'
                  }`}
                >
                  {selectedCategory === cat && (
                    <motion.div 
                      layoutId="activeShopTab"
                      className="absolute inset-0 bg-white rounded-full z-0 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>

            {/* High-End Utility Tools */}
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-white justify-end">
              <button className="flex items-center gap-2 px-4 py-2 hover:text-white/70 transition-opacity">
                <SlidersHorizontal size={14} /> Filters
              </button>
              <div className="w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2 px-2 text-white/70">
                <LayoutGrid size={14} className="text-white" /> 
                {loading ? 0 : filteredProducts.length} Items
              </div>
            </div>
          </div>

          {/* 3. Product Grid */}
          {loading ? (
            <div className="w-full h-[40vh] flex flex-col items-center justify-center text-white">
              <Loader2 size={32} className="animate-spin mb-4" />
              <p className="text-xs font-bold tracking-widest uppercase text-white/70">Curating the finest...</p>
            </div>
          ) : (
            <div ref={gridContainerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
              {filteredProducts.map((product, index) => {
                return (
                  <div
                    key={product.id}
                    ref={(el) => (productRefs.current[index] = el)}
                    className="group cursor-pointer flex flex-col"
                  >
                    {/* Floating White Card */}
                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-2">
                      
                      {/* Image Container with Blend Mode Trick */}
                      <div className="relative w-full aspect-[3/4] bg-[#f8f8f8] overflow-hidden border-b border-gray-100">
                        <img 
                          src={product.img} 
                          alt={product.name} 
                          className="w-full h-full object-contain p-8 mix-blend-multiply transition-transform duration-1000 ease-out group-hover:scale-110"
                        />
                        
                        {/* Hover Slide-Up "Quick Add" Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <button className="w-full bg-zinc-900/95 backdrop-blur-sm text-white py-4 flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors shadow-2xl rounded-xl">
                            Add to Bag <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Details Block */}
                      <div className="flex flex-col px-6 py-5">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                            {product.category}
                          </span>
                          <span className="text-sm font-bold text-zinc-900">
                            {product.price}
                          </span>
                        </div>
                        
                        <h3 className="text-sm font-medium text-zinc-800 line-clamp-2 leading-relaxed tracking-tight group-hover:text-zinc-500 transition-colors duration-300">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopNowPage;