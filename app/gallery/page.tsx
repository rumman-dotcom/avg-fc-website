import React from 'react';
import { galleryImages } from '../../data/gallery';

export default function GalleryPage() {
  return (
    <main className="bg-bone min-h-screen">
      <nav className="bg-midnight px-8 py-6 flex justify-between items-center border-b border-gold/30">
        <a href="/" className="font-bebas text-2xl text-white">← Back to Home</a>
        <span className="font-bebas text-2xl text-gold uppercase tracking-widest">Media Archive</span>
      </nav>

      <header className="py-24 px-6 text-center bg-white">
        <h1 className="font-bebas text-8xl text-burgundy mb-4 uppercase italic">Gallery</h1>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm">Life at AV Gardens FC</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden bg-midnight break-inside-avoid">
              <img 
                src={img.url} 
                alt={img.caption || "AVG FC"} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-midnight to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold font-bold text-[10px] uppercase tracking-widest">{img.category}</span>
                <p className="text-white font-bebas text-xl uppercase mt-1">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info for you */}
        <div className="mt-20 p-8 border-2 border-dashed border-gold/30 text-center">
           <p className="text-midnight/40 font-bold uppercase tracking-widest text-xs">
             More photos being archived. Follow our Instagram for live updates.
           </p>
        </div>
      </div>
    </main>
  );
}
