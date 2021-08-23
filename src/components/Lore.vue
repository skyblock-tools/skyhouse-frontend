<template>
<div class="lore-box" :style="'top: '+top+'px; left: '+left+'px; display: '+(showLore ? 'inline-block': 'none')">
  <div class="lore-body" v-html="lore">
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
      lore: "lore",
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
    },
    parseLore() {
      const lines = this.lore.split("\n")
      this.lore = ""
      for(let lineIndex in lines){
        let tokens = lines[lineIndex].split("§")
        for(let tokenIndex in tokens){
          let token = tokens[tokenIndex]
          let colorCode = token.charAt(0)
          if(colorCode.trim() === ""){
            continue
          }
          token = token.substring(1)
          switch(colorCode) {
            case '4':
              colorCode = "AA0000"
              break
            case 'c':
              colorCode = "FF5555"
              break
            case '6':
              colorCode = "FFAA00"
              break
            case 'e':
              colorCode = "FFFF55"
              break
            case '2':
              colorCode = "00AA00"
              break
            case 'a':
              colorCode = "55FF55"
              break
            case 'b':
              colorCode = "55FFFF"
              break
            case '3':
              colorCode = "00AAAA"
              break
            case '1':
              colorCode = "0000AA"
              break
            case '9':
              colorCode = "5555FF"
              break
            case 'd':
              colorCode = "FF55FF"
              break
            case '5':
              colorCode = "AA00AA"
              break
            case 'f':
              colorCode = "FFFFFF"
              break
            case '7':
              colorCode = "AAAAAA"
              break
            case '8':
              colorCode = "555555"
              break
            case '0':
              colorCode = "000000"
              break
            default:
              colorCode = "FFFFFF"
              break
          }
          this.lore += "<span style=\"color: #"+colorCode+"\">"+token+"</span>";
        }
        this.lore += "\n"
      }
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
  white-space: pre-wrap;
}
</style>