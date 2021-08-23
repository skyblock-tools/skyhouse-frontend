<template>
  <Lore/>
    <div class="grid flip-grid text-center">
      <Flip v-for="flip in flips" :name="flip.item_name" :rarity="flip.tier" :auction_id="flip.uuid" :price="flip.price.toLocaleString()" :resell_price="(flip.price+flip.profit).toLocaleString()" :profit="flip.profit.toLocaleString()" :house_quantity="flip.quantity.toLocaleString()" :pet_candies="flip.petCandyUsed" :ends="flip.end" :image="'https://hypixel-skyblock-item-images.pages.dev/'+flip.item_image" :lore="flip.lore"/>
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
      flips: []
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
</style>