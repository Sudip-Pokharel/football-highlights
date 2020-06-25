import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Watch from '../views/Watch.vue'
import Teams from '../views/Teams.vue'
import TeamDetail from '../views/TeamDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/highlight',
    name: 'Highlight',
    component: Home
  },
  {
    path: '/highlight/:id',
    name: 'HighlightVideo',
    component: Watch
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Watch.vue')
  },
  {
    path: '/teams/league/:leagueID',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/teams/:id',
    name: 'TeamDetail',
    component: TeamDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
