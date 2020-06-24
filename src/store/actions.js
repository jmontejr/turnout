import MutationTypes from "./mutation-types";

const actions = {
  [MutationTypes.SIGN_IN]: ({ commit }, user) => {
    commit(MutationTypes.SIGN_IN, user);
  },
};

export default actions;
