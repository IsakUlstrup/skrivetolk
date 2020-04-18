<template>
  <div id="Debug">
    <!-- <h1 class="h1">Innstillinger</h1> -->
    <ColorPicker class="mv2" v-bind:color="backgroundColor" @newColor="setBackgroundColor">Bakgrunnsfarge</ColorPicker>

    <ColorPicker class="mv2" v-bind:color="textColor" @newColor="setTextColor">Tekstfarge</ColorPicker>

    <div class="mv2">
      Tekststørrelse: {{textSize}}
      <br>
      <br>
      <input @input="setTextSize" type="range" name="textSize" min="8" max="100">
    </div>

    <div id="reset">
      <a id="reset" class="l" @click="resetLocalStorage"><strong>Nullstill localStorage</strong></a>
    </div>
  </div>
</template>

<script>
import ColorPicker from '../ColorPicker'
export default {
  name: 'Debug',
  components: {
    ColorPicker
  },
  methods: {
    resetLocalStorage () {
      localStorage.setItem('store', JSON.stringify(''))
    },
    setBackgroundColor (color) {
      // set background color
      this.$store.commit({
        type: 'setPreference',
        key: 'backgroundColor',
        value: color
      })
    },
    setTextColor (color) {
      this.$store.commit({
        type: 'setPreference',
        key: 'textColor',
        value: color
      })
    },
    setTextSize(event) {
      // console.log(event.srcElement.value)
      this.$store.commit({
        type: 'setPreference',
        key: 'textSize',
        value: event.srcElement.value + 'px'
      })
    }
  },
  computed: {
    backgroundColor() {
      return this.$store.getters.color('backgroundColor')
    },
    textColor() {
      return this.$store.getters.color('textColor')
    },
    textSize() {
      return this.$store.getters.userPreference('textSize')
    }
  }
}
</script>

<style scoped>
#reset {
  margin-top: 200px;
}
</style>