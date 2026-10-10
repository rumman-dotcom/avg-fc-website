'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/squad', label: 'Squad' },
  { href: '/matches', label: 'Matches' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <nav aria-label="Main navigation" onKeyDown={(event) => { if (event.key === 'Escape') setMenuOpen(false); }} className="relative border-b border-gold/30 bg-midnight/95 px-4 py-3 text-white shadow-lg backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setMenuOpen(false)}>
            <Image src="/images/logo.png" alt="AV Gardens FC crest" width={48} height={48} priority className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11" />
            <span className="truncate font-bebas text-xl uppercase tracking-tight sm:text-2xl md:text-3xl">AV Gardens FC</span>
          </Link>
          <div className="hidden items-center gap-4 font-bebas text-lg uppercase tracking-widest lg:flex xl:gap-7 xl:text-xl">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={`whitespace-nowrap transition hover:text-gold ${active ? 'text-gold' : 'text-white/80'}`}>{label}</Link>;
            })}
          </div>
          <button type="button" className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span aria-hidden="true" className="text-2xl leading-none">{menuOpen ? '×' : '☰'}</span>
          </button>
        </div>
        <div id="mobile-navigation" hidden={!menuOpen} className="absolute inset-x-0 top-full border-t border-white/10 bg-midnight px-4 pb-4 pt-2 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 sm:grid-cols-3">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return <Link key={href} href={href} aria-current={active ? 'page' : undefined} onClick={() => setMenuOpen(false)} className={`rounded-lg px-4 py-3 font-bebas text-xl uppercase tracking-wider transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${active ? 'bg-burgundy text-gold' : 'text-white hover:bg-white/10 hover:text-gold'}`}>{label}</Link>;
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
