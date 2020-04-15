<template>
  <div id="app" class="f" v-bind:style="userStyle">
    <section id="sidePanel" class="f" v-if="sidePanel">
      <Navigation />
      <router-view id="router" class="p1 bbn btn"></router-view>
    </section>
    <div>
      <a class="h1 p3 mh3 l tdn" id="toggleSidePanel" @click="toggleSidePanel">≡</a>
    </div>
    <section id="content" class="p1">
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
      console.log('show: ', !this.sidePanel)
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
}
#toggleSidePanel {
  display: block;
  position: absolute;
  opacity: 0.5;
}
#toggleSidePanel:hover {
  color: white;
  opacity: 1;
}
#router {
  overflow-y: scroll;
  flex: 3;
  border: 1px solid #111;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8) inset;
  background: #222;
}
#content {
  flex: 8;
}
#sidePanel {
  flex: none;
  width: 30%;
  min-width: 500px;
  background: #333;
  height: 100vh;
  color: white;
}
</style>
