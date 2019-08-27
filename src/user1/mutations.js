import * as T from './mutations-types';

const mutations = {
  [T.MADD](state, payload) {
    state.count += payload;
  },
};
export default mutations;
