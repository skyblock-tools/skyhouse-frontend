<template>
  <div class="main-container">
    <div class="alignment-grid">
        <div class="info-grid">
            <div class="profile">
                <ProfileAvatar :profile="profile" />
            </div>
            <div class="discord-grid">
              <div class="card long-info bg-neutral">
                <h2 class="title-name">{{ username }}</h2>
              </div>
              <div class="card long-info bg-neutral">
                <div class="token-area">
                  <input disabled :placeholder="token" class="token-field input input-bordered allowSpecial">
                  <a @click="copyToClipboard" class="btn btn-ghost btn-sm rounded-btn pagelink" style="width: 9%; margin-left: 1%; margin: auto 0px;">
                    Copy
                  </a>
                  <a @click="regenToken" class="btn btn-ghost btn-sm rounded-btn pagelink" style="width: 19%; margin-left: 1%; margin: auto 0px;">
                    Regenerate
                  </a>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ProfileAvatar from "./ProfileAvatar.vue"
import { v4 as uuidv4 } from "uuid"
import { createToast } from 'mosha-vue-toastify'

export default {
  name: "ProfileGrid",
  components: {
    ProfileAvatar
  },
  data(){
    return {
      profile: this.profile,
      username: this.username,
      token: this.token,
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
  },
  methods: {
    copyToClipboard() {
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
    regenToken() {
      this.token = uuidv4().replace("-", "");
    },
  }
}
</script>

<style>
.main-container {
  width: 100%
}

.alignment-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: start;
}

.info-grid {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.discord-grid {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-content: start;
}

.profile {
  width: 40%;
}

.long-info {
  width: 90%;
  margin: 5% 5% 0% 5%;
  height: auto;
  padding: 1% 0px;
}

.title-name {
  font-size: 250%;
  text-align: center;
}

.token-area {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.card {
  align-content: center;
}

.token-field {
  width: 70%;
}
</style>