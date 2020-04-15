<template>
  <div class="gradient" id="GradientBorderPanel" :style="gradient">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GradientBorderPanel',
  props: {
    color1: Object,
    color2: Object,
    borderSize: String
  },
  computed: {
    gradient() {
      return {
        '--gradient': `linear-gradient(to bottom right, rgb(${this.color1.r}, ${this.color1.g}, ${this.color1.b}), rgb(${this.color2.r}, ${this.color2.g}, ${this.color2.b}))`,
        '--padding': this.borderSize
      }
    }
  }
}
</script>

<style>
.gradient {
  /* background-image: linear-gradient(to bottom right, var(--color1), var(--color2)); */
  background-image: var(--gradient);
  padding: var(--padding);
  border-radius: 8px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
}
.gradient div {
  border-radius: 4px;
  background: #232323;
  color: white;
  padding: 8%;
}
</style>