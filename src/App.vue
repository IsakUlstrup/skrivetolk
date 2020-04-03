<template>
  <div id="app">
    <router-view class="router f100"></router-view>
    <Navigation />
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
  background: rgb(233, 251, 255);
}
#app {
  display: flex;
}
h3 {
  margin-bottom: 20px;
}
.router {
  padding: 5%;
  width: 90%;
}

/* global classes */
.input {
  margin: 10px 0;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #999;
  box-sizing: content-box;
  background: none;
}
.input:hover, input:focus {
  border: 1px solid #666;
  color: #666;
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
.w100 {
  width: 100%;
}
/* end global classes */
</style>
