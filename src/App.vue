<template>
  <div id="app" v-bind:style="userStyle">
    <section class="sidePanel f" v-bind:class="{ hidePanel: !sidePanel }">
      <Navigation />
      <router-view id="router" class="p2 fa bbn btn"></router-view>
    </section>
    <div>
      <a class="h1 p3 mh3 l tdn" id="toggleSidePanel" @click="toggleSidePanel">≡</a>
    </div>
    <section id="content" class="p1 fa">
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
  methods: {
    toggleSidePanel() {
      this.$store.commit({
        type: 'setPreference',
        key: 'showSidePanel',
        value: !this.sidePanel
      })
    }
  },
  computed: {
    userStyle () {
      return {
        background: this.$store.getters.color('backgroundColor')
      }
    },
    sidePanel() {
      var panelFlag = this.$store.getters.userPreference('showSidePanel')
      if (!panelFlag) {
        return false
      }
      return true
    }
  }
}
</script>

<style>
@import './assets/style.css';

#app {
  height: 100vh;
  display: flex;
}
#toggleSidePanel {
  display: block;
  position: absolute;
  opacity: 0.5;
}
#toggleSidePanel:hover, #toggleSidePanel:active {
  color: white;
  opacity: 1;
}
#router {
  overflow-y: scroll;
  border: 1px solid #111;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8) inset;
  background: #222;
}
.sidePanel {
  transition: flex 0.2s;
  flex: 1 0 400px;
  max-width: 500px;
  overflow: hidden;
  background: #333;
  color: white;
}
.hidePanel {
  flex: 0;
}
</style>
