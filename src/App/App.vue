<template>
  <div>

    THis is app component

    <AppHeader />

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script>
  import AppHeader from './_common/AppHeader/AppHeader';

  export default {
    components: {
      AppHeader,
    },
  };
</script>
