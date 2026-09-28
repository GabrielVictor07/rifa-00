import React from 'react';
import { ShieldCheck, Scale, FileText } from 'lucide-react';
import { CONFIG } from '../config';

export const Transparency = () => {
  return (
    <section className="w-full py-20 px-4 bg-background-alt border-y border-white/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparência Total</h2>
          <p className="text-xl text-gray-400">Garantimos a seriedade e segurança do sorteio</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 flex flex-col gap-6 animate-on-scroll">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg text-primary mt-1">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Baseado na Loteria Federal</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  O sorteio será realizado na data prevista utilizando os números extraídos da Loteria Federal, garantindo que não haja manipulação no resultado.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg text-primary mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Segurança de Dados</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Não armazenamos dados de pagamento e seus dados pessoais estão protegidos conforme a LGPD.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-lg text-primary mt-1">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Regras Claras</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Todos os números vendidos concorrem igualmente. Caso a meta de vendas não seja atingida, a data do sorteio poderá ser prorrogada ou o valor devolvido.
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-8 animate-on-scroll flex flex-col justify-center border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Dados do Organizador</h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Nome:</span>
                <span className="font-bold">{CONFIG.COMPANY.NAME}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">CNPJ:</span>
                <span className="font-bold">{CONFIG.COMPANY.CNPJ}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Suporte:</span>
                <span className="font-bold">{CONFIG.COMPANY.WHATSAPP}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-400">Email:</span>
                <span className="font-bold">{CONFIG.COMPANY.EMAIL}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
