<template>
  <div>
    <input
      type="color"
      @change="$emit('newColor', inputColor)"
      v-model="inputColor"
    >
    <label for="head"><slot>Color</slot></label>
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
  },
  beforeMount() {
    this.inputColor = this.color
  }
}
</script>

<style scoped>
input{
    border-radius: 100%;
    height: 60px;
    width: 60px;
    border: none;
    outline: none;
    appearance: none;
}

input::-webkit-color-swatch-wrapper {
    padding: 0;
}
input::-webkit-color-swatch {
    border: none;
    border-radius: 100%;
}
</style>