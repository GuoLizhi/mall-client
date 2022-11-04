import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes:RouteRecordRaw[] = [{
  path: '/cart',
  component: () => import('../pages/cart/index.vue'),
}, {
  path: '/login',
  component: () => import('../pages/login/index.vue'),
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
