import { Product, Testimonial } from './types';

export const CATEGORIES = [
  { id: 'todos', name: 'Todo o Cardápio' },
  { id: 'frutados', name: 'Frutas Nobres' },
  { id: 'cremosos', name: 'Clássicos Cremosos' },
  { id: 'cones', name: 'Cones Trufados' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'trufa-maracuja',
    name: 'Trufa Gourmet de Maracujá',
    description: 'A combinação sublime entre o toque cítrico do maracujá fresco e a cremosidade irresistível de um mousse, envolta em casca de chocolate meio amargo.',
    price: 4.00,
    category: 'frutados',
    image: 'https://lh3.googleusercontent.com/d/10aOAD3nNJCL-KfI88EZTsR19PKqcIZCX',
    badge: 'Mais Vendida',
    isPopular: true
  },
  {
    id: 'trufa-morango',
    name: 'Trufa Gourmet de Morango',
    description: 'Fruta fresca combinada com ganache aveludada, coberta por uma fina e crocante camada de chocolate ao leite belga 33% cacau. Um sabor exuberante para paladares refinados.',
    price: 4.00,
    category: 'frutados',
    image: 'https://lh3.googleusercontent.com/d/1CfWLeg-WDBKLEmC8MnVhKs-qCfxygse4',
    badge: 'Destaque',
    isPopular: true
  },
  {
    id: 'trufa-beijinho',
    name: 'Trufa Gourmet de Beijinho',
    description: 'Cremosidade clássica de leite condensado artesanal e coco ralado in natura umedecido, banhada em uma delicada camada de puro chocolate gourmet e salpicada com flocos de coco.',
    price: 4.00,
    category: 'cremosos',
    image: 'https://lh3.googleusercontent.com/d/1MXE4Kf8D02e1p1rfcSFf50F7fMw3LsW7',
    badge: 'Favorito',
    isPopular: true
  },
  {
    id: 'trufa-limao',
    name: 'Trufa Gourmet de Limão',
    description: 'Explosão cítrica inesquecível. Macia emulsão de ganache infusionada com raspas e suco de limão siciliano selecionado, finalizada com maestria em um invólucro de chocolate gourmet.',
    price: 4.00,
    category: 'frutados',
    image: 'https://lh3.googleusercontent.com/d/1y0Et5b5SFU5yRPpblOgBGs-NNkI_nlRH',
    badge: 'Premium',
    isPopular: true
  },
  {
    id: 'trufa-brigadeiro',
    name: 'Trufa Gourmet de Brigadeiro',
    description: 'O clássico mais amado em sua versão mais nobre. Brigadeiro ultra cremoso preparado com chocolate belga selecionado, envolto em casquinha fina de chocolate de origem e finalizado com granulados finos.',
    price: 4.00,
    category: 'cremosos',
    image: 'https://lh3.googleusercontent.com/d/1UWv2eigeDLB0epj7SVJK0a25LusGPsV2',
    badge: 'Mais Pedida',
    isPopular: true
  },
  {
    id: 'trufa-amendoim',
    name: 'Trufa Gourmet de Amendoim',
    description: 'O sabor acolhedor do amendoim em uma textura divinamente macia. Creme aveludado de amendoim artesanal envolto por chocolate meio amargo e delicadamente decorado com amendoim tostado.',
    price: 4.00,
    category: 'cremosos',
    image: 'https://lh3.googleusercontent.com/d/1MPM20jkUfJuyhz09mmhPvNBmefmqDiHR',
    badge: 'Novidade',
    isPopular: true
  },
  {
    id: 'cone-amendoim',
    name: 'Cone Trufado de Amendoim',
    description: 'Casquinha ultra crocante envolvida por chocolate meio amargo, preenchida com um sublime creme de amendoim artesanal super aveludado e finalizado com pedaços crocantes de amendoim selecionado.',
    price: 7.00,
    category: 'cones',
    image: 'https://lh3.googleusercontent.com/d/18fSGrX60O0-8Z6dHX-PZwvyFOBjdyUqJ',
    images: [
      'https://lh3.googleusercontent.com/d/18fSGrX60O0-8Z6dHX-PZwvyFOBjdyUqJ',
      'https://lh3.googleusercontent.com/d/1x5kHzuNYTacwRBCpINv5PK5ZWeZ0m6lU'
    ],
    badge: 'Novo',
    isPopular: true
  },
  {
    id: 'cone-brigadeiro-maracuja',
    name: 'Cone Trufado de Brigadeiro com Maracujá',
    description: 'A perfeita harmonia entre a ganache intensa de chocolate e o toque cítrico e cremoso do maracujá fresco, dispostos em camadas na casquinha artesanal hiper crocante com cobertura de chocolate meio amargo.',
    price: 7.00,
    category: 'cones',
    image: 'https://lh3.googleusercontent.com/d/1KRBwQGwPRX9ruijlEdhu6zO0MNQJx5DY',
    images: [
      'https://lh3.googleusercontent.com/d/1KRBwQGwPRX9ruijlEdhu6zO0MNQJx5DY',
      'https://lh3.googleusercontent.com/d/1zpDAck477iawk0_KCTGEAlhmrfagWogj'
    ],
    badge: 'Lançamento',
    isPopular: true
  },
  {
    id: 'cone-coco',
    name: 'Cone Trufado de Coco',
    description: 'Cremosidade absoluta de coco fresco e leite condensado artesanal em um recheio suave de beijinho, abraçado por uma casquinha dourada crocante e chocolate de cobertura.',
    price: 7.00,
    category: 'cones',
    image: 'https://lh3.googleusercontent.com/d/1coIUomVDxozB_tm-TZJ2Kp6e3Q1k4_kf',
    badge: 'Sensação',
    isPopular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    name: 'Mariana Silveira',
    role: 'Feira de Santana - BA',
    rating: 5,
    comment: 'Os cones trufados são maravilhosos! A casquinha é muito crocante e o recheio de amendoim é incrivelmente cremoso. Sempre peço de sobremesa no final de semana.',
    date: 'Março 2026'
  },
  {
    id: 'dep-2',
    name: 'Adriano de Souza',
    role: 'Feira de Santana - BA',
    rating: 5,
    comment: 'Comprei uma caixa de trufas sortidas para dar de presente. As de brigadeiro belga fazem muito sucesso. Nunca provei um chocolate tão macio que derrete na boca!',
    date: 'Abril 2026'
  },
  {
    id: 'dep-3',
    name: 'Fernanda Leal',
    role: 'Feira de Santana - BA',
    rating: 5,
    comment: 'Sempre encomendo os cones de Coco com chocolate. Dá para perceber a qualidade dos ingredientes e o carinho da produção, o sabor é sensacional.',
    date: 'Maio 2026'
  }
];

export const DIFFERENTIALS = [
  {
    title: 'Ingredientes Nobres',
    description: 'Nós utilizamos uma das melhores marcas de chocolate meio amargo, a Sicao, combinada com frutas frescas selecionadas e recheios cremosos de altíssima qualidade.',
    icon: 'Sparkles'
  },
  {
    title: 'Produção 100% Manual',
    description: 'Amassados, moldados e decorados um a um. Cada peça reflete o toque autoral e o carinho do artesanato culinário.',
    icon: 'Heart'
  },
  {
    title: 'Design Exclusivo',
    description: 'Apresentação refinada com acabamento em folha de ouro, fitas de cetim delicadas e caixas cartonadas finas para presente.',
    icon: 'Crown'
  },
  {
    title: 'Agendamento Seguro',
    description: 'Sua encomenda chega fresca, no horário reservado, transportada com extremo cuidado para preservar cada detalhe visual.',
    icon: 'CalendarDays'
  }
];
