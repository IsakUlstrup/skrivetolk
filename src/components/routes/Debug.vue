<template>
  <div id="Debug">
    <h1 class="header">Debug</h1>
    <br>
    <br>
    <ColorPicker v-bind:color="primaryColor" @newColor="setBackground">Background color</ColorPicker>
    <br>
    <a @click="resetLocalStorage"><strong>Nullstill localStorage</strong></a>
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
    setBackground (color) {
      // console.log('colorpicker: ', color)
      // set background color
      this.$store.commit({
        type: 'setPreference',
        key: 'primaryColor',
        value: color
      })
    },
    setTextColor (color) {
      // set background color
      // console.log(color)
      this.$store.commit('setText', color)
      // this.$store.commit('setBackground', color)
    }
  },
  computed: {
    primaryColor() {
      return this.$store.getters.color('primaryColor')
    }//,
    // textColor() {
    //   return this.$store.getters.userPreferences.style.text
    // }
  }
}
</script>

<style scoped>
#Debug {
  width: 100%;
}
</style>