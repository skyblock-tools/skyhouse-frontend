import { createRouter, createWebHistory } from 'vue-router';
import Flipper from '../views/Flipper.vue';
import Oauth2Callback from "../views/Oauth2Callback.vue";

const routes = [
  {
    path: "/skyhouse" + "/flipper",
    name: "Flipper",
    component: Flipper,
    includeInHeader: true,
  },
  {
    path: "/skyhouse" + "/oauth_callback",
    name: "Oauth2Callback",
    component: Oauth2Callback,
    includeInHeader: false,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
