import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function lazyLoading(views) {
  return () => import(`@/views/${views}.vue`);
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: lazyLoading('Home')
  },
  {
    path: '/highlights',
    name: 'Highlight',
    component: lazyLoading('Highlights')
  },
  {
    path: '/highlight/:id',
    name: 'HighlightVideo',
    component: lazyLoading('Watch')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Watch.vue')
  },
  {
    path: '/teams/league/:leagueID',
    name: 'Teams',
    component: lazyLoading('Teams')
  },
  {
    path: '/teams/:id',
    name: 'TeamDetail',
    component: lazyLoading('TeamDetail')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: "futbol/",
  routes
})

export default router
