import React from 'react';
import { Sparkles, Heart, Crown, CalendarCheck } from 'lucide-react';
import { DIFFERENTIALS } from '../data';

export default function Features() {
  const iconsMap: { [key: string]: React.ReactNode } = {
    Sparkles: <Sparkles className="w-8 h-8 text-brand-gold stroke-[1.5]" />,
    Heart: <Heart className="w-8 h-8 text-brand-gold stroke-[1.5]" />,
    Crown: <Crown className="w-8 h-8 text-brand-gold stroke-[1.5]" />,
    CalendarDays: <CalendarCheck className="w-8 h-8 text-brand-gold stroke-[1.5]" />
  };

  return (
    <section className="py-20 bg-white relative">
      {/* Visual top dividers */}
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-brand-cream-dark/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header description */}
        <div className="text-center space-y-2 mb-16">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#8C6239] block">
            Nossos Valores • Por que Confeitaria Fina?
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-black text-brand-brown-deep">
            O Toque Diferente em Cada Detalhe
          </h3>
          <p className="text-neutral-500 font-sans text-xs max-w-sm mx-auto">
            Garantimos sofisticação, sabor e agilidade do preparo ao recebimento da sua encomenda.
          </p>
          <div className="h-0.5 w-12 bg-brand-gold rounded-full mx-auto mt-3" />
        </div>

        {/* 4 Pillars Grid showing high-end values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((item, index) => (
            <div 
              key={index}
              className="bg-[#FAF6F0] p-6 rounded-2xl border border-brand-cream-dark/30 hover:border-brand-gold/60 hover:bg-[#FAF6F0] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Animated Icon Frame */}
              <div className="p-4 bg-white rounded-full shadow-xs border border-brand-cream-dark/30 group-hover:scale-110 transition-transform duration-300 mb-5 flex items-center justify-center">
                {iconsMap[item.icon] || <Sparkles className="w-8 h-8 text-brand-gold" />}
              </div>

              {/* Title & Body */}
              <h4 className="font-serif font-black text-brand-brown-deep text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-neutral-500 text-xs font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
