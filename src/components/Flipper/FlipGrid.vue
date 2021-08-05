<template>
  <div class="grid flip-grid text-center">
    <Flip v-for="flip in flips" :name="flip.item_name" :rarity="flip.tier" :auction_id="flip.uuid" :price="flip.price.toLocaleString()" :resell_price="flip.sell_price.toLocaleString()" :profit="flip.profit.toLocaleString()" :house_quantity="flip.houseQuantity.toLocaleString()" :pet_candies="flip.petCandyUsed" :ends="flip.end"/>
  </div>
</template>

<script>
import Flip from "./Flip.vue"
import * as engine from './engine.js'

export default {
  name: "FlipGrid",
  components: {Flip},
  data(){
    return {
      flips: []
    }
  },
  mounted() {
    engine.start(this)
  }
}
</script>

<style>
.flip-grid {
  max-height: calc(100% - 66px);
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  overflow: auto;
  gap: 30px;
  padding: 30px 30px;
}
</style>