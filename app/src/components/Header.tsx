import React, { useEffect, useState } from 'react';
import { CONFIG } from '../config';
import { Car } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
        <div className="flex items-center gap-2">
          <Car className="text-primary w-8 h-8" />
          <span className="font-bold text-xl uppercase tracking-wider">{CONFIG.COMPANY.NAME}</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#premio" className="text-sm font-medium hover:text-primary transition-colors">O Prêmio</a>
          <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">Como Funciona</a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Dúvidas</a>
        </nav>
        <button 
          onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary text-background font-bold py-2 px-6 rounded-full hover:shadow-[0_0_15px_rgba(245,197,66,0.6)] transition-all"
        >
          Participar
        </button>
      </div>
    </header>
  );
};
