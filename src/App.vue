
<template>
  <Header/>
  <div class="watermark font-thin">
    b217-BETA
    <div class="text-lg whitespace-normal">You are using a non-public, beta version of Skyhouse.</div>
  </div>
  <router-view />
</template>



<script>
import Header from './components/Header.vue'
import Flipper from "./views/Flipper.vue"

export default {
  name: "App",
  components: {
    Flipper,
    Header,
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,body,#app {
  height: 100%;
}

.watermark {
  font-size: 5vw;
  position: fixed;
  z-index: 99999999;
  top: 95%;
  left: 95%;
  transform: translate(-95%, -95%);
  pointer-events: none;
  color: red;
  opacity: 0.5;
  white-space: nowrap;
  padding: 10px 10px;
  border: 3px solid red;
}
</style>