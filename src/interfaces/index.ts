export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: number;
  hasPrime?: boolean;
}

interface IStripeProduct {
  amount_subtotal: number;
  amount_total: number;
  currency: string;
  description: string;
  id: string;
  object: string;
  quantity: number;
}

export interface IOrder {
  amount: number;
  amountShipping: number;
  id: string;
  images: string[];
  products: IStripeProduct[];
  timestamp: number;
}
