<template>
  <div id="main">
    <img src="./_assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'modular-admin',
};
</script>

<style src="./main.scss"></style>

<style>
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: var(--colorPrimary);
}
</style>
