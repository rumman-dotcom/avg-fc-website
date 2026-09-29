import React from 'react';

const squad = {
  FORWARDS: [
    { name: "Ali Mahfooz", no: "7", pos: "Left-Wing/Forward" },
    { name: "Sohaib Roomi", no: "10", pos: "Forward" },
    { name: "Rana Abdullah", no: "11", pos: "Right-wing/Forward" },
    { name: "Abbas Bhatti", no: "9", pos: "Forward" },
  ],
  MIDFIELDERS: [
    { name: "Muizz Asif", no: "17", pos: "CM/Midfielder" },
    { name: "M. Rumman", no: "5", pos: "CDM/DEFENSIVE Mid" },
    { name: "Huzaifa", no: "8", pos: "CDM/Defensive Mid" },
  ],
  DEFENDERS: [
    { name: "Abeer-Ur-Rehman", no: "4", pos: "Right Back/Defender" },
    { name: "Hamza", no: "3", pos: "Left back/ Defender" },
  ],
  GOALKEEPER: [
    { name: "Abdullah Omar", no: "1", pos: "Goal-Keeper" },
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-bone selection:bg-gold selection:text-midnight">
      {/* PRE-NAV BAR */}
      <div className="bg-midnight text-gold text-[10px] py-1 text-center font-bold tracking-[0.3em] uppercase">
        The Home of Lahore Football • Established 2023
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gold/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bebas text-4xl text-burgundy tracking-tighter leading-none">AVG FC</div>
          <div className="hidden md:flex space-x-10 font-bebas text-xl text-midnight">
            <a href="#about" className="hover:text-gold transition">Our Story</a>
            <a href="#squad" className="hover:text-gold transition">Squad</a>
            <a href="#matches" className="hover:text-gold transition">Matches</a>
            <a href="#contact" className="hover:text-gold transition">Join Club</a>
          </div>
          <div className="font-bebas text-xl text-burgundy border-2 border-burgundy px-4 py-1 hover:bg-burgundy hover:text-white transition cursor-pointer">
            Partner With Us
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center bg-midnight overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="AV Gardens FC" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-bebas text-8xl md:text-[14rem] text-white leading-none italic drop-shadow-2xl">
            AV GARDENS FC
          </h1>
          <p className="text-gold font-bebas text-2xl md:text-4xl tracking-[0.4em] mt-2 mb-10 opacity-90">
            LAHORE • COMMUNITY • AMBITION
          </p>
          <div className="flex flex-wrap justify-center gap-6 font-bebas">
            <a href="#squad" className="bg-gold text-midnight px-12 py-4 text-2xl hover:bg-white transition-all transform hover:-translate-y-1">View The Squad</a>
            <a href="#about" className="border-2 border-white text-white px-12 py-4 text-2xl hover:bg-white hover:text-midnight transition-all transform hover:-translate-y-1">Our Story</a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gold/20 rounded-lg blur group-hover:bg-gold/30 transition"></div>
            <div className="relative aspect-video bg-gray-200 overflow-hidden border-4 border-white shadow-2xl">
              <img src="/images/team-photo.jpg" alt="Team" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h2 className="font-bebas text-7xl text-burgundy mb-8 leading-[0.9]">Built in Lahore.<br/><span className="text-gold">Growing with purpose.</span></h2>
            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8">
              Based in Ali View Garden, Phase 3, AV Gardens FC is a grassroots club focused on building a competitive and organized football community. We bridge the gap between passion and professional organization.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="font-bebas text-5xl text-burgundy">100+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Wins Secured</p>
              </div>
              <div>
                <p className="font-bebas text-5xl text-burgundy">4 SEASONS</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Juniors Hosted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIN TICKER */}
      <div className="bg-burgundy py-10 border-y-4 border-gold overflow-hidden whitespace-nowrap">
        <div className="inline-block font-bebas text-4xl text-white animate-pulse px-10">
          <span className="text-gold">RECORD WIN:</span> AVG FC 27-5 REAL CTG FC • AVG FC 11-5 NASTP FC • AVG FC 13-7 EDEN FC • AVG FC 7-3 LGU FC • AVG FC 10-6 SNAKES FC • AVG FC 10-6 PACE FC
        </div>
      </div>

      {/* SQUAD SECTION */}
      <section id="squad" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-24">
          <h2 className="font-bebas text-8xl text-burgundy mb-4">Official Squad</h2>
          <div className="h-2 w-32 bg-gold mx-auto"></div>
          <p className="mt-6 text-gray-400 font-bold uppercase tracking-widest italic">Home of Lahore Football • 2026/27</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {Object.entries(squad).map(([pos, players]) => (
            <div key={pos}>
              <h3 className="font-bebas text-4xl text-gold mb-12 flex items-center gap-6">
                {pos} <div className="h-[1px] flex-grow bg-gold/20"></div>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                {players.map((player) => (
                  <div key={player.name} className="group cursor-default">
                    <div className="aspect-[3/4] bg-bone relative overflow-hidden mb-6 border-b-8 border-burgundy group-hover:border-gold transition-all duration-500">
                      <div className="absolute top-4 left-4 font-bebas text-6xl text-gray-200/50 z-0">{player.no}</div>
                      <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent"></div>
                    </div>
                    <h4 className="font-bebas text-3xl text-burgundy group-hover:text-gold transition">{player.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-tighter text-gray-400">{player.pos}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="bg-midnight py-32 text-white border-t-8 border-gold">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-20">
          <div>
            <div className="font-bebas text-6xl text-gold mb-6 leading-none">AVG FC</div>
            <p className="text-gray-400 font-medium leading-loose">
              Representing Ali View Garden, Phase 3, Lahore with pride. We are built for competition, community, and the future of Pakistani football.
            </p>
          </div>
          <div>
            <h4 className="font-bebas text-3xl text-white mb-8 border-b border-white/10 pb-2">Connect</h4>
            <div className="space-y-4 font-bold text-gray-400 uppercase tracking-widest text-sm">
              <p>Email: <span className="text-white">avgardensfc@gmail.com</span></p>
              <p>WhatsApp: <span className="text-white">+92 331 5602210</span></p>
              <p>Instagram: <a href="https://www.instagram.com/avgardensfc/" className="text-gold">@avgardensfc</a></p>
            </div>
          </div>
          <div className="bg-white/5 p-10 border-l-4 border-gold">
            <h4 className="font-bebas text-3xl text-gold mb-4 uppercase">Become a Partner</h4>
            <p className="text-gray-300 mb-6 text-sm">Join Lahore's most organized grassroots club. Quality kits, tournament reach, and community pride.</p>
            <a href="mailto:avgardensfc@gmail.com" className="font-bebas text-xl bg-gold text-midnight px-6 py-2 hover:bg-white transition">Inquire Now</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
