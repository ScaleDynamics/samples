<template>
  <div id="app">
    <header>
      <img class="logo" src="./assets/logo.png" alt="ScaleDynamics" />
    </header>
    <h1>Vue.js Sample with WarpJS</h1>
    <Users />
  </div>
</template>

<script>
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    Users,
  },
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: #f3f3f3;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding-bottom: 100px;
  margin-top: 8px;
}

.logo {
  padding: 10px;
  height: 150px;
}

header {
  box-shadow: 0px 10px 10px 1px #ddd;
  margin-bottom: 50px;
}
</style>
