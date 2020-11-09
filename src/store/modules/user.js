const state = {
  name: ''
}

const mutations = {
  setName: (state, name) => {
    state.name = name
  }
}

const actions = {
  setName ({ commit }, name) {
    commit('setName', name)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}