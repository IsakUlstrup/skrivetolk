<template>
  <div id="app" v-bind:style="userStyle">
    <section class="sidePanel f" v-bind:class="{ hidePanel: !sidePanel }">
      <Navigation />
      <router-view id="router" class="p2 fa bbn btn"></router-view>
      <div>
        <a class="h1 p3 mh3 l tdn" id="toggleSidePanel" @click="toggleSidePanel">≡</a>
      </div>
    </section>
    <section id="content" class="p1" v-bind:class="{ moveRight: sidePanel }">
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
        background: this.$store.getters.userPreference('backgroundColor') || 'white'
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
#toggleSidePanel:hover, #toggleSidePanel:active {
  color: white;
  opacity: 1;
}
#router {
  overflow-y: scroll;
  border: 1px solid #111;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8) inset;
  background: #222;
  border-top: none;
  border-bottom: none;
}
#content {
  transition: all 0.2s ease-out;
}
.sidePanel {
  /* box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8); */
  transition: left 0.2s;
  /* flex: 1 0 400px; */
  min-width: 300px;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 30%;
  background: #333;
  color: white;
}
.hidePanel {
  left: -30%;
  min-width: 0;
}
.moveRight {
  margin-left: 30%;
}
.l {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}
</style>
