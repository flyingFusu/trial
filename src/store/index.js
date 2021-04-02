import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    tooken: localStorage.getItem('trialfund_sk') ? localStorage.getItem('trialfund_sk') : ''
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
      console.log('store:' + state.userInfo)
    },
    setTooken (state, user) {
      state.tooken = user.sk
      localStorage.setItem('trialfund_sk', state.tooken)
    }
  },
  actions: {
    setUserInfo ({ commit }, user) {
      commit('setUserInfo', user)
    },
    changeLogin ({ commit }, user) {
      commit('setTooken', user)
    }
  },
  modules: {

  }
})
