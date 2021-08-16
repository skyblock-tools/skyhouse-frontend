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
import Sidebar from '../components/Flipper/Sidebar.vue'
import FlipGrid from "../components/Flipper/FlipGrid.vue";
import Unauthorized from "../components/Flipper/Unauthorized.vue";

export default {
  name: "Flipper",
  components: {
    Unauthorized,
    FlipGrid,
    Sidebar
  },
  data(){
    return {
      mode: this.$root.navbar.mode
    }
  },
  computed: {
    isLoggedIn(){
      return this.$root.navbar.isLoggedIn
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