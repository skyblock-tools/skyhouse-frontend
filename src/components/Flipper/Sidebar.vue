<template>
  <div class="sidebar bg-neutral flex flex-col h-screen shadow-lg text-center">
    <div class="overflow-auto opts-cont">
      <div class="p-6 pb-0" v-if="!isPlus">
        <div class="alert alert-warning">
          <div class="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <label>500k+ Flips are restricted to members with Skyhouse+</label>
          </div>
        </div>
      </div>
      <div class="p-6 pb-0 card bordered flip-type">
        <span class="text-xs text-left mb-1 setting-desc">Flip Type</span>
        <div class="tabs ml-auto mr-auto">
          <a class="tab tab-bordered text-xs" @click="flipType = 0" :class="flipType == 0 ? 'tab-active' : null">Auction to BIN</a>
          <a class="tab tab-bordered text-xs" @click="flipType = 1" :class="flipType == 1 ? 'tab-active' : null">BIN to BIN</a>
          <a class="tab tab-bordered text-xs pointer-events-none" @click="flipType = 2" :class="flipType == 2 ? 'tab-active' : null">Soon™</a>
        </div>

      </div>
      <div class="p-6 pb-0 card bordered minprofmaxprice">
        <span class="text-xs text-left mb-2 setting-desc">Min Profit & Max Price</span>
        <div class="form-control m-1 mb-2">
          <input pattern="[0-9MKmk\.]*" type="text" placeholder="Minimum Profit (ex. 1m)" class="input input-bordered allowSpecial">
        </div>
        <div class="form-control m-1 mb-2">
          <input pattern="[0-9MKmk\.]*" type="text" placeholder="Maximum Price (ex. 10m)" class="input input-bordered allowSpecial">
        </div>
      </div>
      <div class="p-6 pb-0 card bordered filters" :style="isPlus ? false : 'cursor: not-allowed !important;'">
        <span class="text-xs text-left mb-2 setting-desc">Filters <svg v-if="!isPlus" class="inline fill-current w-5 h-3.5 -mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z"/></svg></span>
        <div class="filters-blocked-msg" v-if="!isPlus">Skyhouse+ Required</div>
        <div class="card bordered" :style="isPlus ? false : 'filter: blur(2px);'">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Hide Cakesouls</span>
              <input type="checkbox" :disabled="!isPlus" checked class="toggle">
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Hide Skins</span>
              <input type="checkbox" :disabled="!isPlus" checked class="toggle">
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Hide Recombobulated</span>
              <input type="checkbox" :disabled="!isPlus" class="toggle">
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Hide Pets</span>
              <input type="checkbox" :disabled="!isPlus" class="toggle">
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Hide Enchanted Books</span>
              <input type="checkbox" :disabled="!isPlus" class="toggle">
            </label>
          </div>
        </div>
      </div>
      <div class="p-6 pb-0 card bordered sort">
        <span class="text-xs text-left mb-2 setting-desc">Sort</span>
        <select class="select select-bordered w-full max-w-xs">
          <option selected="">Higher profit</option>
          <option>Higher % profit</option>
          <option>Lower price</option>
          <option>Higher house quantity</option>
        </select>
      </div>
    </div>

    <!--    <div class="toggleHide bg-base-300 shadow-lg" v-on:click="hideSidebar">-->
    <!--      Hide-->
    <!--    </div>-->
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
    },
    getItemFilterNum: function(removeSkins, removePets, removeRecomb, removeCakeSouls, removeEnchantedBooks) {
      let num = 0
      if(removeSkins){
        num |= Math.pow(2,0)
      }
      if(removePets){
        num |= Math.pow(2,1)
      }
      if(removeRecomb){
        num |= Math.pow(2,2)
      }
      if(removeCakeSouls){
        num |= Math.pow(2,3)
      }
      if(removeEnchantedBooks){
        num |= Math.pow(2,4)
      }
      return num
    }
  },
  data(){
    return {
      isPlus: JSON.parse(window.localStorage.getItem('user_session_data')).privilege_level > 1,
      flipType: 1,
    }
  },
  mounted() {
    this.$root.Sidebar = this
    this.$nextTick(function () {
      let prevVal = "";
      const input = document.getElementsByClassName("allowSpecial")[0];
      input.addEventListener('input', () => {
        if (input.checkValidity()) {
          prevVal = input.value;
        } else {
          input.value = prevVal;
        }
        let num = parseFloat(input.value.replace(/[^\d.-]/g,''));
        if(input.value.includes("m")){
          num = num * 1000000
        } else if(input.value.includes("k")){
          num = num * 1000
        }
        this.$root.minProf = num;
      });
      let prevVal1 = "";
      const input1 = document.getElementsByClassName("allowSpecial")[1];
      input1.addEventListener('input', () => {
        if (input1.checkValidity()) {
          prevVal1 = input1.value;
        } else {
          input1.value = prevVal1;
        }
        let num = parseFloat(input1.value.replace(/[^\d.-]/g,''));
        if(input1.value.includes("m")){
          num = num * 1000000
        } else if(input1.value.includes("k")){
          num = num * 1000
        }
        this.$root.maxPrice = num;
      });
    });
  }
}
</script>

<style>
.sidebar {
  width: 350px;
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
  height: 80px;
}

.minprofmaxprice {
  height: 170px;
}

.filters {
  height: 250px;
}

.sort {
  height: 120px;
}

.filters-blocked-msg {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000000;
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: 500;
  color: white;
}

.opts-cont::-webkit-scrollbar {
  width: 16px;
}

.opts-cont::-webkit-scrollbar-track {
  background: transparent;
  border-radius: .5rem;
}

.opts-cont::-webkit-scrollbar-thumb {
  background-color: #6d6c7a;
  border-radius: 10px;
  border: 5px solid rgb(34,33,44);
}
</style>