<template>
  <div class="box" v-if="isLoggedIn">
    <input type="checkbox" id="my-modal-2" class="modal-toggle beta-version">
    <div class="modal">
      <div class="modal-box">
        <div class="alert alert-warning">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <label>You are using a beta version of the Flipper.</label>
          </div>
        </div>

        <div class="modal-action">
          <label for="my-modal-2" class="btn btn-primary">Close</label>
        </div>
      </div>
    </div>
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
  },
  mounted() {
    this.$nextTick(function() {
      document.getElementsByClassName("beta-version")[0].checked = "yes";
    })
  }
}
</script>

<style>
.layout {
  grid-template-columns: min-content auto;
  height: 0;
}
</style>