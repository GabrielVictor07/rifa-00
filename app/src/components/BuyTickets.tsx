import React, { useState } from 'react';
import { CONFIG } from '../config';
import { Ticket, QrCode, Copy, Check } from 'lucide-react';


export const BuyTickets = () => {
  const [qty, setQty] = useState(100);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');

  const priceTotal = qty * CONFIG.RAFFLE.TICKET_PRICE_CENTS;
  const formatPrice = (cents: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cents / 100);

  const handleQtyClick = (val: number) => setQty(val);
  
  const handleRandomNumbers = () => {
    const options = [50, 100, 500, 1000, 5000];
    const randomQty = options[Math.floor(Math.random() * options.length)];
    setQty(randomQty);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    setPhone(value);
  };

  const handleCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (qty < CONFIG.RAFFLE.MIN_TICKETS) {
      alert(`O mínimo de números é ${CONFIG.RAFFLE.MIN_TICKETS}`);
      return;
    }
    
    /* 
      TODO: BACKEND INTEGRATION
      - Send user info and `qty` to backend.
      - Backend must allocate random `qty` numbers from available pool.
      - DO NOT render 5 million numbers on frontend.
      - Receive Pix Payload/QR code from payment gateway.
    */
    // allocateNumbers(qty);
    
    setCheckoutModal(true);
  };

  const copyPix = () => {
    navigator.clipboard.writeText("00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426655440000520400005303986540510.005802BR5913Rifa Premium6009Sao Paulo62070503***6304");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="comprar" className="w-full py-16 px-4 bg-background-alt relative">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Comprar Números</h2>
          <p className="text-xl text-gray-400">Selecione a quantidade desejada</p>
        </div>

        <div className="glass p-6 md:p-10 animate-on-scroll">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[100, 500, 1000, 5000, 10000].map(val => (
              <button
                key={val}
                onClick={() => handleQtyClick(val)}
                className={`py-3 px-6 rounded-xl font-bold text-lg transition-all ${qty === val ? 'bg-primary text-background shadow-[0_0_15px_rgba(245,197,66,0.5)]' : 'bg-white/10 hover:bg-white/20'}`}
              >
                +{val}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-10">
            <div className="flex items-center gap-4 bg-black/50 p-4 rounded-2xl border border-white/10 w-full md:w-auto">
              <span className="text-gray-400 text-sm uppercase tracking-wider font-bold">Qtd:</span>
              <input 
                type="number" 
                min={CONFIG.RAFFLE.MIN_TICKETS}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value) || 0)}
                className="bg-transparent text-3xl font-bold text-center w-32 outline-none text-white"
              />
            </div>
            
            <div className="flex items-center gap-4 bg-primary/10 p-4 rounded-2xl border border-primary/20 w-full md:w-auto">
              <span className="text-primary text-sm uppercase tracking-wider font-bold">Total:</span>
              <span className="text-3xl font-bold text-primary">{formatPrice(priceTotal)}</span>
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <button onClick={handleRandomNumbers} className="text-primary hover:text-white underline transition-colors flex items-center gap-2">
              <Ticket className="w-5 h-5" />
              Escolher números aleatórios para mim
            </button>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-6 max-w-xl mx-auto">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 ml-2">Nome Completo</label>
              <input required type="text" placeholder="Digite seu nome" className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-primary transition-colors text-white" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 ml-2">WhatsApp</label>
              <input 
                required 
                type="text"
                value={phone}
                onChange={handlePhone}
                placeholder="(00) 00000-0000" 
                className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-primary transition-colors text-white" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 ml-2">CPF</label>
              <input 
                required 
                type="text"
                value={cpf}
                onChange={handleCpf}
                placeholder="000.000.000-00" 
                className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-primary transition-colors text-white" 
              />
            </div>

            <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold text-xl py-5 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all mt-4">
              Pagar com Pix
            </button>
          </form>
        </div>
      </div>

      {/* Checkout Modal */}
      {checkoutModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="glass p-8 max-w-md w-full relative animate-in fade-in zoom-in duration-300">
            <button onClick={() => setCheckoutModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">✕</button>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Pagamento Pix</h3>
              <p className="text-gray-400 mb-6">Escaneie o QR Code ou copie o código Pix para concluir sua compra de {qty} números.</p>
              
              <div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <QrCode className="w-48 h-48 text-black" />
              </div>
              
              <div className="mb-6">
                <span className="block text-gray-400 text-sm mb-1">Total a pagar</span>
                <span className="text-4xl font-bold text-primary">{formatPrice(priceTotal)}</span>
              </div>
              
              <button 
                onClick={copyPix}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check className="text-green-400" /> : <Copy />}
                {copied ? 'Código Copiado!' : 'Copiar Código Pix'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
