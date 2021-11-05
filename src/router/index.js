import Vue from 'vue'
import VueRouter from 'vue-router'
import Browse from '../views/Browse.vue'
import About from '../views/About.vue'
import Playlists from '../views/Playlists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/browse',
    name: 'Browse',
    component: Browse,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/playlists',
    name: Playlists,
    component: Playlists
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
