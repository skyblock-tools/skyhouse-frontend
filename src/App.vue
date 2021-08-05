
<template>
  <Header/>
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
</style>