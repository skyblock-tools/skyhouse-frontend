<template>
  <div class="rounded-full w-10 h-10 m-1 cursor-pointer completeAvatar">
    <a class="avatarImageLink" href="#">
      <img class="avatarImage" :src="pfpSrc">
    </a>
    <ul class="menu py-3 shadow-lg bg-neutral rounded-box avatarMenu">
      <li class="menu-title">
      <span>
            Account
          </span>
      </li>
      <li>
        <router-link to="/skyhouse/profile">Profile</router-link>
        <a @click="logout">
          Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Avatar.vue",
  props: {
    pfpSrc: String
  },
  methods: {
    logout: function(){
      window.localStorage.removeItem("user_session_data")
      window.location.reload()
    }
  }
}
</script>

<style>
.avatarImageLink:focus + .avatarMenu {
  display: inline-block !important;
}

.avatarMenu:hover {
  display: inline-block !important;
}

.avatarMenu {
  position: absolute;
  top: 50px;
  left: -200px;
  width: 255px;
  display: none !important;
}
</style>