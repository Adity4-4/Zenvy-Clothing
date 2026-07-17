import React from 'react';

const products = [
  { id: 1, name: "Short Sleeves Prime Fit", price: "$47.55", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
  { id: 2, name: "Contrast Cargo", price: "$47.55", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400" },
  { id: 3, name: "Tailored Everywear Outer", price: "$47.55", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400" },
  { id: 4, name: "Bermuda Pants", price: "$47.55", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400" },
];

export default function ProductGrid() {
  return (
    <section className="px-12 py-16 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="overflow-hidden bg-gray-50 aspect-[3/4] mb-4">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-102"
              />
            </div>
            <div className="flex justify-between items-start text-xs font-medium text-gray-800 tracking-wide">
              <h3 className="max-w-[70%] leading-relaxed">{product.name}</h3>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Section Action Trigger */}
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-xl font-normal text-black tracking-widest mb-6">Featured Product</h2>
        <button className="border border-black text-xs tracking-wider px-10 py-2.5 uppercase hover:bg-black hover:text-white transition duration-300">
          View All
        </button>
      </div>
    </section>
  );
}