Atue como um Desenvolvedor Front-end Sênior e Designer UI/UX. Crie uma landing page completa de rifa de carro, em tema escuro, com animações de scroll.

## 1. CONTEXTO DA RIFA
- Prêmio: [MARCA/MODELO/ANO DO CARRO] (use placeholders editáveis)
- Valor por número: R$ 0,10
- Total de números: 5.000.000 (de 0000000 a 4999999, com 7 dígitos)
- Sorteio: [DATA] com base na [Loteria Federal / outro critério]
- Pagamento: Pix (simulado no front-end, com estrutura pronta para integrar um gateway)

## 2. STACK
- React e typescript
- Animações de scroll com GSAP e ScrollTrigger
- TailwindCss

## 3. DESIGN (TEMA ESCURO)
- Fundo: #0a0a0f a #12121a, com gradientes sutis
- Cor de destaque: [dourado #f5c542 OU vermelho #ff3b3b], usada em botões, contadores e detalhes
- Cards com glassmorphism leve (backdrop-filter, borda 1px semitransparente)
- Botões com glow no hover
- Mobile-first e totalmente responsivo (375px a 1920px)
- Contraste mínimo WCAG AA

## 4. SEÇÕES (nesta ordem)
1. **Hero**: título impactante, imagem do carro em destaque com efeito parallax, valor "R$ 0,10 por número" e botão CTA "Quero participar" (rolagem suave até a compra)
2. **Contador regressivo** até a data do sorteio (dias, horas, minutos, segundos)
3. **O prêmio**: galeria do carro (carrossel simples com swipe no mobile) e ficha técnica (motor, câmbio, cor, km, opcionais)
4. **Barra de progresso**: "X% dos números vendidos" (valor mockado) com animação de preenchimento ao entrar na tela
5. **Comprar números**:
   - Seletor de quantidade com botões rápidos (100, 500, 1.000, 5.000, 10.000) e campo customizado
   - Mínimo de compra: [ex.: 50 números = R$ 5,00]
   - Total calculado em tempo real (formatado em R$)
   - Botão "Escolher números aleatórios" (o sistema sorteia)
   - Formulário: nome, WhatsApp e CPF, com máscara e validação
   - Modal de checkout com QR Code Pix (placeholder) e botão "Copiar código Pix"
6. **Como funciona**: 3 a 4 passos em cards animados
7. **Transparência**: regras, como o vencedor é definido, dados do organizador
8. **Ganhadores anteriores / provas sociais** (placeholders)
9. **FAQ** em acordeão animado
10. **Rodapé** com dados do organizador, links legais e botão flutuante de WhatsApp

## 5. ANIMAÇÕES DE SCROLL
- Fade-in + slide-up (translateY) em todos os blocos ao entrar no viewport
- Entrada escalonada (stagger) nos cards de cada seção
- Parallax leve na imagem do carro do hero
- Contadores numéricos animados (count-up) nas estatísticas
- Barra de progresso do scroll no topo da página
- Header fixo que muda de transparente para blur ao rolar
- Respeitar `prefers-reduced-motion` (desativar animações se o usuário preferir)
- Usar apenas `transform` e `opacity` para manter 60fps

## 6. REGRAS TÉCNICAS IMPORTANTES
- NÃO renderizar 5 milhões de números no DOM. A compra é por QUANTIDADE, e a alocação dos números é responsabilidade do backend (deixe uma função `allocateNumbers(qty)` mockada e comentada, explicando isso)
- Usar `Intl.NumberFormat('pt-BR')` para valores e quantidades
- Evitar erros de ponto flutuante: calcular em centavos (inteiros) e formatar só na exibição
- Validar CPF (algoritmo dos dígitos verificadores) e telefone no front-end
- Sanitizar entradas (nunca usar innerHTML com dados do usuário)
- Meta tags SEO e Open Graph, alt em todas as imagens, HTML semântico e acessível (aria-labels, foco visível)
- Lazy-loading nas imagens
- Configurações (preço, total de números, data, nome do prêmio) centralizadas em um objeto `CONFIG` no topo do JS

## 7. ENTREGA
- Código completo, limpo, comentado apenas onde a lógica for complexa
- Ao final, liste em tópicos: (a) como integrar um gateway Pix (ex.: Mercado Pago, Asaas, EfiPay), (b) o que precisa ir para o backend (reserva de números, webhook de pagamento, geração de números, anti-fraude), (c) próximos passos para produção