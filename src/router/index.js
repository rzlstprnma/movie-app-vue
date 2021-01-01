import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie-preview/:id',
    name: 'MoviePreview',
    component: () => import('../views/MoviePreview.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
