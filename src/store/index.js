import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('token') || null,
    userName: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
