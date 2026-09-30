import React from 'react';

export default function AboutPage() {
  return (
    <main className="bg-bone min-h-screen">
      {/* SUB-NAV */}
      <nav className="bg-midnight px-8 py-6 flex justify-between items-center border-b border-gold/30">
        <a href="/" className="font-bebas text-2xl text-white">← Back to Home</a>
        <span className="font-bebas text-2xl text-gold uppercase tracking-widest">Our Story</span>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-32 px-6 overflow-hidden bg-midnight">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero-bg.jpg" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-bebas text-7xl md:text-9xl text-white mb-6 uppercase italic">Built in Lahore.</h1>
          <p className="text-gold font-bebas text-2xl tracking-[0.4em] uppercase">Established 2023</p>
        </div>
      </header>

      {/* CONTENT SECTIONS */}
      <section className="py-24 px-6 max-w-5xl mx-auto space-y-32">
        
        {/* The Origin */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-bebas text-5xl text-burgundy mb-6 uppercase">The Identity</h2>
            <p className="text-midnight/80 text-lg leading-loose font-medium">
              Based in Ali View Garden, Phase 3, Lahore, AV Gardens FC is a grassroots club that bridges the gap between community passion and professional organization. What started as a local initiative has grown into a competitive football hub for the neighborhood.
            </p>
          </div>
          <div className="border-8 border-white shadow-2xl rotate-2">
            <img src="/images/team-photo.jpg" alt="Team Moment" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Milestones Grid */}
        <div className="bg-white p-12 border-l-8 border-gold shadow-xl">
           <h2 className="font-bebas text-5xl text-burgundy mb-12 uppercase text-center md:text-left">Club Milestones</h2>
           <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <p className="font-bebas text-6xl text-gold">100+</p>
                <p className="font-bold uppercase tracking-widest text-xs text-midnight/40">Match Wins</p>
              </div>
              <div>
                <p className="font-bebas text-6xl text-gold">4</p>
                <p className="font-bold uppercase tracking-widest text-xs text-midnight/40">Juniors Seasons</p>
              </div>
              <div>
                <p className="font-bebas text-6xl text-gold">2</p>
                <p className="font-bold uppercase tracking-widest text-xs text-midnight/40">Years of Growth</p>
              </div>
           </div>
        </div>

        {/* The Ambition */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-bebas text-6xl text-burgundy mb-6 uppercase">Our Ambition</h2>
          <p className="text-midnight/70 text-xl italic leading-relaxed">
            "To build AV Gardens FC into a competitive, professional-standard team capable of representing Ali View Garden with pride and creating a strong future for Lahore football."
          </p>
        </div>

      </section>

      <footer className="bg-midnight py-20 text-center text-white border-t border-gold/30">
        <a href="/contact" className="bg-gold text-midnight font-bebas text-2xl px-12 py-4 hover:bg-white transition inline-block uppercase">Join The Community</a>
      </footer>
    </main>
  );
}
