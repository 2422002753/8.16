import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line global-require
if (process.env.NODE_ENV === 'development') require('./mock');

Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;
// beforeEach 路由前置守卫
// to 到哪个页面去  from 从那个页面来
router.beforeEach(async (to, from, next) => {
  // 判断有没有获取过权限，没有获取过就获取权限
  if (!store.state.hasAuth) {
    // 获取权限路由 然后动态添加
    const routerlist = await store.dispatch('getRouterList');
    console.log(routerlist, 'routerlist');
    router.addRoutes(routerlist);
    next({ ...to, replace: true });
  } else {
    next();
  }
  // 只有调用next 才能继续
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
