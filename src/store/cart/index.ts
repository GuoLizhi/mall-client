import { defineStore } from 'pinia';

interface CartItem {
  id: number;
  isSelected: boolean;
  coverImg: string;
  title: string;
  price: number;
  count: number;
}

interface ShopItem {
  shopId: number;
  carts: CartItem[]
}

const cartStore = defineStore('cart', {
  state: () => ({
    shops: [] as ShopItem[],
  }),
});

export default cartStore;
