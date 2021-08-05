<template>
  <div class="hero">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          This page requires Authorization
        </h1>
        <p class="mb-5" v-if="mode == 1">
          Skyhouse Flipper requires you to be logged into a valid discord account and a member of the skyblock.tools
          discord server.
        </p>
        <p class="mb-5" v-if="mode == 2">
          Skyhouse Flipper requires you to be a member of the skyblock.tools discord server.
        </p>
        <button class="btn btn-ghost" v-if="mode == 1" @click="loginButton">Login via discord</button>
        <button class="btn btn-ghost" v-if="mode == 2" @click="joinDiscord">{{ txt }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Unauthorized",
    props: {
      _mode: Number
    },
    data() {
      return {
        mode: this._mode,
        txt: "Join Discord"
      }
  },
  created() {
    window.unauthorized = this;
  },
  methods: {
    loginButton(){
      this.$root.navbar.loginButton()
    },
    joinDiscord(){
      if(this.txt == "I've joined"){
        window.location.reload()
      }else{
        window.open("https://discord.gg/JSg9UvuYQs", '_blank').focus();
        this.txt = "I've joined"
      }
    }
  }
}
</script>

<style>
  .hero {
    background-image: url("../../assets/shaderbg.webp");
    height: calc(100% - 66px);
  }

  .hero-content {
    z-index: unset !important;
  }
</style>