import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../home/Home.vue'
import List from '../list/List.vue'
import Detail from '../detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  routes
})

export default router
