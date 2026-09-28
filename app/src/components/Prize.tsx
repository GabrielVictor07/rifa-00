import React, { useState } from 'react';
import { CONFIG } from '../config';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Prize = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % CONFIG.PRIZE.IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + CONFIG.PRIZE.IMAGES.length) % CONFIG.PRIZE.IMAGES.length);
  };

  return (
    <section id="premio" className="w-full py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">O Prêmio</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{CONFIG.PRIZE.DESCRIPTION}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative group animate-on-scroll glass p-2">
            <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
              {CONFIG.PRIZE.IMAGES.map((img, idx) => (
                <img 
                  key={idx}
                  src={img}
                  alt={`${CONFIG.PRIZE.NAME} - foto ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-primary hover:text-black transition-colors opacity-0 group-hover:opacity-100">
              <ChevronLeft />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-primary hover:text-black transition-colors opacity-0 group-hover:opacity-100">
              <ChevronRight />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {CONFIG.PRIZE.IMAGES.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-primary w-6' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold mb-8">Ficha Técnica</h3>
            <div className="flex flex-col gap-4">
              {CONFIG.PRIZE.SPECS.map((spec, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 glass hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="text-gray-300 font-medium">{spec.label}</span>
                  </div>
                  <span className="font-bold text-lg text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
