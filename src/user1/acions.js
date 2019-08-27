import * as Types from './mutations-types';

const acions = {
  addc({ commit }, payload) {
    commit(Types.MADD, payload);
  },
};
export default acions;
