import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, Calendar, MapPin, ClipboardList, Send, CheckCircle } from 'lucide-react';
import { CartItem, OrderData } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [method, setMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    street: '',
    number: '',
    neighborhood: '',
    notes: ''
  });
  const [isOrdered, setIsOrdered] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = method === 'delivery' ? 15.00 : 0;
  const total = subtotal + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMethodChange = (deliveryMethod: 'pickup' | 'delivery') => {
    setMethod(deliveryMethod);
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!formData.name.trim()) {
      setErrorMsg('Por favor, informe seu nome.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Por favor, forneça um telefone celular.');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Selecione uma data para o agendamento.');
      return;
    }
    if (!formData.time) {
      setErrorMsg('Selecione um horário aproximado.');
      return;
    }
    if (method === 'delivery' && (!formData.street.trim() || !formData.number.trim() || !formData.neighborhood.trim())) {
      setErrorMsg('Preencha os campos obrigatórios de endereço para a entrega.');
      return;
    }

    // Dynamic WhatsApp Order Text Building (for CRO)
    const itemsText = items.map(
      (item, index) => `${index + 1}. *${item.product.name}* (x${item.quantity}) - R$ ${(item.product.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const totalText = `*Subtotal:* R$ ${subtotal.toFixed(2)}\n*Entrega:* ${method === 'delivery' ? 'R$ 15,00' : 'Gratuita (Retirada)'}\n*Total Geral:* R$ ${total.toFixed(2)}`;
    
    const deliveryAddressText = method === 'delivery' 
      ? `\n📍 *Endereço de Entrega:*\n${formData.street}, nº ${formData.number} - ${formData.neighborhood}` 
      : `\n🏪 *Tipo:* Retirada agendada no Ateliê Doce Graça`;

    const notesText = formData.notes.trim() ? `\n📝 *Observações:* ${formData.notes}` : '';

    const fullMessage = `Olá, gostaria de fazer uma encomenda na Doce Graça! ✨

🧁 *RESUMO DA SACOLA:*
${itemsText}

---------------------------------
${totalText}
---------------------------------

👤 *DADOS DO CLIENTE:*
• *Nome:* ${formData.name}
• *Telefone:* ${formData.phone}

📅 *AGENDAMENTO:*
• *Data:* ${formData.date.split('-').reverse().join('/')}
• *Horário Aproximado:* ${formData.time}
${deliveryAddressText}${notesText}

_Pedido gerado via catálogo interativo Doce Graça. Aguardo sua confirmação!_ ❤️`;

    // Encode text and redirect to Whatsapp
    // High premium experience
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5575991437218&text=${encodeURIComponent(fullMessage)}`;
    
    // Smooth order state
    setIsOrdered(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClearCart();
      setIsOrdered(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex">
        <div className="w-screen max-w-md bg-[#FAF6F0] shadow-2xl flex flex-col border-l border-brand-cream-dark">
          
          {/* Header */}
          <div className="px-6 py-5 bg-[#4A2E1B] text-brand-bg flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 text-brand-gold" />
              <h2 className="font-serif text-lg font-bold tracking-wide">Sua Sacola de Encomendas</h2>
              <span className="bg-brand-gold text-brand-brown-deep font-semibold text-xs px-2.5 py-0.5 rounded-full">
                {items.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded-full text-brand-bg hover:bg-neutral-800 transition-colors"
              aria-label="Fechar Sacola"
            >
              <X className="w-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            
            {isOrdered ? (
              <div id="checkout-success" className="flex flex-col items-center justify-center py-16 text-center h-full">
                <CheckCircle className="w-16 h-16 text-brand-gold mb-4 animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-brand-brown-deep mb-2">Pedido Enviado!</h3>
                <p className="text-neutral-600 text-sm max-w-xs">
                  Estamos abrindo seu WhatsApp para enviar os detalhes da sua encomenda à confeiteira...
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center h-full">
                <ShoppingBag className="w-16 h-16 text-neutral-300 mb-4 stroke-1" />
                <h3 className="font-serif text-lg font-semibold text-neutral-700 mb-1">Sacola vazia, que tal enchê-la de carinho?</h3>
                <p className="text-neutral-500 text-xs px-8 max-w-sm mb-6">
                  Nossos doces finos e bolos artísticos trarão uma experiência inexplicável para o seu paladar.
                </p>
                <button 
                  onClick={onClose}
                  className="px-6 py-2.5 bg-brand-brown-deep text-brand-bg hover:bg-brand-hazel font-semibold text-sm rounded-lg transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider"
                >
                  Conhecer Doces
                </button>
              </div>
            ) : (
              <>
                {/* List of Cart Items */}
                <div className="space-y-4">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#8C6239] border-b pb-2">
                    Doces Selecionados
                  </h4>
                  <div className="space-y-3 divide-y divide-brand-cream-dark">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3 pt-3 first:pt-0 group">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg shadow-xs border border-brand-cream-dark transition-transform group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h5 className="font-serif font-bold text-brand-brown-deep text-sm leading-tight">
                              {item.product.name}
                            </h5>
                            <button 
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-neutral-400 hover:text-red-500 transition-colors p-0.5 ml-2"
                              title="Remover doce"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">
                            R$ {item.product.price.toFixed(2)} {item.product.category === 'bolos' ? '/ kg' : '/ unidade'}
                          </p>
                          <div className="flex justify-between items-center mt-2.5">
                            <div className="flex items-center gap-2 border bg-white border-brand-cream-dark rounded-md px-1.5 py-0.5">
                              <button 
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="text-[#8C6239] hover:bg-neutral-100 rounded p-1 transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-zinc-800 text-xs font-bold w-5 text-center">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="text-[#8C6239] hover:bg-neutral-100 rounded p-1 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="font-sans font-bold text-brand-brown-deep text-sm">
                              R$ {(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secure Delivery / Method Selection */}
                <div id="checkout-form" className="space-y-4 pt-4 border-t border-brand-cream-dark">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#8C6239]">
                    Método de Retirada
                  </h4>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-brand-cream-dark/50 rounded-xl">
                    <button 
                      type="button"
                      onClick={() => handleMethodChange('pickup')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                        method === 'pickup' 
                          ? 'bg-brand-brown-deep text-brand-bg shadow-sm' 
                          : 'text-neutral-500 hover:text-brand-brown-deep'
                      }`}
                    >
                      🏪 Retirar no Ateliê
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleMethodChange('delivery')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                        method === 'delivery' 
                          ? 'bg-brand-brown-deep text-brand-bg shadow-sm' 
                          : 'text-neutral-500 hover:text-brand-brown-deep'
                      }`}
                    >
                      📍 Entrega Agendada
                    </button>
                  </div>
                  {method === 'delivery' && (
                    <p className="text-[11px] text-neutral-500 italic bg-amber-50 border border-amber-200/50 p-2 rounded-lg">
                      * Taxa de entrega fixa para nossa área de cobertura: R$ 15,00. Entregas ultra-cuidadosas.
                    </p>
                  )}
                </div>

                {/* Customer Information Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#8C6239] pb-1 border-b">
                    Dados de Agendamento
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-brand-brown-deep mb-1">Seu Nome *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Mariana Silveira"
                      className="w-full bg-white border border-brand-cream-dark rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
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
                      className="w-full bg-white border border-brand-cream-dark rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-brand-brown-deep mb-1 flex items-center gap-1">
                        <Calendar className="w-3 text-brand-gold" /> Data Desejada *
                      </label>
                      <input 
                        type="date" 
                        name="date" 
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-brand-cream-dark rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-brand-gold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-brown-deep mb-1">Horário de Entrega *</label>
                      <input 
                        type="time" 
                        name="time" 
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-brand-cream-dark rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:border-brand-gold"
                        required
                      />
                    </div>
                  </div>

                  {method === 'delivery' && (
                    <div className="space-y-2 pt-1 transition-all duration-300">
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <label className="block text-xs font-bold text-brand-brown-deep mb-1">Rua/Avenida *</label>
                          <input 
                            type="text" 
                            name="street" 
                            value={formData.street}
                            onChange={handleInputChange}
                            placeholder="Rua das Macadâmias"
                            className="w-full bg-white border border-brand-cream-dark rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-brand-gold"
                            required={method === 'delivery'}
                          />
                        </div>
                        <div className="w-20">
                          <label className="block text-xs font-bold text-brand-brown-deep mb-1">Número *</label>
                          <input 
                            type="text" 
                            name="number" 
                            value={formData.number}
                            onChange={handleInputChange}
                            placeholder="120"
                            className="w-full bg-white border border-brand-cream-dark rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:border-brand-gold"
                            required={method === 'delivery'}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-brown-deep mb-1">Bairro de Entrega *</label>
                        <input 
                          type="text" 
                          name="neighborhood" 
                          value={formData.neighborhood}
                          onChange={handleInputChange}
                          placeholder="Jardins"
                          className="w-full bg-white border border-brand-cream-dark rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-brand-gold"
                          required={method === 'delivery'}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-brand-brown-deep mb-1 flex items-center gap-1">
                      <ClipboardList className="w-3 text-brand-gold" /> Observações Especiais
                    </label>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={2}
                      placeholder="Deseja vela? Restrições alimentares? Embalagem individual?"
                      className="w-full bg-white border border-brand-cream-dark rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-brand-gold resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="text-red-600 text-xs font-semibold py-1 bg-red-50 px-3 rounded-lg border border-red-100">
                      ⚠️ {errorMsg}
                    </div>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Persistent Footer with totals and WhatsApp Action */}
          {items.length > 0 && !isOrdered && (
            <div className="border-t border-brand-cream-dark bg-white px-6 py-5 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal dos doces</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                {method === 'delivery' && (
                  <div className="flex justify-between text-neutral-600">
                    <span>Taxa de Entrega Segura</span>
                    <span>R$ 15,00</span>
                  </div>
                )}
                <div className="flex justify-between text-brand-brown-deep font-bold text-base pt-1 border-t border-dashed">
                  <span>Valor Total da Encomenda</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full py-3.5 bg-[#4A2E1B] hover:bg-[#8C6239] text-brand-bg font-sans font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 fill-brand-bg text-brand-brown-deep" />
                Fechar via WhatsApp
              </button>

              <p className="text-[10px] text-center text-neutral-400">
                Ao clicar, geraremos a planilha de encomenda para seu WhatsApp instantaneamente!
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
