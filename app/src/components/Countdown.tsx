import React, { useEffect, useState } from 'react';
import { CONFIG } from '../config';
import { Timer } from 'lucide-react';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(CONFIG.RAFFLE.DRAW_DATE).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    const timerId = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timerId);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="w-full py-16 px-4 animate-on-scroll">
      <div className="container mx-auto max-w-4xl glass p-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Timer className="text-primary w-8 h-8" />
          <h2 className="text-3xl font-bold text-center">Sorteio em</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { label: 'Dias', value: timeLeft.days },
            { label: 'Horas', value: timeLeft.hours },
            { label: 'Minutos', value: timeLeft.minutes },
            { label: 'Segundos', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-background-alt border border-white/10 rounded-2xl w-20 h-24 md:w-28 md:h-32 flex items-center justify-center mb-2 shadow-inner">
                <span className="text-4xl md:text-6xl font-bold text-primary tabular-nums">
                  {formatNumber(item.value)}
                </span>
              </div>
              <span className="text-sm md:text-base text-gray-400 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
