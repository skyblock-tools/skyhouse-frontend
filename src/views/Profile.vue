<template>
  <div class="box profBox" v-if="isLoggedIn">
    <div class="user-overview">
      <div class="card card-side shadow-lg bg-base-200">
        <figure>
          <div class="avatar p-4">
            <div class="rounded-full w-28 h-31">
              <img :src="profile">
            </div>
          </div>
        </figure>
        <div class="card-body mt-auto mb-auto">
          <h2 class="card-title text-2xl">{{username}} <div v-if="skyhousePlus" class="badge badge-outline badge-lg ml-auto float-right skyhouseplusBadge">Skyhouse+</div></h2>
          <div class="card-actions flex-grow-0 profCardActions">
            <button v-if="!skyhousePlus" class="btn btn-primary">Upgrade</button>
            <button v-if="skyhousePlus" @click="logout" class="btn btn-primary">Sign Out</button>
            <button v-if="!skyhousePlus" @click="logout" class="btn btn-ghost">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
    <div class="form-control mt-4">
      <div class="border-white">
        <label class="label">
          <span class="label-text">Generated Mod Token (click to copy)</span>
        </label>
        <div class="tokenboxcont">
          <input type="text" @click="copyToken" :value="token" readonly="true" class="input cursor-pointer focus:shadow-none tokenbox">
          <button @click="genToken" class="btn btn-square btn-sm bg-base-100 border-none hover:bg-base-100 no-animation p-4 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path class="fill-current" d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/></svg>
          </button>
        </div>
      </div>

      <label class="label">
        <span class="label-text">Username</span>
      </label>
      <input type="text" placeholder="Minecraft Username/IGN" class="input input-bordered">
    </div>
  </div>
  <Unauthorized v-if="isNotLoggedIn" :_mode="mode" :name="name" />
</template>

<script>
import Unauthorized from "../components/Auth/Unauthorized.vue";
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

export default {
  name: "Profile",
  components: {
    Unauthorized,
  },
  data(){
    return {
      mode: this.$root.navbar.mode,
      profile: this.profile,
      username: this.username,
      token: this.token,
      skyhousePlus: this.skyhousePlus,
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
    document.title = "Profile - Skyhouse"
    const session_data = JSON.parse(window.localStorage.getItem("user_session_data"))
    if(session_data == null){
      return
    }
    this.profile = "https://cdn.discordapp.com/avatars/"+session_data["discord_info"].id+"/"+session_data["discord_info"].avatar+".webp?size=512";
    this.username = session_data["discord_info"].username
    this.skyhousePlus = session_data["privilege_level"] > 1;
    this.$nextTick(function() {
      fetch("https://api.skyblock.tools/api/auth/token/info",
          {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
              Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem("user_session_data")).access_token
            }
          }).then(x => x.json()).then(x => {
        this.token = '/shst '+x["mod_refresh_token"]+' site'
      })
    })
  },
  methods: {
    genToken(){
      this.token = "Please wait..."
      fetch("https://api.skyblock.tools/api/auth/token/reset",
          {
            method: 'DELETE',
            withCredentials: true,
            credentials: 'include',
            headers: {
              Authorization: 'Bearer ' + JSON.parse(window.localStorage.getItem("user_session_data")).access_token
            }
          }).then(x => x.json()).then(x => {
            this.token = '/shst '+x["mod_refresh_token"]+' site'
        createToast('Generated new mod token',
            {
              position: 'bottom-right',
              type: 'success',
              transition: 'zoom',
              showIcon: true
            })
      })
    },
    copyToken() {
      var TempText = document.createElement("input")
      TempText.value = this.token
      document.body.appendChild(TempText)
      TempText.select()

      document.execCommand("copy")
      document.body.removeChild(TempText)
      createToast('Copied to Clipboard',
          {
            position: 'bottom-right',
            type: 'success',
            transition: 'zoom',
            showIcon: true
          })
    },
    logout(){
      window.localStorage.removeItem("user_session_data")
      window.location.reload()
    }
  }
}
</script>

<style>
.profBox {
  padding: 30px;
}

.user-overview * {
  max-height: 150px !important;
}

.profCardActions {
  margin-top: 0 !important;
}

.tokenbox {
  border-right: 0;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  width: calc(100% - 40px);
}

.tokenboxcont {
  border: 1px solid hsla(251,100%,90%,0.2);
  border-radius: .5rem;
}
</style>