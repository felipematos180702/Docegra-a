import React, { useState } from 'react';
import { Star, MessageCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="py-24 bg-brand-cream-dark/15 relative overflow-hidden">
      {/* Decorative floral elements backgrounds */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-cream-dark/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-2 mb-16">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#8C6239] block">
            Histórias de Doçura • Depoimentos
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-black text-brand-brown-deep">
            Quem Já Provou, Se Encantou
          </h3>
          <p className="text-neutral-500 font-sans text-xs max-w-sm mx-auto">
            Mais do que clientes, fazemos parte dos momentos mais felizes e importantes de suas famílias.
          </p>
          <div className="h-1 w-12 bg-brand-gold rounded-full mx-auto mt-3" />
        </div>

        {/* Testimonial slider card */}
        <div className="relative">
          <div className="bg-[#FAF6F0] rounded-3xl border border-brand-cream-dark/50 shadow-xl p-8 sm:p-12 relative">
            
            {/* Visual Quote Icon Decoration */}
            <Quote className="w-14 h-14 text-brand-cream-dark absolute right-8 top-8 opacity-40 rotate-180" />

            <div className="flex flex-col items-center text-center space-y-6">
              
              {/* Star Rating system */}
              <div className="flex items-center gap-1 font-sans text-brand-gold">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Emotional Comment */}
              <p className="font-serif text-base sm:text-lg md:text-xl text-[#4A2E1B] leading-relaxed italic max-w-2xl">
                "{current.comment}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                {current.avatar && (
                  <img 
                    src={current.avatar} 
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold shadow-md"
                    referrerPolicy="no-referrer"
                  />
                )}
                <h4 className={`font-serif font-black text-[#4A2E1B] text-base ${!current.avatar ? 'mt-0' : 'mt-3'}`}>
                  {current.name}
                </h4>
                <p className="font-sans font-semibold text-[#8C6239] text-xs uppercase tracking-wider mt-1">
                  {current.role}
                </p>
                <span className="text-[10px] text-neutral-400 mt-1">
                  {current.date}
                </span>
              </div>

            </div>

          </div>

          {/* Control Anchors */}
          <div className="flex justify-center items-center gap-3.5 mt-8">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-white border border-brand-cream-dark/50 hover:bg-brand-cream-dark text-brand-brown-deep transition-all shadow-xs focus:outline-none cursor-pointer"
              aria-label="Depoimento Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-brand-gold' : 'w-2 bg-brand-cream-dark'
                  }`}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-white border border-brand-cream-dark/50 hover:bg-brand-cream-dark text-brand-brown-deep transition-all shadow-xs focus:outline-none cursor-pointer"
              aria-label="Próximo Depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
