<template>
  <form id="ColorPicker" >
    r: {{color.r}}<br>
    <input v-model="color.r" @change="$emit('newColor', color)" type="range" min="0" max="255"><br>
    g: {{color.g}}<br>
    <input v-model="color.g" @change="$emit('newColor', color)" type="range" min="0" max="255"><br>
    b: {{color.b}}<br>
    <input v-model="color.b" @change="$emit('newColor', color)" type="range" min="0" max="255"><br>
  </form>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    color: Object
  }
}
</script>

<style scoped>
</style>