<template>
  <nav id="Navigation">
    <ul>
      <li><router-link to="/home">F</router-link></li>
      <li><router-link to="/manage">R</router-link></li>
      <li><router-link to="/debug">D</router-link></li>
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
  width:auto;
  height:auto;
  padding: 20px;
  display: block;
  text-decoration: none;
  border-bottom: 1px solid #222;
}
a:hover {
  background: #444;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5) inset;
}
ul {
  list-style: none;
  width: 50px;
}
li .router-link-active {
  background: #007991;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #78ffd6, #007991);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #78ffd6, #007991); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  box-shadow: 0 0 15px rgba(0, 0, 0, 8) inset;
}
</style>