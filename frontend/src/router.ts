import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./modules/home/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./modules/about/about.vue'),
    },
  ],
});
