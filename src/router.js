import Vue from 'vue';
import VueRouter from 'vue-router';
import intro from './intro.vue';
import npm from './npm.vue';
import directly from './directly.vue';
import vuejs from './vuejs.vue';
import deploy from './deploy.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/intro',
    component: intro
  },
  {
    path: '/npm',
    component: npm,
  },
  {
    path: '/directly',
    component: directly,
  },
  {
    path: '/vuejs',
    component: vuejs,
  },
  {
    path: '/deploy',
    component: deploy,
  },
];

const router = new VueRouter({
  routes,
});
export default router
