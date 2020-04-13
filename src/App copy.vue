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
      return {
        background: this.$store.getters.color('primaryColor')
      }
    }
  }
}
</script>

<style>
@import './assets/style.css';

#router {
  padding: 5%;
}
</style>
