import React from 'react';

export default function ContactPage() {
  return (
    <main className="bg-bone min-h-screen">
      <nav className="bg-midnight px-8 py-6 flex justify-between items-center border-b border-gold/30">
        <a href="/" className="font-bebas text-2xl text-white">← Back to Home</a>
        <span className="font-bebas text-2xl text-gold uppercase tracking-widest">Connect</span>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Info */}
        <div>
          <h1 className="font-bebas text-8xl text-burgundy mb-8 uppercase italic leading-none">Join The<br/>Community</h1>
          <p className="text-xl text-midnight/70 mb-12 leading-relaxed">
            Whether you are an aspiring player, a supporter, or a potential partner, we invite you to be part of the AV Gardens FC journey in Lahore.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
               <div className="w-12 h-12 bg-burgundy flex items-center justify-center text-gold font-bold">IG</div>
               <div>
                  <p className="text-xs font-bold uppercase text-gray-400">Instagram</p>
                  <a href="https://instagram.com/avgardensfc" target="_blank" className="font-bebas text-3xl text-midnight hover:text-gold transition">@avgardensfc</a>
               </div>
            </div>
            <div className="flex items-start gap-6">
               <div className="w-12 h-12 bg-burgundy flex items-center justify-center text-gold font-bold">WA</div>
               <div>
                  <p className="text-xs font-bold uppercase text-gray-400">WhatsApp / Call</p>
                  <p className="font-bebas text-3xl text-midnight">+92 331 5602210</p>
               </div>
            </div>
            <div className="flex items-start gap-6">
               <div className="w-12 h-12 bg-burgundy flex items-center justify-center text-gold font-bold">EM</div>
               <div>
                  <p className="text-xs font-bold uppercase text-gray-400">Email Address</p>
                  <p className="font-bebas text-3xl text-midnight">avgardensfc@gmail.com</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Sponsorship Pitch */}
        <div className="bg-midnight p-12 text-white border-t-8 border-gold shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/20 blur-3xl"></div>
           <h2 className="font-bebas text-5xl text-gold mb-6 uppercase italic">Become a Partner</h2>
           <p className="text-white/60 mb-10 font-medium">
             Support grassroots football and gain visibility within the Ali View Garden community. We are currently seeking partners for:
           </p>
           <ul className="space-y-4 mb-12 font-bebas text-xl tracking-wide">
              <li className="flex items-center gap-4 text-white/80 border-b border-white/5 pb-2">✓ KIT SPONSORSHIP</li>
              <li className="flex items-center gap-4 text-white/80 border-b border-white/5 pb-2">✓ TOURNAMENT NAMING RIGHTS</li>
              <li className="flex items-center gap-4 text-white/80 border-b border-white/5 pb-2">✓ EQUIPMENT & GEAR SUPPORT</li>
              <li className="flex items-center gap-4 text-white/80 border-b border-white/5 pb-2">✓ YOUTH DEVELOPMENT PROGRAMS</li>
           </ul>
           <a href="mailto:avgardensfc@gmail.com" className="bg-gold text-midnight font-bebas text-2xl px-10 py-4 block text-center hover:bg-white transition uppercase">Inquire about partnership</a>
        </div>

      </div>

      <div className="h-64 bg-gray-200 grayscale">
         {/* This is a placeholder for a Google Map of Ali View Garden Phase 3 */}
         <div className="w-full h-full flex items-center justify-center bg-midnight/90 text-white/20 font-bebas text-4xl uppercase tracking-[0.5em]">
            Ali View Garden, Phase 3, Lahore
         </div>
      </div>
    </main>
  );
}
