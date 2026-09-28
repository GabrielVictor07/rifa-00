import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProgressBar = () => {
  const [percentage] = useState(78); // Mocked value
  const progressRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (progressRef.current && numberRef.current) {
      gsap.fromTo(progressRef.current, 
        { width: '0%' },
        { 
          width: `${percentage}%`, 
          duration: 2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: progressRef.current,
            start: 'top 80%',
          }
        }
      );

      gsap.to(numberRef.current, {
        innerHTML: percentage,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: numberRef.current,
          start: 'top 80%',
        },
        onUpdate: function() {
          if (numberRef.current) {
            numberRef.current.innerHTML = Math.round(Number(this.targets()[0].innerHTML)) + '%';
          }
        }
      });
    }
  }, [percentage]);

  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-2xl font-bold mb-6 animate-on-scroll">Já vendemos <span ref={numberRef} className="text-primary text-4xl">0%</span> dos números!</h3>
        <div className="w-full h-8 glass rounded-full overflow-hidden p-1 relative animate-on-scroll">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-yellow-600 to-primary rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse" />
          </div>
        </div>
        <p className="mt-4 text-gray-400 text-sm animate-on-scroll">Corra antes que acabe!</p>
      </div>
    </section>
  );
};
