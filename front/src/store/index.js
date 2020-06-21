import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elements: null
  },
  mutations: {
    setElements(state, newElements) {
      state.elements = newElements
    }
  },
  actions: {
  },
  modules: {
  }
})
