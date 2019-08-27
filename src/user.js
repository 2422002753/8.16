// user.js
export default {
  namespaced: true, // 命名空间 开启命名空间后 可以通过辅助函数和模块名拿到当前值 不开启命名空间 actions和mutations 和全局使用方式一致
  state: {
    name: 'lili',
  },
  getters: {},
  actions: {
    add({
      dispatch, commit, rootState, rootGetters,
    }) {
      console.log(rootState.name);
      console.log(rootGetters.xname);
      // 派发动作到全局vuex 参数没有必须给null
      dispatch('minus'); // user/minus
      dispatch('minus', null, { root: true }); // root:true  动作会派发到全局  第一层(最外层)的vuex
    },
  },
  mutations: {
    minus() {
      console.log(123);
    },
  },
};
