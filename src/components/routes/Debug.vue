<template>
  <div id="Debug">
    <h3>Debug</h3>
    <strong>Background color</strong>
    <ColorPicker v-bind:color="backgroundColor" @newColor="setBackground" />
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
    setBackground (color) {
      // set background color
      this.$store.commit('setBackground', color)
    }
  },
  computed: {
    backgroundColor() {
      return this.$store.getters.userPreferences.background
    }
  }
}
</script>

<style>

</style>