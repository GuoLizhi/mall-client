export interface CartItem {
  id: number;
  isSelected: boolean;
  coverImg: string;
  title: string;
  price: number;
  count: number;
}

export interface ShopItem {
  shopId: number;
  shopName: string;
  isSelected: boolean;
  carts: CartItem[]
}
