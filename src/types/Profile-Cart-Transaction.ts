export interface CartItemType {
  id: number;
  user_id: number;
  resto_id: number;
  menu_id: number;
  quantity: number;
}

export interface ProfileType {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
}

export interface TransactionType {
  transaction_id: string;
  user_id: number;
  payment_method: string;
  price: number;
  service_fee: string;
  delivery_fee: number;
  total_price: number;
  status: 'preparing' | 'on_the_way' | 'delivered' | 'cancelled';
}

export interface ReviewType {
  id: number;
  user_id: number;
  resto_id: number;
  transaction_id: string;
  rating: number;
  comment: string;
}
