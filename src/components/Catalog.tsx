import React, { useState, useMemo } from 'react';
import { Search, Plus, Filter, CornerDownRight, Check, ShoppingBag } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data';
import { Product } from '../types';

interface CatalogProps {
  onAddItem: (product: Product) => void;
  onOpenCart: () => void;
  onProductClick: (product: Product) => void;
}

export default function Catalog({ onAddItem, onOpenCart, onProductClick }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  // Filter products by category and input text query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchCategory = selectedCategory === 'todos' || product.category === selectedCategory;
      const matchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddClick = (product: Product) => {
    onAddItem(product);
    setAddedItemName(product.name);
    setTimeout(() => {
      setAddedItemName(null);
    }, 2800);
  };

  return (
    <section id="cardapio" className="py-24 bg-brand-cream-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#8C6239] block">
            Vitrine de Delícias
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-brand-brown-deep">
            Nossos Doces Artesanais
          </h3>
          <p className="text-neutral-500 font-sans text-xs sm:text-sm max-w-xl mx-auto">
            Faça sua seleção abaixo para montar sua sacola de encomendas e enviar diretamente para o nosso ateliê via WhatsApp. Toque no doce para ver os detalhes.
          </p>
          <div className="h-1 w-16 bg-brand-gold rounded-full mx-auto mt-4" />
        </div>

        {/* Interactive Filters & Search bar section */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-brand-cream-dark/50 shadow-xs mb-10 max-w-5xl mx-auto">
          
          {/* Category buttons slider */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="hidden lg:flex items-center text-[#8C6239] text-xs font-bold gap-1 pl-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filtrar:
            </span>
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all duration-300 shrink-0 select-none cursor-pointer ${
                  selectedCategory === category.id 
                    ? 'bg-[#4A2E1B] text-[#FAF6F0] shadow-sm' 
                    : 'bg-brand-cream-dark/40 text-[#4A2E1B] hover:bg-brand-cream-dark'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Real-time search field */}
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Buscar doçura desejada..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-cream-dark/80 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5" />
          </div>

        </div>

        {/* Dynamic Items Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/40 border border-dashed rounded-2xl max-w-lg mx-auto">
            <p className="text-[#8C6239] font-semibold text-sm">Não encontramos nenhuma doçura com este nome.</p>
            <button 
              onClick={() => { setSelectedCategory('todos'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-brand-brown-deep hover:underline"
            >
              Limpar filtros e buscar de novo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
            {filteredProducts.map((product) => (
              <article 
                key={product.id}
                onClick={() => onProductClick(product)}
                className="w-full max-w-sm bg-white rounded-2xl overflow-hidden border border-brand-cream-dark/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group relative cursor-pointer hover:border-brand-gold/40"
              >
                {/* Image Showcase with hover scaling */}
                <div className="relative overflow-hidden h-[260px] sm:h-[280px] bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover pb-[24px] transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag Overlay inside image */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex flex-wrap gap-1">
                    <span className="bg-[#FAF6F0]/90 backdrop-blur-md text-[#4A2E1B] font-semibold text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-md shadow-xs border border-brand-cream-dark/30">
                      {CATEGORIES.find(c => c.id === product.category)?.name}
                    </span>
                    {product.badge && (
                      <span className="bg-brand-gold text-brand-brown-deep font-sans font-extrabold text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-md shadow-xs">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Core */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-serif font-black text-brand-brown-deep text-base sm:text-lg group-hover:text-brand-gold transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-neutral-500 text-xs font-sans leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center text-[10px] text-[#8C6239] font-bold uppercase tracking-wider gap-1 hover:underline">
                      <CornerDownRight className="w-3 h-3" /> Ver Detalhes
                    </span>
                  </div>

                  {/* Pricing and Conversion Button */}
                  <div className="pt-4 mt-4 border-t border-brand-cream-dark/40 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-[#8C6239] font-semibold leading-tight">Valor da porção</p>
                      <p className="font-sans font-extrabold text-brand-brown-deep text-base sm:text-lg mt-0.5">
                        R$ {product.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddClick(product);
                      }}
                      className="px-3.5 py-2.5 bg-brand-brown-deep hover:bg-[#8C6239] text-[#FAF6F0] rounded-xl font-sans font-bold text-xxs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer"
                      title="Adicionar à sacola de encomendas"
                    >
                      <Plus className="w-3.5 h-3.5 text-brand-gold stroke-[3]" />
                      Adicionar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Small floating alert feedback (increases CRO!) */}
        {addedItemName && (
          <div className="fixed bottom-6 left-6 z-50 bg-[#4A2E1B] text-brand-bg px-5 py-4 rounded-xl shadow-xl border border-brand-gold/40 flex items-center gap-3.5 max-w-sm animate-fade-in-up">
            <div className="p-1 bg-brand-gold text-brand-brown-deep rounded-full">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold leading-tight text-white">Doce adicionado!</p>
              <p className="text-[10px] text-neutral-300 mt-0.5 line-clamp-1">{addedItemName}</p>
            </div>
            <button 
              onClick={onOpenCart}
              className="text-[10px] font-bold text-brand-gold uppercase tracking-widest hover:underline flex items-center gap-1 shrink-0"
            >
              <ShoppingBag className="w-3.5" /> Ver Sacola
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
