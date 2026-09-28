import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Prize } from './components/Prize';
import { ProgressBar } from './components/ProgressBar';
import { BuyTickets } from './components/BuyTickets';
import { HowItWorks } from './components/HowItWorks';
import { Transparency } from './components/Transparency';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Header } from './components/Header';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Fade-in + slide-up effect for sections
    const sections = gsap.utils.toArray('.animate-on-scroll');
    
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative flex flex-col items-center">
      <ScrollProgressBar />
      <Header />
      <main className="w-full max-w-[1920px] flex flex-col items-center overflow-hidden">
        <Hero />
        <Countdown />
        <Prize />
        <ProgressBar />
        <BuyTickets />
        <HowItWorks />
        <Transparency />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
