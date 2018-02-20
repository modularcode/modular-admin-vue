<template>
  <div class="Dashboard">
    <img src="../_assets/logo.png">

    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from './Main/Main.vue';

export default {
  name: "Dashboard",
  components: {
    Main,
  }
};
</script>
