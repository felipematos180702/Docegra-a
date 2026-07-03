import React from 'react';
import { ArrowDown, Sparkles, Send, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  const handleScrollToCardapio = () => {
    const element = document.getElementById('cardapio');
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen lg:h-screen lg:min-h-[750px] flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-16 lg:py-0"
      style={{ backgroundColor: '#140A04' }}
    >
      {/* Background Subtle Ambience layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Soft glowing ambient lighting in the background */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-hazel/5 rounded-full blur-[100px]" />
      </div>

      {/* LUXURY DESIGN DECORATION: Fine French Boutique Wallpaper Pattern (Opacity 0.025) */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        {/* Subtle Repeating Floral and Cacao Branch Wallpaper Layout */}
        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-16 p-8 md:p-16">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-center transform rotate-12 scale-110">
              <svg className="w-24 h-24 text-brand-gold fill-none stroke-current" strokeWidth="1.2" viewBox="0 0 100 100">
                {/* Elegant wreath segment */}
                <path d="M 20,50 A 30,30 0 0,1 80,50" />
                <path d="M 25,45 Q 35,35 50,45 T 75,45" />
                {/* Floating leaves */}
                <path d="M 30,30 Q 35,20 40,30 Q 35,40 30,30" fill="currentColor" />
                <path d="M 70,30 Q 65,20 60,30 Q 65,40 70,30" fill="currentColor" />
                <path d="M 50,22 Q 50,12 45,22 Q 50,32 50,22" fill="currentColor" />
                {/* Tiny berries */}
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                {/* Mini Cacao pod sketch */}
                <path d="M 45,65 C 40,65 35,72 45,82 C 55,82 50,65 45,65 Z" fill="currentColor" />
              </svg>
            </div>
          ))}
        </div>

        {/* Large artistic vignette corner scrolls (Logo branches) */}
        <div className="absolute -left-12 -top-12 w-96 h-96 opacity-[0.3] text-brand-gold">
          <svg className="w-full h-full stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 150 150">
            <path d="M 10,140 C 20,90 60,50 140,40 M 10,140 C 40,110 80,80 140,70" />
            <path d="M 30,110 C 35,95 50,90 45,110 C 40,120 30,125 30,110 Z" fill="currentColor" />
            <path d="M 60,80 C 65,65 80,60 75,80 C 70,90 60,95 60,80 Z" fill="currentColor" />
            <path d="M 90,60 C 95,45 110,40 105,60 C 100,70 90,75 90,60 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute -right-12 -bottom-12 w-96 h-96 opacity-[0.3] text-brand-gold rotate-180">
          <svg className="w-full h-full stroke-current fill-none" strokeWidth="1.5" viewBox="0 0 150 150">
            <path d="M 10,140 C 20,90 60,50 140,40 M 10,140 C 40,110 80,80 140,70" />
            <path d="M 30,110 C 35,95 50,90 45,110 C 40,120 30,125 30,110 Z" fill="currentColor" />
            <path d="M 60,80 C 65,65 80,60 75,80 C 70,90 60,95 60,80 Z" fill="currentColor" />
            <path d="M 90,60 C 95,45 110,40 105,60 C 100,70 90,75 90,60 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Main Luxury Responsive Split Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-120px)] lg:h-auto">
          
          {/* COLUMN LEFT: Premium Copywriting Text & High Conversion Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left max-w-2xl mx-auto lg:mx-0 animate-fade-in order-2 lg:order-1 pt-4 lg:pt-0">
            
            {/* Fine Sparkle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 border border-brand-gold/25 rounded-md relative">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className="font-sans font-bold text-brand-gold text-[10px] tracking-widest uppercase">
                Alta Confeitaria & Ateliê de Luxo
              </span>
            </div>

            {/* Slogan Title */}
            <div className="space-y-4">
              <h2 
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-black text-[#FAF6F0] leading-[1.1] tracking-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                Celebrando a vida com <span className="text-brand-gold font-normal italic block sm:inline">doçura</span> e gratidão.
              </h2>
              
              <div className="h-1 w-20 bg-brand-gold rounded-full" />
            </div>

            {/* Conversational & Sensory Copywriting Description */}
            <p className="text-[#EFE9DE]/85 text-xs sm:text-sm md:text-base font-sans leading-relaxed max-w-xl">
              Sabe aquele sabor de afeto fofinho preparado delicadamente com o frescor ideal, coroado com o visual deslumbrante que seus melhores momentos merecem? No nosso ateliê, esculpimos histórias felizes usando chocolate meio amargo, frutas frescas selecionadas uma a uma e os melhores ingredientes do mercado.
            </p>

            {/* High-CRO actions button group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={handleScrollToCardapio}
                className="px-8 py-4 bg-brand-gold hover:bg-[#FAF6F0] text-[#140A04] font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl hover:translate-y-[-2px] cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 text-[#140A04] group-hover:translate-x-1 transition-transform" />
                Encomendar Agora
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById('sobre');
                  if (element) {
                    const offsetTop = element.offsetTop - 90;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-transparent border-2 border-brand-cream-dark/40 hover:bg-white/5 text-brand-bg font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 hover:border-brand-gold cursor-pointer text-center"
              >
                Conhecer Nosso Legado
              </button>
            </div>

            {/* Direct Trust Badges */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 max-w-lg">
              <div className="flex items-center gap-2.5 text-[#EFE9DE]/80">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="font-sans text-xxs sm:text-xs font-semibold">Entrega 100% Segura em Caixas Rígidas</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#EFE9DE]/80">
                <div className="flex text-brand-gold shrink-0">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-sans text-xxs sm:text-xs font-semibold">+1.200 Momentos Abençoados</span>
              </div>
            </div>

          </div>

          {/* COLUMN RIGHT: High Impact Gourmet Truffle Product Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center p-2 sm:p-4 lg:p-0 order-1 lg:order-2 w-full max-w-lg lg:max-w-none mx-auto">
            
            {/* Visual background solid box frame (Artistic displacement) */}
            <div className="absolute -inset-1 sm:-inset-2 bg-brand-gold/10 rounded-3xl transform rotate-2 pointer-events-none" />
            <div className="absolute -inset-2 sm:-inset-4 bg-brand-hazel/5 rounded-3xl transform -rotate-1 pointer-events-none" />

            {/* Master Photo Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF6F0] w-full aspect-square xs:h-[400px] sm:h-[480px] lg:h-[500px]">
              <img 
                src="https://lh3.googleusercontent.com/d/10aOAD3nNJCL-KfI88EZTsR19PKqcIZCX" 
                alt="Trufa Gourmet de Maracujá Doce Graça"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Luxury dark vignette on image edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

              {/* Floating micro glassmorphic tag with premium ingredients info (High CRO conversion trigger) */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 backdrop-blur-md bg-[#140A04]/75 border border-brand-gold/30 rounded-lg sm:rounded-xl p-2.5 sm:p-4 flex items-center justify-between shadow-xl">
                <div>
                  <span className="bg-brand-gold/20 text-brand-gold text-[7px] sm:text-[8px] uppercase tracking-widest font-extrabold px-1.5 py-0.5 rounded-sm border border-brand-gold/20 mb-0.5 sm:mb-1 mr-1.5 inline-block">
                    Destaque<span className="hidden sm:inline"> da Estação</span>
                  </span>
                  <h4 className="font-serif font-black text-[#FAF6F0] text-[11px] xs:text-xs sm:text-base leading-tight">Trufa de Maracujá</h4>
                  <p className="hidden sm:block text-[#EFE9DE]/80 text-[10px] sm:text-xs mt-0.5">Com recheio de mousse super cremoso, cítrico, de maracujá fresco.</p>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="hidden sm:block text-[9px] text-brand-gold uppercase tracking-wider font-semibold">Valor Especial</span>
                  <span className="font-sans font-extrabold text-[#FAF6F0] text-xs sm:text-base">R$ 4,00 <span className="text-[9px] sm:text-[10px] font-normal">/ un</span></span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Interactive Floating scroll hint */}
      <button 
        onClick={handleScrollToCardapio}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#EFE9DE]/50 hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <span className="font-sans text-[8px] sm:text-[10px] tracking-widest uppercase">Desvendar Delícias</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </button>
    </section>
  );
}

