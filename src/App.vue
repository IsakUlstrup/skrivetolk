<template>
  <div id="app" v-bind:style="userStyle">
    <router-view id="router" class="fa"></router-view>
    <Navigation />
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  computed: {
    userStyle () {
      var primaryColor = this.$store.getters.color('primaryColor')

      // console.log('app.vue primaryColor:', primaryColor)
      return {
        background: primaryColor
      }
      // var text = this.$store.getters.userPreferences.style.text
      // return {
      //   background: `rgb(${background.r}, ${background.g}, ${background.b})`,
      //   // 'border-color': `rgb(${text.r}, ${text.g}, ${text.b})`,
      //   color: `rgb(${text.r}, ${text.g}, ${text.b})`
      // }
    }
  }
}
</script>

<style>
@import './assets/style.css';

#app {
  display: flex;
}
#router {
  padding: 5%;
}
</style>
