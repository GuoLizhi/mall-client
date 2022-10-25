import { defineStore } from 'pinia';
import { Toast } from 'vant';
import { getCartList } from '@/service/cart';
import { hideLoading, showLoading } from '@/utils/toast';
import getErrMsg from '@/utils/getErrMsg';
import { ShopItem } from './types';

const cartStore = defineStore('cart', {
  state: () => ({
    shops: [] as ShopItem[],
  }),
  actions: {
    async initCartList() {
      showLoading();
      try {
        const resp = await getCartList();
        this.shops = resp.data;
      } catch (err) {
        const errMsg = getErrMsg(err);
        Toast.fail(errMsg);
      } finally {
        hideLoading();
      }
    },
  },
});

export default cartStore;
