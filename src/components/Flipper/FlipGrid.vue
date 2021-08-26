<template>
  <div class="loader-container" v-if="!ready">
    <div class="lds-ripple"><div></div><div></div></div>
  </div>
  <Lore/>
  <div class="grid flip-grid text-center" v-if="ready">
    <Flip v-for="flip in flips" :name="flip.item_name" :rarity="flip.tier" :auction_id="flip.uuid" :price="flip.price.toLocaleString()" :resell_price="flip.resell_price.toLocaleString()" :profit="flip.profit.toLocaleString()" :house_quantity="flip.quantity.toLocaleString()" :pet_candies="flip.petCandyUsed" :ends="flip.end" :image="flip.head_url" :lore="flip.display_name+'\n'+flip.lore"/>
  </div>
</template>

<script>
import Flip from "./Flip.vue"
import Lore from ".././Lore.vue"
import * as engine from './engine.js'

export default {
  name: "FlipGrid",
  components: {Flip, Lore},
  data(){
    return {
      flips: [],
      ready: false,
    }
  },
  mounted() {
    this.$root.flipgrid = this;
    engine.start(this)
  }
}
</script>

<style>
.flip-grid {
  max-height: calc(100% - 66px);
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 30px;
  padding: 30px;
  overflow: auto;
}

.flip-grid::-webkit-scrollbar {
  width: 16px;
}

.flip-grid::-webkit-scrollbar-track {
  background: transparent;
  border-radius: .5rem;
}

.flip-grid::-webkit-scrollbar-thumb {
  background-color: #6d6c7a;
  border-radius: 10px;
  border: 5px solid rgb(48,47,61);
}

.loader-container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: 165px;
  transform: translate(-50%, -50%);
}


.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(213,204,255);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

</style>