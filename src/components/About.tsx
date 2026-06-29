import React from 'react';
import { Heart, Sparkles, Award, Leaf, BookOpen, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-cream-dark/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Column 1 - Copywriting and Core Pillars */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#8C6239] block">
                Nossa Essência • A Nossa Graça
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A2E1B] leading-tight">
                Receitas moldadas com amor, afeto e técnica fina.
              </h3>
            </div>

            <div className="h-1 w-20 bg-[#C5A059] rounded-full" />

            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                Da primeira trufa ao nascimento da Doce Graça: nossa história foi escrita na cozinha de <strong>Aneide</strong> — confeiteira de mãos pacientes e olhar atento. Foi ali que nasceu a receita de trufas que, de tão única, atravessou bairros e cidades, ganhando fama nas encomendas e feiras por onde passava: Salvador, Santa Luz, Feira de Santana e Capim Grosso, Tucano... Cada mordida trazia um reconhecimento carinhoso: <em>“é a trufa da Aneide”</em>.
              </p>
              <p>
                Com o tempo, a tradição encontrou um novo capítulo. Aneide decidiu compartilhar seu segredo com a nora, <strong>Irlana</strong> — não só a receita, mas o jeito de fazer: o ponto exato do chocolate, a textura cremosa do recheio, a calma do resfriamento e o capricho que transforma simples ingredientes em memória afetiva. Dessa parceria nasceu nossa doceria artesanal: <strong>Doce Graça</strong>, nome escolhido em honra a Deus, fonte da inspiração e do propósito que nos guia.
              </p>
              <p>
                Hoje, seguimos fiéis ao que nos trouxe até aqui: produção artesanal, lotes pequenos, escolhas criteriosas de ingredientes e respeito ao tempo de cada preparo.
              </p>
              <p className="font-serif italic text-brand-brown-deep font-semibold">
                Seja bem-vindo à Doce Graça — onde família, fé e sabor se encontram.
              </p>
            </div>

            {/* In-text emotional highlight */}
            <blockquote className="bg-brand-cream-dark/40 border-l-4 border-brand-gold p-4 rounded-r-xl italic text-brand-brown-deep font-serif text-sm">
              "Para nós, doce refinado é aquele que equilibra perfeitamente o dulçor das frutas com a intensidade do cacau bruto, fazendo de cada deguste uma oração de gratidão."
            </blockquote>

            {/* Mini Core Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex items-start gap-2.5">
                <Heart className="w-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-brown-deep leading-tight">100% Afeto</h4>
                  <p className="text-[10px] text-neutral-500 mt-1">Manual de ponta a ponta.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-brown-deep leading-tight">Matéria-Prima</h4>
                  <p className="text-[10px] text-[#8C6239] mt-1">Chocolates e frutas puras.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award className="w-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-brand-brown-deep leading-tight">Arte Autoral</h4>
                  <p className="text-[10px] text-neutral-500 mt-1">Design único para você.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Our Devotion & Ingredients Card */}
          <div className="relative mt-12 lg:mt-0 flex justify-center w-full">
            
            {/* Visual background solid box frame */}
            <div className="absolute -inset-4 bg-[#8C6239]/5 rounded-3xl transform rotate-2 pointer-events-none" />
            <div className="absolute -inset-2 bg-[#C5A059]/10 rounded-3xl transform -rotate-1 pointer-events-none" />

            <div className="relative bg-[#FFFDFB] rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-cream-dark/60 max-w-lg w-full flex flex-col justify-between min-h-[460px]">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px bg-brand-gold/40 flex-1" />
                  <span className="font-serif italic text-sm text-[#8C6239] font-medium px-2">Pilares do Nosso Cuidado</span>
                  <div className="h-px bg-brand-gold/40 flex-1" />
                </div>

                <div className="space-y-6">
                  {/* Pillar 1 */}
                  <div className="flex gap-4">
                    <div className="p-3 bg-brand-cream-dark/40 rounded-xl text-brand-gold shrink-0 h-11 w-11 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-brand-brown-deep" />
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-brand-brown-deep text-sm">
                        Chocolate Nobre Cicao
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Nossos cones e trufas são feitos com o nobre chocolate meio amargo Cicao e recheios cremosos com sabor e textura incomparáveis.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex gap-4">
                    <div className="p-3 bg-brand-cream-dark/40 rounded-xl text-brand-gold shrink-0 h-11 w-11 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-brand-brown-deep" />
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-brand-brown-deep text-sm">
                        Segredo de Família Guardado
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        O ponto exato do chocolate de Aneide, o recheio cremoso e o carinho artesanal transmitidos cuidadosamente para sua nora Irlana.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex gap-4">
                    <div className="p-3 bg-brand-cream-dark/40 rounded-xl text-brand-gold shrink-0 h-11 w-11 flex items-center justify-center">
                      <HeartHandshake className="w-5 h-5 text-brand-brown-deep" />
                    </div>
                    <div>
                      <h4 className="font-serif font-black text-brand-brown-deep text-sm">
                        Fé, Propósito & Devoção
                      </h4>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        Doce Graça é um nome de gratidão a Deus. Cada lote pequeno é preparado como uma oração de carinho para adoçar sua vida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stamp inside card */}
              <div className="mt-8 pt-6 border-t border-brand-cream-dark/40 flex items-center justify-between text-xs text-neutral-500 font-sans">
                <span className="font-medium">100% Produção Própria</span>
                <span className="text-[#C5A059] font-serif italic font-bold">Ateliê Doce Graça</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
