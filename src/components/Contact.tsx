import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Heart, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Casamento',
    guestCount: '',
    pickupDate: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCustomQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Custom Quote WhatsApp Draft
    const fullText = `Olá, Doce Graça! Gostaria de fazer um pedido em atacado/para evento:

📋 *DADOS DO PEDIDO:*
• *Nome:* ${formData.name}
• *Telefone:* ${formData.phone}
• *Ocasião/Evento:* ${formData.eventType}
• *Estimativa de Convidados:* ${formData.guestCount} pessoas
• *Data de Retirada:* ${formData.pickupDate}

📝 *PRODUTOS DESEJADOS:*
${formData.message}

_Solicitação enviada de forma rápida através do site institucional._ ✨`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5575991437218&text=${encodeURIComponent(fullText)}`;
    
    setSent(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSent(false);
      setFormData({ name: '', phone: '', eventType: 'Casamento', guestCount: '', pickupDate: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="text-center space-y-2 mb-16">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#8C6239] block">
            Fale Conosco • Atacado
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-black text-brand-brown-deep">
            Faça sua Encomenda
          </h3>
          <p className="text-neutral-500 font-sans text-xs max-w-sm mx-auto">
            Gostaria de servir nossos cones e trufas artesanais no seu evento ou revender? Escreva para nós!
          </p>
          <div className="h-0.5 w-12 bg-brand-gold rounded-full mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Column 1 - Contact Details Sheet */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-serif font-black text-brand-brown-deep text-2xl">
                Ateliê Doce Graça
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
                Nosso espaço físico é dedicado exclusivamente para produção e retiradas agendadas. Se preferir conversar presencialmente para planejar uma encomenda grande, agende conosco pelo WhatsApp.
              </p>
            </div>

            {/* Direct Information Tiles */}
            <div className="space-y-4 max-w-md">
              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-cream-dark/40 shadow-xs">
                <div className="p-2.5 bg-brand-cream-dark/55 rounded-lg text-brand-gold shrink-0 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h5 className="font-sans font-bold text-[#4A2E1B] text-xs uppercase tracking-wider">Telefone e Celular</h5>
                  <p className="text-neutral-600 text-sm mt-1 font-semibold">75 9 9143-7218 (WhatsApp)</p>
                  <p className="text-neutral-400 text-xs mt-0.5">Disponível para suporte das 9h às 19h.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-cream-dark/40 shadow-xs">
                <div className="p-2.5 bg-brand-cream-dark/55 rounded-lg text-brand-gold shrink-0 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans font-bold text-[#4A2E1B] text-xs uppercase tracking-wider">ENDEREÇO PARA RETIRADAS</h5>
                  <p className="text-neutral-600 text-sm mt-1">Rua campo Grande 667 - Parque ipê</p>
                  <p className="text-neutral-400 text-xs mt-0.5 font-semibold">Feira de Santana - BA</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-brand-cream-dark/40 shadow-xs">
                <div className="p-2.5 bg-brand-cream-dark/55 rounded-lg text-brand-gold shrink-0 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-sans font-bold text-[#4A2E1B] text-xs uppercase tracking-wider">Horários de Retiradas</h5>
                  <p className="text-neutral-600 text-sm mt-1">Terça a Sábado: 09:00h às 18:00h</p>
                  <p className="text-neutral-600 text-xs text-neutral-400 mt-0.5">Fechado aos Domingos e Segundas</p>
                </div>
              </div>

            </div>
            
            {/* Guarantee Tag */}
            <p className="text-xs text-[#8C6239] font-serif italic max-w-sm">
              ✨ "Garantia de capricho: todos os nossos doces finos saem acompanhados de nota fiscal, termo de transporte seguro e guia de conservação."
            </p>
          </div>

          {/* Column 2 - Quotes Formulation Wrapper */}
          <div className="bg-white p-7 sm:p-10 rounded-3xl border border-brand-cream-dark shadow-xl space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/25 rounded-md text-[10px] uppercase font-bold tracking-widest mb-1.5">
                <Sparkles className="w-3" /> Exclusividade
              </div>
              <h4 className="font-serif font-black text-brand-brown-deep text-xl">
                Quer pedir em atacado? Preencha os campos abaixo:
              </h4>
              <p className="text-neutral-400 text-xs">
                Entraremos em contato com nossa tabela de preços para atacado e prazos.
              </p>
            </div>

            <form onSubmit={handleCustomQuoteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-brown-deep mb-1">Seu Nome Inteiro *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: Mariana Silveira"
                  className="w-full bg-white border border-brand-cream-dark rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-brown-deep mb-1">WhatsApp de Contato *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ex: (11) 99999-9999"
                  className="w-full bg-white border border-brand-cream-dark rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-gold transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-brand-brown-deep mb-1">Tipo de Evento</label>
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-cream-dark rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-brand-gold cursor-pointer"
                  >
                    <option value="Casamento">Casamento</option>
                    <option value="Aniversário Infantil">Aniversário Infantil</option>
                    <option value="Batizado">Batizado</option>
                    <option value="Debutante (15 Anos)">Debutante (15 Anos)</option>
                    <option value="Corporativo">Corporativo</option>
                    <option value="Outro Contexto">Outro Contexto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-brown-deep mb-1">Data de Retirada *</label>
                  <input 
                    type="date" 
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-cream-dark rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-gold transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-brown-deep mb-1">Nº de Convidados *</label>
                <input 
                  type="number" 
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  placeholder="Ex: 50"
                  className="w-full bg-white border border-brand-cream-dark rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-brown-deep mb-1">Quais produtos você gostaria? *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Ex: Desejo encomendar 50 cones de amendoim e 30 trufas de brigadeiro..."
                  className="w-full bg-white border border-brand-cream-dark rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-brand-gold resize-none"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-brand-brown-deep hover:bg-[#8C6239] text-[#FAF6F0] font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {sent ? (
                  <>
                    <Heart className="w-4 h-4 text-brand-gold fill-brand-gold animate-ping" />
                    Enviando Orçamento...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
                    Solicitar Orçamento Personalizado
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
