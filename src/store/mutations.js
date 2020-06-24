import MutationTypes from "./mutation-types";

const mutations = {
  [MutationTypes.SIGN_IN](state, payload) {
    state.user = payload;
  },

  [MutationTypes.SIGN_OUT](state) {
    state.user = {};
  },
};

export default mutations;
