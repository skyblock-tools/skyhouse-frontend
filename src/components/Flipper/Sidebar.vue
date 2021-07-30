<template>
  <div class="sidebar bg-neutral flex flex-col h-screen shadow-lg text-center">
    sidebar (this will have options- max profit, min price, filters, sorts)
    <div class="toggleHide bg-base-300 shadow-lg" v-on:click="hideSidebar">
      Hide Options
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    hideSidebar: function (){
      if(document.getElementsByClassName('toggleHide')[0].innerText == 'Hide Options'){
        document.getElementsByClassName('sidebar')[0].classList.add('slideOut')
        document.getElementsByClassName('toggleHide')[0].innerText = 'Show Options'
      }else {
        document.getElementsByClassName('sidebar')[0].classList.remove('slideOut')
        document.getElementsByClassName('sidebar')[0].classList.add('slideIn')
        document.getElementsByClassName('toggleHide')[0].innerText = 'Hide Options'
      }
    }
  }
}
</script>

<style>
.sidebar {
  width: 330px;
  max-height: calc(100% - 122px);
  z-index: 2;
}

.toggleHide {
  position: absolute;
  bottom: 0;
  margin-left: 299px;
  margin-bottom: 40px;
  font-size: .8rem;
  border-radius: 0 0 0.5rem 0.5rem;
  cursor: pointer;
  z-index: 2;
  padding: 0 3px;
  color: rgba(255,255,255,.75);
  transition: .1s ease;
  transform: translateZ(1px) rotate(270deg);
}

.slideIn {
  animation: 0.4s slideIn;
  animation-timing-function: ease-in;
}

.slideOut {
  animation: 0.4s slideOut;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}

@keyframes slideOut {
  from {margin-left: 0;}
  to {margin-left: -330px;}
}

@keyframes slideIn {
  from {margin-left: -330px;}
  to {margin-left: 0;}
}
</style>