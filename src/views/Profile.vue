<template>
  <div class="box" v-if="isLoggedIn">
    <div class="layout">
      <ProfileGrid/>
    </div>
  </div>
  <Unauthorized v-if="isNotLoggedIn" :_mode="mode" :name="name" />
</template>

<script>
import ProfileGrid from "../components/Profile/ProfileGrid.vue";
import Unauthorized from "../components/Auth/Unauthorized.vue";

export default {
  name: "Profile",
  components: {
    Unauthorized,
    ProfileGrid,
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