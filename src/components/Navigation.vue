<template>
  <nav id="Navigation">
    <ul>
      <li><router-link to="/">⌂</router-link></li>
      <li><router-link to="/manage">✎</router-link></li>
      <li><router-link to="/debug">⚙︎</router-link></li>
      <li><router-link to="/session">⦷</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
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
a:hover {
  background: #444;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5) inset;
}
ul {
  list-style: none;
  width: 60px;
}
li .router-link-exact-active {
  /* background: #8A2387; 
background: -webkit-linear-gradient(to bottom right, #F27121, #E94057, #8A2387); 
background: linear-gradient(to bottom right, #F27121, #E94057, #8A2387);  */

  background: var(--user-highlight-color);

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7) inset;
}
</style>