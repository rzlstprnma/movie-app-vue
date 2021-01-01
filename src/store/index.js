import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies'

Vue.use(Vuex)

const SET_USER = "SET_USER"

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    movies
  }
})
