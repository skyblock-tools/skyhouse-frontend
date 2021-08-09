<template>
<div class="lore-box" :style="'top: '+top+'px; left: '+left+'px; display: '+(showLore ? 'inline-block': 'none')">
  <div class="lore-body">
    This is an awesome lore
    <br />
    Yes it really is
  </div>
</div>
</template>

<script>
export default {
  name: "Lore",
  data() {
    return {
      top: 0,
      left: 0,
      showLore: false,
      direction: false,
    }
  },
  methods: {
    checkOverflow() {
      return this.$el.offsetWidth + this.left + (this.direction ? this.$el.offsetWidth + 40: 0) >= window.innerWidth
    },
    updateLore(event){
      this.left = event.clientX + (this.direction ? -20 - this.$el.offsetWidth : 20)
      this.top = event.clientY - 20
      this.direction = this.checkOverflow()
    }
  },
  mounted() {
    this.$root.Lore = this
  }
}
</script>

<style>
.lore-box {
  background-color: rgba(16, 1, 16, 0.80);
  position: fixed;
  z-index: 10000;
  border-radius: .2rem;
  pointer-events: none;
  min-width: 250px;
}

.lore-body {
  border: 2px solid rgb(37, 1, 90);
  margin: 2px;
  border-radius: .2rem;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  padding: 5px;
}
</style>