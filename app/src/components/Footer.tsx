import React from 'react';
import { CONFIG } from '../config';
import { MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-background-alt pt-16 pb-8 border-t border-white/10 relative mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-2xl font-bold mb-2 uppercase tracking-wider">{CONFIG.COMPANY.NAME}</h3>
            <p className="text-gray-400 max-w-md text-sm">
              Sua chance de realizar um sonho por um valor acessível. Transparência e segurança em todos os nossos sorteios.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="#premio" className="hover:text-primary transition-colors">O Prêmio</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
            <a href="#faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {CONFIG.COMPANY.NAME}. Todos os direitos reservados.</p>
          <p>CNPJ: {CONFIG.COMPANY.CNPJ}</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${CONFIG.COMPANY.WHATSAPP.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20b858] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all z-50 animate-bounce"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </footer>
  );
};
