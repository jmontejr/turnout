import MutationTypes from "./mutation-types";

const actions = {
  [MutationTypes.SIGN_IN]: ({ commit }, user) => {
    commit(MutationTypes.SIGN_IN, user);
  },

  [MutationTypes.SIGN_OUT]: ({ commit }) => {
    commit(MutationTypes.SIGN_OUT);
  },

  [MutationTypes.SET_EVENTS]: ({ commit }, events) => {
    commit(MutationTypes.SET_EVENTS, events);
  },
};

export default actions;
