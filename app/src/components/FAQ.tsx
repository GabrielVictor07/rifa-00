import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export const FAQ = () => {
  const faqs = [
    {
      q: 'Como são escolhidos os ganhadores?',
      a: 'Utilizamos o resultado da Loteria Federal. Os números sorteados são comparados com os bilhetes vendidos. O processo é 100% auditável e transparente.'
    },
    {
      q: 'Como vou saber quais são meus números?',
      a: 'Após a confirmação do pagamento, você será redirecionado e também receberá seus números diretamente no WhatsApp cadastrado.'
    },
    {
      q: 'E se o ganhador não for de São Paulo?',
      a: 'O prêmio é entregue com frete grátis para todo o Brasil. Você recebe o carro na porta da sua casa, sem custos adicionais.'
    },
    {
      q: 'O que acontece se a meta de vendas não for batida?',
      a: 'Caso a meta mínima não seja atingida até a data estipulada, a organização pode prorrogar a data do sorteio até que a cota seja preenchida.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-xl text-gray-400">Tudo o que você precisa saber</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass overflow-hidden animate-on-scroll" 
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <button 
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
              </button>
              
              <div 
                className="px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out"
                style={{ 
                  maxHeight: openIndex === idx ? '200px' : '0',
                  paddingBottom: openIndex === idx ? '1.25rem' : '0'
                }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
