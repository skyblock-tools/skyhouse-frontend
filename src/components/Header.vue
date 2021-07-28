<template>
  <div class="navbar shadow-lg bg-base-300 text-neutral-content w-full" :class="classname" :style="styles">
    <div class="flex-none px-2 mx-2">
    <img class="cursor-pointer" onclick="window.location = '/'" src="../assets/logo.png"/>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch hidden lg:flex">
        <a class="btn btn-ghost btn-sm rounded-btn pagelink">
          Home
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn pagelink">
          Discord
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn pagelink">
          Flipper
        </a>
        <a class="btn btn-ghost btn-sm rounded-btn pagelink">
          Skyhouse+
        </a>
      </div>
    </div>
    <div>
      <div class="flex-1 lg:flex-none">
        <div class="form-control">
          <input type="text" placeholder="Item Lookup" class="input input-ghost">
        </div>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </div>

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
      <div class="avatar">
        <div class="rounded-full w-10 h-10 m-1 cursor-pointer">
          <img src="https://cdn.discordapp.com/avatars/822988756516077608/c1393ce78379e53018a0617a59a11838.webp?size=512">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        classname: "",
        styles: ""
      };
    },
    props: {
      cpage: String
    },
    mounted() {
      window.navbar = this
      this.$nextTick(function () {
        const selectedPage = parseInt(this.cpage);
        document.getElementsByClassName("pagelink")[selectedPage].style.backgroundColor = "rgb(66, 65, 81)"
      })
    }
  }
</script>