<template>
  <div>
    background: {{userStyleStore.backgroundColor}}
    <br>
    text: {{userStyleStore.textColor}}
    <br>
    highlight: {{userStyleStore.highlightColor}}
    <br>
    text size: {{userStyleStore.textSize}}
  </div>
</template>

<script>
export default {
  name: 'GlobalStyle',
  computed: {
    userStyleStore() {
      return {
        backgroundColor: this.$store.getters.userPreference('backgroundColor') || '#ffffff',
        textColor: this.$store.getters.userPreference('textColor') || '#000000',
        highlightColor: this.$store.getters.userPreference('highlightColor') || '#ffffff',
        textSize: this.$store.getters.userPreference('textSize') || '14px'
      }
      
    }
  },
  watch: {
    userStyleStore: (newStyle) => {
      console.log('style changed: ', newStyle)
      // document.documentElement.style.setProperty('--user-background-color', newStyle.backgroundColor)
    }
  }
}
</script>

<style>

</style>