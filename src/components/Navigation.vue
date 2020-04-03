<template>
  <section id="Navigation" class="fs0">
    <label for="navToggle">Meny</label>
    <input type="checkbox" id="navToggle">
    <nav>
      <ul>
        <li><router-link to="/">Forside</router-link></li>
        <li><router-link to="/interpeter">Skrivetolk</router-link></li>
        <li><router-link to="/manage">Rediger autokorrektur</router-link></li>
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
  transition: width 0.3s;
  width: 350px;
  display: none;
  padding-top: 100px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
nav ul {
  list-style: none;
}
nav a {
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
#navToggle:checked ~ nav {
  display: block;
}
label {
  transition: 0.4s;
  opacity: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 30px;
  font-size: 12pt;
  user-select: none;
  background: white;
  border-radius: 0 0 0 5px;
}
label:hover {
  opacity: 100%;
}
</style>