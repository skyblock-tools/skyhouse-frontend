<template>
  <div class="sidebar bg-neutral flex flex-col h-screen shadow-lg text-center ">
    <div class="p-6 card bordered flip-type">
      <span class="text-xs text-left mb-1 setting-desc">Flip Type</span>
      <div class="tabs">
        <a class="tab tab-bordered text-xs">Auction to BIN</a>
        <a class="tab tab-bordered text-xs tab-active">BIN to BIN</a>
        <a class="tab tab-bordered text-xs">Craftflips</a>
      </div>

    </div>
    <div class="p-6 card bordered minprofmaxprice">
      <span class="text-xs text-left mb-2 setting-desc">Min Profit & Max Price</span>
      <div class="form-control m-1 mb-2">
        <input pattern="[0-9MKmk]*" type="text" placeholder="Minimum Profit (ex. 1m)" class="input input-bordered allowSpecial">
      </div>
      <div class="form-control m-1 mb-2">
        <input pattern="[0-9MKmk]*" type="text" placeholder="Maximum Price (ex. 10m)" class="input input-bordered allowSpecial">
      </div>
    </div>
    <div class="p-6 card bordered">
      <span class="text-xs text-left mb-2 setting-desc">Filter & Sort</span>

    </div>
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
  },
  mounted() {
    this.$nextTick(function () {
      let prevVal = "";
      document.getElementsByClassName("allowSpecial")[0].addEventListener('input', function (e) {
        if (this.checkValidity()) {
          prevVal = this.value;
        } else {
          this.value = prevVal;
        }
      });
      let prevVal1 = "";
      document.getElementsByClassName("allowSpecial")[1].addEventListener('input', function (e) {
        if (this.checkValidity()) {
          prevVal1 = this.value;
        } else {
          this.value = prevVal1;
        }
      });
    });
  }
}
</script>

<style>
.sidebar {
  width: 330px;
  max-height: calc(100% - 66px);
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
  from {margin-left: 0}
  to {margin-left: -330px}
}

@keyframes slideIn {
  from {margin-left: -330px}
  to {margin-left: 0}
}

.setting-desc {
  color: gray;
}

.flip-type {
  max-height: 80px;
}

.minprofmaxprice {
  max-height: 170px;
}
</style>