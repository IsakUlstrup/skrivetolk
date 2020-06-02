<template>
  <nav id="Navigation">
    <ul class="lsn ct">
      <li><a class="l tdn" @click="hideSidePanel">≡</a></li>
      <li><router-link to="/home">⌂</router-link></li>
      <li><router-link to="/manage">✎</router-link></li>
      <li><router-link to="/debug">⚙︎</router-link></li>
      <li><router-link to="/session">⦷</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    hideSidePanel() {
      this.$store.commit({
        type: 'setPreference',
        key: 'showSidePanel',
        value: false
      })
    }
  }
}
</script>

<style scoped>
a {
  color: white;
  padding: 12px 20px;
  display: block;
  text-decoration: none;
  border-bottom: 1px solid #222;
  font-size: 22pt;
}

@media only screen and (max-width: 600px) {
  a {
    font-size: 18pt;
    padding: 10px 18px;
  }
}

a:hover {
  background: #444;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5) inset;
}
li .router-link-active {
  background: var(--user-highlight-color);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7) inset;
}
</style>