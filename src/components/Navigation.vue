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
  background: #131313;
}
ul {
  list-style: none;
  width: 50px;
}
li .router-link-active {
  background: #222;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8) inset;
}
</style>