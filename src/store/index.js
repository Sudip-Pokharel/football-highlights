import Vue from 'vue'
import Vuex from 'vuex'
import highlight from './modules/highlight.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    highlight
  }
})
