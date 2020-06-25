import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state'
import highlight from './modules/highlight/highlight.js'
import team from './modules/team/team.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    state,
    highlight,
    team
  }
})
