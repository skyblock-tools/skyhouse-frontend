<template>
  <div class="hero" :class="mode == 1 ? 'notLoggedIn' : 'notInServer'">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          This page requires Authorization
        </h1>
        <p class="mb-5 text-base" v-if="mode == 1">
          Skyhouse {{ name }} requires you to be logged into a valid discord
          account and a member of the skyblock.tools discord server.
        </p>
        <p class="mb-5" v-if="mode == 2">
          Skyhouse {{ name }} requires you to be a member of the skyblock.tools
          discord server.
        </p>

        <label
          for="skyHouseLogin"
          class="btn btn-accent"
          v-if="mode == 1"
          @click="loginButton"
          >Login via discord</label
        >
        <input type="checkbox" id="skyHouseLogin" class="modal-toggle" />
        <div style="padding: 26rem" class="modal">
          <div class="modal-box">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
            <p>Securely logging you in via Discord...</p>
          </div>

        </div>

        <a class="btn btn-ghost" v-if="mode == 2" @click="joinDiscord">{{
          txt
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Unauthorized",
  props: {
    _mode: Number,
    name: String,
  },
  data() {
    return {
      mode: this._mode,
      txt: "Join Discord",
      name: this.name,
    };
  },
  created() {
    window.unauthorized = this;
  },
  methods: {
    loginButton() {
      this.$root.navbar.loginButton();
    },
    joinDiscord() {
      window.location.href = "https://discord.gg/kPGE84Gf67";
    },
  },
};
</script>

<style>
.hero {
  height: calc(100% - 60px);
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
