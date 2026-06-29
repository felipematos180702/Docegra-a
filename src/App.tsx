import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetails from './components/ProductDetails';
import { CartItem, Product } from './types';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart operations
  const handleAddItem = useCallback((product: Product) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const copy = [...prevCart];
        copy[existingIndex].quantity += 1;
        return copy;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });

    // Automatically trigger cart visual cue
  }, []);

  const handleUpdateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart(prevCart => {
      return prevCart.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  }, []);

  const handleRemoveItem = useCallback((productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  }, []);

  const handleClearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF6F0] selection:bg-brand-gold selection:text-brand-brown-deep">
      
      {/* Dynamic Header Component */}
      <Header 
        onOpenCart={() => setIsCartOpen(true)} 
        cartCount={totalCartCount} 
      />

      {/* Main Content Layout */}
      <main>
        {selectedProduct ? (
          <ProductDetails 
            product={selectedProduct}
            onBack={() => {
              setSelectedProduct(null);
              setTimeout(() => {
                const element = document.getElementById('cardapio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            onAddItem={handleAddItem}
            onOpenCart={() => setIsCartOpen(true)}
            onNavigateToProduct={(p) => {
              setSelectedProduct(p);
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          />
        ) : (
          <>
            <Hero />
            <Catalog 
              onAddItem={handleAddItem} 
              onOpenCart={() => setIsCartOpen(true)} 
              onProductClick={setSelectedProduct}
            />
            <About />
            <Features />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>

      {/* Elegant Footer */}
      <Footer />

      {/* Interactive Slid-out Shopping Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Checkout trigger bubble (grows CRO for mobile scroll positions) */}
      {totalCartCount > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-[#4A2E1B] hover:bg-[#8C6239] text-[#FAF6F0] p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 border border-brand-gold/50 flex items-center gap-2 pr-5 cursor-pointer animate-pulse-slow"
          aria-label="Abrir Sacola de Encomendas"
        >
          <div className="relative">
            <ShoppingBag className="w-5.5 h-5.5 text-brand-gold" />
            <span className="absolute -top-2.5 -right-2 bg-brand-gold text-brand-brown-deep text-[10px] font-black w-5.5 h-5.5 rounded-full flex items-center justify-center border border-[#FAF6F0]">
              {totalCartCount}
            </span>
          </div>
          <span className="font-sans font-bold text-xs uppercase tracking-wider">Ver Sacola</span>
        </button>
      )}

    </div>
  );
}
