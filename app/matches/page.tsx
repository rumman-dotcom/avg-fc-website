import React from 'react';
import { tournaments } from '../../data/tournaments';

export default function MatchesPage() {
  const organized = tournaments.filter(t => t.isOrganizedByClub);
  const competed = tournaments.filter(t => t.isOrganizedByClub === false);

  return (
    <main className="bg-bone min-h-screen">
      <nav className="bg-midnight px-8 py-6 flex justify-between items-center border-b border-gold/30">
        <a href="/" className="font-bebas text-2xl text-white">← Back to Home</a>
        <span className="font-bebas text-2xl text-gold uppercase tracking-widest">Matches & Stats</span>
      </nav>

      <header className="py-24 px-6 text-center bg-white border-b border-gold/10">
        <h1 className="font-bebas text-8xl text-burgundy mb-4 uppercase italic">Competitions</h1>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm">Official Records • Tournament History</p>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* MAJOR TOURNAMENTS SECTION */}
        <section>
          <h2 className="font-bebas text-5xl text-burgundy mb-12 flex items-center gap-6 uppercase">
            Tournament History <div className="h-[2px] flex-grow bg-gold/20"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {competed.map((t) => (
              <div key={t.name} className="bg-white p-8 border-b-8 border-burgundy shadow-lg group hover:-translate-y-2 transition-all duration-300">
                <p className="text-gold font-bold text-xs uppercase tracking-widest mb-4">{t.year}</p>
                <h3 className="font-bebas text-3xl text-midnight mb-6 leading-none group-hover:text-burgundy transition">{t.name}</h3>
                <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                   <span className="text-[10px] font-bold uppercase text-gray-400 tracking-tighter">Result</span>
                   <span className="font-bebas text-2xl text-burgundy italic">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* JUNIORS TOURNAMENTS SECTION */}
        <section className="bg-midnight p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy/20 rounded-full blur-[120px]"></div>
          <div className="relative z-10">
            <h2 className="font-bebas text-6xl text-gold mb-4 uppercase italic">AV Gardens Juniors</h2>
            <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs mb-16 italic underline decoration-gold underline-offset-8">Club Organized Events</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organized.map((t) => (
                <div key={t.name} className="border border-white/10 p-6 bg-white/5 backdrop-blur-sm">
                   <p className="font-bebas text-4xl text-white mb-1">{t.name.split('-')[1] || t.name}</p>
                   <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-4">{t.year}</p>
                   <p className="text-xs text-white/40 uppercase font-medium">{t.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <footer className="bg-white py-20 text-center border-t border-gold/20">
         <p className="font-bebas text-2xl text-burgundy uppercase tracking-tighter">Built to Compete</p>
      </footer>
    </main>
  );
}
