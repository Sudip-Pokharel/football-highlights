import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fragment from 'vue-fragment'
import LazyLoadDirective from './directives/LazyLoadDirective.vue'

Vue.directive('lazyload', LazyLoadDirective)
Vue.use(Fragment.Plugin)

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
