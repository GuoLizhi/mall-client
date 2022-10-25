import { ShopItem } from '@/store/cart/types';
import { get } from './axios';

export function getCartList() {
  return get<{}, ShopItem[]>('/cart/list', {});
}
