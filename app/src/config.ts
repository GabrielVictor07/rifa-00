export const CONFIG = {
  PRIZE: {
    NAME: 'Porsche 911 Carrera S 2024',
    DESCRIPTION: 'Motor 3.0 H6, 450cv, Cor Giz, 0km',
    SPECS: [
      { label: 'Motor', value: '3.0 H6' },
      { label: 'Câmbio', value: 'Automático' },
      { label: 'Cor', value: 'Giz' },
      { label: 'Km', value: '0km' },
      { label: 'Opcionais', value: 'Pacote Sport Chrono' },
    ],
    IMAGES: [
      '/car.png'
    ]
  },
  RAFFLE: {
    TICKET_PRICE_CENTS: 10, // R$ 0,10
    TOTAL_TICKETS: 5000000,
    DRAW_DATE: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    DRAW_CRITERIA: 'Loteria Federal',
    MIN_TICKETS: 50
  },
  COMPANY: {
    NAME: 'Rifa Premium',
    CNPJ: '00.000.000/0001-00',
    EMAIL: 'contato@rifapremium.com',
    WHATSAPP: '+5511999999999',
    INSTAGRAM: '@rifapremium'
  }
};
