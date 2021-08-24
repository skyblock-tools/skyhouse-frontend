<template>
  <Header />
  <div class="watermark font-thin">
    v2.8_beta
  </div>
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
import Flipper from "./views/Flipper.vue";
import Profile from "./views/Profile.vue";

export default {
  name: "App",
  components: {
    Flipper,
    Profile,
    Header,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  height: 100%;
}

.watermark {
  font-size: 1vw;
  position: fixed;
  z-index: 99999999;
  bottom: 0;
  opacity: 0.5;
  pointer-events: none;
  color: white;
  white-space: nowrap;
  padding-left: 10px;
  padding-right: 10px;
  background: palevioletred;
  right: 0;
}
</style>
