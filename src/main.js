import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResourse from 'vue-resource'
import Vuex from 'vuex'

import {store} from './store/store.js'

Vue.use(VueRouter)
Vue.use(VueResourse)

import App from './App.vue'
import Home from './components/home/home.vue'
import Movie from './components/movie/movie.vue'

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', component: Home,
      children: [
        {path: 'update/:id', component: Movie, name: 'movie', props: true}
      ]
    }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
