import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);
// 权限路由

// 大家都可以访问的路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuexdemo',
      component: () => import('./views/Vuexdemo.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      component: () => import('./views/404.vue'),
    },
  ],
});
export const authRouer = [
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./views/cart.vue'),
    children: [
      {
        path: 'cart-list',
        name: 'cart-list',
        component: () => import('./views/cart-list.vue'),
        children: [
          {
            path: 'lott',
            name: 'lott',
            component: () => import('./views/lott.vue'),
          },
          {
            path: 'product',
            name: 'product',
            component: () => import('./views/product.vue'),
          },
        ],
      },
    ],
  },
];
