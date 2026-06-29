import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Send } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenCart: () => void;
  cartCount: number;
}

export default function Header({ onOpenCart, cartCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Desktop smooth scroll and track active sections
  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for anchor links
      const sections = ['home', 'sobre', 'cardapio', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 120; // safe offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 90; // offset for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'sobre', label: 'Quem Somos' },
    { id: 'cardapio', label: 'Cardápio' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF6F0]/90 backdrop-blur-md shadow-md py-2 border-b border-brand-cream-dark/50' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand Logo */}
          <button 
            type="button"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer focus:outline-none"
            aria-label="Voltar para início"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 font-sans font-medium text-sm rounded-lg transition-all duration-300 relative cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-[#4A2E1B] font-bold' 
                    : 'text-[#8C6239] hover:text-[#4A2E1B]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Triggers (Shopping Bag + CTA) */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            
            {/* Elegant Shopping Basket Button (CRO highlight) */}
            <button
              onClick={onOpenCart}
              type="button"
              className="relative p-2.5 rounded-full hover:bg-brand-cream-dark/50 text-[#4A2E1B] transition-colors focus:outline-none cursor-pointer group"
              aria-label="Abrir Sacola de Encomendas"
            >
              <ShoppingBag className="w-5.5 h-5.5 transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-brown-deep font-bold text-xxs w-5.5 h-5.5 rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Glowing VIP order CTA (CRO) */}
            <button
              onClick={() => handleNavClick('cardapio')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-brand-brown-deep hover:bg-brand-hazel text-brand-bg font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
              Faça seu Pedido
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-[#4A2E1B] hover:bg-brand-cream-dark/50 transition-colors focus:outline-none cursor-pointer"
              aria-label="Menu Principal"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Floating Mobile Drawer */}
      <div 
        className={`md:hidden fixed inset-0 top-[73px] z-30 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div 
          className="absolute inset-0 bg-neutral-900/40 backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
        />
        <nav className="absolute right-0 top-0 w-4/5 max-w-sm h-full bg-[#FAF6F0] shadow-xl p-6 sm:p-8 space-y-4 flex flex-col border-l border-brand-cream-dark/40">
          <p className="font-sans font-bold text-xxs uppercase tracking-widest text-[#8C6239] pb-2 border-b">
            Navegação Doce Graça
          </p>
          <div className="flex flex-col space-y-2 flex-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 font-serif font-bold text-lg rounded-xl transition-all ${
                  activeSection === item.id 
                    ? 'bg-[#4A2E1B] text-brand-bg pl-6 shadow-sm' 
                    : 'text-[#4A2E1B] hover:bg-brand-cream-dark/30 hover:pl-6'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenCart();
              }}
              className="w-full py-3 bg-brand-cream-dark/80 text-[#4A2E1B] font-bold text-sm rounded-xl flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-brand-gold" />
              Ver Minha Sacola ({cartCount})
            </button>
            <button
              onClick={() => handleNavClick('cardapio')}
              className="w-full py-3 bg-brand-brown-deep text-brand-bg font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
              Peça no WhatsApp
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
