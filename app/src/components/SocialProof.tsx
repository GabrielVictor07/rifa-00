import React from 'react';
import { Star } from 'lucide-react';

export const SocialProof = () => {
  const winners = [
    {
      name: 'João Silva',
      city: 'São Paulo - SP',
      prize: 'BMW M3 2023',
      text: 'Não acreditei quando me ligaram! Carro entregue na porta de casa em perfeito estado.',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
    },
    {
      name: 'Maria Oliveira',
      city: 'Rio de Janeiro - RJ',
      prize: 'R$ 100.000 no Pix',
      text: 'Comprei apenas 100 números e mudei minha vida. A Rifa Premium é super transparente.',
      avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d'
    },
    {
      name: 'Carlos Santos',
      city: 'Belo Horizonte - MG',
      prize: 'Porsche Macan',
      text: 'Acompanhei o sorteio pela loteria federal e deu certinho. Recomendo a todos!',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
    }
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ganhadores Anteriores</h2>
          <p className="text-xl text-gray-400">Pessoas reais que tiveram suas vidas transformadas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {winners.map((winner, idx) => (
            <div key={idx} className="glass p-8 flex flex-col gap-4 animate-on-scroll" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic flex-grow">"{winner.text}"</p>
              
              <div className="flex items-center gap-4 mt-4 border-t border-white/10 pt-4">
                <img src={winner.avatar} alt={winner.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary" />
                <div>
                  <h4 className="font-bold">{winner.name}</h4>
                  <p className="text-xs text-gray-400">{winner.city}</p>
                  <p className="text-xs text-primary mt-1 font-bold">Ganhou: {winner.prize}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
