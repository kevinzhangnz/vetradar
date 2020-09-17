export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export interface Cart {
  userId: number;
  totalQty: number;
  totalPrice: number;
  items: CartItem[];
}
