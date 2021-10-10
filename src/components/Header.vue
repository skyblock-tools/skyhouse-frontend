<template>
  <div
    class="navbar shadow-lg bg-base-300 text-neutral-content w-full fixed"
    :class="classname"
    :style="styles"
  >
    <div class="flex-none lg:flex" >
      <button class="btn btn-square btn-ghost" v-on:click="hideSidebar" v-if="isLoggedIn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <router-link to="/skyhouse"><img class="cursor-pointer h-9 " src="../assets/SH2.png"/></router-link>

    </div>

    <div class="hidden px-2 mx-2 navbar-start lg:flex">

      <div class="flex items-stretch">
        <a
          class="btn btn-ghost btn-sm rounded-btn pagelink"
          v-for="route in routes"
          :key="route.name"
          :style="
            route.name == $route.name
              ? 'background-color: rgb(66, 65, 81); margin-left: 5px;'
              : 'margin-left: 5px;'
          "
        >
          <router-link :to="route.path">{{ route.name }}</router-link>
        </a>
      </div>
    </div>
    <div class="dropdown dropdown-end dropdown-hover navbar-end">
      <div class="lg:hidden flex-none">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <router-link to="/skyhouse/flipper"
              ><span> Flipper </span></router-link
            >
          </li>
          <li>
            <router-link to="/skyhouse/skyhouse+"
              ><span> Skyhouse+ </span></router-link
            >
          </li>
          <li v-if="isLoggedIn || mode == 2">
            <router-link to="/skyhouse/profile"
              ><span> Profile </span></router-link
            >
          </li>
          <li v-if="isLoggedIn || mode == 2">
            <a @click="logout"><span> Log Out </span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="hidden navbar-end lg:flex">
      <div class="avatar" v-if="isLoggedIn || mode == 2">
        <Avatar :pfpSrc="pfpSrc" />
      </div>
      <label
        for="skyHouseLogin"
        class="btn btn-ghost"
        v-if="isNotLoggedIn && mode == 1"
        @click="loginButton"
        >Login via discord</label
      >
    </div>
  </div>
  <div style="padding: 30px"></div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Avatar from "./Avatar.vue";
import Unauthorized from "./Auth/Unauthorized.vue";
export default {
  name: "Header",
  components: { Avatar, SearchBar },
  data() {
    return {
      classname: "",
      styles: "",
      pfpSrc: "",
      mode:
        JSON.parse(window.localStorage.getItem("user_session_data")) == null
          ? 1
          : JSON.parse(window.localStorage.getItem("user_session_data"))
              .privilege_level == 0
          ? 2
          : 1,
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes.filter((x) => x.includeInHeader);
    },
    isLoggedIn() {
      const session_data = JSON.parse(
        window.localStorage.getItem("user_session_data")
      );
      if (session_data == null) {
        return false;
      }
      this.pfpSrc =
        "https://cdn.discordapp.com/avatars/" +
        session_data["discord_info"].id +
        "/" +
        session_data["discord_info"].avatar +
        ".webp?size=512";
      if (this.mode == 2) {
        return false;
      }
      return true;
    },
    isNotLoggedIn() {
      return !this.isLoggedIn;
    },
  },
  created() {
    this.$root.navbar = this;
  },
  methods: {
    hideSidebar: function () {
      if (
        document
          .getElementsByClassName("sidebar")[0]
          .classList.contains("slideIn")
      ) {
        document
          .getElementsByClassName("sidebar")[0]
          .classList.toggle("slideOut");
      } else {
        document
          .getElementsByClassName("sidebar")[0]
          .classList.toggle("slideIn");
      }
    },
    loginButton() {
      const url = window.location.href;
      const { hostname } = new URL(url);
      let redUri =
        hostname === "skyblock.tools"
          ? "https%3A%2F%2Fskyblock.tools%2Foauth_callback%2F"
          : "http%3A%2F%2Flocalhost%3A3000%2Fskyhouse%2Foauth_callback%2F";
      const win = window.open(
        "https://discord.com/api/oauth2/authorize?client_id=841014617895469096&redirect_uri=" +
          redUri +
          "&response_type=code&scope=identify%20guilds&prompt=none",
        "Login",
        "height=500,width=500"
      );
      const pollTimer = window.setInterval(function () {
        if (win.closed !== false) {
          window.clearInterval(pollTimer);
          window.location.reload(false);
        }
      }, 200);
    },
    logout: function () {
      window.localStorage.removeItem("user_session_data");
      window.location.reload();
    },
  },
};
</script>

<style>
.navbar {
  z-index: 999;
}
</style>
