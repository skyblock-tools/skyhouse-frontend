<template>
  <div class="box">
    <div class="grid layout">
      <Sidebar/>
      <FlipGrid/>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import FlipGrid from "./FlipGrid.vue";

export default {
  name: "Flipper",
  components: {
    FlipGrid,
    Sidebar
  }
}
</script>

<style>
.layout {
  grid-template-columns: min-content auto;
  height: 0;
}
</style>