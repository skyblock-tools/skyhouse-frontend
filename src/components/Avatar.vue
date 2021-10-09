<template>
  <div
    class="rounded-full w-10 h-10 m-1 cursor-pointer completeAvatar select-none"
  >
    <a class="avatarImageLink" href="#">
      <img class="avatarImage" :src="pfpSrc" />
    </a>
    <ul
      class="
        -ml-32
        menu
        py-3
        shadow-lg
        bg-neutral
        rounded-box
        avatarMenu
        select-none
      "
    >
      <li class="menu-title">
        <span> Account </span>
      </li>
      <li>
        <router-link to="/skyhouse/profile"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            class="inline-block w-5 h-5 mr-2 stroke-current"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            /></svg
          >Profile</router-link
        >
      </li>
      <li class="hover hover:text-error">
        <a @click="logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            class="inline-block w-5 h-5 mr-2 stroke-current"
          >
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            />
          </svg>
          Log Out
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Avatar.vue",
  props: {
    pfpSrc: String,
  },
  methods: {
    logout: function () {
      window.localStorage.removeItem("user_session_data");
      window.location.reload();
    },
  },
};
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
  width: 160px;
  display: none !important;
}
</style>
