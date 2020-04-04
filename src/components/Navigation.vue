<template>
  <section id="Navigation" class="fs0">
    <nav>
      <label for="navToggle">+</label>
      <input type="checkbox" id="navToggle">
      <ul>
        <li><router-link to="/">Forside</router-link></li>
        <li><router-link to="/interpeter">Skrivetolk</router-link></li>
        <li><router-link to="/manage">Rediger autokorrektur</router-link></li>
        <li><router-link to="/debug">Debug</router-link></li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
#navToggle {
  display: none;
}
nav {
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
nav ul {
  transition: width 0.9s;
  margin-top: 50px;
  list-style: none;
  display: none;
}
nav a {
  color: #262626;
  display: block;
  text-decoration: none;
  padding: 20px 50px;
  width: 100%;
}
nav a:visited {
  color: #262626;
}
nav a:hover {
  background: rgba(0, 0, 0, 0.03);
}
#navToggle:checked ~ ul {
  display: block;
}
label {
  padding: 20px;
  font-size: 12pt;
  user-select: none;
  display: block;
}
label:hover {
  background: rgb(167, 167, 167);
}
</style>