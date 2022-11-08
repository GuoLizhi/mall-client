import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes:RouteRecordRaw[] = [{
  path: '/cart',
  component: () => import('../pages/cart/index.vue'),
}, {
  path: '/login',
  component: () => import('../pages/login/index.vue'),
}, {
  path: '/regist',
  component: () => import('../pages/regist/index.vue'),
}, {
  path: '/',
  component: () => import('../pages/home/index.vue'),
}, {
  path: '/goods-detail',
  component: () => import('../pages/goods-detail/index.vue'),
}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
