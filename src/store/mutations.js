import MutationTypes from "./mutation-types";

const mutations = {
  [MutationTypes.SIGN_IN](state, payload) {
    state.user = payload;
  },

  [MutationTypes.SIGN_OUT](state) {
    state.user = {};
  },

  [MutationTypes.SET_EVENTS](state, payload) {
    state.events = payload;
  },
};

export default mutations;
