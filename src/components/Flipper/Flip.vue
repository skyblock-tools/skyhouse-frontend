<template>
  <div @click="copyToClipboard" class="indicator flipIndicator">
    <div class="indicator-item badge badge-primary justAdded">New</div>
    <div class="flipCard card bg-neutral shadow-lg">
      <figure @mousemove="this.$root.Lore.updateLore" @mouseenter="this.$root.Lore.showLore = true; this.$root.Lore.lore = this.lore; this.$root.Lore.parseLore()" @mouseleave="this.$root.Lore.showLore = false">
        <img class="itemImage bg-base-300" :src="image">
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ name }}
          <div class="badge badge-outline" v-if="rarity == 'EPIC'" style="color: rgb(124,58,170)">EPIC</div>
          <div class="badge badge-outline" v-if="rarity == 'LEGENDARY'" style="color: rgb(245,158,11)">LEGENDARY</div>
          <div class="badge badge-outline" v-if="rarity == 'COMMON'" style="color: rgb(150,150,200)">COMMON</div>
          <div class="badge badge-outline" v-if="rarity == 'MYTHIC'" style="color: rgb(230,100,250)">MYTHIC</div>
          <div class="badge badge-outline" v-if="rarity == 'RARE'" style="color: rgb(50,80,255)">RARE</div>
          <div class="badge badge-outline" v-if="rarity == 'UNCOMMON'" style="color: rgb(50,255,80)">UNCOMMON</div>
          <div class="badge badge-outline" v-if="rarity == 'SUPREME'" style="color: rgb(190,60,60)">SUPREME</div>
          <div class="badge badge-outline" v-if="rarity == 'SPECIAL'" style="color: rgb(230,80,50)">SPECIAL</div>
          <div class="badge badge-outline" v-if="rarity == 'VERY_SPECIAL'" style="color: rgb(230,80,50)">VERY SPECIAL</div>
        </h2>
        <p><span class="opacity-75">Price: </span><span class="font-mono text-2sm">{{ price }}</span></p>
        <p><span class="opacity-75">Est. Resell Price: </span><span class="font-mono text-2sm">{{ resell_price }}</span></p>
        <p><span class="opacity-75">Profit: </span><span class="font-mono text-2sm">{{ profit }}</span></p>
        <p><span class="opacity-75">House Quantity: </span><span class="font-mono text-2sm">{{ house_quantity }}</span></p>
        <p v-if="pet_candies > -1"><span class="opacity-75">Pet Candies: </span><span class="font-mono text-2sm">{{ pet_candies }}/10</span></p>
        <p><span class="opacity-75">Time Remaining: </span>
          <vue-countdown :time="this.ends - Date.now()" :transform="transformSlotProps" v-slot="{ days, hours, minutes, seconds }">
          <span class="font-mono"><span v-if="hours > 0">{{ parseInt(hours) + (parseInt(days)*24) }}h</span><span v-if="minutes > 0">{{ minutes }}m</span><span
          >{{ seconds }}s</span></span>
          </vue-countdown>
        </p>
        <div class="justify-center card-actions bottom-0">
          <button class="copy-cmd btn btn-ghost">Copy Command</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import VueCountdown from '@chenfengyuan/vue-countdown';

export default {
  name: "Flip",
  methods: {
    copyToClipboard() {
      var TempText = document.createElement("input")
      TempText.value = "/viewauction "+this.auction_id
      document.body.appendChild(TempText)
      TempText.select()

      document.execCommand("copy")
      document.body.removeChild(TempText)
      createToast('Copied to Clipboard',
          {
            position: 'bottom-right',
            type: 'success',
            transition: 'zoom',
            showIcon: true
          })
    },
    transformSlotProps(props) {
      const formattedProps = {}

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value)
      });

      return formattedProps
    }
  },
  props: {
    name: String,
    image: String,
    rarity: String,
    auction_id: String,
    price: String,
    resell_price: String,
    profit: String,
    pet_candies: Number,
    house_quantity: String,
    ends: Number,
    lore: String,
  },
  components: {
    VueCountdown
  }
}
</script>

<style>
.justAdded {
  display: none !important;
}

.flipIndicator {
  width: auto !important;
  cursor: pointer;
}

.justAdded {
  top: 3px !important;
  right: 15px !important;
}

.flipCard {
  height: 400px;
  width: 100%;
  transition: 0.4s ease;
  overflow: visible !important;
}

.itemImage {
  object-fit: scale-down;
  max-height: 100px;
  margin: 0 auto 10px;
  padding: 10px 5px;
  border-radius: .5rem .5rem 0 0;
}

.flipCard .card-body {
  padding-top: 0 !important;
  padding-bottom: 10px !important;
}

.flipCard .card-body {
  text-align: left;
}

.flipCard .card-actions {
  flex-grow: 1;
}

.copy-cmd {
  position: absolute;
  bottom: 0;
  width: 85% !important;
  margin-bottom: 25px !important;
}

.flipIndicator:last-child {
  padding-bottom: 30px;
}
</style>