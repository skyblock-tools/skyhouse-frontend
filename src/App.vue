
<template>
  <Announcement/>
  <Header/>
  <router-view />
</template>



<script>
import Announcement from './components/Announcement.vue'
import Header from './components/Header.vue'
import Flipper from "./views/Flipper.vue";

export default {
  name: "App",
  components: {
    Flipper,
    Announcement,
    Header
  },
  mounted() {
    window.App = this;
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