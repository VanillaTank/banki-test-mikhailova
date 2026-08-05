import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Определяем маршруты
const routes = [

];

// Создаём экземпляр роутера
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;