import { createRouter, createWebHistory } from 'vue-router';
import Flipper from '../views/Flipper.vue';

const routes = [
  {
    path: "/skyhouse/flipper",
    name: "Flipper",
    component: Flipper,
    includeInHeader: true,
  },
  {
    path: "/oauth_callback",
    redirect: to => {
      window.location.href = window.location.href.split('?')[0]+"index.html?"+window.location.href.split('?')[1]
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
