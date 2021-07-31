import { createRouter, createWebHistory } from 'vue-router';
import Flipper from '../views/Flipper.vue';

const routes = [
  {
    path: "/flipper",
    name: "Flipper",
    component: Flipper,
    includeInHeader: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
