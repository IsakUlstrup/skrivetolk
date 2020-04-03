<template>
  <div id="app">
    <router-view class="router section f100"></router-view>
    <Navigation class="section" />
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: Helvetica, Arial, sans-serif;
  background: linear-gradient(170deg, #e3ffe7 0%, #d9e7ff 100%) no-repeat center center fixed;
  background-size: cover;
}
#app {
  display: flex;
  align-items: flex-start;
}
h3 {
  margin-bottom: 20px;
}
.section {
  flex-grow: 1;
}
.router {
  padding: 5%;
  width: 90%;
}
/* global classes */
.input {
  margin: 10px 0;
  padding: 2%;
  border: 1px solid #eee;
  box-sizing: content-box;
}
.fl {
  float: left;
}
.rounded {
  border-radius: 5px;
}
.shadow {
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
}
.f100 {
  flex: 100%;
}
.fg2 {
  flex-grow: 2;
}
.fs0 {
  flex-shrink: 0;
}
/* end global classes */
</style>
