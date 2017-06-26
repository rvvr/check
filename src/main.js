import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import Vuex from 'vuex'
import AsyncComputed from 'vue-async-computed'

import {store} from './store/store.js'

Vue.use(VueRouter)
Vue.use(Meta)
Vue.use(AsyncComputed)

import App from './App.vue'
import Home from './components/home/home.vue'
import Movie from './components/movie/movie.vue'
import Policy from './components/policy/policy.vue'

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: Home,
      children: [
        {path: 'update/:id', component: Movie, name: 'movie', props: true}
      ]
    },
      {path: '/policy', component: Policy, name: 'policy'}
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
