<template>
  <div id="app" v-bind:style="userStyle">
    <section id="sidePanel" v-if="showSidePanel">
      <Navigation />
      <router-view id="router"></router-view>
    </section>
    <div>
      <a id="toggleSidePanel" @click="showSidePanel = !showSidePanel">➜</a>
    </div>
    <section id="content">
      <MainInput />
    </section>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import MainInput from './components/MainInput'

export default {
  name: 'App',
  components: {
    Navigation,
    MainInput
  },
  data: () => {
    return {
      showSidePanel: false
    }
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

#app {
  display: flex;
  height: 100vh;
}
#toggleSidePanel {
  padding: 15px;
  display: block;
  margin: 10px 0;
  position: absolute;
}
#toggleSidePanel:hover {
  color: white;
  background: linear-gradient(#333, #111);
  border-radius: 0 5px 5px 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.8);
  cursor: pointer;
}
#sidePanel {
  flex: 0;
}
#router {
  overflow-y: scroll;
  padding: 50px;
  border: 1px solid #111;
  border-top: none;
  border-bottom: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8) inset;
  background: #222;
}
#content {
  flex: auto;
  padding: 5%;
}
#sidePanel {
  flex: 1;
  display: flex;
  background: #333;
  height: 100vh;
  color: white;
}
</style>
