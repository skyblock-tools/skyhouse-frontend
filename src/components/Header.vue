<template>
  <div class="navbar shadow-lg bg-base-300 text-neutral-content w-full fixed" :class="classname" :style="styles">
    <div class="flex-none px-2 mx-2">
    <img class="cursor-pointer" onclick="window.location = '/'" src="../assets/logo.png"/>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <a class="btn btn-ghost btn-sm rounded-btn pagelink" v-for="route in routes" :key="route.name"
        :style="route.name == $route.name ? 'background-color: rgb(66, 65, 81); margin-left: 5px;' : 'margin-left: 5px;'">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </a>

      </div>
    </div>
    <SearchBar/>

    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <div class="indicator">
          <div class="indicator-item badge-xs badge-secondary rounded-badge">1</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </div>
      </button>
    </div>
    <div class="flex-none">
      <div class="avatar" v-if="isLoggedIn || mode == 2">
        <Avatar :pfpSrc="pfpSrc"/>
      </div>
      <button class="btn btn-ghost" v-if="isNotLoggedIn && mode == 1" @click="loginButton">Login via discord</button>
    </div>
  </div>
  <div class="spacer" style="height: 66px"></div>
</template>

<script>
  import SearchBar from "./SearchBar.vue";
  import Avatar from "./Avatar.vue";
  export default {
    name: "Header",
    components: {Avatar, SearchBar},
    data() {
      return {
        classname: "",
        styles: "",
        pfpSrc: "",
        mode: JSON.parse(window.localStorage.getItem("user_session_data")) == null ? 1 : JSON.parse(window.localStorage.getItem("user_session_data")).privilege_level == 0 ? 2 : 1
      }
    },
    computed: {
      routes() {
        return this.$router.options.routes.filter(x => x.includeInHeader);
      },
      isLoggedIn(){
        const session_data = JSON.parse(window.localStorage.getItem("user_session_data"))
        if(session_data == null){
          return false
        }
        this.pfpSrc = "https://cdn.discordapp.com/avatars/"+session_data["discord_info"].id+"/"+session_data["discord_info"].avatar+".webp?size=512"
        if(this.mode == 2){
          return false
        }
        return true
      },
      isNotLoggedIn(){
        return !this.isLoggedIn
      }
    },
    created() {
      this.$root.navbar = this
    },
    methods: {
      loginButton(){
        const url = window.location.href;
        const { hostname } = new URL(url);
        let redUri = hostname === "skyblock.tools" ? "https%3A%2F%2Fskyblock.tools%2Foauth_callback%2F" : "http%3A%2F%2Flocalhost%3A3000%2Fskyhouse-v2%2Foauth_callback%2F";
        const win = window.open("https://discord.com/api/oauth2/authorize?client_id=841014617895469096&redirect_uri="+redUri+"&response_type=code&scope=identify%20guilds&prompt=none","Login",'height=500,width=500');
        const pollTimer = window.setInterval(function() {
          if (win.closed !== false) {
            window.clearInterval(pollTimer);
            window.location.reload(false);
          }
        }, 200);
      }
    }
  }
</script>

<style>
.navbar {
  z-index: 999;
}
</style>