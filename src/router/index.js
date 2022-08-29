import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ListProductsView from '../views/ListProductsView'
import CreateProductsView from '../views/CreateProductsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ListProductsView,
  },

  {
    path: '/create-products',
    component: CreateProductsView,
  },

  {
    path: '/about',
    component: AboutView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
