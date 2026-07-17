import React from 'react';

const floatingLookbookItems = [
  { id: 1, img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400", position: "top-[10%] left-[15%]" },
  { id: 2, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400", position: "bottom-[15%] left-[40%]" },
  { id: 3, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400", position: "top-[20%] right-[15%]" }
];

export default function InteractiveGallery() {
  return (
    <section className="relative w-full h-[90vh] bg-white overflow-hidden my-12">
      {/* Floating scattered looks */}
      {floatingLookbookItems.map((item) => (
        <div 
          key={item.id} 
          className={`absolute ${item.position} w-48 md:w-64 transition-transform duration-500 hover:scale-105 cursor-pointer`}
        >
          <img 
            src={item.img} 
            alt="Lookbook Item" 
            className="w-full h-auto object-contain bg-white mix-blend-multiply"
          />
        </div>
      ))}
    </section>
  );
}