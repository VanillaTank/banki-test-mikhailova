import Vue from 'vue'
import VueRouter from 'vue-router'
import CatalogPage from '@/views/CatalogPage.vue'
import PageInWork from '@/views/PageInWork.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CatalogPage',
    component: CatalogPage,
  },
  {
    path: '/delivery',
    name: 'DeliveryPage',
    component: PageInWork,
  },
  {
    path: '/pay',
    name: 'PayPage',
    component: PageInWork,
  },
  {
    path: '/contacts',
    name: 'ContactsPage',
    component: PageInWork,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: PageInWork,
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active-route',
  routes,
})

export default router