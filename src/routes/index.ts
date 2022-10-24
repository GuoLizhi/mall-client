import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes:RouteRecordRaw[] = [{
  path: '/cart',
  component: () => import('../pages/cart/index.vue'),
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
