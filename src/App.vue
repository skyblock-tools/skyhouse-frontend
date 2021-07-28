
<template>
  <Announcement/>
  <Header cpage="2"/>
  <div class="content">
    <div class="grid grid-cols-2 layout">
      <div class="sidebar bg-neutral flex flex-col h-screen shadow-lg text-center">sidebar (this will have options- max profit, min price, filters, sorts)</div>
      <div class="flip-grid text-center">flips will appear here</div>
    </div>
  </div>
</template>



<script>
import Announcement from './components/Announcement.vue'
import Header from './components/Header.vue'

export default {
  name: "App",
  components: {
    Announcement,
    Header
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

body {

}

.content {
  height: calc(100% - 122px);
}

.layout {
  grid-template-columns: min-content auto;
  height: 100%;
}

.sidebar {
  width: 330px;
  z-index: 999;
  height: 100%;
}

.flip-grid {
  height: 100%;
}
</style>