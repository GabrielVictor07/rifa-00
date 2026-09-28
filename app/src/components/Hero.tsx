import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CONFIG } from '../config';

export const Hero = () => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Parallax effect on mouse move for desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to(imgRef.current, {
        x,
        y,
        duration: 1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20" ref={heroRef}>
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-on-scroll">
          Ganhe um <span className="text-primary block md:inline">{CONFIG.PRIZE.NAME}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate-on-scroll">
          Por apenas <strong className="text-primary text-3xl">{formatPrice(CONFIG.RAFFLE.TICKET_PRICE_CENTS)}</strong> o número!
        </p>

        <div className="w-full max-w-3xl relative mb-12 animate-on-scroll" ref={imgRef}>
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
          <img 
            src={CONFIG.PRIZE.IMAGES[0]} 
            alt={CONFIG.PRIZE.NAME} 
            className="w-full h-auto object-cover rounded-2xl shadow-2xl"
          />
        </div>

        <button 
          onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-on-scroll bg-primary text-background font-bold text-xl py-4 px-12 rounded-full hover:scale-105 glow-hover transition-transform"
        >
          Quero participar agora!
        </button>
      </div>
    </section>
  );
};
