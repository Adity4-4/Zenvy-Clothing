import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";


// Animation variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const imageReveal = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.2, ease: "easeOut" } 
  }
};

const HomePage = () => {
  const categories = [
    { name: 'SHIRTS', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400' },
    { name: 'DENIM', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400' },
    { name: 'TEES', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=400' },
    { name: 'PANTS', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=400' },
    { name: 'SWEATERS', image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=400' },
    { name: 'OUTERWEAR', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400' },
  ];

  const collections = [
    {
      title: 'New Arrivals',
      buttonText: 'SHOP THE LATEST',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Best-Sellers',
      buttonText: 'SHOP YOUR FAVORITES',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'The Holiday Outfit',
      buttonText: 'SHOP OCCASION',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans overflow-hidden">
      
      {/* 1. Hero Section (Animate on Load) */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-gray-900 flex items-center justify-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={imageReveal}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1800" 
            alt="Zenvy Winter Era" 
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-[#008ecc]/10" />
        </motion.div>

        {/* Content Box with stagger effects */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center text-white px-4 flex flex-col items-center max-w-2xl"
        >
          <motion.span 
            variants={fadeInUp}
            className="flex items-center gap-2 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold text-[#008ecc] mb-4 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
          >
            <Sparkles size={14} className="animate-pulse" /> Winter Season '26
          </motion.span>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-light tracking-tight mb-4"
          >
            Your Cozy Era
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-sm md:text-lg text-gray-200 font-light max-w-md mb-8 leading-relaxed"
          >
            Get peak comfy-chic with our fresh, sustainably crafted winter essentials.
          </motion.p>
          
          <motion.button 
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden bg-[#008ecc] text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-lg shadow-[#008ecc]/25 transition-colors duration-300 hover:bg-[#0076a8]"
          >
           <Link to="/Zenvy Apparel"> <span className="relative z-10 flex items-center gap-2">
              Shop Now <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span></Link>
          </motion.button>
        </motion.div>
      </section>

      {/* 2. Shop by Category (Reveals as you scroll) */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl font-light tracking-[0.15em] uppercase mb-10 text-gray-800"
        >
          Shop by Category
        </motion.h2>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#f3f9fb] border border-gray-100 transition-all duration-300 group-hover:shadow-lg group-hover:border-[#008ecc]/20">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
              <span className="mt-4 text-xs font-semibold tracking-wider text-gray-500 group-hover:text-[#008ecc] transition-colors duration-300">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Highlighted Collections (Smooth Cascade) */}
      <section className="pb-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {collections.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-sm"
            >
              <div className="absolute inset-0 w-full h-full bg-gray-100 overflow-hidden">
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-wide">
                  {item.title}
                </h3>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase shadow-md transition-colors hover:bg-[#f3f9fb] hover:text-[#008ecc]"
                >
                  {item.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Banner / Zoom Image Viewport Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 md:px-12 pb-20 max-w-7xl mx-auto"
      >
        <div className="relative rounded-[2.5rem] overflow-hidden h-[300px] md:h-[400px] flex items-center justify-center group">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200" 
              alt="Sustainability Mission" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-2xl">
            <h2 className="text-xl md:text-3xl font-light tracking-wide mb-4">
              We're on a Mission To Clean Up the Industry
            </h2>
            <p className="text-xs md:text-sm text-gray-200 font-light mb-6 tracking-wide">
              Read about our progress in our latest Impact Report.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-md transition-colors hover:bg-[#f3f9fb] hover:text-[#008ecc]"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default HomePage;