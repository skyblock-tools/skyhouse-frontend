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
            <button v-if="skyhousePlus" class="btn btn-primary">Sign Out</button>
            <button v-if="!skyhousePlus" class="btn btn-ghost">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Unauthorized v-if="isNotLoggedIn" :_mode="mode" :name="name" />
</template>

<script>
import Unauthorized from "../components/Auth/Unauthorized.vue";
import {v4 as uuidv4} from "uuid";

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
    const session_data = JSON.parse(window.localStorage.getItem("user_session_data"))
    if(session_data == null){
      return
    }
    this.profile = "https://cdn.discordapp.com/avatars/"+session_data["discord_info"].id+"/"+session_data["discord_info"].avatar+".webp?size=512";
    this.username = session_data["discord_info"].username
    this.token = uuidv4().replace("-", "");
    this.skyhousePlus = session_data["privilege_level"] > 1;
  },
  methods: {
    regenToken() {
      this.token = uuidv4().replace("-", "");
    },
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
</style>