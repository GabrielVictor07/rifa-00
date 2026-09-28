import React from 'react';
import { MousePointerClick, QrCode, Trophy } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-10 h-10 text-primary" />,
      title: 'Escolha a quantidade',
      desc: 'Você pode escolher pacotes de números ou digitar a quantidade exata que deseja comprar.'
    },
    {
      icon: <QrCode className="w-10 h-10 text-primary" />,
      title: 'Pague com Pix',
      desc: 'Faça o pagamento rápido e seguro. A aprovação é imediata e seus números são gerados na hora.'
    },
    {
      icon: <Trophy className="w-10 h-10 text-primary" />,
      title: 'Cruze os dedos',
      desc: 'Aguarde o sorteio pela Loteria Federal. Se você for o vencedor, entraremos em contato!'
    }
  ];

  return (
    <section id="como-funciona" className="w-full py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-400">É simples, rápido e totalmente seguro</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl relative overflow-hidden group animate-on-scroll" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-150 transition-transform duration-500">
                {step.icon}
              </div>
              <div className="bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/10 group-hover:border-primary/50 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
