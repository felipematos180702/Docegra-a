export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  badge?: string;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar?: string;
  date: string;
}

export interface OrderData {
  customerName: string;
  phone: string;
  deliveryMethod: 'delivery' | 'pickup';
  address: string;
  deliveryDate: string;
  notes?: string;
}
