<template>
  <div id="app">
    <img alt="WarpJS logo" class="logo" src="./assets/logo.svg" />
    <h1>Vue.js Sample with WarpJS</h1>
    <Users />
  </div>
</template>

<script>
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    Users
  }
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
  background-color: #000;
  border-radius: 50%;
  padding: 15px;
  width: 200px;
  height: 200px;
}
</style>
