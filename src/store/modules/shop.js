import axios from 'axios'

const state = {
  lists: [],
  edit: ''
}

const mutations = {
  setEdit: (state, id) => {
    state.edit = {}
    state.edit = state.lists.filter(res => res._id === id)[0] || {}
  },
  setShop: (state, shops) => {
    state.lists = shops
  },
  addShop: (state, shop) => {
    state.lists.push(shop)
  },
  updateShop: (state, shop) => {
    let shops = state.lists.filter(res => res._id !== shop._id)
    shops.push(shop)
    state.lists = shops
  },
  deleteShop: (state, id) => {
    state.lists = state.lists.filter(res => res._id !== id)
  }
}

const actions = {
  edit({ commit }, data) {
    commit('setEdit', data)
  },
  get ({ commit }) {
    axios.get('/api/shop')
    .then(res => {
      commit('setShop', res.data.data)
    })
    .catch(err => console.log(err))
  },
  new ({ dispatch }, data) {
    return axios.post('/api/shop', data)
    .then(() => dispatch('get'))
    .catch(err => console.log(err))
  },
  update({ dispatch }, data){
    return axios.put('/api/shop', data)
    .then(() => dispatch('get'))
    .catch(err => console.log(err))
  },
  delete({ dispatch }, data){
    return axios.delete('/api/shop', { data })
    .then(() => dispatch('get'))
    .catch(err => console.log(err))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}