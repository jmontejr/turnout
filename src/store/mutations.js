import MutationTypes from "./mutation-types";

const mutations = {
  [MutationTypes.SIGN_IN](state, payload) {
    state.user = payload;
  },
};

export default mutations;
