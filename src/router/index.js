import Vue from 'vue'
import VueRouter from 'vue-router'
const CatalogPage = () => import('@/views/CatalogPage.vue')
const PageInWork = () => import('@/views/PageInWork.vue')

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