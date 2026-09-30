import React from 'react';
// Changed these two lines to fix the import error
import { tournaments } from '../data/tournaments';
import { players } from '../data/players';

export default function HomePage() {
  return (
    <main className="relative">
      {/* 1. CINEMATIC NAV */}
      <nav className="fixed w-full z-50 px-4 md:px-6 py-6 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-midnight/80 backdrop-blur-md border border-white/10 px-4 md:px-8 py-4 rounded-full">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Crest" className="h-8 md:h-10 w-auto" />
            <span className="font-bebas text-2xl md:text-3xl text-white tracking-tighter uppercase">AV Gardens FC</span>
          </div>
          <div className="hidden lg:flex gap-10 font-bebas text-xl text-white/80 uppercase tracking-widest">
            <a href="/" className="text-gold">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/squad" className="hover:text-white transition">Squad</a>
            <a href="/matches" className="hover:text-white transition">Matches</a>
            <a href="/gallery" className="hover:text-white transition">Gallery</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
          </div>
          <a href="/contact" className="bg-burgundy text-white font-bebas text-lg md:text-xl px-4 md:px-6 py-2 rounded-full hover:bg-white hover:text-burgundy transition">
            Partner
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-midnight overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.jpg" className="w-full h-full object-cover opacity-50 scale-105" alt="Action" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center mb-8">
            <img src="/images/logo.png" className="h-24 md:h-32 w-auto animate-pulse" alt="Crest" />
          </div>
          <h1 className="font-bebas text-[15vw] md:text-[10rem] text-white leading-none italic tracking-tighter uppercase">
            AV Gardens <span className="text-stroke">FC</span>
          </h1>
          <p className="font-montserrat text-gold font-bold text-xs md:text-xl tracking-[0.3em] md:tracking-[0.5em] uppercase mb-12">
            Lahore • Football • Community
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-bebas">
            <a href="/squad" className="bg-white text-midnight px-8 md:px-12 py-3 md:py-4 text-xl md:text-2xl hover:bg-gold transition transform hover:-translate-y-1">The Squad</a>
            <a href="/about" className="border-2 border-white/30 text-white px-8 md:px-12 py-3 md:py-4 text-xl md:text-2xl hover:bg-white hover:text-midnight transition transform hover:-translate-y-1">Our Story</a>
          </div>
        </div>

        {/* Floating Quick Stats */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl hidden md:grid grid-cols-3 gap-4 px-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="font-bebas text-4xl text-gold">100+</p>
            <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Wins Recorded</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="font-bebas text-4xl text-gold">2023</p>
            <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Founded</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-center">
            <p className="font-bebas text-4xl text-gold">4 SEASONS</p>
            <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Juniors Organized</p>
          </div>
        </div>
      </section>

      {/* 3. QUICK ABOUT PREVIEW */}
      <section className="py-24 md:py-32 px-6 bg-bone">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-gold/10 rounded-full blur-3xl"></div>
            <img src="/images/team-photo.jpg" className="relative z-10 w-full h-auto border-[8px] md:border-[16px] border-white shadow-2xl" alt="Team" />
          </div>
          <div>
            <h2 className="font-bebas text-6xl md:text-7xl text-burgundy mb-8 leading-none italic uppercase">Growing with Purpose.</h2>
            <p className="text-lg md:text-xl text-midnight/70 leading-relaxed mb-10">
              Based in Ali View Garden, Phase 3, Lahore, AV Gardens FC is a grassroots club built on organization and ambition. We provide a platform for both senior and junior talent to thrive in a structured football environment.
            </p>
            <a href="/about" className="font-bebas text-2xl text-burgundy border-b-4 border-gold pb-1 hover:text-gold transition uppercase">Read Full Story</a>
          </div>
        </div>
      </section>

      {/* 4. NOTABLE WINS TICKER */}
      <div className="bg-burgundy py-12 md:py-16 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-bebas text-2xl text-gold/60 mb-8 uppercase tracking-[0.3em] text-center">Notable Wins</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-20">
             <div className="text-center">
                <p className="text-white/40 text-[10px] font-bold uppercase mb-2">vs Real CTG FC</p>
                <p className="font-bebas text-4xl md:text-5xl text-white">27 — 5</p>
             </div>
             <div className="text-center">
                <p className="text-white/40 text-[10px] font-bold uppercase mb-2">vs Eden FC</p>
                <p className="font-bebas text-4xl md:text-5xl text-white">13 — 7</p>
             </div>
             <div className="text-center">
                <p className="text-white/40 text-[10px] font-bold uppercase mb-2">vs NASTP FC</p>
                <p className="font-bebas text-4xl md:text-5xl text-white">11 — 5</p>
             </div>
          </div>
        </div>
      </div>

      {/* 5. CTA SECTION */}
      <section className="py-24 md:py-32 bg-midnight text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <img src="/images/hero-bg.jpg" className="w-full h-full object-cover grayscale" alt="BG" />
         </div>
         <div className="relative z-10 px-6">
            <h2 className="font-bebas text-6xl md:text-7xl text-white mb-6 uppercase">Partner With Us</h2>
            <p className="text-gold font-bold uppercase tracking-widest mb-10 max-w-xl mx-auto text-sm md:text-base">Help us build the future of Lahore football. Sponsorship and community partnership opportunities available.</p>
            <a href="/contact" className="bg-gold text-midnight font-bebas text-2xl px-12 py-4 hover:bg-white transition inline-block uppercase">Become a Partner</a>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 md:py-20 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img src="/images/logo.png" className="h-12 md:h-16 w-auto mx-auto mb-8 opacity-30 grayscale" alt="Logo" />
          <p className="font-bebas text-2xl text-burgundy mb-2 uppercase tracking-tighter">AV Gardens FC</p>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-8">Ali View Garden, Phase 3, Lahore</p>
          <div className="flex justify-center gap-8 font-bebas text-xl text-gray-400 mb-12">
            <a href="https://instagram.com/avgardensfc" target="_blank" className="hover:text-burgundy transition">Instagram</a>
            <a href="mailto:avgardensfc@gmail.com" className="hover:text-burgundy transition">Email</a>
          </div>
          <p className="text-[9px] text-gray-300 uppercase font-bold tracking-[0.2em]">© 2023 - 2026 AV Gardens FC • Home of Lahore Football</p>
        </div>
      </footer>
    </main>
  );
}
