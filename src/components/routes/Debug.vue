<template>
  <div id="Debug">
    <h1 class="h1">Innstillinger</h1>
    <ColorPicker class="setting" v-bind:color="backgroundColor" @newColor="setBackgroundColor">Background color</ColorPicker>

    <ColorPicker class="setting" v-bind:color="textColor" @newColor="setTextColor">Text color</ColorPicker>

    <div class="setting">
      Text size <br>
      {{textSize}}
      <input @input="setTextSize" type="range" name="textSize" min="8" max="72">
    </div>

    <div id="reset">
      <a id="reset" @click="resetLocalStorage"><strong>Nullstill localStorage</strong></a>
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
.setting {
  margin: 30px 0;
}
</style>