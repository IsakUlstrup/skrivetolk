<template>
  <div>
    <input type="color"
           @change="$emit('newColor', inputColor)"
           v-model="inputColor">
    <label for="head">Test</label>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    color: String
  },
  data: () => {
    return {
      inputColor: null
    }
  }
}
</script>

<style scoped>
</style>