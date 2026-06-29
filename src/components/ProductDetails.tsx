import React, { useState, useEffect } from 'react';
import { ArrowLeft, ShoppingBag, Plus, Minus, Check, Star, Sparkles, Heart } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';
import { motion } from 'motion/react';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onAddItem: (product: Product, quantity?: number) => void;
  onOpenCart: () => void;
  onNavigateToProduct: (product: Product) => void;
}

export default function ProductDetails({
  product,
  onBack,
  onAddItem,
  onOpenCart,
  onNavigateToProduct
}: ProductDetailsProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  // Automatically scroll to the top of the page when loading a product view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveImageIndex(0);
    setQuantity(1);
  }, [product]);

  const handleIncrease = () => setQuantity(prev => Math.min(prev + 1, 99));
  const handleDecrease = () => setQuantity(prev => Math.max(prev - 1, 1));

  const handleAddClick = () => {
    // We will update the addItem logic or simply add multiple times
    for (let i = 0; i < quantity; i++) {
      onAddItem(product);
    }
    setAddedItemName(`${quantity}x ${product.name}`);
    setTimeout(() => {
      setAddedItemName(null);
    }, 3000);
  };

  // Find 3 related products (same category if possible, excluding current product)
  const relatedProducts = React.useMemo(() => {
    const sameCategory = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
    const others = PRODUCTS.filter(p => p.id !== product.id && p.category !== product.category);
    return [...sameCategory, ...others].slice(0, 3);
  }, [product]);

  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name || 'Trufas Gourmet';
  const totalPrice = product.price * quantity;

  // Custom WhatsApp checkout text for high-CRO
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, Doce Graça! Gostaria de fazer uma encomenda:\n\n` +
      `🍰 *${product.name}*\n` +
      `Quantity: *${quantity}x*\n` +
      `Preço Unitário: R$ ${product.price.toFixed(2)}\n` +
      `Subtotal: R$ ${totalPrice.toFixed(2)}\n\n` +
      `Por favor, me confirme a disponibilidade para retirada! ✨`
    );
    return `https://wa.me/5575999999999?text=${text}`;
  };

  return (
    <div id="product-detail-view" className="bg-[#FAF6F0] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs & Back Trigger */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2.5 text-xs sm:text-xs font-sans font-bold uppercase tracking-wider text-[#4A2E1B] hover:text-[#8C6239] transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar ao Cardápio
          </button>
          
          <div className="text-[11px] font-sans text-neutral-400 flex items-center gap-1.5 font-medium">
            <span>Início</span>
            <span>/</span>
            <span>Cardápio</span>
            <span>/</span>
            <span className="text-[#8C6239]">{categoryName}</span>
            <span>/</span>
            <span className="text-neutral-600 font-bold max-w-[150px] truncate">{product.name}</span>
          </div>
        </div>

        {/* Core Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-brand-cream-dark/40 shadow-xs">
          
          {/* Gallery View (Left Frame) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#FAF6F0] border border-neutral-100 flex items-center justify-center group">
              <img 
                src={product.images ? product.images[activeImageIndex] : product.image} 
                alt={`${product.name} principal`}
                className="w-full h-full object-cover pb-[24px] transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-brand-gold text-brand-brown-deep font-sans font-extrabold text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-md shadow-md border border-white/20">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Gallery Selector Rows */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-brand-gold scale-102 shadow-xs' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Imagem ${idx + 1}`}
                      className="w-full h-full object-cover pb-[8px]"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info & Cart Conversions (Right Frame) */}
          <div className="lg:col-span-6 flex flex-col h-full justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Badges and Category */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-brand-gold bg-[#4A2E1B] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                  {categoryName}
                </span>
                {product.isPopular && (
                  <span className="text-[10px] text-neutral-500 font-sans font-semibold flex items-center gap-1 bg-brand-cream-dark/20 px-2.5 py-1 rounded-sm">
                    <Sparkles className="w-3 h-3 text-brand-gold" /> Mais Pedido
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2">
                <h1 className="font-serif text-3xl sm:text-4xl font-black text-brand-brown-deep leading-tight">
                  {product.name}
                </h1>
                <div className="h-1 w-16 bg-brand-gold rounded-full" />
              </div>

              {/* Price Tag Box */}
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-sans text-[#8C6239] font-medium uppercase tracking-wider">Preço Unitário:</span>
                <span className="font-sans font-extrabold text-brand-brown-deep text-2xl sm:text-3xl">
                  R$ {product.price.toFixed(2)}
                </span>
              </div>

              {/* Main Copywriting */}
              <p className="text-neutral-600 text-sm sm:text-md font-sans leading-relaxed">
                {product.description}
              </p>

              {/* Value Add / Proof points box */}
              <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-brand-cream-dark/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-serif font-black text-[#4A2E1B] tracking-wide uppercase">
                  <span>✨ Padrão Doce Graça de Qualidade</span>
                </div>
                <ul className="text-xs text-neutral-500 font-sans space-y-2 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold font-bold">✓</span> Ingredientes nobres e chocolate meio amargo selecionado de altíssima qualidade.
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold font-bold">✓</span> Confeitaria 100% autêntica, fresca e produzida sob demanda para cada retirada.
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-gold font-bold">✓</span> Sem aditivos artificiais – o puro sabor original do afeto caseiro.
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Buy Section */}
            <div className="pt-6 border-t border-brand-cream-dark/50 space-y-5">
              
              {/* Row: Quantity selector & Calculated Subtotal */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Quantidade</p>
                  <div className="flex items-center border border-brand-cream-dark/80 rounded-xl overflow-hidden bg-white max-w-[140px] shadow-xs">
                    <button 
                      onClick={handleDecrease}
                      className="w-11 h-11 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors focus:outline-none cursor-pointer"
                      disabled={quantity <= 1}
                      title="Diminuir"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="flex-1 text-center font-sans font-bold text-sm text-[#4A2E1B]">
                      {quantity}
                    </span>
                    <button 
                      onClick={handleIncrease}
                      className="w-11 h-11 flex items-center justify-center text-neutral-500 hover:bg-neutral-50 transition-colors focus:outline-none cursor-pointer"
                      title="Aumentar"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Subtotal da Encomenda</p>
                  <p className="font-sans font-black text-brand-brown-deep text-2xl sm:text-3xl mt-0.5">
                    R$ {totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Actions Button Group (Cart addition + WhatsApp) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <button
                  onClick={handleAddClick}
                  className="w-full py-4 bg-[#4A2E1B] hover:bg-[#8C6239] text-[#FAF6F0] rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none cursor-pointer shadow-md hover:shadow-lg transform active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4 text-brand-gold stroke-[3]" />
                  Adicionar à Sacola
                </button>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE57] text-[#FAF6F0] rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none shadow-md hover:shadow-lg transform active:scale-98"
                >
                  Encomendar Direto
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Showcase */}
        <div className="mt-20 space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="font-serif text-2xl font-black text-brand-brown-deep">
              Você também vai se apaixonar...
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm font-sans max-w-lg leading-relaxed">
              Descubra outras criações artesanais preparadas sob demanda em nosso ateliê gastronômico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-center">
            {relatedProducts.map(relProd => (
              <article 
                key={relProd.id}
                onClick={() => onNavigateToProduct(relProd)}
                className="bg-white rounded-2xl overflow-hidden border border-brand-cream-dark/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer hover:border-brand-gold/40"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={relProd.image} 
                    alt={relProd.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {relProd.badge && (
                    <span className="absolute top-3 left-3 bg-brand-gold text-brand-brown-deep font-sans font-extrabold text-[8px] tracking-widest uppercase px-2 py-1 rounded-sm">
                      {relProd.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif font-black text-[#4A2E1B] text-sm sm:text-base group-hover:text-[#8C6239] transition-colors leading-tight line-clamp-1">
                      {relProd.name}
                    </h4>
                    <p className="text-neutral-400 text-xxs tracking-wider font-semibold uppercase">{
                      CATEGORIES.find(c => c.id === relProd.category)?.name
                    }</p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-brand-cream-dark/30 flex items-center justify-between">
                    <span className="font-sans font-extrabold text-[#4A2E1B] text-sm">
                      R$ {relProd.price.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-[#8C6239] font-sans font-bold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                      Ver Mais →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Small floating alert feedback (increases CRO!) */}
        {addedItemName && (
          <div className="fixed bottom-6 left-6 z-50 bg-[#4A2E1B] text-[#FAF6F0] px-5 py-4 rounded-xl shadow-xl border border-brand-gold/40 flex items-center gap-3.5 max-w-sm animate-fade-in-up">
            <div className="p-1 bg-brand-gold text-brand-brown-deep rounded-full">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold leading-tight text-white">Doce adicionado!</p>
              <p className="text-[10px] text-neutral-300 mt-0.5 line-clamp-1">{addedItemName}</p>
            </div>
            <button 
              onClick={onOpenCart}
              className="text-[10px] font-bold text-brand-gold uppercase tracking-widest hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <ShoppingBag className="w-3.5" /> Ver Sacola
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
