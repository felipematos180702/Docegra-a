import React from 'react';
import Logo from './Logo';
import { Instagram, Globe, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'sobre', label: 'Quem Somos' },
    { id: 'cardapio', label: 'Cardápio' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <footer className="bg-[#4A2E1B] text-[#FAF6F0] relative pt-16 pb-12 border-t border-brand-gold/20 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 w-64 h-64 bg-brand-cream-dark/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-12 border-b border-brand-cream-dark/10">
          
          {/* Column 1 - Brand description */}
          <div className="space-y-4">
            <div className="inline-block transform hover:scale-[1.02] transition-transform">
              <Logo size="md" showTagline={true} className="text-[#FAF6F0]" />
            </div>
            {/* Override child texts of Logo for dark footer context */}
            <style dangerouslySetInnerHTML={{__html: `
              footer h1 { color: #FAF6F0 !important; }
              footer span { color: #C5A059 !important; }
            `}} />
            
            <p className="text-xs text-neutral-300 leading-relaxed max-w-xs font-sans">
              Alta confeitaria artesanal em Feira de Santana. Unimos a nobreza técnica do chocolate europeu à doçura e afeto de receitas caseiras autênticas feitas do zero.
            </p>
          </div>

          {/* Column 2 - Core Navigation */}
          <div className="space-y-4">
            <h4 className="font-serif font-black text-brand-gold text-sm tracking-wider uppercase">
              Mapa do Ateliê
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium font-sans">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollToSection(link.id)}
                    className="text-neutral-300 hover:text-brand-gold transition-colors focus:outline-none cursor-pointer text-left"
                  >
                    • {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Interactions & Working Hours */}
          <div className="space-y-4">
            <h4 className="font-serif font-black text-brand-gold text-sm tracking-wider uppercase">
              Horário do Carinho
            </h4>
            <div className="text-xs text-neutral-300 space-y-1 font-sans">
              <p>📍 Retiradas agendadas no nosso Ateliê.</p>
              <p>🕒 Terça a Sábado: das 09h às 18h.</p>
            </div>

            {/* Glowing social icons */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://www.instagram.com/_docegracaa/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-[#FAF6F0]/5 hover:bg-[#FAF6F0]/15 text-[#FAF6F0] hover:text-brand-gold rounded-full transition-all duration-300 border border-white/5"
                aria-label="Instagram Doce Graça"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://docegraca-doceria.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-[#FAF6F0]/5 hover:bg-[#FAF6F0]/15 text-[#FAF6F0] hover:text-brand-gold rounded-full transition-all duration-300 border border-white/5"
                aria-label="Website Oficial"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Closing details & Copyright credits for high converting footprint */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-400 gap-4 font-sans">
          <p>© {new Date().getFullYear()} Doce Graça Doceria & Confeitaria Artesanal. Feira de Santana, Bahia, Brasil.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-brand-gold fill-brand-gold" /> para celebrar momentos divinos.
          </p>
        </div>

      </div>
    </footer>
  );
}
