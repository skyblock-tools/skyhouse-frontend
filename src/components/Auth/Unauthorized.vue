<template>
  <div class="hero" :class="mode == 1 ? 'notLoggedIn' : 'notInServer'">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          This page requires Authorization
        </h1>
        <p class="mb-5" v-if="mode == 1">
          Skyhouse {{ name }} requires you to be logged into a valid discord account and a member of the skyblock.tools
          discord server.
        </p>
        <p class="mb-5" v-if="mode == 2">
          Skyhouse {{ name }} requires you to be a member of the skyblock.tools discord server.
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
      _mode: Number,
      name: String
    },
    data() {
      return {
        mode: this._mode,
        txt: "Join Discord",
        name: this.name
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
      window.location.href = "https://discord.gg/kPGE84Gf67";
    }
  }
}
</script>

<style>
  .hero {
    height: calc(100% - 66px);
  }

  .notLoggedIn {
    background-image: url("../../assets/shaderbg.webp");
  }

  .notInServer {
    background-image: url("../../assets/shaderbg1.webp");
  }

  .hero-content {
    z-index: unset !important;
  }
</style>