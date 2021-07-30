<template>
  <div class="sidebar bg-neutral flex flex-col h-screen shadow-lg text-center">
    sidebar (this will have options- max profit, min price, filters, sorts)
    <div class="toggleHide bg-base-300 shadow-lg" v-on:click="hideSidebar">
      Hide
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    hideSidebar: function (){
      if(document.getElementsByClassName('toggleHide')[0].innerText == 'Hide'){
        document.getElementsByClassName('sidebar')[0].classList.add('slideOut')
        document.getElementsByClassName('toggleHide')[0].innerText = 'Show'
        document.getElementsByClassName('toggleHide')[0].style.marginLeft = '303px';
      }else {
        document.getElementsByClassName('sidebar')[0].classList.remove('slideOut')
        document.getElementsByClassName('sidebar')[0].classList.add('slideIn')
        document.getElementsByClassName('toggleHide')[0].innerText = 'Hide'
        document.getElementsByClassName('toggleHide')[0].style.marginLeft = '305px';
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
  margin-left: 305px;
  margin-bottom: 40px;
  font-size: .8rem;
  border-radius: 0 0 0.5rem 0.5rem;
  cursor: pointer;
  z-index: 2;
  color: rgba(255,255,255,.75);
  padding: 0 3px 2px;
  transition: .1s ease;
  transform: rotate(270deg);
  width: 70px;
}

.slideIn {
  animation: 0.3s slideIn;

}

.slideOut {
  animation: 0.3s slideOut;
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