import Vue from 'vue';
import Vuex from 'vuex';
import { getAuth } from './api';
import { authRouer } from './router';
import user from './user';
import user1 from './user1';

Vue.use(Vuex);
function formatRoute(authlist, routers) {
  return routers.filter((router) => {
    if (authlist.includes(router.name)) {
      // 过滤出有权限的儿子
      if (router.children) {
        // eslint-disable-next-line no-param-reassign
        router.children = formatRoute(authlist, router.children);
      }
      return true;
    }
  });
}
export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  // 如果不是通过mutations修改state会报警告
  state: {
    name: '李雷',
    loading: false,
    hasAuth: false, // 是否请求过路由权限
  },
  getters: {
    xname(state) {
      return `小${state.name}`;
    },
  },
  mutations: {
    hasAuth(state) {
      state.hasAuth = true;
    },
    hideloading(state) {
      state.loading = false;
    },
    showloading(state) {
      state.loading = true;
    },
  },
  actions: {
    minus() {
      console.log('rootactions');
    },
    async getRouterList({ commit }) {
      // 发送请求 得到权限列表
      let authlist = await getAuth();
      authlist = authlist.map(item => item.auth);
      console.log(authlist);
      // 用后台返回的权限对比我们自己的动态路由 确定路由列表
      const routerList = formatRoute(authlist, authRouer);
      // 修改是否获取权限的状态
      commit('hasAuth');
      return routerList;
    },
    hideloading({ commit }) {
      commit('hideloading');
    },
    showloading(store) {
      store.commit('showloading');
    },
  },
  modules: {
    user,
    user1,
  },
});
