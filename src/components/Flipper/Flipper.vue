<template>
  <div class="box" v-if="isLoggedIn">
    <div class="grid layout">
      <Sidebar/>
      <FlipGrid/>
    </div>
  </div>
  <Unauthorized v-if="isNotLoggedIn" :_mode="mode"/>
</template>

<script>
import Sidebar from './Sidebar.vue'
import FlipGrid from "./FlipGrid.vue";
import Unauthorized from "./Unauthorized.vue";

export default {
  name: "Flipper",
  components: {
    Unauthorized,
    FlipGrid,
    Sidebar
  },
  data(){
    return {
      mode: "1"
    }
  },
  computed: {
    isLoggedIn(){
      this.mode = 1
      return true
    },
    isNotLoggedIn() {
      return !this.isLoggedIn
    }
  }
}
</script>

<style>
.layout {
  grid-template-columns: min-content auto;
  height: 0;
}
</style>