import React from 'react';
import { players } from '../../data/players';

export default function SquadPage() {
  const categories = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  return (
    <main className="bg-bone min-h-screen">
       {/* SIMPLE SUB-NAV */}
       <nav className="bg-midnight px-8 py-6 flex justify-between items-center border-b border-gold/30">
          <a href="/" className="font-bebas text-2xl text-white">← Back to Home</a>
          <span className="font-bebas text-2xl text-gold uppercase tracking-widest">The Roster</span>
       </nav>

       <header className="py-20 px-6 text-center bg-white border-b border-gold/10">
          <h1 className="font-bebas text-8xl text-burgundy mb-4 uppercase">The Squad</h1>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm">Official Selection • Lahore, PK</p>
       </header>

       <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
          {categories.map(cat => {
            const catPlayers = players.filter(p => p.position === cat);
            if (catPlayers.length === 0) return null;

            return (
              <section key={cat}>
                <h2 className="font-bebas text-4xl text-gold mb-12 border-b border-gold/20 pb-4 uppercase tracking-widest">{cat}s</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  {catPlayers.map(player => (
                    <div key={player.name} className="group">
                      <div className="aspect-[3/4] bg-white relative overflow-hidden border-b-8 border-burgundy group-hover:border-gold transition-all duration-500 shadow-lg">
                        <div className="absolute top-4 left-4 font-bebas text-6xl text-gray-100 z-0 select-none">{player.number}</div>
                        {/* Placeholder Silhouette for missing photos */}
                        <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-midnight/10 to-transparent">
                           <img src="/images/logo.png" className="w-20 opacity-10 grayscale group-hover:opacity-20 transition" alt="Placeholder" />
                        </div>
                      </div>
                      <h3 className="mt-6 font-bebas text-3xl text-burgundy group-hover:text-gold transition uppercase leading-none">{player.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">Squad No. {player.number}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
       </div>

       <footer className="bg-burgundy py-20 text-center text-white">
          <p className="font-bebas text-3xl mb-4">AV Gardens FC</p>
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 italic">Building a stronger football community in Lahore.</p>
       </footer>
    </main>
  );
}
