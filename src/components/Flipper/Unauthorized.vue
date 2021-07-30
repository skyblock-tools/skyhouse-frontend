<template>
  <div class="hero">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          This page requires Authorization
        </h1>
        <p class="mb-5" v-if="modeOne">
          Skyhouse Flipper requires you to be logged into a valid discord account and a member of the skyblock.tools discord server.
        </p>
        <p class="mb-5" v-if="modeTwo">
          SKyhouse Flipper requires you to be a member of the skyblock.tools discord server.
        </p>
        <button class="btn btn-ghost" v-if="modeOne">Login via discord</button>
        <button class="btn btn-ghost" v-if="modeTwo">Join discord</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Unauthorized",
  props: {
    _mode: String
  },
  data() {
    return {
      mode: this._mode
    }
  },
  computed: {
    modeOne(){
      if(this.mode == 1){
        return true
      }
      return false
    },
    modeTwo(){
      if(this.mode == 2){
        return true
      }
      return false
    }
  },
  mounted() {
    window.unauthorized = this;
  }
}
</script>

<style>
.hero {
  background-image: url("../../assets/shaderbg.webp");
  height: calc(100% - 122px);
}

.hero-content {
  z-index: unset !important;
}
</style>