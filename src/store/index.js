import Vue from 'vue'
import Vuex from 'vuex'
import highlight from './modules/highlight/highlight.js'
import team from './modules/team/team.js'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    highlight,
    team
  }
})
